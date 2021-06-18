import ccrequest from './ccrequest.js'
import { Shop_app_key } from './config'
export default {
	/**start user*/
	/*
	用户注册
	*/
	async register(data) {
		data['shop_app_key'] = Shop_app_key
		const res = await ccrequest.post("register_user_name", data)
		return res
	},
	async log_in(data) {
		const res = await ccrequest.post("login", data)
		return res
	},
	/*用户中心用户信息*/
	async get_user() {
		const res = await ccrequest.get("user")
		return res
	},
	/*用户提交授权信息*/
	async submit_auth_user(data) {
		const res = await ccrequest.post("user/editAuth", data)
		return res
	},
	/*用户实名认证申请*/
	async user_auth_apply(data) {
		const res = await ccrequest.post("user_auth_apply", data)
		return res
	},
	/*获取用户实名信息*/
	async get_user_cert() {
		const res = await ccrequest.get("user_cert")
		return res
	},
	/*获取用户菜单*/
	async get_user_menu() {
		const res = await ccrequest.get("menu/user")
		return res
	},
	/*获取分销二维码*/
	async get_user_dis_qrcode() {
		const res = await ccrequest.get("spread/banner", { type: 1 })
		return res
	},
	/*获取分销下级人员*/
	async get_user_dis_people(data) {
		const res = await ccrequest.post("spread/people", data)
		return res
	},
	//获取分销客户的实名信息
	async get_spread_user(uid) {
		const res = await ccrequest.post('spread/spread_user', { uid: uid })
		return res
	},
	//获取分销客户的实名信息
	async edit_spread_user(data) {
		const res = await ccrequest.post('spread/edit_spread_user', data)
		return res
	},
	/*获取分销订单*/
	async get_user_dis_order() {
		const res = await ccrequest.post("spread/order")
		return res
	},
	/*获取全部佣金记录*/
	async get_user_dis_commission() {
		const res = await ccrequest.get("spread/commission/0")
		return res
	},
	/*提现申请*/
	async user_submit_cash(data) {
		const res = await ccrequest.post("extract/cash", data)
		return res
	},
	/*提现记录*/
	async user_cash_list(data) {
		const res = await ccrequest.post("extract/list", data)
		return res
	},
	/**end user*/

	//获取首页信息
	async get_index_data() {
		const res = await ccrequest.get('index', { shop_app_key: Shop_app_key })
		return res
	},

	//获取本店铺的商品类别列表
	async get_category_list() {
		const res = await ccrequest.get('category', { shop_app_key: Shop_app_key })
		return res
	},

	//获取本店铺的商品类别列表
	async get_scategory_list() {
		const res = await ccrequest.get('scategory', { shop_app_key: Shop_app_key })
		return res
	},
	//获取本店铺的商品顶级类别
	async get_fcategory_list() {
		const res = await ccrequest.get('category', { shop_app_key: Shop_app_key })
		return res
	},

	//获取商品列表
	async get_products(data) {
		data['shop_app_key'] = Shop_app_key
		const res = await ccrequest.get('products', data)
		return res
	},

	//获取本店商品的详细信息
	async get_product(product_id) {
		const res = await ccrequest.get('pro/detail/' + product_id)
		return res
	},

	//收藏商品
	async fav_product(product_id) {
		const res = await ccrequest.post('favorite/add', { id: product_id })
		return res
	},
	//取消收藏
	async del_fav_product(product_id) {
		const res = await ccrequest.post('favorite/del', { id: product_id })
		return res
	},
	//收藏列表
	async fac_list_product(page, limit) {
		const res = await ccrequest.get('favorite/list', { page: page, limit: limit })
		return res
	},

	//获取可领取优惠券
	async get_coupons() {
		const res = await ccrequest.get('coupons')
		return res
	},
	//领取优惠券
	async user_rsv_coupons(data) {
		const res = await ccrequest.post('coupon/receive', data)
		return res
	},
	//购买优惠券
	async user_buy_coupon(data) {
		const res = await ccrequest.post('coupon/buy', data)
		return res
	},
	//获取用户的优惠券
	//1：未使用；2：已用；3：过期
	async get_user_coupons(type) {
		const res = await ccrequest.get('coupons/user/' + type)
		return res
	},

	/*start address manage*/
	//获取地址信息
	async get_address_list() {
		const res = await ccrequest.get('address/list')
		return res
	},
	/*增加和修改地址信息
	参数：data:{
		areacode: ""
		city: "广州市"
		district: "海珠区"
		detail: "小区28号"
		phone: "18523567498"
		name: "测试员"
		province: "广东省"}
	*/
	async edit_address(data) {
		const res = await ccrequest.post('address/address_manage', data)
		return res
	},
	/*
	设置默认收货地址
	*/
	async set_default_address(address_id) {
		const res = await ccrequest.post('address/default/set', { id: address_id })
		return res
	},
	/*
	获取默认收货地址
	*/
	async get_default_address() {
		const res = await ccrequest.get('address/default')
		return res
	},
	/*
	删除地址
	*/
	async del_address(address_id) {
		const res = await ccrequest.post('address/del', { id: address_id })
		return res
	},
	/*start address manage*/

	/*start order manage*/
	/*确认订单数据
	cart_ids:购物车编号字符串如：（1,2,3,7）
	*/
	async order_confirm(cart_ids) {
		const res = await ccrequest.post('order/confirm', { cartId: cart_ids })
		return res
	},
	/*创建订单
	cart_ids:购物车编号字符串如：（1,2,3,7）
	*/
	async order_create(order_key, order_data) {
		const res = await ccrequest.post('order/create/' + order_key, order_data)
		return res
	},
	/*
	*计算订单金额
	*/
	async order_compute_amount(order_key, order_data) {
		const res = await ccrequest.post('order/computed/' + order_key, order_data)
		return res
	},

	/*当前客户获取订单列表
	订单状态
   0 未支付
   1 待发货
   2 待收货
   3 待评价
   4 已完成
   -1 退款中
   -2 已退款
   -3 退款
	 */
	async order_get_list(data) {
		const res = await ccrequest.get('order/list', data)
		return res
	},
	/*获取订单详情*/
	async order_get_detail(order_id) {
		const res = await ccrequest.get('order/detail/' + order_id)
		return res

	},
	/*获取用户订单统计*/
	async order_get_data() {
		const res = await ccrequest.get('order/data')
		return res
	},
	//获取热门搜索关键字
	async get_serach_keys() {
		const res = await ccrequest.get('search_keys')
		return res
	},
	async order_data_by_date(data) {
		const res = await ccrequest.get('order/dataByDate', data)
		return res
	},
	async order_spread_by_date(data) {
		const res = await ccrequest.get('order/spreadDataByDate', data)
		return res
	},

	/*再来一单*/
	async order_again(order_id) {
		const res = await ccrequest.post('order/again', { uni: order_id })
		return res
	},

	/*确认收货*/
	async order_confirm_take(order_id) {
		const res = await ccrequest.post('order/take', { uni: order_id })
		return res
	},
	/*取消订单*/
	async order_cancel(order_id) {
		const res = await ccrequest.post('order/cancel', { id: order_id })
		return res
	},
	/*删除订单*/
	async order_del(order_id) {
		const res = await ccrequest.post('order/del', { uni: order_id })
		return res
	},
	async order_pay(data) {
		const res = await ccrequest.post('order/pay', data)
		return res
	},
	async order_list_by_date(data) {
		const res = await ccrequest.get('order/listbydate', data)
		return res
	},
	async order_spread_list_by_date(data) {
		const res = await ccrequest.get('order/lstSpreadByDate', data)
		return res
	},
	//获取配送员订单统计
	async order_shippping_data(data) {
		const res = await ccrequest.get('order/shippingDataByDate', data)
		return res
	},
	async order_shipping_list(data) {
		const res = await ccrequest.get('order/lstShippingByDate', data)
		return res
	},


	/*end order manage*/

	/*start shoppping cart manage*/

	/*获取购物车商品列表*/
	async get_cart_list() {
		const res = await ccrequest.get('cart/list')
		return res
	},
	/*购物车添加商品*/
	async cart_add(data) {
		const res = await ccrequest.post('cart/add', data)
		return res
	},
	/*购物车删除商品*/
	async cart_del(data) {
		const res = await ccrequest.post('cart/del', data)
		return res
	},
	/*购物车更新商品数量*/
	async cart_update(data) {
		const res = await ccrequest.post('cart/num', data)
		return res
	},
	/*获取购物车商品数量*/
	async get_cart_count() {
		const res = await ccrequest.get('cart/count')
		return res
	},
	/*end shopping cart manage*/

	/*start 积分充值类*/
	/*购买积分*/
	async buy_coin(recharge_type_id) {
		const res = await ccrequest.post('ccy/buy_coin', recharge_type_id)
		return res
	},
	/*获取购买积分列表*/
	async get_recharge_type_list() {
		const res = await ccrequest.get('ccy/recharge_type_list')
		return res
	},
	/*获取花费积分类型列表*/
	async get_credit_type_list() {
		const res = await ccrequest.get('ccy/credit_type_list')
		return res
	},
	/*end 积分充值类*/

	/*询价信息类*/
	/*关注或点赞询价信息*/
	async add_en_relation(eid, relation_type) {
		const res = await ccrequest.post('ccy/add_en_relation', { eid: eid, relation_type: relation_type })
		return res
	},
	//查看报价排名
	async quote_rank(eid) {
		const res = await ccrequest.post('ccy/quote_rank', { eid: eid })
		return res
	},
	//取消关注或取消点赞询价信息
	async cancel_en_relation(eid, cid, relation_type) {
		const res = await ccrequest.post('ccy/cancel_en_relation', { eid: eid, cid: cid, relation_type: relation_type })
		return res
	},
	//提交报价
	async quote(eid, quote_amount) {
		const res = await ccrequest.post('ccy/quote', { eid: eid, quote_amount: quote_amount })
		return res
	},
	//查看报价排名
	async quote_rank(eid) {
		const res = await ccrequest.get('ccy/quote_rank', { eid: eid })
		return res
	},
	//修改报价
	async quote_change(eid, quote_amount) {
		const res = await ccrequest.post('ccy/quote_change', { eid: eid, quote_amount: quote_amount })
		return res
	},
	//开牌报价供应商信息
	async open_quote(qid) {
		const res = await ccrequest.post('ccy/open_quote', { qid: qid })
	},
	//提交询价信息
	async submit_enquiry(product_list, delivery_deadline, valid_period, address_id, credit_type, note) {
		const res = await ccrequest.post('ccy/submit_enquiry',
			{
				product_list: product_list,
				delivery_deadline: delivery_deadline,
				valid_period: valid_period,
				address_id: address_id,
				credit_type: credit_type,
				note: note,
			})
		return res
	},
	//询价信息列表
	async enquiry_list(type, page, limit, search) {
		const res = await ccrequest.get('ccy/enquiry_list', { type: type, page: page, limit: limit, search: search })
		return res
	},
	//首页
	async enquiry_index(data) {
		const res = await ccrequest.get('ccy/enquiry_index', data)
		return res
	},
	//供应商询价详情
	async enquiry_detail(eid) {
		const res = await ccrequest.get('ccy/enquiry_detail', { eid: eid })
		return res
	},

	//采购商询价详情(自己的询价)
	async my_enquiry_detail(eid) {
		const res = await ccrequest.get('ccy/my_enquiry_detail', { eid: eid })
		return res
	},

	/*用户实名认证申请*/
	async user_auth_apply(data) {
		const res = await ccrequest.post("ccy/user_auth_apply", data)
		return res
	},
	/*获取用户信息*/
	async get_cust_info() {
		const res = await ccrequest.get("ccy/get_cust_info")
		return res
	},

	/*获取用户钱包货币记录*/
	async get_user_coin_log(data) {
		const res = await ccrequest.get("ccy/get_user_coin_log", data)
		return res
	},
	/*获取用户钱包礼物记录*/
	async get_user_gift_log(data) {
		const res = await ccrequest.get("ccy/get_user_gift_log", data)
		return res
	},
	/*获取用户充值记录*/
	async get_user_bill_log(data) {
		const res = await ccrequest.get("ccy/get_user_bill_log", data)
		return res
	},
	/*end 询价信息类*/

}
