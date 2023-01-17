// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, party) {
    let thankYouCards = []
    for (let i = 0; i < names.length; i++) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${party} gift!`);
        console.log(thankYouCards);
    }

    return thankYouCards;
    
}

writeCards(names, "Surprise");


const down = [10, 9, 8, 7, 6, 5, 4, 3 , 2, 1, 0]

function countDown(down) {
    while (down >= 0) {
        console.log(down--);
    }

    return down;
}

countDown(down);

