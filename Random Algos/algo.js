validAnagram = (str1, str2) => {

    if (str1.length !== str2.length ) return false;
    let count1 = {};
    let count2 = {};

    for(let char of str1){
        count1[char] = (count1[char] || 0 ) + 1;
    }

    for(let char of str2){
        count2[char] = (count2[char] || 0 ) + 1;
    }

    for(let letter in count1) {
        if (count1[letter] !== count2[letter]) return false;
    }
    return true;
}

// console.log(validAnagram("aba", "baa"))
// console.log(validAnagram("aba", "bca"))

countUniqueValues = (arr) => {
    if (arr.length === 0) return 0;
    let left = 0;
    let count = 1;
    for (let right = 1; right < arr.length; right++) {
        if (arr[left] !== arr[right]) {
            left = right;
            count++;
        }
    }
    return count;
}

averagePair = (arr, tar) => {
    let right = arr.length - 1;

    for(let left = 0; left < arr.length; left++) {
        let avg = (arr[left] + arr[right]) / 2
        if (avg === tar) return true;
        if (avg > tar) right--;
    }

    return false;
}

isSubsequence = (str1, str2) => {
    let i = 0;
    let j = 0;

    while (j < str2.length){
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }

    return false;
}

maxSubarraySum = (arr, subLength) => {
    if (arr.length < subLength) return null;

    let max = 0;

    for (let i = 0; i < subLength; i++){
        max += arr[i]
    }

    let temp = max;

    for (let i = subLength; i < arr.length; i++) {
        temp += arr[i] - arr[i - subLength];
        if (temp > max) {
            max = temp;
        }
    }

    return max;
}

console.log(maxSubarraySum([100,200,300,400], 2))   //700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4))   //39