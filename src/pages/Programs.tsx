import React from 'react';
import { Star, Clock, Users, BookOpen } from 'lucide-react';
import Logo from '../images/kids.jpg';
function Programs() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="gradient-bg text-white py-12 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Learning Programs</h1>
          <p className="text-lg md:text-xl">At Deeveen International, we believe that every stage of early childhood is a stepping stone toward lifelong learning. Our programs are thoughtfully designed to meet children at their developmental level, ensuring they receive the right balance of structure, creativity, and exploration. By integrating play-based learning, hands-on activities, and inquiry-driven approaches, we create an environment where children develop cognitive, social, emotional, and physical skills seamlessly.</p>
        </div>
        <img 
          src={Logo}
          alt="Children learning" 
          className="w-64 md:w-80 h-auto object-cover rounded-lg"
        />
          </div>
        </div>
      </div>

      {/* Programs Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Readiness",
              subtitle: "Pre Nursery",
              age: "2-3 years",
              description: "Early socialization and sensory development through play-based activities.",
              features: [
                "Basic motor skills development",
                "Introduction to colors and shapes",
                "Social interaction activities",
                "Sensory play sessions"
              ]
            },
            {
              title: "Discovery",
              subtitle: "Nursery",
              age: "3-4 years",
              description: "Building foundation through structured play and learning activities.",
              features: [
                "Language development",
                "Number concepts",
                "Creative activities",
                "Physical development"
              ]
            },
            {
              title: "Explorer",
              subtitle: "Pre Primary-1 LKG",
              age: "4-5 years",
              description: "Advancing skills through interactive and engaging learning experiences.",
              features: [
                "Basic literacy skills",
                "Mathematical concepts",
                "Environmental awareness",
                "Art and craft activities"
              ]
            },
            {
              title: "Achiever",
              subtitle: "Pre Primary-2 UKG",
              age: "5-6 years",
              description: "Preparing for primary education with comprehensive skill development.",
              features: [
                "Advanced literacy",
                "Mathematical operations",
                "Science exploration",
                "Project-based learning"
              ]
            }
          ].map((program, index) => (
            <div key={index} className="card">
              <div className="bg-[#23395d] text-white p-4 rounded-t-lg">
                <h3 className="text-xl font-semibold">{program.title}</h3>
                <p className="text-[#ffdf5a]">{program.subtitle}</p>
              </div>
              <div className="p-6">
                <p className="text-[#a186b0] mb-4">Age Group: {program.age}</p>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Star className="h-4 w-4 text-[#ffdf5a] mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Curriculum Highlights */}
        <div className="mt-12">
          <h2 className="section-title">Curriculum Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="h-12 w-12 text-[#23395d]" />,
                title: "Daily Schedule",
                items: [
                  "Morning Circle Time",
                  "Structured Learning",
                  "Activity Centers",
                  "Outdoor Play",
                  "Rest and Reflection"
                ]
              },
              {
                icon: <BookOpen className="h-12 w-12 text-[#23395d]" />,
                title: "Learning Areas",
                items: [
                  "Language & Literacy",
                  "Mathematics",
                  "Science & Discovery",
                  "Arts & Creativity",
                  "Physical Development"
                ]
              },
              {
                icon: <Users className="h-12 w-12 text-[#23395d]" />,
                title: "Special Activities",
                items: [
                  "Music & Movement",
                  "Storytelling",
                  "Cultural Celebrations",
                  "Field Trips",
                  "Parent Workshops"
                ]
              }
            ].map((section, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-6">
                  {section.icon}
                  <h3 className="text-xl font-semibold ml-4 text-[#23395d]">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <Star className="h-4 w-4 text-[#ffdf5a] mr-2" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Program Benefits */}
        <div className="mt-12 bg-[#23395d] text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Program Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Personalized attention with small class sizes",
              "Regular progress updates and parent meetings",
              "Safe and nurturing learning environment",
              "Qualified and experienced teachers",
              "Age-appropriate learning materials",
              "Focus on holistic development"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center">
                <Star className="h-6 w-6 text-[#ffdf5a] mr-3 flex-shrink-0" />
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programs;