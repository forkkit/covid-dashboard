self["webpackChunk"](["vendors~chunks/docs-app"],{

/***/ "./node_modules/neo.mjs/docs/app.mjs":
/*!*******************************************!*\
  !*** ./node_modules/neo.mjs/docs/app.mjs ***!
  \*******************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _app_view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/view/MainContainer.mjs */ "./node_modules/neo.mjs/docs/app/view/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'docs/',
    mainView: _app_view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'Docs'
});



/***/ }),

/***/ "./node_modules/neo.mjs/docs/app/view/ApiTreeList.mjs":
/*!************************************************************!*\
  !*** ./node_modules/neo.mjs/docs/app/view/ApiTreeList.mjs ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ApiTreeList; });
/* harmony import */ var _src_list_TreeList_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/list/TreeList.mjs */ "./node_modules/neo.mjs/src/list/TreeList.mjs");


/**
 * @class Docs.app.view.ApiTreeList
 * @extends Neo.list.TreeList
 */
class ApiTreeList extends _src_list_TreeList_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.view.ApiTreeList'
         * @protected
         */
        className: 'Docs.app.view.ApiTreeList',
        /**
         * @member {String} ntype='api-treelist'
         * @protected
         */
        ntype: 'api-treelist'
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        Neo.Xhr.promiseJson({
            url: '../../docs/output/structure.json'
        }).then(data => {
            let vdom     = me.vdom,
                itemRoot = me.getListItemsRoot();

            me.store.items = data.json;
            itemRoot = me.createItems(null, itemRoot, 0);

            me.vdom = vdom;
        });
    }
}

Neo.applyClassConfig(ApiTreeList);



/***/ }),

/***/ "./node_modules/neo.mjs/docs/app/view/ContentTabContainer.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/neo.mjs/docs/app/view/ContentTabContainer.mjs ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentTabContainer; });
/* harmony import */ var _src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/tab/Container.mjs */ "./node_modules/neo.mjs/src/tab/Container.mjs");
/* harmony import */ var _src_tab_header_Button_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/tab/header/Button.mjs */ "./node_modules/neo.mjs/src/tab/header/Button.mjs");



/**
 * @class Docs.app.view.ContentTabContainer
 * @extends Neo.tab.Container
 */
class ContentTabContainer extends _src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.view.ContentTabContainer'
         * @protected
         */
        className: 'Docs.app.view.ContentTabContainer',
        /**
         * @member {String} ntype='docs-content-tabcontainer'
         * @protected
         */
        ntype: 'docs-content-tabcontainer',
        /**
         * @member {Boolean} activateInsertedTabs=true
         */
        activateInsertedTabs: true,
        /**
         * @member {Object} contentContainerDefaults={cls:[//...]}
         */
        contentContainerDefaults: {
            cls: [
                'neo-docs-tab-content-container',
                'neo-tab-content-container',
                'neo-container'
            ]
        },
        /**
         * @member {Object} headerToolbarDefaults={cls:[//...]}
         */
        headerToolbarDefaults: {
            cls: [
                'docs-tab-header-toolbar',
                'neo-tab-header-toolbar',
                'neo-toolbar'
            ]
        },
        /**
         * @member {Array} items=[//...]]
         */
        items: [{
            ntype: 'component',
            html : 'Welcome to the neo.mjs docs!',
            style: {padding: '20px'},

            tabButtonConfig: {
                iconCls: 'fa fa-users',
                text   : 'Welcome!'
            }
        }]
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me  = this,
            cls = me.cls;

        cls.unshift('docs-content-tabcontainer');
        me.cls = cls;
    }

    /**
     * Overriding the button click listener to allow closing tabs on icon click
     * @param {Object} config
     * @param {Number} index
     * @returns {Object} The merged config
     * @protected
     * @override
     */
    getTabButtonConfig(config, index) {
        let me = this,
            defaultConfig = {
                module : _src_tab_header_Button_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
                flex   : 'none',
                index  : index,
                pressed: me.activeIndex === index,

                domListeners: {
                    click: {
                        fn: function (data) {
                            let path = data.path.map(e => e.id);

                            if (path[0].indexOf('neo-tab-header-button-') === 0) {
                                me.activeIndex = Neo.getComponent(data.target.id).index;
                            } else {
                                me.removeAt(Neo.getComponent(me.tabBarId).indexOf(path[1]))
                            }
                        },
                        scope: me
                    }
                }
            };

        return {...defaultConfig, ...config};
    }
}

Neo.applyClassConfig(ContentTabContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/docs/app/view/ExamplesTreeList.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/neo.mjs/docs/app/view/ExamplesTreeList.mjs ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExamplesTreeList; });
/* harmony import */ var _src_list_TreeList_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/list/TreeList.mjs */ "./node_modules/neo.mjs/src/list/TreeList.mjs");


/**
 * @class Docs.app.view.ExamplesTreeList
 * @extends Neo.list.TreeList
 */
class ExamplesTreeList extends _src_list_TreeList_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.view.ExamplesTreeList'
         * @protected
         */
        className: 'Docs.app.view.ExamplesTreeList',
        /**
         * @member {String} ntype='examples-treelist'
         * @protected
         */
        ntype: 'examples-treelist',
        /**
         * @member {String[]} cls=['docs-examples-treelist', 'neo-tree-list', 'neo-list-container', 'neo-list']
         */
        cls: [
            'docs-examples-treelist',
            'neo-tree-list',
            'neo-list-container',
            'neo-list'
        ]
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        Neo.Xhr.promiseJson({
            url: '../../docs/examples.json'
        }).then(data => {
            let vdom     = me.vdom,
                itemRoot = me.getListItemsRoot();

            me.store.items = data.json;
            itemRoot = me.createItems(null, itemRoot, 0);

            me.vdom = vdom;
        });
    }
}

Neo.applyClassConfig(ExamplesTreeList);



/***/ }),

/***/ "./node_modules/neo.mjs/docs/app/view/HeaderContainer.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/neo.mjs/docs/app/view/HeaderContainer.mjs ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderContainer; });
/* harmony import */ var _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/button/Base.mjs */ "./node_modules/neo.mjs/src/button/Base.mjs");
/* harmony import */ var _src_form_field_Search_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/form/field/Search.mjs */ "./node_modules/neo.mjs/src/form/field/Search.mjs");




/**
 * @class Docs.app.view.HeaderContainer
 * @extends Neo.container.Base
 */
class HeaderContainer extends _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.view.HeaderContainer'
         * @protected
         */
        className: 'Docs.app.view.HeaderContainer',
        /**
         * @member {String} ntype='header-container'
         * @protected
         */
        ntype: 'neo-docs-header-container',
        /**
         * @member {String[]} cls=['neo-docs-header-container']
         */
        cls: ['neo-docs-header-container'],
        /**
         * @member {Number} height=55
         */
        height: 55,
        /**
         * @member {Object} layout={ntype: 'hbox', align: 'stretch'}
         */
        layout: {ntype: 'hbox', align: 'stretch'},
        /**
         * @member {Array} items=[//...]
         */
        items: [{
            module         : _src_form_field_Search_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            listeners      : {change: 'onNavigationSearchFieldChange'},
            placeholderText: 'Filter Navigation',
            style          : {padding: '10px'},
            width          : 240
        }, {
            module      : _src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            domListeners: {click: 'onSwitchThemeButtonClick'},
            flex        : 'none',
            height      : 27,
            reference   : 'theme-button',
            style       : {marginTop: '5px'},
            text        : 'Theme Dark'
        }, {
            module      : _src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            domListeners: {click: 'onSwitchSourceViewThemeButtonClick'},
            flex        : 'none',
            height      : 27,
            reference   : 'source-view-theme-button',
            style       : {marginLeft: '10px', marginTop: '5px'},
            text        : 'Source View Theme Dark'
        }, {
            ntype: 'component',
            flex : 1
        }, {
            ntype: 'component',
            cls  : ['neo-logo-text'],
            html : 'neo.mjs docs',
            width: 210
        }]
    }}
}

Neo.applyClassConfig(HeaderContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/docs/app/view/MainContainer.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/neo.mjs/docs/app/view/MainContainer.mjs ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _ApiTreeList_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiTreeList.mjs */ "./node_modules/neo.mjs/docs/app/view/ApiTreeList.mjs");
/* harmony import */ var _classdetails_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classdetails/MainContainer.mjs */ "./node_modules/neo.mjs/docs/app/view/classdetails/MainContainer.mjs");
/* harmony import */ var _src_collection_Base_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/collection/Base.mjs */ "./node_modules/neo.mjs/src/collection/Base.mjs");
/* harmony import */ var _ContentTabContainer_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContentTabContainer.mjs */ "./node_modules/neo.mjs/docs/app/view/ContentTabContainer.mjs");
/* harmony import */ var _ExamplesTreeList_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExamplesTreeList.mjs */ "./node_modules/neo.mjs/docs/app/view/ExamplesTreeList.mjs");
/* harmony import */ var _HeaderContainer_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderContainer.mjs */ "./node_modules/neo.mjs/docs/app/view/HeaderContainer.mjs");
/* harmony import */ var _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MainContainerController.mjs */ "./node_modules/neo.mjs/docs/app/view/MainContainerController.mjs");
/* harmony import */ var _classdetails_SourceViewComponent_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./classdetails/SourceViewComponent.mjs */ "./node_modules/neo.mjs/docs/app/view/classdetails/SourceViewComponent.mjs");
/* harmony import */ var _classdetails_TutorialComponent_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./classdetails/TutorialComponent.mjs */ "./node_modules/neo.mjs/docs/app/view/classdetails/TutorialComponent.mjs");
/* harmony import */ var _TutorialsTreeList_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TutorialsTreeList.mjs */ "./node_modules/neo.mjs/docs/app/view/TutorialsTreeList.mjs");
/* harmony import */ var _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");












/**
 * @class Docs.app.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_10__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.view.MainContainer'
         * @protected
         */
        className: 'Docs.app.view.MainContainer',
        /**
         * @member {String} ntype='main-container'
         * @protected
         */
        ntype: 'main-container',
        /**
         * @member {Boolean} autoMount=true
         */
        autoMount : true,
        /**
         * @member {String[]} cls=['neo-docs-maincontainer', 'neo-viewport']
         */
        cls: ['neo-docs-maincontainer', 'neo-viewport'],
        /**
         * @member {Neo.controller.Component} controller=MainContainerController
         */
        controller: _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_6__["default"],
        /**
         * @member {Object} layout={ntype: 'vbox', align: 'stretch'}
         */
        layout: {ntype: 'vbox', align: 'stretch'},
        /**
         * @member {Neo.collection.Base|null} store_=null
         */
        store_: null,
        /**
         * @member {Array} items=[//...]
         */
        items: [_HeaderContainer_mjs__WEBPACK_IMPORTED_MODULE_5__["default"], {
            ntype : 'container',
            flex  : 1,
            layout: {ntype: 'hbox', align: 'stretch'},

            items: [{
                ntype   : 'tab-container',
                cls     : ['neo-docs-navigation-tab-container', 'neo-tab-container'],
                minWidth: 290,
                width   : 290,

                items: [{
                    module   : _ApiTreeList_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
                    listeners: {leafItemClick: 'onApiListLeafClick'},
                    reference: 'api-treelist',

                    tabButtonConfig: {
                        iconCls: 'fa fa-code',
                        text   : 'API'
                    }
                }, {
                    module   : _TutorialsTreeList_mjs__WEBPACK_IMPORTED_MODULE_9__["default"],
                    listeners: {leafItemClick: 'onTutorialListLeafClick'},
                    reference: 'tutorials-treelist',

                    tabButtonConfig: {
                        iconCls: 'fa fa-hands-helping',
                        text   : 'Tutorials'
                    }
                }, {
                    module   : _ExamplesTreeList_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
                    listeners: {leafItemClick: 'onExamplesListLeafClick'},
                    reference: 'examples-treelist',

                    tabButtonConfig: {
                        iconCls: 'fa fa-desktop',
                        text   : 'Examples'
                    }
                }]
            }, {
                module   : _ContentTabContainer_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
                flex     : 1,
                reference: 'content-tabcontainer'
            }]
        }]
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        if (!me.store) {
            me.store = Neo.create(_src_collection_Base_mjs__WEBPACK_IMPORTED_MODULE_2__["default"], {
                keyProperty: 'id'
            });
        }

        // Disable the examples Tab for dist versions until the webpack builds can handle this (see: #140)
        me.items[1].items[0].items[2].tabButtonConfig.disabled = !Neo.config.isExperimental;
    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        Neo.Xhr.promiseJson({
            url: '../../docs/output/all.json'
        }).then(data => {
            me.store.items = data.json;
        });
    }
}

Neo.applyClassConfig(MainContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/docs/app/view/MainContainerController.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/neo.mjs/docs/app/view/MainContainerController.mjs ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainerController; });
/* harmony import */ var _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");
/* harmony import */ var _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class Docs.app.view.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.view.MainContainerController'
         * @protected
         */
        className: 'Docs.app.view.MainContainerController',
        /**
         * @member {String} ntype='docs-maincontainer-controller'
         * @protected
         */
        ntype: 'docs-maincontainer-controller'
    }}

    /**
     *
     * @param {Object} record
     */
    onApiListLeafClick(record) {
        let me                  = this,
            contentTabContainer = me.getReference('content-tabcontainer');

        contentTabContainer.add({
            ntype        : 'classdetails-maincontainer',
            id           : record.className,
            structureData: record,

            tabButtonConfig: {
                iconCls: record.singleton ? 'fa fa-arrow-alt-circle-right' : 'fa fa-copyright',
                text   : record.name
            }
        });
    }

    /**
     *
     * @param {Object} record
     */
    onExamplesListLeafClick(record) {
        let me                  = this,
            contentTabContainer = me.getReference('content-tabcontainer'),
            name                = record.name,
            pathArray           = [],
            store               = me.getReference('examples-treelist').store,
            tmpRecord           = record,
            tabButtonConfig;

        while (tmpRecord.parentId !== null) {
            tmpRecord = store.get(tmpRecord.parentId);
            name      = tmpRecord.name + '.' + name;
        }

        name = 'examples_' + name;

        tabButtonConfig = {
            iconCls: 'fa fa-desktop',
            text   : record.name
        };

        if (!Array.isArray(record.path)) {
            import(
                /* webpackIgnore: true */
                record.path).then((module) => {
                    contentTabContainer.add({
                        ntype          : module.default.prototype.ntype,
                        id             : name,
                        tabButtonConfig: tabButtonConfig
                    });
                }
            );
        } else {
            record.path.forEach(path => {
                pathArray.push(import(/* webpackIgnore: true */ path));
            });

            Promise.all(pathArray).then(function(modules) {
                let items = [];

                modules.forEach(module => {
                    items.push({
                        ntype: module.default.prototype.ntype
                    });
                });

                contentTabContainer.add({
                    ntype          : 'container',
                    id             : name,
                    items          : items,
                    style          : {padding: '10px'},
                    tabButtonConfig: tabButtonConfig
                });
            })
        }
    }

    /**
     *
     * @param {Object} value
     * @param {Object} oldValue
     */
    onHashChange(value, oldValue) {
        let me                  = this,
            hash                = value && value.hash,
            contentTabContainer = me.getReference('content-tabcontainer'),
            structureStore      = me.getReference('api-treelist').store,
            record, tab;

        if (hash && hash.hasOwnProperty('viewSource')) {
            record = structureStore.find('className', hash.viewSource)[0];

            if (record) {
                tab = contentTabContainer.add({
                    ntype        : 'classdetails-sourceviewcomponent',
                    id           : hash.viewSource + '__source',
                    line         : hash.line,
                    structureData: record,

                    tabButtonConfig: {
                        iconCls: 'fa fa-code',
                        text   : record.name
                    }
                });

                // adjust the highlighted line for already added source view tabs
                tab.line = hash.line;
            }
        }
    }

    /**
     *
     * @param {Object} data
     */
    onNavigationSearchFieldChange(data) {
        let me    = this,
            value = data.value;

        me.getReference('examples-treelist') .filter('name', value, null);
        me.getReference('api-treelist')      .filter('name', value, null);
        me.getReference('tutorials-treelist').filter('name', value, null);
    }

    /**
     *
     */
    onSwitchSourceViewThemeButtonClick() {
        let me     = this,
            button = me.getReference('source-view-theme-button'),
            buttonText, href;

        if (button.text === 'Source View Theme Light') {
            buttonText = 'Source View Theme Dark';
            href       = './resources/highlightjs-custom-github-theme.css';
        } else {
            buttonText = 'Source View Theme Light';
            href       = './resources/highlightjs-custom-dark-theme.css';
        }

        Neo.main.addon.Stylesheet.swapStyleSheet({
            href: href,
            id  : 'hljs-theme'
        }).then(data => {
            button.text = buttonText;
        });
    }

    /**
     *
     */
    onSwitchThemeButtonClick() {
        let me     = this,
            button = me.getReference('theme-button'),
            view   = me.view,
            buttonText, cls, href, theme;

        if (button.text === 'Theme Light') {
            buttonText = 'Theme Dark';
            href       = '../dist/development/neo-theme-light-no-css4.css';
            theme      = 'neo-theme-light';
        } else {
            buttonText = 'Theme Light';
            href       = '../dist/development/neo-theme-dark-no-css4.css';
            theme      = 'neo-theme-dark';
        }

        if (Neo.config.useCss4) {
            cls = [...view.cls];

            view.cls.forEach((item, index) => {
                if (item.includes('neo-theme')) {
                    _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, item);
                }
            });

            _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, theme);
            view.cls = cls;

            button.text = buttonText;
        } else {
            Neo.main.addon.Stylesheet.swapStyleSheet({
                href: href,
                id  : 'neo-theme'
            }).then(data => {
                button.text = buttonText;
            });
        }
    }

    /**
     *
     * @param {Object} record
     */
    onTutorialListLeafClick(record) {
        let me                  = this,
            contentTabContainer = me.getReference('content-tabcontainer');

        contentTabContainer.add({
            ntype   : 'classdetails-tutorialcomponent',
            fileName: record.fileName,
            fileType: record.type,
            id      : record.name,

            tabButtonConfig: {
                iconCls: 'fa fa-hands-helping',
                text   : record.name
            }
        });
    }
}

Neo.applyClassConfig(MainContainerController);



/***/ }),

/***/ "./node_modules/neo.mjs/docs/app/view/TutorialsTreeList.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/neo.mjs/docs/app/view/TutorialsTreeList.mjs ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TutorialsTreeList; });
/* harmony import */ var _src_list_TreeList_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/list/TreeList.mjs */ "./node_modules/neo.mjs/src/list/TreeList.mjs");


/**
 * @class Docs.app.view.TutorialsTreeList
 * @extends Neo.list.TreeList
 */
class TutorialsTreeList extends _src_list_TreeList_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.view.TutorialsTreeList'
         * @protected
         */
        className: 'Docs.app.view.TutorialsTreeList',
        /**
         * @member {String} ntype='tutorials-treelist'
         * @protected
         */
        ntype: 'tutorials-treelist',
        /**
         * @member {String[]} cls=['docs-tutorials-treelist', 'neo-tree-list', 'neo-list-container', 'neo-list']
         */
        cls: [
            'docs-tutorials-treelist',
            'neo-tree-list',
            'neo-list-container',
            'neo-list'
        ]
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        Neo.Xhr.promiseJson({
            url: '../../docs/tutorials/tutorials.json'
        }).then(data => {
            let vdom     = me.vdom,
                itemRoot = me.getListItemsRoot();

            me.store.items = data.json;
            itemRoot = me.createItems(null, itemRoot, 0);

            me.vdom = vdom;
        });
    }
}

Neo.applyClassConfig(TutorialsTreeList);



/***/ }),

/***/ "./node_modules/neo.mjs/docs/app/view/classdetails/HeaderComponent.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/neo.mjs/docs/app/view/classdetails/HeaderComponent.mjs ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderComponent; });
/* harmony import */ var _src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _SourceViewComponent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SourceViewComponent.mjs */ "./node_modules/neo.mjs/docs/app/view/classdetails/SourceViewComponent.mjs");



/**
 * @class Docs.app.view.classdetails.HeaderComponent
 * @extends Neo.component.Base
 */
class HeaderComponent extends _src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.view.classdetails.HeaderComponent'
         * @protected
         */
        className: 'Docs.app.view.classdetails.HeaderComponent',
        /**
         * @member {String} ntype='classdetails-headercomponent'
         * @protected
         */
        ntype: 'classdetails-headercomponent',
        /**
         * @member {String[]} cls=['neo-docs-classdetails-headercomponent']
         */
        cls: ['neo-docs-classdetails-headercomponent'],
        /**
         * @member {Object|null} record_=null
         */
        record_: null,
        /**
         * @member {Object} domListeners
         */
        domListeners: {
            click: {
                fn      : 'onHeaderClick', // Docs.app.view.MainContainerController
                delegate: '.neo-docs-header-text'
            }
        },
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            cn: [{
                tag: 'span',
                cls: ['neo-docs-header-text']
            }]
        }
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me         = this,
            vdom      = me.vdom,
            className = me.record.className,
            store     = me.up('main-container').store,
            record    = store.find({$kind: className === 'Neo' ? 'module' : 'class', neoClassName: className})[0],
            i         = 0,
            len       = record && record.tags && record.tags.length || 0,
            singleton = false;

        for (; i < len; i++) {
            if (record.tags[i].title === 'singleton') {
                singleton = true;
                break;
            }
        }

        vdom.cn[0].innerHTML = singleton ? (className + ' → Singleton') : className;

        if (record.description) {
            vdom.cn.push({
                cls      : ['neo-docs-header-description'],
                innerHTML: record.description
            });
        }

        me.vdom = vdom;
    }
}

Neo.applyClassConfig(HeaderComponent);



/***/ }),

/***/ "./node_modules/neo.mjs/docs/app/view/classdetails/HierarchyTreeList.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/neo.mjs/docs/app/view/classdetails/HierarchyTreeList.mjs ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HierarchyTreeList; });
/* harmony import */ var _src_list_TreeList_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/list/TreeList.mjs */ "./node_modules/neo.mjs/src/list/TreeList.mjs");
/* harmony import */ var _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class Docs.app.view.classdetails.HierarchyTreeList
 * @extends Neo.list.TreeList
 */
class HierarchyTreeList extends _src_list_TreeList_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.view.classdetails.HierarchyTreeList'
         * @protected
         */
        className: 'Docs.app.view.classdetails.HierarchyTreeList',
        /**
         * @member {String} ntype='classdetails-treelist'
         * @protected
         */
        ntype: 'classhierarchy-treelist',
        /**
         * @member {String[]} cls=['docs-classhierarchy-treelist', 'neo-list-container', 'neo-list']
         */
        cls: [
            'docs-classhierarchy-treelist',
            'neo-list-container',
            'neo-tree-list',
            'neo-list'
        ],
        /**
         * @member {Boolean} showCollapseExpandAllIcons=false
         */
        showCollapseExpandAllIcons: false,
        /**
         * @member {Object|null} structureData=null
         */
        structureData: null
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        me.createStoreItems();
        me.createItems(null, me.getListItemsRoot(), 0);
    }

    /**
     *
     */
    createStoreItems() {
        let me            = this,
            className     = me.structureData.className,
            mainContainer = me.up('main-container'),
            mainStore     = mainContainer.store,
            storeItems    = [],
            tmpItems      = [],
            item, parentId;

        item = mainStore.find({
            $kind       : className === 'Neo' ? 'module' : 'class',
            neoClassName: me.structureData.className
        })[0];

        tmpItems.unshift(item);

        while (item && item.hasOwnProperty('augments')) {
            item = mainStore.find({
                $kind       : 'class',
                neoClassName: item.augments[0]
            })[0];

            tmpItems.unshift(item);
        }

        tmpItems.forEach((key, index) => {
            if (key) {
                parentId = tmpItems[index - 1] ? tmpItems[index - 1].id : null;

                storeItems.push({
                    checked : true,
                    id      : key.id,
                    isLeaf  : true,
                    name    : key.neoClassName,
                    parentId: parentId
                });
            }
        });

        me.store.items = storeItems;
    }

    /**
     *
     * @param {Object} record
     */
    onLeafItemClick(record) {
        let me       = this,
            vnodeId  = me.getItemId(record.id),
            vdom     = me.vdom,
            vdomNode = me.getVdomChild(vnodeId);

        _src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"][record.checked ? 'add' : 'remove'](vdomNode.cls, 'unchecked');

        record.checked = !record.checked;

        me.vdom = vdom;

        me.fire('refreshClassMembers');
    }
}

Neo.applyClassConfig(HierarchyTreeList);



/***/ }),

/***/ "./node_modules/neo.mjs/docs/app/view/classdetails/MainContainer.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/neo.mjs/docs/app/view/classdetails/MainContainer.mjs ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _HeaderComponent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderComponent.mjs */ "./node_modules/neo.mjs/docs/app/view/classdetails/HeaderComponent.mjs");
/* harmony import */ var _HierarchyTreeList_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HierarchyTreeList.mjs */ "./node_modules/neo.mjs/docs/app/view/classdetails/HierarchyTreeList.mjs");
/* harmony import */ var _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainContainerController.mjs */ "./node_modules/neo.mjs/docs/app/view/classdetails/MainContainerController.mjs");
/* harmony import */ var _MembersList_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MembersList.mjs */ "./node_modules/neo.mjs/docs/app/view/classdetails/MembersList.mjs");
/* harmony import */ var _src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/container/Panel.mjs */ "./node_modules/neo.mjs/src/container/Panel.mjs");
/* harmony import */ var _src_form_field_Search_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../src/form/field/Search.mjs */ "./node_modules/neo.mjs/src/form/field/Search.mjs");








/**
 * @class Docs.app.view.classdetails.MainContainer
 * @extends Neo.container.Base
 */
class MainContainer extends _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.view.classdetails.MainContainer'
         * @protected
         */
        className: 'Docs.app.view.classdetails.MainContainer',
        /**
         * @member {String} ntype='classdetails-maincontainer'
         * @protected
         */
        ntype: 'classdetails-maincontainer',
        /**
         * @member {String[]} cls=['neo-docs-classdetails-maincontainer', 'neo-container']
         */
        cls: ['neo-docs-classdetails-maincontainer', 'neo-container'],
        /**
         * @member {Neo.controller.Component} controller=MainContainerController
         */
        controller: _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
        /**
         * @member {Object} layout={ntype: 'vbox', align: 'stretch'}
         */
        layout: {ntype: 'vbox', align: 'stretch'},
        /**
         * @member {Object|null} structureData=null
         */
        structureData: null,
        /**
         * @member {Array} items=[//...]]
         */
        items: [{
            ntype : 'container',
            _cls  : ['neo-docs-classdetails-headercontainer'],
            flex  : '0 1 auto',
            layout: {ntype: 'hbox', align: 'stretch'},

            items: [{
                module : _src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
                cls    : ['neo-docs-classdetails-headerpanel', 'neo-panel', 'neo-container'],
                headers: [{
                    dock : 'bottom',
                    style: {borderWidth: 0},
                    items: [{
                        handler  : 'onScrollIntoView',
                        reference: 'showConfigs',
                        style    : {marginRight: '5px'},
                        text     : 'Configs'
                    }, {
                        handler  : 'onScrollIntoView',
                        reference: 'showMethods',
                        style    : {marginRight: '5px'},
                        text     : 'Methods'
                    }, {
                        handler  : 'onScrollIntoView',
                        reference: 'showEvents',
                        text     : 'Events'
                    }, {
                        ntype: 'component',
                        flex : 1
                    }, {
                        module         : _src_form_field_Search_mjs__WEBPACK_IMPORTED_MODULE_6__["default"],
                        listeners      : {change: 'onSearchFieldChange'},
                        placeholderText: 'Filter Members',
                        width          : 160,

                        style: {
                            margin     : 0,
                            marginRight: '5px',
                            paddingTop : '2px'
                        }
                    }, {
                        checked  : true,
                        handler  : 'onToggleMembers',
                        iconCls  : 'fa fa-check-square',
                        reference: 'showPrivateMembers',
                        style    : {marginRight: '5px'},
                        text     : 'Private',
                    }, {
                        checked  : true,
                        handler  : 'onToggleMembers',
                        iconCls  : 'fa fa-check-square',
                        reference: 'showProtectedMembers',
                        style    : {marginRight: '5px'},
                        text     : 'Protected',
                    }, {
                        checked  : true,
                        handler  : 'onToggleMembers',
                        iconCls  : 'fa fa-check-square',
                        reference: 'showStaticMembers',
                        text     : 'Static'
                    }]
                }],

                items: [{
                    module: _HeaderComponent_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
                    flex  : 1,
                    record: '@config:structureData'
                }]
            }, {
                module       : _HierarchyTreeList_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
                flex         : '0 0 auto',
                minWidth     : 330,
                structureData: '@config:structureData'
            }]
        }, {
            module   : _MembersList_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            flex     : 1,
            listeners: {mutateItems: 'onMutateItems'},
            reference: 'classdetails-memberslist'
        }]
    }}
}

Neo.applyClassConfig(MainContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/docs/app/view/classdetails/MainContainerController.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/neo.mjs/docs/app/view/classdetails/MainContainerController.mjs ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainerController; });
/* harmony import */ var _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");
/* harmony import */ var _SourceViewComponent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SourceViewComponent.mjs */ "./node_modules/neo.mjs/docs/app/view/classdetails/SourceViewComponent.mjs");



/**
 * @class Docs.app.view.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.view.classdetails.MainContainerController'
         * @protected
         */
        className: 'Docs.app.view.classdetails.MainContainerController',
        /**
         * @member {String} ntype='docs-classdetails-maincontainer-controller'
         * @protected
         */
        ntype: 'docs-classdetails-maincontainer-controller'
    }}

    /**
     *
     * @param {Object} data
     */
    onHeaderClick(data) {
        let me                  = this,
            record              = me.view.structureData,
            mainContainer       = me.view.up('main-container'),
            contentTabContainer = mainContainer.down('docs-content-tabcontainer'),
            className           = (record.path ? record.path + '.' : '') + record.name;

        contentTabContainer.add({
            module       : _SourceViewComponent_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            id           : className + '__source',
            structureData: record,

            tabButtonConfig: {
                iconCls: 'fa fa-code',
                text   : className
            }
        });
    }

    /**
     *
     * @param {Neo.collection.Base} store
     */
    onMutateItems(store) {
        let me              = this,
            countConfigs    = 0,
            countEvents     = 0,
            countMethods    = 0,
            countPrivates   = 0,
            countProtecteds = 0,
            countStatics    = 0;

        store.items.forEach(item => {
            if (item.kind === 'function') {
                countMethods++;
            } else if (item.kind === 'member') {
                countConfigs++;
            } else {
                countEvents++;
            }

            if (item.access === 'private') {
                countPrivates++;
            } else if (item.access === 'protected') {
                countProtecteds++;
            }

            if (item.scope === 'static') {
                countStatics++;
            }
        });

        me.getReference('showConfigs')         .text = 'Configs '   + countConfigs;
        me.getReference('showMethods')         .text = 'Methods '   + countMethods;
        me.getReference('showEvents')          .text = 'Events '    + countEvents;
        me.getReference('showPrivateMembers')  .text = 'Private '   + countPrivates;
        me.getReference('showProtectedMembers').text = 'Protected ' + countProtecteds;
        me.getReference('showStaticMembers')   .text = 'Static '    + countStatics;
    }

    /**
     *
     * @param {Object} data
     */
    onScrollIntoView(data) {
        let me     = this,
            button = Neo.getComponent(data.target.id);

        Neo.main.addon.HighlightJS.scrollIntoView({
            text   : button.reference.substr(4),
            vnodeId: me.view.vdom.id
        });
    }

    /**
     *
     * @param {Object} data
     */
    onSearchFieldChange(data) {
        this.getReference('classdetails-memberslist').filterMembersQuery = data.value;
    }

    /**
     *
     * @param {Object} data
     */
    onToggleMembers(data) {
        let button      = Neo.getComponent(data.target.id),
            membersList = this.getReference('classdetails-memberslist');

        button.iconCls = button.checked ? 'fa fa-square' : 'fa fa-check-square';
        button.checked = !button.checked;

        membersList[button.reference] = button.checked;
    }
}

Neo.applyClassConfig(MainContainerController);



/***/ }),

/***/ "./node_modules/neo.mjs/docs/app/view/classdetails/MembersList.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/neo.mjs/docs/app/view/classdetails/MembersList.mjs ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MembersList; });
/* harmony import */ var _src_list_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/list/Base.mjs */ "./node_modules/neo.mjs/src/list/Base.mjs");
/* harmony import */ var _src_collection_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/collection/Base.mjs */ "./node_modules/neo.mjs/src/collection/Base.mjs");



/**
 * @class Docs.app.view.classdetails.MembersList
 * @extends Neo.list.Base
 */
class MembersList extends _src_list_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.view.classdetails.MembersList'
         * @protected
         */
        className: 'Docs.app.view.classdetails.MembersList',
        /**
         * @member {String} ntype='classdetails-memberslist'
         * @protected
         */
        ntype: 'classdetails-memberslist',
        /**
         * @member {String[]} cls=['docs-classhierarchy-memberslist']
         */
        cls: ['docs-classhierarchy-memberslist'],
        /**
         * @member {String} filterMembersQuery_=''
         * @protected
         */
        filterMembersQuery_: '',
        /**
         * @member {Boolean} showPrivateMembers_=true
         */
        showPrivateMembers_: true,
        /**
         * @member {Boolean} showProtectedMembers_=true
         */
        showProtectedMembers_: true,
        /**
         * @member {Boolean} showStaticMembers_=true
         */
        showStaticMembers_: true,
        /**
         * @member {Neo.collection.Base} store=null
         */
        store: null,
        /**
         * @member {String|null} targetClassName=null
         */
        targetClassName: null,
        /**
         * @member {Object} _vdom={cn: []}
         */
        _vdom: {
            cn: []
        }
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me            = this,
            hierarchyView = me.up('classdetails-maincontainer').down('classhierarchy-treelist'),
            mainStore     = me.up('main-container').store;

        hierarchyView.on({
            refreshClassMembers: me.onRefreshClassMembers,
            scope              : me
        });

        me.store = Neo.create(_src_collection_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], {
            filterMode: 'advanced',
            sourceId  : mainStore.id
        });

        me.onRefreshClassMembers();
    }

    /**
     * Triggered after the filterMembersQuery config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetFilterMembersQuery(value, oldValue) {
        if (oldValue !== undefined) {
            this.onRefreshClassMembers();
        }
    }

    /**
     * Triggered after the showProtectedMembers config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetShowProtectedMembers(value, oldValue) {
        if (oldValue !== undefined) {
            this.onRefreshClassMembers();
        }
    }

    /**
     * Triggered after the showPrivateMembers config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetShowPrivateMembers(value, oldValue) {
        if (oldValue !== undefined) {
            this.onRefreshClassMembers();
        }
    }

    /**
     * Triggered after the showStaticMembers config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetShowStaticMembers(value, oldValue) {
        if (oldValue !== undefined) {
            this.onRefreshClassMembers();
        }
    }

    /**
     *
     * @param {Neo.collection.Base} store
     * @param {Object} vdom
     * @returns {Object} vdom
     */
    applyConfigsHeader(store, vdom) {
        if (store.items[0] && store.items[0].kind === 'member') {
            vdom.cn.push({
                // scrolling placeholder
            }, {
                cls      : ['neo-docs-memberlist-group-header'],
                innerHTML: 'Configs',
                'data-list-header': 'Configs'
            });
        }

        return vdom;
    }

    /**
     *
     * @param {Object} item
     * @param {Number} index
     * @param {Neo.collection.Base} store
     * @param {Object} vdom
     * @returns {Object} vdom
     */
    applyEventsHeader(item, index, store, vdom) {
        if (
            item.kind === 'event' &&
            store.items[index -1] &&
            store.items[index -1].kind !== 'event'
        ) {
            vdom.cn.push({
                // scrolling placeholder
            }, {
                cls      : ['neo-docs-memberlist-group-header'],
                innerHTML: 'Events',
                style    : {zIndex: 3},
                'data-list-header': 'Events'
            });
        }

        return vdom;
    }

    /**
     *
     * @param {Object} item
     * @param {Number} index
     * @param {Neo.collection.Base} store
     * @param {Object} vdom
     * @returns {Object} vdom
     */
    applyMethodsHeader(item, index, store, vdom) {
        if (
            item.kind === 'function' &&
            (
                !store.items[index -1] || (
                    store.items[index -1] &&
                    store.items[index -1].kind !== 'function'
                )
            )
        ) {
            vdom.cn.push({
                // scrolling placeholder
            }, {
                cls      : ['neo-docs-memberlist-group-header'],
                innerHTML: 'Methods',
                style    : {zIndex: 2},
                'data-list-header': 'Methods'
            });
        }

        return vdom;
    }

    /**
     *
     */
    createItems() {
        let me                 = this,
            filterMembersRegEx = new RegExp(me.filterMembersQuery || '', 'gi'),
            hasExamples        = false,
            targetClassName    = me.targetClassName,
            vdom               = me.vdom,
            headerText, itemAttributes, itemConfig, path;

        vdom.cn = [];
        vdom = me.applyConfigsHeader(me.store, vdom);

        me.store.items.forEach((item, index) => {
            vdom = me.applyEventsHeader( item, index, me.store, vdom);
            vdom = me.applyMethodsHeader(item, index, me.store, vdom);

            itemAttributes = [];

            if (item.name.substr(-1) === '_') {
                item.name = item.name.slice(0, -1) ;
                itemAttributes.push('GS');
            }

            if (item.neoClassName !== targetClassName) {
                itemAttributes.push('inherited');
            }

            if (item.access === 'private' || item.access === 'protected') {
                itemAttributes.push(item.access);
            }

            if (item.scope === 'static') {
                itemAttributes.push('static');
            }

            headerText = item.name;

            if (me.filterMembersQuery !== '' && me.filterMembersQuery !== null) {
                headerText = headerText.replace(filterMembersRegEx, match => `<span class="neo-highlight-search">${match}</span>`);
            }

            // configs
            if (item.type && item.type.names) {
                headerText += (': {' + MembersList.escapeHtml(item.type.names.join('|')) + '}');
            }

            if (item.hasOwnProperty('defaultvalue')) {
                headerText += (' = ' + item.defaultvalue);
            }

            // methods
            if (item.params && item.kind !== 'event') {
                headerText += ('(' + item.params.reduce((result, param) => {
                    if (param.name.indexOf('.') < 0) {
                        if (param.optional) {
                            result.push('[' + param.name + ']');
                        } else {
                            result.push(param.name);
                        }
                    }
                    return result;
                }, []).join(', ') + ')');
            }

            if (item.returns) {
                headerText += (' → {' + MembersList.escapeHtml(item.returns[0].type.names.join('|') + '}'));
            }

            path = item.meta.path;

            if (path.includes('/neo.mjs/')) {
                path = path.substr(path.indexOf('/neo.mjs/') + 9);
            } else if (path.includes('/neomjs/')) {
                path = path.substr(path.indexOf('/neomjs/')  + 8);
            } else if (path.includes('/neo/')) {
                path = path.substr(path.indexOf('/neo/')     + 5);
            }

            itemConfig = {
                cls: ['neo-list-item'],
                cn : [{
                    cls: ['neo-list-item-header-container'],
                    cn : [{
                        cls      : ['neo-list-item-header'],
                        innerHTML: headerText
                    }, {
                        style: {
                            flex: 1
                        }
                    }, {
                        cls      : ['neo-list-item-header'],
                        innerHTML: itemAttributes.join(', ')
                    }]
                }, {
                    cls: 'neo-docs-view-source-link-container',
                    cn :[{
                        tag      : 'a',
                        cls      : ['neo-docs-view-source-link'],
                        href     : '#viewSource=' + item.neoClassName + '&line=' + item.meta.lineno,
                        innerHTML: 'Source: ' + path + '/' + item.meta.filename + ' (Line ' + item.meta.lineno + ')'
                    }]
                }, {
                    innerHTML: item.description
                }]
            };

            if (item.examples && item.examples.length > 0) {
                hasExamples = true;

                item.examples.forEach(example => {
                    itemConfig.cn.push({
                        tag: 'pre',
                        cn : [{
                            tag : 'code',
                            html: example
                        }]
                    });
                });
            }

            if (item.params && item.params.length > 0) {
                itemConfig.cn.push(MembersList.createParametersTable(item.params));
            }

            if (item.returns && item.kind !== 'event') {
                itemConfig.cn.push({
                    innerHTML: 'Returns {' + MembersList.escapeHtml(item.returns[0].type.names.join('|') + '} ') + (item.returns[0].description || '')
                });
            }

            vdom.cn.push(itemConfig);
        });

        me.vdom = vdom;

        if (hasExamples) {
            setTimeout(() => {
                Neo.main.addon.HighlightJS.syntaxHighlightInit();
            }, 100);
        }
    }

    /**
     *
     * @param {Object} params
     * @returns {Object} vdom
     */
    static createParametersTable(params) {
        let hasDefaultValues  = false,
            hasOptionalParams = false,
            description, nestedParams, paramTable;

        params.forEach(param => {
            if (param.hasOwnProperty('defaultvalue')) {
                hasDefaultValues = true;
            }

            if (param.hasOwnProperty('optional')) {
                hasOptionalParams = true;
            }
        });

        paramTable = {
            tag: 'table',
            cls: 'docs-param-table',
            cn : [{
                tag: 'thead',
                cn : [{
                    tag      : 'th',
                    innerHTML: 'Name'
                }, {
                    tag      : 'th',
                    innerHTML: 'Type'
                }, {
                    tag      : 'th',
                    innerHTML: 'Description'
                }]
            }]
        };

        if (hasDefaultValues) {
            paramTable.cn[0].cn.splice(2, 0, {
                tag      : 'th',
                innerHTML: 'Default'
            });
        }

        if (hasOptionalParams) {
            paramTable.cn[0].cn.splice(2, 0, {
                tag      : 'th',
                innerHTML: 'Optional'
            });
        }

        params.forEach(param => {
            if (param.name.indexOf('.') < 0) { // ignore nested params
                description = {
                    tag      : 'td',
                    innerHTML: param.description
                };
                nestedParams = [];

                params.forEach(p => {
                    if (p.name.indexOf(param.name + '.') === 0) {
                        p = Neo.clone(p, true);

                        p.name = p.name.split('.');
                        p.name.shift();
                        p.name = p.name.join('.');

                        nestedParams.push(p);
                    }
                });

                if (nestedParams.length > 0) {
                    description = {
                        tag: 'td',
                        cn : [{
                            innerHTML: description.innerHTML
                        },
                        MembersList.createParametersTable(nestedParams)]
                    }
                }

                paramTable.cn.push({
                    tag: 'tr',
                    cn : [{
                        tag      : 'td',
                        innerHTML: param.name
                    }, {
                        tag      : 'td',
                        innerHTML: param.type ? MembersList.escapeHtml(param.type.names.join(' | ')) : ''
                    },
                    description]
                });

                if (hasDefaultValues) {
                    paramTable.cn[paramTable.cn.length - 1].cn.splice(2, 0, {
                        tag      : 'td',
                        innerHTML: param.defaultvalue === undefined ? '' : (param.defaultvalue + '')
                    });
                }

                if (hasOptionalParams) {
                    paramTable.cn[paramTable.cn.length - 1].cn.splice(2, 0, {
                        tag      : 'td',
                        innerHTML: param.optional
                    });
                }
            }
        });

        return paramTable;
    }

    /**
     * Replaces '<' & '>'
     * @param {String} value
     * @returns {String}
     */
    static escapeHtml(value) {
        return value.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    /**
     *
     */
    filterAndSortItems() {
        let me             = this,
            hierarchyMap   = {},
            hierarchyStore = me.up('classdetails-maincontainer').down('classhierarchy-treelist').store,
            hierarchyItems = hierarchyStore.items,
            i              = 0,
            tmpItems       = [],
            filters, tmpItemsLen;

        hierarchyItems.forEach(cls => {
            if (cls.checked === true) {
                tmpItems.push(cls.name);
            }
        });

        tmpItemsLen = tmpItems.length;

        for (; i < tmpItemsLen; i++) {
            hierarchyMap[tmpItems[i]] = i;
        }

        me.targetClassName = hierarchyItems[hierarchyItems.length -1].name;

        filters = [{
            operator: 'included',
            property: 'neoClassName',
            value   : tmpItems
        }, {
            operator: '!==',
            property: 'kind',
            value   : 'class'
        }, {
            operator: '!==',
            property: 'kind',
            value   : 'constant' // todo?
        }, {
            operator: '!==',
            property: 'kind',
            value   : 'module'
        }, {
            operator: 'isUndefined',
            property: 'inherited'
        }];

        if (!me.showPrivateMembers) {
            filters.push({
                operator: '!==',
                property: 'access',
                value   : 'private'
            });
        }

        if (!me.showProtectedMembers) {
            filters.push({
                operator: '!==',
                property: 'access',
                value   : 'protected'
            });
        }

        if (!me.showStaticMembers) {
            filters.push({
                operator: '!==',
                property: 'scope',
                value   : 'static'
            });
        }

        if (me.filterMembersQuery !== '' && me.filterMembersQuery !== null) {
            filters.push({
                operator: 'like',
                property: 'name',
                value   : me.filterMembersQuery
            });
        }

        filters.push({
            scope   : me,
            filterBy: function(item, filteredItems, allItems) {
                let me              = this,
                    targetClassName = me.targetClassName,
                    filteredItem, i, len;

                // always exclude inherited alternateClassName & ntype configs
                if ((item.name === 'alternateClassName' || item.name === 'ntype') && item.neoClassName !== targetClassName
                ) {
                    return true;
                }

                if (item.neoClassName !== targetClassName) {
                    i   = 0;
                    len = filteredItems.length;

                    for (; i < len; i++) {
                        filteredItem = filteredItems[i];

                        if (item.id !== filteredItem.id) {
                            if (
                                item.name  === filteredItem.name  &&
                                item.scope === filteredItem.scope && // static VS instance members
                                hierarchyMap[item.neoClassName] < hierarchyMap[filteredItem.neoClassName]
                            ) {
                                return true;
                            }
                        }
                    }
                }

                return false;
            }
        });

        me.store.filters = filters;

        me.store.sorters = [{
            // Configs => Methods => Events
            sortBy: function(a, b) {
                a = a.kind === 'member' ? 0 : a.kind === 'function' ? 1 : 2;
                b = b.kind === 'member' ? 0 : b.kind === 'function' ? 1 : 2;

                return a > b ? 1 : a < b ? -1 : 0;
            }
        }, {
            direction: 'ASC',
            property : 'name'
        }];

        me.fire('mutateItems', me.store);
    }

    /**
     * Override to not call createItems() at this point => onRefreshClassMembers()
     */
    onStoreFilter() {}

    /**
     *
     */
    onRefreshClassMembers() {
        this.filterAndSortItems();
        this.createItems();
    }
}

Neo.applyClassConfig(MembersList);



/***/ }),

/***/ "./node_modules/neo.mjs/docs/app/view/classdetails/SourceViewComponent.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/neo.mjs/docs/app/view/classdetails/SourceViewComponent.mjs ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SourceViewComponent; });
/* harmony import */ var _src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class Docs.app.view.classdetails.SourceViewComponent
 * @extends Neo.component.Base
 */
class SourceViewComponent extends _src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.view.classdetails.SourceViewComponent'
         * @protected
         */
        className: 'Docs.app.view.classdetails.SourceViewComponent',
        /**
         * @member {String} ntype='classdetails-sourceviewcomponent'
         * @protected
         */
        ntype: 'classdetails-sourceviewcomponent',
        /**
         * @member {Boolean} isHighlighted_=false
         * @protected
         */
        isHighlighted_: false,
        /**
         * @member {Number|null} line_=null
         * @protected
         */
        line_: null,
        /**
         * @member {Number|null} previousLine=null
         * @protected
         */
        previousLine: null,
        /**
         * @member {Object|null} structureData=null
         * @protected
         */
        structureData: null,
        /**
         * @member {Object} style= {overflow: 'auto'}
         */
        style: {
            overflow: 'auto'
        },
        /**
         * @member {Object} _vdom={cn: [//...]}
         */
        _vdom: {
            cn: [{
                tag: 'pre',
                cn : [{
                    tag  : 'code',
                    class: 'javascript'
                }]
            }]
        }
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me   = this,
            url  = '../../' + me.structureData.srcPath;

        Neo.Xhr.promiseRequest({
            url: url
        }).then(data => {
            setTimeout(() => { // ensure we are not mounting
                me.applySourceCode(data.response);
            }, 100);
        });
    }

    /**
     * Triggered after the isHighlighted config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetIsHighlighted(value, oldValue) {
        if (value) {
            let me = this;

            setTimeout(() => {
                Neo.main.addon.HighlightJS.syntaxHighlightLine({
                    addLine   : me.line,
                    removeLine: me.previousLine,
                    vnodeId   : me.vdom.cn[0].id
                });
            }, 50);
        }
    }

    /**
     * Triggered after the line config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetLine(value, oldValue) {
        let me = this;

        if (oldValue) {
            me.previousLine = oldValue;
        }

        if (me.isHighlighted) {
            me.afterSetIsHighlighted(true, false);
        }
    }

    /**
     *
     * @param {Object} data
     */
    applySourceCode(data) {
        let me   = this,
            vdom = me.vdom,
            node = vdom.cn[0]; // pre tag

        node.cn[0].innerHTML = data; // code tag
        me.vdom = vdom;

        setTimeout(() => {
            me.syntaxHighlight(node.id);
        }, 50);
    }

    /**
     *
     * @param {String} vnodeId
     */
    syntaxHighlight(vnodeId) {
        let me = this,
            id;

        if (me.vnode) {
            Neo.main.addon.HighlightJS.syntaxHighlight({
                vnodeId: me.vdom.cn[0].id
            }).then(() => {
                me.isHighlighted = true;
            });
        } else {
            id = me.on('mounted', () => {
                setTimeout(() => {
                    me.un('mounted', id);
                    me.syntaxHighlight(vnodeId);
                }, 50);
            });
        }
    }
}

Neo.applyClassConfig(SourceViewComponent);



/***/ }),

/***/ "./node_modules/neo.mjs/docs/app/view/classdetails/TutorialComponent.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/neo.mjs/docs/app/view/classdetails/TutorialComponent.mjs ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TutorialComponent; });
/* harmony import */ var _src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class Docs.app.view.classdetails.TutorialComponent
 * @extends Neo.component.Base
 */
class TutorialComponent extends _src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.view.classdetails.TutorialComponent'
         * @protected
         */
        className: 'Docs.app.view.classdetails.TutorialComponent',
        /**
         * @member {String} ntype='classdetails-tutorialcomponent'
         * @protected
         */
        ntype: 'classdetails-tutorialcomponent',
        /**
         * @member {String[]} cls=['neo-classdetails-tutorialcomponent']
         */
        cls: ['neo-classdetails-tutorialcomponent'],
        /**
         * @member {String|null} fileName=null
         */
        fileName: null,
        /**
         * @member {String|null} fileType=null
         */
        fileType: null,
        /**
         * @member {Object} style={overflow: 'auto'}
         */
        style: {
            overflow: 'auto'
        }
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me     = this,
            isJson = me.fileType === 'json',
            url    = '../../docs/tutorials/' + me.fileName;

        Neo.Xhr[isJson ? 'promiseJson' : 'promiseRequest']({
            url: url
        }).then(data => {
            setTimeout(() => { // ensure we are not mounting
                me.applySourceCode(isJson ? data.json : data.response);
            }, 100);
        });
    }

    /**
     *
     * @param {Object} data
     */
    applySourceCode(data) {
        let me   = this,
            vdom = me.vdom;

        if (me.fileType === 'json') {
            vdom.cn = data;
        } else {
            vdom.innerHTML = data;
        }

        me.vdom = vdom;

        setTimeout(() => {
            TutorialComponent.syntaxHighlight();
        }, 50);
    }

    /**
     *
     */
    static syntaxHighlight() {
        Neo.main.addon.HighlightJS.syntaxHighlightInit();
    }
}

Neo.applyClassConfig(TutorialComponent);



/***/ }),

/***/ "./node_modules/neo.mjs/src/container/Panel.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/container/Panel.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Panel; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _Toolbar_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toolbar.mjs */ "./node_modules/neo.mjs/src/container/Toolbar.mjs");



/**
 * An extended Container supporting multiple docked header toolbars
 * @class Neo.container.Panel
 * @extends Neo.container.Base
 */
class Panel extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.container.Panel'
         * @protected
         */
        className: 'Neo.container.Panel',
        /**
         * @member {String} ntype='panel'
         * @protected
         */
        ntype: 'panel',
        /**
         * @member {String[]} cls=['neo-panel', 'neo-container']
         */
        cls: ['neo-panel', 'neo-container'],
        /**
         * @member {Object} containerConfig=null
         */
        containerConfig: null,
        /**
         * @member {Object} headerDefaults=null
         */
        headerDefaults: null,
        /**
         * @member {Array} headers=null
         */
        headers: null,
        /**
         * @member {Object} items={ntype: 'vbox', align: 'stretch'}
         */
        _layout: {
            ntype: 'vbox',
            align: 'stretch'
        },
        /**
         * @member {Boolean} verticalHeadersFirst=false
         */
        verticalHeadersFirst: false
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this,
            hf = config && config.verticalHeadersFirst === true || me.verticalHeadersFirst === true;

        if (hf) {
            me.layout = {
                ntype: 'hbox',
                align: 'stretch'
            };
        }
    }

    /**
     *
     */
    createItems() {
        let me                   = this,
            hf                   = me.verticalHeadersFirst === false,
            headers              = me.headers || [],
            bottomHeaders        = headers.filter(header => {return header.dock === (hf ?'bottom': 'right')}),
            leftHeaders          = headers.filter(header => {return header.dock === (hf ?'left'  : 'top')}),
            rightHeaders         = headers.filter(header => {return header.dock === (hf ?'right' : 'bottom')}),
            topHeaders           = headers.filter(header => {return header.dock === (hf ?'top'   : 'left')}),
            hasHorizontalHeaders = bottomHeaders.length > 0 || topHeaders  .length > 0,
            hasVerticalHeaders   = leftHeaders  .length > 0 || rightHeaders.length > 0,
            items                = me.items,
            horizontalItems      = [],
            verticalItems        = [],
            config;

        if (headers.length < 1) {
            Neo.error('Panel without headers, please use a Container instead', me.id);
        }

        topHeaders.forEach(header => {
            verticalItems.push(Panel.createHeaderConfig(header));
        });

        if (hasVerticalHeaders && (hf && hasHorizontalHeaders || !hf && hasHorizontalHeaders)) {
            leftHeaders.forEach(header => {
                horizontalItems.push(Panel.createHeaderConfig(header));
            });

            config = {
                ntype       : 'container',
                flex        : 1,
                items       : items,
                itemDefaults: me.itemDefaults,
                ...me.containerConfig || {}
            };

            horizontalItems.push({...me.headerDefaults, ...config});

            rightHeaders.forEach(header => {
                horizontalItems.push(Panel.createHeaderConfig(header));
            });

            verticalItems.push({
                ntype : 'container',
                items : horizontalItems,
                layout: {
                    ntype: (hf ? 'hbox' : 'vbox'),
                    align: 'stretch'
                }
            });
        } else {
            config = {
                ntype       : 'container',
                flex        : 1,
                items       : items,
                itemDefaults: me.itemDefaults,
                ...me.containerConfig || {}
            };

            verticalItems.push({...me.headerDefaults, ...config});
        }

        bottomHeaders.forEach(header => {
            verticalItems.push(Panel.createHeaderConfig(header));
        });

        me.items = verticalItems;

        me.itemDefaults = null;

        super.createItems();
    }

    /**
     *
     * @param {Object} header the header config
     * @returns {Object}
     */
    static createHeaderConfig(header) {
        let config = {
            ntype: 'toolbar',
            flex : '0 1 auto'
        };

        if (header.text) {
            config.items = [
                {
                    ntype: 'label',
                    cls  : ['neo-panel-header-text', 'neo-label'],
                    text : header.text
                }
            ];

            delete header.text;
        }

        // assuming all labels inside a Panel Header are meant to be titles -> look the same way
        if (Neo.isArray(header.items)) {
            header.items.forEach(item => {
                if (item.ntype === 'label') {
                    item.cls = ['neo-panel-header-text', 'neo-label'];
                }
            });
        }

        return {...config, ...header};
    }
}

Neo.applyClassConfig(Panel);



/***/ }),

/***/ "./node_modules/neo.mjs/src/container/Viewport.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/neo.mjs/src/container/Viewport.mjs ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Viewport; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");


/**
 * @class Neo.container.Viewport
 * @extends Neo.container.Base
 */
class Viewport extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.container.Viewport'
         * @protected
         */
        className: 'Neo.container.Viewport',
        /**
         * @member {String} ntype='viewport'
         * @protected
         */
        ntype: 'viewport',
        /**
         * true applies 'neo-body-viewport' to the document.body
         * @member {Boolean} applyBodyCls=true
         */
        applyBodyCls: true,
        /**
         * @member {String[]} cls=['neo-viewport']
         */
        cls: ['neo-viewport']
    }}

    onConstructed() {
        super.onConstructed();

        if (this.applyBodyCls) {
            Neo.main.DomAccess.applyBodyCls({
                appName: this.appName,
                cls    : ['neo-body-viewport']
            });
        }
    }
}

Neo.applyClassConfig(Viewport);



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/Search.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/Search.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var _Text_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Text.mjs */ "./node_modules/neo.mjs/src/form/field/Text.mjs");


/**
 * @class Neo.form.field.Search
 * @extends Neo.form.field.Text
 */
class Search extends _Text_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.Search'
         * @protected
         */
        className: 'Neo.form.field.Search',
        /**
         * @member {String} ntype='searchfield'
         * @protected
         */
        ntype: 'searchfield',
        /**
         * @member {Array} cls=['neo-searchfield', 'neo-textfield']
         */
        cls: ['neo-searchfield', 'neo-textfield'],
        /**
         * Value for the hideLabel_ textfield config
         * @member {Boolean} hideLabel=true
         */
        hideLabel: true,
        /**
         * Value for the placeholderText_ textfield config
         * @member {String} placeholderText='Search'
         */
        placeholderText: 'Search',
    }}
}

Neo.applyClassConfig(Search);



/***/ }),

/***/ "./node_modules/neo.mjs/src/list/TreeList.mjs":
/*!****************************************************!*\
  !*** ./node_modules/neo.mjs/src/list/TreeList.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TreeList; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/list/Base.mjs");
/* harmony import */ var _collection_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../collection/Base.mjs */ "./node_modules/neo.mjs/src/collection/Base.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");




/**
 * @class Neo.list.TreeList
 * @extends Neo.list.Base
 */
class TreeList extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.list.TreeList'
         * @protected
         */
        className: 'Neo.list.TreeList',
        /**
         * @member {String} ntype='treelist'
         * @protected
         */
        ntype: 'treelist',
        /**
         * @member {String[]} cls=['neo-tree-list']
         */
        cls: ['neo-tree-list'],
        /**
         * todo: change the default to false once selection.TreeList is in place
         * @member {Boolean} disableSelection=true
         */
        disableSelection: true,
        /**
         * @member {Boolean} showCollapseExpandAllIcons=true
         */
        showCollapseExpandAllIcons: true,
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            cn: [{
                tag: 'ul',
                cls: ['neo-list-container', 'neo-list'],
                cn : []
            }]
        }
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me   = this,
            vdom = me.vdom;

        if (me.showCollapseExpandAllIcons) {
            vdom.cn.unshift({
                cls: ['neo-treelist-menu-item', 'neo-treelist-collapse-all-icon'],
                cn : [{
                    tag: 'span',
                    cls: ['neo-treelist-menu-item-content']
                }]
            }, {
                cls: ['neo-treelist-menu-item', 'neo-treelist-expand-all-icon'],
                cn : [{
                    tag: 'span',
                    cls: ['neo-treelist-menu-item-content']
                }]
            });

            me.vdom = vdom;
        }
    }

    /**
     * Triggered before the store config gets changed.
     * @param {Object|Neo.data.Store} value
     * @param {Object|Neo.data.Store} oldValue
     * @returns {Neo.data.Store}
     * @protected
     */
    beforeSetStore(value) {
        if (!value) {
            value = Neo.create(_collection_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], {
                keyProperty: 'id'
            });
        }

        return value;
    }


    /**
     * Collapses all folders
     * @param {Boolean} [silent]=false Set silent to true to prevent a vnode update
     */
    collapseAll(silent=false) {
        let me       = this,
            vdom     = me.vdom,
            hasMatch = false,
            node;

        me.store.items.forEach(item => {
            if (!item.isLeaf) {
                node = me.getVdomChild(me.getItemId(item.id), vdom);

                if (node.cls.includes('neo-folder-open')) {
                    _util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].remove(node.cls, 'neo-folder-open');
                    hasMatch = true;
                }
            }
        });

        if (hasMatch) {
            if (silent) {
                me._vdom = vdom
            } else {
                me.vdom = vdom;
            }
        }
    }

    /**
     *
     * @param {String} [parentId] The parent node
     * @param {Object} [vdomRoot] The vdom template root for the current sub tree
     * @param {Number} level The hierarchy level of the tree
     * @returns {Object} vdomRoot
     * @protected
     */
    createItems(parentId, vdomRoot, level) {
        let me    = this,
            items = me.store.find('parentId', parentId),
            cls, tmpRoot;

        if (items.length > 0) {
            if (!vdomRoot.cn) {
                vdomRoot.cn = [];
            }

            if (parentId !== null) {
                vdomRoot.cn.push({
                    tag: 'ul',
                    cls: ['neo-list'],
                    cn : [],
                    style: {
                        paddingLeft: '15px'
                    }
                });

                tmpRoot = vdomRoot.cn[vdomRoot.cn.length - 1];
            } else {
                tmpRoot = vdomRoot;
            }

            items.forEach(item => {
                cls = ['neo-list-item'];

                if (item.isLeaf) {
                    cls.push(item.singleton ? 'neo-list-item-leaf-singleton' : 'neo-list-item-leaf');
                } else {
                    cls.push('neo-list-folder');

                    if (!item.collapsed) {
                        cls.push('neo-folder-open');
                    }
                }

                tmpRoot.cn.push({
                    tag: 'li',
                    cls: cls,
                    id : me.getItemId(item.id),
                    cn : [{
                        tag      : 'span',
                        cls      : ['neo-list-item-content'],
                        innerHTML: item.name,
                        style: {
                            pointerEvents: 'none'
                        }
                    }],
                    style: {
                        padding : '10px',
                        position: item.isLeaf ? null : 'sticky',
                        top     : item.isLeaf ? null : (level * 38) + 'px',
                        zIndex  : item.isLeaf ? null : (20 / (level + 1)),
                    }
                });

                tmpRoot = me.createItems(item.id, tmpRoot, level + 1);
            });
        }

        return vdomRoot;
    }

    /**
     * Expands all folders
     * @param {Boolean} [silent]=false Set silent to true to prevent a vnode update
     */
    expandAll(silent=false) {
        let me       = this,
            vdom     = me.vdom,
            hasMatch = false,
            node;

        me.store.items.forEach(item => {
            if (!item.isLeaf) {
                node = me.getVdomChild(me.getItemId(item.id), vdom);

                if (!node.cls.includes('neo-folder-open')) {
                    _util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].add(node.cls, 'neo-folder-open');
                    hasMatch = true;
                }
            }
        });

        if (hasMatch) {
            if (silent) {
                me._vdom = vdom
            } else {
                me.vdom = vdom;
            }
        }
    }

    /**
     * Hides Tree nodes which do not match the filter
     * @param {String} property The store field to filter by
     * @param {String} value The filter value
     * @param {Number|null} parentId The root id for the current filter call
     * @param {Boolean} [parentMatch]=false In case a parent folder matches the filter, show its child items
     * @returns {Boolean} false if at least one child item is filtered
     */
    filter(property, value, parentId, parentMatch=false) {
        let me         = this,
            isFiltered = true,
            valueRegEx = new RegExp(value, 'gi'),
            vdom       = me.vdom,
            childReturnValue, directMatch, node;

        if (!value) {
            value = '';
        }

        me.store.items.forEach(item => {
            if (item.parentId === parentId) {
                directMatch = false;
                node        = me.getVdomChild(me.getItemId(item.id), vdom);

                node.cn[0].innerHTML = item[property].replace(valueRegEx, match => {
                    directMatch = true;
                    return `<span class="neo-highlight-search">${match}</span>`;
                });

                if (item.isLeaf) {
                    childReturnValue = true;
                } else {
                    childReturnValue = me.filter(property, value, item.id, directMatch || parentMatch);
                }

                if (directMatch || parentMatch || childReturnValue === false || value === '') {
                    isFiltered = false;

                    node.style.display = 'list-item';
                } else {
                    node.style.display = 'none';
                }
            }
        });

        if (parentId === null) {
            me.expandAll(true);
            me.vdom = vdom;
        }

        return isFiltered;
    }

    /**
     *
     * @returns {Object}
     */
    getListItemsRoot() {
        return this.vdom.cn[this.showCollapseExpandAllIcons ? 2 : 0];
    }

    /**
     *
     * @param {Object} data
     */
    onClick(data) {
        if (data.target.cls.includes('neo-treelist-menu-item')) {
            this.onMenuItemClick(data.target.cls);
        } else {
            super.onClick(data);
        }
    }

    /**
     *
     * @param {Object} data
     */
    onItemClick(data) {
        let me    = this,
            vdom  = me.vdom,
            items = me.store.items,
            i     = 0,
            len   = items.length,
            path  = data.path.map(e => e.id),
            item, record, tmpItem, vnodeId;

        for (; i < len; i++) {
            tmpItem = items[i];
            vnodeId = me.getItemId(tmpItem.id);

            if (path.includes(vnodeId)) {
                record = tmpItem;
                item   = me.getVdomChild(vnodeId);
                break;
            }
        }

        if (item) {
            if (item.cls && item.cls.includes('neo-list-folder')) {
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].toggle(item.cls, 'neo-folder-open');
                me.vdom = vdom;
            } else {
                me.onLeafItemClick(record);

                /**
                 * The leafItemClick event fires when a click occurs on a list item which does not have child items.
                 * Passes the item record to the event handler.
                 * @event leafItemClick
                 * @returns {Object} record
                 */
                me.fire('leafItemClick', record);
            }

            super.onItemClick(data);
        }
    }

    /**
     * Placeholder method
     * @param {Object} record
     */
    onLeafItemClick(record) {

    }

    /**
     * Gets triggered by clicks on the collapse or expand all icons
     * @param {Array} cls
     * @protected
     */
    onMenuItemClick(cls) {
        if (cls.includes('neo-treelist-collapse-all-icon')) {
            this.collapseAll();
        } else {
            this.expandAll();
        }
    }
}

Neo.applyClassConfig(TreeList);



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9kb2NzL2FwcC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvZG9jcy9hcHAvdmlldy9BcGlUcmVlTGlzdC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvZG9jcy9hcHAvdmlldy9Db250ZW50VGFiQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9kb2NzL2FwcC92aWV3L0V4YW1wbGVzVHJlZUxpc3QubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2RvY3MvYXBwL3ZpZXcvSGVhZGVyQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9kb2NzL2FwcC92aWV3L01haW5Db250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2RvY3MvYXBwL3ZpZXcvTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2RvY3MvYXBwL3ZpZXcvVHV0b3JpYWxzVHJlZUxpc3QubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2RvY3MvYXBwL3ZpZXcvY2xhc3NkZXRhaWxzL0hlYWRlckNvbXBvbmVudC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvZG9jcy9hcHAvdmlldy9jbGFzc2RldGFpbHMvSGllcmFyY2h5VHJlZUxpc3QubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2RvY3MvYXBwL3ZpZXcvY2xhc3NkZXRhaWxzL01haW5Db250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2RvY3MvYXBwL3ZpZXcvY2xhc3NkZXRhaWxzL01haW5Db250YWluZXJDb250cm9sbGVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9kb2NzL2FwcC92aWV3L2NsYXNzZGV0YWlscy9NZW1iZXJzTGlzdC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvZG9jcy9hcHAvdmlldy9jbGFzc2RldGFpbHMvU291cmNlVmlld0NvbXBvbmVudC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvZG9jcy9hcHAvdmlldy9jbGFzc2RldGFpbHMvVHV0b3JpYWxDb21wb25lbnQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250YWluZXIvUGFuZWwubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250YWluZXIvVmlld3BvcnQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL1NlYXJjaC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2xpc3QvVHJlZUxpc3QubWpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBeUQ7O0FBRXpEO0FBQ0E7QUFDQSxjQUFjLG1FQUFhO0FBQzNCO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNORDtBQUFBO0FBQUE7QUFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDhEQUFRO0FBQ2xDLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQzFDQTtB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QUFZO0FBQzNCLGVBQWUsUUFBUTtBQUN2QixpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlFQUFpRSxNQUFNO0FBQ3ZFLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsdURBQVE7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsT0FBTztBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoidmVuZG9yc35jaHVua3MvZG9jcy1hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuL2FwcC92aWV3L01haW5Db250YWluZXIubWpzJztcblxuY29uc3Qgb25TdGFydCA9ICgpID0+IE5lby5hcHAoe1xuICAgIGFwcFBhdGggOiAnZG9jcy8nLFxuICAgIG1haW5WaWV3OiBNYWluQ29udGFpbmVyLFxuICAgIG5hbWUgICAgOiAnRG9jcydcbn0pO1xuXG5leHBvcnQge29uU3RhcnQgYXMgb25TdGFydH07IiwiaW1wb3J0IFRyZWVMaXN0IGZyb20gJy4uLy4uLy4uL3NyYy9saXN0L1RyZWVMaXN0Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIERvY3MuYXBwLnZpZXcuQXBpVHJlZUxpc3RcbiAqIEBleHRlbmRzIE5lby5saXN0LlRyZWVMaXN0XG4gKi9cbmNsYXNzIEFwaVRyZWVMaXN0IGV4dGVuZHMgVHJlZUxpc3Qge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLmFwcC52aWV3LkFwaVRyZWVMaXN0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLmFwcC52aWV3LkFwaVRyZWVMaXN0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2FwaS10cmVlbGlzdCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdhcGktdHJlZWxpc3QnXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgTmVvLlhoci5wcm9taXNlSnNvbih7XG4gICAgICAgICAgICB1cmw6ICcuLi8uLi9kb2NzL291dHB1dC9zdHJ1Y3R1cmUuanNvbidcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGxldCB2ZG9tICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICAgICAgaXRlbVJvb3QgPSBtZS5nZXRMaXN0SXRlbXNSb290KCk7XG5cbiAgICAgICAgICAgIG1lLnN0b3JlLml0ZW1zID0gZGF0YS5qc29uO1xuICAgICAgICAgICAgaXRlbVJvb3QgPSBtZS5jcmVhdGVJdGVtcyhudWxsLCBpdGVtUm9vdCwgMCk7XG5cbiAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEFwaVRyZWVMaXN0KTtcblxuZXhwb3J0IHtBcGlUcmVlTGlzdCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29udGFpbmVyICAgIGZyb20gJy4uLy4uLy4uL3NyYy90YWIvQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgSGVhZGVyQnV0dG9uIGZyb20gJy4uLy4uLy4uL3NyYy90YWIvaGVhZGVyL0J1dHRvbi5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLmFwcC52aWV3LkNvbnRlbnRUYWJDb250YWluZXJcbiAqIEBleHRlbmRzIE5lby50YWIuQ29udGFpbmVyXG4gKi9cbmNsYXNzIENvbnRlbnRUYWJDb250YWluZXIgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLmFwcC52aWV3LkNvbnRlbnRUYWJDb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0RvY3MuYXBwLnZpZXcuQ29udGVudFRhYkNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdkb2NzLWNvbnRlbnQtdGFiY29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2RvY3MtY29udGVudC10YWJjb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYWN0aXZhdGVJbnNlcnRlZFRhYnM9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZhdGVJbnNlcnRlZFRhYnM6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGNvbnRlbnRDb250YWluZXJEZWZhdWx0cz17Y2xzOlsvLy4uLl19XG4gICAgICAgICAqL1xuICAgICAgICBjb250ZW50Q29udGFpbmVyRGVmYXVsdHM6IHtcbiAgICAgICAgICAgIGNsczogW1xuICAgICAgICAgICAgICAgICduZW8tZG9jcy10YWItY29udGVudC1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICduZW8tdGFiLWNvbnRlbnQtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAnbmVvLWNvbnRhaW5lcidcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gaGVhZGVyVG9vbGJhckRlZmF1bHRzPXtjbHM6Wy8vLi4uXX1cbiAgICAgICAgICovXG4gICAgICAgIGhlYWRlclRvb2xiYXJEZWZhdWx0czoge1xuICAgICAgICAgICAgY2xzOiBbXG4gICAgICAgICAgICAgICAgJ2RvY3MtdGFiLWhlYWRlci10b29sYmFyJyxcbiAgICAgICAgICAgICAgICAnbmVvLXRhYi1oZWFkZXItdG9vbGJhcicsXG4gICAgICAgICAgICAgICAgJ25lby10b29sYmFyJ1xuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGl0ZW1zPVsvLy4uLl1dXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgIG50eXBlOiAnY29tcG9uZW50JyxcbiAgICAgICAgICAgIGh0bWwgOiAnV2VsY29tZSB0byB0aGUgbmVvLm1qcyBkb2NzIScsXG4gICAgICAgICAgICBzdHlsZToge3BhZGRpbmc6ICcyMHB4J30sXG5cbiAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS11c2VycycsXG4gICAgICAgICAgICAgICAgdGV4dCAgIDogJ1dlbGNvbWUhJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIGNscyA9IG1lLmNscztcblxuICAgICAgICBjbHMudW5zaGlmdCgnZG9jcy1jb250ZW50LXRhYmNvbnRhaW5lcicpO1xuICAgICAgICBtZS5jbHMgPSBjbHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGluZyB0aGUgYnV0dG9uIGNsaWNrIGxpc3RlbmVyIHRvIGFsbG93IGNsb3NpbmcgdGFicyBvbiBpY29uIGNsaWNrXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBtZXJnZWQgY29uZmlnXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIGdldFRhYkJ1dHRvbkNvbmZpZyhjb25maWcsIGluZGV4KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBkZWZhdWx0Q29uZmlnID0ge1xuICAgICAgICAgICAgICAgIG1vZHVsZSA6IEhlYWRlckJ1dHRvbixcbiAgICAgICAgICAgICAgICBmbGV4ICAgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgaW5kZXggIDogaW5kZXgsXG4gICAgICAgICAgICAgICAgcHJlc3NlZDogbWUuYWN0aXZlSW5kZXggPT09IGluZGV4LFxuXG4gICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGF0aCA9IGRhdGEucGF0aC5tYXAoZSA9PiBlLmlkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXRoWzBdLmluZGV4T2YoJ25lby10YWItaGVhZGVyLWJ1dHRvbi0nKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZS5hY3RpdmVJbmRleCA9IE5lby5nZXRDb21wb25lbnQoZGF0YS50YXJnZXQuaWQpLmluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLnJlbW92ZUF0KE5lby5nZXRDb21wb25lbnQobWUudGFiQmFySWQpLmluZGV4T2YocGF0aFsxXSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlOiBtZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gey4uLmRlZmF1bHRDb25maWcsIC4uLmNvbmZpZ307XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDb250ZW50VGFiQ29udGFpbmVyKTtcblxuZXhwb3J0IHtDb250ZW50VGFiQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBUcmVlTGlzdCBmcm9tICcuLi8uLi8uLi9zcmMvbGlzdC9UcmVlTGlzdC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLmFwcC52aWV3LkV4YW1wbGVzVHJlZUxpc3RcbiAqIEBleHRlbmRzIE5lby5saXN0LlRyZWVMaXN0XG4gKi9cbmNsYXNzIEV4YW1wbGVzVHJlZUxpc3QgZXh0ZW5kcyBUcmVlTGlzdCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3MuYXBwLnZpZXcuRXhhbXBsZXNUcmVlTGlzdCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy5hcHAudmlldy5FeGFtcGxlc1RyZWVMaXN0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2V4YW1wbGVzLXRyZWVsaXN0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2V4YW1wbGVzLXRyZWVsaXN0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9Wydkb2NzLWV4YW1wbGVzLXRyZWVsaXN0JywgJ25lby10cmVlLWxpc3QnLCAnbmVvLWxpc3QtY29udGFpbmVyJywgJ25lby1saXN0J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogW1xuICAgICAgICAgICAgJ2RvY3MtZXhhbXBsZXMtdHJlZWxpc3QnLFxuICAgICAgICAgICAgJ25lby10cmVlLWxpc3QnLFxuICAgICAgICAgICAgJ25lby1saXN0LWNvbnRhaW5lcicsXG4gICAgICAgICAgICAnbmVvLWxpc3QnXG4gICAgICAgIF1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBOZW8uWGhyLnByb21pc2VKc29uKHtcbiAgICAgICAgICAgIHVybDogJy4uLy4uL2RvY3MvZXhhbXBsZXMuanNvbidcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGxldCB2ZG9tICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICAgICAgaXRlbVJvb3QgPSBtZS5nZXRMaXN0SXRlbXNSb290KCk7XG5cbiAgICAgICAgICAgIG1lLnN0b3JlLml0ZW1zID0gZGF0YS5qc29uO1xuICAgICAgICAgICAgaXRlbVJvb3QgPSBtZS5jcmVhdGVJdGVtcyhudWxsLCBpdGVtUm9vdCwgMCk7XG5cbiAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEV4YW1wbGVzVHJlZUxpc3QpO1xuXG5leHBvcnQge0V4YW1wbGVzVHJlZUxpc3QgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbnRhaW5lciAgIGZyb20gJy4uLy4uLy4uL3NyYy9jb250YWluZXIvQmFzZS5tanMnO1xuaW1wb3J0IEJ1dHRvbiAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9idXR0b24vQmFzZS5tanMnO1xuaW1wb3J0IFNlYXJjaEZpZWxkIGZyb20gJy4uLy4uLy4uL3NyYy9mb3JtL2ZpZWxkL1NlYXJjaC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLmFwcC52aWV3LkhlYWRlckNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5CYXNlXG4gKi9cbmNsYXNzIEhlYWRlckNvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3MuYXBwLnZpZXcuSGVhZGVyQ29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLmFwcC52aWV3LkhlYWRlckNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdoZWFkZXItY29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ25lby1kb2NzLWhlYWRlci1jb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1kb2NzLWhlYWRlci1jb250YWluZXInXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1kb2NzLWhlYWRlci1jb250YWluZXInXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gaGVpZ2h0PTU1XG4gICAgICAgICAqL1xuICAgICAgICBoZWlnaHQ6IDU1LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsYXlvdXQ9e250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBpdGVtcz1bLy8uLi5dXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgIG1vZHVsZSAgICAgICAgIDogU2VhcmNoRmllbGQsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgICAgICA6IHtjaGFuZ2U6ICdvbk5hdmlnYXRpb25TZWFyY2hGaWVsZENoYW5nZSd9LFxuICAgICAgICAgICAgcGxhY2Vob2xkZXJUZXh0OiAnRmlsdGVyIE5hdmlnYXRpb24nLFxuICAgICAgICAgICAgc3R5bGUgICAgICAgICAgOiB7cGFkZGluZzogJzEwcHgnfSxcbiAgICAgICAgICAgIHdpZHRoICAgICAgICAgIDogMjQwXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgIDogQnV0dG9uLFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiB7Y2xpY2s6ICdvblN3aXRjaFRoZW1lQnV0dG9uQ2xpY2snfSxcbiAgICAgICAgICAgIGZsZXggICAgICAgIDogJ25vbmUnLFxuICAgICAgICAgICAgaGVpZ2h0ICAgICAgOiAyNyxcbiAgICAgICAgICAgIHJlZmVyZW5jZSAgIDogJ3RoZW1lLWJ1dHRvbicsXG4gICAgICAgICAgICBzdHlsZSAgICAgICA6IHttYXJnaW5Ub3A6ICc1cHgnfSxcbiAgICAgICAgICAgIHRleHQgICAgICAgIDogJ1RoZW1lIERhcmsnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgIDogQnV0dG9uLFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiB7Y2xpY2s6ICdvblN3aXRjaFNvdXJjZVZpZXdUaGVtZUJ1dHRvbkNsaWNrJ30sXG4gICAgICAgICAgICBmbGV4ICAgICAgICA6ICdub25lJyxcbiAgICAgICAgICAgIGhlaWdodCAgICAgIDogMjcsXG4gICAgICAgICAgICByZWZlcmVuY2UgICA6ICdzb3VyY2Utdmlldy10aGVtZS1idXR0b24nLFxuICAgICAgICAgICAgc3R5bGUgICAgICAgOiB7bWFyZ2luTGVmdDogJzEwcHgnLCBtYXJnaW5Ub3A6ICc1cHgnfSxcbiAgICAgICAgICAgIHRleHQgICAgICAgIDogJ1NvdXJjZSBWaWV3IFRoZW1lIERhcmsnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG50eXBlOiAnY29tcG9uZW50JyxcbiAgICAgICAgICAgIGZsZXggOiAxXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG50eXBlOiAnY29tcG9uZW50JyxcbiAgICAgICAgICAgIGNscyAgOiBbJ25lby1sb2dvLXRleHQnXSxcbiAgICAgICAgICAgIGh0bWwgOiAnbmVvLm1qcyBkb2NzJyxcbiAgICAgICAgICAgIHdpZHRoOiAyMTBcbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIZWFkZXJDb250YWluZXIpO1xuXG5leHBvcnQge0hlYWRlckNvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQXBpVHJlZUxpc3QgICAgICAgICAgICAgZnJvbSAnLi9BcGlUcmVlTGlzdC5tanMnO1xuaW1wb3J0IENsYXNzRGV0YWlsc0NvbnRhaW5lciAgIGZyb20gJy4vY2xhc3NkZXRhaWxzL01haW5Db250YWluZXIubWpzJztcbmltcG9ydCBDb2xsZWN0aW9uICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvY29sbGVjdGlvbi9CYXNlLm1qcyc7XG5pbXBvcnQgQ29udGVudFRhYkNvbnRhaW5lciAgICAgZnJvbSAnLi9Db250ZW50VGFiQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgRXhhbXBsZXNUcmVlTGlzdCAgICAgICAgZnJvbSAnLi9FeGFtcGxlc1RyZWVMaXN0Lm1qcyc7XG5pbXBvcnQgSGVhZGVyQ29udGFpbmVyICAgICAgICAgZnJvbSAnLi9IZWFkZXJDb250YWluZXIubWpzJztcbmltcG9ydCBNYWluQ29udGFpbmVyQ29udHJvbGxlciBmcm9tICcuL01haW5Db250YWluZXJDb250cm9sbGVyLm1qcyc7XG5pbXBvcnQgU291cmNlVmlld0NvbXBvbmVudCAgICAgZnJvbSAnLi9jbGFzc2RldGFpbHMvU291cmNlVmlld0NvbXBvbmVudC5tanMnO1xuaW1wb3J0IFR1dG9yaWFsQ29tcG9uZW50ICAgICAgIGZyb20gJy4vY2xhc3NkZXRhaWxzL1R1dG9yaWFsQ29tcG9uZW50Lm1qcyc7XG5pbXBvcnQgVHV0b3JpYWxzVHJlZUxpc3QgICAgICAgZnJvbSAnLi9UdXRvcmlhbHNUcmVlTGlzdC5tanMnO1xuaW1wb3J0IFZpZXdwb3J0ICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9jb250YWluZXIvVmlld3BvcnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy5hcHAudmlldy5NYWluQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLlZpZXdwb3J0XG4gKi9cbmNsYXNzIE1haW5Db250YWluZXIgZXh0ZW5kcyBWaWV3cG9ydCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3MuYXBwLnZpZXcuTWFpbkNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy5hcHAudmlldy5NYWluQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J21haW4tY29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ21haW4tY29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGF1dG9Nb3VudD10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBhdXRvTW91bnQgOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1kb2NzLW1haW5jb250YWluZXInLCAnbmVvLXZpZXdwb3J0J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tZG9jcy1tYWluY29udGFpbmVyJywgJ25lby12aWV3cG9ydCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50fSBjb250cm9sbGVyPU1haW5Db250YWluZXJDb250cm9sbGVyXG4gICAgICAgICAqL1xuICAgICAgICBjb250cm9sbGVyOiBNYWluQ29udGFpbmVyQ29udHJvbGxlcixcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbGF5b3V0PXtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfVxuICAgICAgICAgKi9cbiAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29sbGVjdGlvbi5CYXNlfG51bGx9IHN0b3JlXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzdG9yZV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gaXRlbXM9Wy8vLi4uXVxuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFtIZWFkZXJDb250YWluZXIsIHtcbiAgICAgICAgICAgIG50eXBlIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICBmbGV4ICA6IDEsXG4gICAgICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcblxuICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgbnR5cGUgICA6ICd0YWItY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICBjbHMgICAgIDogWyduZW8tZG9jcy1uYXZpZ2F0aW9uLXRhYi1jb250YWluZXInLCAnbmVvLXRhYi1jb250YWluZXInXSxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogMjkwLFxuICAgICAgICAgICAgICAgIHdpZHRoICAgOiAyOTAsXG5cbiAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlICAgOiBBcGlUcmVlTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7bGVhZkl0ZW1DbGljazogJ29uQXBpTGlzdExlYWZDbGljayd9LFxuICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICdhcGktdHJlZWxpc3QnLFxuXG4gICAgICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWNvZGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ0FQSSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlICAgOiBUdXRvcmlhbHNUcmVlTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7bGVhZkl0ZW1DbGljazogJ29uVHV0b3JpYWxMaXN0TGVhZkNsaWNrJ30sXG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZTogJ3R1dG9yaWFscy10cmVlbGlzdCcsXG5cbiAgICAgICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtaGFuZHMtaGVscGluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnVHV0b3JpYWxzJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGUgICA6IEV4YW1wbGVzVHJlZUxpc3QsXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge2xlYWZJdGVtQ2xpY2s6ICdvbkV4YW1wbGVzTGlzdExlYWZDbGljayd9LFxuICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICdleGFtcGxlcy10cmVlbGlzdCcsXG5cbiAgICAgICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtZGVza3RvcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnRXhhbXBsZXMnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG1vZHVsZSAgIDogQ29udGVudFRhYkNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICBmbGV4ICAgICA6IDEsXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAnY29udGVudC10YWJjb250YWluZXInXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICghbWUuc3RvcmUpIHtcbiAgICAgICAgICAgIG1lLnN0b3JlID0gTmVvLmNyZWF0ZShDb2xsZWN0aW9uLCB7XG4gICAgICAgICAgICAgICAga2V5UHJvcGVydHk6ICdpZCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGlzYWJsZSB0aGUgZXhhbXBsZXMgVGFiIGZvciBkaXN0IHZlcnNpb25zIHVudGlsIHRoZSB3ZWJwYWNrIGJ1aWxkcyBjYW4gaGFuZGxlIHRoaXMgKHNlZTogIzE0MClcbiAgICAgICAgbWUuaXRlbXNbMV0uaXRlbXNbMF0uaXRlbXNbMl0udGFiQnV0dG9uQ29uZmlnLmRpc2FibGVkID0gIU5lby5jb25maWcuaXNFeHBlcmltZW50YWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBOZW8uWGhyLnByb21pc2VKc29uKHtcbiAgICAgICAgICAgIHVybDogJy4uLy4uL2RvY3Mvb3V0cHV0L2FsbC5qc29uJ1xuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgbWUuc3RvcmUuaXRlbXMgPSBkYXRhLmpzb247XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWFpbkNvbnRhaW5lcik7XG5cbmV4cG9ydCB7TWFpbkNvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL3NyYy9jb250cm9sbGVyL0NvbXBvbmVudC5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICBmcm9tICcuLi8uLi8uLi9zcmMvdXRpbC9BcnJheS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLmFwcC52aWV3Lk1haW5Db250YWluZXJDb250cm9sbGVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udHJvbGxlci5Db21wb25lbnRcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLmFwcC52aWV3Lk1haW5Db250YWluZXJDb250cm9sbGVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLmFwcC52aWV3Lk1haW5Db250YWluZXJDb250cm9sbGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2RvY3MtbWFpbmNvbnRhaW5lci1jb250cm9sbGVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2RvY3MtbWFpbmNvbnRhaW5lci1jb250cm9sbGVyJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICAgKi9cbiAgICBvbkFwaUxpc3RMZWFmQ2xpY2socmVjb3JkKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbnRlbnRUYWJDb250YWluZXIgPSBtZS5nZXRSZWZlcmVuY2UoJ2NvbnRlbnQtdGFiY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29udGVudFRhYkNvbnRhaW5lci5hZGQoe1xuICAgICAgICAgICAgbnR5cGUgICAgICAgIDogJ2NsYXNzZGV0YWlscy1tYWluY29udGFpbmVyJyxcbiAgICAgICAgICAgIGlkICAgICAgICAgICA6IHJlY29yZC5jbGFzc05hbWUsXG4gICAgICAgICAgICBzdHJ1Y3R1cmVEYXRhOiByZWNvcmQsXG5cbiAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGljb25DbHM6IHJlY29yZC5zaW5nbGV0b24gPyAnZmEgZmEtYXJyb3ctYWx0LWNpcmNsZS1yaWdodCcgOiAnZmEgZmEtY29weXJpZ2h0JyxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgOiByZWNvcmQubmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICAgKi9cbiAgICBvbkV4YW1wbGVzTGlzdExlYWZDbGljayhyZWNvcmQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29udGVudFRhYkNvbnRhaW5lciA9IG1lLmdldFJlZmVyZW5jZSgnY29udGVudC10YWJjb250YWluZXInKSxcbiAgICAgICAgICAgIG5hbWUgICAgICAgICAgICAgICAgPSByZWNvcmQubmFtZSxcbiAgICAgICAgICAgIHBhdGhBcnJheSAgICAgICAgICAgPSBbXSxcbiAgICAgICAgICAgIHN0b3JlICAgICAgICAgICAgICAgPSBtZS5nZXRSZWZlcmVuY2UoJ2V4YW1wbGVzLXRyZWVsaXN0Jykuc3RvcmUsXG4gICAgICAgICAgICB0bXBSZWNvcmQgICAgICAgICAgID0gcmVjb3JkLFxuICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnO1xuXG4gICAgICAgIHdoaWxlICh0bXBSZWNvcmQucGFyZW50SWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRtcFJlY29yZCA9IHN0b3JlLmdldCh0bXBSZWNvcmQucGFyZW50SWQpO1xuICAgICAgICAgICAgbmFtZSAgICAgID0gdG1wUmVjb3JkLm5hbWUgKyAnLicgKyBuYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgbmFtZSA9ICdleGFtcGxlc18nICsgbmFtZTtcblxuICAgICAgICB0YWJCdXR0b25Db25maWcgPSB7XG4gICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtZGVza3RvcCcsXG4gICAgICAgICAgICB0ZXh0ICAgOiByZWNvcmQubmFtZVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShyZWNvcmQucGF0aCkpIHtcbiAgICAgICAgICAgIGltcG9ydChcbiAgICAgICAgICAgICAgICAvKiB3ZWJwYWNrSWdub3JlOiB0cnVlICovXG4gICAgICAgICAgICAgICAgcmVjb3JkLnBhdGgpLnRoZW4oKG1vZHVsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50VGFiQ29udGFpbmVyLmFkZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBudHlwZSAgICAgICAgICA6IG1vZHVsZS5kZWZhdWx0LnByb3RvdHlwZS5udHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkICAgICAgICAgICAgIDogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzogdGFiQnV0dG9uQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWNvcmQucGF0aC5mb3JFYWNoKHBhdGggPT4ge1xuICAgICAgICAgICAgICAgIHBhdGhBcnJheS5wdXNoKGltcG9ydCgvKiB3ZWJwYWNrSWdub3JlOiB0cnVlICovIHBhdGgpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBQcm9taXNlLmFsbChwYXRoQXJyYXkpLnRoZW4oZnVuY3Rpb24obW9kdWxlcykge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgbW9kdWxlcy5mb3JFYWNoKG1vZHVsZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgbnR5cGU6IG1vZHVsZS5kZWZhdWx0LnByb3RvdHlwZS5udHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNvbnRlbnRUYWJDb250YWluZXIuYWRkKHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgICAgICAgICAgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgaWQgICAgICAgICAgICAgOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBpdGVtcyAgICAgICAgICA6IGl0ZW1zLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZSAgICAgICAgICA6IHtwYWRkaW5nOiAnMTBweCd9LFxuICAgICAgICAgICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHRhYkJ1dHRvbkNvbmZpZ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9sZFZhbHVlXG4gICAgICovXG4gICAgb25IYXNoQ2hhbmdlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBoYXNoICAgICAgICAgICAgICAgID0gdmFsdWUgJiYgdmFsdWUuaGFzaCxcbiAgICAgICAgICAgIGNvbnRlbnRUYWJDb250YWluZXIgPSBtZS5nZXRSZWZlcmVuY2UoJ2NvbnRlbnQtdGFiY29udGFpbmVyJyksXG4gICAgICAgICAgICBzdHJ1Y3R1cmVTdG9yZSAgICAgID0gbWUuZ2V0UmVmZXJlbmNlKCdhcGktdHJlZWxpc3QnKS5zdG9yZSxcbiAgICAgICAgICAgIHJlY29yZCwgdGFiO1xuXG4gICAgICAgIGlmIChoYXNoICYmIGhhc2guaGFzT3duUHJvcGVydHkoJ3ZpZXdTb3VyY2UnKSkge1xuICAgICAgICAgICAgcmVjb3JkID0gc3RydWN0dXJlU3RvcmUuZmluZCgnY2xhc3NOYW1lJywgaGFzaC52aWV3U291cmNlKVswXTtcblxuICAgICAgICAgICAgaWYgKHJlY29yZCkge1xuICAgICAgICAgICAgICAgIHRhYiA9IGNvbnRlbnRUYWJDb250YWluZXIuYWRkKHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgICAgICAgIDogJ2NsYXNzZGV0YWlscy1zb3VyY2V2aWV3Y29tcG9uZW50JyxcbiAgICAgICAgICAgICAgICAgICAgaWQgICAgICAgICAgIDogaGFzaC52aWV3U291cmNlICsgJ19fc291cmNlJyxcbiAgICAgICAgICAgICAgICAgICAgbGluZSAgICAgICAgIDogaGFzaC5saW5lLFxuICAgICAgICAgICAgICAgICAgICBzdHJ1Y3R1cmVEYXRhOiByZWNvcmQsXG5cbiAgICAgICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtY29kZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiByZWNvcmQubmFtZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBhZGp1c3QgdGhlIGhpZ2hsaWdodGVkIGxpbmUgZm9yIGFscmVhZHkgYWRkZWQgc291cmNlIHZpZXcgdGFic1xuICAgICAgICAgICAgICAgIHRhYi5saW5lID0gaGFzaC5saW5lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uTmF2aWdhdGlvblNlYXJjaEZpZWxkQ2hhbmdlKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZhbHVlID0gZGF0YS52YWx1ZTtcblxuICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ2V4YW1wbGVzLXRyZWVsaXN0JykgLmZpbHRlcignbmFtZScsIHZhbHVlLCBudWxsKTtcbiAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCdhcGktdHJlZWxpc3QnKSAgICAgIC5maWx0ZXIoJ25hbWUnLCB2YWx1ZSwgbnVsbCk7XG4gICAgICAgIG1lLmdldFJlZmVyZW5jZSgndHV0b3JpYWxzLXRyZWVsaXN0JykuZmlsdGVyKCduYW1lJywgdmFsdWUsIG51bGwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Td2l0Y2hTb3VyY2VWaWV3VGhlbWVCdXR0b25DbGljaygpIHtcbiAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXG4gICAgICAgICAgICBidXR0b24gPSBtZS5nZXRSZWZlcmVuY2UoJ3NvdXJjZS12aWV3LXRoZW1lLWJ1dHRvbicpLFxuICAgICAgICAgICAgYnV0dG9uVGV4dCwgaHJlZjtcblxuICAgICAgICBpZiAoYnV0dG9uLnRleHQgPT09ICdTb3VyY2UgVmlldyBUaGVtZSBMaWdodCcpIHtcbiAgICAgICAgICAgIGJ1dHRvblRleHQgPSAnU291cmNlIFZpZXcgVGhlbWUgRGFyayc7XG4gICAgICAgICAgICBocmVmICAgICAgID0gJy4vcmVzb3VyY2VzL2hpZ2hsaWdodGpzLWN1c3RvbS1naXRodWItdGhlbWUuY3NzJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvblRleHQgPSAnU291cmNlIFZpZXcgVGhlbWUgTGlnaHQnO1xuICAgICAgICAgICAgaHJlZiAgICAgICA9ICcuL3Jlc291cmNlcy9oaWdobGlnaHRqcy1jdXN0b20tZGFyay10aGVtZS5jc3MnO1xuICAgICAgICB9XG5cbiAgICAgICAgTmVvLm1haW4uYWRkb24uU3R5bGVzaGVldC5zd2FwU3R5bGVTaGVldCh7XG4gICAgICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICAgICAgaWQgIDogJ2hsanMtdGhlbWUnXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBidXR0b24udGV4dCA9IGJ1dHRvblRleHQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Td2l0Y2hUaGVtZUJ1dHRvbkNsaWNrKCkge1xuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGJ1dHRvbiA9IG1lLmdldFJlZmVyZW5jZSgndGhlbWUtYnV0dG9uJyksXG4gICAgICAgICAgICB2aWV3ICAgPSBtZS52aWV3LFxuICAgICAgICAgICAgYnV0dG9uVGV4dCwgY2xzLCBocmVmLCB0aGVtZTtcblxuICAgICAgICBpZiAoYnV0dG9uLnRleHQgPT09ICdUaGVtZSBMaWdodCcpIHtcbiAgICAgICAgICAgIGJ1dHRvblRleHQgPSAnVGhlbWUgRGFyayc7XG4gICAgICAgICAgICBocmVmICAgICAgID0gJy4uL2Rpc3QvZGV2ZWxvcG1lbnQvbmVvLXRoZW1lLWxpZ2h0LW5vLWNzczQuY3NzJztcbiAgICAgICAgICAgIHRoZW1lICAgICAgPSAnbmVvLXRoZW1lLWxpZ2h0JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvblRleHQgPSAnVGhlbWUgTGlnaHQnO1xuICAgICAgICAgICAgaHJlZiAgICAgICA9ICcuLi9kaXN0L2RldmVsb3BtZW50L25lby10aGVtZS1kYXJrLW5vLWNzczQuY3NzJztcbiAgICAgICAgICAgIHRoZW1lICAgICAgPSAnbmVvLXRoZW1lLWRhcmsnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE5lby5jb25maWcudXNlQ3NzNCkge1xuICAgICAgICAgICAgY2xzID0gWy4uLnZpZXcuY2xzXTtcblxuICAgICAgICAgICAgdmlldy5jbHMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pbmNsdWRlcygnbmVvLXRoZW1lJykpIHtcbiAgICAgICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIE5lb0FycmF5LmFkZChjbHMsIHRoZW1lKTtcbiAgICAgICAgICAgIHZpZXcuY2xzID0gY2xzO1xuXG4gICAgICAgICAgICBidXR0b24udGV4dCA9IGJ1dHRvblRleHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBOZW8ubWFpbi5hZGRvbi5TdHlsZXNoZWV0LnN3YXBTdHlsZVNoZWV0KHtcbiAgICAgICAgICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICAgICAgICAgIGlkICA6ICduZW8tdGhlbWUnXG4gICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi50ZXh0ID0gYnV0dG9uVGV4dDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjb3JkXG4gICAgICovXG4gICAgb25UdXRvcmlhbExpc3RMZWFmQ2xpY2socmVjb3JkKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbnRlbnRUYWJDb250YWluZXIgPSBtZS5nZXRSZWZlcmVuY2UoJ2NvbnRlbnQtdGFiY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29udGVudFRhYkNvbnRhaW5lci5hZGQoe1xuICAgICAgICAgICAgbnR5cGUgICA6ICdjbGFzc2RldGFpbHMtdHV0b3JpYWxjb21wb25lbnQnLFxuICAgICAgICAgICAgZmlsZU5hbWU6IHJlY29yZC5maWxlTmFtZSxcbiAgICAgICAgICAgIGZpbGVUeXBlOiByZWNvcmQudHlwZSxcbiAgICAgICAgICAgIGlkICAgICAgOiByZWNvcmQubmFtZSxcblxuICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWhhbmRzLWhlbHBpbmcnLFxuICAgICAgICAgICAgICAgIHRleHQgICA6IHJlY29yZC5uYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIpO1xuXG5leHBvcnQge01haW5Db250YWluZXJDb250cm9sbGVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBUcmVlTGlzdCBmcm9tICcuLi8uLi8uLi9zcmMvbGlzdC9UcmVlTGlzdC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLmFwcC52aWV3LlR1dG9yaWFsc1RyZWVMaXN0XG4gKiBAZXh0ZW5kcyBOZW8ubGlzdC5UcmVlTGlzdFxuICovXG5jbGFzcyBUdXRvcmlhbHNUcmVlTGlzdCBleHRlbmRzIFRyZWVMaXN0IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy5hcHAudmlldy5UdXRvcmlhbHNUcmVlTGlzdCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy5hcHAudmlldy5UdXRvcmlhbHNUcmVlTGlzdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd0dXRvcmlhbHMtdHJlZWxpc3QnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAndHV0b3JpYWxzLXRyZWVsaXN0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9Wydkb2NzLXR1dG9yaWFscy10cmVlbGlzdCcsICduZW8tdHJlZS1saXN0JywgJ25lby1saXN0LWNvbnRhaW5lcicsICduZW8tbGlzdCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFtcbiAgICAgICAgICAgICdkb2NzLXR1dG9yaWFscy10cmVlbGlzdCcsXG4gICAgICAgICAgICAnbmVvLXRyZWUtbGlzdCcsXG4gICAgICAgICAgICAnbmVvLWxpc3QtY29udGFpbmVyJyxcbiAgICAgICAgICAgICduZW8tbGlzdCdcbiAgICAgICAgXVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE5lby5YaHIucHJvbWlzZUpzb24oe1xuICAgICAgICAgICAgdXJsOiAnLi4vLi4vZG9jcy90dXRvcmlhbHMvdHV0b3JpYWxzLmpzb24nXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBsZXQgdmRvbSAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgICAgIGl0ZW1Sb290ID0gbWUuZ2V0TGlzdEl0ZW1zUm9vdCgpO1xuXG4gICAgICAgICAgICBtZS5zdG9yZS5pdGVtcyA9IGRhdGEuanNvbjtcbiAgICAgICAgICAgIGl0ZW1Sb290ID0gbWUuY3JlYXRlSXRlbXMobnVsbCwgaXRlbVJvb3QsIDApO1xuXG4gICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhUdXRvcmlhbHNUcmVlTGlzdCk7XG5cbmV4cG9ydCB7VHV0b3JpYWxzVHJlZUxpc3QgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbXBvbmVudCAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5pbXBvcnQgU291cmNlVmlld0NvbXBvbmVudCBmcm9tICcuL1NvdXJjZVZpZXdDb21wb25lbnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy5hcHAudmlldy5jbGFzc2RldGFpbHMuSGVhZGVyQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgSGVhZGVyQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy5hcHAudmlldy5jbGFzc2RldGFpbHMuSGVhZGVyQ29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLmFwcC52aWV3LmNsYXNzZGV0YWlscy5IZWFkZXJDb21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY2xhc3NkZXRhaWxzLWhlYWRlcmNvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjbGFzc2RldGFpbHMtaGVhZGVyY29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tZG9jcy1jbGFzc2RldGFpbHMtaGVhZGVyY29tcG9uZW50J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tZG9jcy1jbGFzc2RldGFpbHMtaGVhZGVyY29tcG9uZW50J10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gcmVjb3JkXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICByZWNvcmRfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBkb21MaXN0ZW5lcnNcbiAgICAgICAgICovXG4gICAgICAgIGRvbUxpc3RlbmVyczoge1xuICAgICAgICAgICAgY2xpY2s6IHtcbiAgICAgICAgICAgICAgICBmbiAgICAgIDogJ29uSGVhZGVyQ2xpY2snLCAvLyBEb2NzLmFwcC52aWV3Lk1haW5Db250YWluZXJDb250cm9sbGVyXG4gICAgICAgICAgICAgICAgZGVsZWdhdGU6ICcubmVvLWRvY3MtaGVhZGVyLXRleHQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbToge1xuICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby1kb2NzLWhlYWRlci10ZXh0J11cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IG1lLnJlY29yZC5jbGFzc05hbWUsXG4gICAgICAgICAgICBzdG9yZSAgICAgPSBtZS51cCgnbWFpbi1jb250YWluZXInKS5zdG9yZSxcbiAgICAgICAgICAgIHJlY29yZCAgICA9IHN0b3JlLmZpbmQoeyRraW5kOiBjbGFzc05hbWUgPT09ICdOZW8nID8gJ21vZHVsZScgOiAnY2xhc3MnLCBuZW9DbGFzc05hbWU6IGNsYXNzTmFtZX0pWzBdLFxuICAgICAgICAgICAgaSAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICA9IHJlY29yZCAmJiByZWNvcmQudGFncyAmJiByZWNvcmQudGFncy5sZW5ndGggfHwgMCxcbiAgICAgICAgICAgIHNpbmdsZXRvbiA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChyZWNvcmQudGFnc1tpXS50aXRsZSA9PT0gJ3NpbmdsZXRvbicpIHtcbiAgICAgICAgICAgICAgICBzaW5nbGV0b24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmRvbS5jblswXS5pbm5lckhUTUwgPSBzaW5nbGV0b24gPyAoY2xhc3NOYW1lICsgJyDihpIgU2luZ2xldG9uJykgOiBjbGFzc05hbWU7XG5cbiAgICAgICAgaWYgKHJlY29yZC5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgdmRvbS5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICBjbHMgICAgICA6IFsnbmVvLWRvY3MtaGVhZGVyLWRlc2NyaXB0aW9uJ10sXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MOiByZWNvcmQuZGVzY3JpcHRpb25cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIZWFkZXJDb21wb25lbnQpO1xuXG5leHBvcnQge0hlYWRlckNvbXBvbmVudCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgVHJlZUxpc3QgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL2xpc3QvVHJlZUxpc3QubWpzJztcbmltcG9ydCBOZW9BcnJheSBmcm9tICcuLi8uLi8uLi8uLi9zcmMvdXRpbC9BcnJheS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLmFwcC52aWV3LmNsYXNzZGV0YWlscy5IaWVyYXJjaHlUcmVlTGlzdFxuICogQGV4dGVuZHMgTmVvLmxpc3QuVHJlZUxpc3RcbiAqL1xuY2xhc3MgSGllcmFyY2h5VHJlZUxpc3QgZXh0ZW5kcyBUcmVlTGlzdCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3MuYXBwLnZpZXcuY2xhc3NkZXRhaWxzLkhpZXJhcmNoeVRyZWVMaXN0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLmFwcC52aWV3LmNsYXNzZGV0YWlscy5IaWVyYXJjaHlUcmVlTGlzdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjbGFzc2RldGFpbHMtdHJlZWxpc3QnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY2xhc3NoaWVyYXJjaHktdHJlZWxpc3QnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ2RvY3MtY2xhc3NoaWVyYXJjaHktdHJlZWxpc3QnLCAnbmVvLWxpc3QtY29udGFpbmVyJywgJ25lby1saXN0J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogW1xuICAgICAgICAgICAgJ2RvY3MtY2xhc3NoaWVyYXJjaHktdHJlZWxpc3QnLFxuICAgICAgICAgICAgJ25lby1saXN0LWNvbnRhaW5lcicsXG4gICAgICAgICAgICAnbmVvLXRyZWUtbGlzdCcsXG4gICAgICAgICAgICAnbmVvLWxpc3QnXG4gICAgICAgIF0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaG93Q29sbGFwc2VFeHBhbmRBbGxJY29ucz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgc2hvd0NvbGxhcHNlRXhwYW5kQWxsSWNvbnM6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IHN0cnVjdHVyZURhdGE9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc3RydWN0dXJlRGF0YTogbnVsbFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmNyZWF0ZVN0b3JlSXRlbXMoKTtcbiAgICAgICAgbWUuY3JlYXRlSXRlbXMobnVsbCwgbWUuZ2V0TGlzdEl0ZW1zUm9vdCgpLCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGNyZWF0ZVN0b3JlSXRlbXMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNsYXNzTmFtZSAgICAgPSBtZS5zdHJ1Y3R1cmVEYXRhLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIG1haW5Db250YWluZXIgPSBtZS51cCgnbWFpbi1jb250YWluZXInKSxcbiAgICAgICAgICAgIG1haW5TdG9yZSAgICAgPSBtYWluQ29udGFpbmVyLnN0b3JlLFxuICAgICAgICAgICAgc3RvcmVJdGVtcyAgICA9IFtdLFxuICAgICAgICAgICAgdG1wSXRlbXMgICAgICA9IFtdLFxuICAgICAgICAgICAgaXRlbSwgcGFyZW50SWQ7XG5cbiAgICAgICAgaXRlbSA9IG1haW5TdG9yZS5maW5kKHtcbiAgICAgICAgICAgICRraW5kICAgICAgIDogY2xhc3NOYW1lID09PSAnTmVvJyA/ICdtb2R1bGUnIDogJ2NsYXNzJyxcbiAgICAgICAgICAgIG5lb0NsYXNzTmFtZTogbWUuc3RydWN0dXJlRGF0YS5jbGFzc05hbWVcbiAgICAgICAgfSlbMF07XG5cbiAgICAgICAgdG1wSXRlbXMudW5zaGlmdChpdGVtKTtcblxuICAgICAgICB3aGlsZSAoaXRlbSAmJiBpdGVtLmhhc093blByb3BlcnR5KCdhdWdtZW50cycpKSB7XG4gICAgICAgICAgICBpdGVtID0gbWFpblN0b3JlLmZpbmQoe1xuICAgICAgICAgICAgICAgICRraW5kICAgICAgIDogJ2NsYXNzJyxcbiAgICAgICAgICAgICAgICBuZW9DbGFzc05hbWU6IGl0ZW0uYXVnbWVudHNbMF1cbiAgICAgICAgICAgIH0pWzBdO1xuXG4gICAgICAgICAgICB0bXBJdGVtcy51bnNoaWZ0KGl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdG1wSXRlbXMuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgICAgIHBhcmVudElkID0gdG1wSXRlbXNbaW5kZXggLSAxXSA/IHRtcEl0ZW1zW2luZGV4IC0gMV0uaWQgOiBudWxsO1xuXG4gICAgICAgICAgICAgICAgc3RvcmVJdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZCA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGlkICAgICAgOiBrZXkuaWQsXG4gICAgICAgICAgICAgICAgICAgIGlzTGVhZiAgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lICAgIDoga2V5Lm5lb0NsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQ6IHBhcmVudElkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLnN0b3JlLml0ZW1zID0gc3RvcmVJdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICAgKi9cbiAgICBvbkxlYWZJdGVtQ2xpY2socmVjb3JkKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2bm9kZUlkICA9IG1lLmdldEl0ZW1JZChyZWNvcmQuaWQpLFxuICAgICAgICAgICAgdmRvbSAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgdmRvbU5vZGUgPSBtZS5nZXRWZG9tQ2hpbGQodm5vZGVJZCk7XG5cbiAgICAgICAgTmVvQXJyYXlbcmVjb3JkLmNoZWNrZWQgPyAnYWRkJyA6ICdyZW1vdmUnXSh2ZG9tTm9kZS5jbHMsICd1bmNoZWNrZWQnKTtcblxuICAgICAgICByZWNvcmQuY2hlY2tlZCA9ICFyZWNvcmQuY2hlY2tlZDtcblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcblxuICAgICAgICBtZS5maXJlKCdyZWZyZXNoQ2xhc3NNZW1iZXJzJyk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIaWVyYXJjaHlUcmVlTGlzdCk7XG5cbmV4cG9ydCB7SGllcmFyY2h5VHJlZUxpc3QgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbnRhaW5lciAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL3NyYy9jb250YWluZXIvQmFzZS5tanMnO1xuaW1wb3J0IEhlYWRlckNvbXBvbmVudCAgICAgICAgIGZyb20gJy4vSGVhZGVyQ29tcG9uZW50Lm1qcyc7XG5pbXBvcnQgSGllcmFyY2h5VHJlZUxpc3QgICAgICAgZnJvbSAnLi9IaWVyYXJjaHlUcmVlTGlzdC5tanMnO1xuaW1wb3J0IE1haW5Db250YWluZXJDb250cm9sbGVyIGZyb20gJy4vTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIubWpzJztcbmltcG9ydCBNZW1iZXJzTGlzdCAgICAgICAgICAgICBmcm9tICcuL01lbWJlcnNMaXN0Lm1qcyc7XG5pbXBvcnQgUGFuZWwgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL2NvbnRhaW5lci9QYW5lbC5tanMnO1xuaW1wb3J0IFNlYXJjaEZpZWxkICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL3NyYy9mb3JtL2ZpZWxkL1NlYXJjaC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLmFwcC52aWV3LmNsYXNzZGV0YWlscy5NYWluQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3MuYXBwLnZpZXcuY2xhc3NkZXRhaWxzLk1haW5Db250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0RvY3MuYXBwLnZpZXcuY2xhc3NkZXRhaWxzLk1haW5Db250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY2xhc3NkZXRhaWxzLW1haW5jb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY2xhc3NkZXRhaWxzLW1haW5jb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1kb2NzLWNsYXNzZGV0YWlscy1tYWluY29udGFpbmVyJywgJ25lby1jb250YWluZXInXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1kb2NzLWNsYXNzZGV0YWlscy1tYWluY29udGFpbmVyJywgJ25lby1jb250YWluZXInXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb250cm9sbGVyLkNvbXBvbmVudH0gY29udHJvbGxlcj1NYWluQ29udGFpbmVyQ29udHJvbGxlclxuICAgICAgICAgKi9cbiAgICAgICAgY29udHJvbGxlcjogTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGxheW91dD17bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ31cbiAgICAgICAgICovXG4gICAgICAgIGxheW91dDoge250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IHN0cnVjdHVyZURhdGE9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc3RydWN0dXJlRGF0YTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBpdGVtcz1bLy8uLi5dXVxuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgX2NscyAgOiBbJ25lby1kb2NzLWNsYXNzZGV0YWlscy1oZWFkZXJjb250YWluZXInXSxcbiAgICAgICAgICAgIGZsZXggIDogJzAgMSBhdXRvJyxcbiAgICAgICAgICAgIGxheW91dDoge250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuXG4gICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICBtb2R1bGUgOiBQYW5lbCxcbiAgICAgICAgICAgICAgICBjbHMgICAgOiBbJ25lby1kb2NzLWNsYXNzZGV0YWlscy1oZWFkZXJwYW5lbCcsICduZW8tcGFuZWwnLCAnbmVvLWNvbnRhaW5lciddLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IFt7XG4gICAgICAgICAgICAgICAgICAgIGRvY2sgOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtib3JkZXJXaWR0aDogMH0sXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlciAgOiAnb25TY3JvbGxJbnRvVmlldycsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICdzaG93Q29uZmlncycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW5SaWdodDogJzVweCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnQ29uZmlncydcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlciAgOiAnb25TY3JvbGxJbnRvVmlldycsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICdzaG93TWV0aG9kcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW5SaWdodDogJzVweCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnTWV0aG9kcydcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlciAgOiAnb25TY3JvbGxJbnRvVmlldycsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICdzaG93RXZlbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ0V2ZW50cydcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnR5cGU6ICdjb21wb25lbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleCA6IDFcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlICAgICAgICAgOiBTZWFyY2hGaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycyAgICAgIDoge2NoYW5nZTogJ29uU2VhcmNoRmllbGRDaGFuZ2UnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyVGV4dDogJ0ZpbHRlciBNZW1iZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoICAgICAgICAgIDogMTYwLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbiAgICAgOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wIDogJzJweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZCAgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlciAgOiAnb25Ub2dnbGVNZW1iZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25DbHMgIDogJ2ZhIGZhLWNoZWNrLXNxdWFyZScsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICdzaG93UHJpdmF0ZU1lbWJlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luUmlnaHQ6ICc1cHgnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ1ByaXZhdGUnLFxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkICA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyICA6ICdvblRvZ2dsZU1lbWJlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNscyAgOiAnZmEgZmEtY2hlY2stc3F1YXJlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZTogJ3Nob3dQcm90ZWN0ZWRNZW1iZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpblJpZ2h0OiAnNXB4J30sXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdQcm90ZWN0ZWQnLFxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkICA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyICA6ICdvblRvZ2dsZU1lbWJlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNscyAgOiAnZmEgZmEtY2hlY2stc3F1YXJlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZTogJ3Nob3dTdGF0aWNNZW1iZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ1N0YXRpYydcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9XSxcblxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGU6IEhlYWRlckNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgZmxleCAgOiAxLFxuICAgICAgICAgICAgICAgICAgICByZWNvcmQ6ICdAY29uZmlnOnN0cnVjdHVyZURhdGEnXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgICAgICAgOiBIaWVyYXJjaHlUcmVlTGlzdCxcbiAgICAgICAgICAgICAgICBmbGV4ICAgICAgICAgOiAnMCAwIGF1dG8nLFxuICAgICAgICAgICAgICAgIG1pbldpZHRoICAgICA6IDMzMCxcbiAgICAgICAgICAgICAgICBzdHJ1Y3R1cmVEYXRhOiAnQGNvbmZpZzpzdHJ1Y3R1cmVEYXRhJ1xuICAgICAgICAgICAgfV1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgOiBNZW1iZXJzTGlzdCxcbiAgICAgICAgICAgIGZsZXggICAgIDogMSxcbiAgICAgICAgICAgIGxpc3RlbmVyczoge211dGF0ZUl0ZW1zOiAnb25NdXRhdGVJdGVtcyd9LFxuICAgICAgICAgICAgcmVmZXJlbmNlOiAnY2xhc3NkZXRhaWxzLW1lbWJlcnNsaXN0J1xuICAgICAgICB9XVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1haW5Db250YWluZXIpO1xuXG5leHBvcnQge01haW5Db250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbXBvbmVudCAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXIvQ29tcG9uZW50Lm1qcyc7XG5pbXBvcnQgU291cmNlVmlld0NvbXBvbmVudCBmcm9tIFwiLi9Tb3VyY2VWaWV3Q29tcG9uZW50Lm1qc1wiO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLmFwcC52aWV3Lk1haW5Db250YWluZXJDb250cm9sbGVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udHJvbGxlci5Db21wb25lbnRcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLmFwcC52aWV3LmNsYXNzZGV0YWlscy5NYWluQ29udGFpbmVyQ29udHJvbGxlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy5hcHAudmlldy5jbGFzc2RldGFpbHMuTWFpbkNvbnRhaW5lckNvbnRyb2xsZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nZG9jcy1jbGFzc2RldGFpbHMtbWFpbmNvbnRhaW5lci1jb250cm9sbGVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2RvY3MtY2xhc3NkZXRhaWxzLW1haW5jb250YWluZXItY29udHJvbGxlcidcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uSGVhZGVyQ2xpY2soZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICByZWNvcmQgICAgICAgICAgICAgID0gbWUudmlldy5zdHJ1Y3R1cmVEYXRhLFxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lciAgICAgICA9IG1lLnZpZXcudXAoJ21haW4tY29udGFpbmVyJyksXG4gICAgICAgICAgICBjb250ZW50VGFiQ29udGFpbmVyID0gbWFpbkNvbnRhaW5lci5kb3duKCdkb2NzLWNvbnRlbnQtdGFiY29udGFpbmVyJyksXG4gICAgICAgICAgICBjbGFzc05hbWUgICAgICAgICAgID0gKHJlY29yZC5wYXRoID8gcmVjb3JkLnBhdGggKyAnLicgOiAnJykgKyByZWNvcmQubmFtZTtcblxuICAgICAgICBjb250ZW50VGFiQ29udGFpbmVyLmFkZCh7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgOiBTb3VyY2VWaWV3Q29tcG9uZW50LFxuICAgICAgICAgICAgaWQgICAgICAgICAgIDogY2xhc3NOYW1lICsgJ19fc291cmNlJyxcbiAgICAgICAgICAgIHN0cnVjdHVyZURhdGE6IHJlY29yZCxcblxuICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWNvZGUnLFxuICAgICAgICAgICAgICAgIHRleHQgICA6IGNsYXNzTmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TmVvLmNvbGxlY3Rpb24uQmFzZX0gc3RvcmVcbiAgICAgKi9cbiAgICBvbk11dGF0ZUl0ZW1zKHN0b3JlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY291bnRDb25maWdzICAgID0gMCxcbiAgICAgICAgICAgIGNvdW50RXZlbnRzICAgICA9IDAsXG4gICAgICAgICAgICBjb3VudE1ldGhvZHMgICAgPSAwLFxuICAgICAgICAgICAgY291bnRQcml2YXRlcyAgID0gMCxcbiAgICAgICAgICAgIGNvdW50UHJvdGVjdGVkcyA9IDAsXG4gICAgICAgICAgICBjb3VudFN0YXRpY3MgICAgPSAwO1xuXG4gICAgICAgIHN0b3JlLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5raW5kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY291bnRNZXRob2RzKys7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0ua2luZCA9PT0gJ21lbWJlcicpIHtcbiAgICAgICAgICAgICAgICBjb3VudENvbmZpZ3MrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY291bnRFdmVudHMrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZW0uYWNjZXNzID09PSAncHJpdmF0ZScpIHtcbiAgICAgICAgICAgICAgICBjb3VudFByaXZhdGVzKys7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uYWNjZXNzID09PSAncHJvdGVjdGVkJykge1xuICAgICAgICAgICAgICAgIGNvdW50UHJvdGVjdGVkcysrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXRlbS5zY29wZSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICAgICAgICBjb3VudFN0YXRpY3MrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCdzaG93Q29uZmlncycpICAgICAgICAgLnRleHQgPSAnQ29uZmlncyAnICAgKyBjb3VudENvbmZpZ3M7XG4gICAgICAgIG1lLmdldFJlZmVyZW5jZSgnc2hvd01ldGhvZHMnKSAgICAgICAgIC50ZXh0ID0gJ01ldGhvZHMgJyAgICsgY291bnRNZXRob2RzO1xuICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ3Nob3dFdmVudHMnKSAgICAgICAgICAudGV4dCA9ICdFdmVudHMgJyAgICArIGNvdW50RXZlbnRzO1xuICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ3Nob3dQcml2YXRlTWVtYmVycycpICAudGV4dCA9ICdQcml2YXRlICcgICArIGNvdW50UHJpdmF0ZXM7XG4gICAgICAgIG1lLmdldFJlZmVyZW5jZSgnc2hvd1Byb3RlY3RlZE1lbWJlcnMnKS50ZXh0ID0gJ1Byb3RlY3RlZCAnICsgY291bnRQcm90ZWN0ZWRzO1xuICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ3Nob3dTdGF0aWNNZW1iZXJzJykgICAudGV4dCA9ICdTdGF0aWMgJyAgICArIGNvdW50U3RhdGljcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25TY3JvbGxJbnRvVmlldyhkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYnV0dG9uID0gTmVvLmdldENvbXBvbmVudChkYXRhLnRhcmdldC5pZCk7XG5cbiAgICAgICAgTmVvLm1haW4uYWRkb24uSGlnaGxpZ2h0SlMuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICAgICAgdGV4dCAgIDogYnV0dG9uLnJlZmVyZW5jZS5zdWJzdHIoNCksXG4gICAgICAgICAgICB2bm9kZUlkOiBtZS52aWV3LnZkb20uaWRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uU2VhcmNoRmllbGRDaGFuZ2UoZGF0YSkge1xuICAgICAgICB0aGlzLmdldFJlZmVyZW5jZSgnY2xhc3NkZXRhaWxzLW1lbWJlcnNsaXN0JykuZmlsdGVyTWVtYmVyc1F1ZXJ5ID0gZGF0YS52YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Ub2dnbGVNZW1iZXJzKGRhdGEpIHtcbiAgICAgICAgbGV0IGJ1dHRvbiAgICAgID0gTmVvLmdldENvbXBvbmVudChkYXRhLnRhcmdldC5pZCksXG4gICAgICAgICAgICBtZW1iZXJzTGlzdCA9IHRoaXMuZ2V0UmVmZXJlbmNlKCdjbGFzc2RldGFpbHMtbWVtYmVyc2xpc3QnKTtcblxuICAgICAgICBidXR0b24uaWNvbkNscyA9IGJ1dHRvbi5jaGVja2VkID8gJ2ZhIGZhLXNxdWFyZScgOiAnZmEgZmEtY2hlY2stc3F1YXJlJztcbiAgICAgICAgYnV0dG9uLmNoZWNrZWQgPSAhYnV0dG9uLmNoZWNrZWQ7XG5cbiAgICAgICAgbWVtYmVyc0xpc3RbYnV0dG9uLnJlZmVyZW5jZV0gPSBidXR0b24uY2hlY2tlZDtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1haW5Db250YWluZXJDb250cm9sbGVyKTtcblxuZXhwb3J0IHtNYWluQ29udGFpbmVyQ29udHJvbGxlciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9zcmMvbGlzdC9CYXNlLm1qcyc7XG5pbXBvcnQgQ29sbGVjdGlvbiBmcm9tICcuLi8uLi8uLi8uLi9zcmMvY29sbGVjdGlvbi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIERvY3MuYXBwLnZpZXcuY2xhc3NkZXRhaWxzLk1lbWJlcnNMaXN0XG4gKiBAZXh0ZW5kcyBOZW8ubGlzdC5CYXNlXG4gKi9cbmNsYXNzIE1lbWJlcnNMaXN0IGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3MuYXBwLnZpZXcuY2xhc3NkZXRhaWxzLk1lbWJlcnNMaXN0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLmFwcC52aWV3LmNsYXNzZGV0YWlscy5NZW1iZXJzTGlzdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjbGFzc2RldGFpbHMtbWVtYmVyc2xpc3QnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY2xhc3NkZXRhaWxzLW1lbWJlcnNsaXN0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9Wydkb2NzLWNsYXNzaGllcmFyY2h5LW1lbWJlcnNsaXN0J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWydkb2NzLWNsYXNzaGllcmFyY2h5LW1lbWJlcnNsaXN0J10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGZpbHRlck1lbWJlcnNRdWVyeV89JydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgZmlsdGVyTWVtYmVyc1F1ZXJ5XzogJycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaG93UHJpdmF0ZU1lbWJlcnNfPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHNob3dQcml2YXRlTWVtYmVyc186IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaG93UHJvdGVjdGVkTWVtYmVyc189dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgc2hvd1Byb3RlY3RlZE1lbWJlcnNfOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hvd1N0YXRpY01lbWJlcnNfPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHNob3dTdGF0aWNNZW1iZXJzXzogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb2xsZWN0aW9uLkJhc2V9IHN0b3JlPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHN0b3JlOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHRhcmdldENsYXNzTmFtZT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB0YXJnZXRDbGFzc05hbWU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tPXtjbjogW119XG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbToge1xuICAgICAgICAgICAgY246IFtdXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaGllcmFyY2h5VmlldyA9IG1lLnVwKCdjbGFzc2RldGFpbHMtbWFpbmNvbnRhaW5lcicpLmRvd24oJ2NsYXNzaGllcmFyY2h5LXRyZWVsaXN0JyksXG4gICAgICAgICAgICBtYWluU3RvcmUgICAgID0gbWUudXAoJ21haW4tY29udGFpbmVyJykuc3RvcmU7XG5cbiAgICAgICAgaGllcmFyY2h5Vmlldy5vbih7XG4gICAgICAgICAgICByZWZyZXNoQ2xhc3NNZW1iZXJzOiBtZS5vblJlZnJlc2hDbGFzc01lbWJlcnMsXG4gICAgICAgICAgICBzY29wZSAgICAgICAgICAgICAgOiBtZVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5zdG9yZSA9IE5lby5jcmVhdGUoQ29sbGVjdGlvbiwge1xuICAgICAgICAgICAgZmlsdGVyTW9kZTogJ2FkdmFuY2VkJyxcbiAgICAgICAgICAgIHNvdXJjZUlkICA6IG1haW5TdG9yZS5pZFxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5vblJlZnJlc2hDbGFzc01lbWJlcnMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGZpbHRlck1lbWJlcnNRdWVyeSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRGaWx0ZXJNZW1iZXJzUXVlcnkodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm9uUmVmcmVzaENsYXNzTWVtYmVycygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBzaG93UHJvdGVjdGVkTWVtYmVycyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFNob3dQcm90ZWN0ZWRNZW1iZXJzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5vblJlZnJlc2hDbGFzc01lbWJlcnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc2hvd1ByaXZhdGVNZW1iZXJzIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U2hvd1ByaXZhdGVNZW1iZXJzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5vblJlZnJlc2hDbGFzc01lbWJlcnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc2hvd1N0YXRpY01lbWJlcnMgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTaG93U3RhdGljTWVtYmVycyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMub25SZWZyZXNoQ2xhc3NNZW1iZXJzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TmVvLmNvbGxlY3Rpb24uQmFzZX0gc3RvcmVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHZkb21cbiAgICAgKi9cbiAgICBhcHBseUNvbmZpZ3NIZWFkZXIoc3RvcmUsIHZkb20pIHtcbiAgICAgICAgaWYgKHN0b3JlLml0ZW1zWzBdICYmIHN0b3JlLml0ZW1zWzBdLmtpbmQgPT09ICdtZW1iZXInKSB7XG4gICAgICAgICAgICB2ZG9tLmNuLnB1c2goe1xuICAgICAgICAgICAgICAgIC8vIHNjcm9sbGluZyBwbGFjZWhvbGRlclxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGNscyAgICAgIDogWyduZW8tZG9jcy1tZW1iZXJsaXN0LWdyb3VwLWhlYWRlciddLFxuICAgICAgICAgICAgICAgIGlubmVySFRNTDogJ0NvbmZpZ3MnLFxuICAgICAgICAgICAgICAgICdkYXRhLWxpc3QtaGVhZGVyJzogJ0NvbmZpZ3MnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcGFyYW0ge05lby5jb2xsZWN0aW9uLkJhc2V9IHN0b3JlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB2ZG9tXG4gICAgICovXG4gICAgYXBwbHlFdmVudHNIZWFkZXIoaXRlbSwgaW5kZXgsIHN0b3JlLCB2ZG9tKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGl0ZW0ua2luZCA9PT0gJ2V2ZW50JyAmJlxuICAgICAgICAgICAgc3RvcmUuaXRlbXNbaW5kZXggLTFdICYmXG4gICAgICAgICAgICBzdG9yZS5pdGVtc1tpbmRleCAtMV0ua2luZCAhPT0gJ2V2ZW50J1xuICAgICAgICApIHtcbiAgICAgICAgICAgIHZkb20uY24ucHVzaCh7XG4gICAgICAgICAgICAgICAgLy8gc2Nyb2xsaW5nIHBsYWNlaG9sZGVyXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgY2xzICAgICAgOiBbJ25lby1kb2NzLW1lbWJlcmxpc3QtZ3JvdXAtaGVhZGVyJ10sXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MOiAnRXZlbnRzJyxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICA6IHt6SW5kZXg6IDN9LFxuICAgICAgICAgICAgICAgICdkYXRhLWxpc3QtaGVhZGVyJzogJ0V2ZW50cydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEBwYXJhbSB7TmVvLmNvbGxlY3Rpb24uQmFzZX0gc3RvcmVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHZkb21cbiAgICAgKi9cbiAgICBhcHBseU1ldGhvZHNIZWFkZXIoaXRlbSwgaW5kZXgsIHN0b3JlLCB2ZG9tKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGl0ZW0ua2luZCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICFzdG9yZS5pdGVtc1tpbmRleCAtMV0gfHwgKFxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5pdGVtc1tpbmRleCAtMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuaXRlbXNbaW5kZXggLTFdLmtpbmQgIT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgdmRvbS5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAvLyBzY3JvbGxpbmcgcGxhY2Vob2xkZXJcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBjbHMgICAgICA6IFsnbmVvLWRvY3MtbWVtYmVybGlzdC1ncm91cC1oZWFkZXInXSxcbiAgICAgICAgICAgICAgICBpbm5lckhUTUw6ICdNZXRob2RzJyxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICA6IHt6SW5kZXg6IDJ9LFxuICAgICAgICAgICAgICAgICdkYXRhLWxpc3QtaGVhZGVyJzogJ01ldGhvZHMnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgY3JlYXRlSXRlbXMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZmlsdGVyTWVtYmVyc1JlZ0V4ID0gbmV3IFJlZ0V4cChtZS5maWx0ZXJNZW1iZXJzUXVlcnkgfHwgJycsICdnaScpLFxuICAgICAgICAgICAgaGFzRXhhbXBsZXMgICAgICAgID0gZmFsc2UsXG4gICAgICAgICAgICB0YXJnZXRDbGFzc05hbWUgICAgPSBtZS50YXJnZXRDbGFzc05hbWUsXG4gICAgICAgICAgICB2ZG9tICAgICAgICAgICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgaGVhZGVyVGV4dCwgaXRlbUF0dHJpYnV0ZXMsIGl0ZW1Db25maWcsIHBhdGg7XG5cbiAgICAgICAgdmRvbS5jbiA9IFtdO1xuICAgICAgICB2ZG9tID0gbWUuYXBwbHlDb25maWdzSGVhZGVyKG1lLnN0b3JlLCB2ZG9tKTtcblxuICAgICAgICBtZS5zdG9yZS5pdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgdmRvbSA9IG1lLmFwcGx5RXZlbnRzSGVhZGVyKCBpdGVtLCBpbmRleCwgbWUuc3RvcmUsIHZkb20pO1xuICAgICAgICAgICAgdmRvbSA9IG1lLmFwcGx5TWV0aG9kc0hlYWRlcihpdGVtLCBpbmRleCwgbWUuc3RvcmUsIHZkb20pO1xuXG4gICAgICAgICAgICBpdGVtQXR0cmlidXRlcyA9IFtdO1xuXG4gICAgICAgICAgICBpZiAoaXRlbS5uYW1lLnN1YnN0cigtMSkgPT09ICdfJykge1xuICAgICAgICAgICAgICAgIGl0ZW0ubmFtZSA9IGl0ZW0ubmFtZS5zbGljZSgwLCAtMSkgO1xuICAgICAgICAgICAgICAgIGl0ZW1BdHRyaWJ1dGVzLnB1c2goJ0dTJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpdGVtLm5lb0NsYXNzTmFtZSAhPT0gdGFyZ2V0Q2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgaXRlbUF0dHJpYnV0ZXMucHVzaCgnaW5oZXJpdGVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpdGVtLmFjY2VzcyA9PT0gJ3ByaXZhdGUnIHx8IGl0ZW0uYWNjZXNzID09PSAncHJvdGVjdGVkJykge1xuICAgICAgICAgICAgICAgIGl0ZW1BdHRyaWJ1dGVzLnB1c2goaXRlbS5hY2Nlc3MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXRlbS5zY29wZSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICAgICAgICBpdGVtQXR0cmlidXRlcy5wdXNoKCdzdGF0aWMnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaGVhZGVyVGV4dCA9IGl0ZW0ubmFtZTtcblxuICAgICAgICAgICAgaWYgKG1lLmZpbHRlck1lbWJlcnNRdWVyeSAhPT0gJycgJiYgbWUuZmlsdGVyTWVtYmVyc1F1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyVGV4dCA9IGhlYWRlclRleHQucmVwbGFjZShmaWx0ZXJNZW1iZXJzUmVnRXgsIG1hdGNoID0+IGA8c3BhbiBjbGFzcz1cIm5lby1oaWdobGlnaHQtc2VhcmNoXCI+JHttYXRjaH08L3NwYW4+YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNvbmZpZ3NcbiAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgJiYgaXRlbS50eXBlLm5hbWVzKSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyVGV4dCArPSAoJzogeycgKyBNZW1iZXJzTGlzdC5lc2NhcGVIdG1sKGl0ZW0udHlwZS5uYW1lcy5qb2luKCd8JykpICsgJ30nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoJ2RlZmF1bHR2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyVGV4dCArPSAoJyA9ICcgKyBpdGVtLmRlZmF1bHR2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG1ldGhvZHNcbiAgICAgICAgICAgIGlmIChpdGVtLnBhcmFtcyAmJiBpdGVtLmtpbmQgIT09ICdldmVudCcpIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJUZXh0ICs9ICgnKCcgKyBpdGVtLnBhcmFtcy5yZWR1Y2UoKHJlc3VsdCwgcGFyYW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtLm5hbWUuaW5kZXhPZignLicpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtLm9wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goJ1snICsgcGFyYW0ubmFtZSArICddJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhcmFtLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfSwgW10pLmpvaW4oJywgJykgKyAnKScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXRlbS5yZXR1cm5zKSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyVGV4dCArPSAoJyDihpIgeycgKyBNZW1iZXJzTGlzdC5lc2NhcGVIdG1sKGl0ZW0ucmV0dXJuc1swXS50eXBlLm5hbWVzLmpvaW4oJ3wnKSArICd9JykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwYXRoID0gaXRlbS5tZXRhLnBhdGg7XG5cbiAgICAgICAgICAgIGlmIChwYXRoLmluY2x1ZGVzKCcvbmVvLm1qcy8nKSkge1xuICAgICAgICAgICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cihwYXRoLmluZGV4T2YoJy9uZW8ubWpzLycpICsgOSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBhdGguaW5jbHVkZXMoJy9uZW9tanMvJykpIHtcbiAgICAgICAgICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHIocGF0aC5pbmRleE9mKCcvbmVvbWpzLycpICArIDgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXRoLmluY2x1ZGVzKCcvbmVvLycpKSB7XG4gICAgICAgICAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKHBhdGguaW5kZXhPZignL25lby8nKSAgICAgKyA1KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbUNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWxpc3QtaXRlbSddLFxuICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby1saXN0LWl0ZW0taGVhZGVyLWNvbnRhaW5lciddLFxuICAgICAgICAgICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbHMgICAgICA6IFsnbmVvLWxpc3QtaXRlbS1oZWFkZXInXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogaGVhZGVyVGV4dFxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xzICAgICAgOiBbJ25lby1saXN0LWl0ZW0taGVhZGVyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IGl0ZW1BdHRyaWJ1dGVzLmpvaW4oJywgJylcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGNsczogJ25lby1kb2NzLXZpZXctc291cmNlLWxpbmstY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgY24gOlt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWcgICAgICA6ICdhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNscyAgICAgIDogWyduZW8tZG9jcy12aWV3LXNvdXJjZS1saW5rJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmICAgICA6ICcjdmlld1NvdXJjZT0nICsgaXRlbS5uZW9DbGFzc05hbWUgKyAnJmxpbmU9JyArIGl0ZW0ubWV0YS5saW5lbm8sXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6ICdTb3VyY2U6ICcgKyBwYXRoICsgJy8nICsgaXRlbS5tZXRhLmZpbGVuYW1lICsgJyAoTGluZSAnICsgaXRlbS5tZXRhLmxpbmVubyArICcpJ1xuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBpdGVtLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChpdGVtLmV4YW1wbGVzICYmIGl0ZW0uZXhhbXBsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGhhc0V4YW1wbGVzID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIGl0ZW0uZXhhbXBsZXMuZm9yRWFjaChleGFtcGxlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbUNvbmZpZy5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ3ByZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnIDogJ2NvZGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWw6IGV4YW1wbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXRlbS5wYXJhbXMgJiYgaXRlbS5wYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGl0ZW1Db25maWcuY24ucHVzaChNZW1iZXJzTGlzdC5jcmVhdGVQYXJhbWV0ZXJzVGFibGUoaXRlbS5wYXJhbXMpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZW0ucmV0dXJucyAmJiBpdGVtLmtpbmQgIT09ICdldmVudCcpIHtcbiAgICAgICAgICAgICAgICBpdGVtQ29uZmlnLmNuLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6ICdSZXR1cm5zIHsnICsgTWVtYmVyc0xpc3QuZXNjYXBlSHRtbChpdGVtLnJldHVybnNbMF0udHlwZS5uYW1lcy5qb2luKCd8JykgKyAnfSAnKSArIChpdGVtLnJldHVybnNbMF0uZGVzY3JpcHRpb24gfHwgJycpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZkb20uY24ucHVzaChpdGVtQ29uZmlnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgaWYgKGhhc0V4YW1wbGVzKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBOZW8ubWFpbi5hZGRvbi5IaWdobGlnaHRKUy5zeW50YXhIaWdobGlnaHRJbml0KCk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAgICogQHJldHVybnMge09iamVjdH0gdmRvbVxuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVQYXJhbWV0ZXJzVGFibGUocGFyYW1zKSB7XG4gICAgICAgIGxldCBoYXNEZWZhdWx0VmFsdWVzICA9IGZhbHNlLFxuICAgICAgICAgICAgaGFzT3B0aW9uYWxQYXJhbXMgPSBmYWxzZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLCBuZXN0ZWRQYXJhbXMsIHBhcmFtVGFibGU7XG5cbiAgICAgICAgcGFyYW1zLmZvckVhY2gocGFyYW0gPT4ge1xuICAgICAgICAgICAgaWYgKHBhcmFtLmhhc093blByb3BlcnR5KCdkZWZhdWx0dmFsdWUnKSkge1xuICAgICAgICAgICAgICAgIGhhc0RlZmF1bHRWYWx1ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGFyYW0uaGFzT3duUHJvcGVydHkoJ29wdGlvbmFsJykpIHtcbiAgICAgICAgICAgICAgICBoYXNPcHRpb25hbFBhcmFtcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBhcmFtVGFibGUgPSB7XG4gICAgICAgICAgICB0YWc6ICd0YWJsZScsXG4gICAgICAgICAgICBjbHM6ICdkb2NzLXBhcmFtLXRhYmxlJyxcbiAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICB0YWc6ICd0aGVhZCcsXG4gICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICB0YWcgICAgICA6ICd0aCcsXG4gICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogJ05hbWUnXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB0YWcgICAgICA6ICd0aCcsXG4gICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogJ1R5cGUnXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB0YWcgICAgICA6ICd0aCcsXG4gICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogJ0Rlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChoYXNEZWZhdWx0VmFsdWVzKSB7XG4gICAgICAgICAgICBwYXJhbVRhYmxlLmNuWzBdLmNuLnNwbGljZSgyLCAwLCB7XG4gICAgICAgICAgICAgICAgdGFnICAgICAgOiAndGgnLFxuICAgICAgICAgICAgICAgIGlubmVySFRNTDogJ0RlZmF1bHQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNPcHRpb25hbFBhcmFtcykge1xuICAgICAgICAgICAgcGFyYW1UYWJsZS5jblswXS5jbi5zcGxpY2UoMiwgMCwge1xuICAgICAgICAgICAgICAgIHRhZyAgICAgIDogJ3RoJyxcbiAgICAgICAgICAgICAgICBpbm5lckhUTUw6ICdPcHRpb25hbCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyYW1zLmZvckVhY2gocGFyYW0gPT4ge1xuICAgICAgICAgICAgaWYgKHBhcmFtLm5hbWUuaW5kZXhPZignLicpIDwgMCkgeyAvLyBpZ25vcmUgbmVzdGVkIHBhcmFtc1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICB0YWcgICAgICA6ICd0ZCcsXG4gICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogcGFyYW0uZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG5lc3RlZFBhcmFtcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgcGFyYW1zLmZvckVhY2gocCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwLm5hbWUuaW5kZXhPZihwYXJhbS5uYW1lICsgJy4nKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcCA9IE5lby5jbG9uZShwLCB0cnVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcC5uYW1lID0gcC5uYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwLm5hbWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHAubmFtZSA9IHAubmFtZS5qb2luKCcuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5lc3RlZFBhcmFtcy5wdXNoKHApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAobmVzdGVkUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICd0ZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBkZXNjcmlwdGlvbi5pbm5lckhUTUxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBNZW1iZXJzTGlzdC5jcmVhdGVQYXJhbWV0ZXJzVGFibGUobmVzdGVkUGFyYW1zKV1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBhcmFtVGFibGUuY24ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogJ3RyJyxcbiAgICAgICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnICAgICAgOiAndGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBwYXJhbS5uYW1lXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZyAgICAgIDogJ3RkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogcGFyYW0udHlwZSA/IE1lbWJlcnNMaXN0LmVzY2FwZUh0bWwocGFyYW0udHlwZS5uYW1lcy5qb2luKCcgfCAnKSkgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbl1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChoYXNEZWZhdWx0VmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtVGFibGUuY25bcGFyYW1UYWJsZS5jbi5sZW5ndGggLSAxXS5jbi5zcGxpY2UoMiwgMCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnICAgICAgOiAndGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBwYXJhbS5kZWZhdWx0dmFsdWUgPT09IHVuZGVmaW5lZCA/ICcnIDogKHBhcmFtLmRlZmF1bHR2YWx1ZSArICcnKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaGFzT3B0aW9uYWxQYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1UYWJsZS5jbltwYXJhbVRhYmxlLmNuLmxlbmd0aCAtIDFdLmNuLnNwbGljZSgyLCAwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWcgICAgICA6ICd0ZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IHBhcmFtLm9wdGlvbmFsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHBhcmFtVGFibGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZXMgJzwnICYgJz4nXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBzdGF0aWMgZXNjYXBlSHRtbCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGZpbHRlckFuZFNvcnRJdGVtcygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGhpZXJhcmNoeU1hcCAgID0ge30sXG4gICAgICAgICAgICBoaWVyYXJjaHlTdG9yZSA9IG1lLnVwKCdjbGFzc2RldGFpbHMtbWFpbmNvbnRhaW5lcicpLmRvd24oJ2NsYXNzaGllcmFyY2h5LXRyZWVsaXN0Jykuc3RvcmUsXG4gICAgICAgICAgICBoaWVyYXJjaHlJdGVtcyA9IGhpZXJhcmNoeVN0b3JlLml0ZW1zLFxuICAgICAgICAgICAgaSAgICAgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgdG1wSXRlbXMgICAgICAgPSBbXSxcbiAgICAgICAgICAgIGZpbHRlcnMsIHRtcEl0ZW1zTGVuO1xuXG4gICAgICAgIGhpZXJhcmNoeUl0ZW1zLmZvckVhY2goY2xzID0+IHtcbiAgICAgICAgICAgIGlmIChjbHMuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRtcEl0ZW1zLnB1c2goY2xzLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0bXBJdGVtc0xlbiA9IHRtcEl0ZW1zLmxlbmd0aDtcblxuICAgICAgICBmb3IgKDsgaSA8IHRtcEl0ZW1zTGVuOyBpKyspIHtcbiAgICAgICAgICAgIGhpZXJhcmNoeU1hcFt0bXBJdGVtc1tpXV0gPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUudGFyZ2V0Q2xhc3NOYW1lID0gaGllcmFyY2h5SXRlbXNbaGllcmFyY2h5SXRlbXMubGVuZ3RoIC0xXS5uYW1lO1xuXG4gICAgICAgIGZpbHRlcnMgPSBbe1xuICAgICAgICAgICAgb3BlcmF0b3I6ICdpbmNsdWRlZCcsXG4gICAgICAgICAgICBwcm9wZXJ0eTogJ25lb0NsYXNzTmFtZScsXG4gICAgICAgICAgICB2YWx1ZSAgIDogdG1wSXRlbXNcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgb3BlcmF0b3I6ICchPT0nLFxuICAgICAgICAgICAgcHJvcGVydHk6ICdraW5kJyxcbiAgICAgICAgICAgIHZhbHVlICAgOiAnY2xhc3MnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG9wZXJhdG9yOiAnIT09JyxcbiAgICAgICAgICAgIHByb3BlcnR5OiAna2luZCcsXG4gICAgICAgICAgICB2YWx1ZSAgIDogJ2NvbnN0YW50JyAvLyB0b2RvP1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBvcGVyYXRvcjogJyE9PScsXG4gICAgICAgICAgICBwcm9wZXJ0eTogJ2tpbmQnLFxuICAgICAgICAgICAgdmFsdWUgICA6ICdtb2R1bGUnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG9wZXJhdG9yOiAnaXNVbmRlZmluZWQnLFxuICAgICAgICAgICAgcHJvcGVydHk6ICdpbmhlcml0ZWQnXG4gICAgICAgIH1dO1xuXG4gICAgICAgIGlmICghbWUuc2hvd1ByaXZhdGVNZW1iZXJzKSB7XG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnIT09JyxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTogJ2FjY2VzcycsXG4gICAgICAgICAgICAgICAgdmFsdWUgICA6ICdwcml2YXRlJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW1lLnNob3dQcm90ZWN0ZWRNZW1iZXJzKSB7XG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnIT09JyxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTogJ2FjY2VzcycsXG4gICAgICAgICAgICAgICAgdmFsdWUgICA6ICdwcm90ZWN0ZWQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbWUuc2hvd1N0YXRpY01lbWJlcnMpIHtcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6ICchPT0nLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5OiAnc2NvcGUnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgOiAnc3RhdGljJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWUuZmlsdGVyTWVtYmVyc1F1ZXJ5ICE9PSAnJyAmJiBtZS5maWx0ZXJNZW1iZXJzUXVlcnkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6ICdsaWtlJyxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTogJ25hbWUnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgOiBtZS5maWx0ZXJNZW1iZXJzUXVlcnlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZmlsdGVycy5wdXNoKHtcbiAgICAgICAgICAgIHNjb3BlICAgOiBtZSxcbiAgICAgICAgICAgIGZpbHRlckJ5OiBmdW5jdGlvbihpdGVtLCBmaWx0ZXJlZEl0ZW1zLCBhbGxJdGVtcykge1xuICAgICAgICAgICAgICAgIGxldCBtZSAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRDbGFzc05hbWUgPSBtZS50YXJnZXRDbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkSXRlbSwgaSwgbGVuO1xuXG4gICAgICAgICAgICAgICAgLy8gYWx3YXlzIGV4Y2x1ZGUgaW5oZXJpdGVkIGFsdGVybmF0ZUNsYXNzTmFtZSAmIG50eXBlIGNvbmZpZ3NcbiAgICAgICAgICAgICAgICBpZiAoKGl0ZW0ubmFtZSA9PT0gJ2FsdGVybmF0ZUNsYXNzTmFtZScgfHwgaXRlbS5uYW1lID09PSAnbnR5cGUnKSAmJiBpdGVtLm5lb0NsYXNzTmFtZSAhPT0gdGFyZ2V0Q2xhc3NOYW1lXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpdGVtLm5lb0NsYXNzTmFtZSAhPT0gdGFyZ2V0Q2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGkgICA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGxlbiA9IGZpbHRlcmVkSXRlbXMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkSXRlbSA9IGZpbHRlcmVkSXRlbXNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkICE9PSBmaWx0ZXJlZEl0ZW0uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubmFtZSAgPT09IGZpbHRlcmVkSXRlbS5uYW1lICAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnNjb3BlID09PSBmaWx0ZXJlZEl0ZW0uc2NvcGUgJiYgLy8gc3RhdGljIFZTIGluc3RhbmNlIG1lbWJlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGllcmFyY2h5TWFwW2l0ZW0ubmVvQ2xhc3NOYW1lXSA8IGhpZXJhcmNoeU1hcFtmaWx0ZXJlZEl0ZW0ubmVvQ2xhc3NOYW1lXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLnN0b3JlLmZpbHRlcnMgPSBmaWx0ZXJzO1xuXG4gICAgICAgIG1lLnN0b3JlLnNvcnRlcnMgPSBbe1xuICAgICAgICAgICAgLy8gQ29uZmlncyA9PiBNZXRob2RzID0+IEV2ZW50c1xuICAgICAgICAgICAgc29ydEJ5OiBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgYSA9IGEua2luZCA9PT0gJ21lbWJlcicgPyAwIDogYS5raW5kID09PSAnZnVuY3Rpb24nID8gMSA6IDI7XG4gICAgICAgICAgICAgICAgYiA9IGIua2luZCA9PT0gJ21lbWJlcicgPyAwIDogYi5raW5kID09PSAnZnVuY3Rpb24nID8gMSA6IDI7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYSA+IGIgPyAxIDogYSA8IGIgPyAtMSA6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ0FTQycsXG4gICAgICAgICAgICBwcm9wZXJ0eSA6ICduYW1lJ1xuICAgICAgICB9XTtcblxuICAgICAgICBtZS5maXJlKCdtdXRhdGVJdGVtcycsIG1lLnN0b3JlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0byBub3QgY2FsbCBjcmVhdGVJdGVtcygpIGF0IHRoaXMgcG9pbnQgPT4gb25SZWZyZXNoQ2xhc3NNZW1iZXJzKClcbiAgICAgKi9cbiAgICBvblN0b3JlRmlsdGVyKCkge31cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25SZWZyZXNoQ2xhc3NNZW1iZXJzKCkge1xuICAgICAgICB0aGlzLmZpbHRlckFuZFNvcnRJdGVtcygpO1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW1zKCk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNZW1iZXJzTGlzdCk7XG5cbmV4cG9ydCB7TWVtYmVyc0xpc3QgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50L0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy5hcHAudmlldy5jbGFzc2RldGFpbHMuU291cmNlVmlld0NvbXBvbmVudFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIFNvdXJjZVZpZXdDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLmFwcC52aWV3LmNsYXNzZGV0YWlscy5Tb3VyY2VWaWV3Q29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLmFwcC52aWV3LmNsYXNzZGV0YWlscy5Tb3VyY2VWaWV3Q29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NsYXNzZGV0YWlscy1zb3VyY2V2aWV3Y29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NsYXNzZGV0YWlscy1zb3VyY2V2aWV3Y29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGlzSGlnaGxpZ2h0ZWRfPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGlzSGlnaGxpZ2h0ZWRfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxudWxsfSBsaW5lXz1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGxpbmVfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IHByZXZpb3VzTGluZT1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHByZXZpb3VzTGluZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBzdHJ1Y3R1cmVEYXRhPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc3RydWN0dXJlRGF0YTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gc3R5bGU9IHtvdmVyZmxvdzogJ2F1dG8nfVxuICAgICAgICAgKi9cbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bydcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb209e2NuOiBbLy8uLi5dfVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgIHRhZzogJ3ByZScsXG4gICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICB0YWcgIDogJ2NvZGUnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2phdmFzY3JpcHQnXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdXJsICA9ICcuLi8uLi8nICsgbWUuc3RydWN0dXJlRGF0YS5zcmNQYXRoO1xuXG4gICAgICAgIE5lby5YaHIucHJvbWlzZVJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyAvLyBlbnN1cmUgd2UgYXJlIG5vdCBtb3VudGluZ1xuICAgICAgICAgICAgICAgIG1lLmFwcGx5U291cmNlQ29kZShkYXRhLnJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaXNIaWdobGlnaHRlZCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldElzSGlnaGxpZ2h0ZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgTmVvLm1haW4uYWRkb24uSGlnaGxpZ2h0SlMuc3ludGF4SGlnaGxpZ2h0TGluZSh7XG4gICAgICAgICAgICAgICAgICAgIGFkZExpbmUgICA6IG1lLmxpbmUsXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUxpbmU6IG1lLnByZXZpb3VzTGluZSxcbiAgICAgICAgICAgICAgICAgICAgdm5vZGVJZCAgIDogbWUudmRvbS5jblswXS5pZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBsaW5lIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldExpbmUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICBtZS5wcmV2aW91c0xpbmUgPSBvbGRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZS5pc0hpZ2hsaWdodGVkKSB7XG4gICAgICAgICAgICBtZS5hZnRlclNldElzSGlnaGxpZ2h0ZWQodHJ1ZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIGFwcGx5U291cmNlQ29kZShkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tLFxuICAgICAgICAgICAgbm9kZSA9IHZkb20uY25bMF07IC8vIHByZSB0YWdcblxuICAgICAgICBub2RlLmNuWzBdLmlubmVySFRNTCA9IGRhdGE7IC8vIGNvZGUgdGFnXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbWUuc3ludGF4SGlnaGxpZ2h0KG5vZGUuaWQpO1xuICAgICAgICB9LCA1MCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdm5vZGVJZFxuICAgICAqL1xuICAgIHN5bnRheEhpZ2hsaWdodCh2bm9kZUlkKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBpZDtcblxuICAgICAgICBpZiAobWUudm5vZGUpIHtcbiAgICAgICAgICAgIE5lby5tYWluLmFkZG9uLkhpZ2hsaWdodEpTLnN5bnRheEhpZ2hsaWdodCh7XG4gICAgICAgICAgICAgICAgdm5vZGVJZDogbWUudmRvbS5jblswXS5pZFxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWUuaXNIaWdobGlnaHRlZCA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlkID0gbWUub24oJ21vdW50ZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1lLnVuKCdtb3VudGVkJywgaWQpO1xuICAgICAgICAgICAgICAgICAgICBtZS5zeW50YXhIaWdobGlnaHQodm5vZGVJZCk7XG4gICAgICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFNvdXJjZVZpZXdDb21wb25lbnQpO1xuXG5leHBvcnQge1NvdXJjZVZpZXdDb21wb25lbnQgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50L0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy5hcHAudmlldy5jbGFzc2RldGFpbHMuVHV0b3JpYWxDb21wb25lbnRcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBUdXRvcmlhbENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3MuYXBwLnZpZXcuY2xhc3NkZXRhaWxzLlR1dG9yaWFsQ29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLmFwcC52aWV3LmNsYXNzZGV0YWlscy5UdXRvcmlhbENvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjbGFzc2RldGFpbHMtdHV0b3JpYWxjb21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY2xhc3NkZXRhaWxzLXR1dG9yaWFsY29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tY2xhc3NkZXRhaWxzLXR1dG9yaWFsY29tcG9uZW50J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tY2xhc3NkZXRhaWxzLXR1dG9yaWFsY29tcG9uZW50J10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gZmlsZU5hbWU9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZmlsZU5hbWU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gZmlsZVR5cGU9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZmlsZVR5cGU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHN0eWxlPXtvdmVyZmxvdzogJ2F1dG8nfVxuICAgICAgICAgKi9cbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bydcbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGlzSnNvbiA9IG1lLmZpbGVUeXBlID09PSAnanNvbicsXG4gICAgICAgICAgICB1cmwgICAgPSAnLi4vLi4vZG9jcy90dXRvcmlhbHMvJyArIG1lLmZpbGVOYW1lO1xuXG4gICAgICAgIE5lby5YaHJbaXNKc29uID8gJ3Byb21pc2VKc29uJyA6ICdwcm9taXNlUmVxdWVzdCddKHtcbiAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgLy8gZW5zdXJlIHdlIGFyZSBub3QgbW91bnRpbmdcbiAgICAgICAgICAgICAgICBtZS5hcHBseVNvdXJjZUNvZGUoaXNKc29uID8gZGF0YS5qc29uIDogZGF0YS5yZXNwb25zZSk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgYXBwbHlTb3VyY2VDb2RlKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgaWYgKG1lLmZpbGVUeXBlID09PSAnanNvbicpIHtcbiAgICAgICAgICAgIHZkb20uY24gPSBkYXRhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmRvbS5pbm5lckhUTUwgPSBkYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBUdXRvcmlhbENvbXBvbmVudC5zeW50YXhIaWdobGlnaHQoKTtcbiAgICAgICAgfSwgNTApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgc3RhdGljIHN5bnRheEhpZ2hsaWdodCgpIHtcbiAgICAgICAgTmVvLm1haW4uYWRkb24uSGlnaGxpZ2h0SlMuc3ludGF4SGlnaGxpZ2h0SW5pdCgpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVHV0b3JpYWxDb21wb25lbnQpO1xuXG5leHBvcnQge1R1dG9yaWFsQ29tcG9uZW50IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb250YWluZXIgZnJvbSAnLi9CYXNlLm1qcyc7XG5pbXBvcnQgVG9vbGJhciAgIGZyb20gJy4vVG9vbGJhci5tanMnO1xuXG4vKipcbiAqIEFuIGV4dGVuZGVkIENvbnRhaW5lciBzdXBwb3J0aW5nIG11bHRpcGxlIGRvY2tlZCBoZWFkZXIgdG9vbGJhcnNcbiAqIEBjbGFzcyBOZW8uY29udGFpbmVyLlBhbmVsXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgUGFuZWwgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29udGFpbmVyLlBhbmVsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29udGFpbmVyLlBhbmVsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3BhbmVsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3BhbmVsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tcGFuZWwnLCAnbmVvLWNvbnRhaW5lciddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLXBhbmVsJywgJ25lby1jb250YWluZXInXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gY29udGFpbmVyQ29uZmlnPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGNvbnRhaW5lckNvbmZpZzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gaGVhZGVyRGVmYXVsdHM9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgaGVhZGVyRGVmYXVsdHM6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gaGVhZGVycz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBoZWFkZXJzOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBpdGVtcz17bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ31cbiAgICAgICAgICovXG4gICAgICAgIF9sYXlvdXQ6IHtcbiAgICAgICAgICAgIG50eXBlOiAndmJveCcsXG4gICAgICAgICAgICBhbGlnbjogJ3N0cmV0Y2gnXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSB2ZXJ0aWNhbEhlYWRlcnNGaXJzdD1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgdmVydGljYWxIZWFkZXJzRmlyc3Q6IGZhbHNlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBoZiA9IGNvbmZpZyAmJiBjb25maWcudmVydGljYWxIZWFkZXJzRmlyc3QgPT09IHRydWUgfHwgbWUudmVydGljYWxIZWFkZXJzRmlyc3QgPT09IHRydWU7XG5cbiAgICAgICAgaWYgKGhmKSB7XG4gICAgICAgICAgICBtZS5sYXlvdXQgPSB7XG4gICAgICAgICAgICAgICAgbnR5cGU6ICdoYm94JyxcbiAgICAgICAgICAgICAgICBhbGlnbjogJ3N0cmV0Y2gnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBjcmVhdGVJdGVtcygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGhmICAgICAgICAgICAgICAgICAgID0gbWUudmVydGljYWxIZWFkZXJzRmlyc3QgPT09IGZhbHNlLFxuICAgICAgICAgICAgaGVhZGVycyAgICAgICAgICAgICAgPSBtZS5oZWFkZXJzIHx8IFtdLFxuICAgICAgICAgICAgYm90dG9tSGVhZGVycyAgICAgICAgPSBoZWFkZXJzLmZpbHRlcihoZWFkZXIgPT4ge3JldHVybiBoZWFkZXIuZG9jayA9PT0gKGhmID8nYm90dG9tJzogJ3JpZ2h0Jyl9KSxcbiAgICAgICAgICAgIGxlZnRIZWFkZXJzICAgICAgICAgID0gaGVhZGVycy5maWx0ZXIoaGVhZGVyID0+IHtyZXR1cm4gaGVhZGVyLmRvY2sgPT09IChoZiA/J2xlZnQnICA6ICd0b3AnKX0pLFxuICAgICAgICAgICAgcmlnaHRIZWFkZXJzICAgICAgICAgPSBoZWFkZXJzLmZpbHRlcihoZWFkZXIgPT4ge3JldHVybiBoZWFkZXIuZG9jayA9PT0gKGhmID8ncmlnaHQnIDogJ2JvdHRvbScpfSksXG4gICAgICAgICAgICB0b3BIZWFkZXJzICAgICAgICAgICA9IGhlYWRlcnMuZmlsdGVyKGhlYWRlciA9PiB7cmV0dXJuIGhlYWRlci5kb2NrID09PSAoaGYgPyd0b3AnICAgOiAnbGVmdCcpfSksXG4gICAgICAgICAgICBoYXNIb3Jpem9udGFsSGVhZGVycyA9IGJvdHRvbUhlYWRlcnMubGVuZ3RoID4gMCB8fCB0b3BIZWFkZXJzICAubGVuZ3RoID4gMCxcbiAgICAgICAgICAgIGhhc1ZlcnRpY2FsSGVhZGVycyAgID0gbGVmdEhlYWRlcnMgIC5sZW5ndGggPiAwIHx8IHJpZ2h0SGVhZGVycy5sZW5ndGggPiAwLFxuICAgICAgICAgICAgaXRlbXMgICAgICAgICAgICAgICAgPSBtZS5pdGVtcyxcbiAgICAgICAgICAgIGhvcml6b250YWxJdGVtcyAgICAgID0gW10sXG4gICAgICAgICAgICB2ZXJ0aWNhbEl0ZW1zICAgICAgICA9IFtdLFxuICAgICAgICAgICAgY29uZmlnO1xuXG4gICAgICAgIGlmIChoZWFkZXJzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIE5lby5lcnJvcignUGFuZWwgd2l0aG91dCBoZWFkZXJzLCBwbGVhc2UgdXNlIGEgQ29udGFpbmVyIGluc3RlYWQnLCBtZS5pZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0b3BIZWFkZXJzLmZvckVhY2goaGVhZGVyID0+IHtcbiAgICAgICAgICAgIHZlcnRpY2FsSXRlbXMucHVzaChQYW5lbC5jcmVhdGVIZWFkZXJDb25maWcoaGVhZGVyKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChoYXNWZXJ0aWNhbEhlYWRlcnMgJiYgKGhmICYmIGhhc0hvcml6b250YWxIZWFkZXJzIHx8ICFoZiAmJiBoYXNIb3Jpem9udGFsSGVhZGVycykpIHtcbiAgICAgICAgICAgIGxlZnRIZWFkZXJzLmZvckVhY2goaGVhZGVyID0+IHtcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsSXRlbXMucHVzaChQYW5lbC5jcmVhdGVIZWFkZXJDb25maWcoaGVhZGVyKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIG50eXBlICAgICAgIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgZmxleCAgICAgICAgOiAxLFxuICAgICAgICAgICAgICAgIGl0ZW1zICAgICAgIDogaXRlbXMsXG4gICAgICAgICAgICAgICAgaXRlbURlZmF1bHRzOiBtZS5pdGVtRGVmYXVsdHMsXG4gICAgICAgICAgICAgICAgLi4ubWUuY29udGFpbmVyQ29uZmlnIHx8IHt9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBob3Jpem9udGFsSXRlbXMucHVzaCh7Li4ubWUuaGVhZGVyRGVmYXVsdHMsIC4uLmNvbmZpZ30pO1xuXG4gICAgICAgICAgICByaWdodEhlYWRlcnMuZm9yRWFjaChoZWFkZXIgPT4ge1xuICAgICAgICAgICAgICAgIGhvcml6b250YWxJdGVtcy5wdXNoKFBhbmVsLmNyZWF0ZUhlYWRlckNvbmZpZyhoZWFkZXIpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2ZXJ0aWNhbEl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICAgIG50eXBlIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgaXRlbXMgOiBob3Jpem9udGFsSXRlbXMsXG4gICAgICAgICAgICAgICAgbGF5b3V0OiB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlOiAoaGYgPyAnaGJveCcgOiAndmJveCcpLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ3N0cmV0Y2gnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgbnR5cGUgICAgICAgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICBmbGV4ICAgICAgICA6IDEsXG4gICAgICAgICAgICAgICAgaXRlbXMgICAgICAgOiBpdGVtcyxcbiAgICAgICAgICAgICAgICBpdGVtRGVmYXVsdHM6IG1lLml0ZW1EZWZhdWx0cyxcbiAgICAgICAgICAgICAgICAuLi5tZS5jb250YWluZXJDb25maWcgfHwge31cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZlcnRpY2FsSXRlbXMucHVzaCh7Li4ubWUuaGVhZGVyRGVmYXVsdHMsIC4uLmNvbmZpZ30pO1xuICAgICAgICB9XG5cbiAgICAgICAgYm90dG9tSGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XG4gICAgICAgICAgICB2ZXJ0aWNhbEl0ZW1zLnB1c2goUGFuZWwuY3JlYXRlSGVhZGVyQ29uZmlnKGhlYWRlcikpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZS5pdGVtcyA9IHZlcnRpY2FsSXRlbXM7XG5cbiAgICAgICAgbWUuaXRlbURlZmF1bHRzID0gbnVsbDtcblxuICAgICAgICBzdXBlci5jcmVhdGVJdGVtcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGhlYWRlciB0aGUgaGVhZGVyIGNvbmZpZ1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZUhlYWRlckNvbmZpZyhoZWFkZXIpIHtcbiAgICAgICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG50eXBlOiAndG9vbGJhcicsXG4gICAgICAgICAgICBmbGV4IDogJzAgMSBhdXRvJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChoZWFkZXIudGV4dCkge1xuICAgICAgICAgICAgY29uZmlnLml0ZW1zID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGU6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgIGNscyAgOiBbJ25lby1wYW5lbC1oZWFkZXItdGV4dCcsICduZW8tbGFiZWwnXSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA6IGhlYWRlci50ZXh0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgZGVsZXRlIGhlYWRlci50ZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXNzdW1pbmcgYWxsIGxhYmVscyBpbnNpZGUgYSBQYW5lbCBIZWFkZXIgYXJlIG1lYW50IHRvIGJlIHRpdGxlcyAtPiBsb29rIHRoZSBzYW1lIHdheVxuICAgICAgICBpZiAoTmVvLmlzQXJyYXkoaGVhZGVyLml0ZW1zKSkge1xuICAgICAgICAgICAgaGVhZGVyLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ubnR5cGUgPT09ICdsYWJlbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbHMgPSBbJ25lby1wYW5lbC1oZWFkZXItdGV4dCcsICduZW8tbGFiZWwnXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7Li4uY29uZmlnLCAuLi5oZWFkZXJ9O1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoUGFuZWwpO1xuXG5leHBvcnQge1BhbmVsIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb250YWluZXIgZnJvbSAnLi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb250YWluZXIuVmlld3BvcnRcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBWaWV3cG9ydCBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb250YWluZXIuVmlld3BvcnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb250YWluZXIuVmlld3BvcnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ndmlld3BvcnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAndmlld3BvcnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogdHJ1ZSBhcHBsaWVzICduZW8tYm9keS12aWV3cG9ydCcgdG8gdGhlIGRvY3VtZW50LmJvZHlcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYXBwbHlCb2R5Q2xzPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGFwcGx5Qm9keUNsczogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tdmlld3BvcnQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby12aWV3cG9ydCddXG4gICAgfX1cblxuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBpZiAodGhpcy5hcHBseUJvZHlDbHMpIHtcbiAgICAgICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5hcHBseUJvZHlDbHMoe1xuICAgICAgICAgICAgICAgIGFwcE5hbWU6IHRoaXMuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBjbHMgICAgOiBbJ25lby1ib2R5LXZpZXdwb3J0J11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhWaWV3cG9ydCk7XG5cbmV4cG9ydCB7Vmlld3BvcnQgYXMgZGVmYXVsdH07IiwiaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5mb3JtLmZpZWxkLlNlYXJjaFxuICogQGV4dGVuZHMgTmVvLmZvcm0uZmllbGQuVGV4dFxuICovXG5jbGFzcyBTZWFyY2ggZXh0ZW5kcyBUZXh0IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmZvcm0uZmllbGQuU2VhcmNoJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uZm9ybS5maWVsZC5TZWFyY2gnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nc2VhcmNoZmllbGQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnc2VhcmNoZmllbGQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGNscz1bJ25lby1zZWFyY2hmaWVsZCcsICduZW8tdGV4dGZpZWxkJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tc2VhcmNoZmllbGQnLCAnbmVvLXRleHRmaWVsZCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWUgZm9yIHRoZSBoaWRlTGFiZWxfIHRleHRmaWVsZCBjb25maWdcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaGlkZUxhYmVsPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGhpZGVMYWJlbDogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVlIGZvciB0aGUgcGxhY2Vob2xkZXJUZXh0XyB0ZXh0ZmllbGQgY29uZmlnXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gcGxhY2Vob2xkZXJUZXh0PSdTZWFyY2gnXG4gICAgICAgICAqL1xuICAgICAgICBwbGFjZWhvbGRlclRleHQ6ICdTZWFyY2gnLFxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFNlYXJjaCk7XG5cbmV4cG9ydCB7U2VhcmNoIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlICAgICAgIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IENvbGxlY3Rpb24gZnJvbSAnLi4vY29sbGVjdGlvbi9CYXNlLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgICBmcm9tICcuLi91dGlsL0FycmF5Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5saXN0LlRyZWVMaXN0XG4gKiBAZXh0ZW5kcyBOZW8ubGlzdC5CYXNlXG4gKi9cbmNsYXNzIFRyZWVMaXN0IGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5saXN0LlRyZWVMaXN0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubGlzdC5UcmVlTGlzdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd0cmVlbGlzdCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICd0cmVlbGlzdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLXRyZWUtbGlzdCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLXRyZWUtbGlzdCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogdG9kbzogY2hhbmdlIHRoZSBkZWZhdWx0IHRvIGZhbHNlIG9uY2Ugc2VsZWN0aW9uLlRyZWVMaXN0IGlzIGluIHBsYWNlXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGRpc2FibGVTZWxlY3Rpb249dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgZGlzYWJsZVNlbGVjdGlvbjogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNob3dDb2xsYXBzZUV4cGFuZEFsbEljb25zPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHNob3dDb2xsYXBzZUV4cGFuZEFsbEljb25zOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgIHRhZzogJ3VsJyxcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWxpc3QtY29udGFpbmVyJywgJ25lby1saXN0J10sXG4gICAgICAgICAgICAgICAgY24gOiBbXVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICBpZiAobWUuc2hvd0NvbGxhcHNlRXhwYW5kQWxsSWNvbnMpIHtcbiAgICAgICAgICAgIHZkb20uY24udW5zaGlmdCh7XG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby10cmVlbGlzdC1tZW51LWl0ZW0nLCAnbmVvLXRyZWVsaXN0LWNvbGxhcHNlLWFsbC1pY29uJ10sXG4gICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby10cmVlbGlzdC1tZW51LWl0ZW0tY29udGVudCddXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLXRyZWVsaXN0LW1lbnUtaXRlbScsICduZW8tdHJlZWxpc3QtZXhwYW5kLWFsbC1pY29uJ10sXG4gICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby10cmVlbGlzdC1tZW51LWl0ZW0tY29udGVudCddXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIHN0b3JlIGNvbmZpZyBnZXRzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtPYmplY3R8TmVvLmRhdGEuU3RvcmV9IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R8TmVvLmRhdGEuU3RvcmV9IG9sZFZhbHVlXG4gICAgICogQHJldHVybnMge05lby5kYXRhLlN0b3JlfVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRTdG9yZSh2YWx1ZSkge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IE5lby5jcmVhdGUoQ29sbGVjdGlvbiwge1xuICAgICAgICAgICAgICAgIGtleVByb3BlcnR5OiAnaWQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENvbGxhcHNlcyBhbGwgZm9sZGVyc1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudF09ZmFsc2UgU2V0IHNpbGVudCB0byB0cnVlIHRvIHByZXZlbnQgYSB2bm9kZSB1cGRhdGVcbiAgICAgKi9cbiAgICBjb2xsYXBzZUFsbChzaWxlbnQ9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGhhc01hdGNoID0gZmFsc2UsXG4gICAgICAgICAgICBub2RlO1xuXG4gICAgICAgIG1lLnN0b3JlLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0uaXNMZWFmKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IG1lLmdldFZkb21DaGlsZChtZS5nZXRJdGVtSWQoaXRlbS5pZCksIHZkb20pO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuY2xzLmluY2x1ZGVzKCduZW8tZm9sZGVyLW9wZW4nKSkge1xuICAgICAgICAgICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUobm9kZS5jbHMsICduZW8tZm9sZGVyLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGhhc01hdGNoKSB7XG4gICAgICAgICAgICBpZiAoc2lsZW50KSB7XG4gICAgICAgICAgICAgICAgbWUuX3Zkb20gPSB2ZG9tXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW3BhcmVudElkXSBUaGUgcGFyZW50IG5vZGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Zkb21Sb290XSBUaGUgdmRvbSB0ZW1wbGF0ZSByb290IGZvciB0aGUgY3VycmVudCBzdWIgdHJlZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBsZXZlbCBUaGUgaGllcmFyY2h5IGxldmVsIG9mIHRoZSB0cmVlXG4gICAgICogQHJldHVybnMge09iamVjdH0gdmRvbVJvb3RcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgY3JlYXRlSXRlbXMocGFyZW50SWQsIHZkb21Sb290LCBsZXZlbCkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgaXRlbXMgPSBtZS5zdG9yZS5maW5kKCdwYXJlbnRJZCcsIHBhcmVudElkKSxcbiAgICAgICAgICAgIGNscywgdG1wUm9vdDtcblxuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKCF2ZG9tUm9vdC5jbikge1xuICAgICAgICAgICAgICAgIHZkb21Sb290LmNuID0gW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYXJlbnRJZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZkb21Sb290LmNuLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICd1bCcsXG4gICAgICAgICAgICAgICAgICAgIGNsczogWyduZW8tbGlzdCddLFxuICAgICAgICAgICAgICAgICAgICBjbiA6IFtdLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcxNXB4J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0bXBSb290ID0gdmRvbVJvb3QuY25bdmRvbVJvb3QuY24ubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRtcFJvb3QgPSB2ZG9tUm9vdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBjbHMgPSBbJ25lby1saXN0LWl0ZW0nXTtcblxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlzTGVhZikge1xuICAgICAgICAgICAgICAgICAgICBjbHMucHVzaChpdGVtLnNpbmdsZXRvbiA/ICduZW8tbGlzdC1pdGVtLWxlYWYtc2luZ2xldG9uJyA6ICduZW8tbGlzdC1pdGVtLWxlYWYnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjbHMucHVzaCgnbmVvLWxpc3QtZm9sZGVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpdGVtLmNvbGxhcHNlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xzLnB1c2goJ25lby1mb2xkZXItb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdG1wUm9vdC5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnbGknLFxuICAgICAgICAgICAgICAgICAgICBjbHM6IGNscyxcbiAgICAgICAgICAgICAgICAgICAgaWQgOiBtZS5nZXRJdGVtSWQoaXRlbS5pZCksXG4gICAgICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZyAgICAgIDogJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xzICAgICAgOiBbJ25lby1saXN0LWl0ZW0tY29udGVudCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmcgOiAnMTBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogaXRlbS5pc0xlYWYgPyBudWxsIDogJ3N0aWNreScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3AgICAgIDogaXRlbS5pc0xlYWYgPyBudWxsIDogKGxldmVsICogMzgpICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleCAgOiBpdGVtLmlzTGVhZiA/IG51bGwgOiAoMjAgLyAobGV2ZWwgKyAxKSksXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRtcFJvb3QgPSBtZS5jcmVhdGVJdGVtcyhpdGVtLmlkLCB0bXBSb290LCBsZXZlbCArIDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmRvbVJvb3Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhwYW5kcyBhbGwgZm9sZGVyc1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudF09ZmFsc2UgU2V0IHNpbGVudCB0byB0cnVlIHRvIHByZXZlbnQgYSB2bm9kZSB1cGRhdGVcbiAgICAgKi9cbiAgICBleHBhbmRBbGwoc2lsZW50PWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBoYXNNYXRjaCA9IGZhbHNlLFxuICAgICAgICAgICAgbm9kZTtcblxuICAgICAgICBtZS5zdG9yZS5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKCFpdGVtLmlzTGVhZikge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBtZS5nZXRWZG9tQ2hpbGQobWUuZ2V0SXRlbUlkKGl0ZW0uaWQpLCB2ZG9tKTtcblxuICAgICAgICAgICAgICAgIGlmICghbm9kZS5jbHMuaW5jbHVkZXMoJ25lby1mb2xkZXItb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgICAgIE5lb0FycmF5LmFkZChub2RlLmNscywgJ25lby1mb2xkZXItb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaGFzTWF0Y2gpIHtcbiAgICAgICAgICAgIGlmIChzaWxlbnQpIHtcbiAgICAgICAgICAgICAgICBtZS5fdmRvbSA9IHZkb21cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlcyBUcmVlIG5vZGVzIHdoaWNoIGRvIG5vdCBtYXRjaCB0aGUgZmlsdGVyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IFRoZSBzdG9yZSBmaWVsZCB0byBmaWx0ZXIgYnlcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVGhlIGZpbHRlciB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfG51bGx9IHBhcmVudElkIFRoZSByb290IGlkIGZvciB0aGUgY3VycmVudCBmaWx0ZXIgY2FsbFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3BhcmVudE1hdGNoXT1mYWxzZSBJbiBjYXNlIGEgcGFyZW50IGZvbGRlciBtYXRjaGVzIHRoZSBmaWx0ZXIsIHNob3cgaXRzIGNoaWxkIGl0ZW1zXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IGZhbHNlIGlmIGF0IGxlYXN0IG9uZSBjaGlsZCBpdGVtIGlzIGZpbHRlcmVkXG4gICAgICovXG4gICAgZmlsdGVyKHByb3BlcnR5LCB2YWx1ZSwgcGFyZW50SWQsIHBhcmVudE1hdGNoPWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGlzRmlsdGVyZWQgPSB0cnVlLFxuICAgICAgICAgICAgdmFsdWVSZWdFeCA9IG5ldyBSZWdFeHAodmFsdWUsICdnaScpLFxuICAgICAgICAgICAgdmRvbSAgICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBjaGlsZFJldHVyblZhbHVlLCBkaXJlY3RNYXRjaCwgbm9kZTtcblxuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuc3RvcmUuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLnBhcmVudElkID09PSBwYXJlbnRJZCkge1xuICAgICAgICAgICAgICAgIGRpcmVjdE1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbm9kZSAgICAgICAgPSBtZS5nZXRWZG9tQ2hpbGQobWUuZ2V0SXRlbUlkKGl0ZW0uaWQpLCB2ZG9tKTtcblxuICAgICAgICAgICAgICAgIG5vZGUuY25bMF0uaW5uZXJIVE1MID0gaXRlbVtwcm9wZXJ0eV0ucmVwbGFjZSh2YWx1ZVJlZ0V4LCBtYXRjaCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdE1hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cIm5lby1oaWdobGlnaHQtc2VhcmNoXCI+JHttYXRjaH08L3NwYW4+YDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlzTGVhZikge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFJldHVyblZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFJldHVyblZhbHVlID0gbWUuZmlsdGVyKHByb3BlcnR5LCB2YWx1ZSwgaXRlbS5pZCwgZGlyZWN0TWF0Y2ggfHwgcGFyZW50TWF0Y2gpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChkaXJlY3RNYXRjaCB8fCBwYXJlbnRNYXRjaCB8fCBjaGlsZFJldHVyblZhbHVlID09PSBmYWxzZSB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNGaWx0ZXJlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuZGlzcGxheSA9ICdsaXN0LWl0ZW0nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwYXJlbnRJZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbWUuZXhwYW5kQWxsKHRydWUpO1xuICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXNGaWx0ZXJlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0TGlzdEl0ZW1zUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmRvbS5jblt0aGlzLnNob3dDb2xsYXBzZUV4cGFuZEFsbEljb25zID8gMiA6IDBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEudGFyZ2V0LmNscy5pbmNsdWRlcygnbmVvLXRyZWVsaXN0LW1lbnUtaXRlbScpKSB7XG4gICAgICAgICAgICB0aGlzLm9uTWVudUl0ZW1DbGljayhkYXRhLnRhcmdldC5jbHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIub25DbGljayhkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkl0ZW1DbGljayhkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tICA9IG1lLnZkb20sXG4gICAgICAgICAgICBpdGVtcyA9IG1lLnN0b3JlLml0ZW1zLFxuICAgICAgICAgICAgaSAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgPSBpdGVtcy5sZW5ndGgsXG4gICAgICAgICAgICBwYXRoICA9IGRhdGEucGF0aC5tYXAoZSA9PiBlLmlkKSxcbiAgICAgICAgICAgIGl0ZW0sIHJlY29yZCwgdG1wSXRlbSwgdm5vZGVJZDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB0bXBJdGVtID0gaXRlbXNbaV07XG4gICAgICAgICAgICB2bm9kZUlkID0gbWUuZ2V0SXRlbUlkKHRtcEl0ZW0uaWQpO1xuXG4gICAgICAgICAgICBpZiAocGF0aC5pbmNsdWRlcyh2bm9kZUlkKSkge1xuICAgICAgICAgICAgICAgIHJlY29yZCA9IHRtcEl0ZW07XG4gICAgICAgICAgICAgICAgaXRlbSAgID0gbWUuZ2V0VmRvbUNoaWxkKHZub2RlSWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpdGVtLmNscyAmJiBpdGVtLmNscy5pbmNsdWRlcygnbmVvLWxpc3QtZm9sZGVyJykpIHtcbiAgICAgICAgICAgICAgICBOZW9BcnJheS50b2dnbGUoaXRlbS5jbHMsICduZW8tZm9sZGVyLW9wZW4nKTtcbiAgICAgICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWUub25MZWFmSXRlbUNsaWNrKHJlY29yZCk7XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBUaGUgbGVhZkl0ZW1DbGljayBldmVudCBmaXJlcyB3aGVuIGEgY2xpY2sgb2NjdXJzIG9uIGEgbGlzdCBpdGVtIHdoaWNoIGRvZXMgbm90IGhhdmUgY2hpbGQgaXRlbXMuXG4gICAgICAgICAgICAgICAgICogUGFzc2VzIHRoZSBpdGVtIHJlY29yZCB0byB0aGUgZXZlbnQgaGFuZGxlci5cbiAgICAgICAgICAgICAgICAgKiBAZXZlbnQgbGVhZkl0ZW1DbGlja1xuICAgICAgICAgICAgICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHJlY29yZFxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIG1lLmZpcmUoJ2xlYWZJdGVtQ2xpY2snLCByZWNvcmQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdXBlci5vbkl0ZW1DbGljayhkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsYWNlaG9sZGVyIG1ldGhvZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICAgKi9cbiAgICBvbkxlYWZJdGVtQ2xpY2socmVjb3JkKSB7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRyaWdnZXJlZCBieSBjbGlja3Mgb24gdGhlIGNvbGxhcHNlIG9yIGV4cGFuZCBhbGwgaWNvbnNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBjbHNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25NZW51SXRlbUNsaWNrKGNscykge1xuICAgICAgICBpZiAoY2xzLmluY2x1ZGVzKCduZW8tdHJlZWxpc3QtY29sbGFwc2UtYWxsLWljb24nKSkge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUFsbCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5leHBhbmRBbGwoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVHJlZUxpc3QpO1xuXG5leHBvcnQge1RyZWVMaXN0IGFzIGRlZmF1bHR9OyJdLCJzb3VyY2VSb290IjoiIn0=