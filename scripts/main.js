const RenderComponent = (data) => {
  const content = data;
  return fetch(content)
   .then((response) => response.json())
    .then((data) => {
      createElements(data);
    });
};

const createElements = (props) => {
  const mainContainer = document.querySelector(".main-container");
  props.forEach(({ title, mainText, buttonText, buttonLink, imageURL }) => {
    //Create elements for the text-section of the component
    const textWrapper = document.createElement("div");
    textWrapper.classList.add("text-wrapper");

    const heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.innerText = title;

    const text = document.createElement("p");
    text.classList.add("text");
    text.innerText = mainText;

    const button = document.createElement("button");
    button.classList.add("btn");
    button.innerText = buttonText;
    button.addEventListener("click", () => {
      window.location = buttonLink;
    });

    textWrapper.appendChild(heading);
    textWrapper.appendChild(text);
    textWrapper.appendChild(button);

    //Create elements for the image-section of the component
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image-wrapper");

    const image = document.createElement("img");
    image.classList.add("hero-image");
    image.src = imageURL;

    imageWrapper.appendChild(image);

    // Render textWrapper as the first child of the mainContainer
    // with the imageWrapper rendered directly after it
    mainContainer.insertBefore(textWrapper, mainContainer.childNodes[0]);
    textWrapper.insertAdjacentElement("afterend", imageWrapper);
  });
};

export default RenderComponent;
