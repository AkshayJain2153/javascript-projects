function makeLine(size, char='#') {
    let line = ""
    for (let index = 0; index < size; index++) {
        line += "#"
    }
    return line
}

console.log(makeLine(5));

// function makeSquare(size) {
//     let square = "";

//     for (let i = 0; i < size; i++) {
//         square += makeLine(size)
//         if (i < size -1) {
//             square+= "\n"
//         }

//     }
//     return square
// }


// console.log(makeSquare(5));
console.log("\n");

function makeRectangle(width, height) {
    let rectangle = "";
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width) + '\n')

    }
    return rectangle.slice(0, -1)
}

console.log(makeRectangle(5, 3));
console.log("\n");

function makeSquare(size) {
    return makeRectangle(size, size);
}

console.log(makeSquare(5));


function makeDownwardStairs(height) {
    let stairs = ""

    for (let i = 0; i <= height; i++) {
        stairs += (makeLine(i) + '\n');
    }
    return stairs.slice(0, -1)
}

console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars) {

    let space = " ".repeat(numSpaces);
    let char = makeLine(numChars);

    return (space + char + space)

}

console.log(makeSpaceLine(3, 5));

function makeIsoscelesTriangle(height){
    let triangle = "";

    for (let i = 0; i < height; i++) {
    let numSpaces = height - i - 1;
    let numChars = 2 * i + 1;
    triangle += makeSpaceLine(numSpaces, numChars) + '\n';        
    }
    // return triangle.slice(0, -1)
    return triangle
}

console.log(makeIsoscelesTriangle(5));


function makeDiamond(height){
    let diamond = "";

    diamond += makeIsoscelesTriangle(height);
    reverseDiamond = diamond.split('\n').slice(0, -1).reverse().join('\n')
    diamond+= reverseDiamond
    return diamond
}

console.log(makeDiamond(5));

