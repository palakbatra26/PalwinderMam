import React, { useState } from 'react';

function QueryForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch("https://formspree.io/f/xeogergo", {
        method: "POST",
        body: new FormData(e.target),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setMessage('Your query has been submitted successfully! We will get back to you soon.');
        e.target.reset();
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting query:', error);
      setMessage('Failed to submit query. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4" style={{ backgroundColor: 'rgb(254, 249, 231)', color: 'black' }}>
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Hostel Query Form</h2>

      {message && (
        <div className={`p-4 mb-4 rounded-lg ${message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {message}
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="name"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="classBranch" className="block text-sm font-medium text-gray-700">Class/Branch<span className="text-red-500">*</span></label>
          <input
            type="text"
            name="classBranch"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile No. <span className="text-red-500">*</span></label>
          <input
            type="tel"
            name="mobile"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
          <input
            type="email"
            name="_replyto"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="problem" className="block text-sm font-medium text-gray-700">Problem/Description <span className="text-red-500">*</span></label>
          <textarea
            name="message"
            rows="4"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default QueryForm;