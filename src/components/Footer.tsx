import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { getAnalytics, logEvent } from "firebase/analytics";
import { app } from "../firebase";
import { useEffect } from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { theme } = useTheme();

    const analytics = getAnalytics(app);

    useEffect(() => {
        const footerEl = document.getElementById("footer");
        if (!footerEl) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        logEvent(analytics, "section_view", { section: "Footer" });
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(footerEl);
        return () => observer.disconnect();
    }, [analytics]);

    const handleSocialClick = (platform: string) => {
        logEvent(analytics, "social_link_click", { platform });
    };

    return (
        <footer
            id="footer"
            aria-label="Site footer with copyright and social links"
            className={`w-full py-6 transition-colors duration-300 border-t ${theme === "dark"
                    ? "bg-gray-900 text-gray-300 border-gray-700"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                <div>
                    © Sushmitha S {currentYear}. All Rights Reserved.
                </div>
                <div className="flex gap-3">
                    <a
                        href="https://github.com/Sushmitha-SK"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Sushmitha S GitHub profile (opens in a new tab)"
                        className={`transition transform hover:scale-110 duration-300 focus:outline-none  ${theme === "dark" ? "hover:opacity-75" : "hover:opacity-75"
                            }`}
                        onClick={() => handleSocialClick("GitHub")}
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/sushmithass/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Sushmitha S LinkedIn profile (opens in a new tab)"
                        className={`transition transform hover:scale-110 duration-300 focus:outline-none  ${theme === "dark" ? "hover:opacity-75" : "hover:opacity-75"
                            }`}
                        onClick={() => handleSocialClick("LinkedIn")}
                    >
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
