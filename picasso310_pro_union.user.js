// ==UserScript==
// @name              【PRO版本】💥全网VIP视频免费破解去广告、Fuck链接中间跳转页(直接跳转)、B站哔哩哔哩使用增强、知乎使用增强等多合一纯净脚本
// @name:zh           【PRO版本】💥全网VIP视频免费破解去广告、Fuck链接中间跳转页(直接跳转)、B站哔哩哔哩使用增强、知乎使用增强等多合一纯净脚本
// @name:zh-TW        【PRO版本】💥全網VIP視頻免費破解去廣告、Fuck連結中間跳轉頁(直接跳轉)、B站嗶哩嗶哩使用增強、知乎使用增強等多合一純淨指令碼或直譯式程式
// @namespace         picasso310_haha_script_001
// @version           1.0.1
// @description       👉️脚本功能介绍：👈️【1】全网VIP视频免费破解去广告，移动端+PC：支持爱奇艺、腾讯、芒果、优酷、哔哩哔哩等；【2】B站哔哩哔哩使用增强、番剧大会员VIP视频解析、视频下载(支持多P下载)、一键三联、浏览记录提醒；【3】知乎使用增强：外链接直接跳出、问题,回答时间标注、短视频下载方便保存等；【4】Fuck链接中间跳转页(直接跳转)，需要更多网址适配请留言；【5】搜索引擎功能增强,百度添加网址显示，google结果新标签页打开灯,导航可自定义网址；脚本功能可独立开关，按需使用。长期维护更新，请放心使用！
// @description:zh    👉️脚本功能介绍：👈️【1】全网VIP视频免费破解去广告，移动端+PC：支持爱奇艺、腾讯、芒果、优酷、哔哩哔哩等；【2】B站哔哩哔哩使用增强、番剧大会员VIP视频解析、视频下载(支持多P下载)、一键三联、浏览记录提醒；【3】知乎使用增强：外链接直接跳出、问题,回答时间标注、短视频下载方便保存等；【4】Fuck链接中间跳转页(直接跳转)，需要更多网址适配请留言；【5】搜索引擎功能增强,百度添加网址显示，google结果新标签页打开灯,导航可自定义网址；脚本功能可独立开关，按需使用。长期维护更新，请放心使用！
// @description:zh-TW 👉️指令碼或直譯式程式功能介紹：👈️【1】全網VIP視頻免費破解去廣告，移動端+PC：支援愛奇藝、騰訊、芒果、優酷、嗶哩嗶哩等；【2】B站嗶哩嗶哩使用增強、番劇大會員VIP視頻解析、視頻下載(支援多P下載)、一鍵三聯、瀏覽記錄提醒；【3】知乎使用增強：外連結直接跳出、問題,回答時間標註、短視頻下載方便保存等；【4】Fuck連結中間跳轉頁(直接跳轉)，需要更多網址適配請留言；【5】搜索引擎功能增強,百度添加網址顯示，google結果新標籤頁開啟燈,導航可自定義網址；指令碼或直譯式程式功能可獨立開關，按需使用。長期維護更新，請放心使用！
// @icon              data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABnJJREFUaEPtWVtsFFUY/me3s5fSbemFFDQlRYxCUVAhKBChhJYQbSqoiZcHuSS8iJfWGOODZkt8MDEhkCiJF1QiifKiBIMvlkubquAdL1GiWUKhIJfS3bLdbvcyM+af6dk9c+acuewWExJPQujMnDnzff///d+5rAQ3eJNucPzwPwGSwS9eyByomyE/hNeBkGQJTHZCw0daOqVeG40rZzbsDt41FdkvKwMENA+wCFwuq0EyruiPryWUwUxKTTy5r7JkMiURKAU4TWjkUt7E78r53C+ZnNS1eX+4z2tWPBEoFzgBxxLITGhw9WIeshm1f+uBqlYvJFwTQPAzmwLrvQwu6osSQinR7cKZnH6p5LTElk+n1br9jisCR1/JJ2rq/TVuB3XqxyOAGcBMYEsmVMjltdXdhyOOknIkMNXgEWA6pUJ6TDXxJDLCm/mcppPQJHAkYUvgeoB3Q4BkAYl0HYnYYhQ+9Kr5unkA1c0AlY1GYEOUiifiAKOnjfvnB0C3UbYG8BmpAzoLANDXdSSyWiRLIYEfd2rmKhOM0LzOAE0DZruOXwKg5/zURYBsSoM/PzfmA9JoAnQWNAm2dx+O9PAgcAm4kQ4Cx6g7NRY82//CDxqcGTCI0IWM1xPjml4v2ET1wCXgFP2WjfYRJyCdwJN+8ZiRDZYAKebJflwpWQjYRR8jjpF309yCp0l89W6mYKWF+1eKMuNlwUJAFP3rCZ6AHT0L0LsjbYoP2ilmQpQFEwE75/Eqm1zK+KQ8zU2+ANIjALiGHT6twomPMoWXGAIWWzUREMnHa8H+8y3AaKwI/Ob7ASJNYiIEPOlBk2AJsDIyEeDJxyv45DnD69k2azlATbP1Pgue9DjUY0iJdqJJNzJZqiOBe7qcJUAX7KmP+f3lGSrMbfeZHorAYyeSBTYD7MRWIMDTv5vo0+BR97GDnChPrn2Wd1cUHtqBJ52+eT8Dg7/l6SLGRyY7LYsAzyrZDJCF2/xOP9TONT7nBjz2O/ezAn17zK6E9+n1UYEAr4Dt5CPyeboG6O0jib5b8Ag0NazBZ9FJO6MSyyXASshOPgS8yCqRhKYCXPnLWAY0LfNBoKoY+fyEgcYvA0h++xrbt23M0qEsAgR8qVZ59W8NBr8uzq6zV/qg4RZzcRPEag6g9800XI6ZF31cAp9sGn/rtkXhbeRlXgYIeJFVivy+MEmd0uDsiSIYdJhkQoH7ngpaSCB4JQtw9B2XBD58PN268N7QMREBJ6vEYsX9gJ1V/rS3eBpBwOP35iytgAUPyAWpEPB4g0OA70LY+fjrqkrOeOilg8gqyaaEnPPgGCKrRN3/ut8gQG8f8bq+2QfLNgX1ZzR4vP69N6v/I43dG5gmsv6oovhl8FXIEtzaIUF9CwDPbb7fbciA3VU5WSVmgAWP4yzsCMDsJX4LeF4GbAlgHTTMlPU6WPiEH6oaJdNOikSBrN9Ze3CyytEhDQb2TFoQ9fKDr4Z110LNs42VELtHtiyne1821q6Nd/gseqYHRxLYRk4b/7u1yvG4BsMxFZKXVaie5YOmu/mRJ9/a/1LRRnlbSwuBQ89nc8GwpM/5tJ6tsbHeIW5DWyVK5vZ1fqhrFlslL/I4OtonZkCkf7xvIYAyikyv2BYMSbBka4U+AblprFUi8LGEUthh2VmlaHy6gEUbe+6e+INHUvHKiG/63BUytHQ6TJXM2ub42zkTcALOzipFBJzkw80A3tzZlmyta/Drc0LHayEIVYvPlui1TXZcgy/fsBYpAdjRE9b/ZK2SR8BN9IUE8MF7G8b6AkHfqsWPBWDOcn4WeAszshFhQdlZJY8AHX270znbY7udbcmeykpf9NEdYUsWRKtKdk9LwNlZJUuAib7t+ajj4e6uNcljTQvk1vYXg+A3JkvH9bxXq6QJ0M5jdyJH3nEkMFkTPQvWyNEVW4KO4HlycKN51jbdgLetARYIyqnt6XD0phZnV6LfLRG847G6pwyQzkhi/io5uuThoONGxK3bkLFR9/ELysmhP5RuNz9slESAJrL2mXB05jxxNtxGHsccGVITw4PK9pXPBXaJ5gTRfVc1IHr5UE96751tgY3Tan2mjLgFjwU7kdL6l26WPf2wR+MpiwCdkfZnK9dH6mGRpkgQqhIPi9GOfZc9WNPoP1lKxNlgTgkBTsHrEV3caf41fioA/ycEvOq4nP7XJQPlAPL67r/mT91eTVdqmwAAAABJRU5ErkJggg==
// @include           *://wenku.baidu.com/*
// @include           *://*.youku.com/v_*
// @include           *://*.iqiyi.com/v_*
// @include           *://*.iqiyi.com/w_*
// @include           *://*.iqiyi.com/a_*
// @include           *://*.le.com/ptv/vplay/*
// @include           *://v.qq.com/x/cover/*
// @include           *://v.qq.com/x/page/*
// @include           *://v.qq.com/tv/*
// @include           *://*.tudou.com/listplay/*
// @include           *://*.tudou.com/albumplay/*
// @include           *://*.tudou.com/programs/view/*
// @include           *://*.mgtv.com/b/*
// @include           *://film.sohu.com/album/*
// @include           *://tv.sohu.com/v/*
// @include           *://*.bilibili.com/video/*
// @include           *://*.baofeng.com/play/*
// @include           *://vip.pptv.com/show/*
// @include           *://v.pptv.com/show/*
// @include           *://www.le.com/ptv/vplay/*
// @include           *://www.wasu.cn/Play/show/*
// @include           *://m.v.qq.com/x/cover/*
// @include           *://m.v.qq.com/x/page/*
// @include           *://m.v.qq.com/*
// @include           *://m.iqiyi.com/v_*
// @include           *://m.iqiyi.com/w_*
// @include           *://m.iqiyi.com/a_*
// @include           *://m.youku.com/alipay_video/*
// @include           *://https://m.youku.com/video/id_*
// @include           *://m.mgtv.com/b/*
// @include           *://m.tv.sohu.com/v/*
// @include           *://m.film.sohu.com/album/*
// @include           *://m.le.com/ptv/vplay/*
// @include           *://m.pptv.com/show/*
// @include           *://m.acfun.cn/v/*
// @include           *://m.bilibili.com/video/*
// @include           *://m.bilibili.com/anime/*
// @include           *://m.bilibili.com/bangumi/play/*
// @include           *://m.wasu.cn/Play/show/*
// @include           *://*.zhihu.com/*
// @include	          *://www.bilibili.com/**
// @include           *://search.bilibili.com/**
// @include           *://space.bilibili.com/**
// @include           *://www.baidu.com/*
// @include           *://www.so.com/s*
// @include           *://www.sogou.com/web*
// @include           *://www.sogou.com/sogou*
// @include           *://cn.bing.com/search*
// @include           *://www.bing.com/search*
// @include           *://www4.bing.com/search*
// @include           *://so.toutiao.com/search*
// @include           *://www.google.com/search*
// @include           *://www.google.com.hk/search*
// @include           *://*.taobao.com/*
// @include           *://*.tmall.com/*
// @include           *://*.tmall.hk/*
// @include           *://*.liangxinyao.com/*
// @include           *://chaoshi.detail.tmall.com/*
// @include           *://pages.tmall.com/wow/an/cs/search**
// @include           *://*.jd.com/*
// @include           *://*.jd.hk/*
// @include           *://item.jkcsjd.com/*
// @include           *://*.yiyaojd.com/*
// @include           *://www.vipglobal.hk
// @include           *://*.vip.com/*
// @include           *://detail.vip.com/detail-*
// @include           *://www.vipglobal.hk/detail-*
// @include           *://category.vip.com/suggest.php**
// @include           *://list.vip.com/*.html
// @exclude           *://jianghu.taobao.com/*
// @exclude           *://login.taobao.com/*
// @exclude           *://uland.taobao.com/*
// @exclude           *://map.taobao.com/*
// @exclude           *://creator.guanghe.taobao.com/*
// @exclude           *://myseller.taobao.com/*
// @exclude           *://qn.taobao.com/*
// @exclude           *://jingfen.jd.com/*
// @exclude           *://passport.jd.com/*
// @exclude           *://jmw.jd.com/*
// @exclude           *://passport.shop.jd.com/*
// @exclude           *://passport.vip.com/*
// @exclude           *://huodong.taobao.com/wow/z/guang/gg_publish/*
// @exclude           *://loginmyseller.taobao.com/*
// @include        *://c.pc.qq.com/*
// @include        *://iphone.myzaker.com/zaker/link.php?*
// @include        *://link.zhihu.com/?*
// @include        *://t.cn/*
// @include        *://www.360doc.cn/outlink.html?url=*
// @include        *://redir.yy.duowan.com/warning.php?url=*
// @include        *://www.360doc.com/content/*
// @include        *://afdian.net/link?target=*
// @include        *://bbs.nga.cn/read.php?*
// @include        *://blog.51cto.com/transfer?*
// @include        *://cloud.tencent.com/developer/tools/blog-entry?target=*
// @include        *://developers.weixin.qq.com/community/middlepage/href?href=*
// @include        *://docs.qq.com/scenario/link.html?u=*
// @include        *://docs.qq.com/scenario/link.html?url=*
// @include        *://game.bilibili.com/linkfilter/?url=*
// @include        *://gitee.com/link?target=*
// @include        *://hd.nowcoder.com/link.html?target=*
// @include        *://jump2.bdimg.com/safecheck/index?url=*
// @include        *://leetcode.cn/link/?target=*
// @include        *://link.csdn.net/?target=*
// @include        *://link.juejin.cn/?target=*
// @include        *://link.ld246.com/forward?goto=*
// @include        *://link.logonews.cn/?*
// @include        *://link.uisdc.com/?redirect=*
// @include        *://mail.qq.com/cgi-bin/readtemplate*
// @include        *://mp.weixin.qq.com/s/*
// @include        *://nga.178.com/read.php?*
// @include        *://ref.gamer.com.tw/redir.php/url=*
// @include        *://shimo.im/outlink/black?url=*
// @include        *://sspai.com/link?target=*
// @include        *://steamcommunity.com/linkfilter/?url=*
// @include        *://steamcommunity.com/linkfilter/?u=*
// @include        *://t.me/iv?url=*
// @include        *://tieba.baidu.com/mo/q/checkurl?url=*
// @include        *://weibo.cn/sinaurl?*
// @include        *://weixin110.qq.com/cgi-bin/mmspamsupport-bin/newredirectconfirmcgi*
// @include        *://www.bookmarkearth.com/view/*
// @include        *://www.chinaz.com/go.shtml?url=*
// @include        *://www.coolapk.com/link?url=*
// @include        *://www.curseforge.com/linkout?remoteUrl=*
// @include        *://www.douban.com/link2/?url=*
// @include        *://www.instagram.com/linkshim/?u=*
// @include        *://www.jianshu.com/go-wild?*
// @include        *://www.kookapp.cn/go-wild.html?url=*
// @include        *://www.linkedin.com/safety/go?url=*
// @include        *://www.mcbbs.net/plugin.php?id=link_redirect&target=*
// @include        *://www.nodeseek.com/jump?to=*
// @include        *://www.oschina.net/action/GoToLink?url=*
// @include        *://www.pixiv.net/jump.php?*
// @include        *://www.qcc.com/web/transfer-link?link=*
// @include        *://www.tianyancha.com/security?target=*
// @include        *://www.yuque.com/r/goto?url=*
// @include        *://*.infoq.cn/link?target=*
// @include        *://www.baike.com/redirect_link?url=*
// @include        *://www.youtube.com/redirect?*
// @exclude      *://mp.weixin.qq.com/cgi-bin/*
// @connect           bilibili.com
// @connect           sct.staticj.top
// @connect			  t.mimixiaoke.com
// @grant             GM_xmlhttpRequest
// @grant             GM_getResourceText
// @grant             GM_getValue
// @grant             GM_setValue
// @grant             GM_openInTab
// @grant             GM_download
// @grant             GM_info
// @grant             GM_addStyle
// @grant         	  GM_registerMenuCommand
// @require           https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.2.1/jquery.min.js
// @require           https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery.qrcode/1.0/jquery.qrcode.min.js
// @require           https://greasyfork.org/scripts/454236-findandreplacedomtext-huahuacat/code/findAndReplaceDOMText-huahuacat.js?version=1112990
// @charset	     	  UTF-8
// @license           AGPL License
// @downloadURL       https://api.staticj.top/script/update/picasso310_pro_union.user.js
// @updateURL  		  https://api.staticj.top/script/update/picasso310_pro_union.user.js
// @original-script   https://greasyfork.org/zh-CN/scripts/469407
// @original-author   huahuacat
// @original-license  AGPL License
// @original-changes  已经获得原作者的完全授权，在源码使用处也做了相应版权说明，特此申明
// @run-at            document-idle
// ==/UserScript==
(function () {
	'use strict';
	/**
 * 脚本遵循AGPL License开源协议；在协议允许的范围类，可以自由修改
 * 开完万岁！！
 */
	//共有方法，全局共享
function CommonFunction(){
	this.GMgetValue = function (name, value=null) {
		let storageValue = value;
		if (typeof GM_getValue === "function") {
			storageValue = GM_getValue(name, value);
		} else if(typeof GM.setValue === "function"){
			storageValue = GM.getValue(name, value);
		}else{
			var arr = window.localStorage.getItem(name);
			if(arr != null){
				storageValue = arr
			}
		}
		return storageValue;
	};
	this.GMsetValue = function(name, value){
		if (typeof GM_setValue === "function") {
			GM_setValue(name, value);
		} else if(typeof GM.setValue === "function"){
			GM.setValue(name, value);
		}else{
			window.localStorage.setItem(name, value)
		}
	};
	this.GMaddStyle = function(css){
		var myStyle = document.createElement('style');
		myStyle.textContent = css;
		var doc = document.head || document.documentElement;
		doc.appendChild(myStyle);
	};
	this.GMopenInTab = function(url, options={"active":true, "insert":true, "setParent":true}){
		if (typeof GM_openInTab === "function") {
			GM_openInTab(url, options);
		} else {
			GM.openInTab(url, options);
		}
	};
	this.addScript = function(url){
		var s = document.createElement('script');
		s.setAttribute('src',url);
		document.body.appendChild(s);
	};
	this.randomNumber = function(){
		return Math.ceil(Math.random()*100000000);
	};
	this.request = function(mothed, url, param){   //网络请求
		return new Promise(function(resolve, reject){
			GM_xmlhttpRequest({
				url: url,
				method: mothed,
				data:param,
				onload: function(response) {
					var status = response.status;
					var playurl = "";
					if(status==200||status=='200'){
						var responseText = response.responseText;
						resolve({"result":"success", "data":responseText});
					}else{
						reject({"result":"error", "data":null});
					}
				}
			});
		})
	};
	this.addCommonHtmlCss = function(){
		var cssText = 
			`
			@keyframes fadeIn {
				0%    {opacity: 0}
				100%  {opacity: 1}
			}
			@-webkit-keyframes fadeIn {
				0%    {opacity: 0}
				100%  {opacity: 1}
			}
			@-moz-keyframes fadeIn {
				0%    {opacity: 0}
				100%  {opacity: 1}
			}
			@-o-keyframes fadeIn {
				0%    {opacity: 0}
				100%  {opacity: 1}
			}
			@-ms-keyframes fadeIn {
				0%    {opacity: 0}
				100%  {opacity: 1}
			}
			@keyframes fadeOut {
				0%    {opacity: 1}
				100%  {opacity: 0}
			}
			@-webkit-keyframes fadeOut {
				0%    {opacity: 1}
				100%  {opacity: 0}
			}
			@-moz-keyframes fadeOut {
				0%    {opacity: 1}
				100%  {opacity: 0}
			}
			@-o-keyframes fadeOut {
				0%    {opacity: 1}
				100%  {opacity: 0}
			}
			@-ms-keyframes fadeOut {
				0%    {opacity: 1}
				100%  {opacity: 0}
			}
			.web-toast-kkli9{
				position: fixed;
				background: rgba(0, 0, 0, 0.7);
				color: #fff;
				font-size: 14px;
				line-height: 1;
				padding:10px;
				border-radius: 3px;
				left: 50%;
				transform: translateX(-50%);
				-webkit-transform: translateX(-50%);
				-moz-transform: translateX(-50%);
				-o-transform: translateX(-50%);
				-ms-transform: translateX(-50%);
				z-index: 999999999999999999999999999;
				white-space: nowrap;
			}
			.fadeOut{
				animation: fadeOut .5s;
			}
			.fadeIn{
				animation:fadeIn .5s;
			}
			`;
		this.GMaddStyle(cssText);
	};
	this.webToast = function(params) {	//小提示框
		var time = params.time;
		var background = params.background;
		var color = params.color;
		var position = params.position;  //center-top, center-bottom
		var defaultMarginValue = 50;
		
		if(time == undefined || time == ''){
			time = 1500;
		}
		
		var el = document.createElement("div");
		el.setAttribute("class", "web-toast-kkli9");
		el.innerHTML = params.message;
		//背景颜色
		if(background!=undefined && background!=''){
			el.style.backgroundColor=background;
		}
		//字体颜色
		if(color!=undefined && color!=''){
			el.style.color=color;
		}
		
		//显示位置
		if(position==undefined || position==''){
			position = "center-bottom";
		}
		
		//设置显示位置，当前有种两种形式
		if(position==="center-bottom"){
			el.style.bottom = defaultMarginValue+"px"; 
		}else{
			el.style.top = defaultMarginValue+"px"; 
		}
		el.style.zIndex=999999;
		
		document.body.appendChild(el);
		el.classList.add("fadeIn");
		setTimeout(function () {
			el.classList.remove("fadeIn");
			el.classList.add("fadeOut");
			/*监听动画结束，移除提示信息元素*/
			el.addEventListener("animationend", function () {
				document.body.removeChild(el);
			});
			el.addEventListener("webkitAnimationEnd", function () {
				document.body.removeChild(el);
			});
		}, time);
	};
	this.filterStr = function(str){
		if(!str) return "";
		str = str.replace(/\t/g,"");
		str = str.replace(/\r/g,"");
		return encodeURIComponent(str)
	};
	this.getParamterQueryUrl = function(text, tag) { //查询GET请求url中的参数
		if(text.indexOf("?")!=-1){ //选取?后面的字符串,兼容window.location.search，前面的?不能去掉
			var textArray = text.split("?");
			text = "?"+textArray[textArray.length-1];
		}
		var t = new RegExp("(^|&)" + tag + "=([^&]*)(&|$)");
		var a = text.substr(1).match(t);
		if (a != null){
			return a[2];
		}
		return "";
	};
	this.getEndHtmlIdByUrl = function(url) { //获得以html结束的ID
		if(url.indexOf("?")!=-1){
			url = url.split("?")[0]
		}
		if(url.indexOf("#")!=-1){
			url = url.split("#")[0]
		}
		var splitText = url.split("/");
		var idText = splitText[splitText.length-1];
		idText = idText.replace(".html","");
		return idText;
	};
	this.isPC = function(){
		var userAgentInfo = navigator.userAgent;
		var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone", "iPad", "iPod"];
		var flag = true;
		for (var v = 0; v < Agents.length; v++) {
			if (userAgentInfo.indexOf(Agents[v]) > 0) {
				flag = false;
				break;
			}
		}
		return flag;
	};
	this.getBilibiliBV=function(){
		var pathname = window.location.pathname;
		var bv = pathname.replace("/video/","").replace("/","");
		return bv;
	};
	this.getSystemOS=function(){
		var u = navigator.userAgent;
		if (!!u.match(/compatible/i) || u.match(/Windows/i)) {
			return 'windows';
		} else if (!!u.match(/Macintosh/i) || u.match(/MacIntel/i)) {
			return 'macOS';
		} else if (!!u.match(/iphone/i) || u.match(/Ipad/i)) {
			return 'ios';
		} else if (!!u.match(/android/i)) {
			return 'android';
		} else {
			return 'other';
		}
	};
	this.RPCDownloadFile = function(fileName, url, savePath="D:/", RPCURL="ws://localhost:16800/jsonrpc", RPCToken="") {		
		const self = this;
		if(!savePath){
			savePath = "D:/";
		}
		if(!RPCURL){
			RPCURL = "ws://localhost:16800/jsonrpc";
		}
		let options = { //下载配置文件
			"dir":savePath,
			"max-connection-per-server": "16",
			"header":["User-Agent:"+navigator.userAgent+"", "Cookie:"+document.cookie+"", "Referer:"+window.location.href+""]
		}
		if(!!fileName) {
			options.out = fileName;
		}
		let jsonRPC = {
			"jsonrpc": "2.0",
			"id": "huahuacat",
			"method": "aria2.addUri",
			"params": [[url], options],
		}
		if (!!RPCToken) {
			jsonRPC.params.unshift("token:" + RPCToken); // 必须要加在第一个
		}
		return new Promise(function(resolve, reject) {
			var webSocket = new WebSocket(RPCURL);
			webSocket.onerror = function(event) {
				console.log("webSocket.onerror", event);
				reject("Aria2连接错误，请打开Aria2和检查RPC设置！");
			}
			webSocket.onopen = function(){
				webSocket.send(JSON.stringify(jsonRPC));
			}
			webSocket.onmessage = function(event){
				let result = JSON.parse(event.data);
				switch (result.method) {
					case "aria2.onDownloadStart":
						resolve("Aria2 开始下载【"+fileName+"】");
						webSocket.close();
						break;
					case "aria2.onDownloadComplete":
						break;
					default:
						break;
				}
			}
		});
	};
	this.getElementObject = function(selector, allowEmpty = true, delay=10, maxDelay=2000){
		return new Promise((resolve,reject) =>{
			let totalDelay = 0;
			let element = document.querySelector(selector);
			let result = allowEmpty ? !!element : (!!element && !!element.innerHTML);
			if(result){
				resolve(element);
			}
			let elementInterval = setInterval(()=>{
				if(totalDelay >= maxDelay){ //总共检查2s，如果还是没找到，则返回
					clearInterval(elementInterval);
					resolve(null);
				}
				element = document.querySelector(selector);
				result = allowEmpty ? !!element : (!!element && !!element.innerHTML);
				if(result){
					clearInterval(elementInterval);
					resolve(element);
				}else{
					totalDelay += delay;
				}
			}, delay);
		});
	};
	/**
	 * @param {Object} time
	 * @param {Object} format
	 * 时间格式化
	 * DateFormat(new Date(dateCreated), "yyyy-MM-dd hh:mm:ss")
	 */
	this.DateFormat = function(time, format) {
		var o = {
			"M+": time.getMonth() + 1, //月份 
			"d+": time.getDate(), //日 
			"h+": time.getHours(), //小时 
			"m+": time.getMinutes(), //分 
			"s+": time.getSeconds(), //秒 
			"q+": Math.floor((time.getMonth() + 3) / 3), //季度 
			"S": time.getMilliseconds() //毫秒 
		};
		if(/(y+)/.test(format)){
			format = format.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
		}
		for(var k in o){
			if(new RegExp("(" + k + ")").test(format)){
				format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
			}
		}
		return format;
	}
}
//全局弹窗对象
const popup = (function(){
	class Popup {
		constructor() {
			this.mask = document.createElement('div')
			this.setStyle(this.mask, {
				"width": '100%',
				"height": '100%',
				"backgroundColor": 'rgba(0, 0, 0, .6)',
				"position": 'fixed',
				"left": "0px",
				"top": "0px",
				"bottom":"0px",
				"right":"0px",
				"z-index":"99999"
			})
			// 创建中间显示内容的水平并垂直居中的div
			this.content = document.createElement('div')
			this.setStyle(this.content, {
				"max-width": '450px',
				"width":"100%",
				"max-height": '600px',
				"backgroundColor": '#fff',
				"boxShadow": '0 0 2px #999',
				"position": 'absolute',
				"left": '50%',
				"top": '50%',
				"transform": 'translate(-50%,-50%)',
				"borderRadius": '3px'
			})
			// 将这个小div放在遮罩中
			this.mask.appendChild(this.content)
		}
		middleBox(param) {
			// 先清空中间小div的内容 - 防止调用多次，出现混乱
			this.content.innerHTML = ''
			let title = '默认标题内容';
			// 检测参数类型
			if({}.toString.call(param) === '[object String]') {
				title = param
			} else if({}.toString.call(param) === '[object Object]') {
				title = param.title
			}
			// 将遮罩放在body中显示
			document.body.appendChild(this.mask)
			// 给中间的小div设置默认的排版
			// 上面标题部分
			this.title = document.createElement('div')
			// 设置样式
			this.setStyle(this.title, {
				"width": '100%',
				"height": '40px',
				"lineHeight": '40px',
				"boxSizing": 'border-box',
				"background-color":"#1a1a1a",
				"color": '#FFF',
				"text-align": 'center',
				"font-weight":"700",
				"font-size":"16px"
				
			})
			// 设置默认标题内容
			this.title.innerText = title
			// 将标题部分放在中间div中
			this.content.appendChild(this.title)
			// 关闭按钮
			this.closeBtn = document.createElement('div')
			// 设置内容
			this.closeBtn.innerText = '×'
			// 设置样式
			this.setStyle(this.closeBtn, {
				"textDecoration": 'none',
				"color": '#666',
				"position": 'absolute',
				"right": '10px',
				"top": '0px',
				"fontSize": '25px',
				"color": '#FFF',
				"display":"inline-block",
				"cursor":"pointer"
			})
			// 将关闭按钮放在中间小div中
			this.title.appendChild(this.closeBtn)
			this.closeBtn.onclick = () => this.close()
		}
		// 弹出提示框
		dialog(param) {
			this.middleBox(param);
			this.dialogContent = document.createElement('div')
			this.setStyle(this.dialogContent,{
				"padding":"15px",
				"max-height":"400px"
			})
			this.dialogContent.innerHTML = param.content;
			this.content.appendChild(this.dialogContent)
			param.onContentReady(this);
		}
		close() {
			document.body.removeChild(this.mask)
			window.location.reload();
		}
		setStyle(ele, styleObj) { // 设置样式的函数
			for(let attr in styleObj){
				ele.style[attr] = styleObj[attr]
			}
		}
	}
	let popup = null;
	return (function() {
		if(!popup) {
			popup = new Popup()
		}
		return popup;
	})()
})();
//全局统一方法对象
const commonFunctionObject = new CommonFunction(); 
commonFunctionObject.addCommonHtmlCss();	//统一html、css元素添加
let functionController = null;
	//相关功能关闭控制
functionController= commonFunctionObject.GMgetValue("setingData");
if(!functionController){
	functionController={
		"bilibiliHelper":true,
		"zhihuHelper":true,
		"superVideoHelper":true,
		"searchEnginesNavigation":true,
		"fuckLink":true
	}
}	
//用户功能设置函数
function usersSeting(){
	var bilibiliHelper=true, 
		superVideoHelper=true, 
		zhihuHelper=true,
		searchEnginesNavigation=true,
		fuckLink=true;
	var isUpdateStorage = false;
	if(!functionController.hasOwnProperty("bilibiliHelper")){
		functionController.bilibiliHelper = true;
		isUpdateStorage = true;
	}else{
		bilibiliHelper = functionController.bilibiliHelper;
	}
	if(!functionController.hasOwnProperty("superVideoHelper")){
		functionController.superVideoHelper = true;
		isUpdateStorage = true;
	}else{
		superVideoHelper = functionController.superVideoHelper;
	}
	if(!functionController.hasOwnProperty("zhihuHelper")){
		functionController.zhihuHelper = true;
		isUpdateStorage = true;
	}else{
		zhihuHelper = functionController.zhihuHelper;
	}
	if(!functionController.hasOwnProperty("searchEnginesNavigation")){
		functionController.searchEnginesNavigation = true;
		isUpdateStorage = true;
	}else{
		searchEnginesNavigation = functionController.searchEnginesNavigation;
	}
	if(!functionController.hasOwnProperty("fuckLink")){
		functionController.fuckLink = true;
		isUpdateStorage = true;
	}else{
		fuckLink = functionController.fuckLink;
	}
	if(isUpdateStorage){
		commonFunctionObject.GMsetValue("setingData",functionController);
	}
	var setingData=[
		{"tag":"bilibiliHelper", "name":"B站使用助手(视频下载可P、浏览记录、一件三联)", "checked":bilibiliHelper},
		{"tag":"zhihuHelper", "name":"知乎使用助手(内容标识、问答显示优化、视频下载等)", "checked":zhihuHelper},
		{"tag":"searchEnginesNavigation", "name":"搜索引擎使用加强(适配百度、360、搜狗、必应、Google等)", "checked":searchEnginesNavigation},
		{"tag":"superVideoHelper", "name":"全网VIP视频解析(支持爱奇艺、腾讯视频、B站番剧等)", "checked":superVideoHelper},
		{"tag":"fuckLink", "name":"Fuck链接中间跳转页，直接跳转", "checked":fuckLink}
	]
	var content = "";
	for(var i=0; i<setingData.length;i++){
		var one = setingData[i];
		content += `
			<div style="padding: 5px 0px;">
				<input style="display:inline-block;width: 15px;height: 15px;display: inline-block;vertical-align: middle; -webkit-appearance:checkbox;margin-bottom: 3px;cursor: pointer;" name="Checkbox" type="checkbox" data-tag="`+one.tag+`" `+(one.checked ? "checked" : "")+`>
				<label style="display:inline-block;font-size: 14px;margin:3px 0;vertical-align: middle;font-weight:500;color:#000;">`+one.name+`</label>
			</div>
		`
	}
	popup.dialog({
		"title":"功能开关",
		"content":content,
		"onContentReady":function($that){
			$that.dialogContent.querySelectorAll("input[type='checkbox']").forEach(function(checkbox){
				checkbox.addEventListener("click", function(e){
					var tag = e.target.getAttribute("data-tag");
					var checked = e.target.checked;
					functionController[tag] = checked;
					commonFunctionObject.GMsetValue("setingData",functionController);
					commonFunctionObject.webToast({"message":"操作成功", "background":"#FF6600"});
				});
			})
		}
	});
}

if(commonFunctionObject.isPC()){
	GM_registerMenuCommand("功能开关",()=>usersSeting());
}else{
	functionController.bilibiliHelper = false;
	functionController.searchEnginesNavigation = false;
	functionController.zhihuHelper = false;
}
	/**
 * 测试链接
 * https://my.oschina.net/lorryluMyRest/blog/731722
 * https://tieba.baidu.com/p/6313991324
 * https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2F0xFloyd
 * https://gitee.com/link?target=http%3A%2F%2Fwww.codeformat.cn
 * https://link.csdn.net/?target=https%3A%2F%2Fgithub.com%2F
 */

/**
 * 跳转规则部分源自于：Open-the-F-king-URL-Right-Now
 * 作者：OldPanda 
 * github地址：https://github.com/OldPanda/Open-the-F-king-URL-Right-Now
 * greasyfork地址：https://greasyfork.org/zh-CN/scripts/412612-open-the-f-king-url-right-now
 * 因此脚本继承原脚本协议标准，GPLv3 License
 */
function FuckLink(){
	this.currentUrl = window.location.href;
	this.fuckRules = {
		afdian: { match: 'https://afdian.net/link?target=', redirect: "target" },
		baike: { match: 'https://www.baike.com/redirect_link?url=', redirect: "url" },
		bookmarkearth: { match: 'https://www.bookmarkearth.com/view/', redirect: function () { window.location.replace(document.querySelector("p.link").innerHTML) } },
		chinaz: { match: 'https://www.chinaz.com/go.shtml?url=', redirect: "url" },
		coolapk: { match: 'https://www.coolapk.com/link?url=', redirect: "url" },
		csdn: { match: 'https://link.csdn.net/?target=', redirect: "target" },
		cto51: { match: 'https://blog.51cto.com/transfer?', redirect: function () { window.location.href = window.location.href.replace("https://blog.51cto.com/transfer?", "") } },
		curseforge: { match: 'https://www.curseforge.com/linkout?remoteUrl=', redirect: function () { window.location.replace(document.querySelector(".root-content a.button").href) } },
		dilian: { match: 'https://link.ld246.com/forward?goto=', redirect: "goto" },
		doc360_2: { match: 'http://www.360doc.cn/outlink.html?url=', redirect: "url" },
		doc360: { match: 'http://www.360doc.com/content/', redirect: function () { $("#articlecontent table tbody tr td#artContent").find("a").off("click") } },
		douban: { match: 'https://www.douban.com/link2/?url=', redirect: "url" },
		gamebilibili: { match: 'https://game.bilibili.com/linkfilter/?url=', redirect: "url" },
		gamertw: { match: 'https://ref.gamer.com.tw/redir.php/?url=', redirect: "url" },
		gitee: { match: 'https://gitee.com/link?target=', redirect: "target" },
		infoq: { match: 'https://(xie.infoq.cn/link|www.infoq.cn/link)?target=', redirect: "target", isRegex: true },
		instagram: { match: 'https://www.instagram.com/linkshim/?u=', redirect: "url" },
		jianshu: { match: 'https://www.jianshu.com/go-wild?', redirect: "url" },
		juejin: { match: 'https://link.juejin.cn/?target=', redirect: "target" },
		kook: { match: 'https://www.kookapp.cn/go-wild.html?url=', redirect: "url" },
		leetcode: { match: 'https://leetcode.cn/link/?target', redirect: "target" },
		linkedin: { match: 'https://www.linkedin.com/safety/go?url=', redirect: "url" },
		logonews: { match: 'https://link.logonews.cn/?', redirect: "url" },
		mcbbs: { match: 'https://www.mcbbs.net/plugin.php?id=link_redirect&target=', redirect: "target" },
		nga: { match: 'https://nga.178.com/read.php?', redirect: function () { $("#m_posts #m_posts_c a").prop("onclick", null).off("click") } },
		nga2: { match: 'https://bbs.nga.cn/read.php?', redirect: function () { $("#m_posts #m_posts_c a").prop("onclick", null).off("click") } },
		nodeseek: { match: 'https://www.nodeseek.com/jump?to=', redirect: "to" },
		nowcoder: { match: 'https://hd.nowcoder.com/link.html?target=', redirect: "target" },
		oschina: { match: 'https://www.oschina.net/action/GoToLink?url=', redirect: "url" },
		pixiv: { match: 'https://www.pixiv.net/jump.php?', redirect: function () { window.location.href = decodeURIComponent(curURL.match(/jump.php\?[url=]*(.*)/)[1].replace(/=$/, '')) } },
		qcc: { match: 'https://www.qcc.com/web/transfer-link?link=', redirect: "link" },
		qq: { match: 'https://c.pc.qq.com/(middleb|middlem|index).html', redirect: "pfurl", isRegex: true },
		qq2: { match: 'https://c.pc.qq.com/(ios|pc|android).html', redirect: "url", isRegex: true },
		qqdocs: { match: 'https://docs.qq.com/scenario/link.html?url=', redirect: "url" },
		qqmail: { match: 'https://mail.qq.com/cgi-bin/readtemplate', redirect: "gourl" },
		shimo: { match: 'https://shimo.im/outlink/black', redirect: "url" },
		sspai: { match: 'https://sspai.com/link?target=', redirect: "target" },
		steam: { match: 'https://steamcommunity.com/linkfilter/?url=', redirect: "url" },
		steam2: { match: 'https://steamcommunity.com/linkfilter/?u=', redirect: "u" },
		telegram: { match: 'https://t.me/iv?url=', redirect: "url" },
		tencentclouddev: { match: 'https://cloud.tencent.com/developer/tools/blog-entry?target=', redirect: "target" },
		tianyancha: { match: 'https://www.tianyancha.com/security?target=', redirect: "target" },
		tieba: { match: 'https://jump2.bdimg.com/safecheck/index?url=', redirect: function () { window.location.replace(document.getElementsByClassName('btn')[0].getAttribute('href')) } },
		tieba_2: { match: 'https://tieba.baidu.com/mo/q/checkurl?url=', redirect: "url" },
		uisdc: { match: 'https://link.uisdc.com/?redirect=', redirect: "redirect" },
		wechat2: { match: 'https://weixin110.qq.com/cgi-bin/mmspamsupport-bin/newredirectconfirmcgi', redirect: function () { window.location.replace($(".weui-msg__desc").first().text()) } },
		weibo_1: { match: 'https://t.cn/', redirect: function () { const link = $(".wrap .link").first().text() || document.querySelector('.open-url').children[0].href; window.location.replace(link); } }, // 微博网页版
		weibo_2: { match: 'https://weibo.cn/sinaurl?u', redirect: "u" },
		weibo_3: { match: 'https://weibo.cn/sinaurl?toasturl', redirect: "toasturl" },
		weibo_4: { match: 'https://weibo.cn/sinaurl?', redirect: function () { const link = $(".wrap .link").first().text() || document.querySelector('.open-url').children[0].href; window.location.replace(link); } },
		weixindev: { match: 'https://developers.weixin.qq.com/community/middlepage/href?href=', redirect: "href" },
		yuque: { match: 'https://www.yuque.com/r/goto?url=', redirect: "url" },
		youtube: { match: 'https://www.youtube.com/redirect?', redirect: "q" },
		yy: { match: 'http://redir.yy.duowan.com/warning.php?url=', redirect: "url" },
		zaker: { match: 'http://iphone.myzaker.com/zaker/link.php?', redirect: function () { redirect(curURL, "url", true) } },
		zhihu: { match: 'https://link.zhihu.com/?', redirect: "target" },
	};
	this.removeProtocol = function(str){
		return str.replace(/^https?\??:\/\//gm, '');
	};
	this.match = function(pattern, isRegex = false){
		var currentURLProto = this.removeProtocol(this.currentUrl);
		pattern = this.removeProtocol(pattern);
		
		if (isRegex) { //是否是正则匹配
			return currentURLProto.search(pattern) > -1;
		}else {
			return currentURLProto.indexOf(pattern) === 0;
		}
	};
	this.queryUrlParamter = function(text, tag) { //查询GET请求url中的参数
		if(text.indexOf("?")!=-1){ //选取?后面的字符串,兼容window.location.search，前面的?不能去掉
			var textArray = text.split("?");
			text = "?"+textArray[textArray.length-1];
		}
		var t = new RegExp("(^|&)" + tag + "=([^&]*)(&|$)");
		var a = text.substr(1).match(t);
		if (a != null){
			return a[2];
		}
		return "";
	};
	this.fuck = function(){
		for (var i in this.fuckRules) {
			var matchResult = this.match(this.fuckRules[i].match, this.fuckRules[i].isRegex);
			if(matchResult){
				var redirectType = typeof (this.fuckRules[i].redirect);
				var redirect = "";
				if(redirectType=="string"){
					redirect = decodeURIComponent(this.queryUrlParamter(this.currentUrl, this.fuckRules[i].redirect));
				}else if(redirectType=="function"){
					redirect = this.fuckRules[i].redirect()
				}
				if(!!redirect){
					window.location.href = redirect;
				}
				break;
			}
		}
	}
}
try{
	if(!functionController || functionController.fuckLink){
		(new FuckLink()).fuck();
	}
}catch(e){
	console.log("国外视频解析：error："+e);
}
	
/*
*	在“huahuacat”脚本的基础之上，做的二次开发，涉及到功能裁剪和添加，完全满足开源协议
*	脚本地址：https://greasyfork.org/zh-CN/scripts/469407
*	作者：huahuacat，代码已经授权
*/

//解析接口配置
//showType=1(仅PC), showType=2(仅mobile), showType=3(同时显示)
const originalInterfaceList = [
	
];

/**
 * 超级解析助手功能
 */
function superVideoHelper(originalInterfaceList){
	this.originalInterfaceList = originalInterfaceList;
	this.elementId = Math.ceil(Math.random()*100000000)+"7899";
	this.customInterfaceKey = "custom_interface_key_dddsdxxa";
	this.quicklyInterfaceKey = "custom_quickly_interface_key_dddsdxxa";
	this.defaultQuicklyInterfaceIndex = 1;
	this.isRun = function(){ //判断是否运行
		const host = window.location.host;
		const urls = ["www.iqiyi.com","v.qq.com","youku.com", "www.le.com","mgtv.com","sohu.com", "acfun.cn","bilibili.com","baofeng.com","pptv.com","1905.com","miguvideo.com"];
		var result = false;
		if(!host.startsWith("m.")){ //不是移动端执行
			for(var i=0; i<urls.length;i++){ //不是B站直接判断
				if(window.location.host.indexOf("bilibili.com")==-1){
					if(window.location.host.indexOf(urls[i])!=-1){
						result = true;
						break;
					}
				}else{
					if(window.location.href.indexOf("www.bilibili.com/bangumi/play")!=-1){ //是B站只有番剧才开启VIP解析
						result = true;
						break;
					}
				}
			}
		}
		return result;
	};
	this.showPlayerWindow = function(playObject){	//显示播放窗口
		var url = playObject.url + window.location.href;
		commonFunctionObject.GMopenInTab(url, false);
	};
	this.analysisCustomInterface = function(){ //自定义接口解析
		var customInterface = commonFunctionObject.GMgetValue(this.customInterfaceKey,"");
		if(!!customInterface){
			try{
				var customizeInterfaceList = new Array();
				var analysisArray = customInterface.split("\n");
				for(var i=0;i<analysisArray.length;i++){
					var onePiece = analysisArray[i];
					if(!!onePiece && onePiece.indexOf(",")!=-1){
						var onePieceArray = onePiece.split(","); 
						
						if(onePieceArray.length==2 && !!onePieceArray[0] && /(http|https):\/\/\S*/.test(onePieceArray[1])){
							customizeInterfaceList.push({"name":""+onePieceArray[0]+"","url":""+onePieceArray[1]+"", "showType":1});
						}
					}
				}
				this.originalInterfaceList = customizeInterfaceList.concat(this.originalInterfaceList);
			}catch(e){}
		}
	};
	this.getQuicklyInterfaceIndex = function(){
		var quicklyInterfaceIndexString = commonFunctionObject.GMgetValue(this.quicklyInterfaceKey,"")+"";
		var quicklyInterfaceIndex = this.defaultQuicklyInterfaceIndex;
		if(!!quicklyInterfaceIndexString){
			quicklyInterfaceIndex = parseInt(quicklyInterfaceIndexString);
		}
		if(this.originalInterfaceList.length-1<quicklyInterfaceIndex){
			quicklyInterfaceIndex = this.defaultQuicklyInterfaceIndex;
		}
		return quicklyInterfaceIndex;
	};
	this.addHtmlElements = function(){  //添加HTML
		const vipVideoImageBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAABgCAYAAABbjPFwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAaFSURBVHhe7ZwLbBVFFIb/W0AEDFTeLYK0VBKgUh6KFDEgtvJWQYMGRSEKmKoRIQoCRnyAYhREFC1orBowiiKmhooUJVJFBOSRAAEUKE95tRUCigL1HOYslIa9O3d39u69Sb9kszNnb5v5Z2fOnHncG4JQnoOmOIPHKdmXrnZ01WR7DFGCEArpviCUi6+VCWQiykdSoUNYQMlEzscBP9A1PDQXexLO13x8FZ65la45nEiQZhNPhbfoXz4aAxMowW0+PinHUBbAHTZeyWIBseZtIqEhC4hrYlvAlXUlYU9sCmiTBQybB2SPFYM9sSOgcRr5w4nAcxuBMcuA7o/Ig/AEK6A6+Y8uQ4GcxcBLO4C7pgLXtJeHegQjIO1mYMibwLTdwMPzgYw75UHkRE9A/RbAbWOA8T8DTxdR+kmgXlN56B5/BYQoVux0t6rlqTup1mcCqZny0Az+CGjZBRj0imrXo79Q7Tyhmjw0izkB9ZKAHjnKgzy7GugzAWjUSh76R6h8FIVEXmg/EOg4SDUVjYHHkXNngELq4MupuZUdEKM97gQ07wB0oEJzwZtdL0aPbF+hCr7xwmRLi8gEtB8A3DJK1boJTp9UNb1kGvDf32KMDD0BSW2Bwa+aK/jmpcC39P+41j2iJ2DCL0DKTZJxycljwNLX1GUQPS9Ut4kkXLB+EfBiBjC2ofHCM3oCVn0kCU3K9gOfjKQxgAay98g77d8kD8yjJyB/ConIk4wGO1YCv9MVBfQHsrwR5ObIY+hw433ApN+A3s+IwT+qTekMql5NtpD34PgmrTvdHbRXq0ETk2yg7e1AyV7gKMVCPuBuIGvVDeg3CUjvJwYNVrwDfEUTln+Oi8EM7gRYcEjMQq5qJAYHSvep/vTTB2LwjjcBTFIbJaLL/WLQYFM+sIiCvYNbxOAe7wIsMh8kIZNpbnudGDTgt/HNC5JxhzkBTL1kEkHtvOdjYtBgH03ivxyvHIQLzAqwyLhDNSue2OhSRP1i4diIO7k/Apgr6gB9qZ1zs9LlZAm9DRo7Iujk/gmwaN1DrffweKALR6v8NjQ6uf8CLLLHqWZV+2oxaMAdnDt6GPRDCa8sewOY0QtY+5kYzBA9AczeDcA8ipM4UjUUWkRXgEXR+8DMLODHXDG4JxgBzNFdwPxHgblDgD0UubokOAEW6xaqt+FytqYnYMDzwA1UU83Syb/XEqNBTpVSbESj8azewDbeAtZHz40OJFfGIipyaJvy0we3qvsR6pSlFPdzxOkFnmfwqh5f7LkcYiU9AVx4FqELexhLGLd1ntCU7lF3rm0dUigM4fmGwzjg/g24hd8Sizu2+1JhJXI/+698UI/oCwjH8UMkoviiIA4nHAjeC1WE1584guWF4qynxBie2BLgAn0Bqz5W6z1evYxh3EWjTVoDDVOABnTx/cKVCtSpLx8yAK/sOeBOQDh4M49Xs3myz4IqCqwR4SAYiIBwcCdlYU1FIF+8DdWgpXygEsYEtOikJt/nzorBB2olXhRlvcHZ/eWhPZGNAzzI7FwN7KKreI0KH478oT+6+kBkAuxgz8SiDm+/KIrDiWM0KPmMGQF2HCJBaz61j2da9/S8zeTvQMbu1okRNL542AQPfiTuOkztJTTvKIbIiI1Qgo/YTCYRmQ+JQZ/YioWG5wH3vC4ZPfQEfD8bmJ4JfEg1tORlYO3nwN71aqPaNLwANuY7+8GtEt5G4sRkoDF11HFh5rHhVtfYC9n9Lc8NeP2I9xLC4K0JaRzGcA2HHdd2low9sdUHXFAlIGiqBARNlYCgqRIQNFUCgsa7gBOHJREM3gUEvNToXQCfbeDtUzva9ZHEZahZWxLuMdMHeKPODj5v2usJyVQiksMgNpgR4HRU5t63gMHTL51lGdo08TYjq8gDuepctRPWOhDPxpx4dxCwYbFkLo+ZN8CsnCsJB7jgOoU/VQZsXSYZe8wJKF6nL0KHXxdoLRqYE8AsnwUc2CwZD5w4AhTOkEx4zArgfWE+++BVxOKJaoFYA7MCGEtEONcaDl6G4dMsmpjzQpej2wj1lUI+6esEe6d8KnyEq9X+CrDg79qk9wdSuwLJlb5/bXV+lw4gOgIqwht9fDi2eg21MPbXQXngjugLMIz5ThxlWMBplYxLTrMAAyNPYGxmAQUqHZcUhORHYbZSJt5+3aMM1dEmITQHf5IfGnreED+UcZm57BcOI8TBz/Ows+H+WkA1//b5igfwP4DBAodXyDR7AAAAAElFTkSuQmCC";
		const quicklyBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAv1JREFUWEfFl02IVWUYx39/EDdKoCiCGYquxNw404QL+wA/wIUfA5luMotk0jGoiDQFv1oMqCCOFkYQtopczKxMGsUUF2bNKsWFKBroJtLI2qjwl+dy7uV47jnnnntnygcOF97nfd7/777nfZ7nPeIZm8Zb3/ZsYBEwE5gFzAGmAX8lz9/AA0l7QnvcAGwvBd4E1gOTK/yxvQExZgDbbwHvAq9UEE1POSzpwzEB2D4KbG1TuD79G0nvdAxg+2egp0PxCBuS1NsRgG2PQbgeelbS0rYBbJ8DXisAuAdcB2Ykp7+M8ztJGyoD2H4J+AxYU7DqoKQP6j7b24AjJQQDknaUAtieDvQmz/KSxUYkNfltx07FjuVZv6RjhQC21wIHgHkV3vc2SZERTWb7d+CFHFevpKFcANvvA19UEK5PWSnphwKAS8DLGd8/wIuSbjcB2I4SubsN8Zj6iaSDBQB/AlMzvq8lvRdjTwEk5XSkTfHadEl5fyYOYRzGrC2TdOYpANvdwC+diKditgNXkxRcBSzLWe+CpFfr4w1q21eABZmAx8DFkrzvhHejpG/zAPqSbhaCtUfSv7YHgE87UcqJOSapPz1eqRDZ/h54Y4wQlyVls6H6fcD2r0BXpxB5h7QpC1otbjtq/ZRW8zL+nyS9XhTTqhR3SRpNB9u+k1y3qnAMS4qKWmhFlXAlsC/Z8lvAifodLlayPQysrkDQI6k0tfOKx0TgGjA3I7BO0sn6mO1DwEclED9KWtEKMg/gOLA5J/CupOczryN2aUlBneiTFGuVWrYUR6pFyhVZd86ZeARMyATcABZL+qMygO043eeBhQVBo5KiXDfM9iQgOlvWaq22lXj406X4c2BnQdDNaCqSTmUA4h2fzsRskfRlFfEGgO35QPTt53ICv0rEH2Z9tvcDu1LjtY+NquJpgLh8xCUkbb8B+9MnPwcgfUFttNhOANILxbfbIHBI0v2yxWx/DGwC3pYUpbptq52B5BYUPTryP2638fu/WKVu+F+SPAG7l/wh4NsJOQAAAABJRU5ErkJggg==";
		const currentHost = window.location.host;
		
		const quicklyInterfaceIndex = this.getQuicklyInterfaceIndex();
		var currentQuicklyInterfaceObject = null;
		
		var category_1_html = "";
		this.originalInterfaceList.forEach((item, index) => {
			if(item.showType != 2){
				var selected = ""
				if(index==quicklyInterfaceIndex){
					selected = "selected";
					currentQuicklyInterfaceObject =  item;
				}
				category_1_html += "<span title='"+item.name+"' data-index='"+index+"' class='"+selected+"'>" + item.name + "</span>";
			}
		});
		
		//获得自定义位置
		var left = 0;
		var top = 120;
		var Position = commonFunctionObject.GMgetValue("Position_" + currentHost);
		if(!!Position){
			left = Position.left;
			top = Position.top;
		}
		var color = "#FF6600";
		var hoverColor = "#ba4b09";
		var cssMould = `#vip_movie_box`+this.elementId+`{cursor:pointer; position:fixed; top:` + top + `px; left:` + left + `px; width:0px; z-index:99999999; font-size:16px; text-align:left;}
						#vip_movie_box`+this.elementId+` .img_box`+this.elementId+`{width:24px;text-align:center;}
						#vip_movie_box`+this.elementId+` .img_box`+this.elementId+`>img {width:100%; display:inline-block; vertical-align:middle;}
						#vip_movie_box`+this.elementId+` .img_box`+this.elementId+`:nth-child(2){
							background-color:#FF6600;
							border-radius:4px;
							margin-top:3px;
						}
						#vip_movie_box`+this.elementId+` .img_box`+this.elementId+`:nth-child(2)>img{
							width:22px!important;
						}
						
						#vip_movie_box`+this.elementId+` .showhide_box`+this.elementId+`{display:none;padding-left:5px;position: absolute;left: 24px;top: 0;}
						#vip_movie_box`+this.elementId+` .vip_mod_box_action_687ii{width:380px; max-height:400px; overflow-y:auto;background-color:rgba(241,241,241);}
						#vip_movie_box`+this.elementId+` .default-scrollbar-55678::-webkit-scrollbar{width:5px; height:1px;}
						#vip_movie_box`+this.elementId+` .default-scrollbar-55678::-webkit-scrollbar-thumb{box-shadow:inset 0 0 5px rgba(0, 0, 0, 0.2); background:#A8A8A8;}
						#vip_movie_box`+this.elementId+` .default-scrollbar-55678::-webkit-scrollbar-track{box-shadow:inset 0 0 5px rgba(0, 0, 0, 0.2); background:#F1F1F1;}
						
						#vip_movie_box`+this.elementId+` .vip_mod_box_action_687ii> .item_box`+this.elementId+`{margin-bottom:10px;}
						#vip_movie_box`+this.elementId+` .vip_mod_box_action_687ii> .item_box`+this.elementId+`:last-child{margin-bottom:0px;}
						#vip_movie_box`+this.elementId+` .vip_mod_box_action_687ii> .item_box`+this.elementId+` >.title`+this.elementId+`{font-size:14px; text-align:left;color:#000000;font-weight:600;margin:5px 3px;}
						#vip_movie_box`+this.elementId+` .vip_mod_box_action_687ii> .item_box`+this.elementId+` >.interface_box`+this.elementId+`{}
						#vip_movie_box`+this.elementId+` .vip_mod_box_action_687ii> .item_box`+this.elementId+` >.interface_box`+this.elementId+`>span{border-radius:3px;display:inline-block;width:calc(25% - 6px);width:-moz-calc(25% - 6px);width: -webkit-calc(25% - 6px);height:20px;line-height:20px;background-color:`+color+`;color:#FFF;cursor:pointer;margin:3px;text-align:center;overflow:hidden;white-space: nowrap;text-overflow: ellipsis;-o-text-overflow:ellipsis;font-size:12px!important;}							
						#vip_movie_box`+this.elementId+` .vip_mod_box_action_687ii> .item_box`+this.elementId+` >.interface_box`+this.elementId+`>span:hover{background:`+hoverColor+`}
						#vip_movie_box`+this.elementId+` .vip_mod_box_action_687ii> .item_box`+this.elementId+` >.interface_box`+this.elementId+`>span.selected{background:`+hoverColor+`}
						#vip_movie_box`+this.elementId+` .vip_mod_box_action_687ii> .item_box`+this.elementId+` >.content`+this.elementId+`{font-size:12px;color:#000000;margin-left:3px;}
						`
		commonFunctionObject.GMaddStyle(cssMould);
		
		//加入HTML
		var htmlMould = `<div id='vip_movie_box`+this.elementId+`'>
							<div class='plugin_inner_`+this.elementId+`'>
								<div class="img_box`+this.elementId+`" id="img_box_jump_6667897iio"><img src='`+ vipVideoImageBase64 +`' title='选择解析线路'/></div>
								<div class='showhide_box`+this.elementId+`'>									
									<div class='vip_mod_box_action_687ii default-scrollbar-55678'>
										<div class='item_box`+this.elementId+`'>
											<div class='title`+this.elementId+`'><b>接口添加</b></div>
											<div class='content`+this.elementId+`'>
												对现有接口不满意？可添加自定义接口哟~<span id="img_set_6667897iio" style="display:inline-block;border-radius:2px;margin-left:5px;padding:3px 5px;background-color:#CCC;cursor:pointer;">添加接口</span>
											</div>
											<div class='title`+this.elementId+`'>接口请自行添加~</div>
										</div>
										<div class='item_box`+this.elementId+`'>
											<div class='interface_box`+this.elementId+`'>
												` + category_1_html + `
											</div>
										</div>
										<div class='item_box`+this.elementId+`'>
											<div class='title`+this.elementId+`'><b>免责声明：</b></div>
											<div class='content`+this.elementId+`'>
												1、VIP视频解析中所用到的解析接口全部收集自互联网（源码可见），版权问题请联系相关解析接口所有者，脚本不承担相关责任！"<br>
												2、为创造良好的创作氛围，请大家支持正版！<br>
												3、脚本仅限个人学习交流，使用即已代表您已经充分了解相关问题，否则后果自负，特此声明！<br>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="img_box`+this.elementId+`" id="img_quickly_6667897iio"><img src='`+quicklyBase64+`' title='快速开始(当前所选接口：`+(currentQuicklyInterfaceObject==null ? '' : currentQuicklyInterfaceObject.name)+`)'/></div>
						</div>
						`;
		$("body").append(htmlMould);
	};
	this.runEvent = function(){	 //事件运行
		var that = this;
		$("#vip_movie_box"+this.elementId+" >.plugin_inner_"+this.elementId).on("mouseover", () => {
			$(".showhide_box"+this.elementId).show();
		});
		$("#vip_movie_box"+this.elementId+" >.plugin_inner_"+this.elementId).on("mouseout", () => {
			$(".showhide_box"+this.elementId).hide();
		});
		$("body").on("click","#vip_movie_box"+this.elementId+" .vip_mod_box_action_687ii>.item_box"+this.elementId+">.interface_box"+this.elementId+">span",function(){
			var index = parseInt($(this).attr("data-index"));
			var playObject = that.originalInterfaceList[index];
			that.showPlayerWindow(playObject);
			
			$("#vip_movie_box"+that.elementId+" .vip_mod_box_action_687ii> .item_box"+that.elementId+">.interface_box"+that.elementId+">span").removeClass("selected");
			$(this).addClass("selected");
			commonFunctionObject.GMsetValue(that.quicklyInterfaceKey, index);
			
			$("#img_quickly_6667897iio").find("img").attr("title","快速开始(当前所选接口："+playObject.name+")");
		});
				
		//点击弹出设置框
		$("#img_set_6667897iio").on("click", function(){
			that.showSetingDialog();
		});
		
		$("#img_quickly_6667897iio").on("click", function(){
			const quicklyInterfaceIndex = that.getQuicklyInterfaceIndex();
			var playObject = that.originalInterfaceList[quicklyInterfaceIndex];
			that.showPlayerWindow(playObject);
		});
		
		//右键移动位置
		var movie_box = $("#vip_movie_box"+this.elementId);
		movie_box.mousedown(function(e) {
			if (e.which == 3) {
				e.preventDefault()
				movie_box.css("cursor", "move");
				var positionDiv = $(this).offset();
				var distenceX = e.pageX - positionDiv.left;
				var distenceY = e.pageY - positionDiv.top;
				
				$(document).mousemove(function(e) {
					var x = e.pageX - distenceX;
					var y = e.pageY - distenceY;
					var windowWidth = $(window).width();
					var windowHeight = $(window).height();
					
					if (x < 0) {
						x = 0;
					} else if (x >  windowWidth- movie_box.outerWidth(true) - 100) {
						x = windowWidth - movie_box.outerWidth(true) - 100;
					}
					
					if (y < 0) {
						y = 0;
					} else if (y > windowHeight - movie_box.outerHeight(true)) {
						y = windowHeight - movie_box.outerHeight(true);
					}
					movie_box.css("left", x);
					movie_box.css("top", y);
					commonFunctionObject.GMsetValue("Position_" + window.location.host,{ "left":x, "top":y});
				});
				$(document).mouseup(function() {
					$(document).off('mousemove');
					movie_box.css("cursor", "pointer");
				});
				$(document).contextmenu(function(e) {
					e.preventDefault();
				})
			}
		});
	};
	this.removeVideoAdBlock_iqiyi = function(){
		
	},
	this.removeVideoAdBlock_vqq = function(){

	},
	this.removeVideoAdBlock_youku = function(){
		
	},
	this.removeVideoAdBlock_mgtv = function(){
		
	},
	this.removeVideoAdBlock_sohu = function(){
		
	},
	this.removeVideoAdBlock = function(){
		const currentHost = window.location.host;
		if(currentHost.indexOf("www.iqiyi.com")!=-1){
			this.removeVideoAdBlock_iqiyi();
		}else if(currentHost.indexOf("v.qq.com")!=-1){
			this.removeVideoAdBlock_vqq();
		}else if(currentHost.indexOf("v.youku.com")!=-1){
			this.removeVideoAdBlock_youku();
		}else if(currentHost.indexOf("www.mgtv.com")!=-1){
			this.removeVideoAdBlock_mgtv();
		}else if(currentHost.indexOf("tv.sohu.com")!=-1){
			this.removeVideoAdBlock_sohu();
		}
	};
	this.showSetingDialog = function(){
		const that = this;
		var customInterfaceKey = that.customInterfaceKey;
		var customInterface = commonFunctionObject.GMgetValue(customInterfaceKey, "");
		
		var content = `
			<div>
				<div style="font-size:14px;font-weight:700;color:#000;">自定义解析接口</div>
				<div style="font-size:13px;color:red;">					
					数据格式：[名字] + [,] + [接口地址]<br>
					例如：就是名字而已,https://xxxxx.com/jx/?url=<br>
					注：一行一个
				</div>
				<div style="margin-top:5px;height:200px;width:100%;">
					<textarea 
						placeholder="请严格按照格式填写，否则不生效"
						class="custom-interface-textarea"
						style="color:#000;font-size:14px;box-sizing: border-box;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;padding:5px;height:100%;width:100%;Overflow:auto;border:1px solid #ccc;resize:none;background-color:#FFF;outline:none;">`+customInterface+`</textarea>
				</div>
				<div style="text-align:center;margin-top:15px;">
					<button style="color:#FFF;background-color:#000;padding:5px 6px;border-radius:3px;cursor:pointer;" class="save-custom-interface-btn">保存自定义接口</button>
				</div>
			</div>
		`;
		popup.dialog({
			"title":"解析接口添加",
			"content":content,
			"onContentReady":function($that){
				var $saveCustomInterfaceBtn = $that.dialogContent.querySelector(".save-custom-interface-btn");
				$saveCustomInterfaceBtn.addEventListener("click", function(){
					var $customInterfaceTextarea = $that.dialogContent.querySelector(".custom-interface-textarea");
					var content = $customInterfaceTextarea.value;
					commonFunctionObject.GMsetValue(customInterfaceKey, content);
					commonFunctionObject.webToast({"message":"自定义接口保存成功", "background":"#FF6600"});
				});
			}
		})
	}
	this.start = function(){			
		let delayTimeMs = 0;
		if(window.location.host.indexOf("www.bilibili.com")!=-1){
			delayTimeMs = 2200;
		}
		setTimeout(()=>{
			try{
				this.removeVideoAdBlock();
			}catch(e){}
			try{
				this.analysisCustomInterface();
				this.addHtmlElements();
				this.runEvent();
			}catch(e){}
		}, delayTimeMs);
	};
};

/**
 * 移动端VIP解析
 * @param {Object} originalInterfaceList
 */
function superVideoHelperMobile(originalInterfaceList){
	this.originalInterfaceList = originalInterfaceList;
	this.elementId = Math.ceil(Math.random()*100000000)+"mmx";
	this.quicklyInterfaceKey = "custom_mobile_quickly_interface_key_dddsdxxa";
	this.defaultQuicklyInterfaceIndex = 2;
	this.playerNodes=[
		{"url":"m.iqiyi.com", "showNode":".m-video-player-wrap", "color":"#05B03B"},
		{"url":"m.v.qq.com", "showNode":".mod_player", "color":"#F99D39"},
		{"url":"m.youku.com", "showNode":".h5-detail-player", "color":"#08BAFD"},
		{"url":"m.mgtv.com", "showNode":".video-area", "color":"#E95904"}
	];
	this.isRun = function(){ //判断是否运行
		const host = window.location.host;
		const urls = ["m.iqiyi.com","m.v.qq.com","m.youku.com", "m.mgtv.com", "m.bilibili.com"];
		var result = false;
		if(host.startsWith("m.")){ //是移动端执行
			for(var i=0; i<urls.length; i++){
				if(host.indexOf(urls[i]) != -1){
					result = true;
					break;
				}
			}
		}
		return result;
	};
	this.getwindowElement = function(){
		var nodeObject = null;
		for(var i in this.playerNodes) { //获得窗口ID
			if (this.playerNodes[i].url == window.location.host) {
				nodeObject = this.playerNodes[i];
				break;
			}
		}
		return nodeObject;
	};
	this.getQuicklyInterfaceIndex = function(){
		var quicklyInterfaceIndexString = commonFunctionObject.GMgetValue(this.quicklyInterfaceKey,"")+"";
		var quicklyInterfaceIndex = this.defaultQuicklyInterfaceIndex;
		if(!!quicklyInterfaceIndexString){
			quicklyInterfaceIndex = parseInt(quicklyInterfaceIndexString);
		}
		if(this.originalInterfaceList.length-1<quicklyInterfaceIndex){
			quicklyInterfaceIndex = this.defaultQuicklyInterfaceIndex;
		}
		return quicklyInterfaceIndex;
	};
	this.addHtmlElements = function(){
		let nodeObject = this.getwindowElement();
		const quicklyInterfaceIndex = this.getQuicklyInterfaceIndex();
		if(!nodeObject) return;
		return new Promise((resolve, reject)=>{
			const elementInterval = setInterval(()=>{
				const nodeElementObject = $(nodeObject.showNode), themeColor = nodeObject.color;
				
				if(nodeElementObject.length == 0) return;
				clearInterval(elementInterval);
									
				//添加HTML
				let category_1_html = "";
				this.originalInterfaceList.forEach((item, index) => {
					if (item.showType != 1) {
						var selected = "";
						if(index==quicklyInterfaceIndex){
							selected = "selected";
						}
						category_1_html += "<option value='"+item.url+"' index='"+index+"' "+selected+">"+item.name+"</option>";
					}
				});
				var htmlMould = `
					<div style="margin:15px 15px 50px 15px;padding:10px;background-color:`+themeColor+`;border-radius:4px;cursor:pointer;z-index: 999999999999999999999;color:#FFF;">
							<div style="font-weight:700;font-size:14px;text-align:center;">
								<span>选择解析接口</span>
								<select id="interface_selection_`+this.elementId+`" style="background-color:#FFF;padding: 0px 10px;">
									`+category_1_html+`
								</select>
							</div>
							<div style="text-align:center;">
								<a href="javascript:void(0);" id="start_analysis_outer_`+this.elementId+`" style="box-sizing:border-box;margin:10px 0px;display:inline-block;padding:10px 0px;width:100%;border-radius:4px;color:#FFF;background-color:#F2503F;font-size:14px;">站外解析</a>
							</div>
							<div style="text-align:left;font-size:10px;">
								<div>
									免责申明：1、VIP视频解析中所用到的解析接口全部收集自互联网（源码可见），版权问题请联系相关解析接口所有者！
									2、为创造良好的创作氛围，请大家支持正版！
									3、脚本仅限个人学习交流，切勿用于任何商业等其它用途！
									4、继续使用，即表明你已经明确使用脚本可能带来的风险，且愿意自行承担相关风险，对于风险脚本不承担任何责任！
									5、<b>脚本源码托管地址（含解析接口、使用教程）：<a href="https://gitlab.com/orange4891620/userscript" target="_blank" style="padding:0px 5px;color:red;">点我查看</a></b>
								</div>
							</div>
					</div>
				`;
				nodeElementObject.after(htmlMould);
				resolve("ok");
			}, 100);
		});
	};
	this.getPlayObjectBySelect = function(){
		
		var indexString = $("#interface_selection_"+this.elementId).find("option:selected").attr("index");
		var index = 0;
		if(!!indexString){
			index = parseInt(indexString);
		}
		return this.originalInterfaceList[index];
	};
	this.runEvent = function(){	 //事件运行
		const self = this;

		//初始化
		var playObject = self.getPlayObjectBySelect();
		$('#start_analysis_outer_'+self.elementId).attr("href", playObject.url + window.location.href);
		$('#start_analysis_outer_'+self.elementId).on('click', function (e) {
			if(commonFunctionObject.GMgetValue("copyright_video_remind_mobile_outer",null)==="true"){
				
			}else{
				var r=confirm(
					"脚本运行提醒！！！\u000d"+
					"使用站外解析功能，视频解析时脚本跳出本页面，如不同意此脚本行为，请点击【取消】按钮！！"
				);
				if(r==false){
					e.preventDefault();
				}else{
					commonFunctionObject.GMsetValue("copyright_video_remind_mobile_outer","true");
				}
			}
		});
		//接口切换
		$('#interface_selection_'+self.elementId).on('change', function () {
			var $option = $(this).find("option:selected");
			var value = $option.val();
			var index = parseInt($option.attr("index"));
			$('#start_analysis_outer_'+self.elementId).attr("href", value+window.location.href);
			commonFunctionObject.GMsetValue(self.quicklyInterfaceKey, index);
		});
	};
	this.start = function(){
		const self = this;
		if(this.isRun()){
			this.addHtmlElements().then(()=>{
				self.runEvent();
			});
		}
	}
}

/**
 * B站相关功能：视频多P下载，一键三联，浏览记录等
 */
function bilibiliHelper(){
	this.isRun = function(){
		return window.location.host.indexOf("bilibili.com") != -1
	}
	this.baseFunction = function(){
		/**
		 * b站基本功能，一件三连、视频解析、视频下载
		 */ 
		function baseFunctionObject(){
			this.elementId = Math.ceil(Math.random()*100000000)+"mmx";
			this.downloadSettingKey = "download_setting_key";
			this.downloadResutError=function(btnElement){
				btnElement.text("下载视频");
				btnElement.removeAttr("disabled");
			};
			this.downloadResutSuccess=function(btnElement){
				btnElement.text("下载视频");
				btnElement.removeAttr("disabled");
			};
			this.getDownloadPages = function(){
				return new Promise(function(resolve, reject) {
					var pathname = window.location.pathname, bv = null;
					if (pathname.indexOf("/medialist/play/watchlater/") != -1) { // 在下载视频的时候针对稍后再看页面的链接找BV号
						bv = pathname.replace("/medialist/play/watchlater/","").replace("/","");
					}else{
						bv = pathname.replace("/video/","").replace("/","");
					}
					if(!bv){
						resolve({"status":"bv_null"});
						return;
					}
					//bv转av
					commonFunctionObject.request("get", "https://api.bilibili.com/x/web-interface/view?bvid="+bv, null).then((resultData)=>{
						let dataJson = JSON.parse(resultData.data);
						if(!dataJson || dataJson.code!==0 || !dataJson.data){
							resolve({"status":"request_error"});
							return;
						}
						
						let data = dataJson.data;
						if(!data){
							resolve({"status":"aid_null"});
							return;
						}
						
						let aid = data.aid;
						let pic = data.pic;
						let title = data.title
						if(!aid){
							resolve({"status":"aid_null"});
							return;
						}
						
						//获取cid
						commonFunctionObject.request("get", "https://api.bilibili.com/x/web-interface/view?aid="+aid, null).then((resultData2)=>{
							let dataJson2 = JSON.parse(resultData2.data);
							if(!dataJson2 || dataJson2.code!==0 || !dataJson2.data){
								resolve({"status":"request_error"});
								return;
							}
							const downloadData = dataJson2.data;
							const {aid,  bvid} = downloadData,
								items = new Array();
							//这是下载集合
							if(downloadData.hasOwnProperty("ugc_season") && downloadData.ugc_season.hasOwnProperty("sections")){
								let sections = downloadData.ugc_season.sections;
								let page = 1;
								for(var i=0; i<sections.length; i++){
									let section = sections[i];
									if(section.hasOwnProperty("episodes")){
										for(var j=0; j<section.episodes.length; j++){
											let episode = section.episodes[j];
											items.push({
												"cover":"",
												"page":page,
												"title":episode.title,
												"cid":episode.cid,
												"aid":episode.aid
											});
											page++;
										}
									}
								}
							}else{ //这是多P下载
								for(var i=0; i<downloadData.pages.length; i++){
									let pageData = downloadData.pages[i];
									items.push({
										"cover":pageData.first_frame,
										"page":pageData.page,
										"title":pageData.part,
										"cid":pageData.cid,
										"aid":aid
									});
								}
							}
							resolve({"status":"success", "downloadData":{
								"items":items,
								"pic":pic,
								"title":title
							}});
						}).catch((errorData)=>{
							resolve({"status":"request_error"});
						});
					}).catch((errorData)=>{
						resolve({"status":"request_error"});
					});
				});
			};
			this.startDownloadFile = function(options){
				let aid = options.aid, cid = options.cid, fileName = options.fileName, 
					savePath = options.savePath, RPCURL = options.RPCURL, RPCToken = options.RPCToken;
				let isByPRC = options.isByPRC;
				
				commonFunctionObject.request("get", "https://api.bilibili.com/x/player/playurl?avid="+aid+"&cid="+cid+"&qn=112", null).then((resultData3)=>{
					
					if(!fileName){
						fileName = (new Date()).getTime() + "";
					}
					fileName = fileName.replace(/[\ |\~|\`|\=|\||\\|\;|\:|\"|\'|\,|\.|\>|\/]/g,"");
					fileName = fileName.substring(0,50); //可能有异常，标题最多50字符
					fileName = fileName + ".mp4";
					
					let dataJson3 = JSON.parse(resultData3.data);
					if(!!dataJson3 && dataJson3.code===0 && !!dataJson3.data){
						let downloadUrl = dataJson3.data.durl[0].url;
						if(isByPRC){
							commonFunctionObject.RPCDownloadFile(fileName, downloadUrl, savePath, RPCURL).then((data)=>{
								commonFunctionObject.webToast({"message":data, "time":3000});
							}).catch((data)=>{
								commonFunctionObject.webToast({"message":data, "time":3000});
							});
						}else{
							window.open(downloadUrl);
						}
					}else{
						commonFunctionObject.webToast({"message":"获取下载链接失败", "background":"#FF4D40"});
					}
				}).catch((errorData)=>{
					commonFunctionObject.webToast({"message":"获取下载链接失败", "background":"#FF4D40"});
				});
			};
			this.createModals = function(){
				var css = `
					.modal-mask-`+this.elementId+`{
						position:fixed;
						top:0;
						left:0;
						z-index:999;
						width:100%;
						height:100%;
						display:none;
						background-color:#000;
						opacity:0.3;
						overflow:hidden;
					}
					.modal-body-`+this.elementId+`{
						position:fixed;
						border-radius:5px;
						background-color: #FFFFFF;
						top:10%;
						width:600px;
						max-width:90%;
						max-height:80%;
						z-index:1000;
						left: 50%;
						transform: translateX(-50%);
						display:none;
						padding: 10px;
						overflow-y: auto;
					}
					.modal-body-`+this.elementId+` >.page-header{
						height:30px;
						line-height:30px;
						position:relative;
					}
					.modal-body-`+this.elementId+` >.page-header >span{
						display:inline-block;
					}
					.modal-body-`+this.elementId+` >.page-header >span:nth-child(1) {
						font-size:18px;
						font-weight:bold;
						position:absolute;
						left:10px;
					}
					.modal-body-`+this.elementId+` >.page-header >span:nth-child(2) {
						font-size:28px;
						font-weight:bold;
						position:absolute;
						right:10px;
						cursor:pointer;
					}
					.modal-body-`+this.elementId+` >.page-container{
						max-height: 500px;
						overflow-y: auto;
					}
					.modal-body-`+this.elementId+` .page-wrap{
						display: flex;
						flex-wrap: wrap;
						margin-top:5px;
					}
					.modal-body-`+this.elementId+` .page-wrap >.board-item{
						display: block;
						width: calc(50% - 10px);
						background-color: #6A5F60;
						margin: 5px;
						background-color:#FB7299;
						color:#FFFFFF;
						cursor: pointer;
						overflow:hidden;
						white-space:nowrap;
						text-overflow:ellipsis;
					}
					.modal-body-`+this.elementId+` .page-wrap >.board-item >input{
						width: 14px;
						height: 14px;
						vertical-align: middle;
						margin-right:5px;
					}
					.modal-body-`+this.elementId+` .page-wrap >.board-item >span{
						vertical-align: middle;
					}
					.modal-body-`+this.elementId+` .modal-btn-wrap{
						text-align: center;
						margin-top: 10px;
						cursor: pointer;
					}
					.modal-body-`+this.elementId+` .aria2-setting{
						border:1px dashed #F1F1F1;
						border-radius:4px;
						margin-top:10px;
					}
					.modal-body-`+this.elementId+` .aria2-setting >.setting-item{
						text-align: center;
						font-size:14px;
						margin:10px 0px;
					}
					.modal-body-`+this.elementId+` .aria2-setting >.setting-item .topic-name{
						display:inline-block;
						width:80px;
						text-align:left;
					}
					.modal-body-`+this.elementId+` .aria2-setting >.setting-item> input{
						width:300px;
						padding-left:10px;
						border:1px solid #888;
						outline:none;
						border-radius:3px;
					}
					.modal-body-`+this.elementId+` .modal-btn-wrap >span{
						border:1px solid #ccc;
						display:inline-block;
						padding:3px 5px;
						margin:0px 5px;
						border-radius:3px;
					}
					.modal-body-`+this.elementId+` .tip-wrap{
						margin-top: 10px;
						font-size:12px;
					}
					.modal-body-`+this.elementId+` .tip-wrap >.title{
						font-size:16px;
						font-weight:bold;
					}
					.modal-body-`+this.elementId+` .tip-wrap >.content >ul >li{
						margin-top:5px;
					}
				`;
									
				var html = `
					<div class='modal-mask-`+this.elementId+`'></div>
					<div class='modal-body-`+this.elementId+`'>
						<div class="page-header">
							<span>视频下载(可批量)</span>
							<span class="close">×</span>
						</div>
						<div class="page-container">
							<label style="color:red;">注：此功能会调用bilibili的API，脚本仅用于个人交流，切勿用于商业用途，否则后果自负，特此申明！</label>
							<div class="page-wrap">
							</div>
							<div class="aria2-setting">
								<div class="setting-item">
									<span><input type="radio" name="downloadWay" value="Motrix">Motrix下载</span>&nbsp;&nbsp;&nbsp;
									<span><input type="radio" name="downloadWay" value="AriaNgGUI">AriaNgGUI下载</span>
								</div>
								<div class="setting-item">
									<label class="topic-name">配置RPC:</label><input type="text" name="RPCURL" value="" placeholder="请准确输入RPC对应软件的地址，默认：Motrix">
								</div>
								<div class="setting-item">
									<label class="topic-name">配置Token:</label><input type="text" name="RPCToken" value="" placeholder="默认无需填写">
								</div>
								<div class="setting-item">
									<label class="topic-name">保存路径:</label><input type="text" name="savePath" value="" placeholder="请准确输入文件保存路径">
									<div style="font-size:12px;color:#888;">最好自定义下载地址，默认地址可能不满足需要</div>
								</div>
							</div>
							<div class="modal-btn-wrap">
								<span name="selectall">全选</span>
								<span name="removeSelect">取消选择</span>
								<span name="downloadAll">批量下载</span>
							</div>
							<div class="tip-wrap">
								<div class="title">关于单P下载：</div>
								<div class="content"><span>点击弹框单个选集，即可下载单集视频！PS:单P下载，推荐大家使用BBDown下载，此工具功能很强大，具体查看：<a target="_blank" href="https://github.com/nilaoda/BBDown">https://github.com/nilaoda/BBDown</a></span></div>
							</div>
							<div class="tip-wrap">
								<div class="title">关于批量下载：</div>
								<div class="content">
									<ul>
										<li>
											<b>1、批量下载需要第三方软件的支持，脚本推荐使用：Motrix</b>
											<ul>
												<li>Motrix下载地址：<a href="https://motrix.app/zh-CN/" target="_blank">https://motrix.app/zh-CN/</a></li>
												<li>AriaNgGUI下载地址：<a href="https://github.com/Xmader/aria-ng-gui" target="_blank">https://github.com/Xmader/aria-ng-gui</a></li>
											</ul>
										</li>
										<li>
											<b>2、在批量下载前需要提前打开软件，本教程以Motrix为准</b>
											<ul>
												<li>(1)、如果全部按照默认配置，只需要打开软件即可</li>
												<li>(2)、如果想自定义RPC地址和文件保存路径，可更改上面输入框的内容（此数据非常重要，请准确填写）</li>
												<li>
												(3)、Motrix运行图片
												<img src="https://pic.rmb.bdstatic.com/bjh/8912582c0416119405ec37ea27d12376.jpeg" width="100%" />
												</li>
											</ui>
										</li>
										<li>
											<b>3、默认RPC默认地址</b>
											<ul>
												<li>(1)、Motrix RPC默认地址：ws://localhost:16800/jsonrpc</li>
												<li>(2)、Aria2 RPC默认地址：ws://localhost:6800/jsonrpc</li>
												<li>(3)点击“批量下载会自动保存当前下载设置”</li>
											</ul>
										</li>
										<li>
											<b>4、如使用AriaNgGUI，使用方式类似，大家可以自行研究</b>
										</li>
									</ul>
								</div>
							</div>
							<div class="tip-wrap">
								<div class="title">必要说明：</div>
								<div class="content">
									申明：本功能仅能作为学习交流使用，且不可用于其它用途，否则后果自负。请大家重视版权，尊重创作者，切勿搬运抄袭。请大家多用[一键三连]为创作者投币~，小破站牛掰！
								</div>
							</div>
						</div>
					</div>
				`;
				commonFunctionObject.GMaddStyle(css);
				$("body").append(html);
			};
			this.hideModals = function(){
				$(".modal-body-"+this.elementId+"").css('display','none');
				$(".modal-mask-"+this.elementId+"").css('display','none');
			};
			this.showModals = function(pageHtml){
				const self = this;
				const downloadSettingKey = self.downloadSettingKey;
				$(".modal-body-"+self.elementId+"").css('display','block');
				$(".modal-mask-"+self.elementId+"").css('display','block');
				$(".modal-body-"+self.elementId+" .page-wrap").html(pageHtml);
				
				//初始化设置的数据
				var savePath = "D:/";
				if("macOS"===commonFunctionObject.getSystemOS()){
					savePath = ""
				}
				const downloadSetting = commonFunctionObject.GMgetValue(this.downloadSettingKey, 
					{"RPCURL":"ws://localhost:16800/jsonrpc", 
					"savePath":savePath,
					"RPCToken":'', "downloadWay":"Motrix"});
				const isMotrix = downloadSetting.downloadWay=="Motrix";
				$(".modal-body-"+self.elementId+" input[name='RPCURL']").val(downloadSetting.RPCURL);
				$(".modal-body-"+self.elementId+" input[name='savePath']").val(downloadSetting.savePath);
				$(".modal-body-"+self.elementId+" input[name='RPCToken']").val(downloadSetting.RPCToken);
				$(".modal-body-"+self.elementId+" input[name='downloadWay']").removeAttr("checked");
				if(isMotrix){
					$(".modal-body-"+self.elementId+" input:radio[value='Motrix']").attr('checked','true');
				}else{
					$(".modal-body-"+self.elementId+" input:radio[value='AriaNgGUI']").attr('checked','true');
				}
				
				$(".modal-body-"+self.elementId+" .page-wrap >.board-item >span").off("click").on("click", function(){
					$(this).css("background-color","#ccc");
					let downloadOptions={
						"aid":$(this).data("aid"),
						"cid":$(this).data("cid"),
						"isByPRC":false
					}
					self.startDownloadFile(downloadOptions);
				});
				$(".modal-body-"+self.elementId+" .page-header >span.close").off("click").on("click", function(){
					self.hideModals();
				});
				$(".modal-body-"+self.elementId+" .modal-btn-wrap >span[name='selectall']").off("click").on("click", function(){
					$(".modal-body-"+self.elementId+" .page-wrap").find("input[type='checkbox']").each(function(){
						$(this).prop('checked', true);
					});
				});
				$(".modal-body-"+self.elementId+" input[name='downloadWay']").off("change").on("change", function(){
					if($(this).val()=="Motrix"){
						$(".modal-body-"+self.elementId+" input[name='RPCURL']").val("ws://localhost:16800/jsonrpc");
					}else{
						$(".modal-body-"+self.elementId+" input[name='RPCURL']").val("ws://localhost:6800/jsonrpc");
					}
				});
				$(".modal-body-"+self.elementId+" .modal-btn-wrap >span[name='removeSelect']").off("click").on("click", function(){
					$(".modal-body-"+self.elementId+" .page-wrap").find("input[type='checkbox']").each(function(){
						$(this).prop('checked', false);
					});
				});
				$(".modal-body-"+self.elementId+" .modal-btn-wrap >span[name='downloadAll']").off("click").on("click", function(){
					let RPCURL = $(".modal-body-"+self.elementId+" input[name='RPCURL']").val();
					let savePath = $(".modal-body-"+self.elementId+" input[name='savePath']").val();
					let RPCToken = $(".modal-body-"+self.elementId+" input[name='RPCToken']").val();
					let downloadWay = $(".modal-body-"+self.elementId+" input[name='downloadWay']:checked").val();
					commonFunctionObject.GMsetValue(downloadSettingKey,{"RPCURL":RPCURL, "savePath":savePath, 
						"RPCToken":RPCToken, "downloadWay":downloadWay});
						
					let inputElements = $(".modal-body-"+self.elementId+" .page-wrap input[type='checkbox']:checked");
					if(inputElements.length == 0){
						commonFunctionObject.webToast({"message":"至少需要选中1P", "background":"#FF4D40"});
						return;
					}
											
					if(!savePath){
						commonFunctionObject.webToast({"message":"保存路径不能为空", "background":"#FF4D40"});
						return;
					}
					if(!RPCURL){
						commonFunctionObject.webToast({"message":"PRC地址不能为空", "background":"#FF4D40"});
						return;
					}
					RPCToken = !RPCToken ? "" : RPCToken;
					let downloadOptions = {
						"aid":"",
						"cid":"",
						"isByPRC":true,
						"fileName":"",
						"savePath":savePath,
						"RPCURL":RPCURL,
						"RPCToken":RPCToken
					}
					inputElements.each(function(){
						setTimeout(()=>{
							let aid=$(this).data("aid"), cid = $(this).data("cid"), fileName = $(this).attr("title");
							downloadOptions.aid = aid;
							downloadOptions.cid = cid;
							downloadOptions.fileName = fileName;
							self.startDownloadFile(downloadOptions);
						}, 1000);
					})
				});
			};
			this.createElementHtml = async function(){
				$("#bilibili_exti_9787fjfh12j").remove();
				
				const randomNumber = this.elementId, self = this;
				let cssText = `
					#bilibili_exti_9787fjfh12j{
						position:fixed;
						left:-30px;
						top:200px;
						opacity:0.6;
						transition: 0.3s;
					}
					#bilibili_exti_9787fjfh12j >.self_s_btn{
						background-color:#FB7299;
						color:#FFF;
						font-size:10px;
						border-radius:3px;
						cursor:pointer;
						margin:10px 0px;
						width:60px;
						height:20px;
						text-align:center;
						line-height:20px;
					}
				`;
				let htmlText=`
					<div id="bilibili_exti_9787fjfh12j">
						<div class="self_s_btn" id="download_s_`+randomNumber+`">下载视频</div>
						<div class="self_s_btn" id="focus_s_`+randomNumber+`">一键三连</div>
					</div>
				`;
				
				//添加下载等操作按钮
				commonFunctionObject.GMaddStyle(cssText);
				$("body").append(htmlText);
				
				//创建弹框
				this.createModals();
				
				//移入移除操作
				$("#bilibili_exti_9787fjfh12j").hover(function(){
					$(this).css({
						"left":"0px", "opacity":1
					});
				},function(){
					$(this).css({
						"left":(0-$(this).width())/2+"px", "opacity":0.6
					});
				});
				
				//下载操作函数
				$("body").on("click", "#download_s_"+randomNumber, function(){
					const btnElement = $(this);
					btnElement.attr("disabled", "disabled");
					btnElement.text("准备中~");
					//开始准备下载数据
					self.getDownloadPages().then((resule)=>{
						if(resule.status==="success"){
							const {items, pic, title} = resule.downloadData;
							let itemHtml = "";
							itemHtml += "<div style='width:100%;'><a href='"+pic+"' target='_blank'>标题："+title+"（点我跳转封面）</a></div>";
							for(var i=0; i<items.length; i++){
								var currentTitle = "【P"+items[i].page+"】"+items[i].title+"";
								itemHtml += "<div class='board-item'>";
								itemHtml += "<input data-aid='"+items[i].aid+"' data-cid='"+items[i].cid+"' title='"+currentTitle+"' type='checkbox'>"
								itemHtml += "<span data-aid='"+items[i].aid+"' data-cid='"+items[i].cid+"' title='"+currentTitle+"'>"+currentTitle+"</span>";
								itemHtml += "</div>";
							}
							self.showModals(itemHtml);
							self.downloadResutSuccess(btnElement);
						}else{
							self.downloadResutError(btnElement);
						}
					}).catch((error)=>{
						self.downloadResutError(btnElement);
					});
				});
				$("body").on("click", "#focus_s_"+randomNumber, function(){
					$("#arc_toolbar_report .video-like").click(); // 点赞
					$("#arc_toolbar_report .video-coin").click(); // 投币
					// $("#arc_toolbar_report .video-fav").click(); // 收藏
				});
			}
			this.start = function(){
				let locationHost = window.location.host, locationPathname = window.location.pathname;
				if(locationHost==="www.bilibili.com" && (locationPathname.indexOf("/video")!=-1 || locationPathname.indexOf("/watchlater")!=-1)){
					this.createElementHtml();
				}
			}
		}
		try{
			(new baseFunctionObject()).start();
		}catch(e){
			console.log("baseFunctionObject new error", e);
		}
	};
	/**
	 * 浏览历史记录提醒
	 */
	this.recordViewFunction = function(){
		function recordViewObject(){
			this.localCacheName = "bilibili_video_record"; 
			this.recordOneVideo = function(){
				let promise = new Promise((resolve, reject)=>{
					let bv = commonFunctionObject.getBilibiliBV();
					let cacheText = commonFunctionObject.GMgetValue(this.localCacheName);
					cacheText = !cacheText ? "" : cacheText
					let maxLength = 12*500;
					let currentLength = cacheText.length;
					if(currentLength > maxLength){
						cacheText = cacheText.substring(12*100, currentLength);
					}
					
					if(cacheText.indexOf(bv)==-1){
						cacheText += bv;
						commonFunctionObject.GMsetValue(this.localCacheName, cacheText);
					}
					resolve({"result":"success"});
				});
			};
			this.searchPageRemindHtml = function($ele, top=8, right=8){
				if($ele.find("div[name='marklooked']").length==0){						
					$ele.css("position","relative");
					$ele.append("<div name='marklooked' style='z-index: 100;position:absolute; top:"+top+"px; right:"+right+"px; background-color: rgba(251,123,159,1); border-radius:3px; font-size:10px; color:#FFF;padding:0px 2px;'>已看</div>");
				}
			};
			this.searchPageRemind = function(){
				let $that = this;
				var elementArray = [
					{"node":".bili-video-card", "top":8, "right":12},  //兼容 MAC M1搜索结果
					{"node":"#page-index .small-item", "top":12, "right":12},  //用户投稿
					{"node":"#submit-video-list .small-item", "top":12, "right":12}, //用户主页
					{"node":"#page-series-detail .small-item.fakeDanmu-item", "top":12, "right":12}, //用户主页投稿
				];
				setInterval(function(){
					let cacheText = commonFunctionObject.GMgetValue($that.localCacheName);
					cacheText = !cacheText ? "" : cacheText;
					for(var i=0; i<elementArray.length; i++){
						var elementobj = elementArray[i];
						$(elementobj.node).each(function(){
							if($(this).attr("dealxll")!=="true"){
								var videourl = $(this).find("a[href^='//www.bilibili.com/video']").attr("href");
								if(!!videourl){
									var bvs = videourl.match(/(\/BV(.*?)\/)/g)
									if(bvs.length==1){
										var bv = bvs[0].replace(/\//g,"");
										if(cacheText.indexOf(bv) != -1){
											$that.searchPageRemindHtml($(this), elementobj.top, elementobj.right);
										}
										$(this).unbind("click").bind("click", ()=>{  //循环操作，单独绑定
											$that.searchPageRemindHtml($(this), elementobj.top, elementobj.right);
										})
									}
									$(this).attr("dealxll","true");
								}
							}
						});
					}
				}, 500);
			}
			this.start=function(){
				let $that = this;
				if(window.location.pathname.indexOf("/video")!=-1 && window.location.host==="www.bilibili.com"){
					let currentHref = "";
					setInterval(()=>{ //需要循环存储
						if(window.location.href !== currentHref){
							this.recordOneVideo();
							currentHref = window.location.href;
						}
					}, 500);
				}
				//搜索结果和用户主页已经看过的视频提醒
				if(window.location.host.indexOf("bilibili.com")!=-1){
					this.searchPageRemind();
					GM_registerMenuCommand("清空B站浏览记录",function(){
						if(confirm('是否要清空B站浏览记录？清空后将不可恢复...')){
							commonFunctionObject.GMsetValue($that.localCacheName, "");
						}
					});
				}
			};
		}
		try{
			(new recordViewObject()).start();
		}catch(e){
			console.log("recordViewObject new error", e);
		}
	};
	/**
	 * 视频描述文本转链接
	 */
	this.textToLinkFunction = function() {
		function textToLinkObject(){
			this.link = function(areaElements){
				const current_href = window.location.href;
				for(let i=0; i<areaElements.length; i++){
					let textToLinkArea = document.querySelector(areaElements[i]);
					if(!textToLinkArea){
						continue;
					}
					findAndReplaceDOMText(textToLinkArea, {
						find: /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/g,
						replace: function (e, t) {
							let text = e.text;
							let element = null;
							if(text.indexOf("bilibili.com")==-1 && /^(http|ftp|https)/i.test(text)){
								element = document.createElement("a");
								element.setAttribute("href", text)
								element.setAttribute("target", "_blank");
								element.style.color="#00AEEC";
							}else{
								element = document.createElement("span");
							}
							element.innerText = text;
							return element;
						}, 
						preset: "prose"
					});
				}
			}
			this.start = function(){
				const areaElements = ["#v_desc", "#article-content"];
				this.link(areaElements);
				let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
				let bodyMutationObserver = new MutationObserver(()=>{
					this.link(areaElements);
				});
				let observerElementObj = null;
				for(let i=0; i<areaElements.length; i++){
					observerElementObj = document.querySelector(areaElements[i]);
					if(observerElementObj){
						break;
					}
				}
				if(observerElementObj){
					bodyMutationObserver.observe(observerElementObj, 
						{"characterData":true,"attributes":true, "childList":true},
					);
				}
			}
		}
		try{
			(new textToLinkObject()).start();
		}catch(e){
			console.log("textToLinkObject new error", e);
		}
	}
	this.signIn = async function(){ //签到下线，2024年7月2日
		
	}
	this.start = function(){
		if(this.isRun()){
			this.baseFunction();
			this.recordViewFunction();
			this.textToLinkFunction();
			this.signIn();
		}
	}
}
		
/**
 * 搜索引擎资源提醒
 */
function searchEnginesNavigation(){
	this.customNavigationkey = "custom-navigation-key-8898";
	this.serverNavigationkey = "server-navigation-key-8898";
	this.searchEnginesData=[
		{"host":"www.baidu.com", "element":"#content_right","elementInput":"#kw"},
		{"host":"www.so.com", "element":"#side","elementInput":"#keyword"},
		{"host":"www.sogou.com", "element":"#right","elementInput":"#upquery"},
		{"host":"cn.bing.com", "element":"#b_context","elementInput":"#sb_form_q"},
		{"host":"www.bing.com", "element":"#b_context","elementInput":"#sb_form_q"},
		{"host":"www4.bing.com", "element":"#b_context","elementInput":"#sb_form_q"},
		{"host":"so.toutiao.com", "element":".s-side-list","elementInput":"input[type='search']"},
		{"host":"www.google.com", "element":"#rhs","elementInput":"input[type='text']"},
		{"host":"www.google.com.hk","element":"#rhs","elementInput":"input[type='text']"},
		{"host":"duckduckgo.com","element":".react-results--sidebar","elementInput":"#search_form_input"}
	];
	this.defaultNavigationData =  [
		{"name":"资源搜索","list":[
			{"name":"书签搜索 · 🔥发现", "url":"https://www.bookmarkearth.cn/?from=dxy"},
			{"name":"百度百科", "url":"https://baike.baidu.com/item/@@"},
			{"name":"知乎搜索", "url":"https://www.zhihu.com/search?type=content&q=@@"},
			{"name":"B站搜索", "url":"https://search.bilibili.com/all?keyword=@@&from_source=webtop_search&spm_id_from=333.851"},
			{"name":"财经雪球", "url":"https://xueqiu.com/k?q=@@"},
			{"name":"抖音搜索", "url":"https://www.douyin.com/search/@@"},
			{"name":"搜狗|公众号", "url":"https://weixin.sogou.com/weixin?type=2&query=@@"},
			{"name":"豆瓣搜索", "url":"https://www.douban.com/search?q=@@"},
			{"name":"维基百科", "url":"https://en.wikipedia.org/w/index.php?search=@@"},
			{"name":"法律法规", "url":"https://www.pkulaw.com/law/chl?Keywords=@@"},
			{"name":"icon搜索", "url":"https://www.iconfont.cn/search/index?searchType=icon&q=@@"},
			{"name":"github", "url":"https://github.com/search?q=@@"},
			{"name":"csdn", "url":"https://so.csdn.net/so/search?q=@@&t=&u="},
			{"name":"stackoverflow", "url":"https://stackoverflow.com/"},
			{"name":"AI内容分析🔥","url":"https://www.quzhuanpan.com/redirect/d_n?t="+(new Date()).getTime()},
			{"name":"在线工具", "url":"https://www.tool77.com/category/1?from=vbx"}
		]},
		{"name":"搜索引擎","list":[
			{"name":"百度", "url":"https://www.baidu.com/s?wd=@@"},
			{"name":"必应", "url":"https://cn.bing.com/search?q=@@"},
			{"name":"google", "url":"https://www.google.com/search?q=@@"},
			{"name":"360搜索", "url":"https://www.so.com/s?ie=utf-8&fr=none&src=360sou_newhome&nlpv=basest&q=@@"},
			{"name":"搜狗", "url":"https://www.sogou.com/web?query=@@"},
			{"name":"头条搜索", "url":"https://so.toutiao.com/search?dvpf=pc&source=input&keyword=@@"},
			{"name":"DuckDuckGo", "url":"https://duckduckgo.com/?t=h_&q=@@&ia=web"},
		]}
	];
	this.getNavigationData = async function(element, elementInput){
		const self = this;
		let navigationData = self.defaultNavigationData;
		let finalNavigationData = null;
		try{
			let customNavigationData = commonFunctionObject.GMgetValue(self.customNavigationkey, null); //自定义的数据
			if(!!customNavigationData){
				finalNavigationData = [].concat(customNavigationData);
				// console.log("使用本地");
			}else{
				let currentMS = (new Date()).getTime();
				let delayMS = 1000 * 60 * 5;
				let serverNavigationData = commonFunctionObject.GMgetValue(self.serverNavigationkey, null);
				if(!serverNavigationData || (currentMS - serverNavigationData.ms) > delayMS){
					//拉取服务器本次不用，下次再使用
					commonFunctionObject.request("get", "https://sct.staticj.top/script/api/nav?t="+currentMS, null).then((serverJson)=>{
						let data = JSON.parse(serverJson.data);  //获取本地data
						data.ms = currentMS;                     //添加时间戳保存到本地区
						commonFunctionObject.GMsetValue(self.serverNavigationkey, data);
						//console.log("拉取服务器");
					}).catch((error)=>{});
				}
				
				if(!!serverNavigationData){
					finalNavigationData = JSON.parse(serverNavigationData.list);
				}else{
					finalNavigationData = navigationData;
				}
			}
		}catch(e){
			finalNavigationData = navigationData;
		}
		self.createHtml(element, elementInput, finalNavigationData);
	};
	this.createCss = function(elementNum){
		var innnerCss = `
			#dsdsd99mmmjj7760011{
				margin-bottom:20px;
			}
			.tab`+elementNum+`{
				margin-bottom:8px;
			}
			.tab-c-titles`+elementNum+`{
				margin-bottom:8px;
			}
			.tab-c-links`+elementNum+`{
				
			}
			
			.tabs-t`+elementNum+`{
				display: inline-block;
				width: 80px;
				height: 28px;
				line-height: 28px;
				font-size: 15px;
				letter-spacing: 0;
				text-align: center;
				font-weight: 400;
				border-radius: 6px;
				cursor: pointer;
				background: #f8f8f8;
				color: #333;
			}
			.tabs-t-selected-ddsds1idddx90{
			    color: #315EFB;
			    font-weight: 500;
			    background: rgba(49, 94, 251, 0.1);
			}
			.tabs-t-small-ddsds1idddx90{
			    margin-left: 8px;
			}
			
			.tab-c-links`+elementNum+` a[name='navigation']{
				display:inline-block;
				text-align:center;
				margin-right:12px;
				margin-top:5px;
				overflow: hidden;
				white-space: nowrap;
				text-overflow:ellipsis;
				box-sizing:border-box;
				line-height:20px;
				font-size:14px!important;
				text-decoration: none;
				color:#1a0dab;
			}
			.tab-c-links`+elementNum+` a[name='navigation']:hover{
				text-decoration: underline;
			}
			
			.bookmarks`+elementNum+`{
				min-height:50px;
			}
		`;
		if($("#plugin_css_style_dddsoo").length==0){
			$("body").prepend("<style id='plugin_css_style_dddsoo'>"+innnerCss+"</style>");
		}
	};
	this.showSetingDialog = function(){
		const self = this;
		
		var customNavigationData = "";
		const customNavigation = commonFunctionObject.GMgetValue(self.customNavigationkey, null);
		if(!!customNavigation){
			customNavigationData = JSON.stringify(customNavigation, null, 4);
		}
		const content = `
			<div>
				<div style="font-size:13px;color:red;">
					注意事项如下：
					<br>1、请严格按照格式添加，否则不生效
					<br>2、数据为json格式，请确保json格式正确，必要时请到<a target="_blank" href="https://www.json.cn/">https://www.json.cn/</a>校验
					<br>3、点击下面”示例“按钮，查看具体格式情况
					<br>4、链接中的搜索关键词请用”@@“代替，脚本会自动替换成当前搜索词。例如：https://www.baidu.com/s?wd=@@
					<br>5、大家可以自定义导航数据，<b>但是必须要注意数据格式，发现出现错误，可点“初始化”</b>
				</div>
				<div style="margin-top:5px;height:200px;width:100%;">
					<textarea 
						placeholder="请严格按照格式填写，否则不生效"
						class="navigation-textarea"
						style="color:#000;font-size:14px;box-sizing: border-box;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;padding:5px;height:100%;width:100%;Overflow:auto;border:1px solid #ccc;resize:none;background-color:#FFF;outline:none;">`+customNavigationData+`</textarea>
				</div>
				<div style="text-align:center;margin-top:15px;">
					<button class="navigation-init" style="color:#000;cursor:pointer;">初始化</button>
					<button class="navigation-example" style="color:#000;cursor:pointer;">示例</button>
					<button class="navigation-clear" style="color:#000;cursor:pointer;">清空</button>
					<button class="navigation-save" style="color:#000;cursor:pointer;">保存自定义导航</button>
				</div>
			</div>
		`;
		popup.dialog({
			"title":"自定义添加导航",
			"content":content,
			"onContentReady":function($that){
				var $navigationExample = $that.dialogContent.querySelector(".navigation-example");
				var $navigationClear = $that.dialogContent.querySelector(".navigation-clear");
				var $navigationSave = $that.dialogContent.querySelector(".navigation-save");
				var $navigationInit = $that.dialogContent.querySelector(".navigation-init");
				
				var $textarea = $that.dialogContent.querySelector(".navigation-textarea");
				$navigationExample.addEventListener("click", function(){
					$textarea.value = JSON.stringify(self.defaultNavigationData, null, 4);
				});
				$navigationClear.addEventListener("click", function(){
					$textarea.value = "";
				});
				$navigationInit.addEventListener("click", function(){
					$textarea.value = "";
					commonFunctionObject.GMsetValue(self.customNavigationkey, null);
				});
				$navigationSave.addEventListener("click", function(){
					var content = $textarea.value;
					if(!content){
						commonFunctionObject.GMsetValue(self.customNavigationkey, null);
						commonFunctionObject.webToast({"message":"保存成功：数据为空", "background":"#FF4D40"});
						return;
					}
					if(content.length==0 || content.indexOf("{")==-1 || content.indexOf("[")==-1){
						commonFunctionObject.webToast({"message":"格式错误，请更正", "background":"#FF4D40"});
						return;
					}
					try{
						var contentJson = JSON.parse(content);
						if(Array.isArray(contentJson)){ //开始必须是数组
							var isOK = true;
							for(var i=0; i<contentJson.length; i++) {
								if(Array.isArray(contentJson[i])){ //此处必须是对象
									isOK = false;
									break;
								}
								if(!contentJson[i].hasOwnProperty("name") || !contentJson[i].hasOwnProperty("list")){
									isOK = false;
									break;
								}
								if(typeof(contentJson[i]["name"])!="string"){
									isOK = false;
									break;
								}
								if(!Array.isArray(contentJson[i]["list"])){ //此处必须是数组
									isOK = false;
									break;
								}
								for(var j=0; j<contentJson[i]["list"].length; j++){
									if(!contentJson[i]["list"][j].hasOwnProperty("name") || !contentJson[i]["list"][j].hasOwnProperty("url")){
										isOK = false;
										break;
									}
									if(typeof(contentJson[i]["list"][j]["name"])!="string" || typeof(contentJson[i]["list"][j]["url"])!="string"){
										isOK = false;
										break;
									}
								}
								if(!isOK){
									break;
								}
							}
							if(isOK){
								commonFunctionObject.GMsetValue(self.customNavigationkey, contentJson);
								commonFunctionObject.webToast({"message":"保存成功", "background":"#FF4D40"});
							}else{
								commonFunctionObject.webToast({"message":"格式错误，请更正", "background":"#FF4D40"});
							}
						}else{
							commonFunctionObject.webToast({"message":"格式错误，请更正", "background":"#FF4D40"});
						}
					}catch(e){
						commonFunctionObject.webToast({"message":"格式错误，请更正", "background":"#FF4D40"});
					}
				});
			}
		})
	}
	this.createHtml = function(element, elementInput, navigationData){
		$("#dsdsd99mmmjj7760011").remove();
		
		var isComplate = true;
		const host = window.location.host;
		const self = this;
		const elementNum = commonFunctionObject.randomNumber();
		const elementInterval = setInterval(function(){
			if(isComplate){
				var $element = $(element);
				var $box = $("#dsdsd99mmmjj7760011");
				isComplate = false;
				if($element.length!=0 && $box.length==0){					
					var nameArray = [];
					var linkArray = [];
					for(var i=0; i<navigationData.length; i++){
						var name = "";
						if(i==0){
							name += '<span class="tabs-t'+elementNum+' tabs-t-selected-ddsds1idddx90" name="tab-list-xxsddddssd-'+i+'">'+navigationData[i].name+'</span>';
						}else{
							name += '<span class="tabs-t'+elementNum+' tabs-t-small-ddsds1idddx90" name="tab-list-xxsddddssd-'+i+'">'+navigationData[i].name+'</span>';
						}
						nameArray.push(name);
						
						var links = "";
						if(i==0){
							links = '<div id="tab-list-xxsddddssd-'+i+'">';
						}else{
							links = '<div id="tab-list-xxsddddssd-'+i+'" style="display:none;">';
						}
						for(var j=0;j<navigationData[i].list.length;j++){
							let url = navigationData[i].list[j].url;
							url = url.replace("${t}",(new Date()).getTime());
							let name = navigationData[i].list[j].name;
							links += "<a target='_blank' name='navigation' data-url='"+url+"' href='javascript:void(0);'>"+name+"</a>"				
						}
						links += "</div>";
						linkArray.push(links);
					}
					
					var html = `
						<div id="dsdsd99mmmjj7760011">
							<div class="tab`+elementNum+`">
								<div class="tab-c-titles`+elementNum+`">`+nameArray.join("")+`</div>
								<div class="tab-c-links`+elementNum+`">`+linkArray.join("")+`</div>
							</div>
							<div style='margin-bottom:10px;margin-top:5px;font-size:12px;'>
								<a target='_blank' href='https://gitlab.com/orange4891620/userscript' style="color: #000;background-color: #efefef;padding: 2px 5px; border-radius: 2px;">*该数据由油猴脚本提供</a>
								&nbsp;&nbsp;
								<a href="javascript:void(0);" name="customNavigation" style="color: #000;background-color: #efefef;padding: 2px 5px; border-radius: 2px;">🔧自定义网址</a>
							</div>
						<div>
					`;
					
					// //添加css 添加html
					self.createCss(elementNum);
					$element.prepend(html);
					
					
					//点击切换tab
					$("#dsdsd99mmmjj7760011 .tabs-t"+elementNum).on("click", function(e){
						$("div[id^='tab-list-xxsddddssd-']").hide();
						$(".tabs-t"+elementNum).removeClass("tabs-t-selected-ddsds1idddx90");
						
						$("#"+$(this).attr("name")).show();
						$(this).addClass("tabs-t-selected-ddsds1idddx90");
					});
					
					//点击链接
					$("#dsdsd99mmmjj7760011 a[name='navigation']").on("click", function(e){
						commonFunctionObject.GMopenInTab($(this).data("url").replace("@@",$(elementInput).val()));
						e.preventDefault()
					});
					
					//弹出自定义导航弹窗
					$("#dsdsd99mmmjj7760011 a[name='customNavigation']").on("click", function(e){
						self.showSetingDialog();
						e.preventDefault()
					});
				}
				isComplate = true;
			}
		}, 100);			
	};
	this.hookBaidu = function(){
		let items = document.querySelectorAll("#content_left>div");
		for(let item of items){
			//给处理完成的做一个标识
			if(!!item.getAttribute("baidu_dealxx")){
				continue;
			}
			item.setAttribute("baidu_dealxx","--");
			
			let a = item.querySelector("a");
			if(!a || !a.href){
				continue;
			}
			
			//标注了html网址的忽略
			let OP_LOG_LINK = item.querySelector(".OP_LOG_LINK");
			if(!!OP_LOG_LINK && OP_LOG_LINK.innerText.search("http")!=-1){
				continue;
			}
			
			//有多个点击点的忽略
			let cGapBottomSmall = item.querySelector(".c-gap-bottom-small");
			if(!!cGapBottomSmall){
				continue;
			}
							
			//https://www.baidu.com/s?wd=一夜醒来欠地铁600多万?官方回应
			if (a.href.includes("www.baidu.com/link?url=")) {
				let url = item.getAttribute("mu");
				if (url && url != null && !url.includes("nourl.ubs.baidu.com")) {
					a.href = url;
					item.innerHTML += `<div style="color:#ccc;font-size:12px;display:flex;align-items:center;width:100%;overflow:hidden;white-space: nowrap;text-overflow: ellipsis;-o-text-overflow:ellipsis;">
										<img style="width:15px;height:15px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAKhJREFUOE+9k9ENwjAMBc8RA7AR7UhMQDsBszBBw0YMAAmKrBS3pM1HpOb/ne9ZjtD4pDHPEYBTB2FSU9fD21vrisEcHsF5BS0hFYCLwAhh0KkZGOZcBSATyAM4K8QNEC8Q+1yjAEhTPjeQ50+bq0KW4QRZAWxnXsBdO4euFC4AbOe1fvlijEGebrecOqeXl/gP2aiwr125g2wSvd321skfccr7363Z4Asklz4RHmdA1gAAAABJRU5ErkJggg=="/>
										<a style="color:#626675;" href="`+url+`" target="_blank">`+url+`</a>
									</div>`;
				}
			}
			
			let itemNews = item.querySelectorAll("[class^=single-card-wrapper] div,[class^=group-wrapper] div");
			if(!itemNews){
				continue;
			}
			//single-card-wrapper: https://www.baidu.com/s?ie=UTF-8&wd=es6                          xxx的最新相关信息
			//group-wrapper:       https://www.baidu.com/s?ie=UTF-8&wd=五一消费成绩单折射市场活力     资讯
			for(let itemNew of itemNews){
				let dataUrl = null;
				let divs = itemNew.querySelectorAll("div");
				for (let div of divs) {
					if ((dataUrl = div.getAttribute("data-url"))) {
						let a = itemNew.querySelector("a");
						a.setAttribute("href", dataUrl);
					}
				}
			}
		}
	};
	this.hookGoogle = function(){
		let items = document.querySelectorAll("#center_col a");
		for(let a of items){
			if(!a.getAttribute("target")) a.setAttribute("target","_blank");
		}
	};
	this.hooks = function(){
		const host = window.location.host;
		const href = window.location.href;
		const search = window.location.search;
		const self = this;
		setInterval(function(){
			if(host==="www.baidu.com"){
				self.hookBaidu();
			}else if(host==="www.google.com" || host==="www.google.com.hk"){
				self.hookGoogle();
			}
		}, 300);
	};
	this.show = function(){
		const self = this;
		const host = window.location.host;
		const href = window.location.href;
		if((host==="www.baidu.com")
			|| (host==="www.so.com" && href.indexOf("www.so.com/s")!=-1)
			|| (host==="www.sogou.com" && (href.indexOf("www.sogou.com/web")!=-1 || href.indexOf("www.sogou.com/sogou")!=-1))
			|| (host==="cn.bing.com" && href.indexOf("cn.bing.com/search")!=-1)
			|| (host==="www.bing.com" && href.indexOf("www.bing.com/search")!=-1)
			|| (host==="www4.bing.com" && href.indexOf("www4.bing.com/search")!=-1)
			|| (host==="so.toutiao.com" && href.indexOf("so.toutiao.com/search")!=-1)
			|| (host==="www.google.com" && href.indexOf("www.google.com/search")!=-1)
			|| (host==="www.google.com.hk" && href.indexOf("www.google.com.hk/search")!=-1)
			|| (host==="duckduckgo.com" && href.indexOf("duckduckgo.com")!=-1)){
			let currentSearchEnginesData = null;
			for(var i=0; i<self.searchEnginesData.length; i++){
				if(host===self.searchEnginesData[i].host){
					currentSearchEnginesData = self.searchEnginesData[i];
				}
			}
			if(currentSearchEnginesData!=null){
				self.getNavigationData(currentSearchEnginesData.element, currentSearchEnginesData.elementInput);
			}
			self.hooks();
		}
	};
	this.start = function(){
		this.show();
	};
}

/**
 * 知乎助手开始
 */
function zhihuHelper(){
	this.markArticleOrQuestion = function(){
		var questionsCss = `
			.AnswerItem .ContentItem-title a::before {
				content: '问题';
				color: #f68b83;
				background-color: #f68b8333;
				font-weight: bold;
				font-size: 13px;
				padding: 1px 4px 0px;
				border-radius: 2px;
				display: inline-block;
				vertical-align: middle;
				margin: 0px 4px 0px 0px;
			}
			.ArticleItem .ContentItem-title a::before {
				content: '文章';
				color: #0066FF;
				background-color: #E5EFFF;
				font-weight: bold;
				font-size: 13px;
				padding: 1px 4px 0;
				border-radius: 2px;
				display: inline-block;
				vertical-align: middle;
				margin: 0px 4px 0px 0px;
			}
			.ZvideoItem .ContentItem-title a::before {
				content:'视频';
				color: #00BCD4;
				background-color: #00BCD433;
				font-weight: bold;
				font-size: 13px;
				padding: 1px 4px 0;
				border-radius: 2px;
				display: inline-block;
				vertical-align: middle;
				margin: 0px 4px 0px 0px;
			}
			.TopstoryItem--advertCard{
				text-decoration:line-through;
			}
		`;
		commonFunctionObject.GMaddStyle(questionsCss);
	}
	this.autoJumpTarget = function(){
		var regexResult = location.search.match(/target=(.+?)(&|$)/);
		if(regexResult && regexResult.length==3){
			location.href = decodeURIComponent(regexResult[1]);
		}
	};
	// 为问题本身添加时间
	this.addDateQuestion = function(){
		var title = document.querySelector(".QuestionPage");
		if(!!title){
			var dateCreated = title.querySelector("[itemprop~=dateCreated][content]").content;
			var dateModified = title.querySelector("[itemprop~=dateModified][content]").content;
			var createDate = commonFunctionObject.DateFormat(new Date(dateCreated), "yyyy-MM-dd hh:mm:ss");
			var editDate = commonFunctionObject.DateFormat(new Date(dateModified), "yyyy-MM-dd hh:mm:ss");
			
			var side = title.querySelector(".QuestionHeader-side");
			var timeDiv = document.createElement('div');
			timeDiv.innerHTML = `<p>创建于:&nbsp;${createDate}</p><p>编辑于:&nbsp;${editDate}</p>`;
			timeDiv.style.cssText = 'color:#6f6f6f;font-size:13px;';
			side.appendChild(timeDiv);
		}
	};
	// 为回答添加时间
	this.addTimeAnswerItems = function(){
		var list = document.querySelectorAll(".AnswerItem:not(div[zh_date_mk='true'])");
		var item = null;
		for (var i = 0; i < list.length; i++) {
			item = list[i];
			if (item.getAttribute('zh_date_mk') === 'true') {
				continue;
			}
			item.setAttribute("zh_date_mk", "true");
			try{					
				var dateCreated = item.querySelector("[itemprop~=dateCreated][content]").content;
				var dateModified = item.querySelector("[itemprop~=dateModified][content]").content;
				var createDate = commonFunctionObject.DateFormat(new Date(dateCreated), "yyyy-MM-dd hh:mm:ss");
				var editDate = commonFunctionObject.DateFormat(new Date(dateModified), "yyyy-MM-dd hh:mm:ss");
					 
				var sideItem = item.querySelector(".ContentItem-meta");
				var timeDiv = document.createElement('div');
				timeDiv.innerHTML = `创建于:&nbsp;${createDate}&nbsp;&nbsp;&nbsp;修改于:&nbsp;${editDate}`;
				timeDiv.class = "Voters";
				timeDiv.style.cssText = 'color:#6f6f6f;font-size:13px;display:block;padding:0px;';
				sideItem.appendChild(timeDiv);
			}catch(e){}
		}
		return true;
	};
	// 提问者标识出来
	this.showQuestionAuthor = function(){
		//此处代码借鉴自 - 知乎增强
		//原作者：X.I.U
		//https://greasyfork.org/zh-CN/scripts/419081-%E7%9F%A5%E4%B9%8E%E5%A2%9E%E5%BC%BA
		if (document.querySelector('.BrandQuestionSymbol, .QuestionAuthor')) return
		let qJson = JSON.parse(document.querySelector('#js-initialData').textContent).initialState.entities.questions[/\d+/.exec(location.pathname)[0]].author,
			html = `<div class="BrandQuestionSymbol"><a class="BrandQuestionSymbol-brandLink" href="/people/${qJson.urlToken}"><img role="presentation" src="${qJson.avatarUrl}" class="BrandQuestionSymbol-logo" alt=""><span class="BrandQuestionSymbol-name">${qJson.name}</span></a><div class="BrandQuestionSymbol-divider" style="margin-left: 5px;margin-right: 10px;"></div></div>`;
		document.querySelector('.QuestionHeader-topics').insertAdjacentHTML('beforebegin', html);
	};
	this.startDealwithQuestion = function(){
		let isMarkComplete = true;
		setInterval(()=>{
			if(isMarkComplete){
				isMarkComplete = false;
				isMarkComplete = this.addTimeAnswerItems();
			}
		}, 2500);
		this.showQuestionAuthor();
		this.addDateQuestion();
	};
	this.start = function(){
		const host = window.location.host;
		const self = this;
		if(host == "link.zhihu.com"){ 
			this.autoJumpTarget();
		}
		if(host.indexOf("zhihu.com")!=-1){
			this.markArticleOrQuestion();
			if(window.location.href.indexOf("www.zhihu.com/question/")!=-1){
				this.startDealwithQuestion();
			}
		}
	};
}
	
//最后统一调用
try{
	let newOriginalInterfaceList = originalInterfaceList; //统一接口
	if(functionController.superVideoHelper){
		const superVideoHelperObject = new superVideoHelper(newOriginalInterfaceList);
		if(superVideoHelperObject.isRun()){
			if(commonFunctionObject.GMgetValue("copyright_video_remind",null)==="true"){
				superVideoHelperObject.start();
			}else{
				var r=confirm(
					"脚本运行提醒！！！\u000d"+
					"1、VIP视频解析中所用到的解析接口全部收集自互联网（源码可见），版权问题请联系相关解析接口所有者！\u000d"+
					"2、为创造良好的创作氛围，请大家支持正版！\u000d"+
					"3、脚本仅限个人学习交流，切勿用于任何商业等其它用途！\u000d"+
					"4、继续使用，即表明你已经明确使用脚本可能带来的风险，且愿意自行承担相关风险，对于风险脚本不承担任何责任！\u000d"+
					"5、此提醒只弹出一次，确认后，后续将不在弹出，请知悉！"
				);
				if(r==true){
					commonFunctionObject.GMsetValue("copyright_video_remind","true");
					superVideoHelperObject.start();
				}
			}
		}
		
		(new superVideoHelperMobile(newOriginalInterfaceList)).start();
	}
}catch(e){
	console.log("全网VIP解析：error："+e);
}
	
try{
	if(functionController.bilibiliHelper){
		new bilibiliHelper(commonFunctionObject).start();
	}
}catch(e){
	console.log("B站视频下载：error："+e);
}

try{
	if(functionController.zhihuHelper){
		new zhihuHelper(commonFunctionObject).start();
	}
}catch(e){
	console.log("知乎助手：error："+e);
}
	
try{
	if(functionController.searchEnginesNavigation){
		new searchEnginesNavigation(commonFunctionObject).start();
	}
}catch(e){
	console.log("搜索引擎网址导航：error："+e);
}
	/**
 * 购物助手部分功能借鉴自：https://greasyfork.org/zh-CN/scripts/428266
 * 作者：洪皓儿，原脚本开源协议：AGPL License
 * 本脚本继承AGPL License协议并开源，在源代码基础上优化了部分逻辑，修复了部分bug，特此申明！！
 */
const recordBrowsingHistoryKey = "record_browsing_history_mark_key";
const browsedHtml= `
	<div style="position:absolute;white-space: nowrap; top:7px;padding:2px 5px;font-size:12px;background-color:rgba(0,0,0);color:#FFF;z-index:9999999999;border-radius:20px;right:10px;"><b>已浏览</b></div>
`
function getEcommercePlatform(url = window.location.href){
	let platform = "";
	if(url.indexOf("detail.tmall")!=-1 || url.indexOf("tmall.hk")!=-1 || url.indexOf("pages.tmall.com")!=-1){
		platform = "tmall";
	}else if(url.indexOf("taobao.com")!=-1 || url.indexOf("maiyao.liangxinyao.com")!=-1){
		platform = "taobao";
	}else if(url.indexOf("jd.com")!=-1 || url.indexOf("npcitem.jd.hk")!=-1 || url.indexOf("yiyaojd.com")!=-1){
		platform = "jd";
	}else if(url.indexOf("detail.vip.com")!=-1 || url.indexOf("www.vipglobal.hk")!=-1){
		platform = "vpinhui";
	}
	return platform;
}	
function QueryCoupon(){
	this.platforms = ["detail.tmall.com", "item.taobao.com", "item.jd.com", "item.yiyaojd.com", "npcitem.jd.hk", 
		"detail.tmall.hk", "detail.vip.com", "item.jkcsjd.com"];
	this.createQrcodeIsResult = true;
	this.isRun=function(){
		for(var i=0; i<this.platforms.length;i++){
			if(window.location.host.indexOf(this.platforms[i])!=-1){
				return true;
			}
		}
		return false;
	};
	this.filterName=function(str){
		if(!str) return "";
		str = str.replace(/\t/g,"");
		str = str.replace(/\r/g,"");
		return encodeURIComponent(str)
	};
	this.getGoodsData=async function(platform){
		var goodsId = "";
		var goodsName = "";
		const href = window.location.href;
		if(platform=="taobao"){
			goodsId = commonFunctionObject.getParamterQueryUrl(window.location.search, "id");
			try{
				const titleObj = document.querySelector("[class^='ItemTitle--']");
				if(!!titleObj){
					goodsName = titleObj.textContent;
				}
			}catch(e){}
			
		}else if(platform=="tmall"){
			goodsId = commonFunctionObject.getParamterQueryUrl(window.location.search, "id");
			try{
				const titleObj = document.querySelector("[class^='ItemTitle--']");
				if(!!titleObj){
					goodsName = titleObj.textContent;
				}
			}catch(e){}
			
		}else if(platform=="jd"){
			goodsId = commonFunctionObject.getEndHtmlIdByUrl(href);
			try{
				const titleObj = document.querySelector("[class='sku-name']");
				if(!!titleObj){
					goodsName = titleObj.textContent;
				}
			}catch(e){}
		}else if(platform=="vpinhui"){
			goodsId = commonFunctionObject.getEndHtmlIdByUrl(href).replace("detail-","");
			const titleObj = document.querySelector("[class='pib-title-detail']");
			if(!!titleObj){
				goodsName = titleObj.textContent;
			}
		}
		const data = {"goodsId":goodsId, "goodsName":this.filterName(goodsName)};
		return data;
	};
	this.randomSpmValue=function(){
		$("meta[name='data-spm']").each(function(){
			var max = 5000;
			var min = 1000;
			var randomValue = Math.floor(Math.random() * (max - min + 1) ) + min;
			var randomLetter = String.fromCharCode(Math.floor( Math.random() * 26) + "a".charCodeAt(0));
			$(this).attr("content", randomValue+randomLetter);
		});
		$("meta[name='spm-id']").each(function(){
			var max = 5000;
			var min = 1000;
			var randomValue = Math.floor(Math.random() * (max - min + 1) ) + min;
			var randomLetter = String.fromCharCode(Math.floor( Math.random() * 26) + "a".charCodeAt(0));
			$(this).attr("content", randomValue+randomLetter);
		});
		$("body").find("*").each(function(){
			$(this).removeAttr("data-spm-anchor-id");
			$(this).removeAttr("data-spm");
		});
	};
	this.runAliDeceptionSpm=function(){
		const host = window.location.host;
		if(host.indexOf("aliyun.com")!=-1 || host.indexOf("taobao.com")!=-1 || host.indexOf("tmall.com")!=-1){
			this.randomSpmValue();
			setInterval(()=>{
				this.randomSpmValue();
			}, 2000);
		}
	};
	this.browsingHistoryMark=function(platform, goodsId){
		let histories = commonFunctionObject.GMgetValue(recordBrowsingHistoryKey,[]);
		let saveContent = platform+"_"+goodsId;
		if(!histories.includes(saveContent)){
			histories.unshift(saveContent);
			commonFunctionObject.GMsetValue(recordBrowsingHistoryKey,histories.slice(0,60));
		}
	};
	this.createHtml=async function(platform, goodsId, goodsName){
		if(!platform || !goodsId){
			return "kong";
		}
		this.browsingHistoryMark(platform, goodsId); //把浏览记录给存在本地
		let addition = "";
		if(platform=="vpinhui"){
			const vip = goodsId.split("-");
			addition = vip[0];
			goodsId = vip[1];
		}
		const goodsCouponUrl = "https://t.mimixiaoke.com/api/plugin/hit/v2?script=9&v=1.0.2&platform="+platform+"&id="+goodsId+"&q="+goodsName+"&addition="+addition;
		try{
			const data = await commonFunctionObject.request("GET", goodsCouponUrl, null);
			if(data.result=="success" && !!data.data){
				const json = JSON.parse(data.data);
				
				await this.createCoupon(platform, json.data);
				await this.createQrcode(platform, json.mscan);
									
				//开启插入检测
				let heartms = 0;
				const HEART_DELAY = 1500, MAX_MS = 1000*30;  
				const createResultInterval = setInterval(async ()=>{
					if(this.createQrcodeIsResult){
						if(document.querySelector("*[name='exist-llkbccxs-9246-hi']") || heartms>=MAX_MS){
							clearInterval(createResultInterval);
						}else{
							await this.createCoupon(platform, json.data);
						}
					}
					heartms += HEART_DELAY;
				}, HEART_DELAY);
			}
		}catch(e){
			console.log("createCouponHtml:",e);
		}
	};
	this.getHandlerElement=async function(handler){
		const getElement = async (handler)=>{
			const promiseArray = [];
			const handlers = handler.split("@");
			for(let i=0; i<handlers.length; i++){
				const eleName = handlers[i];
				if(!eleName){
					continue;
				}
				if(eleName=="body"){
					promiseArray.push(
						new Promise((resolve,reject) =>{ resolve(document.body) }) 
					);
				}else if(eleName=="html"){
					promiseArray.push(
						new Promise((resolve,reject) =>{ resolve(document.html) }) 
					);
				}else{
					promiseArray.push(commonFunctionObject.getElementObject(eleName, document.body, true, 10, 1500));
				}
			}
			const element = await Promise.race(promiseArray);
			return element ? element : null;
		}

		const element = await getElement(handler);
		return new Promise((resolve,reject) =>{
			resolve(element);
		});
	};
	this.createCoupon=async function(platform, result){
		try{
			this.createQrcodeIsResult = false;
			if(!result || result==="null" || !result.hasOwnProperty("css") || !result.hasOwnProperty("html") || !result.hasOwnProperty("handler")){
				return;
			}
			const  cssText = result.css, htmlText = result.html, handler = result.handler, templateId = result.templateId;
			if(!cssText || !htmlText || !handler){
				return;
			}
			GM_addStyle(cssText);

			// 添加HTML, 需要动态检测元素
			const handlerElement = await this.getHandlerElement(handler);
			if(handlerElement){
				const $handlerElement = $(handlerElement);
				if(platform=="taobao"){
					$handlerElement.parent().after(htmlText);
				}else if(platform=="tmall"){
					$handlerElement.parent().after(htmlText);
				}else if(platform=="jd"){
					$handlerElement.after(htmlText);
				}else if(platform=="vpinhui"){
					$handlerElement.after(htmlText);
				}
			}
			
			const $template = $("#"+templateId);
			if($template.length == 0){
				return;
			}
			
			const couponId = $template.data("id");
			const goodsPrivateUrl = "https://t.mimixiaoke.com/api/private/change/coupon?script=9&v=1.0.2&platform="+platform+"&id=";
			
			if(!/\d/.test(couponId)){
				return;
			}
			
			setInterval(()=>{
				$template.find("*").each(function(){
					$(this).removeAttr("data-spm-anchor-id");
				});
			},400);
			
			const couponElementA = $template.find("a[name='cpShUrl']");				
			couponElementA.unbind("click").bind("click", ()=>{
				event.stopPropagation();
				event.preventDefault();
				commonFunctionObject.request("GET", goodsPrivateUrl+couponId, null).then((privateResultData)=>{
					if(privateResultData.result==="success" && !!privateResultData.data){
						let url = JSON.parse(privateResultData.data).url;
						if(!!url) GM_openInTab(url, {active:true});
					}
				});
			});
								
			//canvas画二维码
			var $canvasElement = $("#ca"+templateId);
			if($canvasElement.length == 0){
				return;
			}
			const qrcodeResultData = await commonFunctionObject.request("GET", goodsPrivateUrl+couponId, null);
			if(!!qrcodeResultData && qrcodeResultData.result==="success" && !!qrcodeResultData.data){
				let img = JSON.parse(qrcodeResultData.data).img;
				if(!!img){
					var canvasElement = document.getElementById("ca"+templateId);
					var cxt = canvasElement.getContext("2d");
					var imgData = new Image();
					imgData.src = img;
					imgData.onload=function(){
						cxt.drawImage(imgData, 0, 0, imgData.width, imgData.height);
					}
				}
			}
		}catch(e){
			console.log("~~~~~~~~~~~~~~~~~",e);
		}finally{
			this.createQrcodeIsResult = true;
		}
	};
	this.createQrcode=async function(platform, mscan){
		if(!mscan || mscan==="null" || !mscan.hasOwnProperty("mount") 
			|| !mscan.hasOwnProperty("html")|| !mscan.hasOwnProperty("qrcode")){
			return;
		}
		const {mount, html, qrcode, iden} = mscan;
		if(!!mount && !!html && !!qrcode && !!iden){
			$(mount).append(html);
			var canvasElement = document.getElementById("mscan"+iden);
			var width = canvasElement.getAttribute("width");
			var height = canvasElement.getAttribute("height");
			var cxt = canvasElement.getContext("2d");
			var imgData = new Image();
			imgData.src = qrcode;
			imgData.onload=function(){
				cxt.drawImage(imgData, 0, 0, width, height);
			}
		}
	};
	this.start=async function(){
		if(this.isRun()){
			this.runAliDeceptionSpm();
			const platform = getEcommercePlatform();
			if(!platform) return;
			//如果sku太多就折叠,不然移动端体验太差了
			if(platform=="tmall" || platform=="taobao"){
				commonFunctionObject.getElementObject("div[class^='skuWrapper--']", document.body, false, 10, 1500).then((skuItemWrapper)=>{
					if(skuItemWrapper != null){
						const { style } = skuItemWrapper;
						style.maxHeight = "400px";
						style.overflow = "auto";
					}
				}).catch(()=>{});
			}else if(platform=="jd"){
				const skuItemWrapper = document.querySelector("#choose-attrs");
				if(skuItemWrapper){
					const { style } = skuItemWrapper;
					style.maxHeight = "400px";
					style.overflow = "auto";
				}
			}
			const goodsData = await this.getGoodsData(platform);
			this.createHtml(platform, goodsData.goodsId, goodsData.goodsName);
		}
	};
}

function SearchPageObject(){
	this.intervalIsRunComplete = true;  //定时任务一个循环是否完成
	this.histories = commonFunctionObject.GMgetValue(recordBrowsingHistoryKey, []);
	this.isRun = function(){
		const visitHref = window.location.href;
		const allows = [
			/^https:\/\/www\.taobao\.com(\/|\/\?)?/i,//淘宝首页
			/^https:\/\/s\.taobao\.com/i,
			/^https:\/\/shop(\d+)\.taobao\.com/i, 
			/^https:\/\/www\.tmall\.com(\/|\/\?)?/i,//天猫首页
			/pages\.tmall\.com/i,
			/list\.tmall\.com/i,
			/list\.tmall\.hk/i,
			/tmall\.com\/category/i,
			/tmall\.com\/search/i,
			/tmall\.com\/shop/i,
			/tmall\.com\/\?q=/i,
			/maiyao\.liangxinyao\.com/i,
			/^https:\/\/www\.jd\.com(\/|\/\?)?/i, //京东主页
			/search\.jd\.com/i,
			/search\.jd\.hk/i,
			/pro\.jd\.com\/mall/i,
			/jd\.com\/view_search/i, //商店主页
			/category\.vip\.com/i,
			/list\.vip\.com/i
		];
		let isAllow = false;
		for(let i=0; i<allows.length; i++){
			if(allows[i].test(visitHref)){
				isAllow = true;
				break;
			}
		}
		return isAllow;
	};
	
	this.requestConf=function(){
		return new Promise((resolve, reject)=>{
			commonFunctionObject.request("GET", "https://t.mimixiaoke.com/api/plugin/load/conf", null).then((data)=>{
				if(data.result=="success" && !!data.data){
					resolve(data.data);
				}else{
					resolve(null);
				}
			});
		});
	};
	
	this.pickupSearchElements=function(conf){ //收集列表的元素
		const selectorElementList = new Array();
		const url = window.location.href;
		let confFilter = conf;
		try{
			confFilter = confFilter.replace(/\\\\/g,"\\");
		}catch(e){}
		const confJson = JSON.parse(confFilter);
		for(let key in confJson){
			if(!confJson.hasOwnProperty(key)){
				continue;
			}
			for(let i=0; i<confJson[key].length; i++){
				const itemJson = confJson[key][i];
				if(!itemJson.hasOwnProperty("elements") || !itemJson.hasOwnProperty("matches")){
					continue;
				}
				const {elements, matches} = itemJson;
				const isMatch = matches.map((reg)=>(new RegExp(reg, "i")).test(url)).some((res)=>res);
				if(isMatch){
					for(let j=0; j<elements.length; j++){
						selectorElementList.push({
							"element":elements[j]["element"],
							"findA":elements[j]["findA"],
							"page":elements[j]["page"]
						});
					}
				}
			}
		}
		return selectorElementList;
	};
	
	
	this.createAllElementHtml=function(items){ //为所有的商品创建提示
		this.intervalIsRunComplete = false;
		const promises = [];
		items.forEach((item)=>{
			promises.push(this.createOneElementHtml(item));
		});
		Promise.all(promises).then((result)=>{
			this.intervalIsRunComplete = true;
		});
	};
	
	/**
	 * 为商品box添加有券提醒
	 */
	this.createOneElementHtml=function(item){  //查询到每个商品list
		const {element, page, findA} = item;
		const self = this;
		return new Promise(function(resolve, reject){
			if(element.attr("honghaoerbox")){
				resolve(-10000);
				return;
			}
			element.attr("honghaoerbox","true");
			element.css("position","relative");
			element.on("click",function(){
				$(this).append(browsedHtml);
			});
			
			var goodsDetailUrl = null;
			if(findA==="this"){
				goodsDetailUrl = element.attr("href");
			}else if(/^child@/.test(findA)){
				const elementA = element.find(findA.replace(/^child@/,""));
				if(elementA){
					goodsDetailUrl = elementA.attr("href");
				}
			}
			if(!goodsDetailUrl){
				resolve(-20000);
				return;
			}
			
			var analysisData = null;
			if(page.indexOf("jd_")!=-1){
				var jdId = commonFunctionObject.getEndHtmlIdByUrl(goodsDetailUrl);
				if(!!jdId) analysisData = {"id":jdId, "platform":"jd"};
			}else if(page.indexOf("vpinhui_")!=-1){
				var vipId = commonFunctionObject.getEndHtmlIdByUrl(goodsDetailUrl).replace("detail-","");;
				if(!!vipId){
					analysisData = {"id":vipId.split("-")[1], "platform":"vpinhui"};
				}
			}else{
				var platform = getEcommercePlatform(goodsDetailUrl);
				var id = commonFunctionObject.getParamterQueryUrl(goodsDetailUrl, "id");
				if(platform && id){
					analysisData = {"id":id, "platform":platform};
				}
			}
			if(!analysisData){
				resolve(-30000);
				return;
			}
			
			const mark = analysisData.platform + "_" + analysisData.id;
			if(self.histories.includes(mark)){
				element.append(browsedHtml);
			}
			
			const searchUrl = "https://t.mimixiaoke.com/api/ebusiness/coupon/exist/"+analysisData.platform+"?id="+analysisData.id;
			commonFunctionObject.request("GET", searchUrl, null).then((data)=>{
				if(data.result=="success" && !!data.data){
					const { tip, encryptLink } = JSON.parse(data.data);
					if(tip){
						element.append(tip);
					}
					if(encryptLink){
						let decryptUrl = null;
						try{
							const decryptLink = atob(encryptLink);
							decryptUrl = decryptLink.split('').reverse().join('');
						}catch(e){}
						if(decryptUrl){
							self.relativeJu(page, element, decryptUrl);
						}
					}
				}
				resolve(10000);
			}).catch(()=>{
				resolve(-40000);
			});
		});		
	};
	this.relativeJu=function(page, element, decryptUrl){
		const self = this;
		try{
			if(page.indexOf("jd_")!=-1){
				element.find("a").each(function(){
					if($(this).attr("href").indexOf("item.jd.com")!=-1){
						$(this).removeAttr("onclick");
						$(this).unbind("click").bind("click", function(e){
							e.preventDefault();
							e.stopPropagation();
							commonFunctionObject.GMopenInTab(decryptUrl);
						});
					}
				});
			}
			else if(page.indexOf("taobao_")!=-1 || page.indexOf("tmall_")!=-1){
				element.unbind("click").bind("click",function(e){
					const target = $(e.target);
					const tagName = target.prop("tagName").toUpperCase();
					let isPreventDefault = false;
					if(tagName==="A"){ //只有点击A标签才去判断
						const href = target.attr("href");
						const isDetail = [/detail\.tmall\.com/, /item\.taobao\.com/]
							.map((reg)=> reg.test(href))
							.some((result) => result);
						if(isDetail){
							isPreventDefault = true;
						}
					}else{
						isPreventDefault = true;
					}
					if(isPreventDefault){
						e.preventDefault();
						e.stopPropagation();
						commonFunctionObject.GMopenInTab(decryptUrl);
					}	
				});
			}
			else if(page.indexOf("vpinhui_")!=-1){
				element.find("a").each(function(){
					if($(this).attr("href").indexOf("detail.vip.com/detail-")!=-1){
						$(this).unbind("click").bind("click", function(e){
							e.preventDefault();
							e.stopPropagation();
							commonFunctionObject.GMopenInTab(decryptUrl);
						});
					}
				});
			}
		}catch(e){
			console.log(e);
		}
	};
	
	this.searchPage=function(selectorElementList){
		const items = [];
		selectorElementList.forEach((elementData)=>{
			if(elementData.element){
				$(elementData.element).each(function(){
					items.push({"element":$(this), "findA": elementData.findA, "page":elementData.page});
				});
			}
		});
		if(items.length>0){
			this.createAllElementHtml(items);
		}
	};
	
	this.start=function(){
		if(this.isRun()){
			this.requestConf().then((conf)=>{
				const selectorElementList = this.pickupSearchElements(conf);
				if(this.intervalIsRunComplete){
					this.searchPage(selectorElementList);
				}
				setInterval(()=>{
					if(this.intervalIsRunComplete){
						this.searchPage(selectorElementList);
					}
				}, 1500);
			});
		}
	};
}
try{
	(new SearchPageObject()).start();
	(new QueryCoupon()).start();
	
	if(/taobao|jd|tmall|jkcsjd|vip|vipglobal|yiyaojd|liangxinyao/.test(window.location.host)){
		GM_registerMenuCommand("清除商品浏览记录", ()=> {
			if(confirm('此弹窗来自脚本-[🔥]!!网购小助手,不花冤枉钱\n是否要移除所有的浏览记录？移除后将不可恢复...')){
				commonFunctionObject.GMsetValue(recordBrowsingHistoryKey,[]); //已浏览标识
			}
		});
	}
}catch(e){
	console.log("优惠券查询：error："+e);
}
	
})();
