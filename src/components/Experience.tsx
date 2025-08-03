import { motion } from "framer-motion";
import {PiBriefcaseLight,PiMedalThin,PiCertificateThin,} from "react-icons/pi";
import { useTheme } from "../context/ThemeContext";
import { certifications, education, experiences } from "../utils/data";
import { getAnalytics, logEvent } from "firebase/analytics";
import { app } from "../firebase";
import { useEffect } from "react";

const Experience = () => {
    const { theme } = useTheme();
    const analytics = getAnalytics(app)

    useEffect(() => {
        const section = document.getElementById("experience");
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        logEvent(analytics, "section_view", { section: "Experience" });
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, [analytics]);

    const handleExperienceClick = (title: string) => {
        logEvent(analytics, "experience_click", { role: title });
    };

    const handleEducationClick = (degree: string) => {
        logEvent(analytics, "education_click", { degree });
    };

    const handleCertificationClick = (title: string) => {
        logEvent(analytics, "certification_click", { certification: title });
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const sectionBg =
        theme === "dark"
            ? "bg-darkModeGray"
            : "bg-gradient-to-br from-white to-blue-50";

    const headingText =
        theme === "dark" ? "text-white" : "text-gray-800";

    const cardClasses = `flex items-start ${theme === "dark" ? "bg-darkModeLighter border-gray-700" : "bg-white border-gray-100"
        } border hover:shadow-md p-6 rounded-xl transition-all duration-300`;

    const iconWrapperClasses = `w-12 h-12 flex items-center justify-center rounded-lg mr-5 ${theme === "dark"
        ? "shadow-md"
        : ""
        }`;

    const textPrimary = theme === "dark" ? "text-white" : "text-gray-800";
    const textSecondary = theme === "dark" ? "text-gray-300" : "text-gray-500";
    const textMuted = theme === "dark" ? "text-gray-400" : "text-gray-400";

    return (
        <section
            className={`py-24 ${sectionBg}`}
            id="experience"
        >
            <div className="max-w-7xl px-4 md:px-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
                <div>
                    <motion.h3
                        className={`text-3xl font-bold mb-4 leading-normal ${headingText}`}
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ duration: 0.5 }}
                    >
                        Experience
                    </motion.h3>
                    <ul className="mt-6 space-y-6">
                        {experiences.map((item, index) => (
                            <motion.li
                                key={index}
                                className={cardClasses}
                                initial="hidden"
                                animate="visible"
                                variants={fadeInUp}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                onClick={() => handleExperienceClick(item.title)}
                            >
                                <div className={iconWrapperClasses}>
                                    <PiBriefcaseLight className="text-darkBlue w-8 h-6" />
                                </div>
                                <div>
                                    <h4 className={`text-lg font-semibold ${textPrimary}`}>
                                        {item.title}
                                    </h4>
                                    <p className={textSecondary}>{item.company}</p>
                                    <p className={`${textMuted} text-sm`}>{item.date}</p>
                                    <ul
                                        className={`list-disc ml-5 mt-2 text-[15px] space-y-1 ${theme === "dark"
                                            ? "text-gray-300"
                                            : "text-gray-600"
                                            }`}
                                    >
                                        {item.description.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                <div>
                    <motion.h3
                        className={`text-3xl font-bold mb-4 leading-normal ${headingText}`}
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ duration: 0.5 }}

                    >
                        Education
                    </motion.h3>
                    <ul className="mt-6 space-y-6">
                        {education.map((item, index) => (
                            <motion.li
                                key={index}
                                className={cardClasses}
                                initial="hidden"
                                animate="visible"
                                variants={fadeInUp}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                onClick={() => handleEducationClick(item.degree)}
                            >
                                <div className={iconWrapperClasses}>
                                    <PiMedalThin className="text-blue-500 w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className={`text-lg font-semibold ${textPrimary}`}>
                                        {item.degree}
                                    </h4>
                                    <p className={textSecondary}>{item.university}</p>
                                    <p className={`${textMuted} text-sm`}>{item.graduatedOn}</p>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                <div className="md:col-span-2">
                    <motion.h3
                        className={`text-3xl font-bold mb-6 leading-normal ${headingText}`}
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ duration: 0.5 }}
                    >
                        Certifications
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {certifications.map((item, index) => (
                            <motion.div
                                key={index}
                                className={`flex items-start ${theme === "dark"
                                    ? "bg-darkModeLighter border-gray-700"
                                    : "bg-white border-gray-100"
                                    } border hover:shadow-md p-5 rounded-xl transition-all duration-300 h-full`}
                                initial="hidden"
                                animate="visible"
                                variants={fadeInUp}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                onClick={() => handleCertificationClick(item.title)}
                            >
                                <div
                                    className={`w-12 h-12 flex items-center justify-center rounded-lg mr-4 `}
                                >
                                    <PiCertificateThin className="text-green-600 w-6 h-6" />
                                </div>
                                <div>
                                    <h4
                                        className={`text-lg font-semibold leading-tight hover:underline ${theme === "dark"
                                            ? "text-white"
                                            : "text-darkBlue"
                                            }`}
                                    >
                                        <a
                                            href={item.certificateLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`View certificate: ${item.title}`}
                                        >
                                            {item.title}
                                        </a>
                                    </h4>
                                    <p className={textSecondary}>{item.issuer}</p>
                                    <p className={`${textMuted} text-sm`}>{item.date}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
