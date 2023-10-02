let text = `cardSuit,animalName,fruit,result
Hearts,Lion,Apple,True
Diamonds,Fox,Bananas,False
Spades,Parrot,Mango,True
Clubs,Seal,Papaya,True
Joker,Snake,Watermelon,False
Hearts,Fox,Mango,False
Diamonds,Seal,Papaya,False
Spades,Lion,Watermelon,True
Clubs,Parrot,Apple,False
Joker,Snake,Bananas,True
Hearts,Seal,Watermelon,True
Diamonds,Lion,Papaya,False
Spades,Parrot,Bananas,False
Clubs,Fox,Mango,True
Joker,Snake,Apple,False
Hearts,Parrot,Papaya,True
Diamonds,Lion,Watermelon,False
Spades,Seal,Mango,True
Clubs,Fox,Apple,False
Joker,Snake,Bananas,False
Hearts,Lion,Bananas,True
Diamonds,Fox,Watermelon,False
Spades,Seal,Apple,True
Clubs,Parrot,Mango,False
Joker,Snake,Papaya,False
Hearts,Parrot,Watermelon,True
Diamonds,Seal,Bananas,False
Spades,Lion,Papaya,True
Clubs,Fox,Apple,False
Joker,Snake,Mango,False
Hearts,Seal,Bananas,True
Diamonds,Parrot,Apple,False
Spades,Lion,Watermelon,True
Clubs,Fox,Papaya,False
Joker,Snake,Mango,False
Hearts,Parrot,Bananas,True
Diamonds,Lion,Apple,False
Spades,Seal,Watermelon,True
Clubs,Fox,Papaya,False
Joker,Snake,Mango,False
Hearts,Lion,Watermelon,True
Diamonds,Fox,Bananas,False
Spades,Seal,Papaya,True
Clubs,Parrot,Mango,False
Joker,Snake,Apple,False
Hearts,Fox,Watermelon,True
Diamonds,Seal,Bananas,False
Spades,Lion,Papaya,True
Clubs,Parrot,Apple,False
Joker,Snake,Mango,False
Hearts,Seal,Watermelon,True
Diamonds,Lion,Papaya,False
Spades,Parrot,Bananas,False
Clubs,Fox,Mango,True
Joker,Snake,Apple,False
Hearts,Parrot,Papaya,True
Diamonds,Seal,Watermelon,False
Spades,Lion,Bananas,True
Clubs,Fox,Apple,False
Joker,Snake,Mango,False
Hearts,Seal,Bananas,True
Diamonds,Parrot,Apple,False
Spades,Lion,Watermelon,True
Clubs,Fox,Papaya,False
Joker,Snake,Mango,False
Hearts,Parrot,Bananas,True
Diamonds,Lion,Apple,False
Spades,Seal,Watermelon,True
Clubs,Fox,Papaya,False
Joker,Snake,Mango,False
Hearts,Lion,Watermelon,True
Diamonds,Fox,Bananas,False
Spades,Seal,Papaya,True
Clubs,Parrot,Mango,False
Joker,Snake,Apple,False
Hearts,Fox,Watermelon,True
Diamonds,Seal,Bananas,False`

//a function to convert the csv to array of json
function convertCsvToArrayOfJason(text) {
    var arrObj = [];
    var lines = text.split('\n');
    var headers = lines[0].split(',')
    for (var i = 0; i < lines.length; i++) {
        var rowData = lines[i].split(',');
        arrObj[i] = {};

        for (var j = 0; j < rowData.length; j++) {
            arrObj[i][headers[j]] = rowData[j];
        }
    }

    return arrObj;
}

//function return the final probability
function probabilityToBeatBoss(cardSuit, animalName, fruit) {
    let list = convertCsvToArrayOfJason(text);
    let i = 1;
    let cardSuitTotalNumber = 0;
    let animalsTotalNumber = 0;
    let fruitTotalNumber = 0;
    let cardSuitBeating = 0;
    let animalsBeating = 0;
    let fruitBeating = 0;

    //loop that count the total number of every element with the number of success
    while (i < list.length) {
        if (list[i].cardSuit === cardSuit) {
            cardSuitTotalNumber++;
            if (list[i].result === 'True')
                cardSuitBeating++;
        }
        if (list[i].animalName === animalName) {
            animalsTotalNumber++;
            if (list[i].result === 'True')
                animalsBeating++;
        }
        if (list[i].fruit === fruit) {
            fruitTotalNumber++;
            if (list[i].result === 'True')
                fruitBeating++;
        }
        i++;
    }

    console.log(((100 * cardSuitBeating) / cardSuitTotalNumber
    + (100 * animalsBeating) / animalsTotalNumber
    + (100 * fruitBeating) / fruitTotalNumber) / 3);
    return ((100 * cardSuitBeating) / cardSuitTotalNumber
        + (100 * animalsBeating) / animalsTotalNumber
        + (100 * fruitBeating) / fruitTotalNumber) / 3;
}

probabilityToBeatBoss('Hearts', 'Lion', 'Mango');