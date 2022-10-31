
//implementation using binary search

function sqrt(n){
    let start=0, end=n, elem=n;

    while(start<=end){

        let mid=(start + end)/ 2;
        mid=mid-mid%1;

        if(mid*mid === elem){
            var ans=mid;
            break;
        }
        else if(mid*mid < elem){
            start=mid+1;
            var ans=mid;
        }
        else{
            end=mid-1;
        }
    }
    return ans;
}

console.log(sqrt(100));