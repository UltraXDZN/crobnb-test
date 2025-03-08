import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="bg-primary-10 rounded-lg p-8 max-w-2xl mx-auto">
        <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <h1 className="text-3xl font-bold mb-4 text-grayscale-100">Uspješno!</h1>
        <p className="text-xl mb-8 text-grayscale-80">
          Vaš zahtjev je uspješno obrađen. Hvala na korištenju naših usluga.
        </p>
        <Link to="/" className="bg-primary-80 text-white py-3 px-6 rounded-lg font-bold hover:bg-primary-100">
          Povratak na početnu
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;