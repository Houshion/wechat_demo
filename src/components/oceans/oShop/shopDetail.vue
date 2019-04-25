<!-- shopDetail -->
<template>
    <div id="shopDetail">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in shopMessage.imgList" :key="index">
                <img v-lazy="image">
            </van-swipe-item>
        </van-swipe>
        <div id="basicMessage"></div>
        <div id="detail" class="pd-b-50">
            <div class="label tal">
                <van-cell title="商品详情"/>
            </div>
            <div class="content" v-html="shopMessage.detail"></div>
        </div>
        <!-- <div id="sku">
            <van-sku
                v-model="showCustomAction"
                stepper-title="我要买"
                :sku="sku"
                :goods="goods"
                :goods-id="goodsId"
                :hide-stock="sku.hide_stock"
                :quota="quota"
                :quota-used="quotaUsed"
                show-add-cart-btn
                reset-stepper-on-hide
                :initial-sku="initialSku"
                @buy-clicked="onBuyClicked"
                @add-cart="onAddCartClicked"
            >
                <template slot="sku-header-price" slot-scope="props">
                    <div class="van-sku__goods-price">
                        <span class="van-sku__price-symbol">￥</span>
                        <span class="van-sku__price-num">{{ props.price }}</span>
                    </div>
                </template>
                <template slot="sku-actions" slot-scope="props">
                    <div class="van-sku-actions">
                        <van-button bottom-action @click="onPointClicked">积分兑换</van-button>
                        <van-button
                            type="primary"
                            bottom-action
                            @click="props.skuEventBus.$emit('sku:buy')"
                        >买买买</van-button>
                    </div>
                </template>
            </van-sku>
        </div>-->
        <van-goods-action>
            <van-goods-action-mini-btn
                icon="cart-o"
                :info="cartInfo"
                text="购物车"
                @click="$emit('goCart')"
            />
            <van-goods-action-mini-btn
                v-if="shopIcon"
                icon="shop-o"
                text="店铺"
                @click="$emit('goShop')"
            />
            <van-goods-action-big-btn text="加入购物车" @click="$emit('getInCart')"/>
            <van-goods-action-big-btn primary text="立即购买" @click="$emit('buyNow')"/>
        </van-goods-action>
    </div>
</template>
<script>
import { skuData, LIMIT_TYPE } from "./sku";
export default {
    name: 'shopDetail',
    props: {
        shopMessage: Object,
        shopIcon: true,
        cartInfo: ''
    },
    data() {
        return {
        };
    },
    components: {},
    computed: {},
    created() {
        const _this = this
    },
    methods: {
        goCart() {
            const _this = this;
            this.$emit()
        },
        goShop() {
            const _this = this;
            console.log(2)
        },
        getInCart() {
            const _this = this;
            console.log(3)
        },
        buyNow() {
            const _this = this;
            console.log(4)
        },
    }
};
</script>
<style scoped lang='less'>
.van-swipe {
  height: 250px;
  img {
    width: 100%;
    height: 100%;
  }
}
#detail {
  .content {
    width: 100%;
    max-width: 100%;
    img {
      width: 100% !important;
    }
  }
}
</style>