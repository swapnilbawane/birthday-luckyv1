const dateInput = document.querySelector("#date-input"); 

const luckyNumber = document.querySelector("#lucky-number");

const btnCheck = document.querySelector("#btn-check");

const hiddenText = document.querySelector("#hidden-text"); 

const bodyMain = document.querySelector(".b");
console.log(bodyMain);

const bodyNew = document.querySelector("body");

let sum = 0; 

function checkBirthdayLucky ()
{ 
    {
        // before you begin you validate 
        console.log(dateInput.value);
        console.log(luckyNumber.value);
        
        if( dateInput.value&&luckyNumber.value>0)
        
        { 
            //  1. read string and store string without - 
            let birthDateString = dateInput.value.replaceAll("-","");
         console.log(birthDateString);
        
            // 2. Add all numbers in string to sum value 
            for ( let index=0; index<birthDateString.length; index++)
            { 
                sum = sum + Number(birthDateString.charAt(index));     
            }
            // 3. Find if number is lucky or not? 
            if(sum%luckyNumber.value===0) { 
                hiddenText.style.display = "block";
                hiddenText.innerText = "Your Birthday is Lucky"; 
                hiddenText.style.color = "white";
                hiddenText.style.backgroundColor = "green";
                bodyNew.style.backgroundColor = "white";
                bodyNew.style.backgroundImage = "url(assets/party.png)";
                bodyMain.style.backgroundColor = "white";
            }
            else { 
                hiddenText.style.display = "block";
                hiddenText.innerText = "Oops. Never Mind. Birthdate is not matching with lucky number."; 
                hiddenText.style.color = "white";
                hiddenText.style.backgroundColor = "orange";
                bodyNew.style.backgroundColor = "white";
                // bodyNew.style.backgroundImage = "url(assets/sorry.png)";
                bodyMain.style.backgroundColor = "white";
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