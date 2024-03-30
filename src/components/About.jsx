import React from 'react';

export const AboutSection = ({id, developerInfo }) => {
  // Check if developerInfo is defined
  if (!developerInfo) {
    return null; // Return null if developerInfo is undefined
  }

  // Check if developerInfo.avatar is defined
  const avatarUrl = developerInfo.avatar?.url || '';

  return (
    <div id={id}>
      <h2 className="text-3xl text-white font-bold mb-8 m-8 text-center">About</h2>
      <section className="py-2">
        <div className="container mx-auto px-6 flex justify-center items-center">
          {/* Developer Image */}
          <img
            src={avatarUrl} // Use avatarUrl with null check
            alt="Developer"
            className="w-64 h-64 md:w-96 md:h-96 rounded-full shadow-2xl mr-8"
          />
          {/* Information Container */}
          <div className="max-w-screen-md">
            <div className="bg-black bg-opacity-90 p-6 rounded-lg shadow-xl">
              <h2 className="text-3xl font-bold text-white mb-4 font-poppins">{developerInfo.name}</h2>
              <h3 className="text-xl font-semibold text-white mb-4 font-poppins">{developerInfo.title}</h3>
              <p className="text-white mb-4 font-poppins">{developerInfo.subTitle}</p>
              <p className="text-white  text-wrap font-poppins">{developerInfo.description}</p>
              <p className="text-white italic mb-4 font-poppins">"{developerInfo.quote}"</p>
              <p className="text-white mb-4 font-poppins">Years of Experience: {developerInfo.exp_year}</p>
              <p className="text-white mb-4 font-poppins">Address: {developerInfo.address}</p>
              <p className="text-white font-poppins">Phone Number: {developerInfo.phoneNumber}</p>
            </div>
          </div>
        </div>
      </section>
      <div className='w-full h-px bg-white'></div>
    </div>
  );
};
