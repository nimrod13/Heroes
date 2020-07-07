(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hero-detail-details-module"],{

/***/ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-inline-editor.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-inline-editor.js ***!
  \************************************************************************************************************************/
/*! exports provided: DtInlineEditor, DtInlineEditorBase, DtInlineEditorModule, _DtInlineEditorMixinBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtInlineEditor", function() { return DtInlineEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtInlineEditorBase", function() { return DtInlineEditorBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtInlineEditorModule", function() { return DtInlineEditorModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_DtInlineEditorMixinBase", function() { return _DtInlineEditorMixinBase; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dynatrace/barista-components/button */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-button.js");
/* harmony import */ var _dynatrace_barista_components_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dynatrace/barista-components/form-field */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-form-field.js");
/* harmony import */ var _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dynatrace/barista-components/icon */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-icon.js");
/* harmony import */ var _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @dynatrace/barista-components/input */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-input.js");
/* harmony import */ var _dynatrace_barista_components_loading_distractor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @dynatrace/barista-components/loading-distractor */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-loading-distractor.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @dynatrace/barista-components/core */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-core.js");















/**
 * @fileoverview added by tsickle
 * Generated from: src/inline-editor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */









const _c0 = ["edit"];
const _c1 = ["dt-inline-editor", ""];
function DtInlineEditor_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DtInlineEditor_ng_container_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.enterEditing(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "dt-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.value);
} }
function DtInlineEditor_dt_loading_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "dt-loading-spinner");
} }
function DtInlineEditor_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@transitionErrors", ctx_r14._errorAnimationState);
} }
function DtInlineEditor_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function DtInlineEditor_div_2_Template_input_keydown_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.onKeyDown($event); })("input", function DtInlineEditor_div_2_Template_input_input_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17._onInput($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DtInlineEditor_div_2_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.saveAndQuitEditing(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "dt-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DtInlineEditor_div_2_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.cancelAndQuitEditing(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "dt-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DtInlineEditor_div_2_div_10_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("errorStateMatcher", ctx_r10.errorStateMatcher)("required", ctx_r10.required)("disabled", ctx_r10.saving)("value", ctx_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r10.errorState);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r10._ariaLabelSave);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r10._ariaLabelCancel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10._getDisplayedError());
} }
const _c2 = [[["dt-error"]]];
const _c3 = ["dt-error"];
const MODES = {
    IDLE: 0,
    EDITING: 1,
    SAVING: 2,
};
// Boilerplate for applying mixins to DtInput.
class DtInlineEditorBase {
    /**
     * @param {?} _defaultErrorStateMatcher
     * @param {?} _parentForm
     * @param {?} _parentFormGroup
     * @param {?} ngControl
     */
    constructor(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
    }
}
if (false) {}
/** @type {?} */
const _DtInlineEditorMixinBase = Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_13__["mixinErrorState"])(DtInlineEditorBase);
class DtInlineEditor extends _DtInlineEditorMixinBase {
    /**
     * @param {?} _changeDetectorRef
     * @param {?} _ngZone
     * @param {?} defaultErrorStateMatcher
     * @param {?} ngControl
     * @param {?} parentForm
     * @param {?} parentFormGroup
     */
    constructor(_changeDetectorRef, _ngZone, defaultErrorStateMatcher, ngControl, parentForm, parentFormGroup) {
        super(defaultErrorStateMatcher, parentForm, parentFormGroup, ngControl);
        this._changeDetectorRef = _changeDetectorRef;
        this._ngZone = _ngZone;
        this.ngControl = ngControl;
        /**
         * A stream that emits when the inline editor save operation is done
         */
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * A stream that emits when the inline editor cancel operation is done
         */
        this.cancelled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * \@internal Wether the input is focused or not
         */
        this._inputFocused = false;
        /**
         * \@internal State of the dt-error animations.
         */
        this._errorAnimationState = '';
        this._onChanged = (/**
         * @return {?}
         */
        () => { });
        this._onTouched = (/**
         * @return {?}
         */
        () => { });
        this._mode = 0 /* IDLE */;
        this._value = '';
        this._required = false;
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        // Replace the provider from above with this.
        // tslint:disable-next-line: strict-type-predicates
        if (this.ngControl !== null) {
            // Setting the value accessor directly (instead of using
            // the providers) to avoid running into a circular import.
            this.ngControl.valueAccessor = this;
        }
    }
    /**
     * Wether the inline editor is required
     * @return {?}
     */
    get required() {
        return this._required;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set required(value) {
        this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
    }
    /**
     * Aria label of the inline-editor's save button.
     * @deprecated `aria-label-save` does not conform with accessibility standards.
     * Please use `ariaLabelSave` input instead.
     * \@breaking-change Will be removed in version 7.0.0
     * @return {?}
     */
    get depAriaLabelSave() {
        return this._ariaLabelSave;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set depAriaLabelSave(value) {
        this._ariaLabelSave = value;
    }
    /**
     * Aria label of the inline-editor's save button.
     * @return {?}
     */
    get ariaLabelSave() {
        return this._ariaLabelSave;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ariaLabelSave(value) {
        this._ariaLabelSave = value;
    }
    /**
     * Aria label of the inline-editor's cancel button.
     * @deprecated `aria-label-cancel` does not conform with accessibility standards.
     * Please use `ariaLabelCancel` input instead.
     * \@breaking-change Will be removed in version 7.0.0
     * @return {?}
     */
    get depAriaLabelCancel() {
        return this._ariaLabelCancel;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set depAriaLabelCancel(value) {
        this._ariaLabelCancel = value;
    }
    /**
     * Aria label of the inline-editor's cancel button.
     * @return {?}
     */
    get ariaLabelCancel() {
        return this._ariaLabelCancel;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ariaLabelCancel(value) {
        this._ariaLabelCancel = value;
    }
    /**
     * The value of the inline editor
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (this._value !== value) {
            this._value = value;
            this._onChanged(value);
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Wether the editor is in idle mode
     * @return {?}
     */
    get idle() {
        return this._mode === 0 /* IDLE */;
    }
    /**
     * Wether the editor is in editing mode
     * @return {?}
     */
    get editing() {
        return this._mode === 1 /* EDITING */;
    }
    /**
     * Wether the editor is in saving mode
     * @return {?}
     */
    get saving() {
        return this._mode === 2 /* SAVING */;
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.ngControl) {
            // We need to re-evaluate this on every change detection cycle, because there are some
            // error triggers that we can't subscribe to (e.g. parent form submissions). This means
            // that whatever logic is in here has to be super lean or we risk destroying the performance.
            this.updateErrorState();
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // Update the error animation state
        this._errorChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])(null)).subscribe((/**
         * @return {?}
         */
        () => {
            this._errorAnimationState =
                this._getDisplayedError() && this._inputFocused
                    ? 'enter-delayed'
                    : 'enter';
            this._changeDetectorRef.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // We need to pipe the ngControl through to the input so the updateErrorState method is called on the input
        // and the host bindings on the input are updated correctly
        this._input.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this._destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const input = this._input.first;
            if (input) {
                input.ngControl = this.ngControl;
            }
        }));
        this._input.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["filter"])((/**
         * @return {?}
         */
        () => !!this._input.first)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["switchMap"])((/**
         * @return {?}
         */
        () => this._input.first.stateChanges)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this._destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            if (this._inputFocused !== this._input.first.focused &&
                this._mode === 1 /* EDITING */) {
                this._inputFocused = this._input.first.focused;
                this._changeDetectorRef.markForCheck();
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._saving) {
            this._saving.unsubscribe();
        }
        this._destroy$.next();
        this._destroy$.complete();
    }
    /**
     * @deprecated Will be removed in 6.0.0
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        this._onKeyDown(event);
    }
    /**
     * Enters the edit mode
     * @return {?}
     */
    enterEditing() {
        this._initialState = this.value;
        this._mode = 1 /* EDITING */;
        this._onTouched();
        this._focusWhenStable();
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Saves and quits the edit mode
     * @return {?}
     */
    saveAndQuitEditing() {
        if (this.errorState) {
            return;
        }
        /** @type {?} */
        const value = this.value;
        if (this.onRemoteSave) {
            this._mode = 2 /* SAVING */;
            this._saving = this.onRemoteSave(value).subscribe((/**
             * @return {?}
             */
            () => {
                this._emitValue(value);
            }), (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                this._emitError(error);
            }));
            this._changeDetectorRef.markForCheck();
        }
        else {
            this._emitValue(value);
        }
    }
    /**
     * Cancels and quits the edit mode
     * @return {?}
     */
    cancelAndQuitEditing() {
        /** @type {?} */
        const value = this._value;
        this.value = this._initialState;
        this._mode = 0 /* IDLE */;
        this.cancelled.emit(value);
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Implemented as part of ControlValueAccessor
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Implemented as part of ControlValueAccessor
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChanged = fn;
    }
    /**
     * Implemented as part of ControlValueAccessor
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * Focuses the input or the button depending on the mode
     * @return {?}
     */
    focus() {
        if (this._mode === 1 /* EDITING */ && this._input.length) {
            this._input.first.focus();
        }
        else if (this._mode === 0 /* IDLE */ && this._editButtonReference) {
            this._editButtonReference.nativeElement.focus();
        }
    }
    /**
     * \@internal Keydown handler
     * @param {?} event
     * @return {?}
     */
    _onKeyDown(event) {
        switch (Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_13__["_readKeyCode"])(event)) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ESCAPE"]:
                this.cancelAndQuitEditing();
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ENTER"]:
                this.saveAndQuitEditing();
            default:
        }
    }
    /**
     * \@internal input handler
     * @param {?} event
     * @return {?}
     */
    _onInput(event) {
        this.writeValue(((/** @type {?} */ (event.target))).value);
    }
    /**
     * \@internal Determines whether to display errors or not.
     * @return {?}
     */
    _getDisplayedError() {
        return (this._errorChildren && this._errorChildren.length > 0 && this.errorState);
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _emitValue(value) {
        this._mode = 0 /* IDLE */;
        this.saved.emit(this.value);
        this._onChanged(value);
        this._changeDetectorRef.markForCheck();
    }
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} error
     * @return {?}
     */
    _emitError(error) {
        this._mode = 1 /* EDITING */;
        this.saved.error(error);
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    _focusWhenStable() {
        this._executeOnStable((/**
         * @return {?}
         */
        () => {
            this.focus();
        }));
    }
    /**
     * @private
     * @param {?} fn
     * @return {?}
     */
    _executeOnStable(fn) {
        if (this._ngZone.isStable) {
            fn();
        }
        else {
            this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1)).subscribe(fn);
        }
    }
}
DtInlineEditor.ɵfac = function DtInlineEditor_Factory(t) { return new (t || DtInlineEditor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_13__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroupDirective"], 8)); };
DtInlineEditor.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DtInlineEditor, selectors: [["", "dt-inline-editor", ""]], contentQueries: function DtInlineEditor_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _dynatrace_barista_components_form_field__WEBPACK_IMPORTED_MODULE_3__["DtError"], false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._errorChildren = _t);
    } }, viewQuery: function DtInlineEditor_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_5__["DtInput"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._editButtonReference = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._input = _t);
    } }, hostAttrs: [1, "dt-inline-editor"], hostVars: 4, hostBindings: function DtInlineEditor_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("dt-focused", ctx._inputFocused)("dt-inline-editor-invalid", ctx.ngControl && ctx.ngControl.invalid);
    } }, inputs: { required: "required", depAriaLabelSave: ["aria-label-save", "depAriaLabelSave"], ariaLabelSave: "ariaLabelSave", depAriaLabelCancel: ["aria-label-cancel", "depAriaLabelCancel"], ariaLabelCancel: "ariaLabelCancel", value: "value", errorStateMatcher: "errorStateMatcher", onRemoteSave: "onRemoteSave" }, outputs: { saved: "saved", cancelled: "cancelled" }, exportAs: ["dt-inline-editor"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], attrs: _c1, ngContentSelectors: _c3, decls: 3, vars: 3, consts: [[4, "ngIf"], ["dt-icon-button", "", "variant", "nested", "aria-label", "edit", 3, "click"], ["edit", ""], ["name", "edit1"], [1, "dt-inline-editor-edit-body"], [1, "dt-inline-editor-infix"], ["dtInput", "", 3, "errorStateMatcher", "required", "disabled", "value", "keydown", "input"], [1, "dt-inline-editor-suffix"], ["dt-icon-button", "", "variant", "nested", 1, "dt-inline-editor-edit", 3, "disabled", "click"], ["name", "checkmark"], ["dt-icon-button", "", "variant", "nested", 1, "dt-inline-editor-cancel", 3, "click"], ["name", "abort"], [1, "dt-inline-editor-errors-subscript"], ["class", "dt-inline-editor-errors", 4, "ngIf"], [1, "dt-inline-editor-errors"]], template: function DtInlineEditor_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DtInlineEditor_ng_container_0_Template, 6, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DtInlineEditor_dt_loading_spinner_1_Template, 1, 0, "dt-loading-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DtInlineEditor_div_2_Template, 11, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.idle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.saving);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editing || ctx.saving);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_2__["DtButton"], _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_4__["DtIcon"], _dynatrace_barista_components_loading_distractor__WEBPACK_IMPORTED_MODULE_6__["DtLoadingSpinner"], _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_5__["DtInput"]], styles: ["[_nghost-%COMP%]{display:flex;align-items:center}.dt-focused[_nghost-%COMP%]   .dt-inline-editor-edit-body[_ngcontent-%COMP%]{outline-offset:1px;outline:#b7b7b7 solid 2px}.dt-inline-editor-edit-body[_ngcontent-%COMP%]{display:flex;box-sizing:border-box;width:100%;box-sizing:border-box;border:1px solid #ccc;border-radius:3px;min-height:32px;background-color:#fff;line-height:29px;overflow:visible}.dt-theme-dark[_ngcontent-%COMP%]   .dt-inline-editor-edit-body[_ngcontent-%COMP%]{border-color:#b7b7b7}.dt-inline-editor-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0}.dt-inline-editor-infix[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .dt-inline-editor-suffix[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:block}.dt-inline-editor-infix[_ngcontent-%COMP%]   .dt-input[_ngcontent-%COMP%]{border:none;border-radius:none;min-height:30px}.dt-inline-editor-suffix[_ngcontent-%COMP%]{white-space:nowrap;flex:none;position:relative;display:flex;align-items:center}.dt-inline-editor-errors-subscript[_ngcontent-%COMP%]{position:relative}.dt-inline-editor-errors[_ngcontent-%COMP%]{display:block;position:absolute;top:0;left:0;right:0;border:1px solid #ccc;background-color:#f8f8f8;padding:8px 12px;border-bottom-left-radius:3px;border-bottom-right-radius:3px;transform-origin:top left;z-index:1}.dt-inline-editor-errors[_ngcontent-%COMP%]::before{content:\"\";display:block;position:absolute;top:-2px;left:-1px;right:-1px;height:2px;background-color:#dc172a}.dt-inline-editor-invalid[_ngcontent-%COMP%]   .dt-input[_ngcontent-%COMP%]{border-bottom-left-radius:0;border-bottom-right-radius:0}.dt-inline-editor-errors[_ngcontent-%COMP%]     .dt-error{font-family:BerninaSansWeb,OpenSans,sans-serif;font-weight:400;font-size:12px;line-height:1.6;text-decoration:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;display:block;box-sizing:border-box;white-space:normal;color:#dc172a}"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('transitionErrors', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1, transform: 'scaleY(1)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('void => enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["useAnimation"])(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_13__["DT_ERROR_ENTER_ANIMATION"])]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('void => enter-delayed', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["useAnimation"])(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_13__["DT_ERROR_ENTER_DELAYED_ANIMATION"]),
                ]),
            ]),
        ] }, changeDetection: 0 });
/** @nocollapse */
DtInlineEditor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_13__["ErrorStateMatcher"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
DtInlineEditor.propDecorators = {
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    depAriaLabelSave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['aria-label-save',] }],
    ariaLabelSave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    depAriaLabelCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['aria-label-cancel',] }],
    ariaLabelCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    errorStateMatcher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    onRemoteSave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    saved: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    cancelled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    _input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: [_dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_5__["DtInput"],] }],
    _editButtonReference: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['edit',] }],
    _errorChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [_dynatrace_barista_components_form_field__WEBPACK_IMPORTED_MODULE_3__["DtError"],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DtInlineEditor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                preserveWhitespaces: false,
                selector: '[dt-inline-editor]',
                exportAs: 'dt-inline-editor',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].Emulated,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                template: "<ng-container *ngIf=\"idle\">\n  <span>{{ value }}</span>\n  <button\n    dt-icon-button\n    variant=\"nested\"\n    #edit\n    aria-label=\"edit\"\n    (click)=\"enterEditing()\"\n  >\n    <dt-icon name=\"edit1\"></dt-icon>\n  </button>\n</ng-container>\n\n<dt-loading-spinner *ngIf=\"saving\"></dt-loading-spinner>\n\n<div *ngIf=\"editing || saving\">\n  <div class=\"dt-inline-editor-edit-body\">\n    <div class=\"dt-inline-editor-infix\">\n      <input\n        dtInput\n        [errorStateMatcher]=\"errorStateMatcher\"\n        [required]=\"required\"\n        [disabled]=\"saving\"\n        [value]=\"value\"\n        (keydown)=\"onKeyDown($event)\"\n        (input)=\"_onInput($event)\"\n      />\n    </div>\n    <div class=\"dt-inline-editor-suffix\">\n      <button\n        dt-icon-button\n        class=\"dt-inline-editor-edit\"\n        variant=\"nested\"\n        [attr.aria-label]=\"_ariaLabelSave\"\n        (click)=\"saveAndQuitEditing()\"\n        [disabled]=\"errorState\"\n      >\n        <dt-icon name=\"checkmark\"></dt-icon>\n      </button>\n      <button\n        dt-icon-button\n        class=\"dt-inline-editor-cancel\"\n        variant=\"nested\"\n        [attr.aria-label]=\"_ariaLabelCancel\"\n        (click)=\"cancelAndQuitEditing()\"\n      >\n        <dt-icon name=\"abort\"></dt-icon>\n      </button>\n    </div>\n  </div>\n  <div class=\"dt-inline-editor-errors-subscript\">\n    <div\n      class=\"dt-inline-editor-errors\"\n      *ngIf=\"_getDisplayedError()\"\n      [@transitionErrors]=\"_errorAnimationState\"\n    >\n      <ng-content select=\"dt-error\"></ng-content>\n    </div>\n  </div>\n</div>\n",
                host: {
                    class: 'dt-inline-editor',
                    '[class.dt-focused]': '_inputFocused',
                    '[class.dt-inline-editor-invalid]': 'ngControl && ngControl.invalid'
                },
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('transitionErrors', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1, transform: 'scaleY(1)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('void => enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["useAnimation"])(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_13__["DT_ERROR_ENTER_ANIMATION"])]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('void => enter-delayed', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["useAnimation"])(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_13__["DT_ERROR_ENTER_DELAYED_ANIMATION"]),
                        ]),
                    ]),
                ],
                styles: [":host{display:flex;align-items:center}:host.dt-focused .dt-inline-editor-edit-body{outline-offset:1px;outline:#b7b7b7 solid 2px}.dt-inline-editor-edit-body{display:flex;box-sizing:border-box;width:100%;box-sizing:border-box;border:1px solid #ccc;border-radius:3px;min-height:32px;background-color:#fff;line-height:29px;overflow:visible}.dt-theme-dark .dt-inline-editor-edit-body{border-color:#b7b7b7}.dt-inline-editor-infix{display:block;position:relative;flex:auto;min-width:0}.dt-inline-editor-infix>*,.dt-inline-editor-suffix>*{display:block}.dt-inline-editor-infix .dt-input{border:none;border-radius:none;min-height:30px}.dt-inline-editor-suffix{white-space:nowrap;flex:none;position:relative;display:flex;align-items:center}.dt-inline-editor-errors-subscript{position:relative}.dt-inline-editor-errors{display:block;position:absolute;top:0;left:0;right:0;border:1px solid #ccc;background-color:#f8f8f8;padding:8px 12px;border-bottom-left-radius:3px;border-bottom-right-radius:3px;transform-origin:top left;z-index:1}.dt-inline-editor-errors::before{content:\"\";display:block;position:absolute;top:-2px;left:-1px;right:-1px;height:2px;background-color:#dc172a}.dt-inline-editor-invalid .dt-input{border-bottom-left-radius:0;border-bottom-right-radius:0}.dt-inline-editor-errors ::ng-deep .dt-error{font-family:BerninaSansWeb,OpenSans,sans-serif;font-weight:400;font-size:12px;line-height:1.6;text-decoration:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;display:block;box-sizing:border-box;white-space:normal;color:#dc172a}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_13__["ErrorStateMatcher"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroupDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }]; }, { saved: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], cancelled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], depAriaLabelSave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-label-save']
        }], ariaLabelSave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], depAriaLabelCancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-label-cancel']
        }], ariaLabelCancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], errorStateMatcher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onRemoteSave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], _input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
            args: [_dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_5__["DtInput"]]
        }], _editButtonReference: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['edit']
        }], _errorChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [_dynatrace_barista_components_form_field__WEBPACK_IMPORTED_MODULE_3__["DtError"]]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/inline-editor-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DtInlineEditorModule {
}
DtInlineEditorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DtInlineEditorModule });
DtInlineEditorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DtInlineEditorModule_Factory(t) { return new (t || DtInlineEditorModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _dynatrace_barista_components_loading_distractor__WEBPACK_IMPORTED_MODULE_6__["DtLoadingDistractorModule"],
            _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_2__["DtButtonModule"],
            _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_5__["DtInputModule"],
            _dynatrace_barista_components_form_field__WEBPACK_IMPORTED_MODULE_3__["DtFormFieldModule"],
            _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_4__["DtIconModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DtInlineEditorModule, { declarations: function () { return [DtInlineEditor]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _dynatrace_barista_components_loading_distractor__WEBPACK_IMPORTED_MODULE_6__["DtLoadingDistractorModule"],
        _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_2__["DtButtonModule"],
        _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_5__["DtInputModule"],
        _dynatrace_barista_components_form_field__WEBPACK_IMPORTED_MODULE_3__["DtFormFieldModule"],
        _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_4__["DtIconModule"]]; }, exports: function () { return [DtInlineEditor,
        _dynatrace_barista_components_form_field__WEBPACK_IMPORTED_MODULE_3__["DtError"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DtInlineEditorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _dynatrace_barista_components_loading_distractor__WEBPACK_IMPORTED_MODULE_6__["DtLoadingDistractorModule"],
                    _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_2__["DtButtonModule"],
                    _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_5__["DtInputModule"],
                    _dynatrace_barista_components_form_field__WEBPACK_IMPORTED_MODULE_3__["DtFormFieldModule"],
                    _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_4__["DtIconModule"],
                ],
                exports: [DtInlineEditor, _dynatrace_barista_components_form_field__WEBPACK_IMPORTED_MODULE_3__["DtError"]],
                declarations: [DtInlineEditor]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: dynatrace-barista-components-inline-editor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=dynatrace-barista-components-inline-editor.js.map

/***/ }),

/***/ "./src/app/fallbackimg.directive.ts":
/*!******************************************!*\
  !*** ./src/app/fallbackimg.directive.ts ***!
  \******************************************/
/*! exports provided: FallbackimgDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FallbackimgDirective", function() { return FallbackimgDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FallbackimgDirective {
    constructor(eRef) {
        this.eRef = eRef;
    }
    loadFallbackOnError() {
        const element = this.eRef.nativeElement;
        const path = 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available';
        element.src = this.appFallbackimg || `${path}/landscape_xlarge.jpg`;
        element.srcset = this.appFallbackimages || this.getImageSrcSet(path);
    }
    getImageSrcSet(path) {
        return `${path}/landscape_small.jpg 120w, ${path}/landscape_medium.jpg 175w, ${path}/landscape_large.jpg 190w, ${path}/landscape_xlarge.jpg 270w`;
    }
}
FallbackimgDirective.ɵfac = function FallbackimgDirective_Factory(t) { return new (t || FallbackimgDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
FallbackimgDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FallbackimgDirective, selectors: [["img", "appFallbackimg", ""]], hostBindings: function FallbackimgDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function FallbackimgDirective_error_HostBindingHandler() { return ctx.loadFallbackOnError(); });
    } }, inputs: { appFallbackimg: "appFallbackimg", appFallbackimages: "appFallbackimages" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FallbackimgDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'img[appFallbackimg]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { appFallbackimg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], appFallbackimages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loadFallbackOnError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['error']
        }] }); })();


/***/ }),

/***/ "./src/app/hero-detail/details.module.ts":
/*!***********************************************!*\
  !*** ./src/app/hero-detail/details.module.ts ***!
  \***********************************************/
/*! exports provided: DetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsModule", function() { return DetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hero_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero-detail.component */ "./src/app/hero-detail/hero-detail.component.ts");
/* harmony import */ var _fallbackimg_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fallbackimg.directive */ "./src/app/fallbackimg.directive.ts");
/* harmony import */ var _dynatrace_barista_components_inline_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dynatrace/barista-components/inline-editor */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-inline-editor.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









class DetailsModule {
}
DetailsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DetailsModule });
DetailsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DetailsModule_Factory(t) { return new (t || DetailsModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _dynatrace_barista_components_inline_editor__WEBPACK_IMPORTED_MODULE_4__["DtInlineEditorModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _hero_detail_component__WEBPACK_IMPORTED_MODULE_2__["HeroDetailComponent"] }]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DetailsModule, { declarations: [_fallbackimg_directive__WEBPACK_IMPORTED_MODULE_3__["FallbackimgDirective"],
        _hero_detail_component__WEBPACK_IMPORTED_MODULE_2__["HeroDetailComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _dynatrace_barista_components_inline_editor__WEBPACK_IMPORTED_MODULE_4__["DtInlineEditorModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _fallbackimg_directive__WEBPACK_IMPORTED_MODULE_3__["FallbackimgDirective"],
                    _hero_detail_component__WEBPACK_IMPORTED_MODULE_2__["HeroDetailComponent"]
                ],
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _dynatrace_barista_components_inline_editor__WEBPACK_IMPORTED_MODULE_4__["DtInlineEditorModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _hero_detail_component__WEBPACK_IMPORTED_MODULE_2__["HeroDetailComponent"] }]),
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/hero-detail/hero-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/hero-detail/hero-detail.component.ts ***!
  \******************************************************/
/*! exports provided: HeroDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroDetailComponent", function() { return HeroDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hero.service */ "./src/app/hero.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _dynatrace_barista_components_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @dynatrace/barista-components/toast */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-toast.js");
/* harmony import */ var _fallbackimg_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fallbackimg.directive */ "./src/app/fallbackimg.directive.ts");
/* harmony import */ var _dynatrace_barista_components_inline_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @dynatrace/barista-components/inline-editor */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-inline-editor.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @dynatrace/barista-components/button */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-button.js");











function HeroDetailComponent_div_0_div_24_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const serie_r340 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](serie_r340.name);
} }
function HeroDetailComponent_div_0_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Comic series");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeroDetailComponent_div_0_div_24_p_6_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r337 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r337.getSeriesItems(ctx_r337.hero));
} }
function HeroDetailComponent_div_0_div_25_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const story_r342 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](story_r342.name);
} }
function HeroDetailComponent_div_0_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Stories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeroDetailComponent_div_0_div_25_p_6_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r338 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r338.getStories(ctx_r338.hero));
} }
function HeroDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r344 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Nickname:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "em", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeroDetailComponent_div_0_Template_em_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r344); const ctx_r343 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r343.hero.nickname = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HeroDetailComponent_div_0_div_24_Template, 7, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HeroDetailComponent_div_0_div_25_Template, 7, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroDetailComponent_div_0_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r344); const ctx_r345 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r345.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Go back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroDetailComponent_div_0_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r344); const ctx_r346 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r346.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r336 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 9, ctx_r336.hero.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r336.getImageSrc(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("srcset", ctx_r336.getImageSrcSet(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r336.hero.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r336.hero.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r336.hero.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r336.hero.nickname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r336.getSeriesItems(ctx_r336.hero));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r336.getStories(ctx_r336.hero));
} }
class HeroDetailComponent {
    constructor(route, heroService, location, toast) {
        this.route = route;
        this.heroService = heroService;
        this.location = location;
        this.toast = toast;
    }
    ngOnInit() {
        if (!this.hero) {
            this.getHero();
        }
    }
    getHero() {
        const id = +this.route.snapshot.paramMap.get('id');
        const heroes = this.heroService.tryGetHeroes();
        if (heroes) {
            this.hero = JSON.parse(JSON.stringify(heroes.find(h => h.id === id)));
            this.trySetNickname();
            return;
        }
        this.heroService.getHero(id).subscribe(hero => {
            this.hero = hero;
            this.trySetNickname();
        });
    }
    trySetNickname() {
        if (!this.hero) {
            return;
        }
        if (!this.hero.nickname) {
            this.hero.nickname = this.hero.name;
        }
    }
    goBack() {
        this.location.back();
    }
    save() {
        this.heroService.getHeroIndex(this.hero.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((id) => this.heroService.updateHero(this.hero, id))).subscribe(() => this.updateHeroNickname());
    }
    updateHeroNickname() {
        const heroCurrent = this.heroService.tryGetHeroes().find(h => h.id === this.hero.id);
        if (!heroCurrent) {
            this.toast.create('This name cannot be changed!');
            return;
        }
        if (heroCurrent.nickname === this.hero.nickname) {
            this.toast.create('You have not made any changes!');
            return;
        }
        heroCurrent.nickname = this.hero.nickname; // only first found item is changed;
        this.heroService.onHeroesChanged();
        this.toast.create('Your changes have been saved!');
    }
    getImageSrc() {
        const path = this.getPathWithHttps();
        return `${path}/landscape_xlarge.jpg`;
    }
    getImageSrcSet() {
        const path = this.getPathWithHttps();
        return `${path}/landscape_small.jpg 120w, ${path}/landscape_medium.jpg 175w, ${path}/landscape_large.jpg 190w, ${path}/landscape_xlarge.jpg 270w`;
    }
    getPathWithHttps() {
        return this.hero.thumbnail.path.indexOf('https') >= 0 ? this.hero.thumbnail.path : this.hero.thumbnail.path.replace('http', 'https');
    }
    getSeriesItems(hero) {
        return hero.series && hero.series.available > 0 ? hero.series.items : null;
    }
    getStories(hero) {
        return hero.stories && hero.stories.available > 0 ? hero.stories.items : null;
    }
}
HeroDetailComponent.ɵfac = function HeroDetailComponent_Factory(t) { return new (t || HeroDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_3__["HeroService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dynatrace_barista_components_toast__WEBPACK_IMPORTED_MODULE_5__["DtToast"])); };
HeroDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroDetailComponent, selectors: [["app-hero-detail"]], decls: 1, vars: 1, consts: [["class", "details__wrapper", 4, "ngIf"], [1, "details__wrapper"], [1, "details"], [1, "details_container"], [1, "info_container"], [1, "info"], ["height", "200px", "appFallbackimg", "", 3, "src", "srcset", "alt"], [1, "info_text_container"], [1, "info_row"], [1, "hero_label"], [1, "hero_id"], ["aria-label", "Name"], ["dt-inline-editor", "", "ariaLabelSave", "Save nickname", "ariaLabelCancel", "Cancel and discard changes", 3, "ngModel", "ngModelChange"], ["class", "info_container", 4, "ngIf"], ["dt-button", "", 3, "click"], [1, "items"], [1, "items_text_container"], [4, "ngFor", "ngForOf"]], template: function HeroDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeroDetailComponent_div_0_Template, 30, 11, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hero);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _fallbackimg_directive__WEBPACK_IMPORTED_MODULE_6__["FallbackimgDirective"], _dynatrace_barista_components_inline_editor__WEBPACK_IMPORTED_MODULE_7__["DtInlineEditor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_9__["DtButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"]], styles: ["h2[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  color: #607D8B;\r\n  font-weight: bold;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  height: 2em;\r\n  font-size: 1em;\r\n  padding-left: .4em;\r\n  margin-top: 5px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  background-color: #cfd8dc;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:disabled {\r\n  background-color: #eee;\r\n  color: #ccc;\r\n  cursor: auto;\r\n}\r\n\r\n.dt-button[_ngcontent-%COMP%] + .dt-button[_ngcontent-%COMP%] {\r\n  margin-left: 8px;\r\n}\r\n\r\n.info_row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: auto;\r\n  flex-direction: column;\r\n}\r\n\r\n@media (min-width: 578px) {\r\n  img[_ngcontent-%COMP%] {\r\n    float: right;\r\n  }\r\n}\r\n\r\n.details__wrapper[_ngcontent-%COMP%] {\r\n  margin: 0 10px;\r\n}\r\n\r\n@media (max-width: 577px) {\r\n  img[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin: auto;\r\n    margin-top: 10px;\r\n    box-shadow: 2px 2px 2px lightgrey;\r\n  }\r\n\r\n  details[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n  }\r\n}\r\n\r\n.details_container[_ngcontent-%COMP%] {\r\n  box-shadow: 0 0 10px rgba(14, 30, 37, .12);\r\n}\r\n\r\n.info_container[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  background-color: white;\r\n}\r\n\r\n.details[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\r\n  grid-column: 1;\r\n  border: 1px solid #e1e1e1;\r\n}\r\n\r\n.items[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #e1e1e1;\r\n  border-left: 1px solid #e1e1e1;\r\n  border-right: 1px solid #e1e1e1;\r\n}\r\n\r\n\r\n\r\n.hero_id_label[_ngcontent-%COMP%] {\r\n  font-family: Roboto, Trebuchet MS, Helvetica, Arial, sans-serif;\r\n  font-weight: 700;\r\n  font-size: 13px;\r\n  line-height: 20px;\r\n  letter-spacing: 1px;\r\n  text-transform: uppercase;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.hero_id[_ngcontent-%COMP%] {\r\n  color: #151515;\r\n  font-size: 16px;\r\n  word-break: break-word;\r\n  font-family: Roboto, Trebuchet MS, Helvetica, Arial, sans-serif;\r\n  font-weight: 700;\r\n}\r\n\r\np[_ngcontent-%COMP%], .hero_label[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.info_text_container[_ngcontent-%COMP%] {\r\n  padding-left: 2em;\r\n  padding-top: 2em;\r\n}\r\n\r\n.items_text_container[_ngcontent-%COMP%] {\r\n  padding: 2em;\r\n}\r\n\r\n.items_text_container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  padding-bottom: 10px;\r\n}\r\n\r\nem[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  margin-bottom: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyby1kZXRhaWwvaGVyby1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUVFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLCtCQUErQjtBQUNqQzs7QUFFQTs7R0FFRzs7QUFFSDtFQUNFLCtEQUErRDtFQUMvRCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QiwrREFBK0Q7RUFDL0QsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2hlcm8tZGV0YWlsL2hlcm8tZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGNvbG9yOiAjNjA3RDhCO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAuNGVtO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGN1cnNvcjogaGFuZDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xyXG59XHJcblxyXG5idXR0b246ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgY29sb3I6ICNjY2M7XHJcbiAgY3Vyc29yOiBhdXRvO1xyXG59XHJcblxyXG4uZHQtYnV0dG9uKy5kdC1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi5pbmZvX3JvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3OHB4KSB7XHJcbiAgaW1nIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbn1cclxuXHJcbi5kZXRhaWxzX193cmFwcGVyIHtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3N3B4KSB7XHJcbiAgaW1nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggbGlnaHRncmV5O1xyXG4gIH1cclxuXHJcbiAgZGV0YWlscyB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxufVxyXG5cclxuLmRldGFpbHNfY29udGFpbmVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDE0LCAzMCwgMzcsIC4xMik7XHJcbn1cclxuXHJcbi5pbmZvX2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmRldGFpbHMgLmluZm8ge1xyXG4gIC1tcy1ncmlkLWNvbHVtbjogMTtcclxuICBncmlkLWNvbHVtbjogMTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUxO1xyXG59XHJcblxyXG4uaXRlbXMge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UxZTFlMTtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTFlMWUxO1xyXG59XHJcblxyXG4vKiAuaW5mb19yb3crLmluZm9fcm93IHtcclxuICBtYXJnaW46IDEwcHggMCAwO1xyXG59ICovXHJcblxyXG4uaGVyb19pZF9sYWJlbCB7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgVHJlYnVjaGV0IE1TLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmhlcm9faWQge1xyXG4gIGNvbG9yOiAjMTUxNTE1O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFRyZWJ1Y2hldCBNUywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5wLFxyXG4uaGVyb19sYWJlbCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5pbmZvX3RleHRfY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDJlbTtcclxuICBwYWRkaW5nLXRvcDogMmVtO1xyXG59XHJcblxyXG4uaXRlbXNfdGV4dF9jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDJlbTtcclxufVxyXG5cclxuLml0ZW1zX3RleHRfY29udGFpbmVyIGxhYmVsIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuZW0ge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hero-detail',
                templateUrl: './hero-detail.component.html',
                styleUrls: ['./hero-detail.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _hero_service__WEBPACK_IMPORTED_MODULE_3__["HeroService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }, { type: _dynatrace_barista_components_toast__WEBPACK_IMPORTED_MODULE_5__["DtToast"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=hero-detail-details-module.js.map