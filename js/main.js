const foxImg = document.querySelector('#fox')
const foxSays = new Audio("../audio/fox.mp3")

console.log(foxImg)

foxImg.addEventListener('click', function(){
    foxSays.volume = .05
    foxSays.play()
})

const notFoxImg = document.querySelector("#notFox")

notFoxImg.addEventListener("click", evt =>{
    if (evt.target.id !== 'not Fox'){
        const audioElement = new Audio(`../audio/${evt.target.id}.mp3`)
        audioElement.volume = 0.01
        audioElement.play()
    }
})

