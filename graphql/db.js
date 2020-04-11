export const people = [
  {
    id: "0",
    name: "Lizotte",
    age: 24,
    gender: "female"
  },
  {
    id: "1",
    name: "Young",
    age: 68,
    gender: "female"
  },{
    id: "2",
    name: "Chapman",
    age: 68,
    gender: "male"
  },{
    id: "3",
    name: "Miles",
    age: 65,
    gender: "male"
  },{
    id: "4",
    name: "Gough",
    age: 58,
    gender: "female"
  },{
    id: "5",
    name: "Gillard",
    age: 25,
    gender: "female"
  },{
    id: "6",
    name: "Levesque",
    age: 30,
    gender: "male"
  },{
    id: "7",
    name: "Porter",
    age: 61,
    gender: "male"
  },
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
}