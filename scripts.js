// To attach event listeners to the cards
function addClickListener(card){
    
    let link = document.querySelector(`${card} > a`);
    if (link !== e.target) {
        link.click()
    }
}

// get all the cards on the page
let cards = document.querySelectorAll("main li");
// get all the links in the cards
let links = document.querySelectorAll("li a");

// attach event listener
for(let i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", function(e){
        if(links[i] !== e.target){
            links[i].click();
        }
    });
}