<!-- addressList -->
<template>
    <div id="addressList">
        <van-address-list
            v-model="chosenAddressId"
            :list="list"
            :disabled-list="disabledList"
            :disabled-text="disabledList.length>0?disableText:''"
            @add="onAdd"
            @edit="onEdit"
        ></van-address-list>
        <mt-popup v-model="show" position="bottom">
            <!-- <van-popup v-model="show" position="right"> -->
            <address-edit ref="editAddress" @save="onSave" @del="onDel" defaultEdit>
                <slot name="edit"></slot>
            </address-edit>
            <!-- </van-popup> -->
        </mt-popup>
    </div>
</template>
<script>
export default {
    name: 'addressList',
    props: {
        list: Array,
        disableText: {
            type: String,
            default: "以下地址超出配送范围"
        },
        defaultEdit: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            show: false,
            chosenAddressId: '1',
            searchResult: []
            // disabledList: this.disabledLists,
        };
    },
    watch: {
        defaultEdit() {
            console.log(this)
        }
    },
    components: {
    },
    computed: {
        disabledList() {
            let arr = new Array()
            this.list.forEach((item, index) => {
                if (!item.status) {
                    this.list.splice(index, 1)
                    arr.push(item)
                }
            });
            return arr
        }
    },
    created() {
        const _this = this
        console.log(this.defaultEdit)
    },
    methods: {
        onAdd() {
            this.show = true;
            this.$emit("add")
        },
        onEdit(item, index) {
            this.show = true;
            this.$emit("edit", item, index)

        },
        onSave() {
            this.$emit('save')
        },
        onDel() {
            this.$emit('del')
        },
    }
};
</script>
<style scoped lang='less'>
.van-popup,
.mint-popup-bottom {
  z-index: 99999 !important;
  width: 100%;
  height: 100%;
}
</style>