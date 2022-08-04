const binarySearch = (list, item) => {
    let low = 0;
    let hight = list.length - 1;
    let guess;

    while (low <= hight) {
        guess = Math.floor((low + hight) / 2)
        let positionGuide = item.localeCompare(list[guess].name)
        if (positionGuide == 0) return list[guess];
        if (positionGuide > 0) low = guess + 1;
        else hight = guess - 1;
    }

    return -1
}

const list = [
    {name: "alberto casa", number: 1}, 
    {name: "bruno bolanho", number: 2}, 
    {name: "cosmopolita assuncao", number: 3},
    {name: "dadinho doce", number: 4},
    {name: "eustacio night", number: 5},
    {name: "farhenit manuel", number: 6},
    {name: "killua", number: 7}
];

const item = "farhenit manuel";
const result = binarySearch(list, item);

console.log(result)