var board=[];

function runProgram(input) {
	input=input.split("\n");

	for(let i=0; i<9; i++){
	    let arr=input[i].trim().split(" ").map(Number);
	    board.push(arr);
	}
	sudoku(board,0,0);
	
	if(count==0){
	    console.log(-1);
	    return;
	}
	
	for(let i=0; i<9; i++){
            console.log(ans[i].join(" "));
        }
}

var ans=[], count=0;
function sudoku(board,row,col){
    if(row==9){
        for(let i=0; i<9; i++){
            ans.push([...board[i]]);
        }
        count++;
        return;
    }
    let next_row, next_col;
    if(col==8){
        next_col=0;
        next_row=row+1;
    }
    else{
        next_row=row;
        next_col=col+1;
    }
    if(board[row][col]!==0){
        sudoku(board,next_row,next_col);
    }
    else{
        for(let j=1; j<=9; j++){
            if(isSafe(board,row,col,j)){
                board[row][col]=j;
                sudoku(board,next_row,next_col);
                board[row][col]=0;
            }
        }
    }
}

function isSafe(board,row,col,elem){
    for(let i=0; i<9; i++){
        if(board[row][i]===elem){
            return false;
        }
        if(board[i][col]===elem){
            return false;
        }
    }
    
    let x=Math.floor(row/3)*3;
    let y=Math.floor(col/3)*3;

    for(let i=x; i<x+3; i++){
        for(let j=y; j<y+3; j++){
            if(board[i][j]===elem){
                return false;
            }
        }
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
