self.webpackChunk([0],{2:function(e,t,o){"use strict";o.d(t,"a",(function(){return v}));var n=o(6),r=o(1),s=o(7),d=o(15),i=o(0);class a extends r.a{static getConfig(){return{className:"Neo.util.Object"}}static isEqual(e,t){return Neo.isObject(e)&&Neo.isObject(t)?Object.keys(e).length===Object.keys(t).length&&Object.keys(e).reduce((function(o,n){return o&&a.isEqual(e[n],t[n])}),!0):e===t}}Neo.applyClassConfig(a);var l=a;class m extends r.a{static getConfig(){return{className:"Neo.util.KeyNavigation",ntype:"keynav",component_:null,keyDownEventBubble:!1,keys_:null}}add(e){this._keys.push(...this.parseKeys(e))}beforeGetComponent(){return Neo.getComponent(this._component)}beforeSetComponent(e){return e&&e.id}destroy(){this.unregister(),super.destroy()}onKeyDown(e){if(e.key){let t,o=this,n=e.key.toUpperCase();n=o.parseUpperCaseKey(n),o.keys.forEach(o=>{t=Neo.get(o.scope),o.key.toUpperCase()===n&&t[o.fn]&&t[o.fn].apply(t,[e])})}}parseKeys(e){if(!Array.isArray(e)){let t=this._component,o=[];t&&(Object.entries(e).forEach(([e,n])=>{o.push({fn:n,key:e,scope:t})}),e=o)}return e}parseUpperCaseKey(e){switch(e){case" ":e="SPACE";break;case"ARROWDOWN":e="DOWN";break;case"ARROWLEFT":e="LEFT";break;case"ARROWRIGHT":e="RIGHT";break;case"ARROWUP":e="UP"}return e}register(e){let t=this,o=e.domListeners;t.component=e,t.keys=t.parseKeys(t.keys),o&&(o.push({keydown:{fn:t.onKeyDown,bubble:t.keyDownEventBubble,scope:t}}),e.domListeners=o)}removeKey(e){let t,o=this._keys,n=0,r=o.length;for(;n<r;n++)if(t=o[n],l.isEqual(t,e)){i.a.remove(o,t);break}}removeKeys(e){Array.isArray(e)&&e.forEach(e=>this.removeKey(e))}unregister(){}}Neo.applyClassConfig(m);var c=m,h=o(4);o(10);class p extends r.a{static getConfig(){return{className:"Neo.util.Style"}}static compareStyles(e,t){let o={};return Neo.isString(e)&&(e=Neo.core.Util.createStyleObject(e)),Neo.isString(t)&&(t=Neo.core.Util.createStyleObject(t)),e||t?t?e?(Object.keys(e).forEach((function(n){t.hasOwnProperty(n)&&t[n]===e[n]||(o[n]=e[n])})),Object.keys(t).forEach((function(t){e.hasOwnProperty(t)||(o[t]=null)})),Object.keys(o).length>0?o:null):void Object.keys(t).forEach((function(e){o[e]=null})):Neo.clone(e):null}}Neo.applyClassConfig(p);var u=p,g=o(8),y=o(5),f=o(11);class v extends r.a{static getStaticConfig(){return{observable:!0}}static getConfig(){return{className:"Neo.component.Base",ntype:"component",appName_:null,autoMount:!1,autoRender:!1,containsFocus_:!1,controller_:null,disabled_:!1,domListeners_:null,hasBeenMounted:!1,hasUnmountedVdomChanges_:!1,height_:null,html_:null,id_:null,isVdomUpdating:!1,keys_:null,maxHeight_:null,maxWidth_:null,minHeight_:null,minWidth_:null,mounted_:!1,needsVdomUpdate:!1,parentId:"document.body",plugins_:null,rendering_:!1,silentVdomUpdate:!1,style:{},tooltips_:null,vnode_:null,width_:null,wrapperStyle_:null,_vdom:{}}}getVdomRoot(){return this.vdom}getVnodeRoot(){return this.vnode}mergeConfig(...e){let t=this,o=super.mergeConfig(...e),n={...t._vdom||{},...o.vdom||{}};return t._vdom=Neo.clone(n,!0,!0),t.cls=o.cls,t._style=o.style,t.wrapperStyle=Neo.clone(o.wrapperStyle,!1),delete o.cls,delete o.style,delete o._vdom,delete o.vdom,delete o.wrapperStyle,o}constructor(e){super(e),s.a.register(this)}onConstructed(){super.onConstructed();let e=this;e.fire("constructed",{id:e.id}),e.keys&&e.keys.register(e)}init(){this.autoRender&&this.render()}get cls(){return this._cls?Neo.clone(this._cls):["neo-component"]}set cls(e){e=e||[];let t,o=this,n=o.vdom,r=o.getVdomRoot();"string"==typeof e&&(e=e.split("")),o.mounted&&(t=Neo.clone(o._cls)),o._cls=e,r&&(r.cls=[...e]),o._vdom=n,o.mounted&&o.updateCls(e,t)}get listeners(){return this._listeners||{}}set listeners(e){this._listeners=e}get rendered(){return this._rendered||!1}set rendered(e){let t=this;t._rendered=e,!0===e&&t.fire("rendered",t.id)}get style(){return Neo.clone(this._style)}set style(e){let t=this.style;this._style=e,this.updateStyle(e,t)}get vdom(){return this._vdom}set vdom(e){let t,o=this,n=Neo.apps[o.appName],r=e,s=o.cls,d=o.height,i=o.style,a=o.getVdomRoot(),l=o.width;a&&(s&&(a.cls=s),d&&(a.height=d),l&&(a.width=l),i&&(a.style=Object.assign(a.style||{},i))),o._vdom!==r?(h.a.warn("vdom got replaced for: "+o.id+". Copying the content into the reference holder object"),Object.keys(o._vdom).forEach(e=>{delete o._vdom[e]}),Object.assign(o._vdom,r)):o._vdom=r,o.silentVdomUpdate||(!o.mounted&&n&&!0===n.rendering?t=n.on("render",()=>{n.un("render",t),setTimeout(()=>{o.updateVdom(o.vdom,o.vnode)},50)}):o.mounted&&o.updateVdom(r,o.vnode),o.hasUnmountedVdomChanges=!o.mounted&&o.hasBeenMounted)}addStyle(e){return"string"==typeof e&&(e=g.a.createStyleObject(e)),this.style=Object.assign(this.style,e)}afterSetDisabled(e,t){let o=this.cls;i.a[e?"add":"remove"](o,"neo-disabled"),this.cls=o}afterSetDomListeners(e,t){d.a.updateDomListeners(this,e,t)}afterSetHasUnmountedVdomChanges(e,t){if(e||!e&&t){let t,o=s.a.getParentIds(this),n=0,r=o.length;for(;n<r;n++)t=Neo.getComponent(o[n]),t&&(t._hasUnmountedVdomChanges=e)}}afterSetHeight(e,t){this.changeVdomRootKey("height",e)}afterSetHtml(e,t){this.changeVdomRootKey("html",e)}afterSetId(e,t){this.changeVdomRootKey("id",e)}afterSetMaxHeight(e,t){this.changeVdomRootKey("maxHeight",e)}afterSetMaxWidth(e,t){this.changeVdomRootKey("maxWidth",e)}afterSetMinHeight(e,t){this.changeVdomRootKey("minHeight",e)}afterSetMinWidth(e,t){this.changeVdomRootKey("minWidth",e)}afterSetMounted(e,t){if(void 0!==t){let t=this;e&&(t.hasBeenMounted=!0,t.domListeners&&t.domListeners.length>0&&setTimeout(()=>{d.a.mountDomListeners(t)},300),t.fire("mounted",t.id))}}afterSetTooltips(e,t){if(e){let t=this;Neo.ns("Neo.tooltip.Base")?t.createTooltips(e):Promise.all([o.e(1),o.e(59)]).then(o.bind(null,117)).then(o=>{t.createTooltips(e)})}}afterSetVnode(e,t){void 0!==t&&this.syncVnodeTree()}afterSetWidth(e,t){this.changeVdomRootKey("width",e)}afterSetWrapperStyle(e,t){if(e||void 0!==t){let o=this,n=o.vdom;o.vdom.id?o.updateStyle(e,t,o.vdom.id):(n.style=e,o.vdom=n)}}beforeGetWrapperStyle(e){return{...Object.assign(this.vdom.style||{},e)}}beforeGetController(e){return e&&Neo.get(e)}beforeSetController(e,t){return t&&t.destroy(),(e=n.a.beforeSetInstance(e,null,{view:this}))&&e.id}beforeSetDomListeners(e,t){return Neo.isObject(e)&&(e=[e]),e||[]}beforeSetKeys(e,t){return t&&t.destroy(),e&&(e=n.a.beforeSetInstance(e,c,{keys:e})),e}beforeSetPlugins(e,t){return Array.isArray(e)&&e.forEach((t,o)=>{e[o]=n.a.beforeSetInstance(t,null,{owner:this})}),e}changeVdomRootKey(e,t){let o=this,n=o.vdom;t?o.getVdomRoot()[e]=t:delete o.getVdomRoot()[e],o.vdom=n}createTooltips(e){Array.isArray(e)||(e=[e]);let t,o=this,n=[];e.forEach(e=>{t=Neo.create("Neo.tooltip.Base",{appName:o.appName,componentId:o.id,...e}),n.push(t)}),o._tooltips=n}destroy(e=!1,t=!1){let o,n,r=this;e&&r.parentId&&("document.body"===r.parentId?Neo.currentWorker.promiseMessage("main",{action:"updateDom",deltas:[{action:"removeNode",id:r.vdom.id}]}):(o=Neo.getComponent(r.parentId),n=o.vdom,y.a.removeVdomChild(n,r.vdom.id),o[t?"_vdom":"vdom"]=n)),s.a.unregister(this),super.destroy()}down(e){return s.a.down(this.id,e)}focus(e){let t=this;Neo.main.DomAccess.focus({id:e||t.id}).then(e=>{}).catch(e=>{console.log("Error attempting to receive focus for component",e,t)})}getController(e){let t,o,n,r=this.controller;if(r&&(!e||e===r.ntype))return r;for(n=s.a.getParents(this),t=0,o=n.length;t<o;t++)if(n[t].controller&&(!e||e===n[t].controller.ntype))return n[t].controller;return null}getVdomChild(e,t){let o,n=null,r=0,s=(t=t||this.vdom).cn&&t.cn.length;if(t.id===e)return t;if(t.cn)for(;r<s;r++)if(o=this.getVdomChild(e,t.cn[r]),o){n=o;break}return n}mount(){let e,t,o=this;if(!o.vnode)throw new Error("Component vnode must be generated before mounting, use Component.render()");o.hasUnmountedVdomChanges?(o.hasUnmountedVdomChanges=!1,t=s.a.getChildIds(o.vnode),t.forEach(t=>{e=Neo.getComponent(t),e&&(e._hasUnmountedVdomChanges=!1)}),o.render(!0)):Neo.currentWorker.promiseMessage("main",{action:"mountDom",id:o.id,html:o.vnode.outerHTML,parentId:o.parentId,parentIndex:o.parentIndex}).then(()=>{o.mounted=!0})}onRender(e,t){let o=this,n=Neo.apps[o.appName];if(o.rendering=!1,n){n.rendered||(n.rendering=!1,n.rendered=!0,n.fire("render")),o.vnode=e;let r,d=s.a.getChildIds(e),i=0,a=d.length;for(;i<a;i++)r=Neo.getComponent(d[i]),r&&(r.rendered=!0);o._rendered=!0,o.fire("rendered",o.id),console.log("rendered: "+o.appName+" "+o.id,o),t&&(o.mounted=!0)}}promiseVdomUpdate(e=this.vdom,t=this.vnode){let o=this;return o._vdom!==e?(h.a.warn("vdom got replaced for: "+o.id+". Copying the content into the reference holder object"),Object.keys(o._vdom).forEach(e=>{delete o._vdom[e]}),Object.assign(o._vdom,e)):o._vdom=e,new Promise((n,r)=>{o.mounted?o.updateVdom(e,t,n,r):n()})}removeStyle(e){"string"==typeof e&&(e=[e]);let t=this.style,o=!1;return Object.entries(t).forEach(n=>{e.indexOf(n)>-1&&(delete t[n],o=!0)}),o&&(this.style=t),t}render(e){let t=this,o=e||t.autoMount,n=Neo.apps[t.appName];t.rendering=!0,n.rendered||(n.rendering=!0),t.vdom&&Neo.vdom.Helper.create({appName:t.appName,autoMount:o,cls:t.cls,parentId:o?t.parentId:void 0,parentIndex:o?t.parentIndex:void 0,style:t.style,...t.vdom}).then(e=>{t.onRender(e,o)})}set(e={},t=!1){let o=this,n=o.vdom;if(o.silentVdomUpdate=!0,super.set(e),o.silentVdomUpdate=!1,!t)return o.promiseVdomUpdate();o._vdom=n}setSilent(e={}){return this.set(e,!0)}syncVdomIds(e=this.vnode,t=this.vdom){y.a.syncVdomIds(e,t)}syncVnodeTree(e=this.vnode){let t,o=this;o.syncVdomIds(),s.a.getChildren(o).forEach(e=>{t=f.a.findChildVnode(o.vnode,e.vdom.id),t?(e._vnode=t.vnode,e.rendered||(e._rendered=!0,e.fire("rendered",e.id)),e.mounted=!0):console.warn("syncVnodeTree: Could not replace the child vnode for",e.id)}),s.a.getParents(o).forEach((e,t)=>{o.vnode?0===t&&o.vnode.outerHTML?e.vnode.childNodes.splice(o.parentIndex||0,0,o.vnode):f.a.replaceChildVnode(e.vnode,o.vnode.id,o.vnode):0===t&&f.a.removeChildVnode(e.vnode,o.id)})}unmount(){let e=this;Neo.currentWorker.promiseMessage("main",{action:"updateDom",deltas:[{action:"removeNode",id:e.id}]}).then(()=>{e.mounted=!1}).catch(t=>{console.log("Error attempting to unmount component",t,e)})}up(e){return s.a.up(this.id,e)}updateCls(e,t){let o,n=this,r=n.vnode;i.a.isEqual(e,t)||(r&&(r.className=e,n.vnode=r),o={action:"updateDom",deltas:[{id:n.id,cls:{add:Neo.util.Array.difference(e,t),remove:Neo.util.Array.difference(t,e)}}]},Neo.currentWorker.isSharedWorker&&(o.appName=n.appName),Neo.currentWorker.promiseMessage("main",o).then(()=>{}).catch(e=>{console.log("Error attempting to update Component cls",e,n)}))}updateStyle(e,t,o=this.id){let n,r=this,s=u.compareStyles(e,t),d=y.a.findVdomChild(r.vdom,o),i=r.vnode&&f.a.findChildVnode(r.vnode,o);s&&(d.vdom.style=e,i&&(i.vnode.style=e,n={action:"updateDom",deltas:[{id:o,style:s}]},Neo.currentWorker.isSharedWorker&&(n.appName=r.appName),Neo.currentWorker.sendMessage("main",n)))}updateVdom(e,t,o,n){let r,s=this;s.isVdomUpdating?s.needsVdomUpdate=!0:(s.isVdomUpdating=!0,r={vdom:e,vnode:t},Neo.currentWorker.isSharedWorker&&(r.appName=s.appName),Neo.vdom.Helper.update(r).then(e=>{s.vnode=e.vnode,s.isVdomUpdating=!1,o&&o(),s.needsVdomUpdate&&(s.needsVdomUpdate=!1,s.vdom=s.vdom)}).catch(e=>{console.log("Error attempting to update component dom",e,s),s.isVdomUpdating=!1,n&&n()}))}}Neo.applyClassConfig(v)},6:function(e,t,o){"use strict";var n=o(1);class r extends n.a{static getConfig(){return{className:"Neo.util.ClassSystem"}}static beforeSetInstance(e,t=null,o={}){if(!e&&t)e=Neo.create(t,o);else if(e&&e.isClass)e=Neo.create(e,o);else if(Neo.isObject(e)&&!(e instanceof Neo.core.Base))if(e.ntype)e=Neo.ntype({...o,...e});else{const n={};t&&(n.module=t),Object.assign(n,{...o,...e}),e=Neo.create(n)}return e}}Neo.applyClassConfig(r),t.a=r}});