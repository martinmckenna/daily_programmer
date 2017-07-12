//convert time to words example: 02:10 will be 'two ten AM'

const formattedTime = function formatTime(timeAsString) { //takes the time as a string in this format HH:MM
    const timeConversions = [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eightteen',
        'nineteen',
        'twenty',
        'twenty-one',
        'twenty-two',
        'twenty-three',
        'twenty-four',
        'twenty-five',
        'twenty-six',
        'twenty-seven',
        'twenty-eight',
        'twenty-nine',
        'thirty',
        'thirty-one',
        'thirty-two',
        'thirty-three',
        'thirty-four',
        'thirty-five',
        'thirty-six',
        'thirty-seven',
        'thirty-eigtht',
        'thirty-nine',
        'fourty',
        'fourty-one',
        'fourty-two',
        'fourty-three',
        'fourty-four',
        'fourty-five',
        'fourty-six',
        'fourty-seven',
        'fourty-eight',
        'fourty-nine',
        'fifty',
        'fifty-one',
        'fifty-two',
        'fifty-three',
        'fifty-four',
        'fifty-five',
        'fifty-six',
        'fifty-seven',
        'fifty-eight',
        'fifty-nine'
    ];

    let midDay; //will be a string of AM or PM
    const timeWithoutColon = timeAsString.replace(':', '');
    let firstTwo = parseInt(timeWithoutColon.substring(0, 2));
    let lastTwo = parseInt(timeWithoutColon.substring(2, 4));
    let convertedFirstTwo; //ends up being the time as a word
    let convertedLastTwo; //ends up being the time as a word

    //here we are checking what hour it is and whether we are in the AM or PM
    const checkHour = firstTwo === 0
        ? (midDay = 'AM', convertedFirstTwo = 'twelve')
        : firstTwo > 12
            ? (midDay = 'PM', firstTwo = firstTwo - 12, convertedFirstTwo = timeConversions[firstTwo - 1])
            : (midDay = 'AM', convertedFirstTwo = timeConversions[firstTwo - 1]);
    const checkMinute = lastTwo === 0
        ? (convertedLastTwo = '')
        : lastTwo < 10
            ? (convertedLastTwo = ' oh ' + timeConversions[lastTwo - 1])
            : (convertedLastTwo = " " + timeConversions[lastTwo - 1]);

    return 'It is ' + convertedFirstTwo + convertedLastTwo + " " + midDay;
}

console.log(formattedTime('11:05'));
console.log(formattedTime('13:07'));
console.log(formattedTime('00:15'));
console.log(formattedTime('07:15'));