// components/MyAccount.jsx
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const MyAccount = ({ userType }) => {
  // Sample user information, replace with actual data fetched from the database
  const [user, setUser] = useState({
    profile: userType, // 'client' or 'worker'
    photo: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg', // Set a default profile photo
    name: 'John Doe',
    phoneNumber: '123-456-7890',
    email: 'john.doe@example.com',
    birthdate: '01/01/1990',
    skills: ['Skill1', 'Skill2', 'Skill3'], // Worker-specific attribute
  });

  const [newSkill, setNewSkill] = useState('');

  const handleEmailChange = (newEmail) => {
    setUser((prevUser) => ({ ...prevUser, email: newEmail }));
  };

  const handlePhoneNumberChange = (newPhoneNumber) => {
    setUser((prevUser) => ({ ...prevUser, phoneNumber: newPhoneNumber }));
  };

  const handleSkillChange = (e) => {
    setNewSkill(e.target.value);
  };

  const handleAddSkill = () => {
    setUser((prevUser) => ({ ...prevUser, skills: [...prevUser.skills, newSkill] }));
    setNewSkill('');
  };

  const handleRemoveSkill = (index) => {
    setUser((prevUser) => {
      const updatedSkills = [...prevUser.skills];
      updatedSkills.splice(index, 1);
      return { ...prevUser, skills: updatedSkills };
    });
  };

  const handleSaveChanges = () => {
    // Add logic to save changes to the database
    console.log('Changes saved:', user);
  };

  return (
    <div>
      <Header isWorker />
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">My Account</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <img src={user.photo} alt="Profile" className="rounded-full w-32 h-32 mb-4" />
            <p className="text-lg mb-2">Profile: {user.profile}</p>
            <p className="text-lg mb-2">Name: {user.name}</p>
            <p className="text-lg mb-2">Phone Number: {user.phoneNumber}</p>
            <p className="text-lg mb-2">Email: {user.email}</p>
            <p className="text-lg mb-2">Birthdate: {user.birthdate}</p>
            {user.profile === 'worker' && (
              <>
                <p className="text-lg font-bold mb-2">Skills:</p>
                <ul>
                  {user.skills.map((skill, index) => (
                    <li key={index} className="flex items-center mb-2">
                      {skill}
                      <button
                        onClick={() => handleRemoveSkill(index)}
                        className="ml-2 text-red-500"
                      >
                        X
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Edit Information</h2>
            <label htmlFor="email" className="block mb-2">
              Email:
              <input
                type="text"
                id="email"
                value={user.email}
                onChange={(e) => handleEmailChange(e.target.value)}
                className="border border-gray-400 rounded w-full p-2"
              />
            </label>
            <label htmlFor="phoneNumber" className="block mb-2">
              Phone Number:
              <input
                type="text"
                id="phoneNumber"
                value={user.phoneNumber}
                onChange={(e) => handlePhoneNumberChange(e.target.value)}
                className="border border-gray-400 rounded w-full p-2"
              />
            </label>
            {user.profile === 'worker' && (
              <>
                <label htmlFor="newSkill" className="block mb-2">
                  Add Skill:
                  <input
                    type="text"
                    id="newSkill"
                    value={newSkill}
                    onChange={handleSkillChange}
                    className="border border-gray-400 rounded w-full p-2"
                  />
                </label>
                <button
                  onClick={handleAddSkill}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                >
                  Add Skill
                </button>
              </>
            )}
            <button
              onClick={handleSaveChanges}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Save Changes
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MyAccount;
