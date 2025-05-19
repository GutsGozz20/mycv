import { myProfile } from "../../data/myProfile";

const getIconPath = (name: string): string => {
  const basePath = '';
  
  switch (name.toLowerCase()) {
    // Frontend
    case 'html': return `${basePath}icons/icons8-html-5.svg`;
    case 'css': return `${basePath}icons/icons8-css.svg`;
    case 'javascript': return `${basePath}icons/icons8-javascript.svg`;
    case 'reactjs': return `${basePath}icons/icons8-react.svg`;
    case 'typescript': return `${basePath}icons/icons8-typescript-24.png`;
    case 'tailwindcss': return `${basePath}icons/icons8-tailwindcss-48.png`;
    case 'figma': return `${basePath}icons/icons8-figma-48.png`;

    // Backend
    case 'node.js': return `${basePath}icons/icons8-nodejs-48.png`;
    case 'python': return `${basePath}icons/icons8-python-48.png`;
    case 'php': return `${basePath}icons/icons8-php-24.png`;
    case 'java': return `${basePath}icons/icons8-java-48.png`;
    case 'mysql': return `${basePath}icons/icons8-mysql-48.png`;
    case 'mongodb': return `${basePath}icons/icons8-mongo-db-32.png`;
    case 'django': return `${basePath}icons/icons8-django-24.png`;
    
    
    // Tools
    case 'github': return `${basePath}icons/icons8-github.svg`;
    case 'vs code': return `${basePath}icons/icons8-vs-code-48.png`;
    case 'postman': return `${basePath}icons/icons8-postman-inc-24.png`;
    case 'shell': return `${basePath}icons/icons8-shell-50.png`;
    
    //Soft Skills
    case 'communication': return `${basePath}icons/icons8-communication-48.png`;
    case 'teamwork': return `${basePath}icons/icons8-teamwork-50.png`;
    case 'problem solving': return `${basePath}icons/icons8-problem-solving-64.png`;
    case 'time management': return `${basePath}icons/icons8-time-management-64.png`;
    case 'adaptability': return `${basePath}icons/icons8-adapt-64.png`;
    
    // AI & ML
    case 'tensorflow' : return `${basePath}icons/icons8-tensorflow-48.png`;
    case 'pytorch' : return `${basePath}icons/icons8-pytorch-48.png`;
    case 'python ai' : return `${basePath}icons/icons8-python-48.png`;
    case 'machine learning' : return `${basePath}icons/icons8-machine-learning-48.png`;
    case 'deep learning' : return `${basePath}icons/icons8-deep-learning-50.png`;
    
    default: return `${basePath}icons/icons8-javascript.svg`;
  }
};

const CVPersonalSkills = () => {
  return (
    <div className="skills mt-8">
      <h3 className="text-xl font-semibold text-indigo-700 mb-4">SKILLS (Basic Level)</h3>
 
      <div className="space-y-8">
        {myProfile.personalSkills.map((category) => (
          <div key={category.category}>
            <h4 className="font-semibold text-left text-gray-600 mb-3">{category.category}</h4>

            <div className="flex flex-wrap gap-4">
              {category.skills.map((skill) => (
                <div key={skill.id} className="flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <img 
                      src={getIconPath(skill.name)}
                      alt={skill.name}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <span className="text-gray-600 text-sm ml-2">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CVPersonalSkills;