const man = {
  name: "bossm0n5t3r",
  age: 28,
  gender: "male"
};

const resolvers = {
  Query: {
    person: () => man
  }
};

export default resolvers;
