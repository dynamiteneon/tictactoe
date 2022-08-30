let Squares = [];
let gameGrid = document.querySelector(".gameboard");
let Winner = false;
let activeP1 = true;
let activeP2 = false;

buildGrid();

const Player = (name,symbol) => {

    const startPlay = () => {
        for(i=0;i<Squares.length;i++){
            if(Squares[i].textContent==""){
                Squares[i].addEventListener("click",endPlay);
            }
        }

    }

    const endPlay = (e) => {
        e.target.textContent = symbol;
        for(i=0;i<Squares.length;i++){
            Squares[i].removeEventListener("click",endPlay);
        }

        checkWinner();
        
    }

    const winStatus = () => {

        if(Squares[0].textContent == symbol && Squares[1].textContent == symbol && Squares[2].textContent == symbol){
            alert(name + " wins!");
        }

        else if(Squares[3].textContent == symbol && Squares[4].textContent == symbol && Squares[5].textContent == symbol){
            alert(name + " wins!");
        }

        else if(Squares[6].textContent == symbol && Squares[7].textContent == symbol && Squares[8].textContent == symbol){
            alert(name + " wins!");
        }

        else if(Squares[0].textContent == symbol && Squares[3].textContent == symbol && Squares[6].textContent == symbol){
            alert(name + " wins!");
        }

        else if(Squares[1].textContent == symbol && Squares[4].textContent == symbol && Squares[7].textContent == symbol){
            alert(name + " wins!");
        }

        else if(Squares[2].textContent == symbol && Squares[5].textContent == symbol && Squares[8].textContent == symbol){
            alert(name + " wins!");
        }

        else if(Squares[0].textContent == symbol && Squares[4].textContent == symbol && Squares[8].textContent == symbol){
            alert(name + " wins!");
        }

        else if(Squares[2].textContent == symbol && Squares[4].textContent == symbol && Squares[6].textContent == symbol){
            alert(name + " wins!");
        }

        else if(Squares[0].textContent != "" && Squares[1].textContent != "" && Squares[2].textContent != "" && Squares[3].textContent != "" && Squares[4].textContent != "" && Squares[5].textContent != "" && Squares[6].textContent != "" && Squares[7].textContent != "" && Squares[8].textContent != ""){
            alert("Tie!");
        }

        else{

            checkTurn();

        }

    }

    return {name, symbol, startPlay, endPlay, winStatus};

}

const P1 = Player("player one","X");
const P2 = Player("player two","O");

P1.startPlay();

function buildGrid(){

    for(i=0;i<9;i++){
        
        let newSquare = document.createElement('div');
        let squareID = "square" + i;
        
        newSquare.id = squareID;
        
        gameGrid.appendChild(newSquare);
    
        Squares[i] = document.getElementById(squareID);
    }
    
    }

function checkWinner(){

    if(activeP1==true){
        P1.winStatus();
        }

    else if(activeP2==true){
        P2.winStatus();
        }
    
}

function checkTurn(){

    if(activeP1==true){
        activeP1=false;
        activeP2=true;
        P2.startPlay();
    }

    else if(activeP2==true){
        activeP2=false;
        activeP1=true;
        P1.startPlay();
    }
}




