import React from 'react';
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


    return (
        <div className="board-wrapper mt-8">

            {matData.map((mat, rowIndex)=>(
                <div className="board-row">
                    {mat.map((_, colIndex) => (
                        <div className={`box`}>

                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ChessBoard;