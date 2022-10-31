// First Negative Integer Ended
// Description

// Given an array A containing N space-separated integers. Find the first negative integer for each and every window(contiguous subarray) of sizeK.


// Input
// Input Format

// First-line contains T, no of test cases.

// First-line of each test case contains N, the size of the array, and an integer K.

// Second-line of each test case contains N spaced integers, elements of an array A.

// Constraints

// 1 <= T <= 10

// 1 <= N <= 10^5

// 0 <= abs(A[i]) <= 10^5

// 1 <= K <= N


// Output
// For each test case, print N-K+1 space-separated integers in a new line.


// Sample Input 1 

// 2
// 5 2
// -8 2 3 -6 10
// 8 3
// 12 -1 -7 8 -15 30 16 28

// Sample Output 1

// -8 0 -6 -6
// -1 -1 -7 -15 -15 0

first_neg([12, -1, -7, 8 ,-15 ,30, 16, 28], 3)

function first_neg(array, k){
    let start=0, end=k-1, ans=[];
    while(start<=end){
        let count=0;
        for(let i=start; i<=end; i++){
            if(array[i]<0){
                ans.push(array[i]);
                count++;
                break;
            }
        }
        if(count==0){
            ans.push(0);
        }
        if(end+k!=array.length){
            end++;
        }
        start++;
    }

    console.log(ans);
}