function init() {

    // =========================
    // DOM elements
    // =========================

    const themeButton = document.querySelector("#theme-toggle");
    const bioToggle = document.querySelector("#bio-toggle");
    const extraBio = document.querySelector("#extra-bio");

    const skillFilter = document.querySelector("#skill-filter");
    const skillsList = document.querySelector("#skills-list");

    const skillForm = document.querySelector("#skill-form");
    const newSkillInput = document.querySelector("#new-skill");

    const contactButton = document.querySelector("#contact-button");
    const contactMessage = document.querySelector("#contact-message");


    // =========================
    // Theme toggle
    // =========================

    themeButton.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const isDarkMode =
            document.body.classList.contains("dark-mode");

        themeButton.textContent =
            isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
    });


    // =========================
    // Show more / Show less
    // =========================

    bioToggle.addEventListener("click", () => {

        extraBio.classList.toggle("hidden");

        const isHidden =
            extraBio.classList.contains("hidden");

        bioToggle.textContent =
            isHidden ? "Show More" : "Show Less";
    });


    // =========================
    // Skill filter
    // =========================

    skillFilter.addEventListener("input", () => {

        const searchText =
            skillFilter.value.trim().toLowerCase();

        // Get the current skills every time.
        // This also includes newly added skills.
        const skillItems =
            document.querySelectorAll(".skill-item");

        skillItems.forEach((skill) => {

            const skillName =
                skill.textContent.toLowerCase();

            skill.style.display =
                skillName.includes(searchText) ? "" : "none";
        });
    });


    // =========================
    // Add new skill
    // =========================

    skillForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const skillName =
            newSkillInput.value.trim();

        if (!skillName) {
            return;
        }

        const newSkill =
            document.createElement("li");

        newSkill.classList.add("skill-item");
        newSkill.textContent = skillName;

        skillsList.appendChild(newSkill);

        newSkillInput.value = "";

        // Re-run the filter so the new skill
        // immediately follows the current search.
        skillFilter.dispatchEvent(new Event("input"));
    });


    // =========================
    // Contact button
    // =========================

    contactButton.addEventListener("click", () => {

        contactMessage.classList.toggle("hidden");

        const isHidden =
            contactMessage.classList.contains("hidden");

        contactButton.textContent =
            isHidden ? "Contact Me" : "Message Shown";
    });
}


// Initialize application
init();