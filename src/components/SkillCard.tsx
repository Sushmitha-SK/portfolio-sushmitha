import React from 'react';

interface SkillCardProps {
    icon: React.ReactNode;
    title: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title }) => {
    return (
        <div
            className="w-full max-w-xs px-4 py-6 rounded-2xl flex justify-center items-center 
                transition-all duration-300 ease-in-out 
                border border-gray-300 bg-white 
                dark:border-gray-700 dark:bg-darkModeGray 
                hover:shadow-xs hover:scale-105 cursor-pointer"
        >
            <div className="flex flex-col justify-start items-center gap-4">
                <div
                    className="w-8 h-8 flex items-center justify-center  text-indigo-600 dark:text-blue-400 bg-transparent dark:bg-white rounded p-1"
                    aria-hidden="true">
                    {icon}
                </div>

                <p className="text-center text-gray-900 dark:text-gray-200 text-sm font-medium tracking-wide">
                    {title}
                </p>
            </div>
        </div>
    );
};

export default SkillCard;
