import React, { useEffect, useState } from 'react';
import "./tictactoe.css";

const TicTacToe = () => {

    const [currentPlayer, setCurrentPlayer] = useState("&#11093;");
    const [nextPlayer, setNextPlayer] = useState("&#10060;");
    const [winner, setWinner] = useState("");
    const [tie, setTie] = useState(false);
    const [startGame, setStartGame] = useState(false);
    const cellArray = new Array(9);

    const [playerTurn, setPlayerTurn] = useState(currentPlayer);

    const changePlayerTurn = () => {
        if (playerTurn === currentPlayer) {
            setPlayerTurn(nextPlayer);
        } else {
            setPlayerTurn(currentPlayer);
        }
    }

    const playGame = (e) => {
        if (e.target.innerHTML === "") {
            e.target.innerHTML = playerTurn;
            if (checkWin()) {
                setWinner(playerTurn);
                disableGameCells();
            } else if (checkTie()) {
                setTie(true);
                disableGameCells();
            } else {
                changePlayerTurn();
            }
        }
    }

    const checkWin = () => {
        const gameCells = document.querySelectorAll(".cell");

        const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < winningConditions.length; i++) {
            const [pos1, pos2, pos3] = winningConditions[i]
            if (gameCells[pos1].innerHTML !== '' &&
                gameCells[pos1].innerHTML === gameCells[pos2].innerHTML &&
                gameCells[pos2].innerHTML === gameCells[pos3].innerHTML) {
                return true;
            }
        }
        return false;
    }

    const checkTie = () => {
        const gameCells = document.querySelectorAll(".cell");

        let emptyCellCount = 0;
        gameCells.forEach(cell => {
            if (cell.innerHTML === '') {
                emptyCellCount++;
            }
        });

        return emptyCellCount === 0 && !checkWin();
    }

    const disableGameCells = () => {
        const gameCells = document.querySelectorAll(".cell");

        gameCells.forEach(cell => {
            cell.classList.add('disabled');
        });
    }

    const lockCells = () => {
        const gameCells = document.querySelectorAll(".cell");

        gameCells.forEach(cell => {
            cell.classList.add('disabled');
            cell.innerHTML = "&#128274;";
        });
    }

    const restart = () => {
        const gameCells = document.querySelectorAll(".cell");

        gameCells.forEach(cell => {
            cell.classList.remove('disabled');
            cell.innerHTML = '';
        });

        setPlayerTurn(currentPlayer);
        setWinner("");
        setTie(false);
    }

    const start = () => {
        setStartGame(true);
        restart();
    }

    useEffect(() => {
        lockCells();
    }, []);

    return (
        <div className='container'>
            <h1 className='game-heading'>Tic - Tac - Toe</h1>
            <div className='tictactoe'>
                <div className='cell' onClick={(e) => playGame(e)}></div>
                <div className='cell' onClick={(e) => playGame(e)}></div>
                <div className='cell' onClick={(e) => playGame(e)}></div>
                <div className='cell' onClick={(e) => playGame(e)}></div>
                <div className='cell' onClick={(e) => playGame(e)}></div>
                <div className='cell' onClick={(e) => playGame(e)}></div>
                <div className='cell' onClick={(e) => playGame(e)}></div>
                <div className='cell' onClick={(e) => playGame(e)}></div>
                <div className='cell' onClick={(e) => playGame(e)}></div>
            </div>
            {!startGame ? (<button className='restart-btn' onClick={() => start()}>Start</button>) :
                (<button className='restart-btn' onClick={() => restart()}>Restart</button>)}
            {startGame && (<div className='players'>
                <div className={`player player1 ${playerTurn === currentPlayer ? 'active' : ''}`}><span>Player 1: <b dangerouslySetInnerHTML={{__html: currentPlayer}} /></span>{winner === currentPlayer && (<p className='win'>Winner</p>)}</div>
                <div className={`player player2 ${playerTurn === nextPlayer ? 'active' : ''}`}><span>Player 2: <b dangerouslySetInnerHTML={{__html: nextPlayer}} /></span>{winner === nextPlayer && (<p className='win'>Winner</p>)}</div>
            </div>)}
            <div className='draw-box'>{tie && (<p>Its a Tie</p>)}</div>
        </div>
    )
}

export default TicTacToe