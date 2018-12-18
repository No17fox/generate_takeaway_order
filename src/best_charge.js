'use strict';

var getItemsInfor = require('./get_items_infor.js');
var calculateDiscount = require('./calculate_discount.js');
var selectPromotion = require('./select_promotion.js');
var printOrder = require('./print_order');

function bestCharge(selectedItems) {
  let orderedItems = getItemsInfor(selectedItems);
  let promotionsAndCharge = calculateDiscount(orderedItems);
  let bestPromotion = selectPromotion(promotionsAndCharge);
  let order = printOrder(orderedItems, bestPromotion);
  return order;
}

module.exports = bestCharge;
