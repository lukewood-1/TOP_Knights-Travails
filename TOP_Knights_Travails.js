'use strict'

function knightMove(start, finish, boardSize) {

    let current;
    const visited = new Set();
    const queue = [[start[0], start[1], 0, [start]]];

    while (queue.length > 0) {
        current = queue.shift();

        const possibleMoves = {
            'ur': [current[0] + 2, current[1] + 1],
            'ul': [current[0] + 2, current[1] - 1],
            'ru': [current[0] + 1, current[1] + 2],
            'rd': [current[0] - 1, current[1] + 2],
            'dr': [current[0] - 2, current[1] + 1],
            'dl': [current[0] - 2, current[1] - 1],
            'lu': [current[0] + 1, current[1] - 2],
            'ld': [current[0] - 1, current[1] - 2],
        };

        for (let moves in possibleMoves) {
            let[newY,newX] = possibleMoves[moves];
            let[,,steps,path] = current;
            if (newY === finish[0] && newX === finish[1]) {
                steps++;
                path.push([newY, newX]);
                let countMessage = `You made it in ${steps} turns! Here's your path:`;
                if (steps === 1)
                    countMessage = countMessage.replace('turns', 'turn');

                let pathMessage = ``;
                for (let step of path) {
                    pathMessage += `
                        ${step}`;
                }
                ;return console.log(countMessage + pathMessage)
            } else if ((newY >= 0 && newX >= 0) && (newY < boardSize || newX < boardSize) && !visited.has(`[${newY}, ${newX}]`)) {
                queue.push([newY, newX, steps + 1, [...path, [newY, newX]]]);
                visited.add(`[${newY},${newX}]`);
            }
        }
        visited.add(`[${current[0]},${current[1]}]`);
    }
    console.log("Couldn't find a path, mate :(");
}

