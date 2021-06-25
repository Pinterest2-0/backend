
const users = [
  {
    username: "IronMan",
    password: "Avenger6^"
  },
  {
    username: "CapAmerica",
    password: "Avenger6^"
  },
  {
    username: "Thor",
    password: "Avenger6^"
  },
  {
    username: "Hulk",
    password: "Avenger6^"
  },
  {
    username: "Hawkeye",
    password: "Avenger6^"
  },
  {
    username: "BlackWidow",
    password: "Avenger6^"
  },
]

exports.users = users

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').insert(users)
};
