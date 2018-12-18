'use strict';

var selectPromotion = require('../src/select_promotion.js');

describe('Select promotion', function () {
  
  it('should select 指定菜品半价', function () {
    let input = [{
      type: '满30减6元',
      discount: 6,
      amount: 32,
    }, {
      type: '指定菜品半价',
      items: ['ITEM0001', 'ITEM0022'],
      discount: 13,
      amount: 25,
    }];
    
    let result = selectPromotion(input);

    expect(result).toEqual({
      type: '指定菜品半价',
      items: ['ITEM0001', 'ITEM0022'],
      discount: 13,
      amount: 25,
    });
  });

  it('should select 满30减6元', function () {
    let input = [{
      type: '满30减6元',
      discount: 6,
      amount: 26,
    }, {
      type: '指定菜品半价',
      items: ['ITEM0022'],
      discount: 4,
      amount: 28,
    }];
    
    let result = selectPromotion(input);

    expect(result).toEqual({
      type: '满30减6元',
      discount: 6,
      amount: 26,
    });
  });

  it('should select 无可用优惠', function () {
    let input = [{
      type: '无可用优惠',
      discount: 0,
      amount: 24,
    }];
    
    let result = selectPromotion(input);

    expect(result).toEqual({
      type: '无可用优惠',
      discount: 0,
      amount: 24,
    });
  });

});