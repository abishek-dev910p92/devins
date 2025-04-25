import React from 'react';

function Parents() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-[#23395d] to-[#a186b0] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Parents' Corner</h1>
          <p className="text-xl text-gray-200">
            Resources and information for our parent community.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="section-title">Partnering in Your Child’s Growth</h2>
            <div className="space-y-6">
              <p className="text-gray-600">
              At Deeveen International, we believe that parents are a child’s first and most important teachers. Our goal is to build a strong parent-school partnership to ensure that children receive a consistent and supportive learning experience both at home and in school.
              </p>
                <h3 className="text-2xl font-semibold text-[#23395d] mt-8 mb-4">How We Engage Parents</h3>
                <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#23395d]">
                  <h4 className="font-semibold text-[#23395d] mb-2">Regular Parent-Teacher Interactions</h4>
                  <p className="text-gray-600">We conduct periodic meetings to discuss each child's progress and learning journey.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#a186b0]">
                  <h4 className="font-semibold text-[#23395d] mb-2">Workshops & Parenting Sessions</h4>
                  <p className="text-gray-600">We empower parents with expert insights on child development, learning strategies, and emotional well-being.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#ffdf5a]">
                  <h4 className="font-semibold text-[#23395d] mb-2">Regular Updates</h4>
                  <p className="text-gray-600">Through our robust communication model, parents receive real-time updates, activity reports, and learning milestones.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#23395d]">
                  <h4 className="font-semibold text-[#23395d] mb-2">Family Events & Celebrations</h4>
                  <p className="text-gray-600">We host interactive events, storytelling sessions, and cultural programs where parents actively participate in their child's educational experience.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#a186b0]">
                  <h4 className="font-semibold text-[#23395d] mb-2">Home Learning Support</h4>
                  <p className="text-gray-600">Our structured home learning activities ensure that children continue to engage meaningfully outside the classroom.</p>
                </div>
                </div>
            </div>

            <h2 className="section-title mt-12">SmartK Collaboration</h2>
            <p className="text-gray-600 mb-6">
              Our partnership with SmartK enables us to provide structured lesson plans,
              interactive digital tools, and continuous assessment support.
            </p>
          </div>

          <div>
            <div className="card">
              <h3 className="text-2xl font-semibold text-[#23395d] mb-6">Parent FAQs</h3>
              <div className="space-y-6">
                {[
                  {
                    question: "What are the school timings?",
                    answer: "Our school operates from 9:00 AM to 3:30 PM, Monday through Friday."
                  },
                  {
                    question: "How do you handle food and snacks?",
                    answer: "We provide nutritious snacks and meals prepared in our hygienic kitchen."
                  },
                  {
                    question: "What safety measures are in place?",
                    answer: "We have CCTV surveillance, trained staff, and strict security protocols."
                  },
                  {
                    question: "How do you communicate with parents?",
                    answer: "Through our mobile app, regular newsletters, and parent-teacher meetings."
                  }
                ].map((faq, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-[#23395d] mb-2">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
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

export default Parents;