<template>
  <view>
	<view class="tui-header-box">
			<view class="tui-header" :style="{width:width+'px',height:height+'px'}">
				<view class="tui-back" :style="{marginTop:arrowTop+'px'}" @tap="back">
					<tui-icon name="arrowleft" color="#000"></tui-icon>
				</view>
				<view class="tui-searchbox tui-search-mr" :style="{marginTop:inputTop+'px'}" @tap="search">
					<!-- #ifdef APP-PLUS || MP -->
					<icon type="search" :size='13' color='#999'></icon>
					<!-- #endif -->
					<text class="tui-search-text" v-if="!searchKey">搜索商品</text>
					<view class="tui-search-key" v-if="searchKey">
						<view class="tui-key-text">{{searchKey}}</view>
						<tui-icon name="shut" :size='12' color='#fff'></tui-icon>
					</view>
				</view>
			</view>
		</view>
  </view>
</template>

<script>
import tuiIcon from "@/components/icon/icon"
	import tuiDrawer from "@/components/drawer/drawer"
	import tuiLoadmore from "@/components/loadmore/loadmore"
	import tuiNomore from "@/components/nomore/nomore"
	import tuiTopDropdown from "@/components/top-dropdown/top-dropdown"
	export default {
		components: {
			tuiIcon,
			tuiDrawer,
			tuiLoadmore,
			tuiNomore,
			tuiTopDropdown
		},

}
</script>

<style>

</style>