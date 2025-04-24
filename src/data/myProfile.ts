export const myProfile = {
    // Personal Information
    name: 'NGUYEN THI DIEN',
    title: 'WEB DEVELOPER',
    avatar: '/avatar.jpg', 
    
    // Contact Information
    contact: [
        {id: 1, name: 'Phone', content: '0353711902'},
        {id: 2, name: 'Email', content: 'dienchau2002@gmail.com'},
        {id: 3, name: 'Address', content: 'Da Nang City, Viet Nam'},
    ],

    // About Me
    aboutMe: 'I am a passionate and dedicated developer with a strong interest in building user-friendly and efficient web applications. With a good understanding of modern technologies and a continuous desire to learn, I strive to create impactful digital experiences. I value clean code, creative problem solving, and effective teamwork.',
    
    // Technical Skills
    expertise: [
        {id: 1, name: 'MS Word', rank: 4},
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
                {id: 11, name: 'MongoDB'},
            
            ]
        },
        {
            category: 'Tools',
            skills: [
                {id: 12, name: 'GitHub'},
                {id: 13, name: 'VS Code'},
                {id: 14, name: 'Postman'},
                {id: 15, name: 'Shell'},
            ]
        },
        {
            category: 'Soft Skills',
            skills: [
                {id: 17, name: 'Teamwork'},
                {id: 18, name: 'Communication'},
                {id: 19, name: 'Problem Solving'},
                {id: 20, name: 'Time Management'},
                {id: 21, name: 'Adaptability'},
            ]
        },
        // {
        //     category: 'AI & ML',
        //     skills: [
        //         {id: 8, name: 'TensorFlow'},
        //         {id: 9, name: 'PyTorch'},
        //         {id: 10, name: 'Python AI'},
        //         {id: 11, name: 'Machine Learning'},
        //         {id: 12, name: 'Deep Learning'},
        //     ]
        // },
    ],
    
 
    // Work Experience
    workExperience: [
        {
            id: 1,
            jobTitle: 'Mycv',
            // companyName: 'COMPANY NAME',
            // period: '2012 - 2015',
            description: 'Simple product using: ReactJS, TailwindCSS, TypeScript'
        },
        {
            id: 2,
            jobTitle: 'MoviesApp',
            // companyName: 'COMPANY NAME',
            // period: '2012 - 2015',
            description: 'Simple product using: HTML, CSS, ReactJS, TailwindCSS, TypeScript'
        }
    ]
};
