'use strict';

function selectPromotion(promotionsAndCharge) {
  let bestPromotion = {};
  if (promotionsAndCharge.length === 1) {
    bestPromotion = promotionsAndCharge[0];
  } else {
    bestPromotion = promotionsAndCharge.reduce(maximumDiscount);
  }
  return bestPromotion;
}

function maximumDiscount(max, current) {
  if (max.discount >= current.discount) {
    return max;
  } else if (max.discount < current.discount) {
    return max = current;
  }
}

module.exports = selectPromotion;