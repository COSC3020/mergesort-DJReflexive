// Swaps the two element at the given indexes of the array
function swap(aIndex, bIndex, array) {
    let temp;

    temp = array[aIndex];
    array[aIndex] = array[bIndex];
    array[bIndex] = temp;

    return array;
}


// // Merges the two groupings together
// function merge(leftIndex, mid, rightIndex, array) {
//     let i, j, k
//     let leftLen  = mid - leftIndex + 1;
//     let rightLen = rightIndex - mid;

    // let leftArr  = Array(leftLen);
    // let rightArr = Array(rightLen);

//     leftArr  = array.slice(leftIndex, mid+1);
//     rightArr = array.slice(mid, rightIndex+1);


//     // Merge temp arrays into array
//     i = 0;
//     j = 0;
//     k = 0;
//     while (i < leftLen && j < rightLen) {
//         if (leftArr[i] <= rightArr[j]) {
//             arr[k] = leftArr[i];
//             i++
//         } else {
//             arr[k] = rightArr[j];
//             j++;
//         }
//         k++
//     }

//     // Copy any extra elements
//     while (i < leftLen) {
//         arr[k] = leftArr[i];
//         i++;
//         k++;
//     }
//     while (j < rightLen) {
//         arr[k] = rightArr[j];
//         j++;
//         k++;
//     }
// }


// An Iterative Merge Sort Algorithm
function mergesort(array) {
    let len = array.length;

    // If array is empty or 1 element
    if (len == 0 || len == 1){ return array; } // might not be needed


    // If array is larger than 1
    for (let groupings = 1; groupings*2 <= len; groupings *= 2) {
        // The two indexes that mark the start of each grouping
        let i = 0;
        let j = groupings;

        // checks if the group sizes are running off the array
        while (i+groupings <= len && j+groupings <= len) {
            // extra iterators to help i & j iterate through the array
            let k = 0;
            let l = 0;

            // Iterates through the two groupings and see if need to be swapped
            while (k <= groupings && l < groupings) {
                // Checks which element is larger
                if (array[i+k] <= array[j+l]) { 
                    // do nothing, elements already sorted
                    k++;
                }
                else { 
                    swap(i+k, j+l, array);

                    /* 
                        After initial swap, need to check if the elements swapped
                        are no longer sorted. If no longer sorted, swap the first 
                        two elements in the second grouping. This does NOT happen
                        if the indexes are outside of the scope of the groupings.
                    */
                    // // Left Grouping
                    // if (array[i+k] > array[i+k+1] && 0 == (i+k) % groupings && groupings > 1) {
                    //     swap(i+k, i+k+1, array);
                    // }

                    // // Right Grouping
                    // if (array[j+l] > array[j+l+1] && 0 == (j+l) % groupings && groupings > 1) {
                    //     swap(j+l, j+l+1, array);
                    // }

                    l++;
                }              

            }

            i += groupings*2;
            j += groupings*2;
        }
    }

    return array;
}



test0 = [8,6,2,3,4,9,7,1,0,5];
console.log("test0: [" + mergesort(test0) + "]");