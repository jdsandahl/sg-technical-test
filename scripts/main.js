const mainContainer = document.querySelector(".main-container");

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

//make textWrapper the first child of the mainContainer 
mainContainer.insertBefore(textWrapper, mainContainer.childNodes[0]);
