import React from 'react';
import { Heart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-rose-500 to-purple-500 text-white py-6 mb-8 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Heart className="mr-3 text-white" fill="white" size={28} />
            <h1 className="text-2xl md:text-3xl font-bold">SurnameBlend</h1>
          </div>
          
          <p className="text-sm md:text-base text-white/90 max-w-md text-center md:text-right">
            Explore surname possibilities for your marriage based on different cultural traditions and legal frameworks
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;