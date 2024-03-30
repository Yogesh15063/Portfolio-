import React from 'react';

export const TimelineSection = ({ timeline }) => {
  const educationEvents = timeline && timeline.filter((event) => event.forEducation);
  const experienceEvents = timeline && timeline.filter((event) => !event.forEducation);

  const sortedEducationEvents = educationEvents && educationEvents.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
  const sortedExperienceEvents = experienceEvents && experienceEvents.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

  return (
    <section className="py-16 relative font-poppins" >
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-white text-center mb-9">Our Journey</h2>
        <div className="flex justify-center">
          <div className="w-full max-w-lg relative">
            {/* Timeline dots and lines */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300 -left-3 timeline-line"></div> 
            <div className="mb-12">
              <h3 className="text-xl font-semibold mx-3 text-white mb-4">Education</h3>
              {sortedEducationEvents && sortedEducationEvents.map((event, index) => (
                <div
                  key={event._id}
                  className="event-container relative rounded-lg p-4 shadow-md mb-6"
                >
                  <span
                    className="timeline-dot absolute w-4 h-4 bg-white rounded-full left-[-6px] top-[calc(50% - 2px)]"
                  ></span>
                  <div className="event relative ml-8">
                    <h4 className="text-lg text-white font-semibold mb-2">{event.company_name}</h4>
                    <p className="text-sm text-white mb-2">{event.jobTitle} | {event.jobLocation}</p>
                    <ul className="list-disc list-inside">
                      {event.bulletPoints.map((point, idx) => (
                        <li key={idx} className="text-sm text-white">{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-white mx-3 mb-4">Experience</h3>
              {sortedExperienceEvents && sortedExperienceEvents.map((event, index) => (
                <div
                  key={event._id}
                  className="event-container relative rounded-lg p-4 shadow-md mb-6"
                >
                  <span
                    className="timeline-dot absolute w-4 h-4 bg-white rounded-full left-[-6px] top-[calc(50% - 2px)]"
                  ></span>
                  <div className="event relative ml-8">
                    <h4 className="text-lg font-semibold text-white mb-2">{event.company_name}</h4>
                    <p className="text-sm text-white mb-2">{event.jobTitle} | {event.jobLocation}</p>
                    <ul className="list-disc list-inside">
                      {event.bulletPoints.map((point, idx) => (
                        <li key={idx} className="text-sm text-white">{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
