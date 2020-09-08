if (typeof(argonConfig) == "undefined"){
	var argonConfig = {};
}
if (typeof(argonConfig.wp_path) == "undefined"){
	argonConfig.wp_path = "/";
}
/*Cookies 操作*/
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

/*多语言支持*/
var translation = {};
translation['en_US'] = {
	"确定": "OK",
	"清除": "Clear",
	"恢复博客默认": "Set To Default",
	"评论内容不能为空": "Comment content cannot be empty",
	"昵称不能为空": "Name cannot be empty",
	"邮箱或 QQ 号格式错误": "Incorrect email or QQ format",
	"邮箱格式错误": "Incorrect email format",
	"网站格式错误 (不是 http(s):// 开头)": "Website URL format error",
	"验证码未输入": "CAPTCHA cannot be empty",
	"验证码格式错误": "Incorrect CAPTCHA format",
	"评论格式错误": "Comment format error",
	"发送中": "Sending",
	"正在发送": "Sending",
	"评论正在发送中...": "Comment is sending...",
	"发送": "Send",
	"评论发送失败": "Comment failed",
	"发送成功": "Success",
	"您的评论已发送": "Your comment has been sent",
	"评论": "Comments",
	"未知原因": "Unknown Error",
	"评论内容不能为空": "Comment content cannot be empty",
	"编辑中": "Editing",
	"正在编辑": "Editing",
	"评论正在编辑中...": "Comment is editing",
	"编辑": "Edit",
	"评论编辑失败": "Comment editing failed",
	"已编辑": "Edited",
	"编辑成功": "Success",
	"您的评论已编辑": "Your comment has been edited",
	"评论 #": "Comment #",
	"的编辑记录": "- Edit History",
	"加载失败": "Failed to load",
	"展开": "Show",
	"没有更多了": "No more comments",
	"找不到该 Repo": "Can't find the repository",
	"获取 Repo 信息失败": "Failed to get repository information",
	"点赞失败": "Vote failed",
	"Hitokoto 获取失败": "Failed to get Hitokoto",
	"复制成功": "Copied",
	"代码已复制到剪贴板": "Code has been copied to the clipboard",
	"复制失败": "Failed",
	"请手动复制代码": "Please copy the code manually",
	"刚刚": "Now",
	"分钟前": "minutes ago",
	"小时前": "hours ago",
	"昨天": "Yesterday",
	"前天": "The day before yesterday",
	"天前": "days ago",
	"隐藏行号": "Hide Line Numbers",
	"显示行号": "Show Line Numbers",
	"开启折行": "Enable Break Line",
	"关闭折行": "Disable Break Line",
	"复制": "Copy",
	"全屏": "Fullscreen",
	"退出全屏": "Exit Fullscreen",
};
translation['ru_RU'] = {
	"确定": "ОК",
	"清除": "Очистить",
	"恢复博客默认": "Восстановить по умолчанию",
	"评论内容不能为空": "Содержимое комментария не может быть пустым",
	"昵称不能为空": "Имя не может быть пустым",
	"邮箱或 QQ 号格式错误": "Неверный формат электронной почты или QQ",
	"邮箱格式错误": "Неправильный формат электронной почты",
	"网站格式错误 (不是 http(s):// 开头)": "Сайт ошибка формата URL-адреса ",
	"验证码未输入": "Вы не решили капчу",
	"验证码格式错误": "Ошибка проверки капчи",
	"评论格式错误": "Неправильный формат комментария",
	"发送中": "Отправка",
	"正在发送": "Отправка",
	"评论正在发送中...": "Комментарий отправляется...",
	"发送": "Отправить",
	"评论发送失败": "Не удалось отправить комментарий",
	"发送成功": "Комментарий отправлен",
	"您的评论已发送": "Ваш комментарий был отправлен",
	"评论": "Комментарии",
	"未知原因": "Неизвестная ошибка",
	"评论内容不能为空": "Содержимое комментария не может быть пустым",
	"编辑中": "Редактируется",
	"正在编辑": "Редактируется",
	"评论正在编辑中...": "Комментарий редактируется",
	"编辑": "Редактировать",
	"评论编辑失败": "Не удалось отредактировать комментарий",
	"已编辑": "Изменено",
	"编辑成功": "Успешно",
	"您的评论已编辑": "Ваш комментарий был изменен",
	"评论 #": "Комментарий #",
	"的编辑记录": "- История изменений",
	"加载失败": "Ошибка загрузки",
	"展开": "Показать",
	"没有更多了": "Комментариев больше нет",
	"找不到该 Repo": "Невозможно найти репозиторий",
	"获取 Repo 信息失败": "Неудалось получить информацию репозитория",
	"点赞失败": "Ошибка голосования",
	"Hitokoto 获取失败": "Проблемы с вызовом Hitokoto",
	"复制成功": "Скопировано",
	"代码已复制到剪贴板": "Код скопирован в буфер обмена",
	"复制失败": "Неудалось",
	"请手动复制代码": "Скопируйте код вручную",
	"刚刚": "Сейчас",
	"分钟前": "минут назад",
	"小时前": "часов назад",
	"昨天": "Вчера",
	"前天": "Позавчера",
	"天前": "дней назад",
	"隐藏行号": "Скрыть номера строк",
	"显示行号": "Показать номера строк",
	"开启折行": "Включить перенос строк",
	"关闭折行": "Выключить перенос строк",
	"复制": "Скопировать",
	"全屏": "Полноэкранный режим",
	"退出全屏": "Выход из полноэкранного режима",
};
translation['zh_TW'] = {
	"确定": "確定",
	"清除": "清除",
	"恢复博客默认": "恢復博客默認",
	"评论内容不能为空": "評論內容不能為空",
	"昵称不能为空": "昵稱不能為空",
	"邮箱或 QQ 号格式错误": "郵箱或 QQ 號格式錯誤",
	"邮箱格式错误": "郵箱格式錯誤",
	"网站格式错误 (不是 http(s):// 开头)": "網站格式錯誤 (不是 http(s):// 開頭)",
	"验证码未输入": "驗證碼未輸入",
	"验证码格式错误": "驗證碼格式錯誤",
	"评论格式错误": "評論格式錯誤",
	"发送中": "發送中",
	"正在发送": "正在發送",
	"评论正在发送中...": "評論正在發送中...",
	"发送": "發送",
	"评论发送失败": "評論發送失敗",
	"发送成功": "發送成功",
	"您的评论已发送": "您的評論已發送",
	"评论": "評論",
	"未知原因": "未知原因",
	"评论内容不能为空": "評論內容不能為空",
	"编辑中": "編輯中",
	"正在编辑": "正在編輯",
	"评论正在编辑中...": "評論正在編輯中...",
	"编辑": "編輯",
	"评论编辑失败": "評論編輯失敗",
	"已编辑": "已編輯",
	"编辑成功": "編輯成功",
	"您的评论已编辑": "您的評論已編輯",
	"评论 #": "評論 #",
	"的编辑记录": "的編輯記錄",
	"加载失败": "加載失敗",
	"展开": "展開",
	"没有更多了": "沒有更多了",
	"找不到该 Repo": "找不到該 Repo",
	"获取 Repo 信息失败": "獲取 Repo 信息失敗",
	"点赞失败": "點贊失敗",
	"Hitokoto 获取失败": "Hitokoto 獲取失敗",
	"复制成功": "復制成功",
	"代码已复制到剪贴板": "代碼已復制到剪貼板",
	"复制失败": "復制失敗",
	"请手动复制代码": "請手動復制代碼",
	"刚刚": "剛剛",
	"分钟前": "分鐘前",
	"小时前": "小時前",
	"昨天": "昨天",
	"前天": "前天",
	"天前": "天前",
	"隐藏行号": "隱藏行號",
	"显示行号": "顯示行號",
	"开启折行": "開啟折行",
	"关闭折行": "關閉折行",
	"复制": "復制",
	"全屏": "全屏",
	"退出全屏": "退出全屏"
};
function __(text){
	let lang = argonConfig.language;
	if (typeof(translation[lang]) == "undefined"){
		return text;
	}
	if (typeof(translation[lang][text]) == "undefined"){
		return text;
	}
	return translation[lang][text];
}

/*根据滚动高度改变顶栏透明度*/
!function(){
	let toolbar = document.getElementById("navbar-main");
	let $bannerContainer = $("#banner_container");
	let $content = $("#content");

	let startTransitionHeight;
	let endTransitionHeight;

	startTransitionHeight = $bannerContainer.offset().top - 75;
	endTransitionHeight = $content.offset().top - 75;

	$(window).resize(function(){
		startTransitionHeight = $bannerContainer.offset().top - 75;
		endTransitionHeight = $content.offset().top - 75;
	});

	function changeToolbarTransparency(){
		let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (scrollTop < startTransitionHeight){
			toolbar.style.setProperty('background-color', 'rgba(var(--toolbar-color), 0)', 'important');
			toolbar.style.setProperty('box-shadow', 'none');
			toolbar.classList.add("navbar-ontop");
			return;
		}
		if (scrollTop > endTransitionHeight){
			toolbar.style.setProperty('background-color', 'rgba(var(--toolbar-color), 0.85)', 'important');
			toolbar.style.setProperty('box-shadow', '');
			toolbar.classList.remove("navbar-ontop");
			return;
		}
		let transparency = (scrollTop - startTransitionHeight) / (endTransitionHeight - startTransitionHeight) * 0.85;
		toolbar.style.setProperty('background-color', 'rgba(var(--toolbar-color), ' + transparency, 'important');
		toolbar.style.setProperty('box-shadow', '');
		toolbar.classList.remove("navbar-ontop");
	}
	changeToolbarTransparency();
	document.addEventListener("scroll", changeToolbarTransparency, {passive: true});
}();

/*顶栏搜索*/
$(document).on("click" , "#navbar_search_input_container" , function(){
	$(this).addClass("open");
	$("#navbar_search_input").focus();
});
$(document).on("blur" , "#navbar_search_input_container" , function(){
	$(this).removeClass("open");
});
$(document).on("keydown" , "#navbar_search_input_container #navbar_search_input" , function(e){
	if (e.keyCode != 13){
		return;
	}
	let word = $(this).val();
	if (word == ""){
		$("#navbar_search_input_container").blur();
		return;
	}
	let scrolltop = $(document).scrollTop();
	$.pjax({
		url: argonConfig.wp_path + "?s=" + encodeURI(word)
	});
});
/*侧栏搜索*/
$(document).on("click" , "#leftbar_search_container" , function(){
	$(".leftbar-search-button").addClass("open");
	$("#leftbar_search_input").removeAttr("readonly").focus();
	$("#leftbar_search_input").focus();
	$("#leftbar_search_input").select();
	return false;
});
$(document).on("blur" , "#leftbar_search_container" , function(){
	$(".leftbar-search-button").removeClass("open");
	$("#leftbar_search_input").attr("readonly", "readonly");
});
$(document).on("keydown" , "#leftbar_search_input" , function(e){
	if (e.keyCode != 13){
		return;
	}
	let word = $(this).val();
	if (word == ""){
		$("#leftbar_search_container").blur();
		return;
	}
	$("html").removeClass("leftbar-opened");
	$.pjax({
		url: argonConfig.wp_path + "?s=" + encodeURI(word)
	});
});

/*左侧栏随页面滚动浮动*/
!function(){
	let $leftbarPart1 = $('#leftbar_part1');
	let $leftbarPart2 = $('#leftbar_part2');
	let leftbarPart1 = document.getElementById('leftbar_part1');
	let leftbarPart2 = document.getElementById('leftbar_part2');

	let part1OffsetTop = $('#leftbar_part1').offset().top;
	let part1OuterHeight = $('#leftbar_part1').outerHeight();

	function changeLeftbarStickyStatus(){
		let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if( part1OffsetTop + part1OuterHeight + 10 - scrollTop <= 90 ){
			//滚动条在页面中间浮动状态
			leftbarPart2.classList.add('sticky');
		}else{
			//滚动条在顶部 不浮动状态
			leftbarPart2.classList.remove('sticky');
		}
		if( part1OffsetTop + part1OuterHeight + 10 - scrollTop <= 20 ){//侧栏下部分是否可以随 Headroom 一起向上移动
			document.body.classList.add('leftbar-can-headroom');
		}else{
			document.body.classList.remove('leftbar-can-headroom');
		}
	}
	changeLeftbarStickyStatus();
	document.addEventListener("scroll", changeLeftbarStickyStatus, {passive: true});
	$(window).resize(function(){
		part1OffsetTop = $('#leftbar_part1').offset().top;
		part1OuterHeight = $('#leftbar_part1').outerHeight();
		changeLeftbarStickyStatus();
	});
	new MutationObserver(function(){
		part1OffsetTop = $('#leftbar_part1').offset().top;
		part1OuterHeight = $('#leftbar_part1').outerHeight();
		changeLeftbarStickyStatus();
	}).observe(leftbarPart1, {attributes: true, childList: true, subtree: true});
}();

/*Headroom*/
if (argonConfig.headroom){
	var headroom = new Headroom(document.querySelector("body"),{
		"tolerance" : {
			up : 0,
			down : 0
		},
		"offset": 0,
			"classes": {
			"initial": "with-headroom",
			"pinned": "headroom---pinned",
			"unpinned": "headroom---unpinned",
			"top": "headroom---top",
			"notTop": "headroom---not-top",
			"bottom": "headroom---bottom",
			"notBottom": "headroom---not-bottom",
			"frozen": "headroom---frozen"
		}
	}).init();
}

/*浮动按钮栏相关 (回顶等)*/
!function(){
	let $fabtns = $('#float_action_buttons');
	let $backToTopBtn = $('#fabtn_back_to_top');
	let $toggleSidesBtn = $('#fabtn_toggle_sides');
	let $toggleDarkmode = $('#fabtn_toggle_darkmode');
	let $toggleAmoledMode = $('#blog_setting_toggle_darkmode_and_amoledarkmode');
	let $toggleBlogSettings = $('#fabtn_toggle_blog_settings_popup');
	let $goToComment = $('#fabtn_go_to_comment');

	let $readingProgressBar = $('#fabtn_reading_progress_bar');
	let $readingProgressDetails = $('#fabtn_reading_progress_details');

	let isScrolling = false;
	$backToTopBtn.on("click" , function(){
		if (!isScrolling){
			isScrolling = true;
			setTimeout(function(){
				isScrolling = false;
			} , 600);
			$("body,html").animate({
				scrollTop: 0
			}, 600);
		}
	});

	$toggleDarkmode.on("click" , function(){
		toggleDarkmode();
	});

	$toggleAmoledMode.on("click" , function(){
		toggleAmoledDarkMode();
	})

	if ($("#post_comment").length > 0){
		$("#fabtn_go_to_comment").removeClass("d-none");
	}else{
		$("#fabtn_go_to_comment").addClass("d-none");
	}
	$goToComment.on("click" , function(){
		gotoHash("#post_comment" , 600);
		$("#post_comment_content").focus();
	});

	if (localStorage['Argon_fabs_Floating_Status'] == "left"){
		$fabtns.addClass("fabtns-float-left");
	}
	$toggleSidesBtn.on("click" , function(){
		$fabtns.addClass("fabtns-unloaded");
		setTimeout(function(){
			$fabtns.toggleClass("fabtns-float-left");
			if ($fabtns.hasClass("fabtns-float-left")){
				localStorage['Argon_fabs_Floating_Status'] = "left";
			}else{
				localStorage['Argon_fabs_Floating_Status'] = "right";
			}
			$fabtns.removeClass("fabtns-unloaded");
		} , 300);
	});
	//博客设置
	$toggleBlogSettings.on("click" , function(){
		$("#float_action_buttons").toggleClass("blog_settings_opened");
	});
	$("#close_blog_settings").on("click" , function(){
		$("#float_action_buttons").removeClass("blog_settings_opened");
	});
	$("#blog_setting_darkmode_switch .custom-toggle-slider").on("click" , function(){
		toggleDarkmode();
	});
	//字体
	$("#blog_setting_font_sans_serif").on("click" , function(){
		$("html").removeClass("use-serif");
		localStorage['Argon_Use_Serif'] = "false";
	});
	$("#blog_setting_font_serif").on("click" , function(){
		$("html").addClass("use-serif");
		localStorage['Argon_Use_Serif'] = "true";
	});
	if (localStorage['Argon_Use_Serif'] == "true"){
		$("html").addClass("use-serif");
	}else if (localStorage['Argon_Use_Serif'] == "false"){
		$("html").removeClass("use-serif");
	}
	//阴影
	$("#blog_setting_shadow_small").on("click" , function(){
		$("html").removeClass("use-big-shadow");
		localStorage['Argon_Use_Big_Shadow'] = "false";
	});
	$("#blog_setting_shadow_big").on("click" , function(){
		$("html").addClass("use-big-shadow");
		localStorage['Argon_Use_Big_Shadow'] = "true";
	});
	if (localStorage['Argon_Use_Big_Shadow'] == "true"){
		$("html").addClass("use-big-shadow");
	}else if (localStorage['Argon_Use_Big_Shadow'] == "false"){
		$("html").removeClass("use-big-shadow");
	}
	//滤镜
	function setBlogFilter(name){
		if (name == undefined || name == ""){
			name = "off";
		}
		if (!$("html").hasClass("filter-" + name)){
			$("html").removeClass("filter-sunset filter-darkness filter-grayscale");
			if (name != "off"){
				$("html").addClass("filter-" + name);
			}
		}
		$("#blog_setting_filters .blog-setting-filter-btn").removeClass("active");
		$("#blog_setting_filters .blog-setting-filter-btn[filter-name='" + name + "']").addClass("active");
		localStorage['Argon_Filter'] = name;
	}
	setBlogFilter(localStorage['Argon_Filter']);
	$(".blog-setting-filter-btn").on("click" , function(){
		setBlogFilter(this.getAttribute("filter-name"));
	});

	function changefabtnDisplayStatus(){
		//阅读进度
		let readingProgress = $(window).scrollTop() / Math.max($(document).height() - $(window).height(), 0.01);
		$readingProgressDetails.html((readingProgress * 100).toFixed(0) + "%");
		$readingProgressBar.css("width" , (readingProgress * 100).toFixed(0) + "%");
		//是否显示回顶
		if ($(window).scrollTop() >= 400 || readingProgress >= 0.5){
			$backToTopBtn.removeClass("fabtn-hidden");
		}else{
			$backToTopBtn.addClass("fabtn-hidden");
		}
	}
	changefabtnDisplayStatus();
	$(window).scroll(function(){
		changefabtnDisplayStatus();
	});
	$fabtns.removeClass("fabtns-unloaded");
}();

/*卡片圆角大小调整*/
!function(){
	function setCardRadius(radius, save){
		document.documentElement.style.setProperty('--card-radius', radius + "px");
		if (save){
			localStorage["argon_card_radius"] = radius;
		}
	}
	let slider = document.getElementById('blog_setting_card_radius');
	noUiSlider.create(slider, {
		start: [localStorage["argon_card_radius"] == undefined ? $("meta[name='theme-card-radius']").attr("content") : localStorage["argon_card_radius"]],
		step: 0.5,
		connect: [true, false],
		range: {
			'min': [0],
			'max': [30]
		}
	});
	slider.noUiSlider.on('update', function (values){
		let value = values[0];
		setCardRadius(value, false);
	});
	slider.noUiSlider.on('set', function (values){
		let value = values[0];
		setCardRadius(value, true);
	});
	$(document).on("click" , "#blog_setting_card_radius_to_default" , function(){
		slider.noUiSlider.set($("meta[name='theme-card-radius']").attr("content"));
		setCardRadius($("meta[name='theme-card-radius']").attr("content"), false);
		localStorage.removeItem("argon_card_radius");
	});
	if (localStorage["argon_card_radius"] != undefined){
		setCardRadius(localStorage["argon_card_radius"], false);
	}
}();
/*需要密码的文章加载*/
$(document).on("submit" , ".post-password-form" , function(){
	$("input[type='submit']", this).attr("disabled", "disabled");
	let url = $(this).attr("action");
	$.pjax.form(this, {
		push: false,
		replace: false
	});
	return false;
});
/*URL 中 # 根据 ID 定位*/
function gotoHash(hash , durtion){
	if (hash.length == 0){
		return;
	}
	if ($(hash).length == 0){
		return;
	}
	if (durtion == null){
		durtion = 200;
	}
	$("body,html").animate({
		scrollTop: $(hash).offset().top - 80
	}, durtion);
}
function getHash(url){
	return url.substring(url.indexOf('#'));
}
!function(){
	$(window).on("hashchange" , function(){
		hash = window.location.hash;
		gotoHash(hash);
	});
	$(window).trigger("hashchange");
}();

/*显示文章过时信息 Toast*/
function showPostOutdateToast(){
	if ($("#primary #post_outdate_toast").length > 0){
		iziToast.show({
			title: '',
			message: $("#primary #post_outdate_toast").data("text"),
			class: 'shadow-sm',
			position: 'topRight',
			backgroundColor: 'var(--themecolor)',
			titleColor: '#ffffff',
			messageColor: '#ffffff',
			iconColor: '#ffffff',
			progressBarColor: '#ffffff',
			icon: 'fa fa-info',
			close: false,
			timeout: 8000
		});
		$("#primary #post_outdate_toast").remove();
	}
}
showPostOutdateToast();

/*Zoomify*/
function zoomifyInit(){
	if (argonConfig.zoomify == false){
		return;
	}
	$("article img").zoomify(argonConfig.zoomify);
}
zoomifyInit();

/*Lazyload*/
function lazyloadInit(){
	if (argonConfig.lazyload == false){
		return;
	}
	if (argonConfig.lazyload.effect == "none"){
		delete argonConfig.lazyload.effect;
	}
	$("article img.lazyload:not(.lazyload-loaded) , .post-thumbnail.lazyload:not(.lazyload-loaded) , .related-post-thumbnail.lazyload:not(.lazyload-loaded)").lazyload(Object.assign(argonConfig.lazyload, {load: function(){$(this).addClass("lazyload-loaded")}}));
	$(".comment-item-text .comment-sticker.lazyload").lazyload(Object.assign(argonConfig.lazyload, {load: function(){$(this).removeClass("lazyload")}}));
}
lazyloadInit();

/*Pangu.js*/
function panguInit(){
	if (argonConfig.pangu == true){
		pangu.spacingElementById('post_content');
	}
}
panguInit();

/*Clamp.js*/
function clampInit(){
	$(".clamp").each(function(index, dom) {
		$clamp(dom, {clamp: dom.getAttribute("clamp-line")});
	});
}
clampInit();

/*Pjax*/
$.pjax.defaults.timeout = 10000;
$.pjax.defaults.container = ['#primary', '#leftbar_part1_menu', '#leftbar_part2_inner', '.page-information-card-container', '#wpadminbar'];
$.pjax.defaults.fragment = ['#primary', '#leftbar_part1_menu', '#leftbar_part2_inner', '.page-information-card-container', '#wpadminbar'];
$(document).pjax("a[href]:not([no-pjax]):not(.no-pjax):not([target='_blank']):not([download])")
.on('pjax:click', function(e, f, g){
	if (argonConfig.disable_pjax == true){
		e.preventDefault();
		return;
	}
	NProgress.remove();
	NProgress.start();
}).on('pjax:afterGetContainers', function(e, f, g) {
	if (g.is("#main article.post-preview a.post-title")){
		let $card = $(g.parents("article.post-preview")[0]);
		$card.append("<div class='loading-css-animation'><div class='loading-dot loading-dot-1' ></div><div class='loading-dot loading-dot-2' ></div><div class='loading-dot loading-dot-3' ></div><div class='loading-dot loading-dot-4' ></div><div class='loading-dot loading-dot-5' ></div><div class='loading-dot loading-dot-6' ></div><div class='loading-dot loading-dot-7' ></div><div class='loading-dot loading-dot-8' ></div></div></div>");
		$card.addClass("post-pjax-loading");
		$("#main").addClass("post-list-pjax-loading");
		let offsetTop = $($card).offset().top - $("#main").offset().top;
		$card.css("transform" , "translateY(-" + offsetTop + "px)");
		$("body,html").animate({
			scrollTop: 0
		}, 450);
	}
}).on('pjax:send', function() {
	NProgress.set(0.618);
}).on('pjax:beforeReplace', function(e, dom) {
	if ($("#post_comment", dom[0]).length > 0){
		$("#fabtn_go_to_comment").removeClass("d-none");
	}else{
		$("#fabtn_go_to_comment").addClass("d-none");
	}
}).on('pjax:complete', function() {
	NProgress.inc();
	try{
		if (MathJax != undefined){
			MathJax.typeset();
		}
	}catch (err){}
	try{
		if ($("script#mathjax_v2_script" , $vdom).length > 0){
			MathJax.Hub.Typeset();
		}
	}catch (err){}
	try{
		if (renderMathInElement != undefined){
			renderMathInElement(document.body,{
				delimiters: [
					{left: "$$", right: "$$", display: true},
					{left: "$", right: "$", display: false},
					{left: "\\(", right: "\\)", display: false}
				]
			});
		}
	}catch (err){}

	lazyloadInit();
	zoomifyInit();
	highlightJsRender();
	panguInit();
	clampInit();
	getGithubInfoCardContent();
	showPostOutdateToast();
	calcHumanTimesOnPage();

	if (typeof(window.pjaxLoaded) == "function"){
		try{
			window.pjaxLoaded();
		}catch (err){
			console.error(err);
		}
	}

	NProgress.done();
}).on('pjax:end', function() {
	lazyloadInit();
});


/*Tags Dialog pjax 加载后自动关闭*/
$(document).on("click" , "#blog_tags .tag" , function(){
	$("#blog_tags button.close").trigger("click");
});
$(document).on("click" , "#blog_categories .tag" , function(){
	$("#blog_categories button.close").trigger("click");
});

/*侧栏 & 顶栏菜单手机适配*/
!function(){
	$(document).on("click" , "#fabtn_open_sidebar" , function(){
		$("html").addClass("leftbar-opened");
	});
	$(document).on("click" , "#sidebar_mask" , function(){
		$("html").removeClass("leftbar-opened");
	});
	$(document).on("click" , "#leftbar a[href]:not([no-pjax]):not([href^='#'])" , function(){
		$("html").removeClass("leftbar-opened");
	});
	$(document).on("click" , "#navbar_global.show .navbar-nav a[href]:not([no-pjax]):not([href^='#'])" , function(){
		$("#navbar_global .navbar-toggler").click();
	});
	$(document).on("click" , "#navbar_global.show #navbar_search_btn_mobile" , function(){
		$("#navbar_global .navbar-toggler").click();
	});
}();

/*折叠区块小工具*/
$(document).on("click" , ".collapse-block .collapse-block-title" , function(){
	let id = this.getAttribute("collapse-id");
	let selecter = ".collapse-block[collapse-id='" + id +"']";
	$(selecter).toggleClass("collapsed");
	if ($(selecter).hasClass("collapsed")){
		$(selecter + " .collapse-block-body").stop(true , false).slideUp(200);
	}else{
		$(selecter + " .collapse-block-body").stop(true , false).slideDown(200);
	}
	$("html").trigger("scroll");
});

/*获得 Github Repo Shortcode 信息卡内容*/
function getGithubInfoCardContent(){
	$(".github-info-card").each(function(){
		(function($this){
			if ($this.attr("data-getdata") == "backend"){
				$(".github-info-card-description" , $this).html($this.attr("data-description"));
				$(".github-info-card-stars" , $this).html($this.attr("data-stars"));
				$(".github-info-card-forks" , $this).html($this.attr("data-forks"));
				return;
			}
			$(".github-info-card-description" , $this).html("Loading...");
			$(".github-info-card-stars" , $this).html("-");
			$(".github-info-card-forks" , $this).html("-");
			author = $this.attr("data-author");
			project = $this.attr("data-project");
			$.ajax({
				url : "https://api.github.com/repos/" + author + "/" + project,
				type : "GET",
				dataType : "json",
				success : function(result){
					description = result.description;
					if (result.homepage != ""){
						description += " <a href='" + result.homepage + "' target='_blank' no-pjax>" + result.homepage + "</a>"
					}
					$(".github-info-card-description" , $this).html(description);
					$(".github-info-card-stars" , $this).html(result.stargazers_count);
					$(".github-info-card-forks" , $this).html(result.forks_count);
					//console.log(result);
				},
				error : function(xhr){
					if (xhr.status == 404){
						$(".github-info-card-description" , $this).html(__("找不到该 Repo"));
					}else{
						$(".github-info-card-description" , $this).html(__("获取 Repo 信息失败"));
					}
				}
			});
		})($(this));
	});
}
getGithubInfoCardContent();

//颜色计算
function rgb2hsl(R,G,B){
	let r = R / 255;
	let g = G / 255;
	let b = B / 255;

	let var_Min = Math.min(r, g, b);
	let var_Max = Math.max(r, g, b);
	let del_Max = var_Max - var_Min;

	let H, S, L = (var_Max + var_Min) / 2;

	if (del_Max == 0){
		H = 0;
		S = 0;
	}else{
		if (L < 0.5){
			S = del_Max / (var_Max + var_Min);
		}else{
			S = del_Max / (2 - var_Max - var_Min);
		}

		del_R = (((var_Max - r) / 6) + (del_Max / 2)) / del_Max;
		del_G = (((var_Max - g) / 6) + (del_Max / 2)) / del_Max;
		del_B = (((var_Max - b) / 6) + (del_Max / 2)) / del_Max;

		if (r == var_Max){
			H = del_B - del_G;
		}
		else if (g == var_Max){
			H = (1 / 3) + del_R - del_B;
		}
		else if (b == var_Max){
			H = (2 / 3) + del_G - del_R;
		}
		if (H < 0) H += 1;
		if (H > 1) H -= 1;
	}
	return {
		'h': H,//0~1
		's': S,
		'l': L
	};
}
function Hue_2_RGB(v1,v2,vH){
	if (vH < 0) vH += 1;
	if (vH > 1) vH -= 1;
	if ((6 * vH) < 1) return (v1 + (v2 - v1) * 6 * vH);
	if ((2 * vH) < 1) return v2;
	if ((3 * vH) < 2) return (v1 + (v2 - v1) * ((2 / 3) - vH) * 6);
	return v1;
}
function hsl2rgb(h,s,l){
	let r, g, b, var_1, var_2;
	if (s == 0){
		r = l;
		g = l;
		b = l;
	}
	else{
		if (l < 0.5){
			var_2 = l * (1 + s);
		}
		else{
			var_2 = (l + s) - (s * l);
		}
		var_1 = 2 * l - var_2;
		r = Hue_2_RGB(var_1, var_2, h + (1 / 3));
		g = Hue_2_RGB(var_1, var_2, h);
		b = Hue_2_RGB(var_1, var_2, h - (1 / 3));
	}
	return {
		'R': Math.round(r * 255),//0~255
		'G': Math.round(g * 255),
		'B': Math.round(b * 255),
		'r': r,//0~1
		'g': g,
		'b': b
	};
}
function rgb2hex(r,g,b){
	let hex = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F');
	let rh, gh, bh;
	rh = "", gh ="", bh="";
	while (rh.length < 2){
		rh = hex[r%16] + rh;
		r = Math.floor(r / 16);
	}
	while (gh.length < 2){
		gh = hex[g%16] + gh;
		g = Math.floor(g / 16);
	}
	while (bh.length < 2){
		bh = hex[b%16] + bh;
		b = Math.floor(b / 16);
	}
	return "#" + rh + gh + bh;
}
function hex2rgb(hex){
	//hex: #XXXXXX
	let dec = {
		'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, 'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15
	};
	return {
		'R': (dec[hex.substr(1,1)] * 16 + dec[hex.substr(2,1)]),//0~255
		'G': (dec[hex.substr(3,1)] * 16 + dec[hex.substr(4,1)]),
		'B': (dec[hex.substr(5,1)] * 16 + dec[hex.substr(6,1)]),
		'r': (dec[hex.substr(1,1)] * 16 + dec[hex.substr(2,1)]) / 255,//0~1
		'g': (dec[hex.substr(3,1)] * 16 + dec[hex.substr(4,1)]) / 255,
		'b': (dec[hex.substr(5,1)] * 16 + dec[hex.substr(6,1)]) / 255
	};
}
function rgb2gray(R,G,B){
	return Math.round(R * 0.299 + G * 0.587 + B * 0.114);
}
function hex2gray(hex){
	let rgb_array = hex2rgb(hex);
	return hex2gray(rgb_array['R'], rgb_array['G'], rgb_array['B']);
}
function rgb2str(rgb){
	return rgb['R'] + "," + rgb['G'] + "," + rgb['B'];
}
function hex2str(hex){
	return rgb2str(hex2rgb(hex));
}
//颜色选择器 & 切换主题色
if ($("meta[name='argon-enable-custom-theme-color']").attr("content") == 'true'){
	let themeColorPicker = new Pickr({
		el: '#theme-color-picker',
		container: 'body',
		theme: 'monolith',
		closeOnScroll: false,
		appClass: 'theme-color-picker-box',
		useAsButton: false,
		padding: 8,
		inline: false,
		autoReposition: true,
		sliders: 'h',
		disabled: false,
		lockOpacity: true,
		outputPrecision: 0,
		comparison: false,
		default: localStorage["argon_custom_theme_color"] == undefined ? ($("meta[name='theme-color']").attr("content")) : localStorage["argon_custom_theme_color"],
		swatches: ['#5e72e4', '#fa7298', '#009688', '#607d8b', '#2196f3', '#3f51b5', '#ff9700', '#109d58', '#dc4437', '#673bb7', '#212121', '#795547'],
		defaultRepresentation: 'HEX',
		showAlways: false,
		closeWithKey: 'Escape',
		position: 'top-start',
		adjustableNumbers: false,
		components: {
			palette: true,
			preview: true,
			opacity: false,
			hue: true,
			interaction: {
				hex: true,
				rgba: true,
				hsla: false,
				hsva: false,
				cmyk: false,
				input: true,
				clear: false,
				cancel: true,
				save: true
			}
		},
		strings: {
			save: __('确定'),
			clear: __('清除'),
			cancel: __('恢复博客默认')
		}
	});
	themeColorPicker.on('change', instance => {
		updateThemeColor(pickrObjectToHEX(instance), true);
	})
	themeColorPicker.on('save', (color, instance) => {
		updateThemeColor(pickrObjectToHEX(instance._color), true);
		themeColorPicker.hide();
	})
	themeColorPicker.on('cancel', instance => {
		themeColorPicker.hide();
		themeColorPicker.setColor($("meta[name='theme-color-origin']").attr("content").toUpperCase());
		updateThemeColor($("meta[name='theme-color-origin']").attr("content").toUpperCase(), false);
		localStorage.removeItem("argon_custom_theme_color");
	});
}
function pickrObjectToHEX(color){
	let HEXA = color.toHEXA();
	return ("#" + HEXA[0] + HEXA[1] + HEXA[2]).toUpperCase();
}
function updateThemeColor(color, save){
	let themecolor = color;
	let themecolor_rgbstr = hex2str(themecolor);
	let RGB = hex2rgb(themecolor);
	let HSL = rgb2hsl(RGB['R'], RGB['G'], RGB['B']);

	let RGB_dark0 = hsl2rgb(HSL['h'], HSL['s'], Math.max(HSL['l'] - 0.025, 0));
	let themecolor_dark0 = rgb2hex(RGB_dark0['R'],RGB_dark0['G'],RGB_dark0['B']);

	let RGB_dark = hsl2rgb(HSL['h'], HSL['s'], Math.max(HSL['l'] - 0.05, 0));
	let themecolor_dark = rgb2hex(RGB_dark['R'], RGB_dark['G'], RGB_dark['B']);

	let RGB_dark2 = hsl2rgb(HSL['h'], HSL['s'], Math.max(HSL['l'] - 0.1, 0));
	let themecolor_dark2 = rgb2hex(RGB_dark2['R'],RGB_dark2['G'],RGB_dark2['B']);

	let RGB_dark3 = hsl2rgb(HSL['h'], HSL['s'], Math.max(HSL['l'] - 0.15, 0));
	let themecolor_dark3 = rgb2hex(RGB_dark3['R'],RGB_dark3['G'],RGB_dark3['B']);

	let RGB_light = hsl2rgb(HSL['h'], HSL['s'], Math.min(HSL['l'] + 0.1, 1));
	let themecolor_light = rgb2hex(RGB_light['R'],RGB_light['G'],RGB_light['B']);

	document.documentElement.style.setProperty('--themecolor', themecolor);
	document.documentElement.style.setProperty('--themecolor-dark0', themecolor_dark0);
	document.documentElement.style.setProperty('--themecolor-dark', themecolor_dark);
	document.documentElement.style.setProperty('--themecolor-dark2', themecolor_dark2);
	document.documentElement.style.setProperty('--themecolor-dark3', themecolor_dark3);
	document.documentElement.style.setProperty('--themecolor-light', themecolor_light);
	document.documentElement.style.setProperty('--themecolor-rgbstr', themecolor_rgbstr);

	if (rgb2gray(RGB['R'], RGB['G'], RGB['B']) < 50){
		$("html").addClass("themecolor-toodark");
	}else{
		$("html").removeClass("themecolor-toodark");
	}

	$("meta[name='theme-color']").attr("content", themecolor);
	$("meta[name='theme-color-rgb']").attr("content", themecolor_rgbstr);

	if (save){
		localStorage["argon_custom_theme_color"] = themecolor;
	}
}
if (localStorage["argon_custom_theme_color"] != undefined){
	updateThemeColor(localStorage["argon_custom_theme_color"], false);
}

/*评论区图片链接点击处理*/
!function(){
	let invid = 0;
	let activeImg = null;
	$(document).on("click" , ".comment-item-text .comment-image" , function(){
		$(".comment-image-preview", this).attr("data-easing", "cubic-bezier(0.4, 0, 0, 1)");
		$(".comment-image-preview", this).attr("data-duration", "500");
		if (!$(this).hasClass("comment-image-preview-zoomed")){
			activeImg = this;
			$(this).addClass("comment-image-preview-zoomed");
			if (!$(this).hasClass("loaded")){
				$(".comment-image-preview", this).attr('src', $(this).attr("data-src"));
			}
			$(".comment-image-preview", this).zoomify('zoomIn');
			if (!$(this).hasClass("loaded")){
				invid = setInterval(function(){
					if (activeImg.width != 0){
						$("html").trigger("scroll");
						$(activeImg).addClass("loaded");
						clearInterval(invid);
						activeImg = null;
					}
				}, 50);
			}
		}else{
			clearInterval(invid);
			activeImg = null;
			$(this).removeClass("comment-image-preview-zoomed");
			$(".comment-image-preview", this).zoomify('zoomOut');
		}
	});
}();

/*打字效果*/
function typeEffect(element, text, now, interval){
	element.classList.add('typing-effect');
	if (now > text.length){
		setTimeout(function(){
			element.classList.remove('typing-effect');
		}, 1000 - ((interval * now) % 1000) - 50);
		return;
	}
	element.innerText = text.substring(0, now);
	setTimeout(function(){typeEffect(element, text, now + 1, interval)}, interval);
}
!function(){
	$bannerTitle = $(".banner-title");
	if ($bannerTitle.data("text") != undefined){
		typeEffect($(".banner-title-inner")[0], $bannerTitle.data("text"), 0, $bannerTitle.data("interval"));
	}
}();

/*一言*/
if ($(".hitokoto").length > 0){
	$.ajax({
		type: 'GET',
		url: "https://v1.hitokoto.cn",
		success: function(result){
			$(".hitokoto").text(result.hitokoto);
		},
		error: function(result){
			$(".hitokoto").text(__("Hitokoto 获取失败"));
		}
	});
}

/*Highlight.js*/
function randomString(len) {
	len = len || 32;
	let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let res = "";
	for (let i = 0; i < len; i++) {
		res += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return res;
}
var codeOfBlocks = {};
function getCodeFromBlock(block){
	if (codeOfBlocks[block.id] != undefined){
		return codeOfBlocks[block.id];
	}
	let lines = $(".hljs-ln-code", block);
	let res = "";
	for (let i = 0; i < lines.length - 1; i++){
		res += lines[i].innerText;
		res += "\n";
	}
	res += lines[lines.length - 1].innerText;
	codeOfBlocks[block.id] = res;
	return res;
}
function highlightJsRender(){
	if (typeof(hljs) == "undefined"){
		return;
	}
	if (typeof(argonEnableCodeHighlight) == "undefined"){
		return;
	}
	if (!argonEnableCodeHighlight){
		return;
	}
	$("article pre.code").each(function(index, block) {
		if ($(block).hasClass("no-hljs")){
			return;
		}
		$(block).html("<code>" + $(block).html() + "</code>");
	});
	$("article pre > code").each(function(index, block) {
		if ($(block).hasClass("no-hljs")){
			return;
		}
		$(block).parent().attr("id", randomString());
		hljs.highlightBlock(block);
		hljs.lineNumbersBlock(block, {singleLine: true});
		$(block).parent().addClass("hljs-codeblock");
		$(block).attr("hljs-codeblock-inner", "");
		let copyBtnID = "copy_btn_" + randomString();
		$(block).parent().append(`<div class="hljs-control hljs-title">
				<div class="hljs-control-btn hljs-control-toggle-linenumber" tooltip-hide-linenumber="` + __("隐藏行号") + `" tooltip-show-linenumber="` + __("显示行号") + `">
					<i class="fa fa-list"></i>
				</div>
				<div class="hljs-control-btn hljs-control-toggle-break-line" tooltip-enable-breakline="` + __("开启折行") + `" tooltip-disable-breakline="` + __("关闭折行") + `">
					<i class="fa fa-align-left"></i>
				</div>
				<div class="hljs-control-btn hljs-control-copy" id=` + copyBtnID + ` tooltip="` + __("复制") + `">
					<i class="fa fa-clipboard"></i>
				</div>
				<div class="hljs-control-btn hljs-control-fullscreen" tooltip-fullscreen="` + __("全屏") + `" tooltip-exit-fullscreen="` + __("退出全屏") + `">
					<i class="fa fa-arrows-alt"></i>
				</div>
			</div>`);
		let clipboard = new ClipboardJS("#" + copyBtnID, {
			text: function(trigger) {
				return getCodeFromBlock($(block).parent()[0]);
			}
		});
		clipboard.on('success', function(e) {
			iziToast.show({
				title: __("复制成功"),
				message: __("代码已复制到剪贴板"),
				class: 'shadow',
				position: 'topRight',
				backgroundColor: '#2dce89',
				titleColor: '#ffffff',
				messageColor: '#ffffff',
				iconColor: '#ffffff',
				progressBarColor: '#ffffff',
				icon: 'fa fa-check',
				timeout: 5000
			});
		});
		clipboard.on('error', function(e) {
			iziToast.show({
				title: __("复制失败"),
				message: __("请手动复制代码"),
				class: 'shadow',
				position: 'topRight',
				backgroundColor: '#f5365c',
				titleColor: '#ffffff',
				messageColor: '#ffffff',
				iconColor: '#ffffff',
				progressBarColor: '#ffffff',
				icon: 'fa fa-close',
				timeout: 5000
			});
		});
	});
}
$(document).ready(function(){
	highlightJsRender();
});
$(document).on("click" , ".hljs-control-fullscreen" , function(){
	let block = $(this).parent().parent();
	block.toggleClass("hljs-codeblock-fullscreen");
	if (block.hasClass("hljs-codeblock-fullscreen")){
		$("html").addClass("noscroll codeblock-fullscreen");
	}else{
		$("html").removeClass("noscroll codeblock-fullscreen");
	}
});
$(document).on("click" , ".hljs-control-toggle-break-line" , function(){
	let block = $(this).parent().parent();
	block.toggleClass("hljs-break-line");
});
$(document).on("click" , ".hljs-control-toggle-linenumber" , function(){
	let block = $(this).parent().parent();
	block.toggleClass("hljs-hide-linenumber");
});

/*时间差计算*/
function addPreZero(num, n) {
	var len = num.toString().length;
	while(len < n) {
		num = "0" + num;
		len++;
	}
	return num;
}
function humanTimeDiff(time){
	let now = new Date();
	time = new Date(time);
	let delta = now - time;
	if (delta < 0){
		delta = 0;
	}
	if (delta < 1000 * 60){
		return __("刚刚");
	}
	if (delta < 1000 * 60 * 60){
		return parseInt(delta / (1000 * 60)) + " " + __("分钟前");
	}
	if (delta < 1000 * 60 * 60 * 24){
		return parseInt(delta / (1000 * 60 * 60)) + " " + __("小时前");
	}
	let yesterday = new Date(now - 1000 * 60 * 60 * 24);
	yesterday.setHours(0);
	yesterday.setMinutes(0);
	yesterday.setSeconds(0);
	yesterday.setMilliseconds(0);
	if (time > yesterday){
		return __("昨天") + " " + time.getHours() + ":" + addPreZero(time.getMinutes(), 2);
	}
	let theDayBeforeYesterday = new Date(now - 1000 * 60 * 60 * 24 * 2);
	theDayBeforeYesterday.setHours(0);
	theDayBeforeYesterday.setMinutes(0);
	theDayBeforeYesterday.setSeconds(0);
	theDayBeforeYesterday.setMilliseconds(0);
	if (time > theDayBeforeYesterday && argonConfig.language.indexOf("zh") == 0){
		return __("前天") + " " + time.getHours() + ":" + addPreZero(time.getMinutes(), 2);
	}
	if (delta < 1000 * 60 * 60 * 24 * 30){
		return parseInt(delta / (1000 * 60 * 60 * 24)) + " " + __("天前");
	}
	let theFirstDayOfThisYear = new Date(now);
	theFirstDayOfThisYear.setMonth(0);
	theFirstDayOfThisYear.setDate(1);
	theFirstDayOfThisYear.setHours(0);
	theFirstDayOfThisYear.setMinutes(0);
	theFirstDayOfThisYear.setSeconds(0);
	theFirstDayOfThisYear.setMilliseconds(0);
	if (time > theFirstDayOfThisYear){
		if (argonConfig.dateFormat == "YMD" || argonConfig.dateFormat == "MDY"){
			return (time.getMonth() + 1) + "-" + time.getDate();
		}else{
			return time.getDate() + "-" + (time.getMonth() + 1);
		}
	}
	if (argonConfig.dateFormat == "YMD"){
		return time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate();
	}else if (argonConfig.dateFormat == "MDY"){
		return time.getDate() + "-" + (time.getMonth() + 1) + "-" + time.getFullYear();
	}else if (argonConfig.dateFormat == "DMY"){
		return time.getDate() + "-" + (time.getMonth() + 1) + "-" + time.getFullYear();
	}
}
function calcHumanTimesOnPage(){
	$(".human-time").each(function(){
		$(this).text(humanTimeDiff(parseInt($(this).data("time")) * 1000));
	});
}
calcHumanTimesOnPage();
setInterval(function(){
	calcHumanTimesOnPage()
}, 15000);

/*搜索*/
// https://github.com/PaicHyperionDev/hexo-generator-search
var searchFunc = function(path, search_id, content_id) {
	'use strict';
	$.ajax({
		url: path,
		dataType: "xml",
		success: function( xmlResponse ) {
			var datas = $( "entry", xmlResponse ).map(function() {
				return {
					title: $( "title", this ).text(),
					content: $("content",this).text(),
					url: $( "url" , this).text()
				};
			}).get();
			var $input = document.getElementById(search_id);
			if (!$input) return;
			var $resultContent = document.getElementById(content_id);
			if ($("#local-search-input").length > 0) {
				$input.addEventListener('input', function () {
					var str = '<ul class=\"search-result-list\">';
					var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
					$resultContent.innerHTML = "";
					if (this.value.trim().length <= 0) {
						return;
					}
					datas.forEach(function (data) {
						var isMatch = true;
						var content_index = [];
						if (!data.title || data.title.trim() === '') {
							data.title = "Untitled";
						}
						var data_title = data.title.trim().toLowerCase();
						var data_content = data.content.trim().replace(/<[^>]+>/g, "").toLowerCase();
						var data_url = data.url;
						var index_title = -1;
						var index_content = -1;
						var first_occur = -1;
						if (data_content !== '') {
							keywords.forEach(function (keyword, i) {
								index_title = data_title.indexOf(keyword);
								index_content = data_content.indexOf(keyword);

								if (index_title < 0 && index_content < 0) {
									isMatch = false;
								} else {
									if (index_content < 0) {
										index_content = 0;
									}
									if (i == 0) {
										first_occur = index_content;
									}
								}
							});
						} else {
							isMatch = false;
						}
						if (isMatch) {
							str += "<li><a href='" + data_url + "' class='search-result-title'>" + data_title + "</a>";
							var content = data.content.trim().replace(/<[^>]+>/g, "");
							if (first_occur >= 0) {
								var start = first_occur - 20;
								var end = first_occur + 80;
								if (start < 0) {
									start = 0;
								}
								if (start == 0) {
									end = 100;
								}
								if (end > content.length) {
									end = content.length;
								}
								var match_content = content.substring(start, end);
								keywords.forEach(function (keyword) {
									var regS = new RegExp(keyword, "gi");
									match_content = match_content.replace(regS, "<em class=\"search-keyword\">" + keyword + "</em>");
								});
								str += "<p class=\"search-result\">" + match_content + "...</p>"
							}
							str += "</li>";
						}
					});
					str += "</ul>";
					$resultContent.innerHTML = str;
				});
			}
		}
	});
}
var search_path = $("#local-search-input").data("search.path");
if (search_path.length == 0) {
	search_path = "search.xml";
}
searchFunc($("#local-search-input").data("config.root") + search_path, 'local-search-input', 'local-search-result');

$(document).on("click" , ".search-result-title" , function(){
	$("#argon_search_modal button[data-dismiss='modal']").click();
});


/*Console*/
!function(){
	console.log('%cTheme: %cArgon%c-Hexo%c By solstice23', 'color: rgba(255,255,255,.6); background: #5e72e4; font-size: 15px;border-radius:5px 0 0 5px;padding:10px 0 10px 20px;','color: rgba(255,255,255,1); background: #5e72e4; font-size: 15px;border-radius:0;padding:10px 0 10px 0px;', 'color: rgba(255,255,255,.6); background: #5e72e4; font-size: 15px;padding:10px 15px 10px 0px;','color: #fff; background: #92A1F4; font-size: 15px;border-radius:0 5px 5px 0;padding:10px 20px 10px 15px;');
	console.log('%cVersion%c' + $("meta[name='theme-version']").attr("content"), 'color:#fff; background: #5e72e4;font-size: 12px;border-radius:5px 0 0 5px;padding:3px 10px 3px 10px;','color:#fff; background: #92a1f4;font-size: 12px;border-radius:0 5px 5px 0;padding:3px 10px 3px 10px;');
	console.log('%chttps://github.com/solstice23/hexo-theme-argon', 'font-size: 12px;border-radius:5px;padding:3px 10px 3px 10px;border:1px solid #5e72e4;');
}();
