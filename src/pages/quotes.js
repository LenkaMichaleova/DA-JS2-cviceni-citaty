export let listQuotes = ["Blbější z toho nevyjdu", "jsx je něco jako JavaScript na steroidech", "Funkce se rodí jako děti - anonymně a potom dostanou jméno"]


export const randomQuote = (list) => {
    return `"${listQuotes[Math.floor(Math.random() * 3)]}"` 
}

export const moveToTop = (indexQuote) => {
    let valueQuote = listQuotes[indexQuote]
    listQuotes.splice(indexQuote, 1)
    listQuotes.unshift(valueQuote)
}