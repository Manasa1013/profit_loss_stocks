let priceEvent = document.querySelector("#price")
let countEvent = document.querySelector("#count")
let divContent = document.querySelector("#div-display")
let divResult = document.querySelector("#div-result")
let btnID = document.querySelector("#btn")
let resetID = document.querySelector("#reset")


var currentPrice = "12345"
// function apiLink(marketprice) {
//     return "https://apiforstocks.manasa1998.repl.co/marketprice/today.json?text="+marketprice
// } 

// function doFetch(marketprice){
//     fetch(apiLink(marketprice)).then(resp => resp.json())
//     .then(json => 
//         {
//         currentPrice = json.contents.marketprice
            
//         currentPrice = parseInt(currentPrice,10)
        
//     })
// }

// doFetch("today's market price")



divContent.textContent = `Today's current stock price is ₹${currentPrice}`

function calcProfitLoss(){
    let textPrice = priceEvent.value
    let textCount = countEvent.value
    
    textPrice = parseInt(textPrice,10)
    textCount = parseInt(textCount,10)
    currentPrice = parseInt(currentPrice,10)
    
    console.log("textPrice"+typeof(textPrice)+textPrice)

    console.log(currentPrice)
    console.log(typeof(currentPrice))
    let data =
     `Summary:
    <li>Stock price when bought ₹<strong>${textPrice}</strong></li>
    <li>Number of stocks bought ${textCount}</li>`
    divResult.innerHTML +=data      
    
    let datapl = ""
    

    if(textPrice>0){
        
    let perShareResult = currentPrice - textPrice
    console.log(perShareResult+" "+typeof(perShareResult))
    let resultPrice = perShareResult * textCount
    console.log(resultPrice+" "+typeof(resultPrice))
    if(resultPrice>0){
        let profitage = profitFunction(textPrice,perShareResult,textCount)
        datapl = 
        `<li>Profit earned per share is 
                <strong>${perShareResult}</strong>
                </li>
        <li>Net Profit is 
        <strong>${resultPrice}</strong>
        </li>
        <li>Profit percentage is <strong>${profitage}</strong></li>`
        document.body.style.backgroundColor = "white"
    }
    else{
        if(resultPrice<0){
            let lossage = lossFunction(textPrice,perShareResult,textCount)
            datapl = 
            `<li>Loss per share is 
                    <strong>${(-1)*perShareResult}</strong>
                    </li>
            <li>Net Loss is 
            <strong>${(-1)*resultPrice}</strong>
            </li>
            <li>Loss percentage is <strong>${lossage}😥😥</strong></li>`
            if(lossage>50)
            { document.body.style.backgroundColor = "orange"}

        }
        else{
            console.log("You earned neither profit nor loss \n1.Maybe you bought stocks today itself:)\n2.There is no rise or fall in the stocks you bought")
            datapl =  `<li>You earned neither profit nor loss</li>
            <h4>1.Maybe you bought stocks today itself:)</h4>
            <h4>2.There is no rise or fall in the stocks since the day you bought<h4>
            </li>`
            document.body.style.backgroundColor = "white"
        }
    }
    
    }
    else{
        divResult.innerHTML = `<h3>enter numbers/positive values</h3>`
        document.body.style.backgroundColor = "white"
        console.log("enter values/positive values")
    }
    
    divResult.innerHTML +=datapl

}

function profitFunction(exTextPrice,exPerShareResult,exTextCount){
    let profit = exPerShareResult
    console.log(`Profit earned whole ${profit*exTextCount}`)
    console.log(`profit per share is ${profit}`)
    let profitPerc = (profit/exTextPrice) *100
    console.log(`profit percentage per share is ${profitPerc}`)
    return profitPerc
}

function lossFunction(exTextPrice,exPerShareResult,exTextCount){
    let loss = (-1)*exPerShareResult
    console.log(`Loss earned whole ${loss*exTextCount}`)
    console.log(`loss per share is ${loss}`)
    let lossPerc = (loss/exTextPrice) * 100
    console.log(`loss percentage per share is ${lossPerc}`)
    return lossPerc
}
function resetData(){
        priceEvent.value =""
        countEvent.value =""
        divContent.textContent = `Today's current stock price is ₹${currentPrice}`
        divResult.innerHTML = ``
        document.body.style.backgroundColor = "white"
        
    
}

btnID.addEventListener('click',()=>{
    calcProfitLoss();
    priceEvent.value=""
    countEvent.value = ""
},false)

resetID.addEventListener('click',resetData,false)