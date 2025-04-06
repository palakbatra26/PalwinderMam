import React, { useRef } from 'react';

function Facilities() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto p-4 relative" style={{ backgroundColor: 'rgb(254, 249, 231)', color: 'black' }}>
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Hostel Facilities</h2>

      <div className="relative w-full">
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10" onClick={scrollLeft}>
          &#10094;
        </button>

        <div ref={carouselRef} className="carousel flex space-x-4 overflow-x-scroll no-scrollbar p-4 rounded-box">
          {/* New Images */}
          <div className="carousel-item min-w-[300px]">
            <img src="/imgae1.jpg" className="w-full h-64 md:h-96 object-cover" alt="New Image 1" />
          </div>
          <div className="carousel-item min-w-[300px]">
            <img src="/uncle.jpg" className="w-full h-64 md:h-96 object-cover" alt="New Image 1" />
          </div>
          <div className="carousel-item min-w-[300px]">
            <img src="/study.png" className="w-full h-64 md:h-96 object-cover" alt="New Image 3" />
          </div>
          <div className="carousel-item min-w-[300px]">
            <img src="/malika.jpg" className="w-full h-64 md:h-96 object-cover" alt="New Image 3" />
          </div>
          <div className="carousel-item min-w-[300px]">
            <img src="/parkhi.jpg" className="w-full h-64 md:h-96 object-cover" alt="New Image 3" />
          </div>
          <div className="carousel-item min-w-[300px]">
            <img src="/kul.jpg" className="w-full h-64 md:h-96 object-cover" alt="New Image 3" />
          </div>
          <div className="carousel-item min-w-[300px]">
            <img src="/image2.jpg" className="w-full h-64 md:h-96 object-cover" alt="New Image 2" />
          </div>
          <div className="carousel-item min-w-[300px]">
            <img src="/image3.jpg" className="w-full h-64 md:h-96 object-cover" alt="New Image 3" />
          </div>
          <div className="carousel-item min-w-[300px]">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF09RYgkLwfhALqT5lBelHpwvCosDmzp8BwQ&s" className="w-full h-64 md:h-96 object-cover" alt="New Image 3" />
          </div>
          <div className="carousel-item min-w-[300px]">
            <img src="/girls.png" className="w-full h-64 md:h-96 object-cover" alt="New Image 3" />
          </div>
          <div className="carousel-item min-w-[300px]">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF3p5spsfD8evX17f3o1OngK6cYlDgEdB1bA&s" className="w-full h-64 md:h-96 object-cover" alt="New Image 4" />
          </div>

          {/* Existing Images */}
          <div className="carousel-item min-w-[300px]">
            <img src="https://gndec.ac.in/gallery/_data/i/upload/2020/08/24/20200824130241-d4cb3a9e-me.jpg" className="w-full h-64 md:h-96 object-cover" alt="Students Celebrating Holi" />
          </div>
          {/* <div className="carousel-item min-w-[300px]">
            <img src="https://sports.gndec.ac.in/sites/default/files/1.jpg" className="w-full h-64 md:h-96 object-cover" alt="Sports Activity 1" />
          </div> */}
          <div className="carousel-item min-w-[300px]">
            <img src="https://sports.gndec.ac.in/sites/default/files/4.jpg" className="w-full h-64 md:h-96 object-cover" alt="Sports Activity 2" />
          </div>
        </div>

        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10" onClick={scrollRight}>
          &#10095;
        </button>
      </div>

      <div className="mt-8">
    <h3 className="text-2xl font-semibold mb-4 text-blue-800">Key Facilities:</h3>
    <ul className="list-disc list-inside space-y-2">
        <li>Secure campus environment with 24/7 security personnel and gated access.</li>
        <li>On-campus playground, swimming pool, fully equipped gym, and expansive football ground.</li>
        <li>Regular cultural events, festivals, and student-organized activities.</li>
        <li>Dedicated security for girls' hostel with strict entry/exit timings and female wardens.</li>
        <li>Comprehensive CCTV surveillance on all floors and common areas.</li>
        <li>Two modern hostel buildings with three floors each, offering comfortable living spaces.</li>
        <li>Common TV rooms on every floor for relaxation and entertainment.</li>
        <li>Variety of single and shared room options available, catering to different preferences and budgets.</li>
        <li>Well-equipped hostel labs for academic and practical work.</li>
        <li>High-speed Wi-Fi connectivity throughout the hostel premises.</li>
        <li>Laundry facilities and regular housekeeping services.</li>
        <li>Dining hall offering nutritious and varied meal options.</li>
        <li>First-aid and basic medical facilities on campus.</li>
        <li>Quiet study areas for focused learning.</li>
    </ul>
</div>
    </div>
  );
}

export default Facilities;