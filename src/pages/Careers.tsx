import React from 'react';
import { Briefcase, GraduationCap, Heart, Star, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

function Careers() {
  const positions = [
    {
      title: "Preschool Teachers",
      departments: ["Playgroup", "Nursery", "Pre Primary-1", "Pre Primary-2"],
      requirements: ["Early Childhood Education degree", "2+ years experience", "Creative and patient"],
      icon: <GraduationCap className="h-8 w-8 text-[#23395d]" />
    },
    {
      title: "Assistant Teachers",
      departments: ["All departments"],
      requirements: ["Education degree", "1+ year experience", "Energetic and caring"],
      icon: <Heart className="h-8 w-8 text-[#23395d]" />
    },
    {
      title: "Center Head",
      departments: ["Administration"],
      requirements: ["5+ years in education management", "Leadership skills", "Strong communication"],
      icon: <Star className="h-8 w-8 text-[#23395d]" />
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="page-header">
        <div className="page-content">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl text-gray-200">
              Love working with kids? Passionate about teaching? Join our vibrant preschool community where curiosity meets creativity!
            </p>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* Current Openings */}
        <section className="mb-16">
          <h2 className="section-title">Current Openings</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {positions.map((position, index) => (
              <div key={index} className="card hover-card">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-[#f0f4f8] rounded-lg">
                    {position.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#23395d] ml-3">{position.title}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#a186b0] mb-2">Departments</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {position.departments.map((dept, i) => (
                        <li key={i}>{dept}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#a186b0] mb-2">Requirements</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {position.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <button
                    className="btn-primary w-full mt-4"
                    onClick={() => {
                      const subject = encodeURIComponent(`Application for ${position.title}`);
                      const body = encodeURIComponent(
                        `Hello,\n\nI am interested in applying for the position of ${position.title}.\n\n` +
                        `Departments: ${position.departments.join(', ')}\n` +
                        `Requirements: ${position.requirements.join(', ')}\n\n` +
                        `Please find my details below:\n` +
                        `Name:\nContact:\nEmail:\nResume Link:\n\nThank you!`
                      );
                      window.location.href = `mailto:info@deeveeninternational.com?subject=${subject}&body=${body}`;
                    }}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Who Can Apply */}
        <section className="mb-16">
          <h2 className="section-title">Who Can Apply</h2>
          <div className="card bg-[#f0f4f8]">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#23395d] mb-4">Eligibility</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Briefcase className="h-5 w-5 text-[#a186b0] mt-1 mr-2" />
                    Vacancies open for female preschool teachers & caregivers
                  </li>
                  <li className="flex items-start">
                    <GraduationCap className="h-5 w-5 text-[#a186b0] mt-1 mr-2" />
                    NTT / Montessori / Early Childhood Education / Graduates
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#23395d] mb-4">Required Skills</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <Heart className="h-5 w-5 text-[#a186b0] mr-2" />
                    Patience & Care
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-[#a186b0] mr-2" />
                    Communication
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-[#a186b0] mr-2" />
                    Creativity
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="mb-16">
          <h2 className="section-title">Why Work With Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Development",
                description: "Hands-on training and continuous learning opportunities",
                icon: <GraduationCap className="h-8 w-8 text-[#23395d]" />
              },
              {
                title: "Supportive Environment",
                description: "Nurturing and collaborative work culture",
                icon: <Heart className="h-8 w-8 text-[#23395d]" />
              },
              {
                title: "Growth Opportunities",
                description: "Career advancement and skill development",
                icon: <Star className="h-8 w-8 text-[#23395d]" />
              }
            ].map((benefit, index) => (
              <div key={index} className="card hover-card text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-[#f0f4f8] rounded-full">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#23395d] mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-[#23395d] rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact for Applications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center">
              <Phone className="h-6 w-6 mr-3" />
              <span>94934 31854</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="h-6 w-6 mr-3" />
              <span>info@deeveeninternational.com</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="h-6 w-6 mr-3" />
              <span>Venkateshwara Nagar, Jadcherla</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Careers;
