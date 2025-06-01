import { Country } from "../types";

const countries: Country[] = [
  {
    id: "us",
    name: "United States",
    description:
      "In the US, couples have flexibility in choosing their surnames after marriage.",
    options: [
      {
        id: "us-traditional",
        description: "Person 2 takes Person 1's surname",
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${
            person1.middleName ? ` ${person1.middleName} ` : " "
          }${person1.surname}`,
          person2FullName: `${person2.firstName}${
            person2.middleName ? ` ${person2.middleName} ` : " "
          }${person1.surname}`,
          description: `${person2.firstName} takes ${person1.firstName}'s surname (${person1.surname})`,
        }),
      },
      {
        id: "us-traditional-reversed",
        description: "Person 1 takes Person 2's surname",
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${
            person1.middleName ? ` ${person1.middleName} ` : " "
          }${person2.surname}`,
          person2FullName: `${person2.firstName}${
            person2.middleName ? ` ${person2.middleName} ` : " "
          }${person2.surname}`,
          description: `${person1.firstName} takes ${person2.firstName}'s surname (${person2.surname})`,
        }),
      },
      {
        id: "us-hyphenated",
        description: "Hyphenated combination of both surnames",
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${
            person1.middleName ? ` ${person1.middleName} ` : " "
          }${person1.surname}-${person2.surname}`,
          person2FullName: `${person2.firstName}${
            person2.middleName ? ` ${person2.middleName} ` : " "
          }${person1.surname}-${person2.surname}`,
          description: `Both partners use a hyphenated combination (${person1.surname}-${person2.surname})`,
        }),
      },
      {
        id: "us-hyphenated-reversed",
        description: "Hyphenated combination of both surnames (reversed order)",
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${
            person1.middleName ? ` ${person1.middleName} ` : " "
          }${person2.surname}-${person1.surname}`,
          person2FullName: `${person2.firstName}${
            person2.middleName ? ` ${person2.middleName} ` : " "
          }${person2.surname}-${person1.surname}`,
          description: `Both partners use a hyphenated combination (${person2.surname}-${person1.surname})`,
        }),
      },
      {
        id: "us-new-surname",
        description: "Both take a completely new surname",
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${
            person1.middleName ? ` ${person1.middleName} ` : " "
          }[New Surname]`,
          person2FullName: `${person2.firstName}${
            person2.middleName ? ` ${person2.middleName} ` : " "
          }[New Surname]`,
          description: `Both partners take a completely new surname`,
        }),
      },
      {
        id: "us-unchanged",
        description: "Both keep their original surnames",
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${
            person1.middleName ? ` ${person1.middleName} ` : " "
          }${person1.surname}`,
          person2FullName: `${person2.firstName}${
            person2.middleName ? ` ${person2.middleName} ` : " "
          }${person2.surname}`,
          description: `Both partners keep their original surnames`,
        }),
      },
    ],
  },
  {
    id: "spain",
    name: "Spain",
    description:
      "In Spain, people traditionally have two surnames: father's first surname and mother's first surname.",
    options: [
      {
        id: "spain-traditional",
        description:
          "Both keep their original surnames (traditional Spanish naming)",
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${
            person1.middleName ? ` ${person1.middleName} ` : " "
          }${person1.surname}`,
          person2FullName: `${person2.firstName}${
            person2.middleName ? ` ${person2.middleName} ` : " "
          }${person2.surname}`,
          description: `Both partners keep their original surnames, following Spanish tradition`,
        }),
      },
      {
        id: "spain-children",
        description: "Children will combine first surnames of both parents",
        nameFunction: (person1, person2) => {
          const person1Surname = person1.surname.split(" ")[0];
          const person2Surname = person2.surname.split(" ")[0];
          return {
            person1FullName: `${person1.firstName}${
              person1.middleName ? ` ${person1.middleName} ` : " "
            }${person1.surname}`,
            person2FullName: `${person2.firstName}${
              person2.middleName ? ` ${person2.middleName} ` : " "
            }${person2.surname}`,
            description: `Both keep original names. Children would be: [Child's name] ${person1Surname} ${person2Surname}`,
          };
        },
      },
    ],
  },
  {
    id: "japan",
    name: "Japan",
    description:
      "In Japan, married couples must share the same surname by law.",
    options: [
      {
        id: "japan-person1",
        description: "Both take Person 1's surname",
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${
            person1.middleName ? ` ${person1.middleName} ` : " "
          }${person1.surname}`,
          person2FullName: `${person2.firstName}${
            person2.middleName ? ` ${person2.middleName} ` : " "
          }${person1.surname}`,
          description: `Both partners take ${person1.firstName}'s surname (${person1.surname})`,
        }),
      },
      {
        id: "japan-person2",
        description: "Both take Person 2's surname",
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${
            person1.middleName ? ` ${person1.middleName} ` : " "
          }${person2.surname}`,
          person2FullName: `${person2.firstName}${
            person2.middleName ? ` ${person2.middleName} ` : " "
          }${person2.surname}`,
          description: `Both partners take ${person2.firstName}'s surname (${person2.surname})`,
        }),
      },
    ],
  },
  {
    id: "germany",
    name: "Germany",
    description:
      "In Germany, couples can choose one surname as a family name or keep their birth names.",
    options: [
      {
        id: "germany-person1",
        description: "Both take Person 1's surname",
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${
            person1.middleName ? ` ${person1.middleName} ` : " "
          }${person1.surname}`,
          person2FullName: `${person2.firstName}${
            person2.middleName ? ` ${person2.middleName} ` : " "
          }${person1.surname}`,
          description: `Both partners take ${person1.firstName}'s surname (${person1.surname})`,
        }),
      },
      {
        id: "germany-person2",
        description: "Both take Person 2's surname",
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${
            person1.middleName ? ` ${person1.middleName} ` : " "
          }${person2.surname}`,
          person2FullName: `${person2.firstName}${
            person2.middleName ? ` ${person2.middleName} ` : " "
          }${person2.surname}`,
          description: `Both partners take ${person2.firstName}'s surname (${person2.surname})`,
        }),
      },
      {
        id: "germany-double-person1",
        description: "Person 2 adds Person 1's surname (double surname)",
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${
            person1.middleName ? ` ${person1.middleName} ` : " "
          }${person1.surname}`,
          person2FullName: `${person2.firstName}${
            person2.middleName ? ` ${person2.middleName} ` : " "
          }${person2.surname} ${person1.surname}`,
          description: `${person2.firstName} adds ${person1.firstName}'s surname (${person2.surname} ${person1.surname})`,
        }),
      },
      {
        id: "germany-double-person2",
        description: "Person 1 adds Person 2's surname (double surname)",
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${
            person1.middleName ? ` ${person1.middleName} ` : " "
          }${person1.surname} ${person2.surname}`,
          person2FullName: `${person2.firstName}${
            person2.middleName ? ` ${person2.middleName} ` : " "
          }${person2.surname}`,
          description: `${person1.firstName} adds ${person2.firstName}'s surname (${person1.surname} ${person2.surname})`,
        }),
      },
      {
        id: "germany-unchanged",
        description: "Both keep their original surnames",
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${
            person1.middleName ? ` ${person1.middleName} ` : " "
          }${person1.surname}`,
          person2FullName: `${person2.firstName}${
            person2.middleName ? ` ${person2.middleName} ` : " "
          }${person2.surname}`,
          description: `Both partners keep their original surnames`,
        }),
      },
    ],
  },
  {
    id: "brazil",
    name: "Brazil",
    description:
      "In Brazil, couples have flexibility in choosing their surnames after marriage.",
    options: [
      {
        id: "brazil-add-person1",
        description: "Person 2 adds Person 1's surname",
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${
            person1.middleName ? ` ${person1.middleName} ` : " "
          }${person1.surname}`,
          person2FullName: `${person2.firstName}${
            person2.middleName ? ` ${person2.middleName} ` : " "
          }${person2.surname} ${person1.surname}`,
          description: `${person2.firstName} adds ${person1.firstName}'s surname (${person2.surname} ${person1.surname})`,
        }),
      },
      {
        id: "brazil-add-person2",
        description: "Person 1 adds Person 2's surname",
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${
            person1.middleName ? ` ${person1.middleName} ` : " "
          }${person1.surname} ${person2.surname}`,
          person2FullName: `${person2.firstName}${
            person2.middleName ? ` ${person2.middleName} ` : " "
          }${person2.surname}`,
          description: `${person1.firstName} adds ${person2.firstName}'s surname (${person1.surname} ${person2.surname})`,
        }),
      },
      {
        id: "brazil-both-add",
        description: "Both add each other's surnames",
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${
            person1.middleName ? ` ${person1.middleName} ` : " "
          }${person1.surname} ${person2.surname}`,
          person2FullName: `${person2.firstName}${
            person2.middleName ? ` ${person2.middleName} ` : " "
          }${person2.surname} ${person1.surname}`,
          description: `Both partners add each other's surnames`,
        }),
      },
      {
        id: "brazil-unchanged",
        description: "Both keep their original surnames",
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${
            person1.middleName ? ` ${person1.middleName} ` : " "
          }${person1.surname}`,
          person2FullName: `${person2.firstName}${
            person2.middleName ? ` ${person2.middleName} ` : " "
          }${person2.surname}`,
          description: `Both partners keep their original surnames`,
        }),
      },
    ],
  },
  {
    id: "ru",
    name: "Russian Federation",
    description:
      "In Russia, couples have flexibility in choosing their surnames after marriage.",
    options: [
      {
        id: "ru-person1",
        description: "Person 1 takes Person 2's surname",
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${
            person1.middleName ? ` ${person1.middleName} ` : " "
          }${person2.surname}`,
          person2FullName: `${person2.firstName}${
            person2.middleName ? ` ${person2.middleName} ` : " "
          }${person2.surname}`,
          description: `${person1.firstName} takes ${person2.firstName}'s surname (${person2.surname})`,
        }),
      },
      {
        id: "ru-person2",
        description: "Person 2 takes Person 1's surname",
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${
            person1.middleName ? ` ${person1.middleName} ` : " "
          }${person1.surname}`,
          person2FullName: `${person2.firstName}${
            person2.middleName ? ` ${person2.middleName} ` : " "
          }${person1.surname}`,
          description: `${person2.firstName} takes ${person1.firstName}'s surname (${person1.surname})`,
        }),
      },
      {
        id: "ru-unchanged",
        description: "Both keep their original surnames",
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${
            person1.middleName ? ` ${person1.middleName} ` : " "
          }${person1.surname}`,
          person2FullName: `${person2.firstName}${
            person2.middleName ? ` ${person2.middleName} ` : " "
          }${person2.surname}`,
          description: `Both partners keep their original surnames`,
        }),
      },
      {
        id: "ru-combined",
        description:
          "The hyphenated combined surname applies to both. However, a double-hyphenated surname (e.g., if one spouse already had a hyphenated name) is generally not allowed.",
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${
            person1.middleName ? ` ${person1.middleName} ` : " "
          }${person1.surname}-${person2.surname}`,
          person2FullName: `${person2.firstName}${
            person2.middleName ? ` ${person2.middleName} ` : " "
          }${person1.surname}-${person2.surname}`,
          description: `Both partners use a hyphenated combination (${person1.surname}-${person2.surname})`,
        }),
      },
    ],
  },
  {
    id: "th",
    name: "Thailand",
    description:
      "In Thailand, a married couple can choose to take the same surname, but it is not mandatory. The couple can also choose to keep their individual surnames.",
    options: [
      {
        id: "th-person1",
        description: "Person 2 takes Person 1's surname",
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${
            person1.middleName ? ` ${person1.middleName} ` : " "
          }${person1.surname}`,
          person2FullName: `${person2.firstName}${
            person2.middleName ? ` ${person2.middleName} ` : " "
          }${person1.surname}`,
          description: `Both partners take ${person1.firstName}'s surname (${person1.surname})`,
        }),
      },
      {
        id: "th-person2",
        description: "Person 1 takes Person 2's surname",
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${
            person1.middleName ? ` ${person1.middleName} ` : " "
          }${person2.surname}`,
          person2FullName: `${person2.firstName}${
            person2.middleName ? ` ${person2.middleName} ` : " "
          }${person2.surname}`,
          description: `Both partners take ${person2.firstName}'s surname (${person2.surname})`,
        }),
      },
      {
        id: "th-unchanged",
        description: "Both keep their original surnames",
        nameFunction: (person1, person2) => ({
          person1FullName: `${person1.firstName}${
            person1.middleName ? ` ${person1.middleName} ` : " "
          }${person1.surname}`,
          person2FullName: `${person2.firstName}${
            person2.middleName ? ` ${person2.middleName} ` : " "
          }${person2.surname}`,
          description: `Both partners keep their original surnames`,
        }),
      },
    ],
  },
];

export default countries;
