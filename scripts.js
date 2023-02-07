let xTurn = true;
let blankCell = "assets/No_Tile.png";
let finishedCell = 0;
let win = false;

function input(cellRow, cellColumn){
    finishedCell++;
    document.getElementById("cellDiv" + cellRow + cellColumn).style.pointerEvents="none";
    if(xTurn == true){
        document.getElementById("cell" + cellRow + cellColumn).src="assets/X_Tile.svg";
        document.getElementById("status").innerHTML = "O's Turn";
        xTurn = false;
        winCheck("X");
    }else{
        document.getElementById("cell" + cellRow + cellColumn).src="assets/O_Tile.svg";
        document.getElementById("status").innerHTML = "X's Turn";
        xTurn = true;
        winCheck("O");
    }
}

function winCheck(turn){
    for(let x=1; x<=3; x++){
        let cellStreak = 1;
        let columnCellsrc = document.getElementById("cell" + x + "1").getAttribute('src');
        if (columnCellsrc == blankCell){
            cellStreak = 1;
        }else{
            for (let y=2; y<=3; y++){
                let nextCellSrc = document.getElementById("cell" + x + y).getAttribute('src');
                if (columnCellsrc == nextCellSrc){
                    cellStreak++;
                }else{
                    cellStreak=1;
                }
            }
        }

        if(cellStreak==3){
            for (let y=1; y<=3; y++){
                document.getElementById("cell" + (x) + (y)).style.filter="brightness(175%)";
            }
            winDisplay(turn);
        }
    }

    
    for(let x=1; x<=3; x++){
        let cellStreak = 1;
        let rowCellsrc = document.getElementById("cell1" + x).getAttribute('src');
        if (rowCellsrc == blankCell){
            cellStreak = 1;
        }else{
            for (let y=2; y<=3; y++){
                let nextCellSrc = document.getElementById("cell" + y + x).getAttribute('src');
                if (rowCellsrc == nextCellSrc){
                    cellStreak++;
                }else{
                    cellStreak=1;
                }
            }
        }

        if(cellStreak==3){
            for (let y=1; y<=3; y++){
                document.getElementById("cell" + (y) + x).style.filter="brightness(175%)";
            }
            winDisplay(turn);
        }
    }


    let fallStreak = 1;
    let fallCellSrc = document.getElementById("cell11").getAttribute('src');
    if (fallCellSrc == blankCell){
        fallStreak = 1;
    }else{
        for (let y=2; y<=3; y++){
            let nextCellSrc = document.getElementById("cell" + y + y).getAttribute('src');
            if (fallCellSrc == nextCellSrc){
                fallStreak++;
            }else{
                fallStreak=1;
            }
        }
    }
    if(fallStreak==3){
        for (let y=1; y<=3; y++){
            document.getElementById("cell" + (y) + (y)).style.filter="brightness(175%)";
        }
        winDisplay(turn);
    }


    let riseStreak = 1;
    let riseCellSrc = document.getElementById("cell31").getAttribute('src');
    if (riseCellSrc == blankCell){
        riseStreak = 1;
    }else{
        for (let y=2; y<=3; y++){
            let nextCellSrc = document.getElementById("cell" + (4-y) + y).getAttribute('src');
            if (riseCellSrc == nextCellSrc){
                riseStreak++;
            }else{
                riseStreak=1;
            }
        }
    }
    if(riseStreak==3){
        for (let y=3; y>=1; y--){
            document.getElementById("cell" + (y) + (4-y)).style.filter="brightness(175%)";
        }
        winDisplay(turn);
    }


    if (finishedCell == 9 && win == false){
        document.getElementById("status").innerHTML = "Draw";
    }
}

function winDisplay(turn){
    document.getElementById("status").innerHTML = turn + " Won!";
    win = true;
    document.getElementById("cellContainer").style.pointerEvents="none";
}