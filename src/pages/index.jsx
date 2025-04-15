import './index.css';
import { listQuotes , randomQuote, moveToTop } from "/quotes.js"

const renderQuotes = () => {
  listQuotes.forEach((quote) => {
    document.querySelector(".container").innerHTML += `<p>"${quote}"</p>`
  })
  document.querySelectorAll("p").forEach((p, i) => {

    p.addEventListener("click", () => {
      document.querySelector(".container").textContent = ""
      moveToTop(i)
      renderQuotes()
      console.log(listQuotes)
    })
  })
}

console.log(randomQuote())
renderQuotes()