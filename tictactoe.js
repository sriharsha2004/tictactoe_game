let indicate = document.getElementById('indicate');
let board = Array.from(document.getElementsByClassName('box'));
let btn = document.getElementById('btn');

let first = 'X';

let current_player = 'X';

arr = Array(9).fill(0);


board.forEach(i => {
    i.addEventListener('click', () => {
        if (arr[i.id - 1] == 0) {
            element = document.createElement('span');
            element.classList.add('symbol');
            element.innerHTML = first;
            i.innerHTML = element.innerHTML;
            i.style.color = "red";
            i.style.fontSize = "4rem"
            i.style.textAlign = "center"
            i.style.background = "rgba(0, 128, 0, 0.534)"
            arr[i.id - 1] = first;
            if (current_player == 'X') {
                first = 'O';
                current_player = 'O';
            } else {
                first = 'X';
                current_player = 'X';
            }
            let a = playerWon();
            if (a == 'O' || a== 'X' || a=='D') {
                if(a == 'D'){
                    indicate.innerHTML = "Match Drawn";
                    btn.style.visibility = "visible";
                }else{
                    indicate.innerHTML = `Player ${a} has won`;
                    arr.fill(1);
                    btn.style.visibility = "visible";
                }
            }
        }
    })
})

btn.addEventListener('click',()=>{
    // arr.fill(0);
    // current_player = 'X';
    // first = 'X';
    // indicate.innerHTML = "";
    // btn.style.visibility = "hidden";
    location.reload();
})

function playerWon() {
    if (arr[0] === arr[1] && arr[1] === arr[2]) { return arr[0]; }
    if (arr[3] === arr[4] && arr[4] === arr[5]) { return arr[3]; }
    if (arr[6] === arr[7] && arr[7] === arr[8]) { return arr[6]; }
    if (arr[0] === arr[3] && arr[3] === arr[6]) { return arr[0]; }
    if (arr[1] === arr[4] && arr[4] === arr[7]) { return arr[1]; }
    if (arr[2] === arr[5] && arr[5] === arr[8]) { return arr[2]; }
    if (arr[0] === arr[4] && arr[4] === arr[8]) { return arr[0]; }
    if (arr[2] === arr[4] && arr[4] === arr[6]) { return arr[2]; }
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == 0){
            return 'P';
        }        
    }
    return 'D';
}

