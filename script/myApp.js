var Jswanxia={
	login:function(){
		api.openWin({
		    name: 'main',
		    url: './html/main.html',
		    pageParam: {
		        name: 'test'
		    }
		});
	},
	reg:function(){
		alert("000");
	},
	nav:function(){
		var NVTabBar = api.require('NVTabBar');
		NVTabBar.open({
		    styles: {
		        bg: '#fff',
		        h: 50,
		        dividingLine: {
		            width: 0.5,
		            color: '#000'
		        },
		        badge: {
		            bgColor: '#ff0',
		            numColor: '#fff',
		            size: 6.0,
		            fontSize:10 //数字类型,设置徽章字体大小,默认10。注意:仅支持iOS。
		        }
		    },
		    items: [{
		        w: api.winWidth / 4.0,
		        bg: {
		            marginB: 0,
		            image: 'rgba(0,0,0,0)'
		        },
		        iconRect: {
		            w: 25.0,
		            h: 25.0,
		        },
		        icon: {
		            normal: 'fs://res/NVTabBar/icon1.png',
		            highlight: 'fs://res/NVTabBar/icon2.png',
		            selected: 'fs://res/NVTabBar/icon3.png'
		        },
		        title: {text: '信息',size: 12.0,normal: '#696969',selected: '#00AEFF',marginB: 6.0}
		    }, {
		        w: api.winWidth / 4.0,
		        bg: {
		            marginB: 0,
		            image: 'rgba(0,0,0,0)'
		        },
		        iconRect: {
		            w: 25.0,
		            h: 25.0,
		        },
		        icon: {
		            normal: 'fs://res/NVTabBar/icon2.png',
		            highlight: 'fs://res/NVTabBar/icon21.png',
		            selected: 'fs://res/NVTabBar/icon23.png'
		        },
		        title: {text: '通讯录',size: 12.0,normal: '#696969',selected: '#00AEFF',marginB: 6.0}
		    }, {
		        w: api.winWidth / 4.0,
		        bg: {
		            marginB: 0,
		            image: 'rgba(0,0,0,0)'
		        },
		        iconRect: {
		            w: 25.0,
		            h: 25.0,
		        },
		        icon: {
		            normal: 'fs://res/NVTabBar/icon3.png',
		            highlight: 'fs://res/NVTabBar/icon31.png',
		            selected: 'fs://res/NVTabBar/icon32.png'
		        },
		        title: {text: '发现',size: 12.0,normal: '#696969',selected: '#00AEFF',marginB: 6.0}
		    }, {
		        w: api.winWidth / 4.0,
		        bg: {
		            marginB: 0,
		            image: 'rgba(0,0,0,0)'
		        },
		        iconRect: {
		            w: 25.0,
		            h: 25.0,
		        },
		        icon: {
		            normal: 'fs://res/NVTabBar/icon3.png',
		            highlight: 'fs://res/NVTabBar/icon31.png',
		            selected: 'fs://res/NVTabBar/icon32.png'
		        },
		        title: {text: '我',size: 12.0,normal: '#696969',selected: '#00AEFF',marginB: 6.0}
		    }],
		    selectedIndex: 0
		}, function(ret, err) {
			if(ret.eventType=="show"){
				$('.view-1').show();
			}
		    if (ret.eventType=="click" && ret.index==0) {
		    	$('.view-1').show();
		    	$('.view-2').hide();
		    	$('.view-3').hide();
		    	$('.view-4').hide();
		    }else if(ret.eventType=="click" && ret.index==1){
		    	$('.view-2').show();
		    	$('.view-1').hide();
		    	$('.view-3').hide();
		    	$('.view-4').hide();
		    }else if(ret.eventType=="click" && ret.index==2){
		    	$('.view-3').show();
		    	$('.view-1').hide();
		    	$('.view-2').hide();
		    	$('.view-4').hide();
		    }else if(ret.eventType=="click" && ret.index==3){
		    	$('.view-4').show();
		    	$('.view-1').hide();
		    	$('.view-2').hide();
		    	$('.view-3').hide();
		    }
		});
	},
	openChat:function(){
		api.openWin({
		    name: 'chat',
		    url: '../html/chat.html',
		    pageParam: {
		        name: 'test'
		    }
		});
	},
	chat:function(){
		var UIChatBox = api.require('UIChatBox');
		UIChatBox.open({
		    placeholder: '',
		    maxRows: 4,
		    emotionPath: 'widget://res/img/emotion',
		    texts: {
		        recordBtn: {
		            normalTitle: '按住说话',
		            activeTitle: '松开结束'
		        },
		        sendBtn: {
		            title: 'send'
		        }
		    },
		    styles: {
		        inputBar: {
		            borderColor: '#d9d9d9',
		            bgColor: '#f2f2f2'
		        },
		        inputBox: {
		            borderColor: '#B3B3B3',
		            bgColor: '#FFFFFF'
		        },
		        emotionBtn: {
		            normalImg: 'widget://res/img/chatBox_face1.png'
		        },
		        extrasBtn: {
		            normalImg: 'widget://res/img/chatBox_add1.png'
		        },
		        keyboardBtn: {
		            normalImg: 'widget://res/img/chatBox_key1.png'
		        },
		        speechBtn: {
		            normalImg: 'widget://res/img/chatBox_key1.png'
		        },
		        recordBtn: {
		            normalBg: '#c4c4c4',
		            activeBg: '#999999',
		            color: '#000',
		            size: 14
		        },
		        indicator: {
		            target: 'both',
		            color: '#c4c4c4',
		            activeColor: '#9e9e9e'
		        },
		        sendBtn: {
		            titleColor: '#4cc518',
		            bg: '#999999',
		            activeBg: '#46a91e',
		            titleSize: 14
		        }
		    },
		    extras: {
		        titleSize: 10,
		        titleColor: '#a3a3a3',
		        btns: [{
		            title: '图片',
		            normalImg: 'widget://res/img/chatBox_album1.png',
		            activeImg: 'widget://res/img/chatBox_album2.png'
		        }, {
		            title: '拍照',
		            normalImg: 'widget://res/img/chatBox_cam1.png',
		            activeImg: 'widget://res/img/chatBox_cam2.png'
		        }]
		    }
		}, function(ret, err) {
		    if (ret) {
		        alert(JSON.stringify(ret));
		    } else {
		        alert(JSON.stringify(err));
		    }
		});
	}
};
var jswx=Object.create(Jswanxia);
apiready = function(){
	var titleName=$("title").text();
	if(titleName=="home"){
		jswx.nav();
	}
	if(titleName=="聊天窗"){
		jswx.chat();
	}
}