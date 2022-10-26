const dateInput = document.querySelector("#date-input"); 

const luckyNumber = document.querySelector("#lucky-number");

const btnCheck = document.querySelector("#btn-check");

const hiddenText = document.querySelector("#hidden-text"); 

// Refactor: 
const bodyMain = document.querySelector(".b");
const bodyNew = document.querySelector("body");
const imageResult = document.querySelector("#image-result"); 


let sum = 0; 

function checkBirthdayLucky ()
{ 
    {
       
        
        if( dateInput.value&&luckyNumber.value>0)
        
        { 
            let birthDateString = dateInput.value.replaceAll("-","");
        
          
            for ( let index=0; index<birthDateString.length; index++)
            { 
                sum = sum + Number(birthDateString.charAt(index));     
            }
        
            if(sum%luckyNumber.value===0) 
            { 
                hiddenText.style.display = "block";
                hiddenText.innerText = "Your Birthday is Lucky"; 
                hiddenText.style.color = "white";
                hiddenText.style.backgroundColor = "green";

                bodyNew.style.backgroundColor = "white";
                // bodyNew.style.backgroundImage = "url(assets/party4.png)";
                imageResult.style.backgroundImage = "url(assets/party4.png)";
                imageResult.style.backgroundRepeat = "no-repeat";
                imageResult.style.textAlign = "center";
                bodyMain.style.backgroundColor = "white";
            }

            else 
            { 
                hiddenText.style.display = "block";
                hiddenText.innerText = "Oops. Never Mind. Birthdate is not matching with lucky number."; 
                hiddenText.style.color = "white";
                hiddenText.style.backgroundColor = "orange";
                bodyNew.style.backgroundColor = "white";
                // bodyNew.style.backgroundImage = "url(assets/sorry.png)";
                bodyMain.style.backgroundColor = "white";
                bodyMain.style.color = "white";
            }
            
        }
        
        else 
        { 
            hiddenText.style.display = "block";
            hiddenText.innerText = "Please enter both the fields correctly.";
            hiddenText.style.color = "white";
            hiddenText.style.backgroundColor = "red";
            bodyNew.style.backgroundColor = "white";
            // bodyNew.style.backgroundImage = "url(assets/sorry.png)";
            bodyMain.style.backgroundColor = "white";
             
        }
        
        }
}

btnCheck.addEventListener("click", checkBirthdayLucky);  