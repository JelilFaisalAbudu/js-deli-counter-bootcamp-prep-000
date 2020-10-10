function takeANumber(people, person) {
  people.push(person);
  
  return `Welcome, ${person}. You are number ${people.length} in line.`;
}

function nowServing(katzDeliLine) {
  return katzDeliLine.shift();
}