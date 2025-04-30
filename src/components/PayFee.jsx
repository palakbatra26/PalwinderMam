import React, { useState } from 'react';
import axios from 'axios';
import sha512 from 'crypto-js/sha512';

const PayFee = () => {
  const [selectedFee, setSelectedFee] = useState('');
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  const feeTypes = [
    { id: 'hostel', name: 'Hostel Fee', amount: 45000 },
    { id: 'mess', name: 'Mess Fee', amount: 35000 },
    { id: 'security', name: 'Security Fee', amount: 5000 },
    { id: 'maintenance', name: 'Maintenance Fee', amount: 2000 }
  ];

  const handleFeeSelect = (feeType) => {
    setSelectedFee(feeType.id);
    setAmount(feeType.amount);
  };

  const handlePayment = async () => {
    try {
      setLoading(true);

      // Get payment hash from backend
      const { data } = await axios.post('http://localhost:5000/api/payment/hash', {
        txnid: Date.now().toString(),
        amount: amount,
        productinfo: `${selectedFee.charAt(0).toUpperCase() + selectedFee.slice(1)} Fee Payment`,
        firstname: 'Student Name', // Replace with actual student name
        email: 'student@example.com', // Replace with actual student email
        phone: '9999999999', // Replace with actual student phone
      });

      // Create form and submit
      const form = document.createElement('form');
      form.setAttribute('method', 'post');
      form.setAttribute('action', 'https://test.payu.in/_payment'); // Use https://secure.payu.in/_payment for production

      const params = {
        key: data.key,
        txnid: data.txnid,
        amount: amount,
        productinfo: data.productinfo,
        firstname: data.firstname,
        email: data.email,
        phone: data.phone,
        surl: 'http://localhost:5173/payment-success',
        furl: 'http://localhost:5173/payment-failed',
        hash: data.hash,
      };

      // Add parameters to form
      Object.keys(params).forEach(key => {
        const input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', key);
        input.setAttribute('value', params[key]);
        form.appendChild(input);
      });

      // Add form to body and submit
      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      console.error('Payment error:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">Fee Payment</h1>
      
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {feeTypes.map((feeType) => (
            <div
              key={feeType.id}
              className={`p-6 rounded-lg cursor-pointer transition-all duration-200 ${
                selectedFee === feeType.id
                  ? 'bg-blue-100 border-2 border-blue-500'
                  : 'bg-gray-50 border-2 border-transparent hover:border-blue-300'
              }`}
              onClick={() => handleFeeSelect(feeType)}
            >
              <h3 className="text-xl font-semibold mb-2">{feeType.name}</h3>
              <p className="text-2xl text-blue-600 font-bold">₹{feeType.amount.toLocaleString()}</p>
              <p className="text-gray-600 mt-2">Due for current semester</p>
            </div>
          ))}
        </div>

        {selectedFee && (
          <div className="border-t pt-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">Selected Fee Details</h3>
              <p className="text-gray-600">
                {feeTypes.find(f => f.id === selectedFee)?.name} - 
                ₹{feeTypes.find(f => f.id === selectedFee)?.amount.toLocaleString()}
              </p>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handlePayment}
                disabled={loading}
                className={`bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 
                  ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
              >
                {loading ? 'Processing...' : 'Proceed to Pay'}
              </button>
            </div>
          </div>
        )}

        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Important Notes:</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>All fees must be paid before the semester deadline</li>
            <li>Late payment will incur additional charges</li>
            <li>Keep the payment receipt for future reference</li>
            <li>For any payment related queries, contact the hostel office</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PayFee; 