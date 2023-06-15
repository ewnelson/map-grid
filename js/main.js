const xArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const yArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const GRID_CLASS = 'ashika';
const GRID_ITEM_CLASS = 'grid-item';
const SELECTED_CLASS = 'selected';
const INVALID_CLASS = 'invalid';

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

const selectCell = () => {
    let gridItems = getGridItems();

    let min = 0;
    let max = gridItems.length;
    let i = getRandomNumber(min, max - 1);

    gridItems[i].classList.add(SELECTED_CLASS)
}

setupGrid();
selectCell();