function runProgram(input) {
	let n=+input;
	for(let i=0; i<n; i++){
	    let arr=[];
	    for(let j=0; j<n; j++){
	        arr.push(0);
	    }
	    board.push(arr);
	}
// 	console.log(board);

    nQueen(board,0,n);
    console.log(count)

}

var board=[];
var count=0;

function nQueen(board, row, N){
    if(row==N){
        count++;
        return;
    }
    
    for(let i=0; i<N; i++){
        if(isSafe(board,row,i,N)){
            board[row][i]=1;
            nQueen(board,row+1,N);
            board[row][i]=0;
        }
    }
}



let isSafe=(matrix, row, col,N)=>{
    for(let i=0; i<=row; i++){
        if(matrix[i][col]==1){
            return false;
        }
    }
    let r=row, c=col;
    while((r>=0 && r<=N-1) && (c>=0 && c<=N-1)){
        if(matrix[r][c]==1){
            return false;
        }
        r--;
        c--;
    }
    while((row>=0 && row<=N-1) && (col>=0 && col<=N-1)){
        if(matrix[row][col]==1){
            return false;
        }
        row--;
        col++;
    }
    return true;
}


if (process.env.USERNAME === "") {
	runProgram(``);
} else {
	process.stdin.resume();
	process.stdin.setEncoding("ascii");
	let read = "";
	process.stdin.on("data", function (input) {
		read += input;
	});
	process.stdin.on("end", function () {
		read = read.replace(/\n$/, "");
		read = read.replace(/\n$/, "");
		runProgram(read);
	});
	process.on("SIGINT", function () {
		read = read.replace(/\n$/, "");
		runProgram(read);
		process.exit(0);
	});
}
