// Code for the About page.
import { BookOpen, Users, Star, Globe } from 'lucide-react';
import Logo from '../images/logo.png';
function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">About</h1>
          <p className="text-xl">Nurturing young minds for a brighter tomorrow</p>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <img 
            src={Logo} 
            alt="About Us" 
            className="rounded-lg   w-full max-w-md h-auto"
          />
        </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="card">
            <h2 className="text-2xl font-bold text-[#23395d] mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To create a joyful and enriching space where young minds flourish with curiosity, 
              confidence, and creativity. Through nurturing care and globally recognized early 
              learning, we prepare children for a future full of possibilities.
            </p>
          </div>
          <div className="card">
            <h2 className="text-2xl font-bold text-[#23395d] mb-4">Our Mission</h2>
            <p className="text-gray-600">
              At Deeveen International, we believe every child is unique and full of potential. 
              Through play-based learning, a nurturing environment, and global best practices, 
              we inspire curiosity, build confidence, and lay strong foundations for lifelong learning.
            </p>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-12">
          <h2 className="section-title">Our Philosophy</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <BookOpen className="h-8 w-8 text-[#23395d]" />,
                title: "Play-Based Learning",
                description: "Integrating fun and education through interactive activities"
              },
              {
                icon: <Users className="h-8 w-8 text-[#23395d]" />,
                title: "Social Development",
                description: "Building confidence and communication skills"
              },
              {
                icon: <Star className="h-8 w-8 text-[#23395d]" />,
                title: "Individual Growth",
                description: "Recognizing each child's unique potential"
              },
              {
                icon: <Globe className="h-8 w-8 text-[#23395d]" />,
                title: "Global Perspective",
                description: "Preparing children for a connected world"
              }
            ].map((philosophy, index) => (
              <div key={index} className="card text-center">
                <div className="flex justify-center mb-4">{philosophy.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#23395d]">{philosophy.title}</h3>
                <p className="text-gray-600">{philosophy.description}</p>
              </div>
            ))}
          </div>
        </div>

 {/* our teaching */}
<div className="mt-12">
  <h2 className="section-title text-center mb-8">How Our Teaching Approach Aligns with Global Theories</h2>
  <div className="grid md:grid-cols-2 gap-8 mt-6">
    <div className="card transform hover:scale-105 transition-transform duration-300 hover:shadow-lg border-l-4 border-blue-500">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
          <BookOpen className="h-6 w-6 text-blue-500" />
        </div>
        <h3 className="text-xl font-semibold text-[#23395d]">Howard Gardner's Multiple Intelligences Theory</h3>
      </div>
      <p className="text-gray-600 pl-16">
        At Deeveen, we recognize that every child learns differently. Our curriculum incorporates visual, auditory, 
        kinesthetic, interpersonal, intrapersonal, linguistic, logical, and musical intelligence-based learning to 
        ensure a personalized approach to education.
      </p>
    </div>
    <div className="card transform hover:scale-105 transition-transform duration-300 hover:shadow-lg border-l-4 border-green-500">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
          <Star className="h-6 w-6 text-green-500" />
        </div>
        <h3 className="text-xl font-semibold text-[#23395d]">John Dewey's Learning by Doing</h3>
      </div>
      <p className="text-gray-600 pl-16">
        We embrace experiential and activity-based learning, encouraging children to engage in hands-on activities 
        that foster curiosity, creativity, and problem-solving.
      </p>
    </div>
    <div className="card transform hover:scale-105 transition-transform duration-300 hover:shadow-lg border-l-4 border-purple-500">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
          <Users className="h-6 w-6 text-purple-500" />
        </div>
        <h3 className="text-xl font-semibold text-[#23395d]">Lev Vygotsky's Social Development Theory</h3>
      </div>
      <p className="text-gray-600 pl-16">
        Collaboration and interaction are key aspects of our approach. Through guided learning, peer interactions, 
        and role-playing activities, children develop communication skills, teamwork, and critical thinking.
      </p>
    </div>
    <div className="card transform hover:scale-105 transition-transform duration-300 hover:shadow-lg border-l-4 border-orange-500">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
          <Globe className="h-6 w-6 text-orange-500" />
        </div>
        <h3 className="text-xl font-semibold text-[#23395d]">Friedrich Froebel's Play-Based Learning</h3>
      </div>
      <p className="text-gray-600 pl-16">
        We integrate structured and free play into our daily routine, ensuring children learn through exploration, 
        sensory activities, and imagination, making learning enjoyable and impactful.
      </p>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}

export default About;