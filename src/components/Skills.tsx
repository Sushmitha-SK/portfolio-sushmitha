import SkillCard from './SkillCard';
import { skillsData } from '../utils/data';
import { useTheme } from '../context/ThemeContext';
import { useEffect } from 'react';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { app } from '../firebase';

const Skills = () => {
    const { theme } = useTheme();
    const analytics = getAnalytics(app);

    const categories = [
        { name: 'Frontend Development', key: 'Frontend' },
        { name: 'Backend Development', key: 'Backend' },
    ];

    useEffect(() => {
        const section = document.getElementById("skills");
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        logEvent(analytics, "section_view", { section: "Skills" });
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, [analytics]);

    const handleSkillClick = (skillTitle: string) => {
        logEvent(analytics, "skill_click", { skill: skillTitle });
    };

    return (
        <section
            id="skills"
            aria-labelledby="skills-title"
            className={`py-24 relative transition-colors duration-300 ${theme === "dark" ? "bg-darkModeGray" : "bg-white"
                }`}
        >
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="flex flex-col justify-start items-center lg:gap-11 gap-8">

                    <div className="flex flex-col justify-start items-center gap-2.5">
                        <h2
                            id="skills-title"
                            className={`text-center text-3xl font-bold leading-normal ${theme === "dark" ? "text-white" : "text-gray-800"
                                }`}
                        >
                            Skills
                        </h2>
                        <p
                            className={`max-w-4xl mx-auto text-center text-md font-normal leading-8 ${theme === "dark" ? "text-gray-300" : "text-gray-600"
                                }`}
                        >
                            Professional expertise across a range of technologies and tools, built
                            through years of practical experience in developing scalable, reliable,
                            and efficient solutions.
                        </p>
                    </div>

                    {categories.map((cat) => (
                        <div key={cat.key} className="w-full">
                            <h3
                                className={`text-lg font-semibold mb-6 ${theme === "dark" ? "text-blue-400" : "text-gray-800"
                                    }`}
                            >
                                {cat.name}
                            </h3>
                            <div
                                className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-8"
                                role="list"
                            >
                                {skillsData
                                    .filter((skill) => skill.category === cat.key)
                                    .map((skill, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleSkillClick(skill.title)}
                                            aria-label={`Skill: ${skill.title}`}
                                            className="focus:outline-none focus:ring-2 focus:ring-darkBlue rounded-lg"
                                            role="listitem"
                                        >
                                            <SkillCard icon={skill.icon} title={skill.title} />
                                        </button>
                                    ))}
                            </div>
                        </div>
                    ))}

                    <div className="w-full flex flex-col lg:flex-row gap-12">
                        <div className="flex-1">
                            <h3
                                className={`text-lg font-semibold mb-6 ${theme === "dark" ? "text-blue-400" : "text-gray-800"
                                    }`}
                            >
                                Version Control Systems
                            </h3>
                            <div
                                className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-8"
                                role="list"
                            >
                                {skillsData
                                    .filter((skill) => skill.category === "Version Control")
                                    .map((skill, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleSkillClick(skill.title)}
                                            aria-label={`Skill: ${skill.title}`}
                                            className="focus:outline-none focus:ring-2 focus:ring-darkBlue rounded-lg"
                                            role="listitem"
                                        >
                                            <SkillCard icon={skill.icon} title={skill.title} />
                                        </button>
                                    ))}
                            </div>
                        </div>

                        <div className="flex-1">
                            <h3
                                className={`text-lg font-semibold mb-6 ${theme === "dark" ? "text-blue-400" : "text-gray-800"
                                    }`}
                            >
                                Developer Tools
                            </h3>
                            <div
                                className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-8"
                                role="list"
                            >
                                {skillsData
                                    .filter((skill) => skill.category === "Developer Tools")
                                    .map((skill, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleSkillClick(skill.title)}
                                            aria-label={`Skill: ${skill.title}`}
                                            className="focus:outline-none focus:ring-2 focus:ring-darkBlue rounded-lg"
                                            role="listitem"
                                        >
                                            <SkillCard icon={skill.icon} title={skill.title} />
                                        </button>
                                    ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
