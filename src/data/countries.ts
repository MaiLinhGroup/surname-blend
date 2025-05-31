import { Country } from '../types';

const countries: Country[] = [
  {
    id: 'us',
    name: 'United States',
    description: 'In the US, couples have flexibility in choosing their surnames after marriage.',
    options: [
      {
        id: 'us-traditional',
        description: 'Person 2 takes Person 1\'s last name',
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${person1.middleName ? ` ${person1.middleName} ` : ' '}${person1.lastName}`,
          person2FullName: `${person2.firstName}${person2.middleName ? ` ${person2.middleName} ` : ' '}${person1.lastName}`,
          description: `${person2.firstName} takes ${person1.firstName}'s last name (${person1.lastName})`
        }),
      },
      {
        id: 'us-traditional-reversed',
        description: 'Person 1 takes Person 2\'s last name',
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${person1.middleName ? ` ${person1.middleName} ` : ' '}${person2.lastName}`,
          person2FullName: `${person2.firstName}${person2.middleName ? ` ${person2.middleName} ` : ' '}${person2.lastName}`,
          description: `${person1.firstName} takes ${person2.firstName}'s last name (${person2.lastName})`
        }),
      },
      {
        id: 'us-hyphenated',
        description: 'Hyphenated combination of both last names',
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${person1.middleName ? ` ${person1.middleName} ` : ' '}${person1.lastName}-${person2.lastName}`,
          person2FullName: `${person2.firstName}${person2.middleName ? ` ${person2.middleName} ` : ' '}${person1.lastName}-${person2.lastName}`,
          description: `Both partners use a hyphenated combination (${person1.lastName}-${person2.lastName})`
        }),
      },
      {
        id: 'us-hyphenated-reversed',
        description: 'Hyphenated combination of both last names (reversed order)',
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${person1.middleName ? ` ${person1.middleName} ` : ' '}${person2.lastName}-${person1.lastName}`,
          person2FullName: `${person2.firstName}${person2.middleName ? ` ${person2.middleName} ` : ' '}${person2.lastName}-${person1.lastName}`,
          description: `Both partners use a hyphenated combination (${person2.lastName}-${person1.lastName})`
        }),
      },
      {
        id: 'us-new-surname',
        description: 'Both take a completely new surname',
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${person1.middleName ? ` ${person1.middleName} ` : ' '}[New Surname]`,
          person2FullName: `${person2.firstName}${person2.middleName ? ` ${person2.middleName} ` : ' '}[New Surname]`,
          description: `Both partners take a completely new surname`
        }),
      },
      {
        id: 'us-unchanged',
        description: 'Both keep their original surnames',
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${person1.middleName ? ` ${person1.middleName} ` : ' '}${person1.lastName}`,
          person2FullName: `${person2.firstName}${person2.middleName ? ` ${person2.middleName} ` : ' '}${person2.lastName}`,
          description: `Both partners keep their original surnames`
        }),
      },
    ],
  },
  {
    id: 'spain',
    name: 'Spain',
    description: 'In Spain, people traditionally have two surnames: father\'s first surname and mother\'s first surname.',
    options: [
      {
        id: 'spain-traditional',
        description: 'Both keep their original surnames (traditional Spanish naming)',
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${person1.middleName ? ` ${person1.middleName} ` : ' '}${person1.lastName}`,
          person2FullName: `${person2.firstName}${person2.middleName ? ` ${person2.middleName} ` : ' '}${person2.lastName}`,
          description: `Both partners keep their original surnames, following Spanish tradition`
        }),
      },
      {
        id: 'spain-children',
        description: 'Children will combine first surnames of both parents',
        nameFunction: (person1, person2) => {
          const person1LastName = person1.lastName.split(' ')[0];
          const person2LastName = person2.lastName.split(' ')[0];
          return {
            person1FullName: `${person1.firstName}${person1.middleName ? ` ${person1.middleName} ` : ' '}${person1.lastName}`,
            person2FullName: `${person2.firstName}${person2.middleName ? ` ${person2.middleName} ` : ' '}${person2.lastName}`,
            description: `Both keep original names. Children would be: [Child's name] ${person1LastName} ${person2LastName}`
          };
        },
      },
    ],
  },
  {
    id: 'japan',
    name: 'Japan',
    description: 'In Japan, married couples must share the same surname by law.',
    options: [
      {
        id: 'japan-person1',
        description: 'Both take Person 1\'s surname',
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${person1.middleName ? ` ${person1.middleName} ` : ' '}${person1.lastName}`,
          person2FullName: `${person2.firstName}${person2.middleName ? ` ${person2.middleName} ` : ' '}${person1.lastName}`,
          description: `Both partners take ${person1.firstName}'s surname (${person1.lastName})`
        }),
      },
      {
        id: 'japan-person2',
        description: 'Both take Person 2\'s surname',
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${person1.middleName ? ` ${person1.middleName} ` : ' '}${person2.lastName}`,
          person2FullName: `${person2.firstName}${person2.middleName ? ` ${person2.middleName} ` : ' '}${person2.lastName}`,
          description: `Both partners take ${person2.firstName}'s surname (${person2.lastName})`
        }),
      },
    ],
  },
  {
    id: 'germany',
    name: 'Germany',
    description: 'In Germany, couples can choose one surname as a family name or keep their birth names.',
    options: [
      {
        id: 'germany-person1',
        description: 'Both take Person 1\'s surname',
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${person1.middleName ? ` ${person1.middleName} ` : ' '}${person1.lastName}`,
          person2FullName: `${person2.firstName}${person2.middleName ? ` ${person2.middleName} ` : ' '}${person1.lastName}`,
          description: `Both partners take ${person1.firstName}'s surname (${person1.lastName})`
        }),
      },
      {
        id: 'germany-person2',
        description: 'Both take Person 2\'s surname',
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${person1.middleName ? ` ${person1.middleName} ` : ' '}${person2.lastName}`,
          person2FullName: `${person2.firstName}${person2.middleName ? ` ${person2.middleName} ` : ' '}${person2.lastName}`,
          description: `Both partners take ${person2.firstName}'s surname (${person2.lastName})`
        }),
      },
      {
        id: 'germany-double-person1',
        description: 'Person 2 adds Person 1\'s surname (double surname)',
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${person1.middleName ? ` ${person1.middleName} ` : ' '}${person1.lastName}`,
          person2FullName: `${person2.firstName}${person2.middleName ? ` ${person2.middleName} ` : ' '}${person2.lastName} ${person1.lastName}`,
          description: `${person2.firstName} adds ${person1.firstName}'s surname (${person2.lastName} ${person1.lastName})`
        }),
      },
      {
        id: 'germany-double-person2',
        description: 'Person 1 adds Person 2\'s surname (double surname)',
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${person1.middleName ? ` ${person1.middleName} ` : ' '}${person1.lastName} ${person2.lastName}`,
          person2FullName: `${person2.firstName}${person2.middleName ? ` ${person2.middleName} ` : ' '}${person2.lastName}`,
          description: `${person1.firstName} adds ${person2.firstName}'s surname (${person1.lastName} ${person2.lastName})`
        }),
      },
      {
        id: 'germany-unchanged',
        description: 'Both keep their original surnames',
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${person1.middleName ? ` ${person1.middleName} ` : ' '}${person1.lastName}`,
          person2FullName: `${person2.firstName}${person2.middleName ? ` ${person2.middleName} ` : ' '}${person2.lastName}`,
          description: `Both partners keep their original surnames`
        }),
      },
    ],
  },
  {
    id: 'brazil',
    name: 'Brazil',
    description: 'In Brazil, couples have flexibility in choosing their surnames after marriage.',
    options: [
      {
        id: 'brazil-add-person1',
        description: 'Person 2 adds Person 1\'s surname',
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${person1.middleName ? ` ${person1.middleName} ` : ' '}${person1.lastName}`,
          person2FullName: `${person2.firstName}${person2.middleName ? ` ${person2.middleName} ` : ' '}${person2.lastName} ${person1.lastName}`,
          description: `${person2.firstName} adds ${person1.firstName}'s surname (${person2.lastName} ${person1.lastName})`
        }),
      },
      {
        id: 'brazil-add-person2',
        description: 'Person 1 adds Person 2\'s surname',
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${person1.middleName ? ` ${person1.middleName} ` : ' '}${person1.lastName} ${person2.lastName}`,
          person2FullName: `${person2.firstName}${person2.middleName ? ` ${person2.middleName} ` : ' '}${person2.lastName}`,
          description: `${person1.firstName} adds ${person2.firstName}'s surname (${person1.lastName} ${person2.lastName})`
        }),
      },
      {
        id: 'brazil-both-add',
        description: 'Both add each other\'s surnames',
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${person1.middleName ? ` ${person1.middleName} ` : ' '}${person1.lastName} ${person2.lastName}`,
          person2FullName: `${person2.firstName}${person2.middleName ? ` ${person2.middleName} ` : ' '}${person2.lastName} ${person1.lastName}`,
          description: `Both partners add each other's surnames`
        }),
      },
      {
        id: 'brazil-unchanged',
        description: 'Both keep their original surnames',
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${person1.middleName ? ` ${person1.middleName} ` : ' '}${person1.lastName}`,
          person2FullName: `${person2.firstName}${person2.middleName ? ` ${person2.middleName} ` : ' '}${person2.lastName}`,
          description: `Both partners keep their original surnames`
        }),
      },
    ],
  },
];

export default countries;