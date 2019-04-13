class ExpandableElement {
  constructor(title, text) {
    this.title = title;
    this.text = text;
  }

  render() {
    this.element = document.createElement("div");
    this.element.className = "accordion";
    this.element.innerHTML = (
        `<div class="title-container">
            <img id="arrow" class="arrow closed" src="img/arrow.png" >
            <h3 class="accordion-title">${this.title}</h3>
        </div>
        <div id="text-container" class="text-container">
            <p class="text">${this.text}</p>
            <hr class="bottom-line"></hr>
        </div>`);

    this.clickable = this.element.querySelector(".title-container");

    this.clickable.addEventListener("click", () => {
      this.closeable = this.element.querySelector(".text-container");
      this.arrow = this.element.querySelector("#arrow");

      if (this.closeable.style.maxHeight) {
        this.closeable.style.maxHeight = null;
        this.arrow.className = "arrow closed";
      } else {
        this.closeable.style.maxHeight = this.closeable.scrollHeight + "px";
        this.arrow.className = "arrow";
      }
    });

    return this.element;
  }

  mount(where) {
    document.querySelector("." + where).appendChild(this.render());
  }
}
