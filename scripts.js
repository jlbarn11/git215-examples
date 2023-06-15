// To attach event listeners to the cards
let cards = document.getElementsByTagName("li");

for(let card of cards){
    card.addEventListener(e => {  
        let link = document.querySelector(`${card} > a`);
        if (link !== e.target) {
            link.click()
        }
    });
}