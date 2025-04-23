import { myProfile } from "../../data/myProfile";
const CVAboutMe = () => {
  return (
    <div className="about-me mt-8">
      <h3 className="text-xl font-semibold text-indigo-700 mb-4">ABOUT ME</h3>
      <p className="text-gray-600">{myProfile.aboutMe}</p>
    </div>
  );
};

export default CVAboutMe;