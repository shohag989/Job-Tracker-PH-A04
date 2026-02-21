const jobs = [
  {
    id: 1,
    companyName: "Google",
    position: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$3500",
    description: "Build scalable UI using React and modern JS.",
    status: "all",
  },
  {
    id: 2,
    companyName: "Microsoft",
    position: "Backend Developer",
    location: "USA",
    type: "Full-time",
    salary: "$4000",
    description: "Develop REST APIs using Node.js.",
    status: "all",
  },
  {
    id: 3,
    companyName: "Amazon",
    position: "UI Engineer",
    location: "Canada",
    type: "Remote",
    salary: "$3200",
    description: "Improve user experience across platforms.",
    status: "all",
  },
  {
    id: 4,
    companyName: "Tesla",
    position: "Software Engineer",
    location: "Germany",
    type: "Full-time",
    salary: "$4500",
    description: "Work on automotive software systems.",
    status: "all",
  },
  {
    id: 5,
    companyName: "Spotify",
    position: "Frontend Engineer",
    location: "Sweden",
    type: "Hybrid",
    salary: "$3300",
    description: "Create engaging music streaming interfaces.",
    status: "all",
  },
  {
    id: 6,
    companyName: "Meta",
    position: "React Developer",
    location: "Sweden",
    type: "Contract",
    salary: "$3000",
    description: "Develop interactive social applications.",
    status: "all",
  },
  {
    id: 7,
    companyName: "Netflix",
    position: "JavaScript Developer",
    location: "UK",
    type: "Full-time",
    salary: "$3700",
    description: "Enhance streaming platform features.",
    status: "all",
  },
  {
    id: 8,
    companyName: "Adobe",
    position: "UI/UX Engineer",
    location: "USA",
    type: "Hybrid",
    salary: "$3900",
    description: "Design and implement modern UI systems.",
    status: "all",
  },
];

let currentTab = "all";

const jobContainer = document.getElementById("jobContainer");
const emptyState = document.getElementById("emptyState");

const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const sectionCount = document.getElementById("sectionCount");

function updateDashboard() {
  totalCount.innerText = jobs.length;
  interviewCount.innerText = jobs.filter(
    (j) => j.status === "interview",
  ).length;
  rejectedCount.innerText = jobs.filter((j) => j.status === "rejected").length;
}

function renderJobs() {
  const filtered =
    currentTab === "all" ? jobs : jobs.filter((j) => j.status === currentTab);

  sectionCount.innerText = filtered.length + " Jobs";
  jobContainer.innerHTML = "";

  if (filtered.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  } else {
    emptyState.classList.add("hidden");
  }

  filtered.forEach((job) => {
    const card = document.createElement("div");
    card.className = "job-card";

    card.innerHTML = `
      <h3>${job.companyName}</h3>
      <p><strong>${job.position}</strong></p>
      <p><i class="fas fa-map-marker-alt" style="color: #667eea; margin-right: 5px;"></i>${job.location} • ${job.type}</p>
      <p><i class="fa-solid fa-dollar-sign"></i>${job.salary}</p>
      <p style="margin-top: 15px;">${job.description}</p>

      <div class="button-group">
        <button class="interview-btn" data-id="${job.id}"><i class="fas fa-check-circle"></i> Interview</button>
        <button class="reject-btn" data-id="${job.id}"><i class="fas fa-times"></i> Rejected</button>
        <button class="delete-btn" data-id="${job.id}"><i class="fas fa-trash"></i> Delete</button>
      </div>
    `;

    jobContainer.appendChild(card);
  });
}

jobContainer.addEventListener("click", function (e) {
  const id = Number(e.target.dataset.id);
  const job = jobs.find((j) => j.id === id);

  if (e.target.classList.contains("interview-btn")) {
    job.status = job.status === "interview" ? "all" : "interview";
  }

  if (e.target.classList.contains("reject-btn")) {
    job.status = job.status === "rejected" ? "all" : "rejected";
  }

  if (e.target.classList.contains("delete-btn")) {
    const index = jobs.findIndex((j) => j.id === id);
    jobs.splice(index, 1);
  }

  updateDashboard();
  renderJobs();
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", function () {
    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active"));
    this.classList.add("active");
    currentTab = this.dataset.tab;
    renderJobs();
  });
});

updateDashboard();
renderJobs();
