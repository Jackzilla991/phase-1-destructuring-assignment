let animalSounds = {moo: "cow", neigh: "horse", baa: "sheep", oink: "pig", cluck: "chicken"}
let animalNames = {bessie: "cow", dolly: "sheep", babe: "pig", little: "chicken"}
let animalColors = {blackAndWhite: "cow", black: "sheep", pink: "pig"}
let rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
let rainbowInitials = {r: "red", o: "orange", y: "yellow", g: "green", b: "blue", v: "violet", indg: "indigo"}
let muppet = {muppetName: "Miss Piggy", color: "pink",song: ["Never Before, Never Again", "Moving Right Along", "Something Better Comes Along"], job: "Cast member of The Muppet Show", partner: "Kermit"}

const {moo, neigh, baa, oink, cluck} = animalSounds
const {bessie, dolly, babe, little} = animalNames
const {blackAndWhite, black, pink} = animalColors
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors
const {r, o, y, g, b, v, indg} = rainbowInitials
const {muppetName, color,song, job, partner} = muppet
var song2 = 'Moving Right Along'
var song4 = 'I Hope That Something Better Comes Along'
var nestedJob = {
  kermit: {
    job: 'Singer',
    partner: 'Miss Piggy'
  }
};

console.log(moo) // "cow"
console.log(neigh) // "horse"
console.log(baa) // "sheep"
console.log(oink) // "pig"
console.log(cluck) // "chicken"

console.log(bessie) // "cow"
console.log(dolly) // "sheep"
console.log(babe) // "pig"
console.log(little) // "chicken"

console.log(blackAndWhite) // "cow"
console.log(black) // "sheep"
console.log(pink) // "pig"

console.log(red) // "red"
console.log(orange) // "orange"
console.log(yellow) // "yellow"
console.log(green) // "green"
console.log(blue) // "blue"
console.log(indigo) // "indigo"
console.log(violet) // "violet"

console.log(r) // "red"
console.log(o) // "orange"
console.log(y) // "yellow"
console.log(g) // "green"
console.log(b) // "blue"
console.log(v) // "violet"
console.log(indg) // "indigo"

console.log(muppetName) // "Miss Piggy"
console.log(color) // "pink"
console.log(song) // ["Never Before, Never Again", "Moving Right Along", "Something Better Comes Along"]
console.log(job) // "Cast member of The Muppet Show"
console.log(partner)
