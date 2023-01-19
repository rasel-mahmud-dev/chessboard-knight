import React, {useState} from 'react';
import "./chessBoard.css"

const ChessBoard = () => {

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

    const [knightPosition, setKnightPosition] = useState({
        x: 0,
        y: 0
    })


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
                    <div className="board-row">
                        {mat.map((num, colIndex) => (
                            <div className={`cell ${num ? "cell-even" : "cell-odd"}`} onClick={()=>handleSetKnightPosition(rowIndex, colIndex)}>
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