let selectElementsStartingWithA = (array) => {
    return array.filter((element) => element.startsWith("a"));
}

let selectElementsStartingWithVowel = (array) => {
    return array.filter(element => /^[aeiou]/i.test(element));

}

let removeNullElements = (array) => {
    return array.filter(element => element != null);
}

let removeNullAndFalseElements = (array) => {
    return array.filter(n => n !== null && n !== false);
}

let reverseWordsInArray = (array) => {
    return array.map(element => element.split('').reverse().join(''));
}

let everyPossiblePair = (array) => {
    // array.flatMap(
    //     (v, i) => array.slice(i + 1).map(w => v + ' ' + w)
    // );
    arst = array.sort();
    const res = [];
    for (let i = 0; i < arst.length; i++) {
        for (let j = 0; j < arst.length; j++) {
            if (j > i) {
                res.push([arst[i], arst[j]])
            }
        }
    }
    return res;


}

let allElementsExceptFirstThree = (array) => {
    array.splice(0, 3);
    return array;
}

let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array;
}

let sortByLastLetter = (array) => {
    srt = array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
    return srt.sort((a, b) => b - a);
}

let getFirstHalf = (string) => {
    return string.substr(0, 3);
}

let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        let ar = array[i].split('');
        ar = ar.reverse();
        ar = ar.join('');
        if (array[i] == ar) {
            count++;

        }
    }
    return count;
}



let shortestWord = (array) => {
    return array.filter(element => typeof element === 'string').sort((a, b) => a.length - b.length)[0];
}

let longestWord = (array) => {

    return array.filter(element => typeof element === 'string').sort((a, b) => b.length - a.length)[0];
}

let sumNumbers = (array) => {
    return array.reduce((a, b) => {
        return a + b;
    });

}

let repeatElements = (array) => {
    return Array(2).fill(array).flat()
}

let stringToNumber = (string) => {
    return parseInt(string);
}

let calculateAverage = (array) => {
    return array.reduce((a, b) => a + b, 0) / array.length;
}

let getElementsUntilGreaterThanFive = (array) => {
    return array.slice(0, 6);;
}

let convertArrayToObject = (array) => {

    let ar = [];
    while (array.length > 0) {
        ar.push(array.splice(0, 2));
    }
    return Object.fromEntries(ar);
}

let getAllLetters = (array) => {
    let sp = [...new Set(array)].join('').split('').sort()

    return sp.sort()
}


let swapKeysAndValues = (object) => {
    return Object.assign({}, ...Object.entries(object).map(([a, b]) => ({
        [b]: a
    })));

}

let sumKeysAndValues = (object) => {


    let res1 = Object.values(object).reduce((a, b) => a + b);
    let res2 = Object.keys(object).reduce((c, d) => parseInt(c) + parseInt(d));

    return res1 + res2;
}

let removeCapitals = (string) => {
    let A = string.match(/[^A-Z]/g, '').join('');
    let str = A.toString();
    return str;
}

let roundUp = (number) => {
    res = Math.ceil(number)
    return res;
}

let formatDateNicely = (date) => {
    let dte = new Date(date);
    let day = dte.getDate();
    let mth = dte.getMonth() + 1;
    let year = dte.getFullYear();
    return '0' + day + '/0' + mth + '/' + year;
}

let getDomainName = (string) => {
    if (string.includes('ssh')) {
        let dom = string.substr(6, 17);
        return dom;
    } else {
        dom = string.substr(6, 13);
        return dom;
    }
}

let titleize = (string) => {
    let str = string.split(' ');
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > 3 || i === 0 || str[i - 1].indexOf('.') > 0) {
            str[i] = str[i][0].toUpperCase() + str[i].substr(1);
        }

    }
    return str.join(' ');
}
let checkForSpecialCharacters = (string) => {
    let spc = string.includes('@');
    return spc;
}

let squareRoot = (number) => {
    let sqr1 = Math.sqrt(number);
    return sqr1;

}

let factorial = (number) => {
    let res = 1;
    for (let i = 2; i < number + 1; i++) {
        res = res * i;
    }

    return res;
}

let findAnagrams = (string) => {
    function rev(anagr) {
        if (anagr.length === 1) return anagr;
        let autorev = [];
        for (let i = 0; i < anagr.length; i++) {
            let check = rev(anagr.slice(1, anagr.length));
            for (let j = 0; j < check.length; j++) autorev.push(anagr[0] + check[j]);
            anagr = anagr.substr(1, anagr.length - 1) + anagr[0];
        }
        return autorev;
    }
    return rev(string);
}

let convertToCelsius = (number) => {
    res = (number - 32) * 5 / 9;

    return Math.round(res)
}

let letterPosition = (array) => {
    let alf = 'abcdefghijklmnopqrstuvwxyz';
    let alfnum = [];
    for (let i = 0; i < array.length; i++) {
        let index = alf.indexOf(array[i]);
        if (index === -1) {
            alfnum.push(index + 9);
            continue;
        } else {
            alfnum.push(index + 1);
        }
    }

    return alfnum;
}