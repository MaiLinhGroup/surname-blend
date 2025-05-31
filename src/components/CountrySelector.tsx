import React from 'react';
import { Country } from '../types';
import { Globe } from 'lucide-react';

interface CountrySelectorProps {
  countries: Country[];
  selectedCountry: Country | null;
  onChange: (country: Country) => void;
}

const CountrySelector: React.FC<CountrySelectorProps> = ({ 
  countries, 
  selectedCountry, 
  onChange 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <Globe className="text-purple-500 mr-2\" size={24} />
        <h2 className="text-xl font-semibold text-gray-800">Select Country</h2>
      </div>
      
      <div className="mb-2">
        <label htmlFor="country-select" className="block text-sm font-medium text-gray-700 mb-1">
          Choose a country whose marriage surname laws you want to apply:
        </label>
        <select
          id="country-select"
          value={selectedCountry?.id || ''}
          onChange={(e) => {
            const country = countries.find(c => c.id === e.target.value);
            if (country) onChange(country);
          }}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200"
        >
          <option value="" disabled>Select a country</option>
          {countries.map(country => (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      
      {selectedCountry && (
        <div className="mt-4 p-4 bg-purple-50 rounded-md text-sm text-gray-700">
          <p>{selectedCountry.description}</p>
        </div>
      )}
    </div>
  );
};

export default CountrySelector;