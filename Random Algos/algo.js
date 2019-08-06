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