const isPalindrome = (word) => {
    const wordList = word.toLowerCase().split('');
    const wordLength = wordList.length;
    const half = wordLength / 2;
    wordLength % 2 !== 0 && wordList.splice(Math.floor(half), 1);

    for (let i = 0; i < half; i++) {
        if (wordList[i] !== wordList[wordList.length - i - 1]) {
            return false;
        }
    }

    return true;
}

const listOfTest = [
    'Abba',
    'Abbass',
    'Aibohphobia',
    'Aibohphobia1212',
    'Bib',
    '1212Bib',
    'Bob',
    'Bob34',
    'Civic',
    'Civic*&*&',
    'Deified',
    'Deifieda34',
    'Detartrated',
    'AADetartrated',
    'Dewed',
    'Deweds'
]

listOfTest.forEach(item => console.log(isPalindrome(item), item))