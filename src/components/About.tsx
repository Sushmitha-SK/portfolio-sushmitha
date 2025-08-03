import { GoDownload } from "react-icons/go";
import { assets } from "../assets/assets";
import { useTheme } from "../context/ThemeContext";
import { getAnalytics, logEvent } from "firebase/analytics";
import { app } from "../firebase";
import { useEffect } from "react";

const About = () => {
    const { theme } = useTheme();
    const analytics = getAnalytics(app);

    useEffect(() => {
        const section = document.getElementById("about");
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        logEvent(analytics, "section_view", { section: "About" });
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, [analytics]);

    return (
        <section
            id="about"
            aria-labelledby="about-title"
            className={`py-24 relative mt-20 transition-colors duration-300 ${theme === "dark"
                ? "bg-darkModeGray"
                : "bg-gradient-to-br from-white via-blue-50 to-indigo-50"
                }`}
        >
            <div className="w-full max-w-7xl px-4 md:px-6 lg:px-8 mx-auto">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-14 items-center">
                    <div className="flex justify-center lg:justify-start order-1 lg:order-1">
                        <div className="relative w-full max-w-md">
                            <div
                                className={`rounded-3xl overflow-hidden border ${theme === "dark" ? "border-gray-700" : "border-gray-100"
                                    }`}
                            >
                                <img
                                    className="w-full h-full object-cover"
                                    src={assets.aboutme}
                                    alt="Sushmitha working on frontend development and QA testing projects"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 order-2 lg:order-2">
                        <div className="space-y-4">
                            <h6
                                className={`text-sm font-semibold uppercase lg:text-start text-center tracking-wide ${theme === "dark" ? "text-blue-400" : "text-darkBlue"
                                    }`}
                            >
                                About Me
                            </h6>
                            <h2
                                id="about-title"
                                className={`text-4xl font-bold font-manrope leading-snug lg:text-start text-center ${theme === "dark" ? "text-white" : "text-charcoalBlack"
                                    }`}
                            >
                                I Design and Develop{" "}
                                <span
                                    className={
                                        theme === "dark" ? "text-blue-400" : "text-darkBlue"
                                    }
                                >
                                    Experiences
                                </span>{" "}
                                that Make People's Lives Simple
                            </h2>
                            <p
                                className={`text-md leading-relaxed lg:text-start text-center ${theme === "dark" ? "text-gray-300" : "text-gray-600"
                                    }`}
                            >
                                Front-End Developer blending 1 year and 9 months of QA expertise with modern web technologies like React, Next.js, and Tailwind CSS. Passionate about crafting responsive, high-performance interfaces that deliver seamless user experiences. Dedicated to continuous learning and innovation in building scalable, user-focused solutions.
                            </p>
                        </div>

                        <div className="flex justify-center lg:justify-start">
                            <a
                                href="/SushmithaS_Resume.pdf"
                                download
                                aria-label="Download Sushmitha's CV as a PDF"
                                onClick={() =>
                                    logEvent(analytics, "cv_download", {
                                        file: "SushmithaS_Resume.pdf",
                                    })
                                }
                                className="flex items-center gap-2 px-6 py-3 bg-darkBlue text-white rounded-lg 
                  shadow hover:bg-darkBlue-hover transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkBlue"
                            >
                                <GoDownload className="w-5 h-5" aria-hidden="true" />
                                <span className="text-sm font-medium">Download CV</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
