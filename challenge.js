// Action for leaving comments
const newForm = document.querySelector("#comment-form")
const textBox = document.querySelector("#comment-form > input[type=text]")
const list = document.querySelector("#list")

newForm.addEventListener('submit', ev => {
  ev.preventDefault()
  list.insertAdjacentHTML("beforeend", `${textBox.value} <br>`)
  newForm.reset()
});


// Actions for buttons
const minusButton = document.querySelector("#\\-")
const addButton = document.querySelector("#\\+")
const likeButton = document.querySelector("#\\<3")
const pauseButton = document.querySelector("#pause")
const submitButton = document.querySelector("#submit")
const likes = document.querySelector("body > ul.likes")
const counter = document.querySelector("#counter")

// If pause button is clicked, then pause becomes true
pause = false
//

  const myTimer = setInterval(() => {
    if (!pause) {
      counter.innerText = parseInt(counter.innerText) + 1
    }
  }, 1000);


document.addEventListener('click', event => {
  if (event.target === minusButton) {
    counter.innerText = parseInt(counter.innerText) - 1
  } else if (event.target === addButton) {
    counter.innerText = parseInt(counter.innerText) + 1
  } else if (event.target === pauseButton) {
    minusButton.disabled = !minusButton.disabled
    addButton.disabled = !addButton.disabled
    likeButton.disabled = !likeButton.disabled
    submitButton.disabled = !submitButton.disabled
    if (!pause) {
      interval = setInterval(() => { counter.innerText = parseInt(counter.innerText) + 1 }, 1000);
      pauseButton.innerText = "pause"
    } else {
      clearInterval(interval)
      pauseButton.innerText = "resume"
    }
  } else if (event.target === likeButton) {
      const found = document.querySelector(`[data-like-id='${counter.innerText}']`)
      if (found) {
        let something = found.querySelector("span")
        // debugger
        something.innerText = parseInt(something.innerText) + 1
      } else {
        likes.insertAdjacentHTML("beforeend", `<li data-like-id=${counter.innerText}> ${counter.innerText} has been liked <span>1</span> time(s)</li>`)
      }  
  }
})