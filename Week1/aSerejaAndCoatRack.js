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

function main() {
    const line1 = readLine().trim();
    const line2 = readLine().trim();
    const n = parseInt(readLine().trim(), 10);

    const arr1 = line1.split(" ");
    let numOfHooks = parseInt(arr1[0])
    let costOnVisitor = parseInt(arr1[1])

    let arr2 = line2.split(" ").map(function(item) {
        return parseInt(item, 10);
    });

    arr2 = arr2.sort(function(a, b) {
        return a - b;
    });

    let cost = 0;
    for(let i = 0 ; i<n ; i++ ){
        if(i < arr2.length){
            cost += parseInt(arr2[i]);
        }else {
            cost -= costOnVisitor;
        }
    }
    console.log(cost)
}