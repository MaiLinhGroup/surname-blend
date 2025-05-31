import React, { useState } from 'react';
import { NameCombination } from '../types';
import { Copy, Check } from 'lucide-react';

interface CombinationCardProps {
  combination: NameCombination;
  index: number;
}

const CombinationCard: React.FC<CombinationCardProps> = ({ combination, index }) => {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Alternate card styles based on index
  const bgColor = index % 2 === 0 
    ? 'bg-gradient-to-r from-rose-50 to-pink-50' 
    : 'bg-gradient-to-r from-purple-50 to-indigo-50';
  
  const borderColor = index % 2 === 0 
    ? 'border-l-rose-400' 
    : 'border-l-purple-400';

  return (
    <div 
      className={`${bgColor} p-6 rounded-lg shadow-sm mb-4 border-l-4 ${borderColor} transition-all duration-300 hover:shadow-md`}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-medium text-gray-800">{combination.description}</h3>
        <button
          onClick={() => copyToClipboard(`${combination.person1FullName} & ${combination.person2FullName}`)}
          className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200 rounded-full hover:bg-white/50"
          title="Copy to clipboard"
        >
          {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
        </button>
      </div>
      
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <span className="text-sm font-medium text-gray-500 sm:w-1/3">Person 1:</span>
          <span className="text-md font-semibold text-gray-800">{combination.person1FullName}</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center">
          <span className="text-sm font-medium text-gray-500 sm:w-1/3">Person 2:</span>
          <span className="text-md font-semibold text-gray-800">{combination.person2FullName}</span>
        </div>
      </div>
    </div>
  );
};

export default CombinationCard;