import React from 'react';

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen p-4"> {/* Removed flex and justify-center items-center */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto h-full overflow-y-auto text-center"> {/* Added mx-auto */}
        <h1 className="font-bold text-4xl text-blue-600 mb-6">Girls Hostel No 4 </h1>

        <h2 className="font-semibold text-2xl text-blue-500 mt-6">Established by</h2>
        <p className="text-lg text-gray-700 mb-4">Respected Sardar Gurcharan Singh Tehat</p>
        <p className="text-lg text-gray-700 mb-6">Former President, Shiromani Gurdwara Parbandhak Committee on 21 December 1990</p>

        <h2 className="font-semibold text-2xl text-blue-500 mt-6">Guru Nanak Engineering College</h2>
        <p className="text-lg text-gray-700 mb-4">
          Guru Nanak Engineering College, located in Gill Park, Ludhiana, was established by the Nankana Sahib Education Trust,
          with its foundation stone laid on April 8, 1956, by Dr. Rajendra Prasad, the first President of India. The college has
          a rich history of promoting education and technology to uplift economically backward sections of society.
        </p>

        <h3 className="font-semibold text-xl text-blue-500 mt-6">Hostel Facilities</h3>
        <p className="text-lg text-gray-700 mb-4">
          The college provides comprehensive hostel facilities for both male and female students. Currently, there are three hostels for boys and one for girls,
          ensuring that students have access to essential amenities such as CCTV surveillance and backup power supplies. These hostels are designed to create a
          conducive living environment for students, supporting their academic and personal growth.
        </p>

        <h3 className="font-semibold text-xl text-blue-500 mt-6">Inauguration of Hostel</h3>
        <p className="text-lg text-gray-700 mb-4">
          The specific date for the inauguration of the hostel facilities at Guru Nanak Engineering College is not detailed in the available information. However, it
          is known that the college was inaugurated on December 21, 1990, which may coincide with the establishment of various facilities on campus, including hostels.
        </p>

        <h3 className="font-semibold text-xl text-blue-500 mt-6">Current Developments</h3>
        <p className="text-lg text-gray-700 mb-4">
          As of now, Guru Nanak Engineering College continues to evolve with modern amenities and a commitment to academic excellence. It is recognized as an autonomous
          institution under the University Grants Commission (UGC) and has received multiple accreditations for its programs.
        </p>

        <p className="text-lg text-gray-700 mt-4">
          In summary, Guru Nanak Engineering College stands as a significant educational institution in Punjab, providing quality education and essential facilities like
          hostels to support its diverse student body.
        </p>
      </div>
    </div>
  );
}

export default Home;