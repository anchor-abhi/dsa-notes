function subset(arr,ans,i){
    if(i==arr.length){
        console.log(ans)
        return;
    }
    
    subset(arr,[...ans],i+1);
    
    ans.push(arr[i])
    subset(arr,[...ans],i+1);
    
}


subset([1,2,3],[],0);


