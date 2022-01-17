import fetchData from "../util/fetchData";
import HTMLElement from "../factories/HTMLElement";

const inputElement = () => {
  const cityInputContainer = HTMLElement({
    elementType: "div",
    elementClass: "city-input",
  });

  const cityInput = HTMLElement({
    elementType: "input",
    inputType: "text",
    placeHolder: "What's your city?",
  });

  const cityInputButton = HTMLElement({
    elementType: "button",
    inputType: "submit",
    eventListener: {
      type: "click",
      function: (e) => {
        const inputValue = cityInput.value
          .replace(/(\s+$|^\s+)/g, "") // remove whitespace from begining and end of string
          .replace(/(,\s+)/g, ",") // remove any white space that follows a comma
          .replace(/(\s+,)/g, ",") // remove any white space that preceeds a comma
          .replace(/\s+/g, "+"); // replace any remaining white space with +, so it works in api call

        //send
        if (inputValue) {
          fetchData(inputValue);
          cityInput.value = "";
        }

        e.preventDefault();
      },
    },
  });

  const cityInputButtonContent = HTMLElement({
    elementType: "i",
    elementClass: "icon,ion-android-arrow-forward",
  });

  cityInputContainer.appendChild(cityInput);
  cityInputButton.appendChild(cityInputButtonContent);
  cityInputContainer.appendChild(cityInputButton);

  return cityInputContainer;
};

export default inputElement;
