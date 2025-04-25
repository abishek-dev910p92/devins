import React, { useState } from 'react';

function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('subscribed');
    setEmail('');
  };

  return (
    <div className="bg-[#23395d] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-8">
            Subscribe to our newsletter for updates, events, and educational insights.
          </p>
          {status === 'subscribed' ? (
            <div className="text-[#ffdf5a] font-semibold">
              Thank you for subscribing! We'll keep you updated.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffdf5a]"
                />
                <button type="submit" className="btn-secondary">
                  Subscribe
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewsletterSignup;