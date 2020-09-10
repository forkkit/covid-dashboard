self.webpackChunk([23],{18:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(1);class o extends n.a{static getConfig(){return{className:"Neo.data.Model",ntype:"model",fields_:[],keyProperty_:"id",storeId:null,trackModifiedFields:!1}}afterSetFields(e,t){}getField(e){let t=this,a=0,n=t.fields.length;for(;a<n;a++)if(t.fields[a].name===e)return t.fields[a];return null}}Neo.applyClassConfig(o)},19:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(1),o=a(0);a(10);class i extends n.a{static getStaticConfig(){return{observable:!0}}static getConfig(){return{className:"Neo.selection.Model",ntype:"selection-model",cls:null,items:[],selectedCls:"neo-selected",singleSelect:!0,view_:null}}beforeGetView(){return Neo.getComponent(this._view)}beforeSetView(e){return e&&e.id}addDomListener(){}deselect(e,t,a,n){let i,s=this,r=s.view,l=r.vdom,c=r.getVdomChild(e);c&&(i=c.cls||[],o.a.remove(i,n||s.selectedCls),c.cls=i),o.a.remove(a||s.items,e),t||(r.vdom=l)}deselectAll(e){let t=this,a=[...t.items],n=t.view,o=n.vdom;a.forEach(e=>{t.deselect(e,!0)}),!e&&a.length>0&&(n.vdom=o)}destroy(){this.unregister(),super.destroy()}getSelection(){return this.items}hasSelection(){return this.items.length>0}isSelected(e){return this.items.indexOf(e)>-1}register(e){let t=this,a=e.cls||[];t.cls&&!a.includes(t.cls)&&(a.push(t.cls),e.cls=a),t.view=e,t.addDomListener()}removeDomListeners(){let e=this,t=e.view,a=[...t.domListeners];t.domListeners.forEach(t=>{t.scope===e&&o.a.remove(a,t)}),t.domListeners=a}select(e,t,a){e=Array.isArray(e)?e:[e];let n,i=this,s=i.view,r=s.vdom;i.singleSelect&&i.deselectAll(!0),e.forEach(e=>{"string"==typeof e&&(e=s.getVdomChild(e)),e&&(n=e.cls||[],o.a.add(n,a||i.selectedCls),e.cls=n)}),o.a.add(t||i.items,e),s[s.hasOwnProperty("silentSelect")&&!0===s.silentSelect?"_vdom":"vdom"]=r}toggleSelection(e){let t=this;t.isSelected(e)?t.deselect(e):t.select(e)}unregister(){let e=this,t=e.view.cls||[];e.cls&&t.includes(e.cls)&&(o.a.remove(t,e.cls),e.view.cls=t),e.deselectAll(),e.removeDomListeners()}}Neo.applyClassConfig(i)},58:function(e,t,a){"use strict";a.r(t),a.d(t,"onStart",(function(){return u}));var n=a(18);class o extends n.a{static getConfig(){return{className:"Neo.examples.component.coronaHelix.CountryModel",fields:[{name:"cases",type:"int"},{name:"country",type:"string"},{name:"critical",type:"int"},{name:"deaths",type:"int"},{name:"recovered",type:"int"},{name:"todayCases",type:"int"},{name:"todayDeaths",type:"int"}]}}}Neo.applyClassConfig(o);var i=a(9);class s extends i.a{static getConfig(){return{className:"Neo.examples.component.coronaHelix.CountryStore",keyProperty:"country",model:o}}}Neo.applyClassConfig(s);var r=a(43);class l extends r.a{static getStaticConfig(){return{flagRegEx:/ /gi}}static getConfig(){return{className:"Neo.examples.component.coronaHelix.CountryHelix",cls:["covid-country-helix","neo-helix"],deltaY:1.2,itemTpl:{cls:["surface","neo-helix-item"],style:{},tabIndex:"-1",cn:[{cls:["neo-item-wrapper"],style:{},cn:[{tag:"div",cls:["neo-country-helix-item"],style:{},cn:[{cls:["neo-item-header"],cn:[{tag:"img",cls:["neo-flag"]},{}]},{tag:"table",cls:["neo-content-table"],cn:[{tag:"tr",cn:[{tag:"td",html:"Cases"},{tag:"td",cls:["neo-align-right"]},{tag:"td",style:{width:"100%"}},{tag:"td",html:"Cases today"},{tag:"td",cls:["neo-align-right"]}]},{tag:"tr",cn:[{tag:"td",html:"Deaths"},{tag:"td",cls:["neo-align-right","neo-content-deaths"]},{tag:"td",style:{width:"100%"}},{tag:"td",html:"Deaths today"},{tag:"td",cls:["neo-align-right","neo-content-deaths"]}]},{tag:"tr",cn:[{tag:"td",html:"Recovered"},{tag:"td",cls:["neo-align-right","neo-content-recovered"]},{tag:"td",style:{width:"100%"}},{tag:"td",html:"Critical"},{tag:"td",cls:["neo-align-right","neo-content-critical"]}]}]}]}]}]},keyProperty:"country",radius:2500,rotationAngle:720,showCloneInfo:!1,store:s,translateY:500,translateZ:-2300}}createItem(e,t,a){let n=e.cn[0].cn[0],o=n.cn[1];return e.id=this.getItemVnodeId(t[this.keyProperty]),n.cn[0].cn[0].src=this.getCountryFlagUrl(t.country),n.cn[0].cn[1].html=t.country,o.cn[0].cn[1].html=t.cases,o.cn[1].cn[1].html=t.deaths,o.cn[2].cn[1].html=t.recovered,o.cn[0].cn[4].html=t.todayCases,o.cn[1].cn[4].html=t.todayDeaths,o.cn[2].cn[4].html=t.critical,e}getCountryFlagUrl(e){let t=e.toLowerCase().replace(l.flagRegEx,"-");return t={bosnia:"bosnia-and-herzegovina","cabo-verde":"cape-verde",car:"central-african-republic","caribbean-netherlands":"netherlands","channel-islands":"jersey","côte-d'ivoire":"ivory-coast",congo:"republic-of-the-congo","congo,-the-democratic-republic-of-the":"democratic-republic-of-congo","curaçao":"curacao",czechia:"czech-republic","diamond-princess":"japan",drc:"democratic-republic-of-congo","el-salvador":"salvador",eswatini:"swaziland","faeroe-islands":"faroe-islands","falkland-islands-(malvinas)":"falkland-islands","french-guiana":"france",guadeloupe:"france","holy-see-(vatican-city-state)":"vatican-city","iran,-islamic-republic-of":"iran","lao-people's-democratic-republic":"laos","libyan-arab-jamahiriya":"libya",macedonia:"republic-of-macedonia",mayotte:"france","moldova,-republic-of":"moldova","ms-zaandam":"netherlands","new-caledonia":"france","palestinian-territory,-occupied":"palestine",poland:"republic-of-poland","réunion":"france","s.-korea":"south-korea","st.-barth":"st-barts","saint-lucia":"st-lucia","saint-martin":"sint-maarten","saint-pierre-miquelon":"france","saint-vincent-and-the-grenadines":"st-vincent-and-the-grenadines","syrian-arab-republic":"syria","tanzania,-united-republic-of":"tanzania","timor-leste":"east-timor","turks-and-caicos-islands":"turks-and-caicos","u.s.-virgin-islands":"virgin-islands",uae:"united-arab-emirates",uk:"united-kingdom",usa:"united-states-of-america",uzbekistan:"uzbekistn","venezuela,-bolivarian-republic-of":"venezuela","viet-nam":"vietnam"}[t]||t,"https://raw.githubusercontent.com/neomjs/pages/master/resources/images/flaticon/country_flags/png/"+t+".png"}getCloneTransform(){return"matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,"+(this.offsetWidth-2800)/6+","+(this.offsetHeight-2700)/6+","+(100400+this.perspective/1.5)+",1)"}getItemId(e){return e.split("__")[1]}}Neo.applyClassConfig(l);a(17),a(24);var c=a(36);class d extends c.a{static getConfig(){return{className:"TestApp.HelixMainContainer",autoMount:!0,cls:["neo-helix-maincontainer","neo-viewport"],helix:null,helixConfig:null,layout:{ntype:"hbox",align:"stretch"},showGitHubStarButton:!0,items:[{ntype:"container",flex:1,layout:"fit",style:{position:"relative"},items:[{ntype:"component",html:'<a class="github-button" href="https://github.com/neomjs/neo" data-size="large" data-show-count="true" aria-label="Star neomjs/neo on GitHub">Star</a>',style:{position:"absolute",right:"20px",top:"20px",zIndex:1}}]},{ntype:"panel",cls:["neo-controls-panel","neo-panel","neo-container"],layout:{ntype:"vbox",align:"stretch"},style:{backgroundColor:"#2b2b2b"},width:250,containerConfig:{style:{overflowY:"scroll"}},headers:[{dock:"top",items:[{ntype:"button",text:"X",handler:function(){const e=this.up("panel"),t=40===e.width;e.width=t?250:40,this.text=t?"X":"+"}},{ntype:"label",text:"Helix Controls"}]}],itemDefaults:{ntype:"rangefield",flex:"0 1 auto",labelWidth:"100px",style:{padding:"10px"},useInputEvent:!0,listeners:{change:function(e){["deltaY","maxOpacity","minOpacity"].includes(this.name)&&(e.value/=100),Neo.get("neo-helix-1")[this.name]=e.value}}},items:[{labelText:"Translate X",maxValue:2e3,minValue:-2e3,name:"translateX",value:400},{labelText:"Translate Y",maxValue:2500,minValue:-2500,name:"translateY",value:-350},{labelText:"Translate Z",maxValue:4500,minValue:-4500,name:"translateZ",value:-1500,listeners:{change:function(e){Neo.get("neo-helix-1")[this.name]=e.value},mounted:function(e){let t=Neo.get(e);Neo.get("neo-helix-1").on("changeTranslateZ",(function(e){e=Math.min(Math.max(e,this.minValue),this.maxValue),this.value=e}),t)}}},{labelText:"Delta Y",labelAlign:"top",maxValue:600,minValue:-600,name:"deltaY",value:70},{labelText:"Rotate",minValue:-720,maxValue:720,name:"rotationAngle",value:0,listeners:{change:function(e){Neo.get("neo-helix-1")[this.name]=e.value},mounted:function(e){let t=Neo.get(e);Neo.get("neo-helix-1").on("changeRotation",(function(e){e=Math.min(Math.max(e,this.minValue),this.maxValue),this.value=e}),t)}}},{labelText:"Radius",maxValue:3500,minValue:900,name:"radius",value:1500},{labelText:"Perspective",minValue:50,maxValue:3e3,name:"perspective",value:800},{labelText:"Item Angle",minValue:1,maxValue:36,name:"itemAngle",value:8},{labelText:"Max Opacity",name:"maxOpacity",minValue:0,maxValue:100,value:80},{labelText:"Min Opacity",name:"minOpacity",minValue:0,maxValue:100,value:30},{ntype:"button",text:"Flip Items",listeners:{},style:{margin:"20px"},domListeners:{click:e=>{const t=Neo.get("neo-helix-1");t.flipped=!t.flipped}}},{ntype:"label",text:"Sort By:"},{ntype:"container",layout:{ntype:"hbox",align:"stretch"},style:{minHeight:"134px",padding:"0"},items:[{ntype:"container",layout:{ntype:"vbox",align:"stretch"},items:[{ntype:"button",text:"Cases",listeners:{},style:{margin:"10px",marginTop:"0"},domListeners:{click:function(){Neo.get("neo-helix-1").store.sorters=[{property:"cases",direction:"DESC"}]}}},{ntype:"button",text:"Deaths",listeners:{},style:{margin:"10px",marginBottom:"10px",marginTop:0},domListeners:{click:function(){Neo.get("neo-helix-1").store.sorters=[{property:"deaths",direction:"DESC"}]}}},{ntype:"button",text:"Country",listeners:{},style:{margin:"10px",marginTop:0},domListeners:{click:function(){Neo.get("neo-helix-1").store.sorters=[{property:"country",direction:"ASC"}]}}},{ntype:"button",text:"Recovered",listeners:{},style:{margin:"10px",marginTop:0},domListeners:{click:function(){Neo.get("neo-helix-1").store.sorters=[{property:"recovered",direction:"ASC"}]}}}]},{ntype:"container",layout:{ntype:"vbox",align:"stretch"},items:[{ntype:"button",text:"Cases today",listeners:{},style:{margin:"10px",marginTop:"0"},domListeners:{click:function(){Neo.get("neo-helix-1").store.sorters=[{property:"todayCases",direction:"DESC"}]}}},{ntype:"button",text:"Deaths today",listeners:{},style:{margin:"10px",marginBottom:"10px",marginTop:0},domListeners:{click:function(){Neo.get("neo-helix-1").store.sorters=[{property:"todayDeaths",direction:"DESC"}]}}},{ntype:"button",text:"Critical",listeners:{},style:{margin:"10px",marginBottom:"43px",marginTop:0},domListeners:{click:function(){Neo.get("neo-helix-1").store.sorters=[{property:"critical",direction:"DESC"}]}}}]}]},{ntype:"button",iconCls:"fa fa-square",text:"Follow Selection",listeners:{},domListeners:{click:function(e){let t=this,a=Neo.get("neo-helix-1");"fa fa-square"===t.iconCls?(a.followSelection=!0,t.iconCls="fa fa-check-square"):(a.followSelection=!1,t.iconCls="fa fa-square")}},style:{margin:"20px",marginBottom:"10px"}},{ntype:"label",text:["<b>Navigation Concept</b>","<p>Click on an item to select it. Afterwards you can use the Arrow Keys to walk through the items.</p>","<p>Hit the Space Key to rotate the currently selected item to the front.</p>","<p>Hit the Enter Key to expand the currently selected item.</p>"].join(""),style:{backgroundColor:"#323232",color:"#ddd",fontSize:"13px",margin:"10px",padding:"10px",whiteSpace:"normal"}},{ntype:"label",cls:["neo-link-color"],text:["<b>Attribution</b>",'<p>App created with <a href="https://github.com/neomjs/neo">neo.mjs</a>.</p>','<p>Data provided by <a href="https://github.com/disease-sh/API">disease.sh/API</a>.</p>','<p>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>.</p>'].join(""),style:{backgroundColor:"#323232",color:"#ddd",fontSize:"13px",margin:"10px",padding:"10px",whiteSpace:"normal"}}]}]}}constructor(e){super(e);const t=this,a="https://corona.lmao.ninja/v2/countries";t.helix=Neo.create({module:l,id:"neo-helix-1",...t.helixConfig||{}}),t.items[0].items.push(t.helix),fetch(a).then(e=>e.json()).then(e=>t.addStoreItems(e)).catch(e=>console.log("Can’t access "+a,e)),t.showGitHubStarButton&&t.on("mounted",()=>{Neo.main.DomAccess.addScript({async:!0,defer:!0,src:"https://buttons.github.io/buttons.js"})})}addStoreItems(e){this.getStore().data=e}getStore(){return this.items[0].items[1].store}}Neo.applyClassConfig(d);const u=()=>Neo.app({appPath:"examples/component/coronaHelix/",mainView:d,name:"TestApp"})},9:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(14),o=a(6),i=a(18),s=(a(10),a(1)),r=a(4);let l;class c extends s.a{static getConfig(){return{className:"Neo.data.RecordFactory",singleton:!0,ovPrefix:"ov_",recordNamespace:"Neo.data.record."}}createRecord(e,t){let a=Neo.ns(this.recordNamespace+e.className);return a||(a=this.createRecordClass(e)),new a(t)}createRecordClass(e){if(e instanceof i.a){let t,a,n=this.recordNamespace+e.className,o=Neo.ns(n);return e.trackModifiedFields=!0,o||(a=n.split("."),t=a.pop(),o=Neo.ns(a,!0),o[t]=class{constructor(t){let a,n=this;Object.defineProperties(n,{_isModified:{value:!1,writable:!0}}),Array.isArray(e.fields)&&e.fields.forEach(o=>{let i=l.parseRecordValue(o,t[o.name]),s=Symbol(o.name);a={[s]:{value:i,writable:!0},[o.name]:{configurable:!0,enumerable:!0,get(){return this[s]},set(t){let a=this,n=a[s];l.hasChanged(t,n)&&(t=l.parseRecordValue(o,t),a[s]=t,a._isModified=!0,a._isModified=l.isModified(a,e.trackModifiedFields),l.onRecordChange({field:o.name,model:e,oldValue:n,record:a,value:t}))}}},e.trackModifiedFields&&(a[l.ovPrefix+o.name]={value:i}),Object.defineProperties(n,a)})}},o[t])}}hasChanged(e,t){return!!Array.isArray(e)||(Neo.isObject(e)?!(t instanceof Date&&e instanceof Date)||t.valueOf()!==e.valueOf():t!==e)}isModified(e,t){if(t){let t,a=Object.keys(e),n=0,o=a.length;for(;n<o;n++)if(t=a[n],e[t]!==e[this.ovPrefix+t])return!0;return!1}return e._isModified}isModifiedField(e,t){return e.hasOwnProperty(t)||r.a.logError("The record does not contain the field",t,e),e.hasOwnProperty(this.ovPrefix+t)?e[t]!==e[this.ovPrefix+t]:null}isRecord(e){return e&&e.constructor&&e.constructor.name&&"Record"===e.constructor.name}onRecordChange(e){let t=Neo.get(e.model.storeId);t&&t.onRecordChange(e)}parseRecordValue(e,t){return"date"===(e.type&&e.type.toLowerCase())?new Date(t):t}}Neo.applyClassConfig(c),l=Neo.create(c),Neo.applyToGlobalNs(l);var d=l;class u extends n.a{static getStaticConfig(){return{observable:!0}}static getConfig(){return{className:"Neo.data.Store",ntype:"store",autoLoad:!1,data_:null,initialData_:null,isGrouped:!1,isLoaded:!1,isLoading:!1,model_:null,remoteFilter:!1,remoteSort:!1,url:null}}constructor(e){super(e);this.on({mutate:this.onCollectionMutate,sort:this.onCollectionSort,scope:this})}onConstructed(){super.onConstructed();let e=this;e.data&&e.afterSetData(e.data),e.autoLoad&&setTimeout(()=>{e.load()},100)}afterSetData(e,t){let a=this;a.configsApplied&&e&&(t?a.clear():a.initialData=[...e],a.add(e))}afterSetInitialData(e,t){}afterSetModel(e,t){e&&(e.storeId=this.id,d.createRecordClass(e))}beforeSetData(e,t){let a=this;return e&&(Array.isArray(e)||(e=[e]),(e=Neo.clone(e,!0)).forEach((t,n)=>{d.isRecord(t)||(e[n]=d.createRecord(a.model,t))})),e}beforeSetInitialData(e,t){return!e&&t?t:e}beforeSetModel(e,t){return t&&t.destroy(),o.a.beforeSetInstance(e,i.a)}createRecord(e){d.createRecord(e)}load(){let e=this;Neo.Xhr.promiseJson({url:e.url}).then(t=>{e.data=Array.isArray(t.json)?t.json:t.json.data}).catch(t=>{console.log("Error for Neo.Xhr.request",t,e.id)})}onCollectionMutate(e){let t=this;t.configsApplied&&t.fire("load",t.items)}onCollectionSort(){this.configsApplied}onRecordChange(e){this.fire("recordChange",e)}sort(e={}){let t=this;t.remoteSort||t.configsApplied&&(e.direction?t.sorters=[{direction:e.direction,property:e.property}]:(t.startUpdate(),t.clear(),t.sorters=[],t.add([...t.initialData]),t.endUpdate(),t.fire("sort")))}}Neo.applyClassConfig(u)}});