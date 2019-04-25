<!-- shopCart -->
<template>
    <div id="shopCart" class="">
        <van-nav-bar class="navBar" :title="'购物车('+totalNum+')'">
            <div slot="right" @click="editDelete=!editDelete" v-if="edit">{{editDelete?"完成":"编辑"}}</div>
            <div slot="left">
                <van-checkbox
                    v-model="checkAllStatus"
                    class="checkBox box"
                    ref="checkAll"
                    name="checkAll"
                >全选</van-checkbox>
            </div>
        </van-nav-bar>
        <div class="cartList multiple" v-if="multiple">
            <van-checkbox-group v-model="shopResult" class="mg-b-10">
                <div class="bfff radius10 mg-t-10" v-for="(shop,index) in shopGoods" :key="index">
                    <div class="flex shopName tal border-b">
                        <van-checkbox
                            @click="checkShop(index)"
                            class="checkBox box"
                            ref="checkShops"
                            :name="shop"
                        />
                        <div class="name pd-5" @click="checkShop(index)">{{shop.shopName}}</div>
                    </div>
                    <van-checkbox-group class="bfff radius10" v-model="shop.result">
                        <div
                            class="flex pd-5"
                            v-for="(item,gindex) in shop.goodsList"
                            :key="gindex"
                        >
                            <van-checkbox class="checkBox box" :ref="shop.title" :name="item"/>
                            <div class="goods">
                                <div class="main">
                                    <div class="img box">
                                        <img :src="item.img">
                                    </div>
                                    <div class="message tal van-card__content">
                                        <div @click="check(index,gindex)">
                                            <div class="title van-card__title">{{item.name}}</div>
                                            <div
                                                class="desc van-card__desc van-ellipsis"
                                            >{{item.desc}}</div>
                                        </div>
                                        <div class="bottom flex flexBetween mg-t-5">
                                            <div class="left" @click="check(index,gindex)">
                                                <div
                                                    class="tags cbbb"
                                                >{{item.payNum?item.payNum:0}}人付款</div>
                                                <div class="van-card__bottom">
                                                    <div class="van-card__price">¥ {{item.price}}</div>
                                                    <div
                                                        class="van-card__origin-price"
                                                        v-if="item.originPrice"
                                                    >¥ {{item.originPrice}}</div>
                                                </div>
                                            </div>
                                            <van-stepper
                                                class="right box"
                                                min="0"
                                                v-model="item.num"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </van-checkbox-group>
                </div>
            </van-checkbox-group>
        </div>
        <div class="cartList" v-else>
            <van-checkbox-group v-model="result">
                <div class="border-b flex pd-5" v-for="(item,index) in shopData" :key="index">
                    <van-checkbox
                        @click="check(index)"
                        class="checkBox box"
                        ref="checkboxes"
                        :name="item"
                    />
                    <div class="goods">
                        <div class="main">
                            <div class="img box">
                                <img :src="item.img">
                            </div>
                            <div class="message tal van-card__content">
                                <div @click="check(index)">
                                    <div class="title van-card__title">{{item.name}}</div>
                                    <div class="desc van-card__desc van-ellipsis">{{item.desc}}</div>
                                </div>
                                <div class="bottom flex flexBetween mg-t-5">
                                    <div class="left" @click="check(index)">
                                        <div class="tags cbbb">{{item.payNum?item.payNum:0}}人付款</div>
                                        <div class="van-card__bottom">
                                            <div class="van-card__price">¥ {{item.price}}</div>
                                            <div
                                                class="van-card__origin-price"
                                                v-if="item.originPrice"
                                            >¥ {{item.originPrice}}</div>
                                        </div>
                                    </div>
                                    <van-stepper class="right box" min="0" v-model="item.num"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </van-checkbox-group>
        </div>
        <van-submit-bar
            class="border-t"
            :price="editDelete?0:totalPrice"
            :button-text="editDelete?'删除('+totalGoodsNum+')':'去结算'"
            @submit="editDelete?deleteGoods:onSubmit"
        >
            <div class="pd-l-10" v-if="!editDelete">
                共
                <span class="cred fontb">{{totalGoodsNum}}</span>
                件商品
            </div>
        </van-submit-bar>
    </div>
</template>
<script>
export default {
    name: 'shopCart',
    props: {
        multiple: { type: Boolean, default: false },
        shopData: Array,
        edit: { type: Boolean, default: false },
    },
    data() {
        return {
            checkAllStatus: false,
            shopResult: [],
            // result: [],
            activeKey: 0,
            shopGoods: this.shopData,
            editDelete: false
        };
    },
    components: {},
    computed: {
        totalPrice() {
            let price = 0
            if (!this.multiple) {
                this.shopData.forEach(item => {
                    // console.log(item.checked)
                    if (item.checked) {
                        // console.log(1)
                        price += item.price * item.num
                    }
                });
            } else {
                this.shopData.forEach(shop => {
                    shop.result.forEach(item => {
                        // if (item.checked) {
                        price += item.price * item.num
                        // }
                    });

                });
            }
            return price * 100
        },
        totalNum() {
            if (!this.multiple) {
                return this.shopGoods.length
            } else {
                let num = 0;
                this.shopGoods.forEach(item => {
                    num += item.goodsList.length
                });
                return num
            }
        },
        totalGoodsNum() {
            let num = 0
            if (!this.multiple) {
                this.shopData.forEach(item => {
                    // console.log(item.checked)
                    if (item.checked) {
                        // console.log(1)
                        num += item.num
                    }
                });
            } else {
                this.shopData.forEach(shop => {
                    shop.result.forEach(item => {
                        // if (item.checked) {
                        num += item.num
                        // }
                    })
                });
            }
            return num
        },
        result: {
            get() {
                let result = new Array();
                if (!this.multiple) {
                    this.shopData.forEach((item, index) => {
                        if (item.checked) {
                            result.push(item)
                        }
                    });
                } else {
                    console.log(result)
                }
                return result
            },
            set() {

            }
        }
    },
    watch: {
        shopGoods: {
            handler: function (val) {
                console.log(val)
                if (this.multiple) {
                    val.forEach((item, index) => {
                        if (item.result.length == item.goodsList.length) {
                            item.checked = true;
                            this.shopResult.push(item)
                        } else {
                            item.checked = false;
                            let shopNum = this.shopResult.indexOf(item)
                            if (shopNum > -1) {
                                this.shopResult.splice(shopNum, 1)
                            }
                        }
                    });
                }
                console.log(this.shopGoods)
            },
            deep: true    //深度监听
        },
        checkAllStatus: {
            handler: function (status) {
                if (!this.multiple) {
                    this.shopGoods.forEach(item => {
                        item.checked = status
                    })
                } else {
                    this.shopGoods.forEach(shop => {
                        shop.checked = status
                        shop.goodsList.forEach(item => {
                            item.checked = status
                        })
                        if (status) {
                            shop.result = shop.goodsList
                        } else {
                            shop.result = []
                        }

                    })
                }
            }
        },
    },
    created() {
        const _this = this
        console.log(this.shopData)
        // this.getResult()
    },
    methods: {
        onSubmit() {
            console.log(JSON.stringify(this.shopGoods))
            // console.log(this.checkbox.value)
            // this.$emit('submit')
        },
        check(index, gindex) {
            if (!this.multiple) {
                this.$refs.checkboxes[index].toggle();
                this.shopGoods[index].checked = !this.shopGoods[index].checked
            } else {
                let shop = this.shopGoods[index];
                let result = shop.result;
                if (result.length) {
                    let indexNum = result.indexOf(shop.goodsList[gindex])
                    if (indexNum > -1) {
                        result.splice(indexNum, 1)
                    } else {
                        result.push(shop.goodsList[gindex]);
                    }
                } else {
                    result.push(shop.goodsList[gindex]);
                }
            }
        },
        checkShop(index) {
            this.$refs.checkShops[index].toggle();
            this.shopGoods[index].checked = !this.shopGoods[index].checked;
            this.checkAll(index, this.shopGoods[index].checked)
        },
        checkAll(index, status) {
            let shop = this.shopGoods[index]
            if (status) {
                shop.goodsList.forEach((item, index) => {
                    item.checked = true;
                })
                shop.result = shop.goodsList
            } else {
                shop.goodsList.forEach((item, index) => {
                    item.checked = false;
                })
                shop.result = []
            }
        },
        deleteGoods() {
            console.log("delete")
        }
    }
};
</script>
<style scoped lang='less'>
#shopCart {
  height: 100%;
  .navBar {
    position: fixed;
    width: 100%;
  }
  .cartList {
    height: 100%;
    padding: 46px 0 51px;
    &.multiple {
      padding: 46px 5px 51px;
      background: #eeeeee;
    }
    .checkBox {
      width: 24px;
    }
    .shopName {
      padding: 10px 5px;
      .name {
        width: calc(~"100% - 24px");
      }
    }
    .goods {
      width: calc(~"100% - 24px");
      .main {
        display: flex;
        padding: 5px;
        .img {
          border-radius: 10px;
          position: relative;
          width: 90px;
          height: 90px;
          margin-right: 10px;
          -webkit-box-flex: 0;
          -ms-flex: none;
          flex: none;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          img {
            width: 100%;
            border-radius: 10px;
            display: block;
          }
        }
        .message {
          font-size: 12px;
        }
      }
    }
  }
}
</style>