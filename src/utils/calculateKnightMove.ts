
function calculateKnightMove(knightPosition: {x: number, y: number}, BOARD_SIZE: number): {x: number, y: number}[]{
    let x = knightPosition.x;
    let y = knightPosition.y;

    let allPossiableMove = [];

    for (let i = 0; i < BOARD_SIZE; i++) {
        // *****************************
        // step for x axios
        // check forward x direction and both of y haft direction
        let forwardX = incIndex(x, 2);

        if (forwardX >= 0 && forwardX < BOARD_SIZE) {
            // now find haft y move for both direction
            let forwardHaft = haftMove(y, 1);
            let backwordHaft = haftMove(y, -1);

            if (forwardHaft < BOARD_SIZE) {
                allPossiableMove.push({ x: forwardX, y: forwardHaft });
            }
            if (backwordHaft >= 0 && backwordHaft < BOARD_SIZE) {
                allPossiableMove.push({ x: forwardX, y: backwordHaft });
            }
        }

        // check backword x direction and both of y haft direction
        let backX = decIndex(x, 2);
        if (backX >= 0 && backX < BOARD_SIZE) {
            // now find haft y move for both direction
            let forwardHaft = haftMove(y, 1);
            let backwordHaft = haftMove(y, -1);
            if (forwardHaft < BOARD_SIZE) {
                allPossiableMove.push({ x: backX, y: forwardHaft });
            }
            if (backwordHaft >= 0 && backwordHaft < BOARD_SIZE) {
                allPossiableMove.push({ x: backX, y: backwordHaft });
            }
        }


        // *****************************
        // step for y axios
        // check forward y direction and both of x haft direction
        let forwardY = incIndex(y, 2);

        if (forwardY >= 0 && forwardY < BOARD_SIZE) {
            // now find haft x move for both direction
            let forwardHaft = haftMove(x, 1);
            if (forwardHaft < BOARD_SIZE) {
                allPossiableMove.push({ x: forwardHaft, y: forwardY });
            }
            let backwordHaft = haftMove(x, -1);
            if (backwordHaft >= 0 && backwordHaft < BOARD_SIZE) {
                allPossiableMove.push({ x: backwordHaft, y: forwardY });
            }
        }
        // check backword y direction and both of x haft direction
        let backwordY = decIndex(y, 2);

        if (backwordY >= 0 && backwordY < BOARD_SIZE) {
            // now find haft x move for both direction
            let forwardHaft = haftMove(x, 1);

            if (forwardHaft < BOARD_SIZE) {
                allPossiableMove.push({x: forwardHaft, y: backwordY});
            }

            let backwordHaft = haftMove(x, -1);

            if (backwordHaft >= 0 && backwordHaft < BOARD_SIZE) {
                allPossiableMove.push({x: backwordHaft, y: backwordY});
            }
        }
    }
    return makeUniqueArrOfObject(allPossiableMove)
}

// store only unique index position pair
function makeUniqueArrOfObject(arr: {x: number, y: number}[]){
    let uniqueArr: {x: number, y: number}[] = []
    arr.forEach(item=>{
        let index = uniqueArr.findIndex(uni=> uni.x === item.x && uni.y === item.y)
        if(index === -1){
            uniqueArr.push(item)
        }
    })
    return uniqueArr
}
// this func increment current index to forward two index
function incIndex(num: number, step: number) {
    let result = num;
    for (let i = 0; i < step; i++) {
        result += 1;
    }
    return result;
}

// this func decrement current index to forward two index
function decIndex(num: number, step: number) {
    let result = num;
    for (let i = 0; i < step; i++) {
        result -= 1;
    }
    return result;
}

// this func increment current index to forward one index for y and x axios
function haftMove(currentIndex: number, direction = 1) {
    if (direction === 1) {
        return incIndex(currentIndex, 1);
    } else {
        return decIndex(currentIndex, 1);
    }
}

export default calculateKnightMove

