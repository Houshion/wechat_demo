<!-- addressEdit -->
<template>
    <div id="addressEdit">
        <van-cell-group class="pd-b-20">
            <div class="form tal" v-if="defaultEdit">
                <van-field
                    type="text"
                    clearable
                    v-model="formData.name"
                    label="收货人"
                    placeholder="请输入收货人"
                />
                <van-field
                    type="text"
                    clearable
                    v-model="formData.tel"
                    label="手机号码"
                    placeholder="请输入手机号码"
                    onkeyup="this.value=this.value.replace(/[^0-9]/g,'')"
                />
                <van-field
                    type="text"
                    v-model="area.valueStr"
                    label="地区"
                    placeholder="请选择省/市/区"
                    @click="area.show = true"
                />
                <van-field
                    type="text"
                    clearable
                    v-model="formData.address"
                    label="详细地址"
                    placeholder="请输入详细地址"
                />
                <van-field
                    type="text"
                    clearable
                    v-model="formData.postNum"
                    label="邮政编码"
                    placeholder="请输入邮政编码"
                    onkeyup="this.value=this.value.replace(/[^0-9]/g,'')"
                />
                <van-switch-cell v-model="formData.default" title="设为默认"/>
            </div>
            <slot v-else class="tal"></slot>
            <slot anme="aaa" v-else class="tal"></slot>
            <div class="button wd-90 mg-t-20">
                <van-button class="wd-100 mg-t-20" @click="onSave()" type="danger">保存</van-button>
                <van-button class="wd-100 mg-t-20" @click="onDel()" type="default">删除</van-button>
            </div>
            <van-popup v-model="area.show" position="bottom">
                <van-area
                    @cancel="area.show = false"
                    @confirm="areaConfirm"
                    :area-list="area.list"
                    title="请选择地区"
                />
            </van-popup>
        </van-cell-group>
    </div>
</template>
<script>
import area from "@/vant-ui/area.js"
export default {
    name: 'addressEdit',
    props: {
        defaultEdit: { type: Boolean, default: false }
    },
    data() {
        return {
            formData: {
                name: '',
                tel: '',
                area: '',
                address: '',
                postNum: '',
                default: '',
            },
            area: {
                show: false,
                list: area,
                valueStr: ''
            },
        };
    },
    components: {},
    computed: {},
    created() {
        const _this = this
        console.log(this.defaultEdit)
    },
    methods: {
        onSave() {
            this.$emit('save')
        },
        onDel() {
            this.$emit('del')
        },
        areaConfirm(val) {
            let area = new Array()
            let areaStr = ''
            val.forEach((item, index) => {
                areaStr += item.name
                if (index < val.length - 1) {
                    areaStr += "/"
                    area.push(item.code)
                }
            });
            this.area.valueStr = areaStr;
            this.area.show = false
            console.log(JSON.stringify(area), areaStr)
        }
    }
};
</script>
<style scoped lang='less'>
</style>