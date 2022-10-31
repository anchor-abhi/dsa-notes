
let array=[4,7,6,1,2,0,2,3,-1,-5];
let start=0, end=array.length-1;

merge_sort(array,start,end);
console.log(array);

function merge_sort(array,start,end){
    if(start>=end){
        return;
    }
    let mid=Math.floor((start+end)/2);
    
    merge_sort(array,start,mid); //left 
    merge_sort(array,mid+1,end); //right
    merge(array,start,end,mid);
}

function merge(array, start, end, mid){
    let left=0, right=0;
    let arr1=[];
    let arr2=[];
    let cur=start;
    for(let i=start; i<=mid; i++){
        arr1.push(array[i]);
    }
    for(let i=mid+1; i<=end; i++){
        arr2.push(array[i]);
    }
    while(left< arr1.length && right<arr2.length){
        if(arr1[left]<arr2[right]){
            array[cur]=arr1[left];
            left++;
        }
        else{
            array[cur]=arr2[right];
            right++;
        }
        cur++;
    }
    while(left<arr1.length){
        array[cur]=arr1[left];
        left++;
        cur++;
    }
    while(right<arr2.length){
        array[cur]=arr2[right];
        right++;
        cur++;
    }
}