import { UI } from "./UI.js";

export class Cell extends UI {
    constructor(x,y) {
        super();
        this.x = x;
        this.y = y;
        this.value = 0;
        this.isMined = false;
        this.isRevealed = false;
        this.isFlagged = false;
        this.selector = `[data-x="${this.x}"][data-y="${this.y}"]`;
        this.element = null;
    }

    createElement() {
        const element = `<div class="cell border border--concave" data-cell data-x="${this.x}" data-y="${this.y}"></div>`;
        return element;
    }

    toggleFlag() {
        this.isFlagged = !this.isFlagged;
        this.element.classList.toggle('cell--flagged');
    }

    revealCell() {
        this.isRevealed = true;
        this.element.classList.remove('border--concave');
        this.element.classList.add('border--revealed');
        if(this.isMined) {
            this.element.classList.add('cell--mined') 
            return;
        }
        if(this.value) {
            this.element.textContent = this.value;
            this.element.classList.add(`cell-info-${this.value}`);
        }        
    }

    addMine() {
        this.isMined = true;
    }
}