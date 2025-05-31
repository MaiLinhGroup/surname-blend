import React from 'react';
import { Country, Person, NameCombination } from '../types';
import CombinationCard from './CombinationCard';
import { ClipboardList } from 'lucide-react';

interface CombinationResultsProps {
  country: Country;
  person1: Person;
  person2: Person;
}

const CombinationResults: React.FC<CombinationResultsProps> = ({ 
  country, 
  person1, 
  person2 
}) => {
  // Generate all name combinations based on the country's options
  const combinations: NameCombination[] = country.options.map(option => 
    option.nameFunction(person1, person2)
  );

  if (!combinations.length) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-500">No combinations available for the selected country.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300">
      <div className="flex items-center mb-6">
        <ClipboardList className="text-pink-500 mr-2" size={24} />
        <h2 className="text-xl font-semibold text-gray-800">
          Surname Combinations for {country.name}
        </h2>
      </div>

      <div className="mb-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-md">
        <p className="text-gray-700">
          Based on {country.name}'s marriage surname traditions, here are your possible combinations:
        </p>
      </div>
      
      <div className="space-y-4">
        {combinations.map((combination, index) => (
          <CombinationCard 
            key={index} 
            combination={combination} 
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default CombinationResults;