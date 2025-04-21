import React from 'react';
import studentCommitteeData from "../Data/studentCommitteeData.json";

function StudentCommittee() {
  return (
    <div className="container mx-auto p-4 bg-yellow-50">
      <h2 className="text-3xl font-bold mb-6 text-center text-black">Student Committee</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 justify-center">
        {studentCommitteeData.map((member) => (
          <div key={member.id} className="card shadow-sm w-80 h-[320px] bg-yellow-50 text-black">
          <figure className="w-full h-60">
  <img
    src={member.imageUrl}
    alt={member.name}
    className="w-full h-full object-cover rounded-xl"
    style={{ objectFit: 'cover' }}
  />
</figure>
            <div className="card-body items-center text-center p-2">
              <h2 className="card-title text-lg font-semibold">{member.name}</h2>
              <p className="text-sm">{member.designation} - {member.branch} ({member.year})</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-8 text-black">
        <h3 className="text-2xl font-semibold mb-4 text-center text-red-600">IMPORTANT: RAGGING IS STRICTLY PROHIBITED!</h3>
        <p>The University Grants Commission and Punjab Technical University, Jalandhar, have recommended stern measures against ragging.</p>
        <ol className="list-decimal list-inside space-y-1">
          <li>Cancellation of Admission.</li>
          <li>Suspension from Attending Classes.</li>
          <li>Rustication from the Institution for Period Varying from 1 to 4 Semesters.</li>
          <li>Expulsion from the Institution and Debarring from Admission to Any Other Institution.</li>
          <li>Withholding/Withdrawing Scholarship/Fellowship and other benefits.</li>
          <li>Debarring from Appearing in any Test/Examination or Placement Interviews.</li>
          <li>Withholding Results.</li>
          <li>Suspension/Expulsion from the Hostel.</li>
          <li>Fine up to Rs. 25,000/-</li>
          <li>Imprisonment up to Three Years as per court orders.</li>
        </ol>
        <p className="mt-2 font-semibold">Victims of ragging or their guardians can file an F.I.R. directly with the police.</p>
      </div>

      <div className="mb-8 text-black">
        <h3 className="text-2xl font-semibold mb-4">Additional Information & Committee Roles:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><span className="font-semibold">Welfare Heads:</span> Ensure cleanliness and hygiene in hostel floors.</li>
          <li><span className="font-semibold">Sports Heads:</span> Manage sports activities.</li>
          <li><span className="font-semibold">Mess Heads:</span> Oversee mess quality and dining arrangements.</li>
        </ul>
      </div>

      <div className="text-black">
        <h3 className="text-2xl font-semibold mb-4">Our Dynamic Mess Committee Components:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><span className="font-semibold">Mess Heads:</span> Ensure meal quality and punctuality.</li>
          <li><span className="font-semibold">Welfare Heads:</span> Maintain sanitation standards.</li>
          <li><span className="font-semibold">Sports Heads:</span> Organize sports events.</li>
          <li><span className="font-semibold">Creative Heads:</span> Plan cultural events.</li>
        </ul>
      </div>

      <div className="mt-8 text-black">
        <h3 className="text-lg font-semibold">Crucial Message:</h3>
        <p>Ragging is a grave offense and will not be tolerated. Let's cultivate a culture of respect, empathy, and mutual support for a positive hostel experience.</p>
      </div>
    </div>
  );
}

export default StudentCommittee;