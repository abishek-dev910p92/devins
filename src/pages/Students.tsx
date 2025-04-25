import React from 'react';

function Students() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-[#23395d] to-[#a186b0] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Students – A Fun & Engaging Learning Journey</h1>
            <p className="text-xl text-gray-200">
            At Deeveen International, we believe that learning should be an exciting adventure! Our student-centered approach ensures that every child experiences a joyful, stimulating, and enriching journey in the classroom and beyond.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Daily Activities",
              items: [
                "Morning circle time",
                "Outdoor play",
                "Art and craft",
                "Story time",
                "Music and movement"
              ]
            },
            {
              title: "Special Programs",
              items: [
                "STEM activities",
                "Language development",
                "Physical education",
                "Cultural celebrations",
                "Field trips"
              ]
            },
            {
              title: "Learning Areas",
              items: [
                "Reading corner",
                "Art studio",
                "Science lab",
                "Play area",
                "Music room"
              ]
            }
          ].map((section, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-semibold text-[#23395d] mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-[#ffdf5a] rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-[#23395d] mb-12">
            A Day at Deeveen
            <div className="w-20 h-1 bg-[#ffdf5a] mx-auto mt-4"></div>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="card hover:shadow-xl transition-shadow duration-300 bg-white rounded-lg p-6 border-t-4 border-[#23395d]">
          <h3 className="text-2xl font-semibold text-[#23395d] mb-6 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"/>
            </svg>
            Morning Schedule
          </h3>
              <div className="space-y-6">
          {[
            { time: "8:30 AM", activity: "Arrival & Free Play", purpose: "Settling in, social interaction" },
            { time: "8:45 AM", activity: "Morning Circle Time", purpose: "Exercise/Yoga, Greetings, prayer, weather talk, story/rhyme" },
            { time: "9:00 AM", activity: "Theme-Based Learning", purpose: "Core subject activities (General Awareness, Language)" },
            { time: "9:30 AM", activity: "Outdoor Play & Gross Motor Activities", purpose: "Strength & coordination (Running, Sand Play, Water Play)" },
            { time: "10:00 AM", activity: "Snack Break", purpose: "Healthy eating & social bonding" },
            { time: "10:15 AM", activity: "Numeracy / Fine Motor Activities", purpose: "Math readiness, sorting, counting, shape recognition" }
          ].map((schedule, index) => (
            <div key={index} className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
              <span className="w-24 font-bold text-[#23395d] flex-shrink-0 bg-[#ffdf5a] px-2 py-1 rounded-md text-sm">{schedule.time}</span>
              <div className="flex flex-col flex-grow">
                <span className="text-gray-800 font-medium">{schedule.activity}</span>
                <span className="text-gray-500 text-sm mt-1">{schedule.purpose}</span>
              </div>
            </div>
          ))}
              </div>
            </div>
            <div className="card hover:shadow-xl transition-shadow duration-300 bg-white rounded-lg p-6 border-t-4 border-[#a186b0]">
              <h3 className="text-2xl font-semibold text-[#23395d] mb-6 flex items-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
          Late Morning Schedule
              </h3>
              <div className="space-y-6">
          {[
            { time: "10:45 AM", activity: "Creative Time (Art, Music, Dance)", purpose: "Expression through craft, singing, movement" },
            { time: "11:15 AM", activity: "Concept-Based Hands-on Activity", purpose: "Science, cooking, sensory activities" },
            { time: "11:45 AM", activity: "Outdoor Exploration / Sports", purpose: "Physical education, free play" },
            { time: "12:15 PM", activity: "Language & Reading Time", purpose: "Picture books, phonics, vocabulary building" },
            { time: "12:45 PM", activity: "Closing Circle & Departure", purpose: "Reflection, recap, goodbyes" }
          ].map((schedule, index) => (
            <div key={index} className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
              <span className="w-24 font-bold text-[#23395d] flex-shrink-0 bg-[#ffdf5a] px-2 py-1 rounded-md text-sm">{schedule.time}</span>
              <div className="flex flex-col flex-grow">
                <span className="text-gray-800 font-medium">{schedule.activity}</span>
                <span className="text-gray-500 text-sm mt-1">{schedule.purpose}</span>
              </div>
            </div>
          ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Students;