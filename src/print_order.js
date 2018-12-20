'use strict';

let printOrder = (orderedItems, bestPromotion) => {
  let order = '';
  const HEADER = '============= 订餐明细 =============\n';
  const DIVIDING_LINE = '-----------------------------------\n';
  const FOOTER = '===================================';
  const ITEMS = orderedItems.map(printItem).join('\n');
  const CHARGE = '总计：' + bestPromotion.amount + '元\n';
  if (bestPromotion.discount === 0) {
    order = HEADER + ITEMS + '\n' + DIVIDING_LINE + CHARGE + FOOTER;
  } else {
    const PROMOTION = printPromotion(bestPromotion);
    order = HEADER + ITEMS + '\n' + DIVIDING_LINE + PROMOTION + DIVIDING_LINE + CHARGE + FOOTER; 
  }
  return order;
};

let printItem = orderedItem => orderedItem.name + ' x ' + orderedItem.count + ' = ' + orderedItem.price * orderedItem.count + '元';

let printPromotion = bestPromotion => {
  let promotion = '';
  switch (bestPromotion.type) {
    case '指定菜品半价':
      promotion = bestPromotion.type + '(' + bestPromotion.items.join('，') + ')，省' + bestPromotion.discount + '元\n';
      break;

    case '满30减6元':
      promotion = bestPromotion.type + '，省' + bestPromotion.discount + '元\n';
      break;
  
    default:
      break;
  }
  return ('使用优惠：\n' + promotion);
};

module.exports = printOrder;