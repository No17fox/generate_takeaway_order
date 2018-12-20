'use strict';

let loadPromotions = require('./promotions.js');
const PROMOTIONS = loadPromotions();

let calculateDiscount = orderInfor => {
  let promotionsAndCharge = [];
  let plan = {};
  let totalPrice = sum(orderInfor);
  let dicountItems = orderInfor.filter(isDiscountItem);
  if (totalPrice < 30 && dicountItems.length === 0) {
    plan = discountPlan(totalPrice, dicountItems);
    promotionsAndCharge.push(plan);
  } else {
    for (let promotion of PROMOTIONS) {
      plan = discountPlan(totalPrice, dicountItems, promotion);
      promotionsAndCharge.push(plan);
    }
  }
  return promotionsAndCharge;
};

let sum = orderInfor => {
  return orderInfor.reduce((totalPrice, item) => {
    return totalPrice + item.price * item.count;
  }, 0);
};

let isDiscountItem = orderedItem => {
  return PROMOTIONS[1].items.includes(orderedItem.id);
};

let discountPlan = (totalPrice, dicountItems, promotion = {type: '无可用优惠'}) => {
  let plan = {};
  plan.type = promotion.type;
  switch (plan.type) {
    case '满30减6元':
      plan.discount = 6;
      break;

    case '指定菜品半价':
      plan.items = [];
      plan.discount = 0;
      for (let item of dicountItems) {
        plan.items.push(item.name);
        plan.discount += item.price * item.count / 2;
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
};

module.exports = calculateDiscount;