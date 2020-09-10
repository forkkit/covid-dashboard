self.webpackChunk([25],{109:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(44),o=a(29),s=(a(17),a(24),a(36));class n extends s.a{static getConfig(){return{className:"TestApp.MainContainer",ntype:"main-container",autoMount:!0,gallery:null,galleryConfig:null,layout:{ntype:"hbox",align:"stretch"},items:[{ntype:"container",flex:1,layout:"fit",items:[]},{ntype:"panel",layout:{ntype:"vbox",align:"stretch"},style:{backgroundColor:"#2b2b2b"},width:260,itemDefaults:{ntype:"rangefield",flex:"0 1 auto",labelWidth:"110px",style:{padding:"10px"},useInputEvent:!0,listeners:{change:function(e){"opacity"===this.name&&(e.value/=100),Neo.get("neo-gallery-1")[this.name]=e.value}}},headers:[{dock:"top",text:"Gallery Controls"}],items:[{labelText:"Translate X",maxValue:5e3,minValue:0,name:"translateX",value:0,listeners:{change:function(e){Neo.get("neo-gallery-1")[this.name]=e.value},mounted:function(e){let t=Neo.get(e);Neo.get("neo-gallery-1").on("changeTranslateX",(function(e){e=Math.min(Math.max(e,this.minValue),this.maxValue),this.value=e}),t)}}},{labelText:"Translate Y",maxValue:1500,minValue:-1500,name:"translateY",value:0},{labelText:"Translate Z",maxValue:550,minValue:-4500,name:"translateZ",value:0,listeners:{change:function(e){Neo.get("neo-gallery-1")[this.name]=e.value},mounted:function(e){let t=Neo.get(e);Neo.get("neo-gallery-1").on("changeTranslateZ",(function(e){e=Math.min(Math.max(e,this.minValue),this.maxValue),this.value=e}),t)}}},{labelText:"Amount Rows",maxValue:15,minValue:1,name:"amountRows",value:3},{module:o.a,clearable:!1,labelText:"Max Items",maxValue:600,minValue:100,name:"maxItems",stepSize:100,value:300},{ntype:"button",text:"Order by Row",listeners:{},style:{margin:"20px"},domListeners:{click:function(){const e=Neo.get("neo-gallery-1"),t=!e.orderByRow;this.text=!0===t?"Order By Column":"Order by Row",e.orderByRow=t}}},{ntype:"button",disabled:!0,text:"Sort by Lastname",listeners:{},style:{margin:"20px",marginBottom:"10px"},domListeners:{click:function(){Neo.get("neo-gallery-1").store.sorters=[{property:"lastname",direction:"ASC"},{property:"firstname",direction:"ASC"}]}}},{ntype:"button",disabled:!0,text:"Sort by Firstname",listeners:{},style:{margin:"20px",marginTop:0},domListeners:{click:function(){Neo.get("neo-gallery-1").store.sorters=[{property:"firstname",direction:"ASC"},{property:"lastname",direction:"ASC"}]}}},{ntype:"label",text:["<b>Navigation Concept</b>","<p>Click on an item to select it. Afterwards you can use the Arrow Keys to walk through the items.</p>"].join(""),style:{backgroundColor:"#323232",color:"#ddd",fontSize:"13px",margin:"10px",padding:"10px",whiteSpace:"normal"}}]}]}}constructor(e){super(e);this.gallery=Neo.create({module:r.a,id:"neo-gallery-1",...this.galleryConfig||{}}),this.items[0].items.push(this.gallery)}getStore(){return this.items[0].items[0].store}}Neo.applyClassConfig(n)},18:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(1);class o extends r.a{static getConfig(){return{className:"Neo.data.Model",ntype:"model",fields_:[],keyProperty_:"id",storeId:null,trackModifiedFields:!1}}afterSetFields(e,t){}getField(e){let t=this,a=0,r=t.fields.length;for(;a<r;a++)if(t.fields[a].name===e)return t.fields[a];return null}}Neo.applyClassConfig(o)},19:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(1),o=a(0);a(10);class s extends r.a{static getStaticConfig(){return{observable:!0}}static getConfig(){return{className:"Neo.selection.Model",ntype:"selection-model",cls:null,items:[],selectedCls:"neo-selected",singleSelect:!0,view_:null}}beforeGetView(){return Neo.getComponent(this._view)}beforeSetView(e){return e&&e.id}addDomListener(){}deselect(e,t,a,r){let s,n=this,i=n.view,l=i.vdom,c=i.getVdomChild(e);c&&(s=c.cls||[],o.a.remove(s,r||n.selectedCls),c.cls=s),o.a.remove(a||n.items,e),t||(i.vdom=l)}deselectAll(e){let t=this,a=[...t.items],r=t.view,o=r.vdom;a.forEach(e=>{t.deselect(e,!0)}),!e&&a.length>0&&(r.vdom=o)}destroy(){this.unregister(),super.destroy()}getSelection(){return this.items}hasSelection(){return this.items.length>0}isSelected(e){return this.items.indexOf(e)>-1}register(e){let t=this,a=e.cls||[];t.cls&&!a.includes(t.cls)&&(a.push(t.cls),e.cls=a),t.view=e,t.addDomListener()}removeDomListeners(){let e=this,t=e.view,a=[...t.domListeners];t.domListeners.forEach(t=>{t.scope===e&&o.a.remove(a,t)}),t.domListeners=a}select(e,t,a){e=Array.isArray(e)?e:[e];let r,s=this,n=s.view,i=n.vdom;s.singleSelect&&s.deselectAll(!0),e.forEach(e=>{"string"==typeof e&&(e=n.getVdomChild(e)),e&&(r=e.cls||[],o.a.add(r,a||s.selectedCls),e.cls=r)}),o.a.add(t||s.items,e),n[n.hasOwnProperty("silentSelect")&&!0===n.silentSelect?"_vdom":"vdom"]=i}toggleSelection(e){let t=this;t.isSelected(e)?t.deselect(e):t.select(e)}unregister(){let e=this,t=e.view.cls||[];e.cls&&t.includes(e.cls)&&(o.a.remove(t,e.cls),e.view.cls=t),e.deselectAll(),e.removeDomListeners()}}Neo.applyClassConfig(s)},47:function(e,t,a){"use strict";a.r(t),a.d(t,"onStart",(function(){return o}));var r=a(109);const o=()=>Neo.app({appPath:"examples/component/gallery/",mainView:r.a,name:"TestApp"})},9:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(14),o=a(6),s=a(18),n=(a(10),a(1)),i=a(4);let l;class c extends n.a{static getConfig(){return{className:"Neo.data.RecordFactory",singleton:!0,ovPrefix:"ov_",recordNamespace:"Neo.data.record."}}createRecord(e,t){let a=Neo.ns(this.recordNamespace+e.className);return a||(a=this.createRecordClass(e)),new a(t)}createRecordClass(e){if(e instanceof s.a){let t,a,r=this.recordNamespace+e.className,o=Neo.ns(r);return e.trackModifiedFields=!0,o||(a=r.split("."),t=a.pop(),o=Neo.ns(a,!0),o[t]=class{constructor(t){let a,r=this;Object.defineProperties(r,{_isModified:{value:!1,writable:!0}}),Array.isArray(e.fields)&&e.fields.forEach(o=>{let s=l.parseRecordValue(o,t[o.name]),n=Symbol(o.name);a={[n]:{value:s,writable:!0},[o.name]:{configurable:!0,enumerable:!0,get(){return this[n]},set(t){let a=this,r=a[n];l.hasChanged(t,r)&&(t=l.parseRecordValue(o,t),a[n]=t,a._isModified=!0,a._isModified=l.isModified(a,e.trackModifiedFields),l.onRecordChange({field:o.name,model:e,oldValue:r,record:a,value:t}))}}},e.trackModifiedFields&&(a[l.ovPrefix+o.name]={value:s}),Object.defineProperties(r,a)})}},o[t])}}hasChanged(e,t){return!!Array.isArray(e)||(Neo.isObject(e)?!(t instanceof Date&&e instanceof Date)||t.valueOf()!==e.valueOf():t!==e)}isModified(e,t){if(t){let t,a=Object.keys(e),r=0,o=a.length;for(;r<o;r++)if(t=a[r],e[t]!==e[this.ovPrefix+t])return!0;return!1}return e._isModified}isModifiedField(e,t){return e.hasOwnProperty(t)||i.a.logError("The record does not contain the field",t,e),e.hasOwnProperty(this.ovPrefix+t)?e[t]!==e[this.ovPrefix+t]:null}isRecord(e){return e&&e.constructor&&e.constructor.name&&"Record"===e.constructor.name}onRecordChange(e){let t=Neo.get(e.model.storeId);t&&t.onRecordChange(e)}parseRecordValue(e,t){return"date"===(e.type&&e.type.toLowerCase())?new Date(t):t}}Neo.applyClassConfig(c),l=Neo.create(c),Neo.applyToGlobalNs(l);var d=l;class u extends r.a{static getStaticConfig(){return{observable:!0}}static getConfig(){return{className:"Neo.data.Store",ntype:"store",autoLoad:!1,data_:null,initialData_:null,isGrouped:!1,isLoaded:!1,isLoading:!1,model_:null,remoteFilter:!1,remoteSort:!1,url:null}}constructor(e){super(e);this.on({mutate:this.onCollectionMutate,sort:this.onCollectionSort,scope:this})}onConstructed(){super.onConstructed();let e=this;e.data&&e.afterSetData(e.data),e.autoLoad&&setTimeout(()=>{e.load()},100)}afterSetData(e,t){let a=this;a.configsApplied&&e&&(t?a.clear():a.initialData=[...e],a.add(e))}afterSetInitialData(e,t){}afterSetModel(e,t){e&&(e.storeId=this.id,d.createRecordClass(e))}beforeSetData(e,t){let a=this;return e&&(Array.isArray(e)||(e=[e]),(e=Neo.clone(e,!0)).forEach((t,r)=>{d.isRecord(t)||(e[r]=d.createRecord(a.model,t))})),e}beforeSetInitialData(e,t){return!e&&t?t:e}beforeSetModel(e,t){return t&&t.destroy(),o.a.beforeSetInstance(e,s.a)}createRecord(e){d.createRecord(e)}load(){let e=this;Neo.Xhr.promiseJson({url:e.url}).then(t=>{e.data=Array.isArray(t.json)?t.json:t.json.data}).catch(t=>{console.log("Error for Neo.Xhr.request",t,e.id)})}onCollectionMutate(e){let t=this;t.configsApplied&&t.fire("load",t.items)}onCollectionSort(){this.configsApplied}onRecordChange(e){this.fire("recordChange",e)}sort(e={}){let t=this;t.remoteSort||t.configsApplied&&(e.direction?t.sorters=[{direction:e.direction,property:e.property}]:(t.startUpdate(),t.clear(),t.sorters=[],t.add([...t.initialData]),t.endUpdate(),t.fire("sort")))}}Neo.applyClassConfig(u)}});