 
import paper from '../images/paper-rocket.svg';
function Admissions() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-[#23395d] to-[#a186b0] text-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Admissions</h1>
        <p className="text-lg sm:text-xl text-gray-200">
          Join our vibrant learning community at Deeveen International.
        </p>
          </div>
          <div className="w-full md:w-auto">
        <img 
          src={paper}
          alt="Students in classroom" 
          className="w-54 h-48 sm:w-86 sm:h-64 object-cover rounded-lg mx-auto"
        />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="order-2 md:order-1">
        <h2 className="section-title text-center md:text-left">Admission Process</h2>
        <div className="space-y-6">
          {[
            {
          step: "1",
          title: "Submit Inquiry Form",
          description: "Fill out our detailed inquiry form with your child's information."
            },
            {
          step: "2",
          title: "Parent Interaction",
          description: "Schedule a meeting with our academic team to discuss your child's needs."
            },
            {
          step: "3",
          title: "Campus Visit",
          description: "Tour our facilities and see our learning environment firsthand."
            },
            {
          step: "4",
          title: "Enrollment",
          description: "Complete the admission process and welcome to our community!"
            }
          ].map((step, index) => (
            <div key={index} className="flex items-start">
          <div className="flex-shrink-0 w-8 h-8 bg-[#23395d] text-white rounded-full flex items-center justify-center font-semibold">
            {step.step}
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-[#23395d]">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
            </div>
          ))}
        </div>
          </div>

          <div className="order-1 md:order-2">
        <div className="card p-4 sm:p-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-[#23395d] mb-6 text-center md:text-left">Admission Form</h3>
          <form className="space-y-4">
            <div>
          <label className="block text-gray-700 mb-2">Child's Full Name *</label>
          <input type="text" required className="input-field w-full" />
            </div>
            <div>
          <label className="block text-gray-700 mb-2">Date of Birth *</label>
          <input type="date" required className="input-field w-full" />
            </div>
            <div>
          <label className="block text-gray-700 mb-2">Program Applied For *</label>
          <select className="input-field w-full">
            <option>Pre Nursery</option>
            <option>Nursery</option>
            <option>LKG</option>
            <option>UKG</option>
          </select>
            </div>
            <div>
          <label className="block text-gray-700 mb-2">Parent's Name *</label>
          <input type="text" required className="input-field w-full" />
            </div>
            <div>
          <label className="block text-gray-700 mb-2">Contact Number *</label>
          <input type="tel" required className="input-field w-full" />
            </div>
            <div>
          <label className="block text-gray-700 mb-2">Email Address *</label>
          <input type="email" required className="input-field w-full" />
            </div>
            <div>
          <label className="block text-gray-700 mb-2">Address</label>
          <textarea rows={3} className="input-field w-full"></textarea>
            </div>
            <button type="submit" className="btn-primary w-full">
          Submit Application
            </button>
          </form>
        </div>
          </div>
        </div>
      </div>
        </div>
  );
}

export default Admissions;