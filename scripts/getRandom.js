function getRandomName() {
  const lastName = [
    "Harry",
    "Ross",
    "Bruce",
    "Cook",
    "Carolyn",
    "Morgan",
    "Albert",
    "Walker",
    "Randy",
    "Reed",
    "Larry",
    "Barnes",
    "Lois",
    "Wilson",
    "Jesse",
    "Campbell",
    "Ernest",
    "Rogers",
    "Theresa",
    "Patterson",
    "Henry",
    "Simmons",
    "Michelle",
    "Perry",
    "Frank",
    "Butler",
    "Shirley"
  ];
  const firstName = [
    "Ruth",
    "Jackson",
    "Debra",
    "Allen",
    "Gerald",
    "Harris",
    "Raymond",
    "Carter",
    "Jacqueline",
    "Torres",
    "Joseph",
    "Nelson",
    "Carlos",
    "Sanchez",
    "Ralph",
    "Clark",
    "Jean",
    "Alexander",
    "Stephen",
    "Roberts",
    "Eric",
    "Long",
    "Amanda",
    "Scott",
    "Teresa",
    "Diaz",
    "Wanda",
    "Thomas"
  ];
  return (
    firstName[Math.floor(Math.random() * firstName.length)] +
    " " +
    lastName[Math.floor(Math.random() * lastName.length)]
  );
}

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

export { getRandomName, getRandomColor };
