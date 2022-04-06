/* FIX HOVER IN MOBILE/TOUCH DEVICES */

function checkHover() {
  let touchTime = 0

  function enableHover() {
    if (new Date() - touchTime < 500) return
    document.body.classList.add('hasHover')
  }

  function disableHover() {
    document.body.classList.remove('hasHover')
  }

  function updateTouchTime() {
    touchTime = new Date()
  }

  document.addEventListener('touchstart', updateTouchTime, true)
  document.addEventListener('touchstart', disableHover, true)
  document.addEventListener('mousemove', enableHover, true)

  enableHover()
}

checkHover()
