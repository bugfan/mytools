# 预先说明
目前游戏里面出售的道具，都属于consumable products（消耗性商品），下面的说明流程都是针对这类商品的。别的类型商品处理方法，不完全一样。

# 注册支付接口回调
app启动的时候即注册支付队列消息的回调者，这个回调者应该是一个单体类，保证在app整个生命周期都存在。ios会回调之前未处理完成的订单。
```objective-c
- (id)init {
    if((self = [super init])) {
        [[SKPaymentQueue defaultQueue] addTransactionObserver:self];
    }
    return self;
}
```

# 加载商品
加载商品是去app store服务器查询，然后等待apple回调，会比较慢。为了避免启动时商店页面空白，可以客户端先把所有商品的名字价格这类信息预先存好（或从服务器查询到），在加载完成前，显示成灰色且不可购买状态。

# 发起支付
```objective-c
SKPayment *payment = [SKPayment paymentWithProduct:product];
[[SKPaymentQueue defaultQueue] addPayment:payment];
```

# 处理回调
发起支付之后，ios会在适当的时机回调之前注册的支付回调函数。回调收到的是一个票据(transaction)数组，需要遍历处理每一个票据。
票据共有五组可能的状态，对于消耗性商品需要关注其中的4个，但是仅有两个比较有意义：

  * SKPaymentTransactionStatePurchasing

    apple store正在处理；如果不想重复购买，此时可以锁定商品界面
  * SKPaymentTransactionStatePurchased

    用户已经付费；需要重点处理
  * SKPaymentTransactionStateFailed

    处理失败，显示错误
  * SKPaymentTransactionStateRestored

    不需要关注
  * SKPaymentTransactionStateDeferred

    等待用户输入支付密码之类的，好像也不需要单独处理

# 完成购买
对于SKPaymentTransactionStatePurchased状态的订单，还需要两步：给玩家商品和关闭订单。关闭订单只需要：
```
[[SKPaymentQueue defaultQueue] finishTransaction:transaction];
```
麻烦的是给玩家商品的时机，可以有不止一种方案的。

# 给玩家商品的时机
有两种选择：
  1. 关闭订单前给玩家商品
  2. 关闭订单后再给玩家商品

选择1的风险是，给了商品之后，玩家通过某种手段不让你关闭订单，然后找苹果退钱（不知道是否可行，也不知道苹果给不给退，是我的猜测）。
选择2的风险是，可能掉单。

## 关闭订单前给玩家商品
如果选择1，流程很简单：
  1. 发送票据给服务器，服务器校验成功后给予玩家商品，并通知客户端
  2. 客户端关闭订单
在2之前，每次重启app，苹果都会重发这个订单，所以肯定可以确保1完成，不会掉单。服务器需要确保同一个订单只给一次商品，应该也容易实现。

## 关闭订单后再给玩家商品
如果选择2，流程较为复杂：
  1. 保存票据到服务器
  2. 关闭订单
  3. 通知服务器处理订单
  4. 服务器校验订单，并给予玩家商品

如果在2之后，客户端异常退出，可能就会形成掉单；需要手工确认，或者客户端每次登陆时，不管有没有订单，在成功加载商品后（确保和苹果通信正常），都执行3来避免掉单。

# 服务器的处理
1. 发送票据到apple store校验

  如果票据正确，会拿到解析后的票据数据。其中有个字段transactionIdentifier可以作为订单的唯一编号。
2. 确认订单未处理过

  通过订单的唯一编号确认订单没有处理过。如果害怕长期来累积了太多的订单，可以结合票据里面的购买日期字段，来减少数据库压力。
  比如任何超过一个月的票据，都认为是失败的。这样数据库中只需要存最近一个月处理过的票据即可。
3. 给玩家商品（略）

# apple官方文档
iap:

https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/StoreKitGuide/Introduction.html

票据校验:

https://developer.apple.com/library/ios/releasenotes/General/ValidateAppStoreReceipt/Introduction.html


## 服务器验证 golang
1. 接收客户端传来的票据
2. 参照‘https://developer.apple.com/documentation/appstorereceipts/verifyreceipt’发送请求（ios貌似只有https的方式，没看到有sdk）
3. 接收响应，根据返回的json字段做权限控制
```
// 响应体字段
JSON."receipt"."in_app"."transaction_id"."transaction_id" => 这个是订单号
JSON."receipt"."in_app"."product_id" => 这个是商品id，相当于安卓支付之后从google拿到的SKU
```