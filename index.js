





function findMatching (drivers, string) {
  return drivers.filter( driver => driver.toLowerCase() === string.toLowerCase())
}


function fuzzyMatch (drivers, firstLetters) {
   return drivers.filter(letters => letters.slice(0, 2)  === firstLetters )
}


function matchName(drivers, string) {
  return drivers.filter( driver => driver.name === string)
}