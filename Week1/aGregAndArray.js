process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on("end", function () {
    inputString = inputString.split("\n");

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/**
 * https://www.geeksforgeeks.org/difference-array-range-update-query-o1/
 * 
 * **/

function main() {
    const line1 = readLine().trim();
    const countOfArrays = line1.split(" ");

    const line2 = readLine().trim();
    let arr = line2.split(" ");
    let operations = []
    for (let i = 0; i < parseInt(countOfArrays[1]); i++) {
        const line3 = readLine().trim();
        let opArray = line3.split(" ");
        operations.push(opArray);
    }

    let queries = []
    for (let i = 0; i < parseInt(countOfArrays[2]); i++) {
        let line4 = readLine().trim();
        const quArray = line4.split(" ");
        queries.push(quArray);
    }

    let deployOp = new Array(operations.length + 1).fill(0)
    for (let j = 0; j < queries.length; j++) {
        deployOp[queries[j][0]-1] += 1
        deployOp[queries[j][1]] += -1
    }

    for(let i = 1 ; i < deployOp.length ;i++ ){
        deployOp[i] = deployOp[i] + deployOp[i-1]
    }


    let arrValues = new Array(arr.length + 1).fill(0)
    for (let j = 0; j < operations.length; j++) {
        arrValues[operations[j][0]-1] += operations[j][2] * deployOp[j]
        arrValues[operations[j][1]] += - operations[j][2] * deployOp[j]
    }

    for(let i = 1 ; i < arrValues.length ;i++ ){
        arrValues[i] = arrValues[i] + arrValues[i-1]
    }
    for (let j = 0; j < arr.length; j++) {
        arr[j] = parseInt(arr[j]) + arrValues[j]
    }

    let print = ""
    for(let y = 0 ;y<arr.length;y++){
        print += arr[y] +" "
    }
    console.log(print)
}