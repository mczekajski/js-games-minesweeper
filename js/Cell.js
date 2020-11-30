export class Cell {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.value = 0;
        this.isMine = false;
        this.isRevealed = false;
        this.isFlagged = false;
        this.selector = `[data-x="${this.x}"][data-y="${this.y}"]`;
        this.element = null;
    }

    createElement() {
        const element = `<div class="cell border border--concave" data-cell data-x="${this.x} data-y="${this.y}"></div>`;
        return element;
    }
}