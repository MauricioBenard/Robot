const robot = document.querySelector('.robot')

let number =0


function moveRobot() {
  number +=50
   robot.style.right = number + 'px'
  
}

robot.addEventListener("click", moveRobot)