import users from "./users.js";

const getNamesSortedByFriendsCount = (users) => {
  return users
    .sort((a, b) => a.friends.length - b.friends.length)
    .reduce((arr, { name }) => {
      arr.push(name);
      return arr;
    }, []);
};

console.log(getNamesSortedByFriendsCount(users));
[
  "Moore Hensley",
  "Sharlene Bush",
  "Elma Head",
  "Carey Barr",
  "Blackburn Dotson",
  "Sheree Anthony",
  "Ross Vazquez",
];
