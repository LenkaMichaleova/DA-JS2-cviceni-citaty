export const listQuotes = ["Blbější z toho nevyjdu", "jsx je něco jako JavaScript na steroidech", "Funkce se rodí jako děti - anonymně a potom dostanou jméno"]


export const randomQuote = (list) => {
    return `"${listQuotes[Math.floor(Math.random() * 3)]}"` 
}