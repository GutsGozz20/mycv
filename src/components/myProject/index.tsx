import { myProfile } from "../../data/myProfile";

const CVmyProject = () => {
  return (
    <div className="work-experience mt-8">
      <h3 className="text-xl font-semibold text-indigo-700 mb-4">MY PROJECT</h3>
      <div className="space-y-6">
        {myProfile.workExperience.map((work) => (
          <div key={work.id} className="flex justify-between">
            <div className="flex-1">
              <h4 className="font-medium text-left text-gray-700">{work.jobTitle}</h4>
              {/* <p className="text-sm text-gray-600">{work.companyName}</p> */}
              <p className="text-sm  text-left text-gray-500 mt-1">{work.description}</p>
            </div>
            {/* <div className="text-sm text-gray-500 ml-4">{work.period}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CVmyProject;