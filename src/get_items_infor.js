'use strict';

var loadAllItems = require('./items.js');
var allItems = loadAllItems();

function getItemsInfor(orderInfor) {
  let orderedItems = [];
  for (let item of orderInfor) { 
    let itemAndCount = item.split(' x ');
    let itemInfor = matchItem(itemAndCount[0]);
    itemInfor.count = Number(itemAndCount[1]);
    orderedItems.push(itemInfor);
  }
  return orderedItems;
}

function matchItem(itemId) {
  for (let item of allItems) {
    if (item.id === itemId) {
      return item;
    }
  }
}

module.exports = getItemsInfor;