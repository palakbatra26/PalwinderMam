import React from 'react';
import feeStructureImage from '/Screenshot 2025-04-03 010652.png';

function FeeStructure() {
  return (
    <div className="container mx-auto p-4" style={{ backgroundColor: 'rgb(254, 249, 231)', color: 'black' }}> {/* Added background and text color */}
      <h1 className="text-2xl font-bold mb-4 text-center">Fee Structure</h1>
      <div className="w-full mb-8">
        <img
          src={feeStructureImage}
          alt="Fee Structure"
          className="w-full h-auto object-contain"
        />
      </div>

      <h2 className="text-xl font-semibold mb-4 text-center">Hostel Rules for Students</h2>

      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 p-2">Rule No.</th>
            <th className="border border-gray-400 p-2">Rule</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2">1</td>
            <td className="border border-gray-400 p-2">The hostel shall be open to the regular students, on the rolls of the college.</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">2</td>
            <td className="border border-gray-400 p-2">Borders must lookup to the hostel notice board twice a day as sometimes important notices are put up there.</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">3</td>
            <td className="border border-gray-400 p-2">All case of illness should be reported to the Deputy Deans hostel.</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">4</td>
            <td className="border border-gray-400 p-2">No students should keep any fire-arms, lethal weapons poisonous things intoxicants etc. with her.</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">5</td>
            <td className="border border-gray-400 p-2">Any meeting to be held in the hostel premises should have the prior approval of the Principal/Dean/Dy Dean Hostels.</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">6</td>
            <td className="border border-gray-400 p-2">The student shall make proper use of common rooms (Clubs) having newspaper, allied literature and the other articles required for indoor games.</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">7</td>
            <td className="border border-gray-400 p-2">While visiting the dining hall, the common rooms and the canteen, the student must wear proper dress.</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">8</td>
            <td className="border border-gray-400 p-2">A committee consisting of Dy. Dean Hostel two students representative shall make purchase of newspapers, magazines, indoor games, registers, rubber stamp, prizes, awards for hostel competitions, hostels functions, festivals.</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">9</td>
            <td className="border border-gray-400 p-2">All the boarders shall vacate the hostel rooms before they leave for the vacations so that the annual maintenance/repairs and white washing is carried out.</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">10</td>
            <td className="border border-gray-400 p-2">The Messing arrangement will be under the direction of the Deptt Dean and there will be a Mess committee comprising of students to assist her.</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">11</td>
            <td className="border border-gray-400 p-2">No boarder is allowed to leave the hostel without personally handing over the charge of the room/furniture to caretaker.</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">12</td>
            <td className="border border-gray-400 p-2">If a boarder does not want to take breakfast, Lunch and dinner in the hostel she shall have to inform mess manager well in time, otherwise she shall be considered present.</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">13</td>
            <td className="border border-gray-400 p-2">Guest as a rule are not permitted to stay in the hostel except in case of father/brother/provided he comes from a far off place at odd hours.</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">14</td>
            <td className="border border-gray-400 p-2">Light must be switched off when not in use.</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">15</td>
            <td className="border border-gray-400 p-2">All kind of shouting, hooting, violent knocking, playing stereo tape and deck, or any other act of movement or behavior that is likely to cause disturbance or annoyance to other is strictly prohibited.</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">16</td>
            <td className="border border-gray-400 p-2">Maltreating or abusing the hostel employees and canteen staff is strictly prohibited.</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">17</td>
            <td className="border border-gray-400 p-2">Hostel rules must be observed strictly. Ignorance of rules will not be considered as bliss or an excuse.</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">18</td>
            <td className="border border-gray-400 p-2">Students must not take law into their own hands but must report all quarrels and disputes to the hostel Dy. Deans.</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">19</td>
            <td className="border border-gray-400 p-2">Teasing, Maltreating or indulging in any sort of aging of the newly admitted students is strictly prohibited.</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">20</td>
            <td className="border border-gray-400 p-2">The principal have the power to make amendment in the hostel rules.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FeeStructure;