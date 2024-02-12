export default class Popover {
  constructor(title, content, element) {
    this.title = title;
    this.content = content;
    this.element = element;
  }

  bindToDOM() {
    const popover = document.createElement("div");
    popover.classList.add("popover");

    const popoverTitle = document.createElement("div");
    popoverTitle.classList.add("popover-title");
    popoverTitle.textContent = this.title;

    const popoverContent = document.createElement("div");
    popoverContent.classList.add("popover-content");
    popoverContent.textContent = this.content;

    const popoverArrow = document.createElement("div");
    popoverArrow.classList.add("popover-arrow");

    popover.appendChild(popoverTitle);
    popover.appendChild(popoverContent);
    popover.appendChild(popoverArrow);

    const { left, bottom, width } = this.element.getBoundingClientRect();

    popover.style.left = left + width / 2 - 141 + "px";
    popover.style.bottom = bottom + 8 + "px";

    document.body.appendChild(popover);
  }
}
