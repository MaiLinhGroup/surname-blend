import React, { useState } from 'react';
import { Person, Country } from './types';
import NameInput from './components/NameInput';
import CountrySelector from './components/CountrySelector';
import CombinationResults from './components/CombinationResults';
import Header from './components/Header';
import Footer from './components/Footer';
import countries from './data/countries';
import { Heart } from 'lucide-react';

function App() {
  const [person1, setPerson1] = useState<Person>({
    firstName: '',
    lastName: ''
  });
  
  const [person2, setPerson2] = useState<Person>({
    firstName: '',
    lastName: ''
  });
  
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  
  const isFormValid = () => {
    return (
      person1.firstName.trim() !== '' &&
      person1.lastName.trim() !== '' &&
      person2.firstName.trim() !== '' &&
      person2.lastName.trim() !== '' &&
      selectedCountry !== null
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 flex-grow">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NameInput 
              label="Person 1" 
              person={person1} 
              onChange={setPerson1} 
              iconColor="text-rose-500"
            />
            
            <NameInput 
              label="Person 2" 
              person={person2} 
              onChange={setPerson2} 
              iconColor="text-purple-500"
            />
          </div>
          
          <CountrySelector 
            countries={countries} 
            selectedCountry={selectedCountry} 
            onChange={setSelectedCountry} 
          />
          
          {isFormValid() ? (
            <div className="mt-8 animate-fadeIn">
              <CombinationResults 
                country={selectedCountry!} 
                person1={person1} 
                person2={person2} 
              />
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-md text-center mt-8">
              <Heart className="mx-auto text-rose-300 mb-4" size={48} />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Discover Your Surname Options</h2>
              <p className="text-gray-600 mb-4">
                Enter both partners' names and select a country to see possible surname combinations after marriage.
              </p>
              <div className="p-4 bg-rose-50 rounded-md text-sm text-gray-700">
                <p>Different countries have different legal frameworks and traditions for surnames after marriage.</p>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;