'use strict';

let loadAllItems = require('./items.js');
const MENU = loadAllItems();

let getItemsInfor = selectedItems => {
  let orderInfor = [];
  selectedItems.map((item) => {
    let itemAndCount = item.split(' x ');
    let itemInfor = matchItem(itemAndCount[0]);
    itemInfor.count = Number(itemAndCount[1]);
    orderInfor.push(itemInfor);
  })
  return orderInfor;
};

let matchItem = itemId => {
  return MENU.find((element) => {
    return element.id === itemId;
  })
};

module.exports = getItemsInfor;