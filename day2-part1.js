const input = '1,20,3,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,19,6,23,1,23,6,27,1,13,27,31,2,13,31,35,1,5,35,39,2,39,13,43,1,10,43,47,2,13,47,51,1,6,51,55,2,55,13,59,1,59,10,63,1,63,10,67,2,10,67,71,1,6,71,75,1,10,75,79,1,79,9,83,2,83,6,87,2,87,9,91,1,5,91,95,1,6,95,99,1,99,9,103,2,10,103,107,1,107,6,111,2,9,111,115,1,5,115,119,1,10,119,123,1,2,123,127,1,127,6,0,99,2,14,0,0';

//const input = '1,9,10,3,2,3,11,0,99,30,40,50';
const intcodes = input.split(',');
const initialMem = intcodes.map(x => Number.parseInt(x));

function runMachine(noun, verb) {
    const mem = initialMem.map(x => x);
    mem[1] = noun;
    mem[2] = verb;
    let halt = false;
    let i = 0;
    let a,b,c;
    while(!halt) {
        const op = mem[i];
        switch(op) {
            case 1:
                a = mem[++i];
                b = mem[++i];
                c = mem[++i];
                mem[c] = mem[a] + mem[b];
                break;
            case 2:
                a = mem[++i];
                b = mem[++i];
                c = mem[++i];
                mem[c] = mem[a] * mem[b];
                break;
            case 99:
                halt = true;
                break;
            default:
                halt = true;
                console.error('encountered bad opCode: ' + op + ' at location ' + i);
                break;
        }
        i++;
    }
    return mem[0];
}

function part1(noun, verb) {
    console.log(runMachine(noun, verb));
}

function part2(target) {
    for(let noun=0;noun<100;noun++) {
        for(let verb=0;verb<100;verb++) {
            const res = runMachine(noun, verb);
            if(res === target) {
                console.log(100 * noun + verb);
                return true;
            }
        }
    }

    console.log('Not Found');
}

console.log('Starting Part 1');
part1(12, 2);
console.log('Ending Part 1');
console.log('Starting Part 2');
part2(19690720);
console.log('Ending Part 2');