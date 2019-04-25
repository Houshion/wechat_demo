export const LIMIT_TYPE = {
    QUOTA_LIMIT: 0,
    STOCK_LIMIT: 1
};

export const UNSELECTED_SKU_VALUE_ID = '';

export let skuData = {
    kdt_id: 55,
    user_id: 4674509,
    offline_id: 0,
    activity_alias: '',
    sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [{
                k: '颜色', // skuKeyName：规格类目名称
                k_id: '1',
                v: [{
                        id: '30349', // skuValueId：规格值 id
                        name: '天蓝色', // skuValueName：规格值名称
                        imgUrl: 'https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg' // 规格类目图片，只有第一个规格类目可以定义图片
                    },
                    {
                        id: '1215',
                        name: '白色'
                    }
                ],
                k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                count: 2
            },
            {
                k: '尺寸',
                k_id: '2',
                v: [{
                        id: '1193',
                        name: '1'
                    },
                    {
                        id: '1194',
                        name: '2'
                    }
                ],
                k_s: 's2',
                count: 2
            }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [{
                id: 2259, // skuId，下单时后端需要
                price: 100, // 价格（单位分）
                discount: 100, // 折扣（%）
                code: '',
                s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
                s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
                s3: '0',
                s4: '0',
                s5: '0',
                extend: null,
                kdt_id: 55,
                discount_price: 0,
                stock_num: 110,
                stock_mode: 0,
                is_sell: null,
                combin_sku: false,
                goods_id: 946755
            },
            {
                id: 2260,
                price: 100,
                discount: 100,
                code: '',
                s1: '1215',
                s2: '1194',
                s3: '0',
                s4: '0',
                s5: '0',
                extend: null,
                kdt_id: 55,
                discount_price: 0,
                stock_num: 0,
                stock_mode: 0,
                is_sell: null,
                combin_sku: false,
                goods_id: 946755
            },
            {
                id: 2257,
                price: 100,
                discount: 100,
                code: '',
                s1: '30349',
                s2: '1193',
                s3: '0',
                s4: '0',
                s5: '0',
                extend: null,
                kdt_id: 55,
                discount_price: 0,
                stock_num: 111,
                stock_mode: 0,
                is_sell: null,
                combin_sku: false,
                goods_id: 946755
            },
            {
                id: 2258,
                price: 100,
                discount: 100,
                code: '',
                s1: '30349',
                s2: '1194',
                s3: '0',
                s4: '0',
                s5: '0',
                extend: null,
                kdt_id: 55,
                discount_price: 0,
                stock_num: 6,
                stock_mode: 0,
                is_sell: null,
                combin_sku: false,
                goods_id: 946755
            }
        ],
        price: '1.00',
        stock_num: 227,
        collection_id: 2261,
        collection_price: 0,
        none_sku: false,
        sold_num: 0,
        min_price: '1.00',
        max_price: '1.00',
        messages: [{
                datetime: '0',
                disable_multiple: false,
                disable: false,
                multiple: '0',
                name: '留言1',
                disable_required: false,
                disable_edit_name: false,
                type: 'text',
                disable_delete: false,
                disable_type: false,
                required: '1'
            },
            {
                datetime: '0',
                disable_multiple: false,
                disable: false,
                multiple: 0,
                name: '留言2',
                disable_required: false,
                disable_edit_name: false,
                type: 'id_no',
                disable_delete: false,
                disable_type: false,
                required: 0
            },
            {
                datetime: '0',
                disable_multiple: false,
                disable: false,
                multiple: 0,
                name: '留言3',
                disable_required: false,
                disable_edit_name: false,
                type: 'image',
                disable_delete: false,
                disable_type: false,
                required: 0
            },
            {
                datetime: '0',
                disable_multiple: false,
                disable: false,
                multiple: 1,
                name: '留言4',
                disable_required: false,
                disable_edit_name: false,
                type: 'text',
                disable_delete: false,
                disable_type: false,
                required: 0
            },
            {
                datetime: '0',
                disable_multiple: false,
                disable: false,
                name: '数字',
                multiple: 0,
                disable_required: false,
                disable_edit_name: false,
                type: 'tel',
                disable_delete: false,
                disable_type: false,
                required: 0
            },
            {
                datetime: '0',
                disable_multiple: false,
                disable: false,
                name: '邮件',
                multiple: 0,
                disable_required: false,
                disable_edit_name: false,
                type: 'email',
                disable_delete: false,
                disable_type: false,
                required: 0
            },
            {
                datetime: '0',
                disable_multiple: false,
                disable: false,
                name: '日期',
                multiple: 0,
                disable_required: false,
                disable_edit_name: false,
                type: 'date',
                disable_delete: false,
                disable_type: false,
                required: 0
            },
            {
                datetime: '0',
                disable_multiple: false,
                disable: false,
                name: '时间含日期',
                multiple: 0,
                disable_required: false,
                disable_edit_name: false,
                type: 'time',
                disable_delete: false,
                disable_type: false,
                required: 0
            },
            {
                datetime: '0',
                disable_multiple: false,
                disable: false,
                name: '时间',
                multiple: 0,
                disable_required: false,
                disable_edit_name: false,
                type: 'time',
                disable_delete: false,
                disable_type: false,
                required: 0
            }
        ],
        hide_stock: false
    },
    goods_id: '946755',
    alias: '2oml0r0n5vytj',
    quota: 15,
    is_virtual: '0',
    quota_used: 0,
    goods_info: {
        title: '测试商品',
        picture: 'https://img.yzcdn.cn/upload_files/2017/03/16/Fs_OMbSFPa183sBwvG_94llUYiLa.jpeg?imageView2/2/w/100/h/100/q/75/format/jpg',
        price: 1,
        origin: ''
    }
};

export default {
    LIMIT_TYPE,
    UNSELECTED_SKU_VALUE_ID,
    skuData
};