let people = [
    {name: 'Марк', age: 20},
    {name: 'Влад', age: 128},
    {name: 'Вадим', age: 72},
    {name: 'Вадимvv', age: 42}
];

function insertionSortByKey(arr, key, order = 'ask') {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        if (order === 'ask') {
            while (j >= 0 && arr[j][key] > current[key]) {
                arr[j + 1] = arr[j];
                j--;
            }
        } else if (order === 'desk') {
            while (j >= 0 && arr[j][key] < current[key]) {
                arr[j + 1] = arr[j];
                j--;
            }
        }
        arr[j + 1] = current;
        console.log(arr);
    }
    return arr;
}
console.log('За зростанням:', insertionSortByKey([...people], 'age', 'ask'));
console.log('За спаданням:', insertionSortByKey([...people], 'age', 'desk'));