import calculateKnightMove from "./calculateKnightMove";


export {}



test("knight Move Position test for x:3 y:3 and expect 8 moves", ()=>{
    let knightPosition = calculateKnightMove({x: 3, y: 4}, 8)
    expect(knightPosition.length).toEqual(8)
})



test("knight Move Position test for x:0 y:0 and expect 2 move", ()=>{
    let knightPosition = calculateKnightMove({x: 0, y: 0}, 8)
    expect(knightPosition.length).toEqual(2)
})


test("knight Move Position test for x:0 y:0 and expect 2 move for board 4*4", ()=>{
    let knightPosition = calculateKnightMove({x: 0, y: 0}, 4)
    expect(knightPosition.length).toEqual(2)
})