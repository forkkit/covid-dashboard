self.webpackChunk([21],{33:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var o=a(2),r=a(4);class n extends o.a{static getConfig(){return{className:"Neo.component.wrapper.AmChart",ntype:"am-chart",chartConfig:null,chartType:"XYChart",combineSeriesTooltip:!1,data_:null,dataPath:"",package:"am4charts",_vdom:{style:{position:"relative",height:"100%",width:"100%"},cn:[{style:{position:"absolute",height:"100%",width:"100%"},cn:[{style:{height:"100%"}}]}]}}}getVdomRoot(){return this.vdom.cn[0].cn[0]}getVnodeRoot(){return this.vnode.childNodes[0].childNodes[0]}onConstructed(){super.onConstructed();const t=this;t.chartConfig||r.a.logError("wrapper.AmChart defined without a chartConfig",t.id),t.parseChartConfig(t.chartConfig)}afterSetData(t,e){let a=this;t&&Neo.main.addon.AmCharts.updateData({appName:a.appName,data:t,dataPath:a.dataPath,id:a.id})}afterSetMounted(t,e){let a=this;if(!1===t&&void 0!==e&&Neo.main.addon.AmCharts.destroy({appName:a.appName,id:a.id}),super.afterSetMounted(t,e),t){const t={appName:a.appName,combineSeriesTooltip:a.combineSeriesTooltip,config:a.chartConfig,data:a.data,id:a.id,package:a.package,type:a.chartType};a.data&&(t.data=a.data,t.dataPath=a.dataPath),setTimeout(()=>{Neo.main.addon.AmCharts.create(t).then(a.onChartMounted)},50)}}onChartMounted(){}parseChartConfig(t){const e=this;Neo.isArray(t)?t.forEach(t=>{e.parseChartConfig(t)}):Object.entries(t).forEach(([a,o])=>{Neo.isArray(o)||Neo.isObject(o)?e.parseChartConfig(o):Neo.isString(o)&&o.startsWith("@config:")&&(o=o.substr(8),e[o]?t[a]=e[o]:r.a.logError("The used @config does not exist:",o,e))})}}Neo.applyClassConfig(n)},36:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var o=a(3);class r extends o.a{static getConfig(){return{className:"Neo.container.Viewport",ntype:"viewport",applyBodyCls:!0,cls:["neo-viewport"]}}onConstructed(){super.onConstructed(),this.applyBodyCls&&Neo.main.DomAccess.applyBodyCls({appName:this.appName,cls:["neo-body-viewport"]})}}Neo.applyClassConfig(r)},82:function(t,e,a){"use strict";a.r(e),a.d(e,"onStart",(function(){return i}));var o=a(33),r=a(36);class n extends r.a{static getConfig(){return{className:"TestApp.MainContainer",ntype:"main-container",autoMount:!0,layout:"fit",style:{padding:"50px"},items:[{module:o.a,chartType:"PieChart",chartConfig:{legend:{},series:[{type:"PieSeries",dataFields:{value:"litres",category:"country"}}],data:[{country:"Lithuania",litres:501.9},{country:"Czech Republic",litres:301.9},{country:"Ireland",litres:201.1},{country:"Germany",litres:165.8},{country:"Australia",litres:139.9},{country:"Austria",litres:128.3},{country:"UK",litres:99},{country:"Belgium",litres:60},{country:"The Netherlands",litres:50}]}}]}}}Neo.applyClassConfig(n);const i=()=>Neo.app({appPath:"examples/charts/",mainView:n,name:"TestApp"})}});