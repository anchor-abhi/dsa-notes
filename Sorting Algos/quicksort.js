let array=[4,7,9,8,7,-8,-9,1];

let arr=[3,9,5,4,0,6,-8,1,1]

quicksort(array,0,array.length-1);
console.log(array);

function quicksort(array,start,end){
    if(start>=end){
        return;
    }
    let pivot=partition(array,start,end)
    quicksort(array,start,pivot-1);
    quicksort(array,pivot+1,end);
}

// ***** last element as pivot *****

// function partition(array,start,end){
//     let elem=array[end];
//     let low=start;
//     for(let i=start; i<end; i++ ){
//         if(array[i]<=elem){
//             [array[i],array[low]]=[array[low],array[i]];
//             low++;
//         }
//     }
//     [array[end],array[low]]=[array[low],array[end]];
//     return low;
// }

// ***** first element as pivot *****

function partition(array,start,end){
    let low=start, high=end;
    let elem=array[start];
    while(low<high){
        while(array[low]>=elem){
            low++;
        }
        while(array[high]<elem){
            high--;
        }
        if(low<high){
            [array[low], array[high]]=[array[high], array[low]];
        }
    }
    [array[high], array[start]]=[array[start], array[high]];
    return high;
    
}

