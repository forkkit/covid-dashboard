self["webpackChunk"](["vendors~chunks/examples-form-field-trigger-copyToClipboard-app"],{

/***/ "./node_modules/neo.mjs/examples/form/field/trigger/copyToClipboard/MainContainer.mjs":
/*!********************************************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/form/field/trigger/copyToClipboard/MainContainer.mjs ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/form/field/CheckBox.mjs */ "./node_modules/neo.mjs/src/form/field/CheckBox.mjs");
/* harmony import */ var _ConfigurationViewport_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ConfigurationViewport.mjs */ "./node_modules/neo.mjs/examples/ConfigurationViewport.mjs");
/* harmony import */ var _src_form_field_trigger_CopyToClipboard_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/form/field/trigger/CopyToClipboard.mjs */ "./node_modules/neo.mjs/src/form/field/trigger/CopyToClipboard.mjs");
/* harmony import */ var _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../src/form/field/Number.mjs */ "./node_modules/neo.mjs/src/form/field/Number.mjs");
/* harmony import */ var _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../src/form/field/Radio.mjs */ "./node_modules/neo.mjs/src/form/field/Radio.mjs");
/* harmony import */ var _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../src/form/field/Text.mjs */ "./node_modules/neo.mjs/src/form/field/Text.mjs");







/**
 * @class TestApp.MainContainer
 * @extends Neo.examples.ConfigurationViewport
 */
class MainContainer extends _ConfigurationViewport_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        className: 'TestApp.MainContainer',
        ntype    : 'main-container',

        autoMount           : true,
        configItemLabelWidth: 160,
        layout              : {ntype: 'hbox', align: 'stretch'}
    }}

    createConfigurationComponents() {
        let me = this;

        return [{
            module   : _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            checked  : me.exampleComponent.showOnHover,
            labelText: 'showOnHover',
            listeners: {change: me.onConfigChange.bind(me, 'showOnHover')}
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            checked       : me.exampleComponent.labelPosition === 'top',
            hideValueLabel: false,
            labelText     : 'labelPosition',
            listeners     : {change: me.onRadioChange.bind(me, 'labelPosition', 'top')},
            name          : 'labelPosition',
            style         : {marginTop: '10px'},
            valueLabelText: 'top'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            checked       : me.exampleComponent.labelPosition === 'right',
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onRadioChange.bind(me, 'labelPosition', 'right')},
            name          : 'labelPosition',
            valueLabelText: 'right'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            checked       : me.exampleComponent.labelPosition === 'bottom',
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onRadioChange.bind(me, 'labelPosition', 'bottom')},
            name          : 'labelPosition',
            valueLabelText: 'bottom'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            checked       : me.exampleComponent.labelPosition === 'left',
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onRadioChange.bind(me, 'labelPosition', 'left')},
            name          : 'labelPosition',
            valueLabelText: 'left'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            checked       : me.exampleComponent.labelPosition === 'inline',
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onRadioChange.bind(me, 'labelPosition', 'inline')},
            name          : 'labelPosition',
            valueLabelText: 'inline'
        }, {
            module   : _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
            labelText: 'labelText',
            listeners: {change: me.onConfigChange.bind(me, 'labelText')},
            style    : {marginTop: '10px'},
            value    : me.exampleComponent.labelText
        }, {
            module   : _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            labelText: 'labelWidth',
            listeners: {change: me.onConfigChange.bind(me, 'labelWidth')},
            maxValue : 200,
            minValue : 50,
            stepSize : 5,
            value    : me.exampleComponent.labelWidth
        }, {
            module   : _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
            clearable: true,
            labelText: 'placeholderText',
            listeners: {change: me.onConfigChange.bind(me, 'placeholderText')},
            value    : me.exampleComponent.placeholderText
        }, {
            module   : _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            checked  : me.exampleComponent.required,
            labelText: 'required',
            listeners: {change: me.onConfigChange.bind(me, 'required')},
            style    : {marginTop: '10px'}
        }, {
            module   : _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            labelText: 'width',
            listeners: {change: me.onConfigChange.bind(me, 'width')},
            maxValue : 300,
            minValue : 50,
            stepSize : 5,
            style    : {marginTop: '10px'},
            value    : me.exampleComponent.width
        }];
    }

    createExampleComponent() {
        return Neo.create(_src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_5__["default"], {
            autoRender : false,
            clearable  : true,
            showOnHover: true,
            labelText  : 'Label',
            labelWidth : 70,
            triggers   : [
                _src_form_field_trigger_CopyToClipboard_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]
            ],
            value      : 'Hello World',
            width      : 200
        });
    }
}

Neo.applyClassConfig(MainContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/form/field/trigger/copyToClipboard/app.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/form/field/trigger/copyToClipboard/app.mjs ***!
  \**********************************************************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainContainer.mjs */ "./node_modules/neo.mjs/examples/form/field/trigger/copyToClipboard/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'examples/form/field/trigger/copyToClipboard',
    mainView: _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'TestApp'
});



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/CheckBox.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/CheckBox.mjs ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CheckBox; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/form/field/Base.mjs");


/**
 * @class Neo.form.field.CheckBox
 * @extends Neo.form.field.Base
 */
class CheckBox extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.CheckBox'
         * @protected
         */
        className: 'Neo.form.field.CheckBox',
        /**
         * @member {String} ntype='checkboxfield'
         * @protected
         */
        ntype: 'checkboxfield',
        /**
         * @member {Boolean} checked_=false
         */
        checked_: false,
        /**
         * @member {Array} cls=['neo-checkboxfield']
         */
        cls: ['neo-checkboxfield'],
        /**
         * @member {Boolean} hideLabel_=false
         */
        hideLabel_: false,
        /**
         * @member {Boolean} hideValueLabel_=false
         */
        hideValueLabel_: true,
        /**
         * @member {String} inputType_='checkbox'
         */
        inputType_: 'checkbox',
        /**
         * @member {String} labelText_='LabelText'
         */
        labelText_: 'LabelText',
        /**
         * defaults to px
         * @member {Number|String} labelWidth_=150
         */
        labelWidth_: 150,
        /**
         * @member {String} The name (group) of the input dom node
         */
        name_: '',
        /**
         * @member {String} valueLabelText_='ValueLabel'
         */
        valueLabelText_: 'ValueLabel',
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            cn: [{
                tag: 'label',
                cls: ['neo-checkbox-label']
            }, {
                tag: 'input',
                cls: ['neo-checkbox-input']
            }, {
                tag: 'label',
                cls: ['neo-checkbox-value-label']
            }]
        }
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me           = this,
            domListeners = Neo.clone(me.domListeners, true),
            vdom         = me.vdom,
            inputEl      = vdom.cn[1],
            valueLabel   = vdom.cn[2];

        inputEl.id = valueLabel.for = me.id + '-input';
        me.vdom = vdom;

        domListeners.push({
            change: {
                fn   : me.onInputValueChange,
                scope: me
            }
        });

        me.domListeners = domListeners;
    }

    /**
     *
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetChecked(value, oldValue) {
        let me   = this,
            vdom = me.vdom;

        vdom.cn[1].checked = value;
        me.vdom = vdom;

        if (oldValue !== undefined) {
            me.fire('change', {
                component: me,
                oldValue : oldValue,
                value    : value
            });
        }
    }

    /**
     * Triggered after the hideLabel config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetHideLabel(value, oldValue) {
        let vdom = this.vdom;

        vdom.cn[0].removeDom = value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the hideLabelValue config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetHideValueLabel(value, oldValue) {
        let vdom = this.vdom;

        vdom.cn[2].removeDom = value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the inputType config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetInputType(value, oldValue) {
        let vdom = this.vdom;

        vdom.cn[1].type = value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the labelText config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetLabelText(value, oldValue) {
        let vdom = this.vdom;

        vdom.cn[0].innerHTML = value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the labelWidth config got changed
     * @param {Number|String} value
     * @param {Number|String} oldValue
     * @protected
     */
    afterSetLabelWidth(value, oldValue) {
        let me   = this,
            vdom = me.vdom;

        if (!me.hideLabel) {
            vdom.cn[0].width = value;
            me.vdom = vdom;
        }
    }

    /**
     * Triggered after the name config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetName(value, oldValue) {
        let vdom = this.vdom;

        vdom.cn[1].name = value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the value config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetValue(value, oldValue) {
        if (value) {
            let vdom = this.vdom;

            vdom.cn[1].value = value;
            this.vdom = vdom;
        }

        super.afterSetValue(value, oldValue);
    }

    /**
     * Triggered after the valueLabel config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetValueLabelText(value, oldValue) {
        let me   = this,
            vdom = me.vdom;

        if (!me.hideValueLabel) {
            vdom.cn[2].innerHTML = value;
            me.vdom = vdom;
        }
    }

    /**
     * Gets triggered when a user checks a checkbox input.
     * @param {Object} data
     */
    onInputValueChange(data) {
        let me      = this,
            checked = data.target.checked;

        me._checked = checked; // silent update

        // keep the vdom & vnode in sync for future updates
        me.vdom.cn[1].checked = checked;
        me.vnode.childNodes[me.hideLabel ? 0 : 1].attributes.checked = checked + '';

        me.fire('change', {
            component: me,
            oldValue : !checked,
            value    : checked
        });
    }
}

Neo.applyClassConfig(CheckBox);



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/Radio.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/Radio.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Radio; });
/* harmony import */ var _CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckBox.mjs */ "./node_modules/neo.mjs/src/form/field/CheckBox.mjs");
/* harmony import */ var _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../manager/Component.mjs */ "./node_modules/neo.mjs/src/manager/Component.mjs");



/**
 * @class Neo.form.field.Radio
 * @extends Neo.form.field.CheckBox
 */
class Radio extends _CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.Radio'
         * @protected
         */
        className: 'Neo.form.field.Radio',
        /**
         * @member {String} ntype='radiofield'
         * @protected
         */
        ntype: 'radiofield',
        /**
         * @member {Array} cls=['neo-radiofield']
         */
        cls: ['neo-radiofield'],
        /**
         * @member {String} inputType='radio'
         */
        inputType: 'radio',
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            cn: [{
                tag: 'label',
                cls: ['neo-radio-label']
            }, {
                tag: 'input',
                cls: ['neo-radio-input']
            }, {
                tag: 'label',
                cls: ['neo-radio-value-label']
            }]
        }
    }}

    /**
     * Triggered after the checked config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetChecked(value, oldValue) {
        super.afterSetChecked(value, oldValue);

        // update radios with the same name to be unchecked
        if (value) {
            this.uncheckGroupItems();
        }
    }

    /**
     * Gets triggered when a user checks a radio input.
     * @param {Object} data
     */
    onInputValueChange(data) {
        super.onInputValueChange(data);
        this.uncheckGroupItems();
    }

    /**
     * Radios do not fire a change event for "uncheck", so we need to iterate over other radios with the same name.
     */
    uncheckGroupItems() {
        let me = this,
            radios;

        // discuss: we could limit this to radios inside the same form, IF a top level form is used
        radios = _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].find({
            ntype: 'radiofield',
            name : me.name
        });

        radios.forEach(item => {
            if (item.id !== me.id && item._checked) {
                item._checked = false; // silent update

                // keep the vdom & vnode in sync for future updates
                item.vdom.cn[1].checked = false;

                if (item.vnode) {
                    item.vnode.childNodes[me.hideLabel ? 0 : 1].attributes.checked = 'false';
                }

                item.fire('change', {
                    component: me,
                    oldValue : true,
                    value    : false
                });
            }
        });
    }
}

Neo.applyClassConfig(Radio);



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/trigger/CopyToClipboard.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/trigger/CopyToClipboard.mjs ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CopyToClipboard; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/form/field/trigger/Base.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * Copy to clipboard Trigger to copy the input value of TextFields or subclasses to clipboard.
 * @class Neo.form.field.trigger.CopyToClipboard
 * @extends Neo.form.field.trigger.Base
 */
class CopyToClipboard extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.trigger.CopyToClipboard'
         * @protected
         */
        className: 'Neo.form.field.trigger.CopyToClipboard',
        /**
         * @member {String} ntype='trigger-copytoclipboard'
         * @protected
         */
        ntype: 'trigger-copytoclipboard',
        /**
         * @member {String[]} cls=['neo-field-trigger', 'neo-trigger-clipboard']
         */
        cls: ['neo-field-trigger', 'neo-trigger-clipboard'],
        /**
         * @member {String|null} iconCls='fa fa-clipboard'
         */
        iconCls: 'fa fa-clipboard',
        /**
         * @member {Boolean} showOnHover=true
         */
        showOnHover: true,
        /**
         * Internal flag used by field.getTrigger()
         * @member {String} type='copytoclipboard'
         * @protected
         */
        type: 'copyToClipboard',
        /**
         * @member {Number} weight_=21
         */
        weight: 21
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        me.field.on({
            change     : me.onFieldChange,
            constructed: me.onFieldChange,
            scope      : me
        });

        me.hidden = me.getHiddenState();
    }

    /**
     * Triggered after the hidden config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetHidden(value) {
        let cls = this.cls;
        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"][value? 'add' : 'remove'](cls, 'neo-is-hidden');
        this.cls = cls;
    }

    /**
     *
     * @returns {Boolean} true in case the trigger should be hidden
     */
    getHiddenState() {
        return !this.field.value || this.field.value.length === 0;
    }

    /**
     *
     * @param {Object} opts
     */
    onFieldChange(opts) {
        this.hidden = this.getHiddenState();
    }

    onTriggerClick(data) {
        Neo.main.DomAccess.selectNode({
            id: this.field.getInputEl().id
        }).then(function(data) {
            Neo.main.DomAccess.execCommand({
                command: 'copy'
            });
        });
    }
}

Neo.applyClassConfig(CopyToClipboard);



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9mb3JtL2ZpZWxkL3RyaWdnZXIvY29weVRvQ2xpcGJvYXJkL01haW5Db250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL2Zvcm0vZmllbGQvdHJpZ2dlci9jb3B5VG9DbGlwYm9hcmQvYXBwLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9DaGVja0JveC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2Zvcm0vZmllbGQvUmFkaW8ubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL3RyaWdnZXIvQ29weVRvQ2xpcGJvYXJkLm1qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnRjtBQUNMO0FBQ29CO0FBQ2pCO0FBQ0Q7QUFDRDs7QUFFNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsa0VBQXFCO0FBQ2pELHdCQUF3QjtBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixvRUFBUTtBQUMvQjtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLFNBQVM7QUFDVCw0QkFBNEIsaUVBQUs7QUFDakM7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDBEQUEwRDtBQUN2RjtBQUNBLDZCQUE2QixrQkFBa0I7QUFDL0M7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCLGlFQUFLO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw0REFBNEQ7QUFDekY7QUFDQTtBQUNBLFNBQVM7QUFDVCw0QkFBNEIsaUVBQUs7QUFDakM7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDZEQUE2RDtBQUMxRjtBQUNBO0FBQ0EsU0FBUztBQUNULDRCQUE0QixpRUFBSztBQUNqQztBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsMkRBQTJEO0FBQ3hGO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCLGlFQUFLO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw2REFBNkQ7QUFDMUY7QUFDQTtBQUNBLFNBQVM7QUFDVCx1QkFBdUIsZ0VBQVM7QUFDaEM7QUFDQSx3QkFBd0IsZ0RBQWdEO0FBQ3hFLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQSxTQUFTO0FBQ1QsdUJBQXVCLGtFQUFXO0FBQ2xDO0FBQ0Esd0JBQXdCLGlEQUFpRDtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCx1QkFBdUIsZ0VBQVM7QUFDaEM7QUFDQTtBQUNBLHdCQUF3QixzREFBc0Q7QUFDOUU7QUFDQSxTQUFTO0FBQ1QsdUJBQXVCLG9FQUFRO0FBQy9CO0FBQ0E7QUFDQSx3QkFBd0IsK0NBQStDO0FBQ3ZFLHdCQUF3QjtBQUN4QixTQUFTO0FBQ1QsdUJBQXVCLGtFQUFXO0FBQ2xDO0FBQ0Esd0JBQXdCLDRDQUE0QztBQUNwRTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsMEJBQTBCLGdFQUFTO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtRkFBc0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDNUhBO0FBQUE7QUFBQTtBQUFnRDs7QUFFaEQ7QUFDQTtBQUNBLGNBQWMsMERBQWE7QUFDM0I7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ05EO0FBQUE7QUFBQTtBQUE4Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaURBQUk7QUFDM0Isd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixNQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FB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QTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7O0FBRUEiLCJmaWxlIjoidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtZm9ybS1maWVsZC10cmlnZ2VyLWNvcHlUb0NsaXBib2FyZC1hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hlY2tCb3ggICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi8uLi9zcmMvZm9ybS9maWVsZC9DaGVja0JveC5tanMnO1xuaW1wb3J0IENvbmZpZ3VyYXRpb25WaWV3cG9ydCAgZnJvbSAnLi4vLi4vLi4vLi4vQ29uZmlndXJhdGlvblZpZXdwb3J0Lm1qcyc7XG5pbXBvcnQgQ29weVRvQ2xpcGJvYXJkVHJpZ2dlciBmcm9tICcuLi8uLi8uLi8uLi8uLi9zcmMvZm9ybS9maWVsZC90cmlnZ2VyL0NvcHlUb0NsaXBib2FyZC5tanMnO1xuaW1wb3J0IE51bWJlckZpZWxkICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3JjL2Zvcm0vZmllbGQvTnVtYmVyLm1qcyc7XG5pbXBvcnQgUmFkaW8gICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi8uLi9zcmMvZm9ybS9maWVsZC9SYWRpby5tanMnO1xuaW1wb3J0IFRleHRGaWVsZCAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3JjL2Zvcm0vZmllbGQvVGV4dC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBUZXN0QXBwLk1haW5Db250YWluZXJcbiAqIEBleHRlbmRzIE5lby5leGFtcGxlcy5Db25maWd1cmF0aW9uVmlld3BvcnRcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lciBleHRlbmRzIENvbmZpZ3VyYXRpb25WaWV3cG9ydCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6ICdUZXN0QXBwLk1haW5Db250YWluZXInLFxuICAgICAgICBudHlwZSAgICA6ICdtYWluLWNvbnRhaW5lcicsXG5cbiAgICAgICAgYXV0b01vdW50ICAgICAgICAgICA6IHRydWUsXG4gICAgICAgIGNvbmZpZ0l0ZW1MYWJlbFdpZHRoOiAxNjAsXG4gICAgICAgIGxheW91dCAgICAgICAgICAgICAgOiB7bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ31cbiAgICB9fVxuXG4gICAgY3JlYXRlQ29uZmlndXJhdGlvbkNvbXBvbmVudHMoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICBtb2R1bGUgICA6IENoZWNrQm94LFxuICAgICAgICAgICAgY2hlY2tlZCAgOiBtZS5leGFtcGxlQ29tcG9uZW50LnNob3dPbkhvdmVyLFxuICAgICAgICAgICAgbGFiZWxUZXh0OiAnc2hvd09uSG92ZXInLFxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7Y2hhbmdlOiBtZS5vbkNvbmZpZ0NoYW5nZS5iaW5kKG1lLCAnc2hvd09uSG92ZXInKX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgICAgICA6IFJhZGlvLFxuICAgICAgICAgICAgY2hlY2tlZCAgICAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQubGFiZWxQb3NpdGlvbiA9PT0gJ3RvcCcsXG4gICAgICAgICAgICBoaWRlVmFsdWVMYWJlbDogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbFRleHQgICAgIDogJ2xhYmVsUG9zaXRpb24nLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHtjaGFuZ2U6IG1lLm9uUmFkaW9DaGFuZ2UuYmluZChtZSwgJ2xhYmVsUG9zaXRpb24nLCAndG9wJyl9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgICA6ICdsYWJlbFBvc2l0aW9uJyxcbiAgICAgICAgICAgIHN0eWxlICAgICAgICAgOiB7bWFyZ2luVG9wOiAnMTBweCd9LFxuICAgICAgICAgICAgdmFsdWVMYWJlbFRleHQ6ICd0b3AnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgICAgOiBSYWRpbyxcbiAgICAgICAgICAgIGNoZWNrZWQgICAgICAgOiBtZS5leGFtcGxlQ29tcG9uZW50LmxhYmVsUG9zaXRpb24gPT09ICdyaWdodCcsXG4gICAgICAgICAgICBoaWRlVmFsdWVMYWJlbDogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbFRleHQgICAgIDogJycsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgICAgIDoge2NoYW5nZTogbWUub25SYWRpb0NoYW5nZS5iaW5kKG1lLCAnbGFiZWxQb3NpdGlvbicsICdyaWdodCcpfSxcbiAgICAgICAgICAgIG5hbWUgICAgICAgICAgOiAnbGFiZWxQb3NpdGlvbicsXG4gICAgICAgICAgICB2YWx1ZUxhYmVsVGV4dDogJ3JpZ2h0J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgIDogUmFkaW8sXG4gICAgICAgICAgICBjaGVja2VkICAgICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5sYWJlbFBvc2l0aW9uID09PSAnYm90dG9tJyxcbiAgICAgICAgICAgIGhpZGVWYWx1ZUxhYmVsOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsVGV4dCAgICAgOiAnJyxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgICAgOiB7Y2hhbmdlOiBtZS5vblJhZGlvQ2hhbmdlLmJpbmQobWUsICdsYWJlbFBvc2l0aW9uJywgJ2JvdHRvbScpfSxcbiAgICAgICAgICAgIG5hbWUgICAgICAgICAgOiAnbGFiZWxQb3NpdGlvbicsXG4gICAgICAgICAgICB2YWx1ZUxhYmVsVGV4dDogJ2JvdHRvbSdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgICAgICA6IFJhZGlvLFxuICAgICAgICAgICAgY2hlY2tlZCAgICAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQubGFiZWxQb3NpdGlvbiA9PT0gJ2xlZnQnLFxuICAgICAgICAgICAgaGlkZVZhbHVlTGFiZWw6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWxUZXh0ICAgICA6ICcnLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHtjaGFuZ2U6IG1lLm9uUmFkaW9DaGFuZ2UuYmluZChtZSwgJ2xhYmVsUG9zaXRpb24nLCAnbGVmdCcpfSxcbiAgICAgICAgICAgIG5hbWUgICAgICAgICAgOiAnbGFiZWxQb3NpdGlvbicsXG4gICAgICAgICAgICB2YWx1ZUxhYmVsVGV4dDogJ2xlZnQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgICAgOiBSYWRpbyxcbiAgICAgICAgICAgIGNoZWNrZWQgICAgICAgOiBtZS5leGFtcGxlQ29tcG9uZW50LmxhYmVsUG9zaXRpb24gPT09ICdpbmxpbmUnLFxuICAgICAgICAgICAgaGlkZVZhbHVlTGFiZWw6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWxUZXh0ICAgICA6ICcnLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHtjaGFuZ2U6IG1lLm9uUmFkaW9DaGFuZ2UuYmluZChtZSwgJ2xhYmVsUG9zaXRpb24nLCAnaW5saW5lJyl9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgICA6ICdsYWJlbFBvc2l0aW9uJyxcbiAgICAgICAgICAgIHZhbHVlTGFiZWxUZXh0OiAnaW5saW5lJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICA6IFRleHRGaWVsZCxcbiAgICAgICAgICAgIGxhYmVsVGV4dDogJ2xhYmVsVGV4dCcsXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHtjaGFuZ2U6IG1lLm9uQ29uZmlnQ2hhbmdlLmJpbmQobWUsICdsYWJlbFRleHQnKX0sXG4gICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW5Ub3A6ICcxMHB4J30sXG4gICAgICAgICAgICB2YWx1ZSAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQubGFiZWxUZXh0XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogTnVtYmVyRmllbGQsXG4gICAgICAgICAgICBsYWJlbFRleHQ6ICdsYWJlbFdpZHRoJyxcbiAgICAgICAgICAgIGxpc3RlbmVyczoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UuYmluZChtZSwgJ2xhYmVsV2lkdGgnKX0sXG4gICAgICAgICAgICBtYXhWYWx1ZSA6IDIwMCxcbiAgICAgICAgICAgIG1pblZhbHVlIDogNTAsXG4gICAgICAgICAgICBzdGVwU2l6ZSA6IDUsXG4gICAgICAgICAgICB2YWx1ZSAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQubGFiZWxXaWR0aFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICA6IFRleHRGaWVsZCxcbiAgICAgICAgICAgIGNsZWFyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGxhYmVsVGV4dDogJ3BsYWNlaG9sZGVyVGV4dCcsXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHtjaGFuZ2U6IG1lLm9uQ29uZmlnQ2hhbmdlLmJpbmQobWUsICdwbGFjZWhvbGRlclRleHQnKX0sXG4gICAgICAgICAgICB2YWx1ZSAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQucGxhY2Vob2xkZXJUZXh0XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogQ2hlY2tCb3gsXG4gICAgICAgICAgICBjaGVja2VkICA6IG1lLmV4YW1wbGVDb21wb25lbnQucmVxdWlyZWQsXG4gICAgICAgICAgICBsYWJlbFRleHQ6ICdyZXF1aXJlZCcsXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHtjaGFuZ2U6IG1lLm9uQ29uZmlnQ2hhbmdlLmJpbmQobWUsICdyZXF1aXJlZCcpfSxcbiAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpblRvcDogJzEwcHgnfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICA6IE51bWJlckZpZWxkLFxuICAgICAgICAgICAgbGFiZWxUZXh0OiAnd2lkdGgnLFxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7Y2hhbmdlOiBtZS5vbkNvbmZpZ0NoYW5nZS5iaW5kKG1lLCAnd2lkdGgnKX0sXG4gICAgICAgICAgICBtYXhWYWx1ZSA6IDMwMCxcbiAgICAgICAgICAgIG1pblZhbHVlIDogNTAsXG4gICAgICAgICAgICBzdGVwU2l6ZSA6IDUsXG4gICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW5Ub3A6ICcxMHB4J30sXG4gICAgICAgICAgICB2YWx1ZSAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQud2lkdGhcbiAgICAgICAgfV07XG4gICAgfVxuXG4gICAgY3JlYXRlRXhhbXBsZUNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIE5lby5jcmVhdGUoVGV4dEZpZWxkLCB7XG4gICAgICAgICAgICBhdXRvUmVuZGVyIDogZmFsc2UsXG4gICAgICAgICAgICBjbGVhcmFibGUgIDogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dPbkhvdmVyOiB0cnVlLFxuICAgICAgICAgICAgbGFiZWxUZXh0ICA6ICdMYWJlbCcsXG4gICAgICAgICAgICBsYWJlbFdpZHRoIDogNzAsXG4gICAgICAgICAgICB0cmlnZ2VycyAgIDogW1xuICAgICAgICAgICAgICAgIENvcHlUb0NsaXBib2FyZFRyaWdnZXJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB2YWx1ZSAgICAgIDogJ0hlbGxvIFdvcmxkJyxcbiAgICAgICAgICAgIHdpZHRoICAgICAgOiAyMDBcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluQ29udGFpbmVyKTtcblxuZXhwb3J0IHtNYWluQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gJy4vTWFpbkNvbnRhaW5lci5tanMnO1xuXG5jb25zdCBvblN0YXJ0ID0gKCkgPT4gTmVvLmFwcCh7XG4gICAgYXBwUGF0aCA6ICdleGFtcGxlcy9mb3JtL2ZpZWxkL3RyaWdnZXIvY29weVRvQ2xpcGJvYXJkJyxcbiAgICBtYWluVmlldzogTWFpbkNvbnRhaW5lcixcbiAgICBuYW1lICAgIDogJ1Rlc3RBcHAnXG59KTtcblxuZXhwb3J0IHtvblN0YXJ0IGFzIG9uU3RhcnR9OyIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uZm9ybS5maWVsZC5DaGVja0JveFxuICogQGV4dGVuZHMgTmVvLmZvcm0uZmllbGQuQmFzZVxuICovXG5jbGFzcyBDaGVja0JveCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZm9ybS5maWVsZC5DaGVja0JveCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmZvcm0uZmllbGQuQ2hlY2tCb3gnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY2hlY2tib3hmaWVsZCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjaGVja2JveGZpZWxkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGNoZWNrZWRfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBjaGVja2VkXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gY2xzPVsnbmVvLWNoZWNrYm94ZmllbGQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1jaGVja2JveGZpZWxkJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBoaWRlTGFiZWxfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBoaWRlTGFiZWxfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGhpZGVWYWx1ZUxhYmVsXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgaGlkZVZhbHVlTGFiZWxfOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBpbnB1dFR5cGVfPSdjaGVja2JveCdcbiAgICAgICAgICovXG4gICAgICAgIGlucHV0VHlwZV86ICdjaGVja2JveCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGxhYmVsVGV4dF89J0xhYmVsVGV4dCdcbiAgICAgICAgICovXG4gICAgICAgIGxhYmVsVGV4dF86ICdMYWJlbFRleHQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogZGVmYXVsdHMgdG8gcHhcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfFN0cmluZ30gbGFiZWxXaWR0aF89MTUwXG4gICAgICAgICAqL1xuICAgICAgICBsYWJlbFdpZHRoXzogMTUwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBUaGUgbmFtZSAoZ3JvdXApIG9mIHRoZSBpbnB1dCBkb20gbm9kZVxuICAgICAgICAgKi9cbiAgICAgICAgbmFtZV86ICcnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSB2YWx1ZUxhYmVsVGV4dF89J1ZhbHVlTGFiZWwnXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZUxhYmVsVGV4dF86ICdWYWx1ZUxhYmVsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICB0YWc6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby1jaGVja2JveC1sYWJlbCddXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGFnOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgIGNsczogWyduZW8tY2hlY2tib3gtaW5wdXQnXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRhZzogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWNoZWNrYm94LXZhbHVlLWxhYmVsJ11cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSBOZW8uY2xvbmUobWUuZG9tTGlzdGVuZXJzLCB0cnVlKSxcbiAgICAgICAgICAgIHZkb20gICAgICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBpbnB1dEVsICAgICAgPSB2ZG9tLmNuWzFdLFxuICAgICAgICAgICAgdmFsdWVMYWJlbCAgID0gdmRvbS5jblsyXTtcblxuICAgICAgICBpbnB1dEVsLmlkID0gdmFsdWVMYWJlbC5mb3IgPSBtZS5pZCArICctaW5wdXQnO1xuICAgICAgICBtZS52ZG9tID0gdmRvbTtcblxuICAgICAgICBkb21MaXN0ZW5lcnMucHVzaCh7XG4gICAgICAgICAgICBjaGFuZ2U6IHtcbiAgICAgICAgICAgICAgICBmbiAgIDogbWUub25JbnB1dFZhbHVlQ2hhbmdlLFxuICAgICAgICAgICAgICAgIHNjb3BlOiBtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldENoZWNrZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgIHZkb20uY25bMV0uY2hlY2tlZCA9IHZhbHVlO1xuICAgICAgICBtZS52ZG9tID0gdmRvbTtcblxuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbWUuZmlyZSgnY2hhbmdlJywge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogbWUsXG4gICAgICAgICAgICAgICAgb2xkVmFsdWUgOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaGlkZUxhYmVsIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEhpZGVMYWJlbCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgdmRvbS5jblswXS5yZW1vdmVEb20gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGhpZGVMYWJlbFZhbHVlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEhpZGVWYWx1ZUxhYmVsKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICB2ZG9tLmNuWzJdLnJlbW92ZURvbSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaW5wdXRUeXBlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldElucHV0VHlwZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgdmRvbS5jblsxXS50eXBlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBsYWJlbFRleHQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TGFiZWxUZXh0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICB2ZG9tLmNuWzBdLmlubmVySFRNTCA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbGFiZWxXaWR0aCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldExhYmVsV2lkdGgodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgIGlmICghbWUuaGlkZUxhYmVsKSB7XG4gICAgICAgICAgICB2ZG9tLmNuWzBdLndpZHRoID0gdmFsdWU7XG4gICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbmFtZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXROYW1lKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICB2ZG9tLmNuWzFdLm5hbWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHZhbHVlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFZhbHVlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgICAgICB2ZG9tLmNuWzFdLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIuYWZ0ZXJTZXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdmFsdWVMYWJlbCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRWYWx1ZUxhYmVsVGV4dCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgaWYgKCFtZS5oaWRlVmFsdWVMYWJlbCkge1xuICAgICAgICAgICAgdmRvbS5jblsyXS5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0cmlnZ2VyZWQgd2hlbiBhIHVzZXIgY2hlY2tzIGEgY2hlY2tib3ggaW5wdXQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbklucHV0VmFsdWVDaGFuZ2UoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjaGVja2VkID0gZGF0YS50YXJnZXQuY2hlY2tlZDtcblxuICAgICAgICBtZS5fY2hlY2tlZCA9IGNoZWNrZWQ7IC8vIHNpbGVudCB1cGRhdGVcblxuICAgICAgICAvLyBrZWVwIHRoZSB2ZG9tICYgdm5vZGUgaW4gc3luYyBmb3IgZnV0dXJlIHVwZGF0ZXNcbiAgICAgICAgbWUudmRvbS5jblsxXS5jaGVja2VkID0gY2hlY2tlZDtcbiAgICAgICAgbWUudm5vZGUuY2hpbGROb2Rlc1ttZS5oaWRlTGFiZWwgPyAwIDogMV0uYXR0cmlidXRlcy5jaGVja2VkID0gY2hlY2tlZCArICcnO1xuXG4gICAgICAgIG1lLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogbWUsXG4gICAgICAgICAgICBvbGRWYWx1ZSA6ICFjaGVja2VkLFxuICAgICAgICAgICAgdmFsdWUgICAgOiBjaGVja2VkXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ2hlY2tCb3gpO1xuXG5leHBvcnQge0NoZWNrQm94IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDaGVja0JveCAgICAgICAgIGZyb20gJy4vQ2hlY2tCb3gubWpzJztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gJy4uLy4uL21hbmFnZXIvQ29tcG9uZW50Lm1qcydcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmZvcm0uZmllbGQuUmFkaW9cbiAqIEBleHRlbmRzIE5lby5mb3JtLmZpZWxkLkNoZWNrQm94XG4gKi9cbmNsYXNzIFJhZGlvIGV4dGVuZHMgQ2hlY2tCb3gge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZm9ybS5maWVsZC5SYWRpbydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmZvcm0uZmllbGQuUmFkaW8nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ncmFkaW9maWVsZCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdyYWRpb2ZpZWxkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBjbHM9WyduZW8tcmFkaW9maWVsZCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLXJhZGlvZmllbGQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gaW5wdXRUeXBlPSdyYWRpbydcbiAgICAgICAgICovXG4gICAgICAgIGlucHV0VHlwZTogJ3JhZGlvJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICB0YWc6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby1yYWRpby1sYWJlbCddXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGFnOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgIGNsczogWyduZW8tcmFkaW8taW5wdXQnXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRhZzogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLXJhZGlvLXZhbHVlLWxhYmVsJ11cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBjaGVja2VkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0Q2hlY2tlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgc3VwZXIuYWZ0ZXJTZXRDaGVja2VkKHZhbHVlLCBvbGRWYWx1ZSk7XG5cbiAgICAgICAgLy8gdXBkYXRlIHJhZGlvcyB3aXRoIHRoZSBzYW1lIG5hbWUgdG8gYmUgdW5jaGVja2VkXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy51bmNoZWNrR3JvdXBJdGVtcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0cmlnZ2VyZWQgd2hlbiBhIHVzZXIgY2hlY2tzIGEgcmFkaW8gaW5wdXQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbklucHV0VmFsdWVDaGFuZ2UoZGF0YSkge1xuICAgICAgICBzdXBlci5vbklucHV0VmFsdWVDaGFuZ2UoZGF0YSk7XG4gICAgICAgIHRoaXMudW5jaGVja0dyb3VwSXRlbXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSYWRpb3MgZG8gbm90IGZpcmUgYSBjaGFuZ2UgZXZlbnQgZm9yIFwidW5jaGVja1wiLCBzbyB3ZSBuZWVkIHRvIGl0ZXJhdGUgb3ZlciBvdGhlciByYWRpb3Mgd2l0aCB0aGUgc2FtZSBuYW1lLlxuICAgICAqL1xuICAgIHVuY2hlY2tHcm91cEl0ZW1zKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgcmFkaW9zO1xuXG4gICAgICAgIC8vIGRpc2N1c3M6IHdlIGNvdWxkIGxpbWl0IHRoaXMgdG8gcmFkaW9zIGluc2lkZSB0aGUgc2FtZSBmb3JtLCBJRiBhIHRvcCBsZXZlbCBmb3JtIGlzIHVzZWRcbiAgICAgICAgcmFkaW9zID0gQ29tcG9uZW50TWFuYWdlci5maW5kKHtcbiAgICAgICAgICAgIG50eXBlOiAncmFkaW9maWVsZCcsXG4gICAgICAgICAgICBuYW1lIDogbWUubmFtZVxuICAgICAgICB9KTtcblxuICAgICAgICByYWRpb3MuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmlkICE9PSBtZS5pZCAmJiBpdGVtLl9jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5fY2hlY2tlZCA9IGZhbHNlOyAvLyBzaWxlbnQgdXBkYXRlXG5cbiAgICAgICAgICAgICAgICAvLyBrZWVwIHRoZSB2ZG9tICYgdm5vZGUgaW4gc3luYyBmb3IgZnV0dXJlIHVwZGF0ZXNcbiAgICAgICAgICAgICAgICBpdGVtLnZkb20uY25bMV0uY2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0udm5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS52bm9kZS5jaGlsZE5vZGVzW21lLmhpZGVMYWJlbCA/IDAgOiAxXS5hdHRyaWJ1dGVzLmNoZWNrZWQgPSAnZmFsc2UnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGl0ZW0uZmlyZSgnY2hhbmdlJywge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IG1lLFxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZSA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICAgIDogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhSYWRpbyk7XG5cbmV4cG9ydCB7UmFkaW8gYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgICAgIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IE5lb0FycmF5IGZyb20gJy4uLy4uLy4uL3V0aWwvQXJyYXkubWpzJztcblxuLyoqXG4gKiBDb3B5IHRvIGNsaXBib2FyZCBUcmlnZ2VyIHRvIGNvcHkgdGhlIGlucHV0IHZhbHVlIG9mIFRleHRGaWVsZHMgb3Igc3ViY2xhc3NlcyB0byBjbGlwYm9hcmQuXG4gKiBAY2xhc3MgTmVvLmZvcm0uZmllbGQudHJpZ2dlci5Db3B5VG9DbGlwYm9hcmRcbiAqIEBleHRlbmRzIE5lby5mb3JtLmZpZWxkLnRyaWdnZXIuQmFzZVxuICovXG5jbGFzcyBDb3B5VG9DbGlwYm9hcmQgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmZvcm0uZmllbGQudHJpZ2dlci5Db3B5VG9DbGlwYm9hcmQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5mb3JtLmZpZWxkLnRyaWdnZXIuQ29weVRvQ2xpcGJvYXJkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3RyaWdnZXItY29weXRvY2xpcGJvYXJkJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3RyaWdnZXItY29weXRvY2xpcGJvYXJkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tZmllbGQtdHJpZ2dlcicsICduZW8tdHJpZ2dlci1jbGlwYm9hcmQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1maWVsZC10cmlnZ2VyJywgJ25lby10cmlnZ2VyLWNsaXBib2FyZCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGljb25DbHM9J2ZhIGZhLWNsaXBib2FyZCdcbiAgICAgICAgICovXG4gICAgICAgIGljb25DbHM6ICdmYSBmYS1jbGlwYm9hcmQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hvd09uSG92ZXI9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgc2hvd09uSG92ZXI6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnRlcm5hbCBmbGFnIHVzZWQgYnkgZmllbGQuZ2V0VHJpZ2dlcigpXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gdHlwZT0nY29weXRvY2xpcGJvYXJkJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB0eXBlOiAnY29weVRvQ2xpcGJvYXJkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gd2VpZ2h0Xz0yMVxuICAgICAgICAgKi9cbiAgICAgICAgd2VpZ2h0OiAyMVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmZpZWxkLm9uKHtcbiAgICAgICAgICAgIGNoYW5nZSAgICAgOiBtZS5vbkZpZWxkQ2hhbmdlLFxuICAgICAgICAgICAgY29uc3RydWN0ZWQ6IG1lLm9uRmllbGRDaGFuZ2UsXG4gICAgICAgICAgICBzY29wZSAgICAgIDogbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuaGlkZGVuID0gbWUuZ2V0SGlkZGVuU3RhdGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGhpZGRlbiBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEhpZGRlbih2YWx1ZSkge1xuICAgICAgICBsZXQgY2xzID0gdGhpcy5jbHM7XG4gICAgICAgIE5lb0FycmF5W3ZhbHVlPyAnYWRkJyA6ICdyZW1vdmUnXShjbHMsICduZW8taXMtaGlkZGVuJyk7XG4gICAgICAgIHRoaXMuY2xzID0gY2xzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSB0aGUgdHJpZ2dlciBzaG91bGQgYmUgaGlkZGVuXG4gICAgICovXG4gICAgZ2V0SGlkZGVuU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5maWVsZC52YWx1ZSB8fCB0aGlzLmZpZWxkLnZhbHVlLmxlbmd0aCA9PT0gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICovXG4gICAgb25GaWVsZENoYW5nZShvcHRzKSB7XG4gICAgICAgIHRoaXMuaGlkZGVuID0gdGhpcy5nZXRIaWRkZW5TdGF0ZSgpO1xuICAgIH1cblxuICAgIG9uVHJpZ2dlckNsaWNrKGRhdGEpIHtcbiAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLnNlbGVjdE5vZGUoe1xuICAgICAgICAgICAgaWQ6IHRoaXMuZmllbGQuZ2V0SW5wdXRFbCgpLmlkXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLmV4ZWNDb21tYW5kKHtcbiAgICAgICAgICAgICAgICBjb21tYW5kOiAnY29weSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENvcHlUb0NsaXBib2FyZCk7XG5cbmV4cG9ydCB7Q29weVRvQ2xpcGJvYXJkIGFzIGRlZmF1bHR9OyJdLCJzb3VyY2VSb290IjoiIn0=