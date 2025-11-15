const facts = [
  { text: "Elephants are the only animals that can’t jump!",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg" },
  { text: "A group of flamingos is called a flamboyance!",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Flamingos_in_the_water.jpg" },
  { text: "Sea otters hold hands while sleeping so they don’t drift apart!",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Sea_otters_holding_hands.jpg" },
  { text: "Sloths can hold their breath longer than dolphins can!",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Three-toed_Sloth_in_Costa_Rica.jpg" },
  { text: "A snail can sleep for 3 years!",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Snail_close_up.jpg" },
  { text: "Cows have best friends and get sad when separated.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Cows_in_field.jpg" },
  { text: "Octopuses have three hearts!",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Octopus2.jpg" },
  { text: "Koalas sleep about 18 hours a day!",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Koala_climbing_tree.jpg" },
  { text: "Penguins propose to their mates with pebbles!",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Penguin_with_pebble.jpg" },
  { text: "Giraffes only need 30 minutes of sleep a day!",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Giraffe_standing_in_grassland.jpg" }
];

function showFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  const fact = facts[randomIndex];

  const textBox = document.getElementById("fact");
  const pic = document.getElementById("animalPic");

  textBox.innerText = fact.text;

  // reset animation
  pic.classList.remove("animate");
  void pic.offsetWidth;
  pic.src = fact.image;
  pic.classList.add("animate");
}
