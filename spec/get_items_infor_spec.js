'use strict';

var getItemsInfor = require('../src/get_items_infor.js');

describe('Get items infor', function () {
  
  it('should get information of the ordered items', function () {
    let input = ["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"];

    let result = getItemsInfor(input);
    expect(result).toEqual([{
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
    }]);
  })

});