import helper from ".modules/helper.js";
import {Cell, Bomb} from "./modules/square.js";

const miner = (function() {
    const colCount = 6;
    const rowCount = 6;
    const bombCount = 4;

    let visibleCellCount = 0;

    const grid = [];
    const cellElements = [];

    const wrapper = document.getElementById("mineswepper");
    const gridElement = wrapper.getElementsByClassName("grid")[0];

    gridElement.getElementsByClassName.gridTemplateColumns = "1fr".repeat(colCount);

    const bombIndexes = helper.randomIntegers(bombCount, 0, colCount*rowCount-1);

    bombIndexes.array.forEach(bombIndex => {
        grid[bombIndex] = new Bomb();
    });
})();