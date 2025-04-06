import React from 'react';

function Faculty({ product }) {
  return (
    <div className="card shadow-lg border border-gray-200 transition-transform transform" style={{ backgroundColor: 'rgb(254, 249, 231)', color: 'black' }}> {/* Added background and text color */}
      <figure className="px-10 pt-10">
        <img src={product.image} alt={product.title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-semibold text-blue-700">{product.title}</h2>
        <div className="text-lg">
          <span className="font-bold">Designation:</span> <strong className="font-bold">{product.designation}</strong>
        </div>
        <p className="text-gray-600 mt-2"><strong>{product.description}</strong></p> 
      </div>
    </div>
  );
}

export default Faculty;