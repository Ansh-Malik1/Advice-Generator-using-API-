const dice= document.querySelector(".dice")
const diceImg= document.querySelector(".diceImg")
let flag = true

const advice = document.querySelector("[advice]")
const id = document.querySelector(".adviceNo")

async function adviceGenerator(){
    const response= await fetch (`https://api.adviceslip.com/advice`)
    let data = await response.json()
    showText(data)
}

function showText(data){
    id.innerText= "Advice # "+data.slip?.id
    advice.innerText=data.slip?.advice
}


dice.addEventListener("click",()=>{
    diceImg.classList.add("animate")
    setTimeout(function(){
        diceImg.classList.remove("animate")
    },1020)
    adviceGenerator()
})