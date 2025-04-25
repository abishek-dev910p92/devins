import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent",
      content: "The nurturing environment and dedicated teachers at Deeveen International have made a remarkable difference in my child's development.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
      name: "Rajesh Kumar",
      role: "Parent",
      content: "We're amazed by the progress our daughter has made. The school's approach to learning through play is exceptional.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
    },
    {
      name: "Meera Patel",
      role: "Parent",
      content: "The perfect balance of academics and activities has helped my son develop holistically. Couldn't be happier with our choice.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">What Parents Say</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
              <h3 className="font-semibold text-[#23395d]">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;