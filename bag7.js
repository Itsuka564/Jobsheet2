const deretAngka = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

console.log(binarySearch(deretAngka, 70));
console.log(binarySearch(deretAngka, 25));