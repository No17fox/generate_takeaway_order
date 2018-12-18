'use strict';

function printOrder(orderedItems, bestPromotion) {
  let order = '';
  let header = '============= 订餐明细 =============\n';
  let dividingLine = '-----------------------------------\n';
  let footer = '===================================';
  let items = orderedItems.map(printItem);
  let charge = '总计：' + bestPromotion.amount + '元\n';
  if (bestPromotion.discount === 0) {
    order = header + items + '\n' + dividingLine + charge + footer;
  } else {
    let promotion = printPromotion(bestPromotion);
    order = header + items.join('\n') + '\n' + dividingLine + promotion + dividingLine + charge + footer; 
  }
  return order;
}

function printItem(orderedItem) {
  return orderedItem.name + ' x ' + orderedItem.count + ' = ' + orderedItem.price * orderedItem.count + '元';
}

function printPromotion(bestPromotion) {
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
}

module.exports = printOrder;