let priceId = document.querySelector("#price")
// let a = prompt("enter the stock price on the day you bought")
let countId = document.querySelector("#count")

let currentPriceId = document.querySelector("#current-price")

let url = "https://apiforstocks.manasa1998.repl.co"


let divDisplay = document.createElement('div')

divDisplay.innerText = "Today's stock price is ₹40,000"
document.body.appendChild(divDisplay)
let resultPrice=0;
let profitPc =0;
let lossPc =0;
  
function calculator(){
    
    divDisplay.innerText = ""
    if(priceId.value>0){ //user entered correct input
        let perShareResult = currentPriceId.value-priceId.value //perone stock the profit or loss calc
            resultPrice = perShareResult *countId.value //whole profit or loss
            if(resultPrice>0){ //when profit
                console.log(`profit  is ${resultPrice}`)
                divDisplay.innerText += `Your balance for today ${resultPrice}`; 
                profitPc = (perShareResult/currentPriceId.value)*100; //calc percentage profit
                divDisplay.innerText += `\nyour profit %age is ${profitPc}`
                //add bull or some icon indicating profits in share terms 
            }
             if(resultPrice<0){
                console.log(`loss is ${resultPrice}`)
                divDisplay.innerText += `Your loss for today ${(-1)*resultPrice}`; 
                lossPc =(-1)*(perShareResult/currentPriceId.value)*100;
                divDisplay.innerText += `\nyour loss %age is ${lossPc}`
                if(lossPc>49){ //if loss is more than 50%
                    divDisplay.innerText += ("😢😢")
                     //add bull or some icon indicating profits in share terms 
                    document.body.style.backgroundColor = "orange"
                }
            }
           
        //fetch today's price from api calls
    }
}
let button = document.querySelector("button") //button referred using querySelector
button.addEventListener("dblclick",calculator,false) //onclicking the button calculator is called