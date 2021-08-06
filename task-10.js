import users from "./users.js";

const getSortedUniqueSkills = (users) => {
  return users
    .reduce((arr, { skills }) => {
      arr.push(...skills);
      return arr;
    }, [])
    .reduce((arr, skill) => {
      if (!arr.includes(skill)) {
        arr.push(skill);
      }
      return arr;
    }, [])
    .sort();
};
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
