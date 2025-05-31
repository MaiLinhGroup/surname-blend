export interface Person {
  firstName: string;
  middleName?: string;
  lastName: string;
}

export interface Country {
  id: string;
  name: string;
  description: string;
  options: SurnameOption[];
}

export interface SurnameOption {
  id: string;
  description: string;
  nameFunction: (person1: Person, person2: Person) => NameCombination;
}

export interface NameCombination {
  person1FullName: string;
  person2FullName: string;
  description: string;
}