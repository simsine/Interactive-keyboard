class Keyboard
{
    constructor()
    {
        this.keyButtonArray = document.querySelectorAll("button");
        this.textOutput = document.querySelector("textarea")
    }
    lightUpButton(button)
    {
        button.classList = "active";
    }
    unlightUpButton(button)
    {
        button.classList = ""
    }
}

const keyboard = new Keyboard();

keyboard.keyButtonArray.forEach(button => {
    button.addEventListener("click", () => {
        keyboard.lightUpButton(button)
        setTimeout(()=>{
            unlightUpButton(button)
        }, 500)
    })
})

document.addEventListener("keydown", (event)=>{
    let button = document.getElementById(event.key) 
    keyboard.lightUpButton(button)
})

document.addEventListener("keyup", (event)=>{
    let button = document.getElementById(event.key) 
    keyboard.unlightUpButton(button)
})