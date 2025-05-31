import React from 'react';
import { Person } from '../types';
import { User } from 'lucide-react';

interface NameInputProps {
  label: string;
  person: Person;
  onChange: (updatedPerson: Person) => void;
  iconColor: string;
}

const NameInput: React.FC<NameInputProps> = ({ label, person, onChange, iconColor }) => {
  const handleChange = (field: keyof Person, value: string) => {
    onChange({
      ...person,
      [field]: value,
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <User className={`mr-2 ${iconColor}`} size={24} />
        <h2 className="text-xl font-semibold text-gray-800">{label}</h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <label htmlFor={`${label.toLowerCase()}-first-name`} className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            id={`${label.toLowerCase()}-first-name`}
            value={person.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200"
            placeholder="Enter first name"
          />
        </div>
        
        <div>
          <label htmlFor={`${label.toLowerCase()}-middle-name`} className="block text-sm font-medium text-gray-700 mb-1">
            Middle Name (optional)
          </label>
          <input
            type="text"
            id={`${label.toLowerCase()}-middle-name`}
            value={person.middleName || ''}
            onChange={(e) => handleChange('middleName', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200"
            placeholder="Enter middle name (if any)"
          />
        </div>
        
        <div>
          <label htmlFor={`${label.toLowerCase()}-surname`} className="block text-sm font-medium text-gray-700 mb-1">
            Surname
          </label>
          <input
            type="text"
            id={`${label.toLowerCase()}-surname`}
            value={person.surname}
            onChange={(e) => handleChange('surname', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200"
            placeholder="Enter surname"
          />
        </div>
      </div>
    </div>
  );
};

export default NameInput;