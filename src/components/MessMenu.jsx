import React from 'react';

function MessMenu() {
  return (
    <div className="container mx-auto p-4" style={{ backgroundColor: 'rgb(254, 249, 231)' }}>
      <h2 className="text-xl font-semibold mb-4 text-center" style={{ backgroundColor: 'rgb(242, 245, 250)', color: 'black' }}>Hostel Mess Menu</h2>

      <h3 className="text-lg font-semibold mb-2 text-center" style={{ backgroundColor: 'rgb(242, 245, 250)', color: 'black' }}>Timing</h3>
      <table className="w-full border-collapse border border-gray-400 mb-4">
        <thead>
          <tr>
            <th className="border border-gray-400 p-2" style={{ color: 'black' }}>Meal</th>
            <th className="border border-gray-400 p-2" style={{ color: 'black' }}>Monday - Friday</th>
            <th className="border border-gray-400 p-2" style={{ color: 'black' }}>Saturday & Sunday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Breakfast</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>8:00 AM - 9:00 AM</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>8:30 AM - 9:30 AM</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Lunch</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>12:00 PM - 1:30 PM</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>12:30 PM - 1:30 PM</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Dinner</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>8:00 PM - 9:00 PM</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>8:00 PM - 9:00 PM</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-lg font-semibold mb-2 text-center" style={{ backgroundColor: 'rgb(242, 245, 250)', color: 'black' }}>Menu</h3>
      <table className="w-full border-collapse border border-gray-400 mb-4">
        <thead>
          <tr>
            <th className="border border-gray-400 p-2" style={{ color: 'black' }}>Day</th>
            <th className="border border-gray-400 p-2" style={{ color: 'black' }}>Breakfast</th>
            <th className="border border-gray-400 p-2" style={{ color: 'black' }}>Lunch</th>
            <th className="border border-gray-400 p-2" style={{ color: 'black' }}>Dinner</th>
            <th className="border border-gray-400 p-2" style={{ color: 'black' }}>Sweet Dish</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Mon</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Masala Parantha / Tea / Milk / Curd / Butter</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Rajma Rice / Curd / Roti</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Dal Makhni / Sirke Wala Pyaaz / Roti</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Oreo</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Tue</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Aloo Parantha / Tea / Milk / Curd / Butter</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Black Chana / Rice / Roti / Raita</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Mix Veg / Moong Dal / Roti / Salad</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Jamun</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Wed</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Stuffed Aloo Sandwich / Macroni / Tea / Milk</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Lauki Chana ki Dal / Rice / Curd / Roti</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Chana Masala / Roti / Curd / Salad</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Jalebi</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Thur</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Aloo Sabji / Parantha / Tea / Milk / Curd</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>White Chana / Rice / Roti / Curd</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Matar Paneer / Roti / Salad</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Little Chocopie</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Fri</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Bread Pakoda / Poha / Coffee / Milk</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Dal Rice / Aloo Bhujia / Curd / Roti</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Kadhi / Pakoda / Roti / Salad</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Gulab Jamun</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Sat</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Paneer Parantha / Tea / Milk / Curd / Butter</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Vegetable Pulao / Raita / Roti</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Mix Vegetable / Moong Dal / Roti / Salad</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Kheer</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Sun</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Mosi Roti (dal + onion) / Tea / Milk / Curd / Butter</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>White Chana / Pulao / Roti / Rice / Curd</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Dal Rice / Dry Aloo ki sabji / Roti / Salad</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Dark Fantasy</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-lg font-semibold mb-2 text-center" style={{ backgroundColor: 'rgb(242, 245, 250)', color: 'black' }}>Rates</h3>
      <table className="w-full border-collapse border border-gray-400 mb-4">
        <thead>
          <tr>
            <th className="border border-gray-400 p-2" style={{ color: 'black' }}>Meal</th>
            <th className="border border-gray-400 p-2" style={{ color: 'black' }}>Rate (Rs.)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Breakfast</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>30</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Lunch</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>35</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>Dinner</td>
            <td className="border border-gray-400 p-2" style={{ color: 'black' }}>30</td>
          </tr>
        </tbody>
      </table>

      <p className="mb-4" style={{ color: 'black' }}>Table service is provided. Students only need to sit, and food is served in plates. No utensils need to be washed. The mess is neat and clean.</p>

    </div>
  );
}

export default MessMenu;