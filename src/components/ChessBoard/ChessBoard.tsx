import React, {useEffect, useState} from 'react';
import "./chessBoard.css"
import calculateKnightMove from "../../utils/calculateKnightMove";


const ChessBoard = () => {

    const BOARD_SIZE = 8

    const matData: number[][] = [
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
    ]

    const [knightPosition, setKnightPosition] = useState<{ x: number, y: number }>({
        x: 3,
        y: 4
    })

    // store this state all possibles move x and y
    const [possibleMove, setPossibleMove] = useState<{x: number, y: number}[]>([
        {x: 1, y: 2}
    ]);


    useEffect(() => {
        let allPositions = calculateKnightMove(knightPosition, BOARD_SIZE)
        setPossibleMove(allPositions)
    }, [knightPosition]);



    function markPossibleMove(x: number, y: number) {
        let className = "";
        possibleMove.forEach((item) => {
            if (item.x === x && item.y === y) {
                className = "!bg-green-500";
            }
        });
        return className;
    }


    // set KnightPosition when user click on chess cell
    function handleSetKnightPosition(rowIndex: number, colIndex: number){
        setKnightPosition({
            x: rowIndex,
            y: colIndex
        })
    }


    // render knight position
    function renderKnight(rowIndex: number, colIndex: number){
        return (
            <div className="w-full h-full object-contain p-2">
                {knightPosition.x === rowIndex && knightPosition.y === colIndex && (
                    <img className="w-full h-full" src="/strategy.png" alt=""/>
                )}
            </div>
        )
    }



    return (
        <div className="board-wrapper pt-8">
            <div className="board">
                {matData.map((mat, rowIndex)=>(
                    <div className="board-row" key={"row"+rowIndex} >
                        {mat.map((num, colIndex) => (
                            <div key={"col"+colIndex} className={`cell 
                                ${num ? "cell-even" : "cell-odd"}
                                          ${markPossibleMove(rowIndex, colIndex )} 
                            `}
                                 onClick={()=>handleSetKnightPosition(rowIndex, colIndex)}>
                                {renderKnight(rowIndex, colIndex)}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <h4 className="mt-6 font-medium text-base text-neutral-800">Click on to cell for Possibility knight Position </h4>
        </div>
    );
};

export default ChessBoard;