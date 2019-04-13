document.addEventListener("DOMContentLoaded", () => {
  // input data for the accordion elements
  const titleOne = "Terms and Conditions";
  const textOne =
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sed sequi nostrum laudantium perspiciatis soluta obcaecati praesentium quae, ab totam inventore id delectus tempore maiores qui animi consectetur et saepe voluptates? Dicta distinctio natus, quae quos omnis esse odio hic. Reiciendis harum dignissimos veniam incidunt facilis rerum dicta, non natus.`;

    const titleTwo = "General Info";
  const textTwo =
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sed sequi nostrum laudantium perspiciatis soluta obcaecati praesentium quae, ab totam inventore id delectus tempore maiores qui animi consectetur et saepe voluptates? Dicta distinctio natus, quae quos omnis esse odio hic. Reiciendis harum dignissimos veniam incidunt facilis rerum dicta, non natus.
    <br><br>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sed sequi nostrum laudantium perspiciatis soluta obcaecati praesentium quae, ab totam inventore id delectus tempore maiores qui animi consectetur et saepe voluptates? Dicta distinctio natus, quae quos omnis esse odio hic. Reiciendis harum dignissimos veniam incidunt facilis rerum dicta, non natus.`;

  const accordionOne = new ExpandableElement();
  const accordionTwo = new ExpandableElement();
  accordionOne.mount("wrapper", titleOne, textOne);
  accordionTwo.mount("wrapper", titleTwo, textTwo);
  
});
