(window["brewAnalytics_bundle_jsonpfunction"] = window["brewAnalytics_bundle_jsonpfunction"] || []).push([[0],{

/***/ "./public/application.tsx":
/*!********************************!*\
  !*** ./public/application.tsx ***!
  \********************************/
/*! exports provided: renderApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderApp", function() { return renderApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/app */ "./public/components/app.tsx");



const renderApp = ({
  notifications,
  http
}, {
  navigation
}, {
  appBasePath,
  element
}) => {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_app__WEBPACK_IMPORTED_MODULE_2__["BrewAnalyticsApp"], {
    basename: appBasePath,
    notifications: notifications,
    http: http,
    navigation: navigation
  }), element);
  return () => react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(element);
};

/***/ }),

/***/ "./public/components/app.tsx":
/*!***********************************!*\
  !*** ./public/components/app.tsx ***!
  \***********************************/
/*! exports provided: BrewAnalyticsApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrewAnalyticsApp", function() { return BrewAnalyticsApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _input_form_form_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input-form/form-images */ "./public/components/input-form/form-images.tsx");
/* harmony import */ var _input_form_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input-form/form */ "./public/components/input-form/form.tsx");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common */ "./common/index.ts");







const BrewAnalyticsApp = ({
  basename,
  notifications,
  http,
  navigation
}) => {
  // Use React hooks to manage state.
  const onCoffeeClicked = arg => {
    if (arg != null) {
      setShowOptions(true);
      setCoffeeType(arg);
    } else {
      setShowOptions(false);
    }
  };

  const [showOptions, setShowOptions] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [coffeeType, setCoffeeType] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('none'); // Render the application DOM.
  // Note that `navigation.ui.TopNavMenu` is a stateful component exported on the `navigation` plugin's start contract.

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
    basename: basename
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["I18nProvider"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(navigation.ui.TopNavMenu, {
    appName: _common__WEBPACK_IMPORTED_MODULE_6__["PLUGIN_ID"],
    showSearchBar: false,
    useDefaultBehaviors: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["EuiPage"], {
    restrictWidth: 1100,
    className: "brew-analytics"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["EuiPageBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["EuiPageHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["EuiTitle"], {
    size: "l"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "brewAnalytics.helloWorldText",
    defaultMessage: "{name}",
    values: {
      name: _common__WEBPACK_IMPORTED_MODULE_6__["PLUGIN_NAME"]
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["EuiPageContent"], {
    color: "transparent",
    hasShadow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["EuiPageContentHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_input_form_form_images__WEBPACK_IMPORTED_MODULE_3__["FormImages"], {
    coffeeClicked: onCoffeeClicked
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["EuiPageContentBody"], null, showOptions ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_input_form_form__WEBPACK_IMPORTED_MODULE_4__["CoffeeInputForm"], {
    coffeeType: coffeeType,
    http: http
  }) : '')))))));
};

/***/ }),

/***/ "./public/components/input-form/form-checkboxes.tsx":
/*!**********************************************************!*\
  !*** ./public/components/input-form/form-checkboxes.tsx ***!
  \**********************************************************/
/*! exports provided: CoffeeCheckBoxForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoffeeCheckBoxForm", function() { return CoffeeCheckBoxForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);


const CoffeeCheckBoxForm = props => {
  const onCheckBoxChange = event => {
    setCheckBoxValue(event.target.checked);
    props.onAddForm('addOns', event.target.id);
  };

  const [checkBoxValue, setCheckBoxValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCheckbox"], {
    id: props.checkId,
    label: props.checkLabel,
    checked: checkBoxValue,
    onChange: onCheckBoxChange
  }));
};

/***/ }),

/***/ "./public/components/input-form/form-comments.tsx":
/*!********************************************************!*\
  !*** ./public/components/input-form/form-comments.tsx ***!
  \********************************************************/
/*! exports provided: CoffeeCommentForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoffeeCommentForm", function() { return CoffeeCommentForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);


const CoffeeCommentForm = props => {
  const onChangeComment = event => {
    setCommentValue(event.target.value);
    props.onAddForm("comments", event.target.value);
  };

  const [commentValue, setCommentValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], null, "Comments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTextArea"], {
    placeholder: "Placeholder text",
    value: commentValue,
    fullWidth: true,
    onChange: onChangeComment,
    id: "dsfds"
  }));
};

/***/ }),

/***/ "./public/components/input-form/form-date.tsx":
/*!****************************************************!*\
  !*** ./public/components/input-form/form-date.tsx ***!
  \****************************************************/
/*! exports provided: CoffeeDateForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoffeeDateForm", function() { return CoffeeDateForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);



const CoffeeDateForm = props => {
  const onDateChange = date => {
    setDateValue(date);
    console.log(date);
    props.onAddForm("roastDate", date.format('MM-DD-YYYY'));
  };

  const [dateValue, setDateValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(moment__WEBPACK_IMPORTED_MODULE_1___default()());
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], null, "Roast Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiDatePicker"], {
    selected: dateValue,
    onChange: onDateChange,
    fullWidth: true
  }));
};

/***/ }),

/***/ "./public/components/input-form/form-dropdown.tsx":
/*!********************************************************!*\
  !*** ./public/components/input-form/form-dropdown.tsx ***!
  \********************************************************/
/*! exports provided: CoffeeDropDownForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoffeeDropDownForm", function() { return CoffeeDropDownForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);


const CoffeeDropDownForm = props => {
  const typeOptions = [{
    label: 'Espresso',
    value: 'espresso'
  }, {
    label: 'Doppio',
    value: 'doppio'
  }, {
    label: 'Lungo',
    value: 'lungo'
  }, {
    label: 'Cappucino',
    value: 'cappucino'
  }, {
    label: 'Mocha',
    value: 'mocha'
  }, {
    label: 'Latte',
    value: 'latte'
  }, {
    label: 'Cortado',
    value: 'cortado'
  }, {
    label: 'Americano',
    value: 'americano'
  }];
  const roastOptions = [{
    label: 'Espresso Workshop #47 A Taste of Honey',
    value: 'espresso-workshop'
  }, {
    label: 'Panama Bambito Estate Typica',
    value: 'panama-bambito'
  }, {
    label: 'New Classic Espresso Blend',
    value: 'new-classic'
  }, {
    label: 'Espresso Monkey Blend',
    value: 'espresso-monkey'
  }, {
    label: 'Sumatra Dry Process Aceh Bebesen',
    value: 'sumatra-dry'
  }, {
    label: 'Colombia Inza Palomos del Sur',
    value: 'columbia-inza'
  }, {
    label: 'Guatemala Proyecto Xinabajul Los Chuchitos',
    value: 'guatemala-proyecto'
  }];

  const onChangeType = options => {
    setTypeSelected(options);
    const singleSelectValue = options[0].value;
    props.onAddForm("drinkType", singleSelectValue);
  };

  const onChangeRoast = options => {
    setRoastSelected(options);
    const singleSelectValue = options[0].value;
    props.onAddForm("roastName", singleSelectValue);
  };

  const [selectedTypeOptions, setTypeSelected] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [selectedRoastOptions, setRoastSelected] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], null, "Drink Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiComboBox"], {
    placeholder: "Select a single option",
    singleSelection: {
      asPlainText: true
    },
    options: typeOptions,
    fullWidth: true,
    onChange: onChangeType,
    selectedOptions: selectedTypeOptions,
    id: "drink-type-select"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], null, "Roast Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiComboBox"], {
    placeholder: "Select a single option",
    singleSelection: {
      asPlainText: true
    },
    options: roastOptions,
    fullWidth: true,
    onChange: onChangeRoast,
    selectedOptions: selectedRoastOptions,
    id: "roast-name-select"
  }));
};

/***/ }),

/***/ "./public/components/input-form/form-images.tsx":
/*!******************************************************!*\
  !*** ./public/components/input-form/form-images.tsx ***!
  \******************************************************/
/*! exports provided: FormImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormImages", function() { return FormImages; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);


const FormImages = props => {
  function coffeeClick(source) {
    props.coffeeClicked(source);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    gutterSize: "l"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCard"], {
    textAlign: "center",
    image: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "http://localhost:5601/lpm/plugins/brewAnalytics/assets/espresso.png",
      alt: "espresso"
    })),
    title: "Espresso",
    description: "",
    display: "plain",
    className: "clear-background",
    onClick: () => coffeeClick("espresso")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCard"], {
    textAlign: "center",
    image: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "http://localhost:5601/lpm/plugins/brewAnalytics/assets/coffee.png",
      alt: "coffee"
    })),
    title: "Coffee",
    description: "",
    display: "plain",
    className: "clear-background",
    onClick: () => coffeeClick("coffee")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCard"], {
    textAlign: "center",
    image: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "http://localhost:5601/lpm/plugins/brewAnalytics/assets/tea.png",
      alt: "tea"
    })),
    title: "Tea",
    description: "",
    display: "plain",
    className: "clear-background",
    onClick: () => coffeeClick("tea")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCard"], {
    textAlign: "center",
    image: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "http://localhost:5601/lpm/plugins/brewAnalytics/assets/roast.png",
      alt: "roast"
    })),
    title: "Roast",
    description: "",
    display: "plain",
    className: "clear-background",
    onClick: () => coffeeClick("roast")
  })));
};

/***/ }),

/***/ "./public/components/input-form/form-sliders.tsx":
/*!*******************************************************!*\
  !*** ./public/components/input-form/form-sliders.tsx ***!
  \*******************************************************/
/*! exports provided: CoffeeRangeForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoffeeRangeForm", function() { return CoffeeRangeForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);


const CoffeeRangeForm = props => {
  const [rangeValue, setRangeValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const onRangeChange = (event, isValid) => {
    setRangeValue(event.target.value);
    props.onAddForm(props.rangeName, event.target.value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
    label: props.rangeLabel,
    display: "columnCompressed",
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiRange"], {
    min: props.rangeMin,
    max: props.rangeMax,
    name: props.rangeName,
    id: props.rangeId,
    showInput: true,
    showLabels: true,
    value: rangeValue,
    onChange: onRangeChange,
    step: .1
  }));
};

/***/ }),

/***/ "./public/components/input-form/form.tsx":
/*!***********************************************!*\
  !*** ./public/components/input-form/form.tsx ***!
  \***********************************************/
/*! exports provided: CoffeeInputForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoffeeInputForm", function() { return CoffeeInputForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _form_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-dropdown */ "./public/components/input-form/form-dropdown.tsx");
/* harmony import */ var _form_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-date */ "./public/components/input-form/form-date.tsx");
/* harmony import */ var _form_sliders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-sliders */ "./public/components/input-form/form-sliders.tsx");
/* harmony import */ var _form_comments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-comments */ "./public/components/input-form/form-comments.tsx");
/* harmony import */ var _form_checkboxes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-checkboxes */ "./public/components/input-form/form-checkboxes.tsx");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








const CoffeeInputForm = ({
  http,
  coffeeType
}) => {
  const [formData, setFormData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    drinkType: '',
    roastName: '',
    roastDate: moment__WEBPACK_IMPORTED_MODULE_7___default()().format('MM-DD-YYYY'),
    brewTime: '',
    brewTemp: '',
    beanMass: '',
    waterMass: '',
    milkMass: '',
    comments: '',
    addOns: Array()
  });

  const onClickButton = event => {
    event.preventDefault();
    http.post('/api/brew_analytics/form_submit', {
      body: JSON.stringify(formData)
    }).then(res => {
      console.log("success");
      console.log(res);
    }).catch(err => {
      console.log("failed");
      console.log(err);
    });
  };

  const formAddHandler = (key, value) => {
    if (key == 'addOns') {
      const array = formData.addOns;

      if (array.indexOf(value) === -1) {
        array.push(value);
        setFormData({ ...formData,
          addOns: array
        });
      } else {
        const filtered = array.filter(item => item !== value);
        setFormData({ ...formData,
          addOns: filtered
        });
      }
    } else {
      setFormData({ ...formData,
        [key]: value
      });
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_6__["EuiFlexGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_6__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_dropdown__WEBPACK_IMPORTED_MODULE_1__["CoffeeDropDownForm"], {
    coffeeType: coffeeType,
    onAddForm: formAddHandler
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_date__WEBPACK_IMPORTED_MODULE_2__["CoffeeDateForm"], {
    coffeeType: coffeeType,
    onAddForm: formAddHandler
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_6__["EuiHorizontalRule"], {
    margin: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_6__["EuiFormRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_6__["EuiText"], null, "Add Ons")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_6__["EuiFlexGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_6__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_checkboxes__WEBPACK_IMPORTED_MODULE_5__["CoffeeCheckBoxForm"], {
    coffeeType: coffeeType,
    checkId: "check-sugar",
    checkLabel: "Sugar",
    onAddForm: formAddHandler
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_checkboxes__WEBPACK_IMPORTED_MODULE_5__["CoffeeCheckBoxForm"], {
    coffeeType: coffeeType,
    checkId: "check-salt",
    checkLabel: "Salt",
    onAddForm: formAddHandler
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_checkboxes__WEBPACK_IMPORTED_MODULE_5__["CoffeeCheckBoxForm"], {
    coffeeType: coffeeType,
    checkId: "check-syrup",
    checkLabel: "Syrup",
    onAddForm: formAddHandler
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_checkboxes__WEBPACK_IMPORTED_MODULE_5__["CoffeeCheckBoxForm"], {
    coffeeType: coffeeType,
    checkId: "check-cinnamon",
    checkLabel: "Cinnamon",
    onAddForm: formAddHandler
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_6__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_checkboxes__WEBPACK_IMPORTED_MODULE_5__["CoffeeCheckBoxForm"], {
    coffeeType: coffeeType,
    checkId: "check-chocolate",
    checkLabel: "Chocolate",
    onAddForm: formAddHandler
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_checkboxes__WEBPACK_IMPORTED_MODULE_5__["CoffeeCheckBoxForm"], {
    coffeeType: coffeeType,
    checkId: "check-caramel",
    checkLabel: "Caramel",
    onAddForm: formAddHandler
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_checkboxes__WEBPACK_IMPORTED_MODULE_5__["CoffeeCheckBoxForm"], {
    coffeeType: coffeeType,
    checkId: "check-whipped-cream",
    checkLabel: "Whipped Cream",
    onAddForm: formAddHandler
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_checkboxes__WEBPACK_IMPORTED_MODULE_5__["CoffeeCheckBoxForm"], {
    coffeeType: coffeeType,
    checkId: "check-creamer",
    checkLabel: "Creamer",
    onAddForm: formAddHandler
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_6__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_sliders__WEBPACK_IMPORTED_MODULE_3__["CoffeeRangeForm"], {
    coffeeType: coffeeType,
    rangeMin: 0,
    rangeMax: 60,
    rangeName: "brewTime",
    rangeLabel: "Brew Time (s)",
    onAddForm: formAddHandler
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_sliders__WEBPACK_IMPORTED_MODULE_3__["CoffeeRangeForm"], {
    coffeeType: coffeeType,
    rangeMin: 95,
    rangeMax: 210,
    rangeName: "brewTemp",
    rangeLabel: "Brew Temp (f)",
    onAddForm: formAddHandler
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_sliders__WEBPACK_IMPORTED_MODULE_3__["CoffeeRangeForm"], {
    coffeeType: coffeeType,
    rangeMin: 0,
    rangeMax: 30,
    rangeName: "beanMass",
    rangeLabel: "Bean Mass (g)",
    onAddForm: formAddHandler
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_sliders__WEBPACK_IMPORTED_MODULE_3__["CoffeeRangeForm"], {
    coffeeType: coffeeType,
    rangeMin: 0,
    rangeMax: 250,
    rangeName: "waterMass",
    rangeLabel: "Water Mass (ml)",
    onAddForm: formAddHandler
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_sliders__WEBPACK_IMPORTED_MODULE_3__["CoffeeRangeForm"], {
    coffeeType: coffeeType,
    rangeMin: 0,
    rangeMax: 250,
    rangeName: "milkMass",
    rangeLabel: "Milk Mass (ml)",
    onAddForm: formAddHandler
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_6__["EuiHorizontalRule"], {
    margin: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_comments__WEBPACK_IMPORTED_MODULE_4__["CoffeeCommentForm"], {
    coffeeType: coffeeType,
    onAddForm: formAddHandler
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_6__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_6__["EuiButton"], {
    iconType: "beaker",
    fullWidth: true,
    fill: true,
    color: "text",
    id: "brew-button",
    onClick: onClickButton
  }, "Brew It"));
};

/***/ })

}]);
//# sourceMappingURL=brewAnalytics.chunk.0.js.map