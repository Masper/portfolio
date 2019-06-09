// Select DOM items
const resumeSkills = document.querySelectorAll(".skills > li");

// Boolean of no-styling standard set to false
let showSkillsStyling = false;

function toggleShowSkills() {
  showSkillsStyling = !showSkillsStyling;
}

function showStyling() {
  if (!showSkillsStyling) {
    for (skill of resumeSkills) {
      let number = skill.className;
      console.log(number);
      skill.innerHTML += ": ";

      for (i = 0; i < number; i++) {
        skill.innerHTML += "OOO";
      }
    }
  } else {
  }
}

showStyling();
