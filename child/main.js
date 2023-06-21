const inputId = "#messageText"
const $input = document.querySelector(inputId)

$input.addEventListener("keyup", function (event) {

  const { length } = window.parent.frames

  Array.from({ length }).forEach((_, index) => {
    window.parent.frames[index].postMessage(event.target.value, location.origin);
  })
});

window.addEventListener(
  "message",
  (event) => {
    if (event.origin !== location.origin) return;
    
    if (event.source === event.target) return;

    $input.value = event.data
  },
  false
);
