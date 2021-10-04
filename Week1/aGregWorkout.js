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
    let chest = 0
    let biceps = 0
    let back = 0

    const n = parseInt(readLine().trim(), 10);

    if (n >= 1 && n <=20){
        const line = readLine().trim();
        const numExerciseTime = line.split(" ");
        for (let i = 0 ; i < n ; i++){
            if(numExerciseTime[i] >= 1 && numExerciseTime[i] <= 25){
                if(i % 3 === 0) chest += parseInt(numExerciseTime[i])
                if(i % 3 === 1) biceps += parseInt(numExerciseTime[i])
                if(i % 3 === 2) back += parseInt(numExerciseTime[i])
            }else {
                return 0;
            }
        }

        if(chest > biceps && chest > back) {console.log("chest")}
        else if(biceps > back) {console.log("biceps")}
        else { console.log("back")}

    }else {
        return 0;
    }
}