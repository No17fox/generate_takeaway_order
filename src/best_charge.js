'use strict';

let getItemsInfor = require('./get_items_infor.js');
let calculateDiscount = require('./calculate_discount.js');
let selectPromotion = require('./select_promotion.js');
let printOrder = require('./print_order');

let bestCharge = selectedItems => {
  const ORDER_INFOR = getItemsInfor(selectedItems);
  const PROMOTIONS = calculateDiscount(ORDER_INFOR);
  const BEST_PROMOTION = selectPromotion(PROMOTIONS);
  const ORDER = printOrder(ORDER_INFOR, BEST_PROMOTION);
  return ORDER;
};

module.exports = bestCharge;
