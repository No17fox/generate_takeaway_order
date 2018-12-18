'use strict';

var printOrder = require('../src/print_order.js');

describe('Print order', function () {
  
  it('should print the order', function () {
    let orderedItems = [{
      id: 'ITEM0001',
      name: '黄焖鸡',
      price: 18.00,
      count: 1,
    }, {
      id: 'ITEM0013',
      name: '肉夹馍',
      price: 6.00,
      count: 2,
    }, {
      id: 'ITEM0022',
      name: '凉皮',
      price: 8.00,
      count: 1,
    }];

    let bestPromotion = {
      type: '指定菜品半价',
      items: ['黄焖鸡', '凉皮'],
      discount: 13,
      amount: 25,
    };

    let result = printOrder(orderedItems, bestPromotion);

    let expected = `
============= 订餐明细 =============
黄焖鸡 x 1 = 18元
肉夹馍 x 2 = 12元
凉皮 x 1 = 8元
-----------------------------------
使用优惠：
指定菜品半价(黄焖鸡，凉皮)，省13元
-----------------------------------
总计：25元
===================================`.trim();

    expect(result).toEqual(expected);
  });

  it('should print the order', function () {
    let orderedItems = [{
      id: 'ITEM0013',
      name: '肉夹馍',
      price: 6.00,
      count: 5,
    }];

    let bestPromotion = {
      type: '满30减6元',
      discount: 6,
      amount: 24,
    };

    let result = printOrder(orderedItems, bestPromotion);

    let expected = `
============= 订餐明细 =============
肉夹馍 x 5 = 30元
-----------------------------------
使用优惠：
满30减6元，省6元
-----------------------------------
总计：24元
===================================`.trim();

    expect(result).toEqual(expected);
  });

  it('should print the order', function () {
    let orderedItems = [{
      id: 'ITEM0013',
      name: '肉夹馍',
      price: 6.00,
      count: 4,
    }];

    let bestPromotion = {
      type: '无可用优惠',
      discount: 0,
      amount: 24,
    };

    let result = printOrder(orderedItems, bestPromotion);

    let expected = `
============= 订餐明细 =============
肉夹馍 x 4 = 24元
-----------------------------------
总计：24元
===================================`.trim();

    expect(result).toEqual(expected);
  });

});