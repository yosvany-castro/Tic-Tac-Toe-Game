import React from 'react';
import { useState, useRef, useEffect } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  const [score, setScore] = useState({
    win: 0,
    losses: 0,
    draws: 0
  })
  const [isPlayerOne, setIsPlayerOne] = useState(true)
  const ref = useRef(null)
  const piece = isPlayerOne ? "O" : "X"
  const [board, setBoard] = useState([])
  

  const algoritm = [
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ];


    function algorithmChecker(board) {
        // Para cada patrón ganador en algoritm
        for (let pattern of algoritm) {
          // Obtenemos las piezas en las posiciones del patrón actual
          const positions = board.filter(item => pattern.includes(item.index));
        
          // Si tenemos 3 posiciones del mismo patrón
          if (positions.length === 3) {
            // Verificamos si todas son la misma pieza (X u O)
            if (positions.every(pos => pos.piece === positions[0].piece)) {
              return positions[0].piece; // Retornamos el ganador (X u O)
            }
          }
        }

        // Si no hay ganador, verificamos si hay empate
        if (board.length === 9) {
          return 'draw';
        }

        // Si no hay ganador ni empate, el juego continúa
        return null;
    }

      // Y así podrías usar la función en handlePlay:
    function handlePlay(e, index) {
      if (board.some((item) => item.index == index)) {
        return null;
      }
     const newBoard = [
        ...board,
        {
          index: index,
          piece: piece
        }
      ];
     setBoard(newBoard);
     // Verificamos si hay ganador con el nuevo estado del tablero
      const winner = algorithmChecker(newBoard);
      if (winner) {
        if (winner === 'draw') {
          alert('¡Empate!');
          setScore({
            ...score,
            draws: score.draws + 1
          })
          setBoard([])
          setIsPlayerOne(true)
          return
        } else {
          alert(winner == "O" ? "YOU WIN" : "YOU LOSE");
          winner == "O" ? setScore({...score, win: score.win + 1}) : setScore({...score, losses: score.losses + 1});
          setBoard([])
          setIsPlayerOne(true)
          return
        }
      }
      setIsPlayerOne(!isPlayerOne);
    }


  function handleReset() {
    setScore({
        win: 0,
        losses: 0,
        draws: 0
    })
  }

  const Xquis = ({clase}) => {
    return (
        <div className="choice-item">
            <span className={clase == "x-tic" ? `x-choice ${clase}` : "x-choice"}>×</span>
            <div className="choice-glow x-glow"></div>
        </div>
        ) 
  }
  const Circle = () => {
        return (
            <div className="choice-item">
                <div className="circle-choice"></div>
                <div className="choice-glow circle-glow"></div>
            </div>
        ) 
  }

  function CheckBoard({index, board}) {
    if (!board.length) {
        return null
    }
    const arrayChecked = board.filter((item) => item.index == index);
    console.log(`El componente de indice ${index} es: `, arrayChecked)
    if(!arrayChecked.length) {
        return null
    }

    const result = arrayChecked[0]["piece"]
    console.log(result)
    return (
        result == "O" ? <Circle /> : <Xquis clase={"x-tic"}/>
    )


  }

  return (
    <div className="game-wrapper">
      <div className="game-container">
        <div className="choose-section">
          <div className="choose-content">
            <h1 className="main-title">
              Which one you<br/>always choose?
            </h1>
            <div className="choice-container">
              <Circle />  
              <span className="choice-or">or</span>
              <Xquis />
            </div>
          </div>
          <div className="decorative-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>

        <div className="game-section">
          <div className="game-card">
            <div className="stats-container">
              <div className="stat-item" data-tooltip="Circle wins">
                <span className="stat-value circle-wins">{score.win > 1 ? `${score.win} wins` : `${score.win} win`}</span>
                <div className="stat-symbol circle-symbol">
                  <div className="symbol-glow"></div>
                </div>
              </div>
              <div className="stat-item" data-tooltip="X wins">
                <span className="stat-value x-wins">{score.losses > 1 ? `${score.losses} losses` : `${score.losses} loss`}</span>
                <span className="stat-symbol x-symbol">×</span>
              </div>
              <div className="stat-item" data-tooltip="Draws">
                <span className="stat-value draws">{score.draws > 1 ? `${score.draws} draws` : `${score.draws} draw`}</span>
                <span className="stat-symbol scale-symbol">⚖</span>
              </div>
            </div>

            <div className="grid-container">
              {[...Array(9)].map((_, index) => (
                
                <div onClick={(e) => handlePlay(e, index)} key={index} className="grid-cell">
                    <CheckBoard index={index} board={board} />
                  <div className="cell-hover-effect"></div>
                </div>
              ))}
            </div>

            <div className="game-footer">
              <button onClick={handleReset} className="footer-button history-button" data-tooltip="Reset game">
                <span className="button-icon">↺</span>
                <div className="button-glow"></div>
              </button>
              <span className="player-text">{isPlayerOne ? "1 PLAYER" : "2 PLAYER"}</span>
              <button className="footer-button settings-button" data-tooltip="Settings">
                <span className="button-icon">⚙</span>
                <div className="button-glow"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;