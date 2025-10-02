export function setupButtons() {
  const latestProjectsButton = document.getElementById("latestProjectsButton");
  if (latestProjectsButton) {
    latestProjectsButton.addEventListener("click", () => {
      window.location.href = "./project.html";
    });
  }
}

export function setupSchoolButton() {
  const schoolProjectsButton = document.getElementById("schoolProjectsButton");
  if (schoolProjectsButton) {
    schoolProjectsButton.addEventListener("click", () => {
      window.location.href = "./projects/project-school.html";
    });
  }
}

export function setupPrivateButton() {
  const privateProjectsButton = document.getElementById("privateProjectsButton");
  if (privateProjectsButton) {
    privateProjectsButton.addEventListener("click", () => {
      window.location.href = "./projects/project-private.html";
    });
  }
}
