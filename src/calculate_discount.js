'use strict';

var loadPromotions = require('./promotions.js');
var promotions = loadPromotions();

function calculateDiscount(orderedItems) {
  let promotionsAndCharge = [];
  let plan = {};
  let totalPrice = sum(orderedItems);
  let dicountItems = orderedItems.filter(isDiscountItem);
  if (totalPrice < 30 && dicountItems.length === 0) {
    plan = discountPlan({type: '无可用优惠'}, totalPrice, dicountItems);
    promotionsAndCharge.push(plan);
  } else {
    for (let i = 0; i < promotions.length; i++) {
      plan = discountPlan(promotions[i], totalPrice, dicountItems);
      promotionsAndCharge.push(plan);
    }
  }
  return promotionsAndCharge;
}

function sum(orderedItems) {
  let totalPrice = 0;
  for (let i = 0; i < orderedItems.length; i++) {
    totalPrice += orderedItems[i].price * orderedItems[i].count;
  }
  return totalPrice;
}

function isDiscountItem(orderedItem) {
  for (let i = 0; i < promotions[1].items.length; i++) {
    if (orderedItem.id === promotions[1].items[i]) {
      return true;
    }
  }
  return false;
}

function discountPlan(promotion, totalPrice, dicountItems) {
  let plan = {};
  plan.type = promotion.type;
  switch (plan.type) {
    case '满30减6元':
      plan.discount = 6;
      break;

    case '指定菜品半价':
      plan.items = promotion.items;
      plan.discount = 0;
      for (let i = 0; i < dicountItems.length; i++) {
        plan.discount += dicountItems[i].price * dicountItems[i].count / 2;
      }
      break;

    case '无可用优惠':
      plan.discount = 0;
      break;

    default:
      break;
  }
  plan.amount = totalPrice - plan.discount;
  return plan;
}

module.exports = calculateDiscount;