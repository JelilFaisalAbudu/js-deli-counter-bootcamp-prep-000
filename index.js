function takeANumber(people, person) {
  people.push(person);
  
  return `Welcome, ${person}. You are number ${people.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "there is nobody to be served!";
  }
  else {
    return katzDeliLine.shift();
  }
}