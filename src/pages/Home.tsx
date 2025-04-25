 
import { 
  Heart, 
  BookOpen, 
  Users, 
  Shield, 
  Sparkles,
  ChevronRight,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';
import school_girl from '../images/school girl hero.png';
import hero_girl from '../images/boy.jpg';
import add from '../images/girl.jpeg';
import boy2 from '../images/boy2.png';
import boy3 from '../images/boy3.png';
import boy4 from '../images/boy4.png';
import f from '../images/boy.jpg';
import s from '../images/f1.png';

function Home() {
  return (
    <>
    <br />
    <br />
    <br />
    <div className="min-h-screen">
 
      <section className="relative min-h-screen overflow-hidden">
        {/* Enhanced animated doodle background */}
        <div className="absolute inset-0 bg-white">
          <div className="absolute inset-0">
            {[...Array(40)].map((_, i) => ( // Increased number of doodles
              <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
            opacity: 0.4,
            animation: `float ${Math.random() * 4 + 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
              >
          {Math.random() > 0.80 ? (
            // Playful stars
            <svg width="40" height="40" viewBox="0 0 40 40">
              <path
                d="M20 0L23 15L38 20L23 25L20 40L17 25L2 20L17 15Z"
                stroke="#23395d"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          ) : Math.random() > 0.5 ? (
            // Swirly doodles
            <svg width="50" height="50" viewBox="0 0 50 50">
              <path
                d="M10 25C10 15 25 15 25 25C25 35 40 35 40 25"
                stroke="#ffdf5a"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          ) : Math.random() > 0.25 ? (
            // Heart doodles
            <svg width="30" height="30" viewBox="0 0 30 30">
              <path
                d="M15 25C15 25 25 15 25 10C25 5 20 5 15 10C10 5 5 5 5 10C5 15 15 25 15 25Z"
                stroke="#a186b0"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          ) : (
            // New: Cloud doodles
            <svg width="60" height="30" viewBox="0 0 60 30">
              <path
                d="M10 20C10 25 15 25 20 25C20 15 30 15 35 20C40 10 50 15 50 20C50 25 45 25 35 25C25 25 15 25 10 20Z"
                stroke="#23395d"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          )}
          
          {/* Additional decorative elements */}
          {Math.random() > 0.8 && (
            <circle
              cx="25"
              cy="25"
              r="3"
              fill="none"
              stroke="#ffdf5a"
              strokeWidth="1"
            />
          )}
          
          {Math.random() > 0.8 && (
            <rect
              x="0"
              y="0"
              width="10"
              height="10"
              fill="none"
              stroke="#a186b0"
              strokeWidth="1"
              transform="rotate(45)"
            />
          )}
              </div>
            ))}
          </div>
        </div>

        {/* Rest of the content remains the same */}
        <div className="container-wide relative z-20 h-screen flex items-center" style={{marginBottom: "4rem"}}>
          {/* ... existing content ... */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="space-y-5 text-white relative">
              <div className="animate-fade-in-up" style={{marginTop: "7rem"}}>
          <h1 
            style={{fontFamily:"'dancing script'", fontWeight: 700}} 
            className="text-4xl md:text-7xl leading-tight text-center animate-rainbow"
          >
            <span className="block">Where Little Stars</span>
            <span className="block mt-2 p-3">Begin to Shine!</span>
          </h1>
              </div>
              
              <p className="text-lg md:text-xl text-gray-800 animate-fade-in-up delay-200 text-center animate-pulse">
          "A Place Where Every Child Feels at Home Learning, Growing, and Thriving!"
              </p>

              <div className="flex flex-wrap gap-6 animate-fade-in-up delay-300 justify-center">
          <Link 
            to="/admissions" 
            className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-[#ffdf5c] to-[#ffe66d] text-[#23395d] rounded-full font-bold hover:transform hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10">Enroll Now!</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#ffdf5a] to-[#ffe66d] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"/>
            <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
          <div className="absolute inset-0"/>
          <img 
            src={f}
            alt="Happy children learning" 
            className="w-full h-full object-cover"
          />
              </div>
              
              <div className="absolute -bottom-0 -left-0 bg-white p-4 rounded-lg shadow-xl animate-float">
          <div className="text-[#23395d]">
            <div className="font-bold text-xl">15+ Years</div>
            <div className="text-sm">of Excellence</div>
          </div>
              </div>
              
              <div className="absolute -top-0 -right-4 bg-white p-4 rounded-lg shadow-xl animate-float delay-200">
          <div className="text-[#23395d]">
            <div className="font-bold text-xl">500+</div>
            <div className="text-sm">Happy Students</div>
          </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(10deg); }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes rainbow {
            0% { color: #ff0000; }
            16.666% { color: #ff8c00; }
            33.333% { color: #ffee00; }
            50% { color: #4de94c; }
            66.666% { color: #3783ff; }
            83.333% { color: #4815aa; }
            100% { color: #ff0000; }
          }

          .animate-rainbow {
            animation: rainbow 8s linear infinite;
          }
        `}</style>
            </section>
{/*cards secton */}

{/* Cards Section */}
<section className="py-20 bg-gradient-to-br from-[#ffdf5a] to-[#a186b0]">
  <div className="container-wide">
    <h2 className="section-title text-left ml-8 m-5 mb-12 text-white">Featured Highlights</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-10">
      {[
        {
          title: "Discover",
          bigText: "Early Learning",
          image: boy2,
          logo: <BookOpen className="h-5 w-5 text-[#23395d]" />
        },
        {
          title: "Create", 
          bigText: "Creative Arts",
          image: boy3, 
          logo: <Sparkles className="h-5 w-5 text-[#23395d]" />
        },
        {
          title: "Move",
          bigText: "Physical Activities", 
          image: boy4,
          logo: <Users className="h-5 w-5 text-[#23395d]" />
        }
      ].map((card, index) => (
        <div key={index} className="relative group">
          <div className="absolute -top-6 left-6 z-10 bg-white p-3 rounded-lg shadow-lg">
            {card.logo}
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="absolute top-4 left-24  font-semibold text-white z-10 text-4xl font-bold text-white opacity-70">
              {card.title}
            </h3>
            
            <div className="relative h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-[1]"></div>
              <img 
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


  {/* Why Choose Us */}
                <section className="py-20 bg-white">
              <div className="container-wide">
                <h2 className="section-title text-center">Why Choose Deeveen International for your child?</h2>
                <p className="text-center text-gray-600 mb-8">Perfect Student-Teacher Ratio for Personalized Care and Attention</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Heart className="h-8 w-8 text-white" />,
                  title: "Home-like Environment",
                  description: "A warm, welcoming atmosphere that eases children into learning without stress."
                },
                {
                  icon: <BookOpen className="h-8 w-8 text-white" />,
                  title: "Experiential Learning",
                  description: "Real-world exploration, hands-on activities, and discovery-based methods."
                },
                {
                  icon: <Users className="h-8 w-8 text-white" />,
                  title: "Parent Collaboration",
                  description: "Regular interactions, workshops, family events, and SmartK-powered engagement tools."
                },
                {
                  icon: <Shield className="h-8 w-8 text-white" />,
                  title: "Safe Campus",
                  description: "CCTV-secured with outdoor learning spaces and sensory-rich classrooms."
                },
                {
                  icon: <Sparkles className="h-8 w-8 text-white" />,
                  title: "Enriching Activities",
                  description: "Yoga, storytelling, STEM, dance, art, music, and field trips."
                }
              ].map((feature, index) => (
                <div key={index} className="card hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-[#23395d] to-[#a186b0] text-white border-none shadow-lg">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-100">{feature.description}</p>
                </div>
              ))}
                </div>
              </div>
            </section>  {/* Programs Preview */}
             {/* IDEA LOOM */}
          <section className="py-16 bg-gradient-to-r from-[#23395d] to-[#a186b0]">
            <div className="container-wide">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Content Side */}
                <div className="text-white space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Our Learning Approach
                  </h2>
                  <p className="text-lg">
                    We combine multiple disciplines to create an engaging and enriching experience for every child.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      {
                        
                        title: "Creative Arts",
                        desc: "Express through arts & crafts"
                      },
                      {
                        
                        title: "Early Literacy",
                        desc: "Build reading foundations"
                      },
                      {
                        
                        title: "Nature Study",
                        desc: "Environmental awareness"
                      },
                      {
                        
                        title: "Social Skills",
                        desc: "Interactive learning"
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors">
                        <span className="text-2xl mb-2 block">{item.icon}</span>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-200">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Side */}
                <div className="relative">
                  <img 
                    src={school_girl}
                    alt="Students learning"
                    className="rounded-lg shadow-lg w-full object-cover"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-xl">
                    <div className="flex flex-col items-center">
                      <p className="text-[#23395d] font-bold text-2xl">15+ Years</p>
                      <p className="text-gray-600 text-sm">of Excellence</p>
                    </div>
                  </div>
                  </div>
                  <div className="absolute -top-4 -left-4 bg-[#ffdf5a]/20 w-20 h-20 rounded-full blur-lg"></div>
                </div>  </div>
          </section>


      <section className="py-20 bg-gradient-to-br from-[#ffdf5a] to-[#a186b0] relative overflow-hidden">
        {/* Background Doodles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          transform: `rotate(${Math.random() * 360}deg)`,
          opacity: 0.1,
          animation: `float ${Math.random() * 4 + 3}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 2}s`
              }}
            >
              {Math.random() > 0.5 ? (
          // Playful circles with pulse animation
          <svg width="40" height="40" viewBox="0 0 40 40" className="animate-pulse">
            <circle 
              cx="20" 
              cy="20" 
              r="15" 
              fill="none" 
              stroke="#23395d" 
              strokeWidth="2"
              strokeDasharray={Math.random() > 0.5 ? "5,5" : "none"}
              className="animate-spin-slow"
            />
          </svg>
              ) : Math.random() > 0.5 ? (
          // Wavy lines with wave animation
          <svg width="50" height="20" viewBox="0 0 50 20" className="animate-bounce-slow">
            <path
              d="M0 10 Q12.5 0, 25 10 T 50 10"
              fill="none"
              stroke="#23395d"
              strokeWidth="2"
              className="animate-wave"
            />
          </svg>
              ) : (
          // Stars with spin animation
          <svg width="30" height="30" viewBox="0 0 30 30" className="animate-spin-slow">
            <path
              d="M15 0L18 12L30 15L18 18L15 30L12 18L0 15L12 12Z"
              fill="none"
              stroke="#23395d"
              strokeWidth="1"
            />
          </svg>
              )}
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes wave {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }
          .animate-wave {
            animation: wave 3s ease-in-out infinite;
          }
          .animate-bounce-slow {
            animation: bounce-slow 4s ease-in-out infinite;
          }
        `}</style>

        <div className="container-wide relative z-10">
          {/* Rest of the content remains the same */}
          <h2 className="section-title text-center text-white">Our Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
          title: "Readiness",
          subtitle: "Pre Nursery",
          description: "Sensory play, early socialization, and hands-on learning."
              },
              {
          title: "Discovery",
          subtitle: "Nursery",
          description: "Language building, motor skills, and creative play."
              },
              {
          title: "Explorer",
          subtitle: "Pre Primary-1 LKG",
          description: "Basic literacy, numeracy, and interactive activities."
              },
              {
          title: "Achiever",
          subtitle: "Pre Primary-2 UKG",
          description: "Advanced concepts, critical thinking, and school readiness."
              }
            ].map((program, index) => (
              <div key={index} className="card hover:border-[#23395d] border-2 border-transparent bg-white">
          <h3 className="text-xl font-semibold text-[#23395d]">{program.title}</h3>
          <p className="text-[#a186b0] mb-4">{program.subtitle}</p>
          <p className="text-gray-600">{program.description}</p>
          <Link
            to="/programs"
            className="mt-4 inline-flex items-center text-[#23395d] hover:text-[#a186b0]"
          >
            Learn More <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
              </div>
            ))}
          </div>
        </div>
            </section>

      {/* Kids Health and Fitness Section */}
        <section className="py-20 relative overflow-hidden">
              {/* Doodle background elements */}
              <div className="absolute inset-0 opacity-15">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            >
              {/* Random doodle shapes */}
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                {Math.random() > 0.5 ? (
            // Star doodle
            <path 
              d="M30 5L35 25L55 30L35 35L30 55L25 35L5 30L25 25L30 5Z" 
              stroke="#23395d"
              strokeWidth="2"
              fill="none"
            />
                ) : (
            // Squiggly circle doodle
            <path 
              d="M30 10C40 10 45 20 45 30C45 40 35 50 25 45C15 40 15 30 20 20C25 10 35 10 30 10Z" 
              stroke="#ffdf5a"
              strokeWidth="2"
              fill="none"
            />
                )}
              </svg>
            </div>
          ))}
              </div>

              {/* Original content */}
              <div className="container-wide relative z-10">
              <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#23395d] mb-4 relative inline-block">
              Nurturing Healthy Bodies & Minds
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-[#ffdf5a] opacity-50 transform -skew-x-12"></div>
              </h2>
              <p className="text-gray-600 text-lg">Where fitness meets fun and learning!</p>
              </div>

              <div className="flex flex-col lg:flex-row gap-12">
              {/* Interactive Image Side */}
              <div className="lg:w-2/5">
              <div className="relative group">
          <img 
              src={s} 
              alt="Kids fitness activities" 
              className="rounded-2xl transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#23395d]/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-6 left-6 text-white">
          <p className="text-2xl font-bold">Daily Activities</p>
          <p className="text-sm">Building stronger, healthier futures</p>
              </div>
          </div>
              </div>
              </div>

              {/* Interactive Content Side */}
              <div className="lg:w-3/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
              {
          title: "Mindful Movement",
          description: "Yoga and meditation sessions that calm the mind and strengthen the body"
              },
              {
          title: "Active Play",
          description: "Fun sports activities that develop coordination and team spirit"
              },
              {
          title: "Brain Boost",
          description: "Engaging puzzles and games that sharpen cognitive skills"
              },
              {
          title: "Rhythmic Expression",
          description: "Dance and movement that unleash creativity and joy"
              }
          ].map((activity, index) => (
              <div 
          key={index} 
          className="p-6 rounded-xl bg-gradient-to-br from-[#23395d] to-[#a186b0] transform hover:-translate-y-2 
           transition-all duration-300 hover:shadow-xl group cursor-pointer"
              >
          <h3 className="text-xl font-bold text-white mb-2">{activity.title}</h3>
          <p className="text-white/90 group-hover:text-white transition-colors">{activity.description}</p>
              </div>
          ))}
              </div>
              </div>
              </div>
              </div>

              <style>{`
              @keyframes float {
              0%, 100% { transform: translateY(0) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(10deg); }
              }
              .animate-float {
              animation: float 6s ease-in-out infinite;
              }
              `}</style>
            </section>
{/* Admissions Banner */}
<section className="py-16 px-4 bg-white relative overflow-hidden">
  <div className="container-wide mx-auto">
    <div className="bg-gradient-to-r from-[#23395d] to-[#a186b0] rounded-2xl p-8 shadow-xl relative overflow-hidden">
      <div className="container-wide relative z-10">
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Content Side */}
      <div className="md:w-1/2 text-white text-center md:text-left">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Admissions Open for 2025-26!
          </h2>
          <div className="space-y-4">
            <p className="text-xl text-gray-100">
              Give your child the gift of quality education in a nurturing environment.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <span className="block text-2xl font-bold">Limited Seats</span>
                <span className="text-sm">Don't miss out!</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <span className="block text-2xl font-bold">Early Bird</span>
                <span className="text-sm">Special Benefits</span>
              </div>
            </div>
          </div>
          <Link 
            to="/admissions" 
            className="inline-block mt-6 px-8 py-3 bg-white text-[#23395d] rounded-full font-semibold hover:bg-[#ffdf5a] transition-colors duration-300"
          >
            Apply Now →
          </Link>
        </div>
      </div>
      
      {/* Image Side */}
      <div className="md:w-1/2 relative w-full">
        <div className="relative h-48 md:h-80 w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffdf5a]/20 to-transparent rounded-lg overflow-hidden">
            <img 
              src={add}
              alt="Happy students"
              className="w-full h-full object-cover rounded-lg mix-blend-overlay"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 right-1 bg-white p-2 rounded-lg shadow-lg">
            <div className="text-[#23395d] font-semibold">
              <div className="text-sm">Starting from</div>
              <div className="text-2xl">Pre-Nursery</div>
              <div className="text-sm">to UKG</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  {/* Decorative Elements */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffdf5a]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#a186b0]/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
    </div>
  </div>
</section>  


{/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <h2 className="section-title text-center">What Parents Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "The nurturing environment and dedicated teachers have made a remarkable difference in my child's development.",
                author: "Riddhi G.",
                role: "Parent of Kanishka"
              },
              {
                text: "We're amazed by the progress our daughter has made. The curriculum is engaging and well-structured.",
                author: "Padma.",
                role: "Parent of Siddesh "
              },
              {
                text: "The school's approach to learning through play has helped my son develop a love for learning.",
                author: "Jayshree.",
                role: "Parent of Vanisha "
              }
            ].map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-[#ffdf5a]" fill="#ffdf5a" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-[#23395d]">{testimonial.author}</p>
                  <p className="text-[#a186b0]">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
          Enroll Today & Give Your Child a Strong Foundation for Lifelong Learning!
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Schedule a visit to our campus and discover the perfect learning environment for your child.
          </p>
          <Link
            to="/contact"
            className="btn-secondary inline-flex items-center"
          >
            Get in Touch <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}

export default Home;