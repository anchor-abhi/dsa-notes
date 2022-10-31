
function permut(str,i){
    if(i==str.length){
        // console.log(str);
        return;
    }

    for(let index=i; index<str.length; index++){
        [str[index], str[i]]=[str[i], str[index]];
        console.log(str)
        permut(str,i+1);
        [str[index], str[i]]=[str[i], str[index]];
    }
}



permut([1,2,3],0);