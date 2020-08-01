const mainContainer = document.querySelector(".main-container");

//Create elements for the text-section of the component
const textWrapper = document.createElement("div");
textWrapper.classList.add("text-wrapper");

const heading = document.createElement("h1");
heading.classList.add("heading");
heading.innerText = "We're here to help with your legal services, when you need us."

const text = document.createElement("p");
text.classList.add("text");
text.innerText = "For the bigger matters, and the small, we offer you a range of legal services that are built around what you need. Simple, straightforward, human and fair."

const button = document.createElement("button");
button.classList.add("btn");
button.innerText = "Popular services";
button.addEventListener("click", () => {
    window.location = "http://www.example.com";
});

textWrapper.appendChild(heading);
textWrapper.appendChild(text);
textWrapper.appendChild(button);

//Create elements for the image-section of the component
const imageWrapper = document.createElement("div");
imageWrapper.classList.add("image-wrapper");

const image = document.createElement("img");
image.classList.add("hero-image");
image.src = "https://sguk-uks-mkt-web-prod-02-cdn-endpoint-assets.azureedge.net/public/images/bitmap/large/157417321.jpg?version=20200720.1";

imageWrapper.appendChild(image);

/* Render textWrapper as the first child of the mainContainer 
   and have the image section rendered directly after it */
mainContainer.insertBefore(textWrapper, mainContainer.childNodes[0]);
textWrapper.insertAdjacentElement("afterend", imageWrapper);