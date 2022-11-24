let jokeContainer = document.getElementById("joke")
let btn = document.getElementById("btn")
const url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,sexist,explicit&type=single";

let getdata=()=>{
    jokeContainer.classList.remove("fade")
    fetch(url).then((data)=>{
        return data.json()
    }).then((value)=>{
        jokeContainer.classList.add("fade")
        // console.log(value)
        jokeContainer.textContent= `${value.joke}`
    })
}
btn.addEventListener("click", getdata)
getdata()