self["webpackChunk"](["vendors~chunks/examples-form-field-number-app"],{

/***/ "./node_modules/neo.mjs/examples/form/field/number/MainContainer.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/form/field/number/MainContainer.mjs ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/form/field/CheckBox.mjs */ "./node_modules/neo.mjs/src/form/field/CheckBox.mjs");
/* harmony import */ var _ConfigurationViewport_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ConfigurationViewport.mjs */ "./node_modules/neo.mjs/examples/ConfigurationViewport.mjs");
/* harmony import */ var _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/form/field/Number.mjs */ "./node_modules/neo.mjs/src/form/field/Number.mjs");
/* harmony import */ var _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/form/field/Radio.mjs */ "./node_modules/neo.mjs/src/form/field/Radio.mjs");
/* harmony import */ var _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/form/field/Text.mjs */ "./node_modules/neo.mjs/src/form/field/Text.mjs");






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
            checked  : me.exampleComponent.clearable,
            labelText: 'clearable',
            listeners: {change: me.onConfigChange.bind(me, 'clearable')}
        }, {
            module   : _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            checked  : me.exampleComponent.clearToOriginalValue,
            labelText: 'clearToOriginalValue',
            listeners: {change: me.onConfigChange.bind(me, 'clearToOriginalValue')},
            style    : {marginTop: '10px'}
        }, {
            module   : _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            checked  : me.exampleComponent.hideLabel,
            labelText: 'hideLabel',
            listeners: {change: me.onConfigChange.bind(me, 'hideLabel')},
            style    : {marginTop: '10px'}
        }, {
            module   : _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            labelText: 'labelText',
            listeners: {change: me.onConfigChange.bind(me, 'labelText')},
            style    : {marginTop: '10px'},
            value    : me.exampleComponent.labelText
        }, {
            module   : _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            labelText: 'labelWidth',
            listeners: {change: me.onConfigChange.bind(me, 'labelWidth')},
            maxValue : 200,
            minValue : 50,
            stepSize : 10,
            value    : me.exampleComponent.labelWidth
        }, {
            module   : _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            labelText: 'maxValue',
            listeners: {change: me.onConfigChange.bind(me, 'maxValue')},
            maxValue : 100,
            minValue : 5,
            value    : me.exampleComponent.maxValue
        }, {
            module   : _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            labelText: 'minValue',
            listeners: {change: me.onConfigChange.bind(me, 'minValue')},
            maxValue : 50,
            minValue : -100,
            value    : me.exampleComponent.minValue
        }, {
            module   : _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            labelText: 'placeholderText',
            listeners: {change: me.onConfigChange.bind(me, 'placeholderText')},
            value    : me.exampleComponent.placeholderText
        }, {
            module   : _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            labelText: 'stepSize',
            listeners: {change: me.onConfigChange.bind(me, 'stepSize')},
            maxValue : 10,
            minValue : 1,
            value    : me.exampleComponent.stepSize
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            checked       : me.exampleComponent.triggerPosition === 'right',
            hideValueLabel: false,
            labelText     : 'triggerPosition',
            listeners     : {change: me.onRadioChange.bind(me, 'triggerPosition', 'right')},
            name          : 'triggerPosition',
            style         : {marginTop: '10px'},
            valueLabelText: 'right'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            checked       : me.exampleComponent.triggerPosition === 'sides',
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onRadioChange.bind(me, 'triggerPosition', 'sides')},
            name          : 'triggerPosition',
            valueLabelText: 'sides'
        }, {
            module   : _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            checked  : me.exampleComponent.useSpinButtons,
            style    : {marginTop: '10px'},
            labelText: 'useSpinButtons',
            listeners: {change: me.onConfigChange.bind(me, 'useSpinButtons')}
        }, {
            module   : _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
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
        return Neo.create(_src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_2__["default"], {
            autoRender          : false,
            clearToOriginalValue: true,
            labelText           : 'Label',
            labelWidth          : 70,
            value               : 20,
            width               : 200
        });
    }
}

Neo.applyClassConfig(MainContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/form/field/number/app.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/form/field/number/app.mjs ***!
  \*****************************************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainContainer.mjs */ "./node_modules/neo.mjs/examples/form/field/number/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'examples/form/field/number/',
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



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9mb3JtL2ZpZWxkL251bWJlci9NYWluQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9mb3JtL2ZpZWxkL251bWJlci9hcHAubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL0NoZWNrQm94Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9SYWRpby5tanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRFO0FBQ0w7QUFDRztBQUNEO0FBQ0Q7O0FBRXhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtFQUFxQjtBQUNqRCx3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsb0VBQVE7QUFDL0I7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixTQUFTO0FBQ1QsdUJBQXVCLG9FQUFRO0FBQy9CO0FBQ0E7QUFDQSx3QkFBd0IsMkRBQTJEO0FBQ25GLHdCQUF3QjtBQUN4QixTQUFTO0FBQ1QsdUJBQXVCLG9FQUFRO0FBQy9CO0FBQ0E7QUFDQSx3QkFBd0IsZ0RBQWdEO0FBQ3hFLHdCQUF3QjtBQUN4QixTQUFTO0FBQ1QsdUJBQXVCLGdFQUFTO0FBQ2hDO0FBQ0Esd0JBQXdCLGdEQUFnRDtBQUN4RSx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0EsU0FBUztBQUNULHVCQUF1QixrRUFBVztBQUNsQztBQUNBLHdCQUF3QixpREFBaUQ7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsdUJBQXVCLGtFQUFXO0FBQ2xDO0FBQ0Esd0JBQXdCLCtDQUErQztBQUN2RTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsdUJBQXVCLGtFQUFXO0FBQ2xDO0FBQ0Esd0JBQXdCLCtDQUErQztBQUN2RTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsdUJBQXVCLGdFQUFTO0FBQ2hDO0FBQ0Esd0JBQXdCLHNEQUFzRDtBQUM5RTtBQUNBLFNBQVM7QUFDVCx1QkFBdUIsa0VBQVc7QUFDbEM7QUFDQSx3QkFBd0IsK0NBQStDO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw0QkFBNEIsaUVBQUs7QUFDakM7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDhEQUE4RDtBQUMzRjtBQUNBLDZCQUE2QixrQkFBa0I7QUFDL0M7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCLGlFQUFLO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw4REFBOEQ7QUFDM0Y7QUFDQTtBQUNBLFNBQVM7QUFDVCx1QkFBdUIsb0VBQVE7QUFDL0I7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0Esd0JBQXdCO0FBQ3hCLFNBQVM7QUFDVCx1QkFBdUIsa0VBQVc7QUFDbEM7QUFDQSx3QkFBd0IsNENBQTRDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSwwQkFBMEIsa0VBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDL0hBO0FBQUE7QUFBQTtBQUFnRDs7QUFFaEQ7QUFDQTtBQUNBLGNBQWMsMERBQWE7QUFDM0I7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ05EO0FBQUE7QUFBQTtBQUE4Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaURBQUk7QUFDM0Isd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixNQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCLGVBQWUsY0FBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCOztBQUU5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNoUUE7QUFBQTtBQUFBO0FBQUE7QUFBOEM7QUFDWTs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscURBQVE7QUFDNUIsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixNQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLDhEQUFnQjtBQUNqQztBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBIiwiZmlsZSI6InZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWZvcm0tZmllbGQtbnVtYmVyLWFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGVja0JveCAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL2Zvcm0vZmllbGQvQ2hlY2tCb3gubWpzJztcbmltcG9ydCBDb25maWd1cmF0aW9uVmlld3BvcnQgZnJvbSAnLi4vLi4vLi4vQ29uZmlndXJhdGlvblZpZXdwb3J0Lm1qcyc7XG5pbXBvcnQgTnVtYmVyRmllbGQgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL3NyYy9mb3JtL2ZpZWxkL051bWJlci5tanMnO1xuaW1wb3J0IFJhZGlvICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9zcmMvZm9ybS9maWVsZC9SYWRpby5tanMnO1xuaW1wb3J0IFRleHRGaWVsZCAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9zcmMvZm9ybS9maWVsZC9UZXh0Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFRlc3RBcHAuTWFpbkNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmV4YW1wbGVzLkNvbmZpZ3VyYXRpb25WaWV3cG9ydFxuICovXG5jbGFzcyBNYWluQ29udGFpbmVyIGV4dGVuZHMgQ29uZmlndXJhdGlvblZpZXdwb3J0IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogJ1Rlc3RBcHAuTWFpbkNvbnRhaW5lcicsXG4gICAgICAgIG50eXBlICAgIDogJ21haW4tY29udGFpbmVyJyxcblxuICAgICAgICBhdXRvTW91bnQgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgICAgY29uZmlnSXRlbUxhYmVsV2lkdGg6IDE2MCxcbiAgICAgICAgbGF5b3V0ICAgICAgICAgICAgICA6IHtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfVxuICAgIH19XG5cbiAgICBjcmVhdGVDb25maWd1cmF0aW9uQ29tcG9uZW50cygpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICAgIG1vZHVsZSAgIDogQ2hlY2tCb3gsXG4gICAgICAgICAgICBjaGVja2VkICA6IG1lLmV4YW1wbGVDb21wb25lbnQuY2xlYXJhYmxlLFxuICAgICAgICAgICAgbGFiZWxUZXh0OiAnY2xlYXJhYmxlJyxcbiAgICAgICAgICAgIGxpc3RlbmVyczoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UuYmluZChtZSwgJ2NsZWFyYWJsZScpfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICA6IENoZWNrQm94LFxuICAgICAgICAgICAgY2hlY2tlZCAgOiBtZS5leGFtcGxlQ29tcG9uZW50LmNsZWFyVG9PcmlnaW5hbFZhbHVlLFxuICAgICAgICAgICAgbGFiZWxUZXh0OiAnY2xlYXJUb09yaWdpbmFsVmFsdWUnLFxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7Y2hhbmdlOiBtZS5vbkNvbmZpZ0NoYW5nZS5iaW5kKG1lLCAnY2xlYXJUb09yaWdpbmFsVmFsdWUnKX0sXG4gICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW5Ub3A6ICcxMHB4J31cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgOiBDaGVja0JveCxcbiAgICAgICAgICAgIGNoZWNrZWQgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5oaWRlTGFiZWwsXG4gICAgICAgICAgICBsYWJlbFRleHQ6ICdoaWRlTGFiZWwnLFxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7Y2hhbmdlOiBtZS5vbkNvbmZpZ0NoYW5nZS5iaW5kKG1lLCAnaGlkZUxhYmVsJyl9LFxuICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luVG9wOiAnMTBweCd9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogVGV4dEZpZWxkLFxuICAgICAgICAgICAgbGFiZWxUZXh0OiAnbGFiZWxUZXh0JyxcbiAgICAgICAgICAgIGxpc3RlbmVyczoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UuYmluZChtZSwgJ2xhYmVsVGV4dCcpfSxcbiAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpblRvcDogJzEwcHgnfSxcbiAgICAgICAgICAgIHZhbHVlICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5sYWJlbFRleHRcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgOiBOdW1iZXJGaWVsZCxcbiAgICAgICAgICAgIGxhYmVsVGV4dDogJ2xhYmVsV2lkdGgnLFxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7Y2hhbmdlOiBtZS5vbkNvbmZpZ0NoYW5nZS5iaW5kKG1lLCAnbGFiZWxXaWR0aCcpfSxcbiAgICAgICAgICAgIG1heFZhbHVlIDogMjAwLFxuICAgICAgICAgICAgbWluVmFsdWUgOiA1MCxcbiAgICAgICAgICAgIHN0ZXBTaXplIDogMTAsXG4gICAgICAgICAgICB2YWx1ZSAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQubGFiZWxXaWR0aFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICA6IE51bWJlckZpZWxkLFxuICAgICAgICAgICAgbGFiZWxUZXh0OiAnbWF4VmFsdWUnLFxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7Y2hhbmdlOiBtZS5vbkNvbmZpZ0NoYW5nZS5iaW5kKG1lLCAnbWF4VmFsdWUnKX0sXG4gICAgICAgICAgICBtYXhWYWx1ZSA6IDEwMCxcbiAgICAgICAgICAgIG1pblZhbHVlIDogNSxcbiAgICAgICAgICAgIHZhbHVlICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5tYXhWYWx1ZVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICA6IE51bWJlckZpZWxkLFxuICAgICAgICAgICAgbGFiZWxUZXh0OiAnbWluVmFsdWUnLFxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7Y2hhbmdlOiBtZS5vbkNvbmZpZ0NoYW5nZS5iaW5kKG1lLCAnbWluVmFsdWUnKX0sXG4gICAgICAgICAgICBtYXhWYWx1ZSA6IDUwLFxuICAgICAgICAgICAgbWluVmFsdWUgOiAtMTAwLFxuICAgICAgICAgICAgdmFsdWUgICAgOiBtZS5leGFtcGxlQ29tcG9uZW50Lm1pblZhbHVlXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogVGV4dEZpZWxkLFxuICAgICAgICAgICAgbGFiZWxUZXh0OiAncGxhY2Vob2xkZXJUZXh0JyxcbiAgICAgICAgICAgIGxpc3RlbmVyczoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UuYmluZChtZSwgJ3BsYWNlaG9sZGVyVGV4dCcpfSxcbiAgICAgICAgICAgIHZhbHVlICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5wbGFjZWhvbGRlclRleHRcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgOiBOdW1iZXJGaWVsZCxcbiAgICAgICAgICAgIGxhYmVsVGV4dDogJ3N0ZXBTaXplJyxcbiAgICAgICAgICAgIGxpc3RlbmVyczoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UuYmluZChtZSwgJ3N0ZXBTaXplJyl9LFxuICAgICAgICAgICAgbWF4VmFsdWUgOiAxMCxcbiAgICAgICAgICAgIG1pblZhbHVlIDogMSxcbiAgICAgICAgICAgIHZhbHVlICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5zdGVwU2l6ZVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgIDogUmFkaW8sXG4gICAgICAgICAgICBjaGVja2VkICAgICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC50cmlnZ2VyUG9zaXRpb24gPT09ICdyaWdodCcsXG4gICAgICAgICAgICBoaWRlVmFsdWVMYWJlbDogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbFRleHQgICAgIDogJ3RyaWdnZXJQb3NpdGlvbicsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgICAgIDoge2NoYW5nZTogbWUub25SYWRpb0NoYW5nZS5iaW5kKG1lLCAndHJpZ2dlclBvc2l0aW9uJywgJ3JpZ2h0Jyl9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgICA6ICd0cmlnZ2VyUG9zaXRpb24nLFxuICAgICAgICAgICAgc3R5bGUgICAgICAgICA6IHttYXJnaW5Ub3A6ICcxMHB4J30sXG4gICAgICAgICAgICB2YWx1ZUxhYmVsVGV4dDogJ3JpZ2h0J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgIDogUmFkaW8sXG4gICAgICAgICAgICBjaGVja2VkICAgICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC50cmlnZ2VyUG9zaXRpb24gPT09ICdzaWRlcycsXG4gICAgICAgICAgICBoaWRlVmFsdWVMYWJlbDogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbFRleHQgICAgIDogJycsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgICAgIDoge2NoYW5nZTogbWUub25SYWRpb0NoYW5nZS5iaW5kKG1lLCAndHJpZ2dlclBvc2l0aW9uJywgJ3NpZGVzJyl9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgICA6ICd0cmlnZ2VyUG9zaXRpb24nLFxuICAgICAgICAgICAgdmFsdWVMYWJlbFRleHQ6ICdzaWRlcydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgOiBDaGVja0JveCxcbiAgICAgICAgICAgIGNoZWNrZWQgIDogbWUuZXhhbXBsZUNvbXBvbmVudC51c2VTcGluQnV0dG9ucyxcbiAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpblRvcDogJzEwcHgnfSxcbiAgICAgICAgICAgIGxhYmVsVGV4dDogJ3VzZVNwaW5CdXR0b25zJyxcbiAgICAgICAgICAgIGxpc3RlbmVyczoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UuYmluZChtZSwgJ3VzZVNwaW5CdXR0b25zJyl9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogTnVtYmVyRmllbGQsXG4gICAgICAgICAgICBsYWJlbFRleHQ6ICd3aWR0aCcsXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHtjaGFuZ2U6IG1lLm9uQ29uZmlnQ2hhbmdlLmJpbmQobWUsICd3aWR0aCcpfSxcbiAgICAgICAgICAgIG1heFZhbHVlIDogMzAwLFxuICAgICAgICAgICAgbWluVmFsdWUgOiA1MCxcbiAgICAgICAgICAgIHN0ZXBTaXplIDogNSxcbiAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpblRvcDogJzEwcHgnfSxcbiAgICAgICAgICAgIHZhbHVlICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC53aWR0aFxuICAgICAgICB9XTtcbiAgICB9XG5cbiAgICBjcmVhdGVFeGFtcGxlQ29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gTmVvLmNyZWF0ZShOdW1iZXJGaWVsZCwge1xuICAgICAgICAgICAgYXV0b1JlbmRlciAgICAgICAgICA6IGZhbHNlLFxuICAgICAgICAgICAgY2xlYXJUb09yaWdpbmFsVmFsdWU6IHRydWUsXG4gICAgICAgICAgICBsYWJlbFRleHQgICAgICAgICAgIDogJ0xhYmVsJyxcbiAgICAgICAgICAgIGxhYmVsV2lkdGggICAgICAgICAgOiA3MCxcbiAgICAgICAgICAgIHZhbHVlICAgICAgICAgICAgICAgOiAyMCxcbiAgICAgICAgICAgIHdpZHRoICAgICAgICAgICAgICAgOiAyMDBcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluQ29udGFpbmVyKTtcblxuZXhwb3J0IHtNYWluQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gJy4vTWFpbkNvbnRhaW5lci5tanMnO1xuXG5jb25zdCBvblN0YXJ0ID0gKCkgPT4gTmVvLmFwcCh7XG4gICAgYXBwUGF0aCA6ICdleGFtcGxlcy9mb3JtL2ZpZWxkL251bWJlci8nLFxuICAgIG1haW5WaWV3OiBNYWluQ29udGFpbmVyLFxuICAgIG5hbWUgICAgOiAnVGVzdEFwcCdcbn0pO1xuXG5leHBvcnQge29uU3RhcnQgYXMgb25TdGFydH07IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5mb3JtLmZpZWxkLkNoZWNrQm94XG4gKiBAZXh0ZW5kcyBOZW8uZm9ybS5maWVsZC5CYXNlXG4gKi9cbmNsYXNzIENoZWNrQm94IGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5mb3JtLmZpZWxkLkNoZWNrQm94J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uZm9ybS5maWVsZC5DaGVja0JveCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjaGVja2JveGZpZWxkJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NoZWNrYm94ZmllbGQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gY2hlY2tlZF89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGNoZWNrZWRfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBjbHM9WyduZW8tY2hlY2tib3hmaWVsZCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLWNoZWNrYm94ZmllbGQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGhpZGVMYWJlbF89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGhpZGVMYWJlbF86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaGlkZVZhbHVlTGFiZWxfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBoaWRlVmFsdWVMYWJlbF86IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGlucHV0VHlwZV89J2NoZWNrYm94J1xuICAgICAgICAgKi9cbiAgICAgICAgaW5wdXRUeXBlXzogJ2NoZWNrYm94JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbGFiZWxUZXh0Xz0nTGFiZWxUZXh0J1xuICAgICAgICAgKi9cbiAgICAgICAgbGFiZWxUZXh0XzogJ0xhYmVsVGV4dCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBkZWZhdWx0cyB0byBweFxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8U3RyaW5nfSBsYWJlbFdpZHRoXz0xNTBcbiAgICAgICAgICovXG4gICAgICAgIGxhYmVsV2lkdGhfOiAxNTAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IFRoZSBuYW1lIChncm91cCkgb2YgdGhlIGlucHV0IGRvbSBub2RlXG4gICAgICAgICAqL1xuICAgICAgICBuYW1lXzogJycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHZhbHVlTGFiZWxUZXh0Xz0nVmFsdWVMYWJlbCdcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlTGFiZWxUZXh0XzogJ1ZhbHVlTGFiZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgIHRhZzogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWNoZWNrYm94LWxhYmVsJ11cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0YWc6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby1jaGVja2JveC1pbnB1dCddXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGFnOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIGNsczogWyduZW8tY2hlY2tib3gtdmFsdWUtbGFiZWwnXVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRvbUxpc3RlbmVycyA9IE5lby5jbG9uZShtZS5kb21MaXN0ZW5lcnMsIHRydWUpLFxuICAgICAgICAgICAgdmRvbSAgICAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGlucHV0RWwgICAgICA9IHZkb20uY25bMV0sXG4gICAgICAgICAgICB2YWx1ZUxhYmVsICAgPSB2ZG9tLmNuWzJdO1xuXG4gICAgICAgIGlucHV0RWwuaWQgPSB2YWx1ZUxhYmVsLmZvciA9IG1lLmlkICsgJy1pbnB1dCc7XG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuXG4gICAgICAgIGRvbUxpc3RlbmVycy5wdXNoKHtcbiAgICAgICAgICAgIGNoYW5nZToge1xuICAgICAgICAgICAgICAgIGZuICAgOiBtZS5vbklucHV0VmFsdWVDaGFuZ2UsXG4gICAgICAgICAgICAgICAgc2NvcGU6IG1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmRvbUxpc3RlbmVycyA9IGRvbUxpc3RlbmVycztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0Q2hlY2tlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgdmRvbS5jblsxXS5jaGVja2VkID0gdmFsdWU7XG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBtZS5maXJlKCdjaGFuZ2UnLCB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBtZSxcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZSA6IG9sZFZhbHVlLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogdmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBoaWRlTGFiZWwgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SGlkZUxhYmVsKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICB2ZG9tLmNuWzBdLnJlbW92ZURvbSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaGlkZUxhYmVsVmFsdWUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SGlkZVZhbHVlTGFiZWwodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgIHZkb20uY25bMl0ucmVtb3ZlRG9tID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBpbnB1dFR5cGUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SW5wdXRUeXBlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICB2ZG9tLmNuWzFdLnR5cGUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGxhYmVsVGV4dCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRMYWJlbFRleHQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgIHZkb20uY25bMF0uaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBsYWJlbFdpZHRoIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TGFiZWxXaWR0aCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgaWYgKCFtZS5oaWRlTGFiZWwpIHtcbiAgICAgICAgICAgIHZkb20uY25bMF0ud2lkdGggPSB2YWx1ZTtcbiAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBuYW1lIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldE5hbWUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgIHZkb20uY25bMV0ubmFtZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdmFsdWUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VmFsdWUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgICAgIHZkb20uY25bMV0udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5hZnRlclNldFZhbHVlKHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB2YWx1ZUxhYmVsIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFZhbHVlTGFiZWxUZXh0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICBpZiAoIW1lLmhpZGVWYWx1ZUxhYmVsKSB7XG4gICAgICAgICAgICB2ZG9tLmNuWzJdLmlubmVySFRNTCA9IHZhbHVlO1xuICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRyaWdnZXJlZCB3aGVuIGEgdXNlciBjaGVja3MgYSBjaGVja2JveCBpbnB1dC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uSW5wdXRWYWx1ZUNoYW5nZShkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNoZWNrZWQgPSBkYXRhLnRhcmdldC5jaGVja2VkO1xuXG4gICAgICAgIG1lLl9jaGVja2VkID0gY2hlY2tlZDsgLy8gc2lsZW50IHVwZGF0ZVxuXG4gICAgICAgIC8vIGtlZXAgdGhlIHZkb20gJiB2bm9kZSBpbiBzeW5jIGZvciBmdXR1cmUgdXBkYXRlc1xuICAgICAgICBtZS52ZG9tLmNuWzFdLmNoZWNrZWQgPSBjaGVja2VkO1xuICAgICAgICBtZS52bm9kZS5jaGlsZE5vZGVzW21lLmhpZGVMYWJlbCA/IDAgOiAxXS5hdHRyaWJ1dGVzLmNoZWNrZWQgPSBjaGVja2VkICsgJyc7XG5cbiAgICAgICAgbWUuZmlyZSgnY2hhbmdlJywge1xuICAgICAgICAgICAgY29tcG9uZW50OiBtZSxcbiAgICAgICAgICAgIG9sZFZhbHVlIDogIWNoZWNrZWQsXG4gICAgICAgICAgICB2YWx1ZSAgICA6IGNoZWNrZWRcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDaGVja0JveCk7XG5cbmV4cG9ydCB7Q2hlY2tCb3ggYXMgZGVmYXVsdH07IiwiaW1wb3J0IENoZWNrQm94ICAgICAgICAgZnJvbSAnLi9DaGVja0JveC5tanMnO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSAnLi4vLi4vbWFuYWdlci9Db21wb25lbnQubWpzJ1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uZm9ybS5maWVsZC5SYWRpb1xuICogQGV4dGVuZHMgTmVvLmZvcm0uZmllbGQuQ2hlY2tCb3hcbiAqL1xuY2xhc3MgUmFkaW8gZXh0ZW5kcyBDaGVja0JveCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5mb3JtLmZpZWxkLlJhZGlvJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uZm9ybS5maWVsZC5SYWRpbycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdyYWRpb2ZpZWxkJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3JhZGlvZmllbGQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGNscz1bJ25lby1yYWRpb2ZpZWxkJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tcmFkaW9maWVsZCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBpbnB1dFR5cGU9J3JhZGlvJ1xuICAgICAgICAgKi9cbiAgICAgICAgaW5wdXRUeXBlOiAncmFkaW8nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgIHRhZzogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLXJhZGlvLWxhYmVsJ11cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0YWc6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby1yYWRpby1pbnB1dCddXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGFnOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIGNsczogWyduZW8tcmFkaW8tdmFsdWUtbGFiZWwnXVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGNoZWNrZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRDaGVja2VkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBzdXBlci5hZnRlclNldENoZWNrZWQodmFsdWUsIG9sZFZhbHVlKTtcblxuICAgICAgICAvLyB1cGRhdGUgcmFkaW9zIHdpdGggdGhlIHNhbWUgbmFtZSB0byBiZSB1bmNoZWNrZWRcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnVuY2hlY2tHcm91cEl0ZW1zKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRyaWdnZXJlZCB3aGVuIGEgdXNlciBjaGVja3MgYSByYWRpbyBpbnB1dC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uSW5wdXRWYWx1ZUNoYW5nZShkYXRhKSB7XG4gICAgICAgIHN1cGVyLm9uSW5wdXRWYWx1ZUNoYW5nZShkYXRhKTtcbiAgICAgICAgdGhpcy51bmNoZWNrR3JvdXBJdGVtcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJhZGlvcyBkbyBub3QgZmlyZSBhIGNoYW5nZSBldmVudCBmb3IgXCJ1bmNoZWNrXCIsIHNvIHdlIG5lZWQgdG8gaXRlcmF0ZSBvdmVyIG90aGVyIHJhZGlvcyB3aXRoIHRoZSBzYW1lIG5hbWUuXG4gICAgICovXG4gICAgdW5jaGVja0dyb3VwSXRlbXMoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICByYWRpb3M7XG5cbiAgICAgICAgLy8gZGlzY3Vzczogd2UgY291bGQgbGltaXQgdGhpcyB0byByYWRpb3MgaW5zaWRlIHRoZSBzYW1lIGZvcm0sIElGIGEgdG9wIGxldmVsIGZvcm0gaXMgdXNlZFxuICAgICAgICByYWRpb3MgPSBDb21wb25lbnRNYW5hZ2VyLmZpbmQoe1xuICAgICAgICAgICAgbnR5cGU6ICdyYWRpb2ZpZWxkJyxcbiAgICAgICAgICAgIG5hbWUgOiBtZS5uYW1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJhZGlvcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uaWQgIT09IG1lLmlkICYmIGl0ZW0uX2NoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBpdGVtLl9jaGVja2VkID0gZmFsc2U7IC8vIHNpbGVudCB1cGRhdGVcblxuICAgICAgICAgICAgICAgIC8vIGtlZXAgdGhlIHZkb20gJiB2bm9kZSBpbiBzeW5jIGZvciBmdXR1cmUgdXBkYXRlc1xuICAgICAgICAgICAgICAgIGl0ZW0udmRvbS5jblsxXS5jaGVja2VkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbS52bm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnZub2RlLmNoaWxkTm9kZXNbbWUuaGlkZUxhYmVsID8gMCA6IDFdLmF0dHJpYnV0ZXMuY2hlY2tlZCA9ICdmYWxzZSc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaXRlbS5maXJlKCdjaGFuZ2UnLCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogbWUsXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgICAgOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFJhZGlvKTtcblxuZXhwb3J0IHtSYWRpbyBhcyBkZWZhdWx0fTsiXSwic291cmNlUm9vdCI6IiJ9