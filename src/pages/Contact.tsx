import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

function Contact() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-[#23395d] to-[#a186b0] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Contact Us – Let’s Connect & Shape Your Child’s Future!</h1>
          <p className="text-xl text-gray-200">
          Have questions? Need guidance on admissions? We’d love to hear from you! Our friendly team is here to assist you in making the best choice for your child’s education.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="section-title">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-[#23395d] mr-4" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+91-94934 31854 (Available Mon-Fri, 9 AM - 6 PM)</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-[#23395d] mr-4" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">info@deeveeninternational.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-[#23395d] mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">
                    Venkateshwara Nagar, Near Imperial Garden Road,<br />
                    'X' Roads, Jadcherla-509301
                  </p>
                </div>
              </div>
</div>
<div className="mt-12 bg-gradient-to-r from-[#23395d] to-[#a186b0] rounded-lg p-6 text-white shadow-lg">
  <h2 className="text-2xl font-bold mb-4">🎯 Book a Personalized School Tour!</h2>
  <p className="mb-4">
    Experience our vibrant classrooms and see our interactive learning spaces in action.
    Schedule a visit at your convenience.
  </p>
  <div className="mt-6">
    <h3 className="text-lg font-semibold mb-3">📱 Follow Us on Social Media:</h3>
    <div className="space-y-2">
      <a href="https://instagram.com/deeveen_preschool" className="flex items-center hover:text-gray-200">
        <span className="mr-2">📷</span> Instagram: @deeveen_preschool
      </a>
      <a href="https://facebook.com/DeeveenPreschool" className="flex items-center hover:text-gray-200">
        <span className="mr-2">📘</span> Facebook: Deeveen Preschool
      </a>
    </div>
  </div>
  <button className="mt-6 bg-white text-[#23395d] px-6 py-2 rounded-full font-semibold 
    hover:bg-gray-100 transition duration-300">
    Schedule Your Tour Now
  </button>
</div>
            <div className="mt-12">
              <h2 className="section-title">Office Hours</h2>
              <div className="space-y-2">
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div>
            <div className="card">
              <h3 className="text-2xl font-semibold text-[#23395d] mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Your Name *</label>
                  <input type="text" required className="input-field" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email Address *</label>
                  <input type="email" required className="input-field" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" className="input-field" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Subject *</label>
                  <input type="text" required className="input-field" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message *</label>
                  <textarea rows={4} required className="input-field"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;