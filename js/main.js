const xArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const yArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const GRID_CLASS = 'ashika';
const GRID_ITEM_CLASS = 'grid-item';
const SELECTED_CLASS = 'selected';
const VALID_CLASS = 'valid';

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getGridItems = () => {
    return document.getElementsByClassName(GRID_ITEM_CLASS);
}

const setupGrid = () => {
    let ashikaGrid = document.getElementById(GRID_CLASS);

    yArr.forEach(y => {
        xArr.forEach(x => {
            let id = x + y;

            let gridItem = document.createElement('div');
            gridItem.id = id;
            gridItem.classList.add(GRID_ITEM_CLASS);
            gridItem.append(id);

            ashikaGrid.append(gridItem);
        });
    });
}

const setupValidCells = () => {
    const getColumnIDs = (rowLabel, min, max) => {
        const arr = [];
        for (let i = min; i <= max; i++) {
            arr.push(rowLabel + '' + i);
        }

        return arr;
    }

    const validCells = [];

    validCells.push(...getColumnIDs('C', 2, 6));
    validCells.push(...getColumnIDs('D', 2, 7));
    validCells.push(...getColumnIDs('E', 2, 8));
    validCells.push(...getColumnIDs('F', 3, 8));
    validCells.push(...getColumnIDs('G', 3, 7));
    validCells.push(...getColumnIDs('H', 3, 7));
    validCells.push(...getColumnIDs('I', 3, 6));

    console.log(validCells);

    validCells.forEach(cell => {
        const element = document.getElementById(cell);
        element.classList.add(VALID_CLASS);
    })
}

const selectCell = () => {
    let gridItems = document.getElementsByClassName('valid');

    let min = 0;
    let max = gridItems.length;

    let i = getRandomNumber(min, max - 1);

    gridItems[i].classList.add(SELECTED_CLASS);
}

setupGrid();
setupValidCells();
selectCell();