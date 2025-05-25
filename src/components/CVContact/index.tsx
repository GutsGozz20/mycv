import { myProfile } from "../../data/myProfile";
import { MdPhone, MdEmail, MdLocationOn, MdLink } from "react-icons/md";

interface ContactItem {
  id: number;
  name: string;
  content: string;
}

interface MyProfile {
  name: string;
  title: string;
  avatar: string;
  contact: ContactItem[];
  aboutMe: string;
  expertise: Array<{id: number; name: string; rank: number}>;
  personalSkills: Array<{
    category: string;
    skills: Array<{id: number; name: string}>;
  }>;
  workExperience: Array<{
    id: number;
    jobTitle: string;
    description: string;
  }>;
}

const getIcon = (name: string) => {
  switch (name) {
    case 'Phone':
      return <MdPhone className="text-lg" />;
    case 'Email':
      return <MdEmail className="text-lg" />;
    case 'GitHub':
      return <MdLink className="text-lg" />;
    case 'Address':
      return <MdLocationOn className="text-lg" />;
    default:
      return null;
  }
};

const CVContact = () => {
  const profile = myProfile as unknown as MyProfile;
  
  return (
    <div className="contact mt-8">
      <h3 className="text-xl font-semibold text-white mb-4">CONTACT</h3>
      <ul className="space-y-4">
        {profile.contact.map((item: ContactItem) => (
          <li key={item.id} className="flex items-start text-white">
            <span className="mr-2 mt-1 text-white">
              {getIcon(item.name)}
            </span>
            <div>
              <div className="font-medium text-left">{item.name}</div>
              <div className="text-sm text-left">{item.content}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CVContact;