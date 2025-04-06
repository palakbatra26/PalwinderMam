import React from 'react';
import Faculty from './Faculty';
import products from '../Data/products.json';

function FacultyList() {
  const sortedProducts = products.sort((a, b) => {
    // आप यहाँ अपनी सॉर्टिंग लॉजिक जोड़ सकते हैं
    // उदाहरण के लिए, यदि आप चाहते हैं कि 'id' के अनुसार सॉर्ट हो:
    return a.id - b.id;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {sortedProducts.map((product) => (
        <Faculty key={product.id} product={product} />
      ))}
    </div>
  );
}

export default FacultyList;