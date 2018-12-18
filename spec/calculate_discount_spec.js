'use strict';

var calculateDiscount = require("../src/calculate_discount.js");

describe('Calculate discount', function () {

  it('should calculate the amount of all promotions', function () {
    let input = [{
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
    let result = calculateDiscount(input);
    expect(result).toEqual([{
      type: '满30减6元',
      discount: 6,
      amount: 32,
    }, {
      type: '指定菜品半价',
      items: ['黄焖鸡', '凉皮'],
      discount: 13,
      amount: 25,
    }]);
  });

  it('should calculate the amount of all promotions', function () {
    let input = [{
      id: 'ITEM0013',
      name: '肉夹馍',
      price: 6.00,
      count: 4,
    }, {
      id: 'ITEM0022',
      name: '凉皮',
      price: 8.00,
      count: 1,
    }];
    let result = calculateDiscount(input);
    expect(result).toEqual([{
      type: '满30减6元',
      discount: 6,
      amount: 26,
    }, {
      type: '指定菜品半价',
      items: ['凉皮'],
      discount: 4,
      amount: 28,
    }]);
  });

  it('should calculate the amount of all promotions', function () {
    let input = [{
      id: 'ITEM0013',
      name: '肉夹馍',
      price: 6.00,
      count: 4,
    }];
    let result = calculateDiscount(input);
    expect(result).toEqual([{
      type: '无可用优惠',
      discount: 0,
      amount: 24,
    }]);
  });

});