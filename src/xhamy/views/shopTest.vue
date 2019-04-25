<!-- shopTest -->
<template>
    <div id="shopTest">
        <!-- <shop search :shopData="shopData" @onSearch="search"></shop> -->
        <!-- <shop double search :shopData="shopData" @onSearch="search" @submit="submit"></shop> -->
        <!-- <shop-cart edit :shopData="shopData" @submit="submit"></shop-cart> -->
        <!-- <shop-cart edit multiple :shopData="shopData" @submit="submit"></shop-cart> -->
        <!-- <address-list
            :list="list"
            disableText="不可以用的"
            @edit="edit"
            @add="add"
            @save="save"
            @del="del"
        ></address-list>-->
        <!-- <address-edit @save="save" @del="del" defaultEdit></address-edit> -->
        <!-- <shop-detail
            :shopMessage="shopMessage"
            :shopIcon="false"
            :cartInfo="cartInfo"
            @getInCart="getInCart"
            @goCart="goCart"
            @goShop="goShop"
            @buyNow="buyNow"
        ></shop-detail>-->
    </div>
</template>
<script>
import { testApi } from "@/xhamy/api/test";
export default {
    name: 'shopTest',
    data() {
        return {
            shopData: [
                {
                    id: 1, // Number 唯一标识符
                    shopName: "商家A", // String 商家名称
                    checked: false, // Boolean 当前商家下的商品是否全选中
                    result: [], // Array 当前商家选中的商品结果存放
                    goodsList: [ // Array 商品列表
                        {
                            id: 1, // Number 唯一标识符
                            name: "商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1", // String 商品名称
                            desc: "描述1描述1描述1描述1描述1描述1描述1", // String 商品描述
                            price: 0, // Number 商品价格（现价）
                            originPrice: 0, // Number 商品原价
                            num: 0, // Number 商品数量
                            saleNum: 0, // Number 商品销售数量
                            tag: "", // String 商品标签名
                            img: require("@/assets/img/offline.png"), // String 商品图片
                            checked: false, // Boolean 当前商品是否被选中
                        },
                        {
                            id: 2, // Number 唯一标识符
                            name: "商品2商品2商品2商品2商品2商品2商品2商品2商品2商品2商品2商品2商品2", // String 商品名称
                            desc: "描述2描述2描述2描述2描述2描述2描述2", // String 商品描述
                            price: 0, // Number 商品价格（现价）
                            originPrice: 0, // Number 商品原价
                            num: 0, // Number 商品数量
                            saleNum: 0, // Number 商品销售数量
                            tag: "", // String 商品标签名
                            img: require("@/assets/img/offline.png"), // String 商品图片
                            checked: false, // Boolean 当前商品是否被选中
                        },
                    ]
                },
                {
                    id: 2, // Number 唯一标识符
                    shopName: "商家B", // String 商家名称
                    checked: false, // Boolean 当前商家下的商品是否全选中
                    result: [], // Array 当前商家选中的商品结果存放
                    goodsList: [ // Array 商品列表
                        {
                            id: 3, // Number 唯一标识符
                            name: "商品3商品3商品3商品3商品3商品3商品3商品3商品3商品3商品3商品3商品3", // String 商品名称
                            desc: "描述3描述3描述3描述3描述3描述3描述3", // String 商品描述
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
            ],
            // cartInfo: 5,
            // shopMessage: {
            //     id: 1, // Number 唯一标识符
            //     name: "这是商品的name", // String 商品名称
            //     desc: "这是商品的描述描述描述描述描述描述", // String 商品描述
            //     price: 90, // Number 商品价格（现价）
            //     originPrice: 99, // Number 商品原价
            //     desCount: 85, // Number 商品折扣
            //     expressPrice: 10, // Number 快递费
            //     num: 99999, // Number 商品库存数量
            //     saleNum: 10086, // Number 商品销售数量
            //     tag: "爆款", // String 商品标签名
            //     imgList: [ // String 商品图片
            //         'http://img3.imgtn.bdimg.com/it/u=3447912283,4162843056&fm=26&gp=0.jpg',
            //         'http://dingyue.nosdn.127.net/ahBkRMtHH2k7VdPw2rKVJ762XOIz2QpHLnSKLOYYg6gdq1546221412121.jpeg',
            //         'http://b-ssl.duitang.com/uploads/blog/201508/13/20150813163710_mrZj3.thumb.700_0.jpeg'
            //     ],
            //     detail: '<style>img{width:100%;display:block}</style><img src="http://img3.imgtn.bdimg.com/it/u=3447912283,4162843056&fm=26&gp=0.jpg" /><img src="http://dingyue.nosdn.127.net/ahBkRMtHH2k7VdPw2rKVJ762XOIz2QpHLnSKLOYYg6gdq1546221412121.jpeg" /><img src="http://b-ssl.duitang.com/uploads/blog/201508/13/20150813163710_mrZj3.thumb.700_0.jpeg" />',
            //     sku: {

            //     }
            // }
        };
    },
    components: {},
    computed: {},
    created() {
        const _this = this;
        this.init()
    },
    methods: {
        submit(val) {
            console.log(1)
        },
        async init() {
            try {
                const { data } = await testApi({
                    // api_name: "user_info"
                })
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        // search(val) {
        // },
        // edit(item, index) {
        //     console.log(item, index)
        //     this.editId = item.id
        // },
        // add() {
        //     console.log(3213212)
        // },
        // save() {
        //     console.log(this.editId, 123)
        // },
        // del() {
        //     console.log(this.editId, 321)
        // },
        // getInCart() {
        //     console.log("getInCart")
        // },
        // goCart() {
        //     console.log("goCart")
        // },
        // goShop() {
        //     console.log("goShop")
        // },
        // buyNow() {
        //     console.log("buyNow")
        // },
    }
};
</script>
<style scoped lang='less'>
</style>