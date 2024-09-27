
function merge(left, mid, end, arr) {
    let i = left; // Left Grouping Index
    let j = mid+1;  // Right Grouping Index

    // looping through the two groupings simultaneously
    while (i <= mid && j <= end) {
        if (arr[i] <= arr[j]) { i++; } // do nothing, iterate to next element
        else { // swap elements to correct positions
            let tmp = arr[j];

            // Move elements to the right
            for (let k = j; k > i; k--) { arr[k] = arr[k-1]; }

            arr[i] = tmp;

            i++;
            mid++;
            j++;
        }
    }

    return arr;
}

function mergesort(array) {
    let len = array.length;
    if (len <= 1){ return array; } // Return array if len is 0 or 1

    // cycles through all groupings
    for (let grouping = 1; grouping < len; grouping *= 2) {
        // loops through individual groupings
        for (let i = 0; i < len; i += 2*grouping) {
            let mid = (i+grouping-1 < len-1) ? i+grouping-1 : len-1; // left grouping
            let end = (i+2*grouping-1 < len-1) ? i+2*grouping-1 : len-1; // right grouping
            // merge the left and right groupings
            merge(i, mid, end, array);
        }
    }

    return array;
}
