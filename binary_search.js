function bs(array,start,end,elem){
    
    let mid=Math.floor(start + (end-start)/2);

    if(elem==array[mid]){
        return mid;
    }
    else if(start==end){
        return -1;
    }
    else{
        if(elem>array[mid]){
            return bs(array,mid+1,end,elem);
        }
        else{
            return bs(array,start,mid-1,elem);
        }
    }
}

//condition - array must be sorted

let array = [3,4,10,20,34,35,54];

console.log(bs(array,0,array.length-1,3));