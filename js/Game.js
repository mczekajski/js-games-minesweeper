import { Cell } from "./Cell.js";
import { UI } from "./UI.js";

class Game extends UI {
    #config = {
        easy: {
            rows: 8,
            cols: 8,
            mines: 10
        },
        normal: {
            rows: 16,
            cols: 16,
            mines: 40
        },
        expert: {
            rows: 16,
            cols: 30,
            mines: 99
        }
    }

    #numberOfRows;
    #numberOfCols;
    #numberOfMines;

    #cells = [];

    #board;

    initializeGame() {
        this.#handleElements();
        this.#newGame()
    }

    #newGame(rows = this.#config.easy.rows, cols = this.#config.easy.cols, mines = this.#config.easy.mines) {
        this.#numberOfRows = rows;
        this.#numberOfCols = cols; 
        this.#numberOfMines = mines; 

        this.#generateCells();
    }

    #handleElements() {
        this.#board = getElement(this.UISelectors.board);
    }

    #generateCells() {
        for(let row = 0; row < this.#numberOfRows; row++) {
            this.#cells[row] = [];
            for(let col = 0; col < this.#numberOfCols; col++) {
                this.#cells[row].push(new Cell(col, row));
            }
        }
    }

    #renderBoard() {
        this.#cells.flat().forEach(cell => {
            this.#board.insertAdjacentHTML('beforeend', cell)
        })
    }
}

window.onload = function() {
    const game = new Game();
    game.initializeGame();
}