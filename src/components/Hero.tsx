import { IoMailOutline } from 'react-icons/io5';
import { assets } from '../assets/assets';
import { useEffect, useRef } from 'react';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { analytics, app } from '../firebase';
import { useTheme } from '../context/ThemeContext';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
    const heroRef = useRef(null);
    const { theme } = useTheme();

    useEffect(() => {
        const analyticsInstance = getAnalytics(app);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        logEvent(analyticsInstance, 'section_view', {
                            section_name: 'Hero'
                        });
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleHireMe = () => {
        logEvent(analytics, 'button_click', { button_name: 'Hire Me' });
        const section = document.getElementById('contact');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleSocialClick = (platform: string) => {
        logEvent(analytics, "social_link_click", { platform });
    };

    return (
        <section
            id="hero"
            ref={heroRef}
            aria-labelledby="hero-title"
            className={`pt-28 transition-colors duration-300 ${theme === 'dark' ? 'bg-darkModeGray' : 'bg-white'
                }`}
        >
            {theme !== 'dark' && (
                <div
                    className="absolute top-10 left-10 w-72 h-72 opacity-30 blur-3xl rounded-full z-0"
                    style={{ backgroundColor: '#93C5FD' }}
                ></div>
            )}
            <div
                className="absolute bottom-10 right-10 w-96 h-96 opacity-30 blur-3xl rounded-full z-0"
                style={{ backgroundColor: theme === 'dark' ? '#8B5CF6' : '#D8B4FE' }}
            ></div>

            <div
                className="absolute top-1/2 right-1/4 w-80 h-80 opacity-20 blur-3xl rounded-full z-0"
                style={{ backgroundColor: theme === 'dark' ? '#14B8A6' : '#5EEAD4' }}
            ></div>

            <div className="relative z-10 rounded-2xl overflow-hidden m-5 lg:m-0 lg:rounded-tl-2xl lg:rounded-bl-2xl">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                        <div className="w-full xl:col-span-6 lg:col-span-6 text-center lg:text-left animate-fade-in motion-reduce:animate-none">
                            <h1
                                id="hero-title"
                                className={`py-6 font-bold text-3xl md:text-5xl leading-tight ${theme === 'dark' ? 'text-gray-100' : 'text-charcoalBlack'
                                    }`}
                            >
                                Hi, I’m{' '}
                                <span
                                    className={
                                        theme === 'dark' ? 'text-blue-400' : 'text-darkBlue'
                                    }
                                >
                                    Sushmitha
                                </span>
                            </h1>
                            <h2
                                className={`text-xl mb-4 font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                    }`}
                            >
                                Frontend Developer • QA Enthusiast
                            </h2>
                            <p
                                className={`text-md mx-auto lg:mx-0 leading-relaxed ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'
                                    }`}
                            >
                                I craft sleek, responsive, and accessible interfaces while ensuring
                                every feature is thoroughly tested for performance and reliability.
                                Blending creativity with precision, I transform concepts into seamless
                                digital experiences.
                            </p>

                            <div className="mt-8 flex justify-center lg:justify-start">
                                <button
                                    className="bg-darkBlue hover:bg-darkBlue-hover transition-all duration-300 text-white font-semibold py-3 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 flex items-center gap-2 cursor-pointer"
                                    aria-label="Hire Sushmitha for your next project"
                                    onClick={handleHireMe}
                                >
                                    <IoMailOutline className="text-xl" aria-hidden="true" />
                                    <span>Hire Me</span>
                                </button>
                            </div>

                            <div className="mt-6 flex justify-center lg:justify-start gap-4" aria-label="Social Media Links">
                                <a
                                    href="https://github.com/Sushmitha-SK"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit Sushmitha's GitHub profile"
                                    onClick={() => handleSocialClick("GitHub")}
                                >
                                    <FaGithub className="w-5 h-5 text-[#181717] dark:text-white hover:scale-110" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/sushmithass/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit Sushmitha's LinkedIn profile"
                                    onClick={() => handleSocialClick("LinkedIn")}
                                >
                                    <FaLinkedin className="w-5 h-5 text-darkBlue dark:text-white hover:scale-110" />
                                </a>
                            </div>
                        </div>

                        <div className="w-full xl:col-span-6 lg:col-span-6 flex justify-center items-center">
                            <div className="flex justify-center items-center w-full h-full">
                                <img
                                    src={assets.fedeveloper}
                                    alt="Illustration of a frontend developer working on a laptop"
                                    className="object-contain max-w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
