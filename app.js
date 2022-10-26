//ONE DIV THAT HOLDS THREE VALUES
//*******first****** get all the elements from the page
const memeForm = document.querySelector("#meme-form")
const urlInput = document.querySelector("#url-input")
const topTextInput = document.querySelector("#top-text-input")
const bottomTextInput = document.querySelector("#bottom-text-input")
const submitBtn = document.querySelector("#submit-button")
const memeContainer = document.querySelector(".meme-container")


memeForm.addEventListener("submit", e => {
    e.preventDefault()

    const meme = document.createElement("div")
    meme.classList.add("meme")

    const img = document.createElement("img")
    img.classList.add("image")
    img.src = urlInput.value
   

    const topText = document.createElement("div")
    topText.classList.add("top-text")
    topText.innerText = topTextInput.value

    const bottomText = document.createElement("div")
    bottomText.classList.add("bottom-text")
    bottomText.innerText = bottomTextInput.value

    const removeBtn = document.createElement("button")
    removeBtn.innerText = "delete mEMe"

    meme.append(img, topText, bottomText, removeBtn)
    memeContainer.append(meme)

    memeForm.reset() 
})

memeContainer.addEventListener("click", e => {
    console.log(e.target)
    if(e.target.tagName === "BUTTON") {
        e.target.parentElement.remove()
    }   
})