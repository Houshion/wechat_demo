<!-- oShop -->
<template>
    <div id="oShop">
        <van-search
            class="searchBar"
            v-if="search"
            v-model="value"
            placeholder="请输入搜索关键词"
            show-action
            shape="round"
            @search="onSearch"
        >
            <div slot="action" @click="onSearch">搜索</div>
        </van-search>
        <div class="main">
            <div class="double flex" v-if="double">
                <div class="left h100">
                    <van-badge-group :active-key="activeKey" @change="onChange">
                        <van-badge
                            :title="item.title"
                            v-for="(item,index) in shopData"
                            :key="index"
                        />
                    </van-badge-group>
                </div>
                <div class="right border-l">
                    <van-card
                        class="tal"
                        v-for="(item,index) in shopGoods"
                        :key="index"
                        :tag="item.tag?item.tag:''"
                        :price="item.price"
                        :desc="item.desc"
                        :title="item.name"
                        :thumb="item.img"
                        :origin-price="item.originPrice"
                    >
                        <div slot="tags" class="cbbb mg-t-5">{{item.payNum?item.payNum:0}}人付款</div>
                        <div slot="footer">
                            <van-stepper min="0" v-model="item.num"/>
                        </div>
                    </van-card>
                </div>
                <van-submit-bar
                    class="border-t"
                    :price="totalPrice"
                    button-text="去结算"
                    @submit="onSubmit"
                >
                    <div class="pd-l-10">
                        共
                        <span class="cred fontb">{{totalNum}}</span>
                        件商品
                    </div>
                </van-submit-bar>
            </div>
            <div v-else class="list">
                <van-card
                    class="tal"
                    v-for="(item,index) in shopGoods"
                    :key="index"
                    :tag="item.tag?item.tag:''"
                    :price="item.price"
                    :desc="item.desc"
                    :title="item.name"
                    :thumb="item.img"
                    :origin-price="item.originPrice"
                >
                    <div slot="tags" class="cbbb mg-t-5">{{item.payNum?item.payNum:0}}人付款</div>
                </van-card>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'oShop',
    props: {
        search: { type: Boolean, default: false },
        double: { type: Boolean, default: false },
        shopData: Array,
    },
    data() {
        return {
            value: '',
            activeKey: 0,
            shopGoods: this.double ? this.shopData[0].goodsList : this.shopData
        };
    },
    components: {},
    computed: {
        totalPrice() {
            let price = 0
            if (this.double) {
                this.shopData.forEach(item => {
                    item.goodsList.forEach(i => {
                        price += i.price * i.num
                    });
                });
            } else {
                this.shopData.forEach(item => {
                    price += item.price * item.num
                });
            }
            return price * 100
        },
        totalNum() {
            let num = 0
            if (this.double) {
                this.shopData.forEach(item => {
                    item.goodsList.forEach(i => {
                        num += i.num
                    });
                });
            } else {
                this.shopData.forEach(item => {
                    num += item.num
                });
            }
            return num
        }
    },
    watch: {

    },
    created() {
        const _this = this
    },
    methods: {
        onSearch() {
            this.$emit('onSearch', this.value)
        },
        onChange(key) {
            this.activeKey = key;
            this.shopGoods = this.shopData[key].goodsList
        },
        onSubmit() {
            console.log(JSON.stringify(this.shopData));
            this.$emit('submit')
        },
    }
};
</script>
<style scoped lang='less'>
#oShop {
  .searchBar {
    position: fixed;
    width: 100%;
    z-index: 9;
  }
  .main {
    .double {
      padding: 55px 0 52px;
      .left {
        position: fixed;
        top: 55px;
        left: 0;
        padding-bottom: 104px;
        width: 25%;
        overflow: scroll;
        .van-badge--select {
          border-color: aqua;
        }
      }
      .right {
        position: fixed;
        top: 55px;
        right: 0;
        padding-bottom: 104px;
        width: 75%;
        height: 100%;
        overflow: scroll;
        .van-card {
          background: #ffffff;
        }
      }
    }
  }
}
</style>