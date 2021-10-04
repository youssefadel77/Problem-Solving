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
    const obj = {
        nRecipes: parseInt(countOfArrays[0]),
        kRepeat: parseInt(countOfArrays[1]),
        qQuery: parseInt(countOfArrays[2])
    };

    let max = 0;
    let recipes = [];
    for (let i = 0; i < obj.nRecipes; i++) {
        const line2 = readLine().trim();
        let recipe = line2.split(" ");
        max = parseInt(recipe[1]) > max ? parseInt(recipe[1]) : max;
        recipes.push(recipe);
    }
    let queries = [];
    for (let i = 0; i < obj.qQuery; i++) {
        const line3 = readLine().trim();
        let query = line3.split(" ");
        max = parseInt(query[1]) > max ? parseInt(query[1]) : max;
        queries.push(query);
    }

    let arr = new Array(max + 1).fill(0);
    for( let i = 0 ; i < recipes.length ; i++){
        arr[parseInt(recipes[i][0])] += 1;
        arr[parseInt(recipes[i][1])+1] += -1;
    }

    for( let i = 1 ; i < arr.length ; i++){
        arr[i] += arr[i - 1];
    }

    let arr2 = new Array(max + 1).fill(0);
    for( let i = 1 ; i < arr2.length ; i++){
        if (arr[i] >= obj.kRepeat) {
            arr2[i] = arr2[i - 1] + 1;
        } else {
            arr2[i] = arr2[i - 1];
        }
    }

    for(let i = 0 ; i < queries.length ; i++){
        console.log(arr2[parseInt(queries[i][1])] - arr2[parseInt(queries[i][0]) - 1  ] )
    }

}