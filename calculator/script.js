const buttonsElement =document.querySelectorAll("button")   /*allow us to select everything with the button tag*/

const inputFieldElement = document.getElementById("result")    /*allow to acces id of result */

for(let i =0; i<buttonsElement.length; i++){
    buttonsElement[i].addEventListener("click",()=>{
        const buttonValue=(buttonsElement[i].textContent)
        if(buttonValue === "C"){
            clearResult()
        }else if(buttonValue === "="){
            claculateResult()
        }else{
            appendValue(buttonValue)          /*numbers and operators */
        }
        
    })
}

function clearResult(){
    inputFieldElement.value="";

}

function claculateResult(){
    inputFieldElement.value = eval(inputFieldElement.value)

}

function appendValue(buttonValue){
    inputFieldElement.value +=buttonValue   /*previous value exist  and new value is added */

}