function getComputerChoice() {
    switch (Math.floor(Math.random()*3)) {
        case 1:
            return 'Rock'
        case 2:
            return 'Paper'
        case 3:
            return 'Scissors'
        default:
            break;
    }
}

console.log( getComputerChoice() );
console.log( getComputerChoice() );
console.log( getComputerChoice() );
console.log( getComputerChoice() );