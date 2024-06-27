const projects = [
  {
    id: 1,
    name: "3 Building layouts",
  },
  {
    id: 2,
    name: "Employee Card",
  },
  {
    id: 3,
    name: "Building Components",
  },
  {
    id: 4,
    name: "Animations",
  },
  {
    id: 5,
    name: "Project Left 3",
  },
  {
    id: 6,
    name: "Project Right 3",
  },
];
let result = [];
const searchIcon = document.getElementById("search-input");

function updateVisibility(result) {
  projects.forEach((element) => {
    if (result.includes(element)) {
      document.getElementById(`project-${element.id}`).classList.remove("hide");
      document.getElementById(`project-${element.id}`).classList.add("show");
    } else {
      document.getElementById(`project-${element.id}`).classList.remove("show");
      document.getElementById(`project-${element.id}`).classList.add("hide");
    }
  });
  console.log("Check");
}
searchIcon.addEventListener("input", function (e) {
  result = [];
  projects.forEach((element) => {
    if (element.name.toLowerCase().includes(searchIcon.value.toLowerCase())) {
      result.push(element);
    }
  });
  updateVisibility(result);
});
