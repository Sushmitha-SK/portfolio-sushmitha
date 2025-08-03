import { assets } from '../assets/assets';

export const skillsData = [
    {
        icon: (
            <img src={assets.react} alt="ReactJS" width={40} height={40} />
        ),
        title: 'React',
        category: 'Frontend',
    },
    {
        icon: (
            <img src={assets.typescript} alt="TypeScript" width={40} height={40} />
        ),
        title: 'TypeScript',
        category: 'Frontend',
    },
    {
        icon: (
            <img src={assets.nextjs} alt="Next.js" width={40} height={40} />
        ),
        title: 'Next.js',
        category: 'Frontend',
    },
    {
        icon: (
            <img src={assets.javascript} alt="JavaScript" width={40} height={40} />
        ),
        title: 'JavaScript',
        category: 'Frontend',
    },
    {
        icon: (
            <img src={assets.nodejs} alt="Node.js" width={40} height={40} />
        ),
        title: 'node.js',
        category: 'Backend',
    },
    {
        icon: (
            <img src={assets.expressjs} alt="Express JS" width={40} height={40} />
        ),
        title: 'Express.js',
        category: 'Backend',
    },
    {
        icon: (
            <img src={assets.mongodb} alt="MongoDB" width={40} height={40} />
        ),
        title: 'MongoDB',
        category: 'Backend',

    },
    {
        icon: (
            <img src={assets.html} alt="HTML5" width={40} height={40} />
        ),
        title: 'HTML5',
        category: 'Frontend',
    },
    {
        icon: (
            <img src={assets.css} alt="CSS3" width={40} height={40} />
        ),
        title: 'CSS3',
        category: 'Frontend',
    },
    {
        icon: (
            <img src={assets.tailwindcss} alt="TailwindCSS" width={40} height={40} />
        ),
        title: 'Tailwind CSS',
        category: 'Frontend',
    },
    {
        icon: (
            <img src={assets.materialui} alt="Material UI" width={40} height={40} />
        ),
        title: 'Material UI',
        category: 'Frontend',
    },
    {
        icon: (
            <img src={assets.bootstrap} alt="Bootstrap" width={40} height={40} />
        ),
        title: 'Bootstrap',
        category: 'Frontend',
    },
    {
        icon: (
            <img src={assets.firebase} alt="Firebase" width={40} height={40} />
        ),
        title: 'Firebase',
        category: 'Backend',
    },
    {
        icon: (
            <img src={assets.clerk} alt="Clerk" width={40} height={40} />
        ),
        title: 'Clerk',
        category: 'Backend',
    },
    {
        icon: (
            <img src={assets.figma} alt="Figma" width={40} height={40} />
        ),
        title: 'Figma',
        category: 'Developer Tools',
    },
    {
        icon: (
            <img src={assets.github} alt="GitHub" width={40} height={40} />
        ),
        title: 'GitHub',
        category: 'Version Control',
    },
    {
        icon: (
            <img src={assets.git} alt="Git" width={40} height={40} />
        ),
        title: 'Git',
        category: 'Version Control',

    },
    {
        icon: (
            <img src={assets.postman} alt="Postman" width={40} height={40} />
        ),
        title: 'Postman',
        category: 'Developer Tools',
    },

];


export const projectData = [
    {
        title: "NeoLearn",
        description: "NeoLearn is a modern full-stack e-learning platform where educators can create and manage courses, and students can enroll, learn, and track their progress interactively.",
        image: assets.neolearn,
        tags: ["React JS", "Context API", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Clerk", "Stripe"],
        github: 'https://github.com/Sushmitha-SK/NeoLearn.git',
        demo: 'https://neo-learn-space.vercel.app/'
    },
    {
        title: "Orbit",
        description: "Orbit is a powerful MERN stack-based task management system designed to streamline collaboration and boost productivity.",
        image: assets.orbit,
        tags: ["React JS", "Context API", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Firebase"],
        github: 'https://github.com/Sushmitha-SK/Orbit-TaskManager',
        demo: 'https://orbit-task-manager.vercel.app/'
    },
    {
        title: "AccquireSpace",
        description: "AcquireSpace is a full-stack real estate app that simplifies property listing and acquisition with a seamless user experience.",
        image: assets.acquirespace,
        tags: ["React JS", "TypeScript", "Tailwind CSS", "Redux", "Node.js", "Express.js", "MongoDB", "Google Analytics"],
        github: 'https://github.com/Sushmitha-SK/AcquireSpace-Real-Estate',
        demo: 'https://acquirespace-real-estate.vercel.app/'
    },
    {
        title: "ShopSpace",
        description: "ShopSpace is a modern eCommerce site built with React and TypeScript, featuring FakeStore API data and Stripe for secure payments.",
        image: assets.shopspace,
        tags: ["React JS", "TypeScript", "Tailwind CSS", "Redux", "Stripe"],
        github: 'https://github.com/Sushmitha-SK/ShopSpace-Web',
        demo: 'https://shop-space-ecommerce.vercel.app/'
    },
    {
        title: "Personal Portfolio",
        description: "Responsive personal portfolio built with React and TypeScript, featuring smooth animations and a clean Tailwind CSS design.",
        image: assets.portfolio,
        tags: ["React JS", "TypeScript", "Tailwind CSS", "Context API", "Google Analytics"],
        github: '',
        demo: 'http://localhost:5173/'
    },
];


export const certifications = [
    {
        title: "TailwindCSS from A to Z: Master TailwindCSS Quickly",
        issuer: "Udemy",
        date: "February 2024",
        certificateLink:
            "https://www.udemy.com/certificate/UC-e913d8cf-e37a-49d2-ab9a-d2f55979951b/",
    },
    {
        title: "Advanced React",
        issuer: "Coursera",
        date: "September 2023",
        certificateLink:
            "https://www.coursera.org/account/accomplishments/verify/WTUVR828EWDW",
    },
    {
        title: "Full-Stack Web Development with React",
        issuer: "Coursera",
        date: "June 2022",
        certificateLink:
            "https://drive.google.com/file/d/10h77jh9Eehv-oL5fc3qZnu5n3HaRiMI9/view",
    },
];

export const education = [
    {
        degree: "Master of Computer Applications",
        university: "Indira Gandhi National Open University",
        graduatedOn: "Dec 2014",
    },
    {
        degree: "Bachelor of Computer Applications",
        university: "Mangalore University",
        graduatedOn: "May 2011",
    },
];



export const experiences = [
    {
        title: "Tester",
        company: "Robosoft Technologies Pvt. Ltd",
        date: "Jun 2011 - Mar 2013",
        description: [
            "Collaborated closely with the software development team to ensure the delivery of bug-free applications.",
            "Conducted various types of testing, including System Testing, Integration Testing, and Functional Testing.",
            "Maintained and updated comprehensive test plans, test cases, and test environments throughout the test life cycle.",
            "Actively participated in the Defect tracking process, reporting defects and working towards their resolution",
        ],
    },
    {
        title: "Intern",
        company: "Manipal Digital Systems",
        date: "Dec 2010 - Mar 2011",
        description: [
            "Designed and developed user interfaces (UI) using Adobe Flex 3 for the frontend.",
            "Worked on the backend, implementing web services using Asp.net C# and utilized SQL Server 2005 as the database for data storage.",
            "Engaged in the maintenance, testing, and integration of changes to the application developed.",
        ],
    },
];
