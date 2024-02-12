import Popover from "./Popover";

const button = document.querySelector(".button");

button.addEventListener("click", () => {
  let popover = document.querySelector(".popover");

  if (popover) {
    document.body.removeChild(popover);
  } else {
    const title = "Popover title";
    const content =
      "And here's some amazing content. It's very engaging. Right?";

    popover = new Popover(title, content, button);
    popover.bindToDOM();
  }
});
