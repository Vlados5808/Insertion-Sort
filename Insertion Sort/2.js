let ocenka = [12, 7, 10, 11, 8, 12, 6];

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

let sorted = insertionSort(ocenka);
let min = sorted[0];
let max = sorted[sorted.length - 1];
let median = sorted[Math.floor(sorted.length / 2)];

console.log('Відсортовані оцінки:', sorted);
console.log('Найнижча:', min);
console.log('Найвища:', max);

console.log('Медіана:', median);
