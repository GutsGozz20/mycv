export const myProfile = {
    // Personal Information
    name: 'NGUYEN THI DIEN',
    title: 'WEB DEVELOPER ',
    // avatar: window.location.href.includes('github.io') ? '/mycv/avatar.jpg' : '/avatar.jpg', 
    avatar: 'avatar.jpg', 
    
    // Contact Information
    contact: [
        {id: 1, name: 'Phone', content: '0353711902'},
        {id: 2, name: 'Email', content: 'dienchau2002@gmail.com'},
        {id: 3, name: 'GitHub', content: 'https://github.com/GutsGozz20'},
        {id: 4, name: 'Address', content: 'Da Nang City, Viet Nam'},
        
    ],

    // About Me
    aboutMe: ' I’m an Information Technology student passionate about web development and AI. Experienced in building user-friendly web applications using modern technologies. Strong focus on clean code, problem-solving, and continuous learning. Eager to create impactful digital experiences through responsive interfaces and AI integration.',
    
    // Technical Skills
    expertise: [
        {id: 1, name: 'Word', rank: 4},
        {id: 2, name: 'Excel', rank: 3},
        {id: 3, name: 'Photoshop', rank: 3},
        // {id: 4, name: 'Illustrator', rank: 3},
        // {id: 5, name: 'Corel Draw', rank: 4},
    ],
    
    // Personal Skills
    personalSkills: [
        {
            category: 'FrontEnd',
            skills: [
                {id: 1, name: 'HTML'},
                {id: 2, name: 'CSS'},
                {id: 3, name: 'JavaScript'},
                {id: 4, name: 'ReactJS'},
                {id: 5, name: 'TypeScript'},
                {id: 6, name: 'TailwindCSS'},
                {id: 7, name: 'Figma'},
            ]
        },
       
        {
            category: 'BackEnd',
            skills: [
                {id: 7, name: 'Node.js'},
                {id: 8, name: 'Java'},
                {id: 9, name: 'PHP'},
                {id: 10, name: 'Python'},
                {id: 11, name: 'MySQL'},
                {id: 12, name: 'MongoDB'},
                // {id: 13, name: 'Django'},
            
            ]
        },
        {
            category: 'Tools',
            skills: [
                {id: 14, name: 'GitHub'},
                {id: 15, name: 'VS Code'},
                {id: 16, name: 'Postman'},
                {id: 17, name: 'Shell'},
            ]
        },
        {
            category: 'Soft Skills',
            skills: [
                {id: 18, name: 'Teamwork'},
                {id: 19, name: 'Communication'},
                {id: 20, name: 'Problem Solving'},
                {id: 21, name: 'Time Management'},
                {id: 22, name: 'Adaptability'},
            ]
        },
        {
            category: 'AI & ML',
            skills: [
                {id: 23, name: 'TensorFlow'},
                {id: 24, name: 'PyTorch'},
                {id: 25, name: 'Python AI'},
                {id: 26, name: 'Machine Learning'},
                {id: 27, name: 'Deep Learning'},
            ]
        },
    ],
    
 
    // Work Experience
    workExperience: [
        {
            id: 1,
            jobTitle: 'Mycv',
            description: 'Simple product using: ReactJS, TailwindCSS, TypeScript'
        },
        {
            id: 2,
            jobTitle: 'MoviesApp',
            description: 'Simple product using: HTML, CSS, ReactJS, TailwindCSS, TypeScript, fe'
        },
        {
            id: 3,
            jobTitle: 'WeatherApp',
            description: 'Simple product using: HTML, CSS, ReactJS, TailwindCSS, TypeScript'
        },
        {
            id: 4,
            jobTitle: 'ai-house_price_prediction',
            description: 'Simple product using: HTML, CSS, Python, Multiple Linear Regression'
        }
    ]
};
