# Tasking

`best-charge`函数可分为四步完成：

1. 获得所点菜品信息

   ```
   #1 getItemsInfor
   输入：
   	itemsAndCount: [String]
   	allItems: [Object]
   输出：
   	orderedItems:[Object]
   ```

2. 根据用户点单分别计算两种不同优惠方案下的订单总价

   ```
   #2 calculateDiscount
   输入：
   	orderedItems:[Object]
   	promotions: [Object]
   输出：promotionsAndCharge: [Object]
   ```

3. 选择最划算的优惠方案

   ```
   #3 selectPromotion
   输入：
   	promotionsAndCharge: [Object]
   输出：
   	promotion: Object
   	charge: Number
   ```

4. 打印订单信息

   ```
   #4 printOrder
   输入：
   	orderedItems:[Object]
   	promotion: Object
   	charge: Number
   输出：
   	order: String
   ```


