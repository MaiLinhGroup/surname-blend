import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 py-6 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Heart className="mr-2 text-rose-500" size={18} />
            <p className="text-gray-600 text-sm">
              SurnameBlend | Helping married couples explore surname possibilities
            </p>
          </div>
          
          <p className="text-gray-500 text-sm text-center md:text-right">
            Note: This app provides general information. Please consult local legal resources for official surname change processes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;