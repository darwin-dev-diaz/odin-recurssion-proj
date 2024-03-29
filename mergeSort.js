function mergeSort(arr) {
  // if the arr isn't just a single element, do the merge sort steps
  if (arr.length !== 1) {
    // get the organized left half of arr
    const leftHalf = mergeSort(arr.slice(0, arr.length / 2));
    // get the organized right half of arr
    const rightHalf = mergeSort(arr.slice(arr.length / 2, arr.length));
    const outputArr = [];

    // set the indices of the left and right half to 0
    let [leftHalfIndex, rightHalfIndex] = [0, 0];

    // merge step. While both the left and rightHalfIndices are within range of the left and right half length
    while (
      leftHalfIndex < leftHalf.length &&
      rightHalfIndex < rightHalf.length
    ) {
      // if leftHalf[i] is less than rightHalf[i], increment i and push the value to the output arr
      if (leftHalf[leftHalfIndex] < rightHalf[rightHalfIndex]) {
        outputArr.push(leftHalf[leftHalfIndex++]);
      // same thing but for the right half
      } else if (rightHalf[rightHalfIndex] < leftHalf[leftHalfIndex]) {
        outputArr.push(rightHalf[rightHalfIndex++]);
      }
    }

    // put the remaining elements of the two halves into the list. Since the two halves have already been sorted because of the recursive call, appending the rest of which ever half is remaining will only give you increasing numbers greater than the last value of outputArr
    for (; leftHalfIndex < leftHalf.length; leftHalfIndex++) {
      outputArr.push(leftHalf[leftHalfIndex]);
    }

    for (; rightHalfIndex < rightHalf.length; rightHalfIndex++) {
      outputArr.push(rightHalf[rightHalfIndex]);
    }

    // return the output arr
    return outputArr;
  }

  // if the array has just a single element, return the array.
  return arr;
}

console.log(mergeSort([2, 1, 3, 5, 4, 6, 7, 8]));
console.log(mergeSort([5, 4, 7, 1, 8, 3, 6, 2]));
console.log(mergeSort([4, 3, 1, 5, 6, 7, 8, 2]));
console.log(mergeSort([8, 6, 3, 7, 4, 1, 5, 2]));
console.log(mergeSort([4, 1, 8, 3, 5, 2, 7, 6]));
console.log(mergeSort([1, 6, 7, 2, 3, 5, 8, 4]));
console.log(mergeSort([7, 5, 2, 3, 1, 4, 8, 6]));
