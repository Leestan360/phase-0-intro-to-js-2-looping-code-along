let message = [];

function writeCards(names, eventName) {
    for (let i = 0; i < names.length; i++) {
        message.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return message;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

countDown(number);