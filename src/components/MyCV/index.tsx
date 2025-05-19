import { myProfile } from '../../data/myProfile';
import CVExpertise from '../CVExpertise';
import CVPersonalSkills from '../CVPersonalSkills';
import CVmyProject from '../myProject';
import CVAboutMe from '../CVAboutMe';
import CVContact from '../CVContact';





const MyCV = () => {
  return (
    <div className='flex shadow-xl max-w-5xl mx-auto my-8 bg-white'>
      {/* Left Column - Blue Background */}
      <div className="col_left w-[220px] bg-indigo-700 p-6 relative overflow-hidden">
        {/* Profile Image */}
        <div className="profile-image relative z-10 mb-6">
          <div className="rounded-full w-36 h-36 mx-auto overflow-hidden border-4 border-white">
            <img src={myProfile.avatar} alt={myProfile.name} className="w-full h-full object-cover" />
          </div>
        </div>
        
        {/* Decorative Elements - Matching the image */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full border-2 border-indigo-600 -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full border-2 border-indigo-600 translate-x-1/2 translate-y-1/2 opacity-30"></div>
          <div className="absolute top-1/4 right-0 w-32 h-32 rounded-full border-2 border-indigo-600 translate-x-1/2 opacity-30"></div>
        </div>
        
        {/* Contact Section */}
        <CVContact />
        
        {/* Expertise Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-white mb-4">EXPERTISE</h3>
          <CVExpertise />
        </div>
        
     
      </div>
      
      {/* Right Column - White Background */}
      <div className="col_right flex-1 p-8 relative overflow-hidden">
        {/* Decorative Elements - Yellow Curves */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-300 rounded-bl-full opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-300 rounded-tr-full opacity-20"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-indigo-700 rounded-full opacity-10"></div>
          <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-indigo-700 rounded-full opacity-20"></div>
          <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-indigo-700 rounded-full opacity-20"></div>
        </div>
        
        {/* Name and Title */}
        <div className="name-title relative z-10 mb-8">
          <h1 className="text-4xl font-bold text-indigo-700">{myProfile.name}</h1>
          <h2 className="text-xl text-gray-500">{myProfile.title}</h2>
        </div>
        
        {/* About Me Section */}
        <CVAboutMe />
        
        {/* Education Section */}
        {/* <CVEducation /> */}
        <CVPersonalSkills />

         
        
        {/* Work Experience Section */}
        <CVmyProject />
      </div>
    </div>
  );
};

export default MyCV;

