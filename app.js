let priceId =  document.querySelector("#price")
let priceIdValue = parseInt(priceId,10)
a(typeof(priceIdValue),priceIdValue)
let divDisplay = document.createElement('div')
document.body.appendChild(divDisplay)
let text = ""
// let a = prompt("enter the stock price on the day you bought")
let countId = document.querySelector("#count")
var currentPrice = 0


function apiLink(marketprice) {
    return "https://apiforstocks.manasa1998.repl.co/marketprice/today.json?text="+marketprice
} 

function doFetch(marketprice){
    fetch(apiLink(marketprice)).then(resp => resp.json())
    .then(json => 
        {
        let stringCurrentPrice = json.contents.marketprice
            a(typeof(stringCurrentPrice))
        currentPrice = parseInt(stringCurrentPrice,10)
        a(typeof(currentPrice))
        divDisplay.innerText = "Today's stock price is "+stringCurrentPrice 
    })
}

doFetch("today's market price")





let resultPrice=0;
let profitPc =0;
let lossPc =0;
  
function calculator(){
    
    divDisplay.innerText = "Going to display...result"
    if(priceIdValue>0){ //user entered correct input
        a(typeof(priceIdValue),typeof(currentPrice))

        let perShareResult = currentPrice -priceIdValue //perone stock the profit or loss calc
        a(currentPrice)
            resultPrice = perShareResult *countId.value //whole profit or loss
            a(resultPrice,perShareResult)
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
                lossPc =(-1)*(perShareResult/currentPrice)*100;
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
let button = document.querySelector("#button") //button referred using querySelector
button.addEventListener("click",calculator,false) //onclicking the button calculator is called


function a(...args){
    console.log(...args)
}
