import { projectData } from "../utils/data";
import { IoLogoGithub } from "react-icons/io5";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { useTheme } from "../context/ThemeContext";
import { getAnalytics, logEvent } from "firebase/analytics";
import { app } from "../firebase";
import { useEffect } from "react";

const Projects = () => {
    const { theme } = useTheme();
    const analytics = getAnalytics(app);

    useEffect(() => {
        const section = document.getElementById("portfolio");
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        logEvent(analytics, "section_view", {
                            section: "Portfolio-Projects",
                        });
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, [analytics]);

    const handleProjectClick = (title: string) => {
        logEvent(analytics, "project_click", { project: title });
    };

    const handleLiveDemoClick = (title: string) => {
        logEvent(analytics, "live_demo_click", { project: title });
    };

    const handleSourceCodeClick = (title: string) => {
        logEvent(analytics, "source_code_click", { project: title });
    };

    return (
        <section
            className={`w-full py-20 ${theme === "dark" ? "bg-darkModeGray" : "bg-white"
                }`}
            id="portfolio"
            aria-labelledby="portfolio-heading"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    id="portfolio-heading"
                    className={`text-center text-3xl font-bold mb-6 leading-normal ${theme === "dark" ? "text-white" : "text-gray-800"
                        }`}
                >
                    Portfolio
                </h2>
                <p
                    className={`text-center max-w-3xl mx-auto mb-12 text-md font-normal leading-8 ${theme === "dark" ? "text-gray-300" : "text-gray-600"
                        }`}
                >
                    A showcase of my work—featuring thoughtfully designed projects that
                    blend creativity, functionality, and user-focused solutions.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData.map((project, index) => (
                        <article
                            key={index}
                            className={`shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col ${theme === "dark" ? "bg-gray-800" : "bg-white"
                                }`}
                            onClick={() => handleProjectClick(project.title)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    handleProjectClick(project.title);
                                }
                            }}
                            tabIndex={0}
                            role="button"
                            aria-label={`Open details for project ${project.title}`}
                        >
                            <img
                                src={project.image}
                                alt={`Screenshot of ${project.title} project`}
                                className="w-full h-52 object-cover"
                                loading="lazy"
                            />
                            <div className="p-5 flex flex-col flex-grow">
                                <h3
                                    className={`text-lg font-semibold mb-2 ${theme === "dark" ? "text-white" : "text-gray-800"
                                        }`}
                                >
                                    {project.title}
                                </h3>
                                <p
                                    className={`text-sm mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-600"
                                        }`}
                                >
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className={`text-xs font-medium px-2 py-1 rounded-full ${theme === "dark"
                                                    ? "bg-gray-700 text-gray-300"
                                                    : "bg-blue-100 text-blue-600"
                                                }`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto flex gap-4">
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center gap-2 text-sm px-4 py-2 font-medium rounded-full transition ${theme === "dark"
                                                    ? "bg-gray-700 text-white hover:bg-gray-600"
                                                    : "bg-white text-gray-800 hover:bg-gray-200"
                                                }`}
                                            aria-label={`View live demo of ${project.title}`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleLiveDemoClick(project.title);
                                            }}
                                        >
                                            <LiaExternalLinkAltSolid className="w-4 h-4" />
                                            <span>Live Demo</span>
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center gap-2 text-sm px-4 py-2 font-medium rounded-full transition ${theme === "dark"
                                                    ? "bg-gray-700 text-white hover:bg-gray-600"
                                                    : "bg-white text-gray-800 hover:bg-gray-200"
                                                }`}
                                            aria-label={`View source code of ${project.title} on GitHub`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleSourceCodeClick(project.title);
                                            }}
                                        >
                                            <IoLogoGithub className="w-4 h-4" />
                                            <span>Source Code</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
