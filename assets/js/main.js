const container = document.querySelector(".card-container");
container.innerHTML = "";

const completedProjects = projects.filter((pro) => pro.status === "completed");
const githubBaseUrl =
  "https://github.com/abhi790/100-Days-Javascript-Commitment/tree/main/projects/";
const netlifyBaseUrl =
  "https://100-days-javascript-commitment.netlify.app/projects/";
const imageBaseLink = "../../projects/";

function createProjectCard(project, index) {
  const tagColors = {
    HTML: "card__tag--html",
    CSS: "card__tag--css",
    Javascript: "card__tag--javascript",
    React: "card__tag--react",
    Node: "card__tag--node",
  };

  const tagSpans = project.technologies
    .map((tech) => {
      const colorClass = tagColors[tech] || "card__tag--default";
      return `<span class="card__tag ${colorClass}">${tech}</span>`;
    })
    .join("");

  return `<div class="card">
      <img
        src="${imageBaseLink}${project.folder}/${project.folder}.png"
        alt="${project.name}"
        onerror="this.src = 'https://picsum.photos/280/200'"
      />
      <div class="card-content">
      <div class="temp">
        <h2>${project.emoji}_${project.number}-${project.name}</h2>
      </div>
        <p>${project.description}</p>

        <div class="tech-row">
            ${tagSpans}
        </div>
        <div class="btn-container">
            <button class="btn btn-github"><a href="${githubBaseUrl}${project.folder}/" >Github</a></button>
            <button class="btn btn-live"><a href="${netlifyBaseUrl}${project.folder}/" >Live</a></button>
        </div>
      </div>
    </div>`;
}

function updateStats() {
  document.querySelector(".completed").textContent = completedProjects.length;
  document.querySelector(".remaining").textContent =
    100 - completedProjects.length;
  document.querySelector(".progress").textContent =
    completedProjects.length + "%";
}

function renderProjects() {
  completedProjects.forEach((project, index) => {
    const card = document.createElement("div");
    card.innerHTML = createProjectCard(project, index);

    container.insertAdjacentElement("beforeend", card);
  });
}

updateStats();
renderProjects();
document.querySelector("#year").textContent = new Date().getFullYear();
