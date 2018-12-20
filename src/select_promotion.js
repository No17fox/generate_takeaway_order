'use strict';

let selectPromotion = promotions => {
  const BEST_PROMOTION = (promotions.length === 1) ? promotions[0] : promotions.reduce(maximumDiscount);
  return BEST_PROMOTION;
};

let maximumDiscount = (max, current) => {
  return (max.discount >= current.discount) ? max : current;
};

module.exports = selectPromotion;