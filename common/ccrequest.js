import {Api_url} from './config'

export default { 
	async post(url, param) {
		const res = await this.uni_request(url,param,'post')  
		return res;
	},
	async get(url, param) {
		const res = await this.uni_request(url,param,'get')
		return res;
	}, 
	async put(url, param) {
		const res = await this.uni_request(url,param,'put') 
		return res;
	}, 
	uni_request(url,param,method,again_quest=true) {
		const that=this
		let auth_token=''
		if(uni.getStorageSync("auth_token")){
			auth_token=uni.getStorageSync("auth_token")
		}
		var header={'content-type': 'application/json'}
		header['Authori-zation'] = 'Bearer ' + auth_token
	    return new Promise((cback, reject) => {
	    	uni.request({
	    		url: Api_url + url,
	    		data: param,
	    		method:method,
	    		header:header,
	    	}).then(res => { //data为一个数组，数组第一项为错误信息，第二项为返回数据
				var data2 = res[1].data
			    var status = data2.status
				var msg = data2.msg
				var data = data2.data
	    		var res_code = status.toString()
	    		if (res_code.charAt(0) == 2) { 
	    			if(res_code==200){
	    				console.log('200',url)
	    				cback(data); 
	    			}else{
						console.log('201',url)
						uni.showToast({
							title:msg,
							icon:'none'
						})
					}
				}else{
					if(res_code==410000){
						uni.showModal({
						    title: '微信提示',
						    content: '选择登录，更多服务',
						    success: function (res) {
						        if (res.confirm) {
						            uni.navigateTo({
										url:'/pages/user/user'
										// console.log
						            })
						        } else if (res.cancel) {
						            console.log('用户点击取消');
						        }
						    }
						});
						// console.log('401',url) 
						cback(401)
					}else{
						console.log('400/500',url,status,msg)
						uni.showToast({
							title:msg?msg:'请求异常',
							icon:'none'
						})
					}
				}	
			}).catch(err => { 
				console.log('catch:',err);					 
			})
		})	
	}, 

}
