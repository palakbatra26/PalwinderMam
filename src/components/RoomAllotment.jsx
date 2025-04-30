import { useUser } from "@clerk/clerk-react";
import { useState } from "react";

export default function RoomAllotment() {
  const { user } = useUser();
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: "/hostelrooms.jpg",
      title: "Ground Floor Wing-2",
      description: "Ground floor rooms with modern amenities"
    },
    {
      src: "/hostelrooms1.jpg",
      title: "First Floor Wing-2",
      description: "First floor rooms with all facilities"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const studentData = [
    { srNo: 8, accountNo: "3419", name: "Navneet Saini", branch: "CSE", roomNo: "44" },
    { srNo: 9, accountNo: "3315", name: "Palak Garg", branch: "CSE", roomNo: "45" },
    { srNo: 10, accountNo: "3248", name: "Shubhdeep Kaur", branch: "CSE", roomNo: "46" },
    { srNo: 11, accountNo: "3231", name: "Chandrika Paul", branch: "ECE", roomNo: "47" },
    { srNo: 12, accountNo: "3332", name: "Palak Batra", branch: "CSE", roomNo: "48" },
    { srNo: 13, accountNo: "3443", name: "Shruti Verma", branch: "ECE", roomNo: "49" },
    { srNo: 14, accountNo: "3442", name: "Saumya Dutt", branch: "ECE", roomNo: "50" },
    { srNo: 15, accountNo: "3318", name: "Komal Devi", branch: "CE", roomNo: "51" },
    { srNo: 16, accountNo: "3437", name: "Yeshmeen Kaur", branch: "CE", roomNo: "52" },
    { srNo: 17, accountNo: "3321", name: "Mansheen Singh", branch: "IT", roomNo: "53" },
    { srNo: 18, accountNo: "3429", name: "Bhavneet Kaur", branch: "CSE", roomNo: "54" },
    { srNo: 19, accountNo: "3444", name: "Jashanpreet Kaur", branch: "EE", roomNo: "55" },
    { srNo: 20, accountNo: "3218", name: "Naimrata", branch: "CSE", roomNo: "56" },
    { srNo: 21, accountNo: "3404", name: "Navreen Kaur", branch: "CSE", roomNo: "57" },
    { srNo: 22, accountNo: "3313", name: "Sakshi", branch: "IT", roomNo: "58" },
    { srNo: 23, accountNo: "3201", name: "Aankita", branch: "IT", roomNo: "59" },
    { srNo: 24, accountNo: "3441", name: "Monika Sargotra", branch: "ECE", roomNo: "60" },
    { srNo: 25, accountNo: "3203", name: "Rashmi", branch: "ECE", roomNo: "61" },
    { srNo: 26, accountNo: "3228", name: "Anjali Yadav", branch: "B.ARCH", roomNo: "62" },
    { srNo: 27, accountNo: "3446", name: "Purvika Jain", branch: "CSE", roomNo: "63" }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Guru Nanak Dev Engineering College - Wing-2</h1>
        <h2 className="text-2xl font-semibold mb-6 text-center">Hostel Rooms</h2>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            {/* Image Container */}
            <div className="relative aspect-[16/9] w-full">
              <img 
                src={images[currentImage].src} 
                alt={images[currentImage].title} 
                className="w-full h-full object-contain"
              />
              
              {/* Navigation Buttons */}
              <button 
                onClick={prevImage}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-600 bg-opacity-40 text-white px-2 py-12 hover:bg-opacity-70 transition-all text-2xl"
                style={{ borderTopRightRadius: '8px', borderBottomRightRadius: '8px' }}
              >
                ←
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-600 bg-opacity-40 text-white px-2 py-12 hover:bg-opacity-70 transition-all text-2xl"
                style={{ borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px' }}
              >
                →
              </button>
            </div>

            {/* Image Info */}
            <div className="p-6 bg-gradient-to-b from-blue-50 to-white">
              <h3 className="text-2xl font-bold mb-2 text-center text-blue-700 tracking-wide">
                {images[currentImage].title}
              </h3>
              <p className="text-blue-600 text-center text-lg font-medium">
                {images[currentImage].description}
              </p>
              
              {/* Image Counter */}
              <div className="mt-4 text-center text-blue-500 font-medium">
                Image {currentImage + 1} of {images.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
