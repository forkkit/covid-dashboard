self.webpackChunk([15],{36:function(a,e,t){"use strict";t.d(e,"a",(function(){return o}));var n=t(3);class o extends n.a{static getConfig(){return{className:"Neo.container.Viewport",ntype:"viewport",applyBodyCls:!0,cls:["neo-viewport"]}}onConstructed(){super.onConstructed(),this.applyBodyCls&&Neo.main.DomAccess.applyBodyCls({appName:this.appName,cls:["neo-body-viewport"]})}}Neo.applyClassConfig(o)},80:function(a,e,t){"use strict";t.r(e),t.d(e,"onStart",(function(){return s}));var n=t(36);class o extends n.a{static getConfig(){return{className:"SharedCovidMap.MainContainer",autoMount:!0,layout:{ntype:"fit"}}}}Neo.applyClassConfig(o);const s=()=>Neo.app({appPath:"apps/sharedcovidmap/",mainView:o,name:"SharedCovidMap"})}});