console.log("This is my index.js");
// Data is an array of objects which contains information about the candidates
const data = [
  {
    name: "Harry mile",
    age: 18,
    city: "mumbai",
    language: "python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/med/men/56.jpg",
  },

  {
    name: "Arati mishra",
    age: 19,
    city: "pune",
    language: "javascript",
    framework: "Nodejs",
    image: "https://randomuser.me/api/portraits/med/women/56.jpg",
  },

  {
    name: "Charles joseph",
    age: 21,
    city: "Goa",
    language: "CSS",
    framework: "Tailwind",
    image: "https://randomuser.me/api/portraits/med/men/23.jpg",
  },

  {
    name: "Abhimanyu gaur",
    age: 25,
    city: "jaipur",
    language: "Nodejs",
    framework: "Expressjs",
    image: "https://randomuser.me/api/portraits/med/men/36.jpg",
  },

  {
    name: "Pooja jain",
    age: 20,
    city: "mathura",
    language: "python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/med/women/31.jpg",
  },
];

// CV Iterator
function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? {
            value: profiles[nextIndex++],done: false,
          }
        : {
            done: true,
          };
    },
  };
}
