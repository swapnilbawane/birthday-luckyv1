const dateInput = document.querySelector("#date-input");

const luckyNumber = document.querySelector("#lucky-number");

const btnCheck = document.querySelector("#btn-check");

const hiddenText = document.querySelector(".hidden-text");

// Refactor: 
const bodyMain = document.querySelector(".b");
const bodyNew = document.querySelector("body");
const imageResult = document.querySelector(".image-result");

function checkBirthdayLucky() {
  {
    if (dateInput.value && luckyNumber.value > 0) {
      let birthDateString = dateInput.value.replaceAll("-", "");
      let sum = 0;

      for (let index = 0; index < birthDateString.length; index++) {
        sum = sum + Number(birthDateString.charAt(index));
      }

      if (sum % luckyNumber.value === 0) {

        hiddenText.classList.add("luckymessage");
        hiddenText.innerText = "Your Birthday is Lucky";

        bodyNew.style.backgroundColor = "white";
        bodyMain.style.backgroundColor = "white";

        imageResult.classList.add("luckyimage");
        imageResult.classList.remove("image-result");

      }

      else {

        hiddenText.classList.add("notsoluckymessage");
        hiddenText.innerText = "Oops. Birthdate is not matching with lucky number.";

        bodyNew.style.backgroundColor = "white";
        bodyMain.style.backgroundColor = "white";

        imageResult.classList.add("notsoluckyimage");
        imageResult.classList.remove("image-result");
      }

    }

    else {

      hiddenText.classList.add("incorrectinputtext");
      hiddenText.innerText = "Please enter both the fields correctly.";

      bodyNew.style.backgroundColor = "white";
      bodyMain.style.backgroundColor = "white";

      imageResult.classList.add("incorrectimage");
        imageResult.classList.remove("image-result");
    }

  }
}

btnCheck.addEventListener("click", checkBirthdayLucky);
