## 使用细则，参数等

### 微商城
```html
<shop double search :shopData="shopData" @onSearch="search" @submit="submit">
```
#### API
|      参数      |     说明     |   类型   | 默认值   | 
|----------------|-------------|----------|---------|
|     double     | 是否联动商城 |`Boolean` |  false  |
|     search     |   搜索组件   |`Boolean` |  false  |
|    shopData    |   商城数据   |  `Array` |    -    |

#### Event
|  事件名   |   说明    | 参数 |
|--------- |-----------|------|
| onSearch | 点击时触发 | 搜索框内容 |
|  submit  | 点击时触发 | 提交按钮 |

#### 单列表商城Data
``` js
{
    id: 1, // Number 唯一标识符
    name: "", // String 商品名称
    desc: "", // String 商品描述
    price: 0, // Number 商品价格（现价）
    originPrice: 0, // Number 商品原价
    desCount: 0, // Number 商品折扣
    num: 0, // Number 商品库存数量
    saleNum: 0, // Number 商品销售数量
    tag: "", // String 商品标签名
    img: require("@/assets/img/offline.png"), // String 商品图片
},
```
#### 左右联动列表商城Data
``` js
[
    {
        id: 1, // Number 唯一标识符
        title: "", // String 左侧标题
        goodsList: [ // Array 商品列表
            {
                id: 1, // Number 唯一标识符
                name: "", // String 商品名称
                desc: "", // String 商品描述
                price: 0, // Number 商品价格（现价）
                originPrice: 0, // Number 商品原价
                desCount: 0, // Number 商品折扣
                num: 0, // Number 商品库存数量
                saleNum: 0, // Number 商品销售数量
                tag: "", // String 商品标签名
                img: require("@/assets/img/offline.png"), // String 商品图片
            },
        ]
    }
]
```

### 购物车
```html
<shop-cart :shopData="shopData" @submit="submit"></shop-cart>
```
#### API
|      参数      |     说明     |   类型   | 默认值   | 
|----------------|-------------|----------|---------|
|    shopData    |   商城数据   |  `Array` |    -    |

#### Event
|  事件名   |   说明    | 参数 |
|--------- |-----------|------|
| onSearch | 点击时触发 | 搜索框内容 |
|  submit  | 点击时触发 | 提交按钮 |

#### 单商家购物车Data
``` js
{
    id: 1, // Number 唯一标识符
    name: "", // String 商品名称
    desc: "", // String 商品描述
    price: 0, // Number 商品价格（现价）
    originPrice: 0, // Number 商品原价
    num: 0, // Number 商品数量
    saleNum: 0, // Number 商品销售数量
    tag: "", // String 商品标签名
    img: require("@/assets/img/offline.png"), // String 商品图片
    checked: false, // Boolean 当前商品是否被选中
},
```
#### 多商家购物车Data
``` js
[
    {
        id: 1, // Number 唯一标识符
        shopName: "", // String 商家名称
        checked: false, // Boolean 当前商家下的商品是否全选中
        result: [], // Array 当前商家选中的商品结果存放
        goodsList: [ // Array 商品列表
            {
                id: 1, // Number 唯一标识符
                name: "", // String 商品名称
                desc: "", // String 商品描述
                price: 0, // Number 商品价格（现价）
                originPrice: 0, // Number 商品原价
                num: 0, // Number 商品数量
                saleNum: 0, // Number 商品销售数量
                tag: "", // String 商品标签名
                img: require("@/assets/img/offline.png"), // String 商品图片
                checked: false, // Boolean 当前商品是否被选中
            },
        ]
    }
]
```