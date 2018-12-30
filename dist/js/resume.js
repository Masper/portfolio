// Select DOM items
const resumeSkills = document.querySelectorAll(".resume-skills-grade");

// Boolean of no-styling standard set to false
let toggleSkillsStyling = false;

// Function to apply styling
function showStyling() {
  if (!toggleSkillsStyling) {
    for (skill of resumeSkills) {
      let number = skill.innerHTML;
      skill.innerHTML += ": ";

      for (i = 0; i < number; i++) {
        skill.innerHTML += "OOO";
      }
    }
  } else {
  }
}

showStyling();
