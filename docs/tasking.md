# Tasking

`best-charge`函数可分为四步完成：

1. 获得所点菜品信息

   ```
   #1 getItemsInfor
   输入：
   	selectedItems: [String]
   	menu: [Object]
   输出：
   	orderInfor:[Object]
   ```

2. 根据用户点单分别计算两种不同优惠方案下的订单总价

   ```
   #2 calculateDiscount
   输入：
   	orderInfor:[Object]
   	promotions: [Object]
   输出：
   	promotionsAndCharge: [Object]
   ```

3. 选择最划算的优惠方案

   ```
   #3 selectPromotion
   输入：
   	promotionsAndCharge: [Object]
   输出：
   	bestPromotion: Object
   ```

4. 打印订单信息

   ```
   #4 printOrder
   输入：
   	orderInfor:[Object]
   	bestPromotion: Object
   输出：
   	order: String
   ```


