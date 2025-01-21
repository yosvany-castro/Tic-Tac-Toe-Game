import React from 'react';
import { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  const [score, setScore] = useState({
    win: 0,
    losses: 0,
    draws: 0
  })
  const [isPlayerOne, setIsPlayerOne] = useState(true)


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
                <div key={index} className="grid-cell">
                  <Xquis clase={"x-tic"} />  
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