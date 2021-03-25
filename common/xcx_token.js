import {Api_url} from './config'
import {Shop_app_key} from './config'

class XcxToken {
	constructor() {
		this.tokenUrl = Api_url + 'wechat/mp_auth';
		this.verifyUrl = Api_url + 'auth/token_verify';
		this.getInfo = Api_url + 'user/info';
	}

	verify(user_page = null,page=1) {
		this.getTokenFromServer(user_page,page);
	}

	//获取Token
	getTokenFromServer(user_page = null,page=1) {
		var that = this;
		uni.login({
			provider: 'weixin',
			success: function(res) {
				uni.setStorageSync('code', res)
				// 获取用户信息
				uni.getUserInfo({
				    provider: 'weixin',
				    success: function (infoRes) {
						uni.request({
							url: that.tokenUrl,
							method: 'POST',
							data: {
								code:res.code,
								encryptedData:infoRes.encryptedData,
								errMsg:infoRes.errMsg,
								iv:infoRes.iv,
								rawData:infoRes.rawData,
								signature:infoRes.signature,
								shop_app_key:Shop_app_key,
								login_type:'routine',
								spread_code:uni.getStorageSync("spread_code")
							},
							success: function(userdata) {
								uni.setStorageSync('auth_token', userdata.data.data.token);
								uni.setStorageSync('cache_key', userdata.data.data.cache_key);
								uni.setStorageSync('is_login',1)
								if(user_page != null){
									if(page == 0){
									    user_page.login_finished()
									}
									else if (page == 1){
									   user_page.load_user_info()
									}
								}
								
							}
						})
				    },
					fail:function(error){
						if(user_page != null){
							if(page == 0){
							    user_page.login_finished()
							}
							else if (page == 1){
							   user_page.load_user_info()
							}
						}
					}
				})
				
			}
		})
	}
}
export {
	XcxToken
};


