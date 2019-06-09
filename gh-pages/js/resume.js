// Select DOM items
const resumeSkills = document.querySelectorAll(".score");

let done = false;
let animationAmount = 0;
let speed = 200; // lower is faster

// Boolean of no-styling standard set to false
let showSkillsStyling = false;

function toggleShowSkills() {
  showSkillsStyling = !showSkillsStyling;
}

function showStyling() {
  if (animationAmount == 100) {
    done = true;
  }

  if (!done) {
    animationAmount += 1;
    for (skill of resumeSkills) {
      let number = skill.innerHTML;
      let canvas = skill.getContext("2d");
      console.log(number);
      canvas.fillRect(0, 2, number * 50 * (animationAmount / 100), 40);
    }

    return setInterval(showStyling, speed);
  } else {
    return;
  }
}

showStyling();
