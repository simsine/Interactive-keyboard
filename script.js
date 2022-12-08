class Keyboard
{
    constructor()
    {
        this.keyButtonArray = document.querySelectorAll("button");
        this.textOutput = document.querySelector("textarea")
    }
    lightUpButton(button)
    {
        button.classList.add("active");
    }
    unlightUpButton(button)
    {
        button.classList.remove("active");
    }
}

const keyboard = new Keyboard();

keyboard.keyButtonArray.forEach(button => {
    button.addEventListener("mousedown", () => {
        keyboard.lightUpButton(button)
    })
    button.addEventListener("mouseup", () => {
        keyboard.unlightUpButton(button)
    })
})

document.addEventListener("keydown", (event)=>{
    console.log(event.key)
    let button = document.getElementById(event.key) 
    keyboard.lightUpButton(button)
})

document.addEventListener("keyup", (event)=>{
    let button = document.getElementById(event.key) 
    keyboard.unlightUpButton(button)
})