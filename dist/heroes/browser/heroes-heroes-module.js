(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["heroes-heroes-module"],{

/***/ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js":
/*!******************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js ***!
  \******************************************************************/
/*! exports provided: DataSource, BaseCdkCell, BaseRowDef, CDK_ROW_TEMPLATE, CDK_TABLE_TEMPLATE, CdkCell, CdkCellDef, CdkCellOutlet, CdkColumnDef, CdkFooterCell, CdkFooterCellDef, CdkFooterRow, CdkFooterRowDef, CdkHeaderCell, CdkHeaderCellDef, CdkHeaderRow, CdkHeaderRowDef, CdkRow, CdkRowDef, CdkTable, CdkTableModule, CdkTextColumn, DataRowOutlet, FooterRowOutlet, HeaderRowOutlet, STICKY_DIRECTIONS, StickyStyler, TEXT_COLUMN_OPTIONS, mixinHasStickyInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseCdkCell", function() { return BaseCdkCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRowDef", function() { return BaseRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_ROW_TEMPLATE", function() { return CDK_ROW_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_TABLE_TEMPLATE", function() { return CDK_TABLE_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCell", function() { return CdkCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCellDef", function() { return CdkCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCellOutlet", function() { return CdkCellOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkColumnDef", function() { return CdkColumnDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterCell", function() { return CdkFooterCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterCellDef", function() { return CdkFooterCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterRow", function() { return CdkFooterRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterRowDef", function() { return CdkFooterRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderCell", function() { return CdkHeaderCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderCellDef", function() { return CdkHeaderCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderRow", function() { return CdkHeaderRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderRowDef", function() { return CdkHeaderRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkRow", function() { return CdkRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkRowDef", function() { return CdkRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTable", function() { return CdkTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTableModule", function() { return CdkTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTextColumn", function() { return CdkTextColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataRowOutlet", function() { return DataRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterRowOutlet", function() { return FooterRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderRowOutlet", function() { return HeaderRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STICKY_DIRECTIONS", function() { return STICKY_DIRECTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyStyler", function() { return StickyStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_COLUMN_OPTIONS", function() { return TEXT_COLUMN_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinHasStickyInput", function() { return mixinHasStickyInput; });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]; });

/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







const _c0 = [[["caption"]]];
const _c1 = ["caption"];
function CdkTextColumn_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("text-align", ctx_r52.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r52.headerText, " ");
} }
function CdkTextColumn_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r54 = ctx.$implicit;
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("text-align", ctx_r53.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r53.dataAccessor(data_r54, ctx_r53.name), " ");
} }







/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/can-stick.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Interface for a mixin to provide a directive with a function that checks if the sticky input has
 * been changed since the last time the function was called. Essentially adds a dirty-check to the
 * sticky value.
 * \@docs-private
 * @record
 */
function CanStick() { }
if (false) {}
/**
 * Mixin to provide a directive with a function that checks if the sticky input has been
 * changed since the last time the function was called. Essentially adds a dirty-check to the
 * sticky value.
 * \@docs-private
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinHasStickyInput(base) {
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            this._sticky = false;
            /**
             * Whether the sticky input has changed since it was last checked.
             */
            this._hasStickyChanged = false;
        }
        /**
         * Whether sticky positioning should be applied.
         * @return {?}
         */
        get sticky() { return this._sticky; }
        /**
         * @param {?} v
         * @return {?}
         */
        set sticky(v) {
            /** @type {?} */
            const prevValue = this._sticky;
            this._sticky = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
            this._hasStickyChanged = prevValue !== this._sticky;
        }
        /**
         * Whether the sticky value has changed since this was last called.
         * @return {?}
         */
        hasStickyChanged() {
            /** @type {?} */
            const hasStickyChanged = this._hasStickyChanged;
            this._hasStickyChanged = false;
            return hasStickyChanged;
        }
        /**
         * Resets the dirty check for cases where the sticky state has been used without checking.
         * @return {?}
         */
        resetStickyChanged() {
            this._hasStickyChanged = false;
        }
    };
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/cell.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Base interface for a cell definition. Captures a column's cell template definition.
 * @record
 */
function CellDef() { }
if (false) {}
/**
 * Cell definition for a CDK table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
class CdkCellDef {
    /**
     * @param {?} template
     */
    constructor(/** @docs-private */ template) {
        this.template = template;
    }
}
CdkCellDef.ɵfac = function CdkCellDef_Factory(t) { return new (t || CdkCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
CdkCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkCellDef, selectors: [["", "cdkCellDef", ""]] });
/** @nocollapse */
CdkCellDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[cdkCellDef]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }]; }, null); })();
if (false) {}
/**
 * Header cell definition for a CDK table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
class CdkHeaderCellDef {
    /**
     * @param {?} template
     */
    constructor(/** @docs-private */ template) {
        this.template = template;
    }
}
CdkHeaderCellDef.ɵfac = function CdkHeaderCellDef_Factory(t) { return new (t || CdkHeaderCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
CdkHeaderCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkHeaderCellDef, selectors: [["", "cdkHeaderCellDef", ""]] });
/** @nocollapse */
CdkHeaderCellDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[cdkHeaderCellDef]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }]; }, null); })();
if (false) {}
/**
 * Footer cell definition for a CDK table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
class CdkFooterCellDef {
    /**
     * @param {?} template
     */
    constructor(/** @docs-private */ template) {
        this.template = template;
    }
}
CdkFooterCellDef.ɵfac = function CdkFooterCellDef_Factory(t) { return new (t || CdkFooterCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
CdkFooterCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkFooterCellDef, selectors: [["", "cdkFooterCellDef", ""]] });
/** @nocollapse */
CdkFooterCellDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[cdkFooterCellDef]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }]; }, null); })();
if (false) {}
// Boilerplate for applying mixins to CdkColumnDef.
/**
 * \@docs-private
 */
class CdkColumnDefBase {
}
/** @type {?} */
const _CdkColumnDefBase = mixinHasStickyInput(CdkColumnDefBase);
/**
 * Column definition for the CDK table.
 * Defines a set of cells available for a table column.
 */
class CdkColumnDef extends _CdkColumnDefBase {
    constructor() {
        super(...arguments);
        this._stickyEnd = false;
    }
    /**
     * Unique name for this column.
     * @return {?}
     */
    get name() {
        return this._name;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    set name(name) {
        // If the directive is set without a name (updated programatically), then this setter will
        // trigger with an empty string and should not overwrite the programatically set value.
        if (!name) {
            return;
        }
        this._name = name;
        this.cssClassFriendlyName = name.replace(/[^a-z0-9_-]/ig, '-');
    }
    /**
     * Whether this column should be sticky positioned on the end of the row. Should make sure
     * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
     * has been changed.
     * @return {?}
     */
    get stickyEnd() {
        return this._stickyEnd;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set stickyEnd(v) {
        /** @type {?} */
        const prevValue = this._stickyEnd;
        this._stickyEnd = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
        this._hasStickyChanged = prevValue !== this._stickyEnd;
    }
}
CdkColumnDef.ɵfac = function CdkColumnDef_Factory(t) { return ɵCdkColumnDef_BaseFactory(t || CdkColumnDef); };
CdkColumnDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkColumnDef, selectors: [["", "cdkColumnDef", ""]], contentQueries: function CdkColumnDef_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkCellDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkHeaderCellDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkFooterCellDef, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.footerCell = _t.first);
    } }, inputs: { sticky: "sticky", name: ["cdkColumnDef", "name"], stickyEnd: "stickyEnd" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{ provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: CdkColumnDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
CdkColumnDef.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkColumnDef',] }],
    stickyEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['stickyEnd',] }],
    cell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [CdkCellDef,] }],
    headerCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [CdkHeaderCellDef,] }],
    footerCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [CdkFooterCellDef,] }]
};
const ɵCdkColumnDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](CdkColumnDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkColumnDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[cdkColumnDef]',
                inputs: ['sticky'],
                providers: [{ provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: CdkColumnDef }]
            }]
    }], null, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['cdkColumnDef']
        }], stickyEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['stickyEnd']
        }], cell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [CdkCellDef]
        }], headerCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [CdkHeaderCellDef]
        }], footerCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [CdkFooterCellDef]
        }] }); })();
if (false) {}
/**
 * Base class for the cells. Adds a CSS classname that identifies the column it renders in.
 */
class BaseCdkCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    constructor(columnDef, elementRef) {
        /** @type {?} */
        const columnClassName = `cdk-column-${columnDef.cssClassFriendlyName}`;
        elementRef.nativeElement.classList.add(columnClassName);
    }
}
/**
 * Header cell template container that adds the right classes and role.
 */
class CdkHeaderCell extends BaseCdkCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
    }
}
CdkHeaderCell.ɵfac = function CdkHeaderCell_Factory(t) { return new (t || CdkHeaderCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
CdkHeaderCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkHeaderCell, selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]], hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
CdkHeaderCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'cdk-header-cell, th[cdk-header-cell]',
                host: {
                    'class': 'cdk-header-cell',
                    'role': 'columnheader'
                }
            }]
    }], function () { return [{ type: CdkColumnDef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();
/**
 * Footer cell template container that adds the right classes and role.
 */
class CdkFooterCell extends BaseCdkCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
    }
}
CdkFooterCell.ɵfac = function CdkFooterCell_Factory(t) { return new (t || CdkFooterCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
CdkFooterCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkFooterCell, selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]], hostAttrs: ["role", "gridcell", 1, "cdk-footer-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
CdkFooterCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'cdk-footer-cell, td[cdk-footer-cell]',
                host: {
                    'class': 'cdk-footer-cell',
                    'role': 'gridcell'
                }
            }]
    }], function () { return [{ type: CdkColumnDef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();
/**
 * Cell template container that adds the right classes and role.
 */
class CdkCell extends BaseCdkCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
    }
}
CdkCell.ɵfac = function CdkCell_Factory(t) { return new (t || CdkCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
CdkCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkCell, selectors: [["cdk-cell"], ["td", "cdk-cell", ""]], hostAttrs: ["role", "gridcell", 1, "cdk-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
CdkCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'cdk-cell, td[cdk-cell]',
                host: {
                    'class': 'cdk-cell',
                    'role': 'gridcell'
                }
            }]
    }], function () { return [{ type: CdkColumnDef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/row.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The row template that can be used by the mat-table. Should not be used outside of the
 * material library.
 * @type {?}
 */
const CDK_ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
/**
 * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
 * for changes and notifying the table.
 * @abstract
 */
class BaseRowDef {
    /**
     * @param {?} template
     * @param {?} _differs
     */
    constructor(template, _differs) {
        this.template = template;
        this._differs = _differs;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // Create a new columns differ if one does not yet exist. Initialize it based on initial value
        // of the columns property or an empty array if none is provided.
        if (!this._columnsDiffer) {
            /** @type {?} */
            const columns = (changes['columns'] && changes['columns'].currentValue) || [];
            this._columnsDiffer = this._differs.find(columns).create();
            this._columnsDiffer.diff(columns);
        }
    }
    /**
     * Returns the difference between the current columns and the columns from the last diff, or null
     * if there is no difference.
     * @return {?}
     */
    getColumnsDiff() {
        return this._columnsDiffer.diff(this.columns);
    }
    /**
     * Gets this row def's relevant cell template from the provided column def.
     * @param {?} column
     * @return {?}
     */
    extractCellTemplate(column) {
        if (this instanceof CdkHeaderRowDef) {
            return column.headerCell.template;
        }
        if (this instanceof CdkFooterRowDef) {
            return column.footerCell.template;
        }
        else {
            return column.cell.template;
        }
    }
}
BaseRowDef.ɵfac = function BaseRowDef_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinvalidFactory"](); };
BaseRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: BaseRowDef, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });

if (false) {}
// Boilerplate for applying mixins to CdkHeaderRowDef.
/**
 * \@docs-private
 */
class CdkHeaderRowDefBase extends BaseRowDef {
}
/** @type {?} */
const _CdkHeaderRowDefBase = mixinHasStickyInput(CdkHeaderRowDefBase);
/**
 * Header row definition for the CDK table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
class CdkHeaderRowDef extends _CdkHeaderRowDefBase {
    /**
     * @param {?} template
     * @param {?} _differs
     */
    constructor(template, _differs) {
        super(template, _differs);
    }
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
}
CdkHeaderRowDef.ɵfac = function CdkHeaderRowDef_Factory(t) { return new (t || CdkHeaderRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"])); };
CdkHeaderRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkHeaderRowDef, selectors: [["", "cdkHeaderRowDef", ""]], inputs: { columns: ["cdkHeaderRowDef", "columns"], sticky: ["cdkHeaderRowDefSticky", "sticky"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
CdkHeaderRowDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[cdkHeaderRowDef]',
                inputs: ['columns: cdkHeaderRowDef', 'sticky: cdkHeaderRowDefSticky']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }]; }, null); })();
if (false) {}
// Boilerplate for applying mixins to CdkFooterRowDef.
/**
 * \@docs-private
 */
class CdkFooterRowDefBase extends BaseRowDef {
}
/** @type {?} */
const _CdkFooterRowDefBase = mixinHasStickyInput(CdkFooterRowDefBase);
/**
 * Footer row definition for the CDK table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
class CdkFooterRowDef extends _CdkFooterRowDefBase {
    /**
     * @param {?} template
     * @param {?} _differs
     */
    constructor(template, _differs) {
        super(template, _differs);
    }
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
}
CdkFooterRowDef.ɵfac = function CdkFooterRowDef_Factory(t) { return new (t || CdkFooterRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"])); };
CdkFooterRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkFooterRowDef, selectors: [["", "cdkFooterRowDef", ""]], inputs: { columns: ["cdkFooterRowDef", "columns"], sticky: ["cdkFooterRowDefSticky", "sticky"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
CdkFooterRowDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[cdkFooterRowDef]',
                inputs: ['columns: cdkFooterRowDef', 'sticky: cdkFooterRowDefSticky']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }]; }, null); })();
if (false) {}
/**
 * Data row definition for the CDK table.
 * Captures the header row's template and other row properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 * @template T
 */
class CdkRowDef extends BaseRowDef {
    // TODO(andrewseguin): Add an input for providing a switch function to determine
    //   if this template should be used.
    /**
     * @param {?} template
     * @param {?} _differs
     */
    constructor(template, _differs) {
        super(template, _differs);
    }
}
CdkRowDef.ɵfac = function CdkRowDef_Factory(t) { return new (t || CdkRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"])); };
CdkRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkRowDef, selectors: [["", "cdkRowDef", ""]], inputs: { columns: ["cdkRowDefColumns", "columns"], when: ["cdkRowDefWhen", "when"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
CdkRowDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[cdkRowDef]',
                inputs: ['columns: cdkRowDefColumns', 'when: cdkRowDefWhen']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }]; }, null); })();
if (false) {}
/**
 * Context provided to the row cells when `multiTemplateDataRows` is false
 * @record
 * @template T
 */
function CdkCellOutletRowContext() { }
if (false) {}
/**
 * Context provided to the row cells when `multiTemplateDataRows` is true. This context is the same
 * as CdkCellOutletRowContext except that the single `index` value is replaced by `dataIndex` and
 * `renderIndex`.
 * @record
 * @template T
 */
function CdkCellOutletMultiRowContext() { }
if (false) {}
/**
 * Outlet for rendering cells inside of a row or header row.
 * \@docs-private
 */
class CdkCellOutlet {
    /**
     * @param {?} _viewContainer
     */
    constructor(_viewContainer) {
        this._viewContainer = _viewContainer;
        CdkCellOutlet.mostRecentCellOutlet = this;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // If this was the last outlet being rendered in the view, remove the reference
        // from the static property after it has been destroyed to avoid leaking memory.
        if (CdkCellOutlet.mostRecentCellOutlet === this) {
            CdkCellOutlet.mostRecentCellOutlet = null;
        }
    }
}
CdkCellOutlet.ɵfac = function CdkCellOutlet_Factory(t) { return new (t || CdkCellOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"])); };
CdkCellOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkCellOutlet, selectors: [["", "cdkCellOutlet", ""]] });
/**
 * Static property containing the latest constructed instance of this class.
 * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
 * createEmbeddedView. After one of these components are created, this property will provide
 * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
 * construct the cells with the provided context.
 */
CdkCellOutlet.mostRecentCellOutlet = null;
/** @nocollapse */
CdkCellOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkCellOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[cdkCellOutlet]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }]; }, null); })();
if (false) {}
/**
 * Header template container that contains the cell outlet. Adds the right class and role.
 */
class CdkHeaderRow {
}
CdkHeaderRow.ɵfac = function CdkHeaderRow_Factory(t) { return new (t || CdkHeaderRow)(); };
CdkHeaderRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkHeaderRow, selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]], hostAttrs: ["role", "row", 1, "cdk-header-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function CdkHeaderRow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
    } }, directives: [CdkCellOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'cdk-header-row, tr[cdk-header-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'cdk-header-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
            }]
    }], null, null); })();
/**
 * Footer template container that contains the cell outlet. Adds the right class and role.
 */
class CdkFooterRow {
}
CdkFooterRow.ɵfac = function CdkFooterRow_Factory(t) { return new (t || CdkFooterRow)(); };
CdkFooterRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkFooterRow, selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]], hostAttrs: ["role", "row", 1, "cdk-footer-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function CdkFooterRow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
    } }, directives: [CdkCellOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'cdk-footer-row, tr[cdk-footer-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'cdk-footer-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
            }]
    }], null, null); })();
/**
 * Data row template container that contains the cell outlet. Adds the right class and role.
 */
class CdkRow {
}
CdkRow.ɵfac = function CdkRow_Factory(t) { return new (t || CdkRow)(); };
CdkRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkRow, selectors: [["cdk-row"], ["tr", "cdk-row", ""]], hostAttrs: ["role", "row", 1, "cdk-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function CdkRow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
    } }, directives: [CdkCellOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'cdk-row, tr[cdk-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'cdk-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/sticky-styler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * List of all possible directions that can be used for sticky positioning.
 * \@docs-private
 * @type {?}
 */
const STICKY_DIRECTIONS = ['top', 'bottom', 'left', 'right'];
/**
 * Applies and removes sticky positioning styles to the `CdkTable` rows and columns cells.
 * \@docs-private
 */
class StickyStyler {
    /**
     * @param {?} _isNativeHtmlTable Whether the sticky logic should be based on a table
     *     that uses the native `<table>` element.
     * @param {?} _stickCellCss The CSS class that will be applied to every row/cell that has
     *     sticky positioning applied.
     * @param {?} direction The directionality context of the table (ltr/rtl); affects column positioning
     *     by reversing left/right positions.
     * @param {?=} _isBrowser Whether the table is currently being rendered on the server or the client.
     */
    constructor(_isNativeHtmlTable, _stickCellCss, direction, _isBrowser = true) {
        this._isNativeHtmlTable = _isNativeHtmlTable;
        this._stickCellCss = _stickCellCss;
        this.direction = direction;
        this._isBrowser = _isBrowser;
    }
    /**
     * Clears the sticky positioning styles from the row and its cells by resetting the `position`
     * style, setting the zIndex to 0, and unsetting each provided sticky direction.
     * @param {?} rows The list of rows that should be cleared from sticking in the provided directions
     * @param {?} stickyDirections The directions that should no longer be set as sticky on the rows.
     * @return {?}
     */
    clearStickyPositioning(rows, stickyDirections) {
        for (const row of rows) {
            // If the row isn't an element (e.g. if it's an `ng-container`),
            // it won't have inline styles or `children` so we skip it.
            if (row.nodeType !== row.ELEMENT_NODE) {
                continue;
            }
            this._removeStickyStyle(row, stickyDirections);
            for (let i = 0; i < row.children.length; i++) {
                /** @type {?} */
                const cell = (/** @type {?} */ (row.children[i]));
                this._removeStickyStyle(cell, stickyDirections);
            }
        }
    }
    /**
     * Applies sticky left and right positions to the cells of each row according to the sticky
     * states of the rendered column definitions.
     * @param {?} rows The rows that should have its set of cells stuck according to the sticky states.
     * @param {?} stickyStartStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the start of the row.
     * @param {?} stickyEndStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the end of the row.
     * @return {?}
     */
    updateStickyColumns(rows, stickyStartStates, stickyEndStates) {
        /** @type {?} */
        const hasStickyColumns = stickyStartStates.some((/**
         * @param {?} state
         * @return {?}
         */
        state => state)) || stickyEndStates.some((/**
         * @param {?} state
         * @return {?}
         */
        state => state));
        if (!rows.length || !hasStickyColumns || !this._isBrowser) {
            return;
        }
        /** @type {?} */
        const firstRow = rows[0];
        /** @type {?} */
        const numCells = firstRow.children.length;
        /** @type {?} */
        const cellWidths = this._getCellWidths(firstRow);
        /** @type {?} */
        const startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);
        /** @type {?} */
        const endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);
        /** @type {?} */
        const isRtl = this.direction === 'rtl';
        for (const row of rows) {
            for (let i = 0; i < numCells; i++) {
                /** @type {?} */
                const cell = (/** @type {?} */ (row.children[i]));
                if (stickyStartStates[i]) {
                    this._addStickyStyle(cell, isRtl ? 'right' : 'left', startPositions[i]);
                }
                if (stickyEndStates[i]) {
                    this._addStickyStyle(cell, isRtl ? 'left' : 'right', endPositions[i]);
                }
            }
        }
    }
    /**
     * Applies sticky positioning to the row's cells if using the native table layout, and to the
     * row itself otherwise.
     * @param {?} rowsToStick The list of rows that should be stuck according to their corresponding
     *     sticky state and to the provided top or bottom position.
     * @param {?} stickyStates A list of boolean states where each state represents whether the row
     *     should be stuck in the particular top or bottom position.
     * @param {?} position The position direction in which the row should be stuck if that row should be
     *     sticky.
     *
     * @return {?}
     */
    stickRows(rowsToStick, stickyStates, position) {
        // Since we can't measure the rows on the server, we can't stick the rows properly.
        if (!this._isBrowser) {
            return;
        }
        // If positioning the rows to the bottom, reverse their order when evaluating the sticky
        // position such that the last row stuck will be "bottom: 0px" and so on.
        /** @type {?} */
        const rows = position === 'bottom' ? rowsToStick.reverse() : rowsToStick;
        /** @type {?} */
        let stickyHeight = 0;
        for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
            if (!stickyStates[rowIndex]) {
                continue;
            }
            /** @type {?} */
            const row = rows[rowIndex];
            if (this._isNativeHtmlTable) {
                for (let j = 0; j < row.children.length; j++) {
                    /** @type {?} */
                    const cell = (/** @type {?} */ (row.children[j]));
                    this._addStickyStyle(cell, position, stickyHeight);
                }
            }
            else {
                // Flex does not respect the stick positioning on the cells, needs to be applied to the row.
                // If this is applied on a native table, Safari causes the header to fly in wrong direction.
                this._addStickyStyle(row, position, stickyHeight);
            }
            if (rowIndex === rows.length - 1) {
                // prevent unnecessary reflow from getBoundingClientRect()
                return;
            }
            stickyHeight += row.getBoundingClientRect().height;
        }
    }
    /**
     * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
     * footer rows is to apply sticky styling to the tfoot container. This should only be done if
     * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
     * the tfoot element.
     * @param {?} tableElement
     * @param {?} stickyStates
     * @return {?}
     */
    updateStickyFooterContainer(tableElement, stickyStates) {
        if (!this._isNativeHtmlTable) {
            return;
        }
        /** @type {?} */
        const tfoot = (/** @type {?} */ (tableElement.querySelector('tfoot')));
        if (stickyStates.some((/**
         * @param {?} state
         * @return {?}
         */
        state => !state))) {
            this._removeStickyStyle(tfoot, ['bottom']);
        }
        else {
            this._addStickyStyle(tfoot, 'bottom', 0);
        }
    }
    /**
     * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
     * the zIndex, removing each of the provided sticky directions, and removing the
     * sticky position if there are no more directions.
     * @param {?} element
     * @param {?} stickyDirections
     * @return {?}
     */
    _removeStickyStyle(element, stickyDirections) {
        for (const dir of stickyDirections) {
            element.style[dir] = '';
        }
        element.style.zIndex = this._getCalculatedZIndex(element);
        // If the element no longer has any more sticky directions, remove sticky positioning and
        // the sticky CSS class.
        /** @type {?} */
        const hasDirection = STICKY_DIRECTIONS.some((/**
         * @param {?} dir
         * @return {?}
         */
        dir => !!element.style[dir]));
        if (!hasDirection) {
            element.style.position = '';
            element.classList.remove(this._stickCellCss);
        }
    }
    /**
     * Adds the sticky styling to the element by adding the sticky style class, changing position
     * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
     * direction and value.
     * @param {?} element
     * @param {?} dir
     * @param {?} dirValue
     * @return {?}
     */
    _addStickyStyle(element, dir, dirValue) {
        element.classList.add(this._stickCellCss);
        element.style[dir] = `${dirValue}px`;
        element.style.cssText += 'position: -webkit-sticky; position: sticky; ';
        element.style.zIndex = this._getCalculatedZIndex(element);
    }
    /**
     * Calculate what the z-index should be for the element, depending on what directions (top,
     * bottom, left, right) have been set. It should be true that elements with a top direction
     * should have the highest index since these are elements like a table header. If any of those
     * elements are also sticky in another direction, then they should appear above other elements
     * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
     * (e.g. footer rows) should then be next in the ordering such that they are below the header
     * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
     * should minimally increment so that they are above non-sticky elements but below top and bottom
     * elements.
     * @param {?} element
     * @return {?}
     */
    _getCalculatedZIndex(element) {
        /** @type {?} */
        const zIndexIncrements = {
            top: 100,
            bottom: 10,
            left: 1,
            right: 1,
        };
        /** @type {?} */
        let zIndex = 0;
        // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
        // loses the array generic type in the `for of`. But we *also* have to use `Array` because
        // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`
        for (const dir of (/** @type {?} */ (STICKY_DIRECTIONS))) {
            if (element.style[dir]) {
                zIndex += zIndexIncrements[dir];
            }
        }
        return zIndex ? `${zIndex}` : '';
    }
    /**
     * Gets the widths for each cell in the provided row.
     * @param {?} row
     * @return {?}
     */
    _getCellWidths(row) {
        /** @type {?} */
        const cellWidths = [];
        /** @type {?} */
        const firstRowCells = row.children;
        for (let i = 0; i < firstRowCells.length; i++) {
            /** @type {?} */
            let cell = (/** @type {?} */ (firstRowCells[i]));
            cellWidths.push(cell.getBoundingClientRect().width);
        }
        return cellWidths;
    }
    /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     * @param {?} widths
     * @param {?} stickyStates
     * @return {?}
     */
    _getStickyStartColumnPositions(widths, stickyStates) {
        /** @type {?} */
        const positions = [];
        /** @type {?} */
        let nextPosition = 0;
        for (let i = 0; i < widths.length; i++) {
            if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
            }
        }
        return positions;
    }
    /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     * @param {?} widths
     * @param {?} stickyStates
     * @return {?}
     */
    _getStickyEndColumnPositions(widths, stickyStates) {
        /** @type {?} */
        const positions = [];
        /** @type {?} */
        let nextPosition = 0;
        for (let i = widths.length; i > 0; i--) {
            if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
            }
        }
        return positions;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/table-errors.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Returns an error to be thrown when attempting to find an unexisting column.
 * \@docs-private
 * @param {?} id Id whose lookup failed.
 * @return {?}
 */
function getTableUnknownColumnError(id) {
    return Error(`Could not find column with id "${id}".`);
}
/**
 * Returns an error to be thrown when two column definitions have the same name.
 * \@docs-private
 * @param {?} name
 * @return {?}
 */
function getTableDuplicateColumnNameError(name) {
    return Error(`Duplicate column definition name provided: "${name}".`);
}
/**
 * Returns an error to be thrown when there are multiple rows that are missing a when function.
 * \@docs-private
 * @return {?}
 */
function getTableMultipleDefaultRowDefsError() {
    return Error(`There can only be one default row without a when predicate function.`);
}
/**
 * Returns an error to be thrown when there are no matching row defs for a particular set of data.
 * \@docs-private
 * @param {?} data
 * @return {?}
 */
function getTableMissingMatchingRowDefError(data) {
    return Error(`Could not find a matching row definition for the` +
        `provided row data: ${JSON.stringify(data)}`);
}
/**
 * Returns an error to be thrown when there is no row definitions present in the content.
 * \@docs-private
 * @return {?}
 */
function getTableMissingRowDefsError() {
    return Error('Missing definitions for header, footer, and row; ' +
        'cannot determine which columns should be rendered.');
}
/**
 * Returns an error to be thrown when the data source does not match the compatible types.
 * \@docs-private
 * @return {?}
 */
function getTableUnknownDataSourceError() {
    return Error(`Provided data source did not match an array, Observable, or DataSource`);
}
/**
 * Returns an error to be thrown when the text column cannot find a parent table to inject.
 * \@docs-private
 * @return {?}
 */
function getTableTextColumnMissingParentTableError() {
    return Error(`Text column could not find a parent table for registration.`);
}
/**
 * Returns an error to be thrown when a table text column doesn't have a name.
 * \@docs-private
 * @return {?}
 */
function getTableTextColumnMissingNameError() {
    return Error(`Table text column must have a name.`);
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/table.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Interface used to provide an outlet for rows to be inserted into.
 * @record
 */
function RowOutlet() { }
if (false) {}
/**
 * Provides a handle for the table to grab the view container's ng-container to insert data rows.
 * \@docs-private
 */
class DataRowOutlet {
    /**
     * @param {?} viewContainer
     * @param {?} elementRef
     */
    constructor(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
}
DataRowOutlet.ɵfac = function DataRowOutlet_Factory(t) { return new (t || DataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
DataRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: DataRowOutlet, selectors: [["", "rowOutlet", ""]] });
/** @nocollapse */
DataRowOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DataRowOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[rowOutlet]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();
if (false) {}
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the header.
 * \@docs-private
 */
class HeaderRowOutlet {
    /**
     * @param {?} viewContainer
     * @param {?} elementRef
     */
    constructor(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
}
HeaderRowOutlet.ɵfac = function HeaderRowOutlet_Factory(t) { return new (t || HeaderRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
HeaderRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: HeaderRowOutlet, selectors: [["", "headerRowOutlet", ""]] });
/** @nocollapse */
HeaderRowOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](HeaderRowOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[headerRowOutlet]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();
if (false) {}
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the footer.
 * \@docs-private
 */
class FooterRowOutlet {
    /**
     * @param {?} viewContainer
     * @param {?} elementRef
     */
    constructor(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
}
FooterRowOutlet.ɵfac = function FooterRowOutlet_Factory(t) { return new (t || FooterRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
FooterRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: FooterRowOutlet, selectors: [["", "footerRowOutlet", ""]] });
/** @nocollapse */
FooterRowOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](FooterRowOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[footerRowOutlet]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();
if (false) {}
/**
 * The table template that can be used by the mat-table. Should not be used outside of the
 * material library.
 * \@docs-private
 * @type {?}
 */
const CDK_TABLE_TEMPLATE = 
// Note that according to MDN, the `caption` element has to be projected as the **first**
// element in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
`
  <ng-content select="caption"></ng-content>
  <ng-container headerRowOutlet></ng-container>
  <ng-container rowOutlet></ng-container>
  <ng-container footerRowOutlet></ng-container>
`;
/**
 * Interface used to conveniently type the possible context interfaces for the render row.
 * \@docs-private
 * @record
 * @template T
 */
function RowContext() { }
/**
 * Class used to conveniently type the embedded view ref for rows with a context.
 * \@docs-private
 * @abstract
 * @template T
 */
class RowViewRef extends _angular_core__WEBPACK_IMPORTED_MODULE_3__["EmbeddedViewRef"] {
}
/**
 * Set of properties that represents the identity of a single rendered row.
 *
 * When the table needs to determine the list of rows to render, it will do so by iterating through
 * each data object and evaluating its list of row templates to display (when multiTemplateDataRows
 * is false, there is only one template per data object). For each pair of data object and row
 * template, a `RenderRow` is added to the list of rows to render. If the data object and row
 * template pair has already been rendered, the previously used `RenderRow` is added; else a new
 * `RenderRow` is * created. Once the list is complete and all data objects have been itereated
 * through, a diff is performed to determine the changes that need to be made to the rendered rows.
 *
 * \@docs-private
 * @record
 * @template T
 */
function RenderRow() { }
if (false) {}
/**
 * A data table that can render a header row, data rows, and a footer row.
 * Uses the dataSource input to determine the data to be rendered. The data can be provided either
 * as a data array, an Observable stream that emits the data array to render, or a DataSource with a
 * connect function that will return an Observable stream that emits the data array to render.
 * @template T
 */
class CdkTable {
    /**
     * @param {?} _differs
     * @param {?} _changeDetectorRef
     * @param {?} _elementRef
     * @param {?} role
     * @param {?} _dir
     * @param {?} _document
     * @param {?} _platform
     */
    constructor(_differs, _changeDetectorRef, _elementRef, role, _dir, _document, _platform) {
        this._differs = _differs;
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._dir = _dir;
        this._platform = _platform;
        /**
         * Subject that emits when the component has been destroyed.
         */
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Map of all the user's defined columns (header, data, and footer cell template) identified by
         * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
         * any custom column definitions added to `_customColumnDefs`.
         */
        this._columnDefsByName = new Map();
        /**
         * Column definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * column definitions as *its* content child.
         */
        this._customColumnDefs = new Set();
        /**
         * Data row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * built-in data rows as *its* content child.
         */
        this._customRowDefs = new Set();
        /**
         * Header row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * built-in header rows as *its* content child.
         */
        this._customHeaderRowDefs = new Set();
        /**
         * Footer row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
         * built-in footer row as *its* content child.
         */
        this._customFooterRowDefs = new Set();
        /**
         * Whether the header row definition has been changed. Triggers an update to the header row after
         * content is checked. Initialized as true so that the table renders the initial set of rows.
         */
        this._headerRowDefChanged = true;
        /**
         * Whether the footer row definition has been changed. Triggers an update to the footer row after
         * content is checked. Initialized as true so that the table renders the initial set of rows.
         */
        this._footerRowDefChanged = true;
        /**
         * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
         * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
         * the cached `RenderRow` objects when possible, the row identity is preserved when the data
         * and row template matches, which allows the `IterableDiffer` to check rows by reference
         * and understand which rows are added/moved/removed.
         *
         * Implemented as a map of maps where the first key is the `data: T` object and the second is the
         * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
         * contains an array of created pairs. The array is necessary to handle cases where the data
         * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
         * stored.
         */
        this._cachedRenderRowsMap = new Map();
        /**
         * CSS class added to any row or cell that has sticky positioning applied. May be overriden by
         * table subclasses.
         */
        this.stickyCssClass = 'cdk-table-sticky';
        this._multiTemplateDataRows = false;
        // TODO(andrewseguin): Remove max value as the end index
        //   and instead calculate the view on init and scroll.
        /**
         * Stream containing the latest information on what rows are being displayed on screen.
         * Can be used by the data source to as a heuristic of what data should be provided.
         *
         * \@docs-private
         */
        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]({ start: 0, end: Number.MAX_VALUE });
        if (!role) {
            this._elementRef.nativeElement.setAttribute('role', 'grid');
        }
        this._document = _document;
        this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === 'TABLE';
    }
    /**
     * Tracking function that will be used to check the differences in data changes. Used similarly
     * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
     * relative to the function to know if a row should be added/removed/moved.
     * Accepts a function that takes two parameters, `index` and `item`.
     * @return {?}
     */
    get trackBy() {
        return this._trackByFn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    set trackBy(fn) {
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["isDevMode"])() && fn != null && typeof fn !== 'function' && (/** @type {?} */ (console)) &&
            (/** @type {?} */ (console.warn))) {
            console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}.`);
        }
        this._trackByFn = fn;
    }
    /**
     * The table's source of data, which can be provided in three ways (in order of complexity):
     *   - Simple data array (each object represents one table row)
     *   - Stream that emits a data array each time the array changes
     *   - `DataSource` object that implements the connect/disconnect interface.
     *
     * If a data array is provided, the table must be notified when the array's objects are
     * added, removed, or moved. This can be done by calling the `renderRows()` function which will
     * render the diff since the last table render. If the data array reference is changed, the table
     * will automatically trigger an update to the rows.
     *
     * When providing an Observable stream, the table will trigger an update automatically when the
     * stream emits a new array of data.
     *
     * Finally, when providing a `DataSource` object, the table will use the Observable stream
     * provided by the connect function and trigger updates when that stream emits new data array
     * values. During the table's ngOnDestroy or when the data source is removed from the table, the
     * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
     * subscriptions registered during the connect process).
     * @return {?}
     */
    get dataSource() {
        return this._dataSource;
    }
    /**
     * @param {?} dataSource
     * @return {?}
     */
    set dataSource(dataSource) {
        if (this._dataSource !== dataSource) {
            this._switchDataSource(dataSource);
        }
    }
    /**
     * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
     * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
     * dataobject will render the first row that evaluates its when predicate to true, in the order
     * defined in the table, or otherwise the default row which does not have a when predicate.
     * @return {?}
     */
    get multiTemplateDataRows() {
        return this._multiTemplateDataRows;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set multiTemplateDataRows(v) {
        this._multiTemplateDataRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
        // In Ivy if this value is set via a static attribute (e.g. <table multiTemplateDataRows>),
        // this setter will be invoked before the row outlet has been defined hence the null check.
        if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
            this._forceRenderDataRows();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._setupStickyStyler();
        if (this._isNativeHtmlTable) {
            this._applyNativeTableSections();
        }
        // Set up the trackBy function so that it uses the `RenderRow` as its identity by default. If
        // the user has provided a custom trackBy, return the result of that function as evaluated
        // with the values of the `RenderRow`'s data and index.
        this._dataDiffer = this._differs.find([]).create((/**
         * @param {?} _i
         * @param {?} dataRow
         * @return {?}
         */
        (_i, dataRow) => {
            return this.trackBy ? this.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
        }));
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        // Cache the row and column definitions gathered by ContentChildren and programmatic injection.
        this._cacheRowDefs();
        this._cacheColumnDefs();
        // Make sure that the user has at least added header, footer, or data row def.
        if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length) {
            throw getTableMissingRowDefsError();
        }
        // Render updates if the list of columns have been changed for the header, row, or footer defs.
        this._renderUpdatedColumns();
        // If the header row definition has been changed, trigger a render to the header row.
        if (this._headerRowDefChanged) {
            this._forceRenderHeaderRows();
            this._headerRowDefChanged = false;
        }
        // If the footer row definition has been changed, trigger a render to the footer row.
        if (this._footerRowDefChanged) {
            this._forceRenderFooterRows();
            this._footerRowDefChanged = false;
        }
        // If there is a data source and row definitions, connect to the data source unless a
        // connection has already been made.
        if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
            this._observeRenderChanges();
        }
        this._checkStickyStates();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._rowOutlet.viewContainer.clear();
        this._headerRowOutlet.viewContainer.clear();
        this._footerRowOutlet.viewContainer.clear();
        this._cachedRenderRowsMap.clear();
        this._onDestroy.next();
        this._onDestroy.complete();
        if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
            this.dataSource.disconnect(this);
        }
    }
    /**
     * Renders rows based on the table's latest set of data, which was either provided directly as an
     * input or retrieved through an Observable stream (directly or from a DataSource).
     * Checks for differences in the data since the last diff to perform only the necessary
     * changes (add/remove/move rows).
     *
     * If the table's data source is a DataSource or Observable, this will be invoked automatically
     * each time the provided Observable stream emits a new data array. Otherwise if your data is
     * an array, this function will need to be called to render any changes.
     * @return {?}
     */
    renderRows() {
        this._renderRows = this._getAllRenderRows();
        /** @type {?} */
        const changes = this._dataDiffer.diff(this._renderRows);
        if (!changes) {
            return;
        }
        /** @type {?} */
        const viewContainer = this._rowOutlet.viewContainer;
        changes.forEachOperation((/**
         * @param {?} record
         * @param {?} prevIndex
         * @param {?} currentIndex
         * @return {?}
         */
        (record, prevIndex, currentIndex) => {
            if (record.previousIndex == null) {
                this._insertRow(record.item, (/** @type {?} */ (currentIndex)));
            }
            else if (currentIndex == null) {
                viewContainer.remove((/** @type {?} */ (prevIndex)));
            }
            else {
                /** @type {?} */
                const view = (/** @type {?} */ (viewContainer.get((/** @type {?} */ (prevIndex)))));
                viewContainer.move((/** @type {?} */ (view)), currentIndex);
            }
        }));
        // Update the meta context of a row's context data (index, count, first, last, ...)
        this._updateRowIndexContext();
        // Update rows that did not get added/removed/moved but may have had their identity changed,
        // e.g. if trackBy matched data on some property but the actual data reference changed.
        changes.forEachIdentityChange((/**
         * @param {?} record
         * @return {?}
         */
        (record) => {
            /** @type {?} */
            const rowView = (/** @type {?} */ (viewContainer.get((/** @type {?} */ (record.currentIndex)))));
            rowView.context.$implicit = record.item.data;
        }));
        this.updateStickyColumnStyles();
    }
    /**
     * Sets the header row definition to be used. Overrides the header row definition gathered by
     * using `ContentChild`, if one exists. Sets a flag that will re-render the header row after the
     * table's content is checked.
     * \@docs-private
     * @deprecated Use `addHeaderRowDef` and `removeHeaderRowDef` instead
     * \@breaking-change 8.0.0
     * @param {?} headerRowDef
     * @return {?}
     */
    setHeaderRowDef(headerRowDef) {
        this._customHeaderRowDefs = new Set([headerRowDef]);
        this._headerRowDefChanged = true;
    }
    /**
     * Sets the footer row definition to be used. Overrides the footer row definition gathered by
     * using `ContentChild`, if one exists. Sets a flag that will re-render the footer row after the
     * table's content is checked.
     * \@docs-private
     * @deprecated Use `addFooterRowDef` and `removeFooterRowDef` instead
     * \@breaking-change 8.0.0
     * @param {?} footerRowDef
     * @return {?}
     */
    setFooterRowDef(footerRowDef) {
        this._customFooterRowDefs = new Set([footerRowDef]);
        this._footerRowDefChanged = true;
    }
    /**
     * Adds a column definition that was not included as part of the content children.
     * @param {?} columnDef
     * @return {?}
     */
    addColumnDef(columnDef) {
        this._customColumnDefs.add(columnDef);
    }
    /**
     * Removes a column definition that was not included as part of the content children.
     * @param {?} columnDef
     * @return {?}
     */
    removeColumnDef(columnDef) {
        this._customColumnDefs.delete(columnDef);
    }
    /**
     * Adds a row definition that was not included as part of the content children.
     * @param {?} rowDef
     * @return {?}
     */
    addRowDef(rowDef) {
        this._customRowDefs.add(rowDef);
    }
    /**
     * Removes a row definition that was not included as part of the content children.
     * @param {?} rowDef
     * @return {?}
     */
    removeRowDef(rowDef) {
        this._customRowDefs.delete(rowDef);
    }
    /**
     * Adds a header row definition that was not included as part of the content children.
     * @param {?} headerRowDef
     * @return {?}
     */
    addHeaderRowDef(headerRowDef) {
        this._customHeaderRowDefs.add(headerRowDef);
        this._headerRowDefChanged = true;
    }
    /**
     * Removes a header row definition that was not included as part of the content children.
     * @param {?} headerRowDef
     * @return {?}
     */
    removeHeaderRowDef(headerRowDef) {
        this._customHeaderRowDefs.delete(headerRowDef);
        this._headerRowDefChanged = true;
    }
    /**
     * Adds a footer row definition that was not included as part of the content children.
     * @param {?} footerRowDef
     * @return {?}
     */
    addFooterRowDef(footerRowDef) {
        this._customFooterRowDefs.add(footerRowDef);
        this._footerRowDefChanged = true;
    }
    /**
     * Removes a footer row definition that was not included as part of the content children.
     * @param {?} footerRowDef
     * @return {?}
     */
    removeFooterRowDef(footerRowDef) {
        this._customFooterRowDefs.delete(footerRowDef);
        this._footerRowDefChanged = true;
    }
    /**
     * Updates the header sticky styles. First resets all applied styles with respect to the cells
     * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
     * automatically called when the header row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     * @return {?}
     */
    updateStickyHeaderRowStyles() {
        /** @type {?} */
        const headerRows = this._getRenderedRows(this._headerRowOutlet);
        /** @type {?} */
        const tableElement = (/** @type {?} */ (this._elementRef.nativeElement));
        // Hide the thead element if there are no header rows. This is necessary to satisfy
        // overzealous a11y checkers that fail because the `rowgroup` element does not contain
        // required child `row`.
        /** @type {?} */
        const thead = tableElement.querySelector('thead');
        if (thead) {
            thead.style.display = headerRows.length ? '' : 'none';
        }
        /** @type {?} */
        const stickyStates = this._headerRowDefs.map((/**
         * @param {?} def
         * @return {?}
         */
        def => def.sticky));
        this._stickyStyler.clearStickyPositioning(headerRows, ['top']);
        this._stickyStyler.stickRows(headerRows, stickyStates, 'top');
        // Reset the dirty state of the sticky input change since it has been used.
        this._headerRowDefs.forEach((/**
         * @param {?} def
         * @return {?}
         */
        def => def.resetStickyChanged()));
    }
    /**
     * Updates the footer sticky styles. First resets all applied styles with respect to the cells
     * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
     * automatically called when the footer row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     * @return {?}
     */
    updateStickyFooterRowStyles() {
        /** @type {?} */
        const footerRows = this._getRenderedRows(this._footerRowOutlet);
        /** @type {?} */
        const tableElement = (/** @type {?} */ (this._elementRef.nativeElement));
        // Hide the tfoot element if there are no footer rows. This is necessary to satisfy
        // overzealous a11y checkers that fail because the `rowgroup` element does not contain
        // required child `row`.
        /** @type {?} */
        const tfoot = tableElement.querySelector('tfoot');
        if (tfoot) {
            tfoot.style.display = footerRows.length ? '' : 'none';
        }
        /** @type {?} */
        const stickyStates = this._footerRowDefs.map((/**
         * @param {?} def
         * @return {?}
         */
        def => def.sticky));
        this._stickyStyler.clearStickyPositioning(footerRows, ['bottom']);
        this._stickyStyler.stickRows(footerRows, stickyStates, 'bottom');
        this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates);
        // Reset the dirty state of the sticky input change since it has been used.
        this._footerRowDefs.forEach((/**
         * @param {?} def
         * @return {?}
         */
        def => def.resetStickyChanged()));
    }
    /**
     * Updates the column sticky styles. First resets all applied styles with respect to the cells
     * sticking to the left and right. Then sticky styles are added for the left and right according
     * to the column definitions for each cell in each row. This is automatically called when
     * the data source provides a new set of data or when a column definition changes its sticky
     * input. May be called manually for cases where the cell content changes outside of these events.
     * @return {?}
     */
    updateStickyColumnStyles() {
        /** @type {?} */
        const headerRows = this._getRenderedRows(this._headerRowOutlet);
        /** @type {?} */
        const dataRows = this._getRenderedRows(this._rowOutlet);
        /** @type {?} */
        const footerRows = this._getRenderedRows(this._footerRowOutlet);
        // Clear the left and right positioning from all columns in the table across all rows since
        // sticky columns span across all table sections (header, data, footer)
        this._stickyStyler.clearStickyPositioning([...headerRows, ...dataRows, ...footerRows], ['left', 'right']);
        // Update the sticky styles for each header row depending on the def's sticky state
        headerRows.forEach((/**
         * @param {?} headerRow
         * @param {?} i
         * @return {?}
         */
        (headerRow, i) => {
            this._addStickyColumnStyles([headerRow], this._headerRowDefs[i]);
        }));
        // Update the sticky styles for each data row depending on its def's sticky state
        this._rowDefs.forEach((/**
         * @param {?} rowDef
         * @return {?}
         */
        rowDef => {
            // Collect all the rows rendered with this row definition.
            /** @type {?} */
            const rows = [];
            for (let i = 0; i < dataRows.length; i++) {
                if (this._renderRows[i].rowDef === rowDef) {
                    rows.push(dataRows[i]);
                }
            }
            this._addStickyColumnStyles(rows, rowDef);
        }));
        // Update the sticky styles for each footer row depending on the def's sticky state
        footerRows.forEach((/**
         * @param {?} footerRow
         * @param {?} i
         * @return {?}
         */
        (footerRow, i) => {
            this._addStickyColumnStyles([footerRow], this._footerRowDefs[i]);
        }));
        // Reset the dirty state of the sticky input change since it has been used.
        Array.from(this._columnDefsByName.values()).forEach((/**
         * @param {?} def
         * @return {?}
         */
        def => def.resetStickyChanged()));
    }
    /**
     * Get the list of RenderRow objects to render according to the current list of data and defined
     * row definitions. If the previous list already contained a particular pair, it should be reused
     * so that the differ equates their references.
     * @private
     * @return {?}
     */
    _getAllRenderRows() {
        /** @type {?} */
        const renderRows = [];
        // Store the cache and create a new one. Any re-used RenderRow objects will be moved into the
        // new cache while unused ones can be picked up by garbage collection.
        /** @type {?} */
        const prevCachedRenderRows = this._cachedRenderRowsMap;
        this._cachedRenderRowsMap = new Map();
        // For each data object, get the list of rows that should be rendered, represented by the
        // respective `RenderRow` object which is the pair of `data` and `CdkRowDef`.
        for (let i = 0; i < this._data.length; i++) {
            /** @type {?} */
            let data = this._data[i];
            /** @type {?} */
            const renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));
            if (!this._cachedRenderRowsMap.has(data)) {
                this._cachedRenderRowsMap.set(data, new WeakMap());
            }
            for (let j = 0; j < renderRowsForData.length; j++) {
                /** @type {?} */
                let renderRow = renderRowsForData[j];
                /** @type {?} */
                const cache = (/** @type {?} */ (this._cachedRenderRowsMap.get(renderRow.data)));
                if (cache.has(renderRow.rowDef)) {
                    (/** @type {?} */ (cache.get(renderRow.rowDef))).push(renderRow);
                }
                else {
                    cache.set(renderRow.rowDef, [renderRow]);
                }
                renderRows.push(renderRow);
            }
        }
        return renderRows;
    }
    /**
     * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
     * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
     * `(T, CdkRowDef)` pair.
     * @private
     * @param {?} data
     * @param {?} dataIndex
     * @param {?=} cache
     * @return {?}
     */
    _getRenderRowsForData(data, dataIndex, cache) {
        /** @type {?} */
        const rowDefs = this._getRowDefs(data, dataIndex);
        return rowDefs.map((/**
         * @param {?} rowDef
         * @return {?}
         */
        rowDef => {
            /** @type {?} */
            const cachedRenderRows = (cache && cache.has(rowDef)) ? (/** @type {?} */ (cache.get(rowDef))) : [];
            if (cachedRenderRows.length) {
                /** @type {?} */
                const dataRow = (/** @type {?} */ (cachedRenderRows.shift()));
                dataRow.dataIndex = dataIndex;
                return dataRow;
            }
            else {
                return { data, rowDef, dataIndex };
            }
        }));
    }
    /**
     * Update the map containing the content's column definitions.
     * @private
     * @return {?}
     */
    _cacheColumnDefs() {
        this._columnDefsByName.clear();
        /** @type {?} */
        const columnDefs = mergeQueryListAndSet(this._contentColumnDefs, this._customColumnDefs);
        columnDefs.forEach((/**
         * @param {?} columnDef
         * @return {?}
         */
        columnDef => {
            if (this._columnDefsByName.has(columnDef.name)) {
                throw getTableDuplicateColumnNameError(columnDef.name);
            }
            this._columnDefsByName.set(columnDef.name, columnDef);
        }));
    }
    /**
     * Update the list of all available row definitions that can be used.
     * @private
     * @return {?}
     */
    _cacheRowDefs() {
        this._headerRowDefs =
            mergeQueryListAndSet(this._contentHeaderRowDefs, this._customHeaderRowDefs);
        this._footerRowDefs =
            mergeQueryListAndSet(this._contentFooterRowDefs, this._customFooterRowDefs);
        this._rowDefs = mergeQueryListAndSet(this._contentRowDefs, this._customRowDefs);
        // After all row definitions are determined, find the row definition to be considered default.
        /** @type {?} */
        const defaultRowDefs = this._rowDefs.filter((/**
         * @param {?} def
         * @return {?}
         */
        def => !def.when));
        if (!this.multiTemplateDataRows && defaultRowDefs.length > 1) {
            throw getTableMultipleDefaultRowDefsError();
        }
        this._defaultRowDef = defaultRowDefs[0];
    }
    /**
     * Check if the header, data, or footer rows have changed what columns they want to display or
     * whether the sticky states have changed for the header or footer. If there is a diff, then
     * re-render that section.
     * @private
     * @return {?}
     */
    _renderUpdatedColumns() {
        /** @type {?} */
        const columnsDiffReducer = (/**
         * @param {?} acc
         * @param {?} def
         * @return {?}
         */
        (acc, def) => acc || !!def.getColumnsDiff());
        // Force re-render data rows if the list of column definitions have changed.
        if (this._rowDefs.reduce(columnsDiffReducer, false)) {
            this._forceRenderDataRows();
        }
        // Force re-render header/footer rows if the list of column definitions have changed..
        if (this._headerRowDefs.reduce(columnsDiffReducer, false)) {
            this._forceRenderHeaderRows();
        }
        if (this._footerRowDefs.reduce(columnsDiffReducer, false)) {
            this._forceRenderFooterRows();
        }
    }
    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the row outlet. Otherwise start listening for new data.
     * @private
     * @param {?} dataSource
     * @return {?}
     */
    _switchDataSource(dataSource) {
        this._data = [];
        if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
            this.dataSource.disconnect(this);
        }
        // Stop listening for data from the previous data source.
        if (this._renderChangeSubscription) {
            this._renderChangeSubscription.unsubscribe();
            this._renderChangeSubscription = null;
        }
        if (!dataSource) {
            if (this._dataDiffer) {
                this._dataDiffer.diff([]);
            }
            this._rowOutlet.viewContainer.clear();
        }
        this._dataSource = dataSource;
    }
    /**
     * Set up a subscription for the data provided by the data source.
     * @private
     * @return {?}
     */
    _observeRenderChanges() {
        // If no data source has been set, there is nothing to observe for changes.
        if (!this.dataSource) {
            return;
        }
        /** @type {?} */
        let dataStream;
        if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
            dataStream = this.dataSource.connect(this);
        }
        else if (Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["isObservable"])(this.dataSource)) {
            dataStream = this.dataSource;
        }
        else if (Array.isArray(this.dataSource)) {
            dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(this.dataSource);
        }
        if (dataStream === undefined) {
            throw getTableUnknownDataSourceError();
        }
        this._renderChangeSubscription = dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this._data = data || [];
            this.renderRows();
        }));
    }
    /**
     * Clears any existing content in the header row outlet and creates a new embedded view
     * in the outlet using the header row definition.
     * @private
     * @return {?}
     */
    _forceRenderHeaderRows() {
        // Clear the header row outlet if any content exists.
        if (this._headerRowOutlet.viewContainer.length > 0) {
            this._headerRowOutlet.viewContainer.clear();
        }
        this._headerRowDefs.forEach((/**
         * @param {?} def
         * @param {?} i
         * @return {?}
         */
        (def, i) => this._renderRow(this._headerRowOutlet, def, i)));
        this.updateStickyHeaderRowStyles();
        this.updateStickyColumnStyles();
    }
    /**
     * Clears any existing content in the footer row outlet and creates a new embedded view
     * in the outlet using the footer row definition.
     * @private
     * @return {?}
     */
    _forceRenderFooterRows() {
        // Clear the footer row outlet if any content exists.
        if (this._footerRowOutlet.viewContainer.length > 0) {
            this._footerRowOutlet.viewContainer.clear();
        }
        this._footerRowDefs.forEach((/**
         * @param {?} def
         * @param {?} i
         * @return {?}
         */
        (def, i) => this._renderRow(this._footerRowOutlet, def, i)));
        this.updateStickyFooterRowStyles();
        this.updateStickyColumnStyles();
    }
    /**
     * Adds the sticky column styles for the rows according to the columns' stick states.
     * @private
     * @param {?} rows
     * @param {?} rowDef
     * @return {?}
     */
    _addStickyColumnStyles(rows, rowDef) {
        /** @type {?} */
        const columnDefs = Array.from(rowDef.columns || []).map((/**
         * @param {?} columnName
         * @return {?}
         */
        columnName => {
            /** @type {?} */
            const columnDef = this._columnDefsByName.get(columnName);
            if (!columnDef) {
                throw getTableUnknownColumnError(columnName);
            }
            return (/** @type {?} */ (columnDef));
        }));
        /** @type {?} */
        const stickyStartStates = columnDefs.map((/**
         * @param {?} columnDef
         * @return {?}
         */
        columnDef => columnDef.sticky));
        /** @type {?} */
        const stickyEndStates = columnDefs.map((/**
         * @param {?} columnDef
         * @return {?}
         */
        columnDef => columnDef.stickyEnd));
        this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates);
    }
    /**
     * Gets the list of rows that have been rendered in the row outlet.
     * @param {?} rowOutlet
     * @return {?}
     */
    _getRenderedRows(rowOutlet) {
        /** @type {?} */
        const renderedRows = [];
        for (let i = 0; i < rowOutlet.viewContainer.length; i++) {
            /** @type {?} */
            const viewRef = ((/** @type {?} */ ((/** @type {?} */ (rowOutlet.viewContainer.get(i))))));
            renderedRows.push(viewRef.rootNodes[0]);
        }
        return renderedRows;
    }
    /**
     * Get the matching row definitions that should be used for this row data. If there is only
     * one row definition, it is returned. Otherwise, find the row definitions that has a when
     * predicate that returns true with the data. If none return true, return the default row
     * definition.
     * @param {?} data
     * @param {?} dataIndex
     * @return {?}
     */
    _getRowDefs(data, dataIndex) {
        if (this._rowDefs.length == 1) {
            return [this._rowDefs[0]];
        }
        /** @type {?} */
        let rowDefs = [];
        if (this.multiTemplateDataRows) {
            rowDefs = this._rowDefs.filter((/**
             * @param {?} def
             * @return {?}
             */
            def => !def.when || def.when(dataIndex, data)));
        }
        else {
            /** @type {?} */
            let rowDef = this._rowDefs.find((/**
             * @param {?} def
             * @return {?}
             */
            def => def.when && def.when(dataIndex, data))) || this._defaultRowDef;
            if (rowDef) {
                rowDefs.push(rowDef);
            }
        }
        if (!rowDefs.length) {
            throw getTableMissingMatchingRowDefError(data);
        }
        return rowDefs;
    }
    /**
     * Create the embedded view for the data row template and place it in the correct index location
     * within the data row view container.
     * @private
     * @param {?} renderRow
     * @param {?} renderIndex
     * @return {?}
     */
    _insertRow(renderRow, renderIndex) {
        /** @type {?} */
        const rowDef = renderRow.rowDef;
        /** @type {?} */
        const context = { $implicit: renderRow.data };
        this._renderRow(this._rowOutlet, rowDef, renderIndex, context);
    }
    /**
     * Creates a new row template in the outlet and fills it with the set of cell templates.
     * Optionally takes a context to provide to the row and cells, as well as an optional index
     * of where to place the new row template in the outlet.
     * @private
     * @param {?} outlet
     * @param {?} rowDef
     * @param {?} index
     * @param {?=} context
     * @return {?}
     */
    _renderRow(outlet, rowDef, index, context = {}) {
        // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
        outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);
        for (let cellTemplate of this._getCellTemplates(rowDef)) {
            if (CdkCellOutlet.mostRecentCellOutlet) {
                CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
            }
        }
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Updates the index-related context for each row to reflect any changes in the index of the rows,
     * e.g. first/last/even/odd.
     * @private
     * @return {?}
     */
    _updateRowIndexContext() {
        /** @type {?} */
        const viewContainer = this._rowOutlet.viewContainer;
        for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
            /** @type {?} */
            const viewRef = (/** @type {?} */ (viewContainer.get(renderIndex)));
            /** @type {?} */
            const context = (/** @type {?} */ (viewRef.context));
            context.count = count;
            context.first = renderIndex === 0;
            context.last = renderIndex === count - 1;
            context.even = renderIndex % 2 === 0;
            context.odd = !context.even;
            if (this.multiTemplateDataRows) {
                context.dataIndex = this._renderRows[renderIndex].dataIndex;
                context.renderIndex = renderIndex;
            }
            else {
                context.index = this._renderRows[renderIndex].dataIndex;
            }
        }
    }
    /**
     * Gets the column definitions for the provided row def.
     * @private
     * @param {?} rowDef
     * @return {?}
     */
    _getCellTemplates(rowDef) {
        if (!rowDef || !rowDef.columns) {
            return [];
        }
        return Array.from(rowDef.columns, (/**
         * @param {?} columnId
         * @return {?}
         */
        columnId => {
            /** @type {?} */
            const column = this._columnDefsByName.get(columnId);
            if (!column) {
                throw getTableUnknownColumnError(columnId);
            }
            return rowDef.extractCellTemplate(column);
        }));
    }
    /**
     * Adds native table sections (e.g. tbody) and moves the row outlets into them.
     * @private
     * @return {?}
     */
    _applyNativeTableSections() {
        /** @type {?} */
        const documentFragment = this._document.createDocumentFragment();
        /** @type {?} */
        const sections = [
            { tag: 'thead', outlet: this._headerRowOutlet },
            { tag: 'tbody', outlet: this._rowOutlet },
            { tag: 'tfoot', outlet: this._footerRowOutlet },
        ];
        for (const section of sections) {
            /** @type {?} */
            const element = this._document.createElement(section.tag);
            element.setAttribute('role', 'rowgroup');
            element.appendChild(section.outlet.elementRef.nativeElement);
            documentFragment.appendChild(element);
        }
        // Use a DocumentFragment so we don't hit the DOM on each iteration.
        this._elementRef.nativeElement.appendChild(documentFragment);
    }
    /**
     * Forces a re-render of the data rows. Should be called in cases where there has been an input
     * change that affects the evaluation of which rows should be rendered, e.g. toggling
     * `multiTemplateDataRows` or adding/removing row definitions.
     * @private
     * @return {?}
     */
    _forceRenderDataRows() {
        this._dataDiffer.diff([]);
        this._rowOutlet.viewContainer.clear();
        this.renderRows();
        this.updateStickyColumnStyles();
    }
    /**
     * Checks if there has been a change in sticky states since last check and applies the correct
     * sticky styles. Since checking resets the "dirty" state, this should only be performed once
     * during a change detection and after the inputs are settled (after content check).
     * @private
     * @return {?}
     */
    _checkStickyStates() {
        /** @type {?} */
        const stickyCheckReducer = (/**
         * @param {?} acc
         * @param {?} d
         * @return {?}
         */
        (acc, d) => {
            return acc || d.hasStickyChanged();
        });
        // Note that the check needs to occur for every definition since it notifies the definition
        // that it can reset its dirty state. Using another operator like `some` may short-circuit
        // remaining definitions and leave them in an unchecked state.
        if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
            this.updateStickyHeaderRowStyles();
        }
        if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
            this.updateStickyFooterRowStyles();
        }
        if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
            this.updateStickyColumnStyles();
        }
    }
    /**
     * Creates the sticky styler that will be used for sticky rows and columns. Listens
     * for directionality changes and provides the latest direction to the styler. Re-applies column
     * stickiness when directionality changes.
     * @private
     * @return {?}
     */
    _setupStickyStyler() {
        /** @type {?} */
        const direction = this._dir ? this._dir.value : 'ltr';
        this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, direction, this._platform.isBrowser);
        (this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this._stickyStyler.direction = value;
            this.updateStickyColumnStyles();
        }));
    }
}
CdkTable.ɵfac = function CdkTable_Factory(t) { return new (t || CdkTable)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinjectAttribute"]('role'), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"])); };
CdkTable.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkTable, selectors: [["cdk-table"], ["table", "cdk-table", ""]], contentQueries: function CdkTable_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkColumnDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkRowDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkHeaderRowDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkFooterRowDef, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentColumnDefs = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentRowDefs = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentHeaderRowDefs = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentFooterRowDefs = _t);
    } }, viewQuery: function CdkTable_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](DataRowOutlet, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](HeaderRowOutlet, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](FooterRowOutlet, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._rowOutlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._headerRowOutlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._footerRowOutlet = _t.first);
    } }, hostAttrs: [1, "cdk-table"], inputs: { trackBy: "trackBy", dataSource: "dataSource", multiTemplateDataRows: "multiTemplateDataRows" }, exportAs: ["cdkTable"], ngContentSelectors: _c1, decls: 4, vars: 0, consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["footerRowOutlet", ""]], template: function CdkTable_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](3, 2);
    } }, directives: [HeaderRowOutlet,
        DataRowOutlet,
        FooterRowOutlet], encapsulation: 2 });
/** @nocollapse */
CdkTable.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"], args: ['role',] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
CdkTable.propDecorators = {
    trackBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    dataSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    multiTemplateDataRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    _rowOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [DataRowOutlet, { static: true },] }],
    _headerRowOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [HeaderRowOutlet, { static: true },] }],
    _footerRowOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [FooterRowOutlet, { static: true },] }],
    _contentColumnDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [CdkColumnDef, { descendants: true },] }],
    _contentRowDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [CdkRowDef, { descendants: true },] }],
    _contentHeaderRowDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [CdkHeaderRowDef, {
                    descendants: true
                },] }],
    _contentFooterRowDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [CdkFooterRowDef, {
                    descendants: true
                },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTable, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'cdk-table, table[cdk-table]',
                exportAs: 'cdkTable',
                template: CDK_TABLE_TEMPLATE,
                host: {
                    'class': 'cdk-table'
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                // The "OnPush" status for the `MatTable` component is effectively a noop, so we are removing it.
                // The view for `MatTable` consists entirely of templates declared in other views. As they are
                // declared elsewhere, they are checked when their declaration points are checked.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"],
                args: ['role']
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] }]; }, { trackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], dataSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], multiTemplateDataRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], _rowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [DataRowOutlet, { static: true }]
        }], _headerRowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [HeaderRowOutlet, { static: true }]
        }], _footerRowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [FooterRowOutlet, { static: true }]
        }], _contentColumnDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [CdkColumnDef, { descendants: true }]
        }], _contentRowDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [CdkRowDef, { descendants: true }]
        }], _contentHeaderRowDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [CdkHeaderRowDef, {
                    descendants: true
                }]
        }], _contentFooterRowDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [CdkFooterRowDef, {
                    descendants: true
                }]
        }] }); })();
if (false) {}
/**
 * Utility function that gets a merged list of the entries in a QueryList and values of a Set.
 * @template T
 * @param {?} queryList
 * @param {?} set
 * @return {?}
 */
function mergeQueryListAndSet(queryList, set) {
    return queryList.toArray().concat(Array.from(set));
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/text-column.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Configurable options for `CdkTextColumn`.
 * @record
 * @template T
 */
function TextColumnOptions() { }
if (false) {}
/**
 * Injection token that can be used to specify the text column options.
 * @type {?}
 */
const TEXT_COLUMN_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('text-column-options');
/**
 * Column that simply shows text content for the header and row cells. Assumes that the table
 * is using the native table implementation (`<table>`).
 *
 * By default, the name of this column will be the header text and data property accessor.
 * The header text can be overridden with the `headerText` input. Cell values can be overridden with
 * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
 * input.
 * @template T
 */
class CdkTextColumn {
    /**
     * @param {?} _table
     * @param {?} _options
     */
    constructor(_table, _options) {
        this._table = _table;
        this._options = _options;
        /**
         * Alignment of the cell values.
         */
        this.justify = 'start';
        this._options = _options || {};
    }
    /**
     * Column name that should be used to reference this column.
     * @return {?}
     */
    get name() {
        return this._name;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    set name(name) {
        this._name = name;
        // With Ivy, inputs can be initialized before static query results are
        // available. In that case, we defer the synchronization until "ngOnInit" fires.
        this._syncColumnDefName();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._syncColumnDefName();
        if (this.headerText === undefined) {
            this.headerText = this._createDefaultHeaderText();
        }
        if (!this.dataAccessor) {
            this.dataAccessor =
                this._options.defaultDataAccessor || ((/**
                 * @param {?} data
                 * @param {?} name
                 * @return {?}
                 */
                (data, name) => ((/** @type {?} */ (data)))[name]));
        }
        if (this._table) {
            // Provide the cell and headerCell directly to the table with the static `ViewChild` query,
            // since the columnDef will not pick up its content by the time the table finishes checking
            // its content and initializing the rows.
            this.columnDef.cell = this.cell;
            this.columnDef.headerCell = this.headerCell;
            this._table.addColumnDef(this.columnDef);
        }
        else {
            throw getTableTextColumnMissingParentTableError();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._table) {
            this._table.removeColumnDef(this.columnDef);
        }
    }
    /**
     * Creates a default header text. Use the options' header text transformation function if one
     * has been provided. Otherwise simply capitalize the column name.
     * @return {?}
     */
    _createDefaultHeaderText() {
        /** @type {?} */
        const name = this.name;
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["isDevMode"])() && !name) {
            throw getTableTextColumnMissingNameError();
        }
        if (this._options && this._options.defaultHeaderTextTransform) {
            return this._options.defaultHeaderTextTransform(name);
        }
        return name[0].toUpperCase() + name.slice(1);
    }
    /**
     * Synchronizes the column definition name with the text column name.
     * @private
     * @return {?}
     */
    _syncColumnDefName() {
        if (this.columnDef) {
            this.columnDef.name = this.name;
        }
    }
}
CdkTextColumn.ɵfac = function CdkTextColumn_Factory(t) { return new (t || CdkTextColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTable, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](TEXT_COLUMN_OPTIONS, 8)); };
CdkTextColumn.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkTextColumn, selectors: [["cdk-text-column"]], viewQuery: function CdkTextColumn_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkColumnDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkCellDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkHeaderCellDef, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.columnDef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
    } }, inputs: { justify: "justify", name: "name", headerText: "headerText", dataAccessor: "dataAccessor" }, decls: 3, vars: 0, consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]], template: function CdkTextColumn_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CdkTextColumn_th_1_Template, 2, 3, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CdkTextColumn_td_2_Template, 2, 3, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    } }, directives: [CdkColumnDef,
        CdkHeaderCellDef,
        CdkCellDef,
        CdkHeaderCell,
        CdkCell], encapsulation: 2 });
/** @nocollapse */
CdkTextColumn.ctorParameters = () => [
    { type: CdkTable, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [TEXT_COLUMN_OPTIONS,] }] }
];
CdkTextColumn.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    headerText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    dataAccessor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    justify: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    columnDef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [CdkColumnDef, { static: true },] }],
    cell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [CdkCellDef, { static: true },] }],
    headerCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [CdkHeaderCellDef, { static: true },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTextColumn, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'cdk-text-column',
                template: `
    <ng-container cdkColumnDef>
      <th cdk-header-cell *cdkHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td cdk-cell *cdkCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                // Change detection is intentionally not set to OnPush. This component's template will be provided
                // to the table to be inserted into its view. This is problematic when change detection runs since
                // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
                // mean's the template in the table's view will not have the updated value (and in fact will cause
                // an ExpressionChangedAfterItHasBeenCheckedError).
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default
            }]
    }], function () { return [{ type: CdkTable, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [TEXT_COLUMN_OPTIONS]
            }] }]; }, { justify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], headerText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], dataAccessor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], columnDef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [CdkColumnDef, { static: true }]
        }], cell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [CdkCellDef, { static: true }]
        }], headerCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [CdkHeaderCellDef, { static: true }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/table-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXPORTED_DECLARATIONS = [
    CdkTable,
    CdkRowDef,
    CdkCellDef,
    CdkCellOutlet,
    CdkHeaderCellDef,
    CdkFooterCellDef,
    CdkColumnDef,
    CdkCell,
    CdkRow,
    CdkHeaderCell,
    CdkFooterCell,
    CdkHeaderRow,
    CdkHeaderRowDef,
    CdkFooterRow,
    CdkFooterRowDef,
    DataRowOutlet,
    HeaderRowOutlet,
    FooterRowOutlet,
    CdkTextColumn,
];
class CdkTableModule {
}
CdkTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CdkTableModule });
CdkTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function CdkTableModule_Factory(t) { return new (t || CdkTableModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CdkTableModule, { declarations: [CdkTable,
        CdkRowDef,
        CdkCellDef,
        CdkCellOutlet,
        CdkHeaderCellDef,
        CdkFooterCellDef,
        CdkColumnDef,
        CdkCell,
        CdkRow,
        CdkHeaderCell,
        CdkFooterCell,
        CdkHeaderRow,
        CdkHeaderRowDef,
        CdkFooterRow,
        CdkFooterRowDef,
        DataRowOutlet,
        HeaderRowOutlet,
        FooterRowOutlet,
        CdkTextColumn], exports: [CdkTable,
        CdkRowDef,
        CdkCellDef,
        CdkCellOutlet,
        CdkHeaderCellDef,
        CdkFooterCellDef,
        CdkColumnDef,
        CdkCell,
        CdkRow,
        CdkHeaderCell,
        CdkFooterCell,
        CdkHeaderRow,
        CdkHeaderRowDef,
        CdkFooterRow,
        CdkFooterRowDef,
        DataRowOutlet,
        HeaderRowOutlet,
        FooterRowOutlet,
        CdkTextColumn] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                exports: EXPORTED_DECLARATIONS,
                declarations: EXPORTED_DECLARATIONS
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=table.js.map

/***/ }),

/***/ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-empty-state.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-empty-state.js ***!
  \**********************************************************************************************************************/
/*! exports provided: DtCustomEmptyState, DtCustomEmptyStateBase, DtEmptyState, DtEmptyStateFooterActions, DtEmptyStateItem, DtEmptyStateItemImage, DtEmptyStateItemTitle, DtEmptyStateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtCustomEmptyState", function() { return DtCustomEmptyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtCustomEmptyStateBase", function() { return DtCustomEmptyStateBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtEmptyState", function() { return DtEmptyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtEmptyStateFooterActions", function() { return DtEmptyStateFooterActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtEmptyStateItem", function() { return DtEmptyStateItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtEmptyStateItemImage", function() { return DtEmptyStateItemImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtEmptyStateItemTitle", function() { return DtEmptyStateItemTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtEmptyStateModule", function() { return DtEmptyStateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dynatrace/barista-components/icon */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-icon.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @dynatrace/barista-components/core */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-core.js");








/**
 * @fileoverview added by tsickle
 * Generated from: src/empty-state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The min-width from which empty state items are displayed horizontally.
 * @type {?}
 */





const _c0 = [[["dt-empty-state-item-img"], ["", "dt-empty-state-item-img", ""], ["", "dtEmptyStateItemImg", ""]], [["dt-empty-state-item-title"], ["", "dt-empty-state-item-title", ""], ["", "dtEmptyStateItemTitle", ""]], "*", [["dt-empty-state-footer-actions"]]];
const _c1 = ["dt-empty-state-item-img, [dt-empty-state-item-img], [dtEmptyStateItemImg]", "dt-empty-state-item-title, [dt-empty-state-item-title], [dtEmptyStateItemTitle]", "*", "dt-empty-state-footer-actions"];
const _c2 = ["*"];
const ITEMS_HORIZONTAL_BREAKPOINT = 540;
/**
 * The min-width from which the empty state items are aligned next to each other.
 * @type {?}
 */
const LAYOUT_HORIZONTAL_BREAKPOINT = 760;
/**
 * An empty state item. An empty state card may contain one or more such items.
 *
 * \@example
 *   <dt-empty-state-item>
 *     <dt-empty-state-item-img>
 *      <img src="asset.png" alt="asset"/>
 *     </dt-empty-state-item-img>
 *     <dt-empty-state-item-title>optional heading</dt-empty-state-item-title>
 *     some item description
 *   </dt-empty-state-item>
 */
class DtEmptyStateItem {
}
DtEmptyStateItem.ɵfac = function DtEmptyStateItem_Factory(t) { return new (t || DtEmptyStateItem)(); };
DtEmptyStateItem.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DtEmptyStateItem, selectors: [["dt-empty-state-item"]], hostAttrs: [1, "dt-empty-state-item"], ngContentSelectors: _c1, decls: 10, vars: 0, consts: [[1, "dt-empty-state-item-icon-area"], ["name", "play"], [1, "dt-empty-state-item-content-area"], [1, "dt-empty-state-item-image-area"], [1, "dt-empty-state-item-text-area"], [1, "dt-empty-state-footer-actions"]], template: function DtEmptyStateItem_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "dt-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_1__["DtIcon"]], styles: ["[_nghost-%COMP%]{display:block}.dt-empty-state-item-image-area[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;margin-bottom:16px;min-width:120px;max-width:180px}.dt-empty-state-item-text-area[_ngcontent-%COMP%]{max-width:580px}.dt-empty-state-item-icon-area[_ngcontent-%COMP%]{display:none;height:60px;align-items:center;justify-content:center}.dt-empty-state-item-icon-area[_ngcontent-%COMP%]   .dt-icon[_ngcontent-%COMP%]{width:28px;height:28px;margin:auto;transform:rotate(90deg)}.dt-empty-state-item-icon-area[_ngcontent-%COMP%]   .dt-icon[_ngcontent-%COMP%]     svg{fill:#ccc}  .dt-empty-state-item-title{display:block;margin-bottom:16px;font-family:BerninaSansWeb,OpenSans,sans-serif;color:#454646;font-weight:400;font-size:18px;line-height:1.6}  .dt-empty-state-item-img{display:block;width:100%;text-align:center}  .dt-empty-state-item-img img,   .dt-empty-state-item-img svg{max-width:100%}  .dt-empty-state-footer-actions{margin-top:16px}  .dt-empty-state-footer-actions>.dt-button+.dt-button{margin-left:8px}.dt-empty-state-items-horizontal[_nghost-%COMP%]   .dt-empty-state-item-content-area[_ngcontent-%COMP%], .dt-empty-state-items-horizontal   [_nghost-%COMP%]   .dt-empty-state-item-content-area[_ngcontent-%COMP%]{display:flex}.dt-empty-state-items-horizontal[_nghost-%COMP%]   .dt-empty-state-item-image-area[_ngcontent-%COMP%], .dt-empty-state-items-horizontal   [_nghost-%COMP%]   .dt-empty-state-item-image-area[_ngcontent-%COMP%]{margin-right:16px;margin-left:0;margin-bottom:0}.dt-empty-state-layout-horizontal[_nghost-%COMP%], .dt-empty-state-layout-horizontal   [_nghost-%COMP%]{display:flex}.dt-empty-state-layout-horizontal[_nghost-%COMP%]   .dt-empty-state-item-icon-area[_ngcontent-%COMP%], .dt-empty-state-layout-horizontal   [_nghost-%COMP%]   .dt-empty-state-item-icon-area[_ngcontent-%COMP%]{min-width:60px;flex:0 0 60px;height:100%}.dt-empty-state-layout-horizontal[_nghost-%COMP%]   .dt-empty-state-item-icon-area[_ngcontent-%COMP%]   .dt-icon[_ngcontent-%COMP%], .dt-empty-state-layout-horizontal   [_nghost-%COMP%]   .dt-empty-state-item-icon-area[_ngcontent-%COMP%]   .dt-icon[_ngcontent-%COMP%]{transform:none}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DtEmptyStateItem, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dt-empty-state-item',
                template: "<div class=\"dt-empty-state-item-icon-area\">\n  <dt-icon name=\"play\"></dt-icon>\n</div>\n\n<div class=\"dt-empty-state-item-content-area\">\n  <div class=\"dt-empty-state-item-image-area\">\n    <ng-content\n      select=\"dt-empty-state-item-img, [dt-empty-state-item-img], [dtEmptyStateItemImg]\"\n    ></ng-content>\n  </div>\n\n  <div class=\"dt-empty-state-item-text-area\">\n    <ng-content\n      select=\"dt-empty-state-item-title, [dt-empty-state-item-title], [dtEmptyStateItemTitle]\"\n    ></ng-content>\n\n    <ng-content></ng-content>\n\n    <div class=\"dt-empty-state-footer-actions\">\n      <ng-content select=\"dt-empty-state-footer-actions\"></ng-content>\n    </div>\n  </div>\n</div>\n",
                host: {
                    class: 'dt-empty-state-item'
                },
                styles: [":host{display:block}.dt-empty-state-item-image-area{margin-left:auto;margin-right:auto;margin-bottom:16px;min-width:120px;max-width:180px}.dt-empty-state-item-text-area{max-width:580px}.dt-empty-state-item-icon-area{display:none;height:60px;align-items:center;justify-content:center}.dt-empty-state-item-icon-area .dt-icon{width:28px;height:28px;margin:auto;transform:rotate(90deg)}.dt-empty-state-item-icon-area .dt-icon ::ng-deep svg{fill:#ccc}::ng-deep .dt-empty-state-item-title{display:block;margin-bottom:16px;font-family:BerninaSansWeb,OpenSans,sans-serif;color:#454646;font-weight:400;font-size:18px;line-height:1.6}::ng-deep .dt-empty-state-item-img{display:block;width:100%;text-align:center}::ng-deep .dt-empty-state-item-img img,::ng-deep .dt-empty-state-item-img svg{max-width:100%}::ng-deep .dt-empty-state-footer-actions{margin-top:16px}::ng-deep .dt-empty-state-footer-actions>.dt-button+.dt-button{margin-left:8px}:host-context(.dt-empty-state-items-horizontal) .dt-empty-state-item-content-area{display:flex}:host-context(.dt-empty-state-items-horizontal) .dt-empty-state-item-image-area{margin-right:16px;margin-left:0;margin-bottom:0}:host-context(.dt-empty-state-layout-horizontal){display:flex}:host-context(.dt-empty-state-layout-horizontal) .dt-empty-state-item-icon-area{min-width:60px;flex:0 0 60px;height:100%}:host-context(.dt-empty-state-layout-horizontal) .dt-empty-state-item-icon-area .dt-icon{transform:none}"]
            }]
    }], null, null); })();
/**
 * The image of an empty state card item.
 *
 * \@example
 *   <dt-empty-state-item-img>
 *     <img src="asset.png" alt="asset"/>
 *   </dt-empty-state-item-img>
 */
class DtEmptyStateItemImage {
}
DtEmptyStateItemImage.ɵfac = function DtEmptyStateItemImage_Factory(t) { return new (t || DtEmptyStateItemImage)(); };
DtEmptyStateItemImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DtEmptyStateItemImage, selectors: [["dt-empty-state-item-img"], ["", "dt-empty-state-item-img", ""], ["", "dtEmptyStateItemImg", ""]], hostAttrs: ["aria-hidden", "true", 1, "dt-empty-state-item-img"], exportAs: ["dtEmptyStateItemImg"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DtEmptyStateItemImage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'dt-empty-state-item-img, [dt-empty-state-item-img], [dtEmptyStateItemImg]',
                exportAs: 'dtEmptyStateItemImg',
                host: {
                    class: 'dt-empty-state-item-img',
                    'aria-hidden': 'true'
                }
            }]
    }], null, null); })();
/**
 * The (optional) heading of an empty state card item.
 *
 * \@example <dt-empty-state-item-title>optional heading</dt-empty-state-item-title>
 */
class DtEmptyStateItemTitle {
}
DtEmptyStateItemTitle.ɵfac = function DtEmptyStateItemTitle_Factory(t) { return new (t || DtEmptyStateItemTitle)(); };
DtEmptyStateItemTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DtEmptyStateItemTitle, selectors: [["dt-empty-state-item-title"], ["", "dt-empty-state-item-title", ""], ["", "dtEmptyStateItemTitle", ""]], hostAttrs: ["role", "heading", 1, "dt-empty-state-item-title"], exportAs: ["dtEmptyStateItemTitle"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DtEmptyStateItemTitle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'dt-empty-state-item-title, [dt-empty-state-item-title], [dtEmptyStateItemTitle]',
                exportAs: 'dtEmptyStateItemTitle',
                host: {
                    class: 'dt-empty-state-item-title',
                    role: 'heading'
                }
            }]
    }], null, null); })();
/**
 * The action button/s that is/are placed below the image and text of the item
 * (must be a cta styled primary button).
 *
 * \@example
 *   <dt-empty-state-footer-actions>
 *     <a dt-button color="cta" i18n>View release</a>
 *     <a dt-button color="cta" i18n>More info</a>
 *   </dt-empty-state-footer-actions>
 */
class DtEmptyStateFooterActions {
}
DtEmptyStateFooterActions.ɵfac = function DtEmptyStateFooterActions_Factory(t) { return new (t || DtEmptyStateFooterActions)(); };
DtEmptyStateFooterActions.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DtEmptyStateFooterActions, selectors: [["dt-empty-state-footer-actions"]], hostAttrs: [1, "dt-empty-state-footer-actions"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DtEmptyStateFooterActions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'dt-empty-state-footer-actions',
                host: {
                    class: 'dt-empty-state-footer-actions'
                }
            }]
    }], null, null); })();
/**
 * Placeholder for content that does not yet exist. It consists of one or more
 * items with each item containing an image, an optional header and a
 * short description text. It can be used within a `<dt-card>` or
 * an `<dt-table>`.
 */
class DtEmptyState {
    /**
     * @param {?} _changeDetectorRef
     * @param {?} _elementRef
     * @param {?} _viewportResizer
     * @param {?} _platform
     */
    constructor(_changeDetectorRef, _elementRef, _viewportResizer, _platform) {
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._viewportResizer = _viewportResizer;
        this._platform = _platform;
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * \@internal
         * Whether empty state items should have a horizontal layout
         * (i.e. image and text next to each other).
         */
        this._isItemLayoutHorizontal = false;
        /**
         * \@internal
         * Whether empty state items should be aligned next to each other.
         */
        this._isLayoutHorizontal = false;
        /**
         * \@internal The visibility state that is used to trigger the animation steps
         */
        this._visibility = 'visible';
    }
    /**
     * \@internal set the visible state to trigger a fade animation
     * @param {?} visibility
     * @return {?}
     */
    set _visible(visibility) {
        this._visibility = visibility ? 'visible' : 'hidden';
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._items.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this._changeDetectorRef.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this._platform.isBrowser) {
            // Check if the browser supports the resizeObserver.
            if ('ResizeObserver' in window) {
                this._containerSizeObserver = new window.ResizeObserver((/**
                 * @param {?} entries
                 * @return {?}
                 */
                (entries) => {
                    if (entries && entries[0]) {
                        // We need to wrap the call to the layout update into an additional
                        // requestAnimationFrame, because the resize observer would trow a
                        // javascript error when it is not able to process all entries within
                        // a single animation frame.
                        // From the specification:
                        // > This error means that ResizeObserver was not able to deliver all
                        // > observations within a single animation frame. It is benign (your
                        // > site will not break). - Aleksandar Totic
                        // https://stackoverflow.com/a/50387233
                        requestAnimationFrame((/**
                         * @return {?}
                         */
                        () => {
                            this._updateLayoutForSize(entries[0].contentRect.width);
                        }));
                    }
                }));
                this._containerSizeObserver.observe(this._elementRef.nativeElement);
            }
            else {
                this._viewportResizer
                    .change()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroy$))
                    .subscribe((/**
                 * @return {?}
                 */
                () => {
                    this._updateLayout();
                }));
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
        if (this._containerSizeObserver) {
            this._containerSizeObserver.disconnect();
        }
    }
    /**
     * Function that updates the layout based on the passed component width
     * @private
     * @param {?} componentWidth
     * @return {?}
     */
    _updateLayoutForSize(componentWidth) {
        var _a;
        /** @type {?} */
        const itemLayoutHorizontal = componentWidth > ITEMS_HORIZONTAL_BREAKPOINT;
        /** @type {?} */
        const layoutHorizontal = ((_a = this._items) === null || _a === void 0 ? void 0 : _a.length) > 1 && componentWidth > LAYOUT_HORIZONTAL_BREAKPOINT;
        Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_6__["_toggleCssClass"])(layoutHorizontal, this._elementRef.nativeElement, 'dt-empty-state-layout-horizontal');
        Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_6__["_toggleCssClass"])(itemLayoutHorizontal && !layoutHorizontal, this._elementRef.nativeElement, 'dt-empty-state-items-horizontal');
    }
    /**
     * \@internal
     * Updates the layout according to the width of the container (horizontal or vertical)
     * @deprecated will be removed once the viewportResizer is removed from the constructor.
     * \@breaking-change Remove with version 8.0.0
     * @return {?}
     */
    _updateLayout() {
        if (this._platform.isBrowser) {
            /** @type {?} */
            const componentWidth = this._elementRef.nativeElement.getBoundingClientRect()
                .width;
            this._updateLayoutForSize(componentWidth);
        }
    }
}
DtEmptyState.ɵfac = function DtEmptyState_Factory(t) { return new (t || DtEmptyState)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_6__["DtViewportResizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"])); };
DtEmptyState.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DtEmptyState, selectors: [["dt-empty-state"]], contentQueries: function DtEmptyState_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DtEmptyStateItem, false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._items = _t);
    } }, hostAttrs: [1, "dt-empty-state"], hostVars: 1, hostBindings: function DtEmptyState_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵupdateSyntheticHostBinding"]("@fadeIn", ctx._visibility);
    } }, exportAs: ["dtEmptyState"], ngContentSelectors: _c2, decls: 1, vars: 0, template: function DtEmptyState_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: ["[_nghost-%COMP%]{display:flex;flex-flow:column;font-family:BerninaSansWeb,OpenSans,sans-serif;color:#454646;font-weight:400;font-size:14px;line-height:1.6}.dt-empty-state-layout-horizontal[_nghost-%COMP%]{flex-flow:row}  .dt-empty-state-item+.dt-empty-state-item .dt-empty-state-item-icon-area{display:flex}"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                ]),
            ]),
        ] }, changeDetection: 0 });
/** @nocollapse */
DtEmptyState.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_6__["DtViewportResizer"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
DtEmptyState.propDecorators = {
    _items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [DtEmptyStateItem,] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DtEmptyState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dt-empty-state',
                exportAs: 'dtEmptyState',
                template: '<ng-content></ng-content>',
                host: {
                    class: 'dt-empty-state',
                    '[@fadeIn]': '_visibility'
                },
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeIn', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                        ]),
                    ]),
                ],
                styles: [":host{display:flex;flex-flow:column;font-family:BerninaSansWeb,OpenSans,sans-serif;color:#454646;font-weight:400;font-size:14px;line-height:1.6}:host.dt-empty-state-layout-horizontal{flex-flow:row}::ng-deep .dt-empty-state-item+.dt-empty-state-item .dt-empty-state-item-icon-area{display:flex}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_6__["DtViewportResizer"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"] }]; }, { _items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [DtEmptyStateItem]
        }] }); })();
if (false) {}
/**
 * Empty state base class that needs to be implemented by every custom
 * empty state that is used inside the table. It provides a proxy to the updateLayout
 * function of the empty state that will be called by the table.
 *
 * @deprecated Remove this class, as it is no longer needed to proxy the update
 * layout call, when the layout updates are triggered by the resize observer.
 * \@breaking-change Remove the viewportResizer in version 8.0.0
 */
class DtCustomEmptyStateBase {
    /**
     * \@internal
     * Proxies the update layout function of the empty state
     * to react to layout changes.
     * @return {?}
     */
    _updateLayout() {
        var _a;
        // If we have an empty state proxy the updateLayout function
        (_a = this._emptyState) === null || _a === void 0 ? void 0 : _a._updateLayout();
    }
}
DtCustomEmptyStateBase.ɵfac = function DtCustomEmptyStateBase_Factory(t) { return new (t || DtCustomEmptyStateBase)(); };
DtCustomEmptyStateBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DtCustomEmptyStateBase, viewQuery: function DtCustomEmptyStateBase_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](DtEmptyState, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._emptyState = _t.first);
    } } });
DtCustomEmptyStateBase.propDecorators = {
    _emptyState: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [DtEmptyState,] }]
};

if (false) {}
/**
 * Marks a custom empty state component to be used within, for example, `<dt-table>`.
 * The custom empty state must both extend and provide itself as a DtEmptyState.
 */
class DtCustomEmptyState {
}
DtCustomEmptyState.ɵfac = function DtCustomEmptyState_Factory(t) { return new (t || DtCustomEmptyState)(); };
DtCustomEmptyState.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DtCustomEmptyState, selectors: [["", "dtCustomEmptyState", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DtCustomEmptyState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[dtCustomEmptyState]'
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/empty-state-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EMPTY_STATE_DIRECTIVES = [
    DtEmptyState,
    DtEmptyStateItem,
    DtEmptyStateItemImage,
    DtEmptyStateItemTitle,
    DtEmptyStateFooterActions,
    DtCustomEmptyState,
];
class DtEmptyStateModule {
}
DtEmptyStateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DtEmptyStateModule });
DtEmptyStateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DtEmptyStateModule_Factory(t) { return new (t || DtEmptyStateModule)(); }, imports: [[_dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_1__["DtIconModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DtEmptyStateModule, { declarations: function () { return [DtEmptyState,
        DtEmptyStateItem,
        DtEmptyStateItemImage,
        DtEmptyStateItemTitle,
        DtEmptyStateFooterActions,
        DtCustomEmptyState]; }, imports: function () { return [_dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_1__["DtIconModule"]]; }, exports: function () { return [DtEmptyState,
        DtEmptyStateItem,
        DtEmptyStateItemImage,
        DtEmptyStateItemTitle,
        DtEmptyStateFooterActions,
        DtCustomEmptyState]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DtEmptyStateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [EMPTY_STATE_DIRECTIVES],
                declarations: [EMPTY_STATE_DIRECTIVES],
                imports: [_dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_1__["DtIconModule"]]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: dynatrace-barista-components-empty-state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=dynatrace-barista-components-empty-state.js.map

/***/ }),

/***/ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-formatters.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-formatters.js ***!
  \*********************************************************************************************************************/
/*! exports provided: DtBits, DtBytes, DtCount, DtDateRange, DtDuration, DtExperimentalFormatTime, DtFormattedValue, DtFormattersModule, DtKilobytes, DtMegabytes, DtPercent, DtRate, DtRateUnit, DtTimeUnit, KIBI_MULTIPLIER, KILO_MULTIPLIER, adjustNumber, dtFormatDateRange, experimentalFormatTime, formatBits, formatBytes, formatCount, formatDuration, formatPercent, formatRate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtBits", function() { return DtBits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtBytes", function() { return DtBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtCount", function() { return DtCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtDateRange", function() { return DtDateRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtDuration", function() { return DtDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtExperimentalFormatTime", function() { return DtTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtFormattedValue", function() { return DtFormattedValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtFormattersModule", function() { return DtFormattersModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtKilobytes", function() { return DtKilobytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtMegabytes", function() { return DtMegabytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtPercent", function() { return DtPercent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtRate", function() { return DtRate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtRateUnit", function() { return DtRateUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtTimeUnit", function() { return DtTimeUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KIBI_MULTIPLIER", function() { return KIBI_MULTIPLIER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KILO_MULTIPLIER", function() { return KILO_MULTIPLIER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustNumber", function() { return adjustNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dtFormatDateRange", function() { return dtFormatDateRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "experimentalFormatTime", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatBits", function() { return formatBits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatBytes", function() { return formatBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCount", function() { return formatCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDuration", function() { return formatDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPercent", function() { return formatPercent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatRate", function() { return formatRate; });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dynatrace/barista-components/core */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





/**
 * @fileoverview added by tsickle
 * Generated from: src/formatted-value.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright 2020 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @record
 */

function SourceData() { }
if (false) {}
/**
 * @record
 */
function FormattedData() { }
if (false) {}
/** @type {?} */
const NO_DATA = '-';
/**
 * Class used in formatting functions and pipes
 */
class DtFormattedValue {
    /**
     * @param {?} _sourceData
     * @param {?} _formattedData
     */
    constructor(_sourceData, _formattedData) {
        this._sourceData = _sourceData;
        this._formattedData = _formattedData;
    }
    /**
     * Source data containing value, unit, rate unit
     * @return {?}
     */
    get sourceData() {
        return this._sourceData;
    }
    /**
     * Display data containing the transformed values, units and rate units
     * @return {?}
     */
    get displayData() {
        return this._formattedData;
    }
    /**
     * @return {?} the string as a combination of the display data
     */
    toString() {
        if (this._formattedData.displayValue === undefined) {
            return NO_DATA;
        }
        /** @type {?} */
        let text = this._formattedData.displayValue;
        if (this._formattedData.displayUnit !== undefined) {
            text = `${text} ${this._formattedData.displayUnit}`;
        }
        if (this._formattedData.displayRateUnit !== undefined) {
            text =
                this._formattedData.displayUnit !== undefined ||
                    this._formattedData.displayWhiteSpace === false
                    ? `${text}/${this._formattedData.displayRateUnit}`
                    : `${text} /${this._formattedData.displayRateUnit}`;
        }
        return text;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/unit.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright 2020 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** @enum {string} */
const DtUnit = {
    PERCENT: "%",
    COUNT: "count",
    BYTES: "B",
    KILO_BYTES: "kB",
    MEGA_BYTES: "MB",
    GIGA_BYTES: "GB",
    TERA_BYTES: "TB",
    PETA_BYTES: "PB",
    BITS: "bit",
    KILO_BITS: "kbit",
    MEGA_BITS: "Mbit",
    GIGA_BITS: "Gbit",
    TERA_BITS: "Tbit",
    PETA_BITS: "Pbit",
};
/** @enum {string} */
const DtRateUnit = {
    PER_NANOSECOND: "ns",
    PER_MILLISECOND: "ms",
    PER_SECOND: "s",
    PER_MINUTE: "min",
    PER_HOUR: "h",
    PER_DAY: "d",
    PER_WEEK: "w",
    PER_MONTH: "mo",
    PER_YEAR: "y",
};
/** @enum {string} */
const DtTimeUnit = {
    YEAR: "y",
    MONTH: "mo",
    DAY: "d",
    HOUR: "h",
    MINUTE: "min",
    SECOND: "s",
    MILLISECOND: "ms",
    MICROSECOND: "\u00B5s",
    NANOSECOND: "ns",
};

/**
 * @fileoverview added by tsickle
 * Generated from: src/time-deprecated/time-formatter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable: no-magic-numbers
// Factorials needed in converting milliseconds to other time units
/** @type {?} */
const CONVERSION_FACTORS_TO_MS = new Map([
    [DtTimeUnit.YEAR, 12 * 30.4 * 24 * 60 * 60 * 1000],
    [DtTimeUnit.MONTH, 30.4 * 24 * 60 * 60 * 1000],
    [DtTimeUnit.DAY, 24 * 60 * 60 * 1000],
    [DtTimeUnit.HOUR, 60 * 60 * 1000],
    [DtTimeUnit.MINUTE, 60 * 1000],
    [DtTimeUnit.SECOND, 1000],
    [DtTimeUnit.MILLISECOND, 1],
    [DtTimeUnit.MICROSECOND, 0.001],
    [DtTimeUnit.NANOSECOND, 0.000001],
]);
/** @type {?} */
const CONVERSIONUNITS = 2;
/** @breaking-change - Will be removed with version 7.0.0 */
/** @deprecated Please use dtDuration instead */
/**
 * @param {?} time - numeric time value to be converted to
 * amount of time from years to nanoseconds
 * @param {?=} inputUnit
 * @param {?=} toUnit
 * @return {?}
 */
function formatTime(time, inputUnit = DtTimeUnit.MILLISECOND, toUnit) {
    /** @type {?} */
    const inputData = {
        input: time,
        unit: inputUnit,
    };
    /** @type {?} */
    let formattedData;
    if (time <= 0) {
        return new DtFormattedValue(inputData, (formattedData = {
            transformedValue: inputData.input,
            displayValue: '0',
            displayUnit: inputUnit,
        }));
    }
    else {
        // Calculates the amount of each timeunit and adds the value and unit into a resultstring
        if (CONVERSION_FACTORS_TO_MS.get(inputUnit) === undefined) {
            return NO_DATA;
        }
        /** @type {?} */
        const result = buildResultFromTime(time, inputUnit, toUnit);
        if (result === undefined) {
            return NO_DATA;
        }
        /** @type {?} */
        let resultString = '';
        result.forEach((/**
         * @param {?} value
         * @param {?} key
         * @return {?}
         */
        (value, key) => {
            resultString = `${resultString}${value}${key} `;
        }));
        resultString = resultString.trim();
        formattedData = {
            transformedValue: inputData.input,
            displayValue: resultString,
            displayUnit: '',
        };
        return new DtFormattedValue(inputData, formattedData);
    }
}
// Converts input to milliseconds
/**
 * @param {?} time
 * @param {?} inputUnit
 * @param {?} toUnit
 * @return {?}
 */
function buildResultFromTime(time, inputUnit, toUnit) {
    if (!CONVERSION_FACTORS_TO_MS.has(inputUnit)) {
        return;
    }
    /** @type {?} */
    let rest = time * (/** @type {?} */ (CONVERSION_FACTORS_TO_MS.get(inputUnit)));
    /** @type {?} */
    const result = new Map();
    /** @type {?} */
    let counter = 0;
    /** @type {?} */
    let canConvert = false;
    /** @type {?} */
    const conversionFactorKeys = Array.from(CONVERSION_FACTORS_TO_MS.keys());
    if (toUnit !== undefined &&
        conversionFactorKeys.indexOf(toUnit) >
            conversionFactorKeys.indexOf(inputUnit)) {
        canConvert = true;
    }
    for (const key of conversionFactorKeys) {
        /** @type {?} */
        const factor = (/** @type {?} */ (CONVERSION_FACTORS_TO_MS.get(key)));
        /** @type {?} */
        const amount = Math.trunc(rest / factor);
        if (canConvert &&
            conversionFactorKeys.indexOf((/** @type {?} */ (toUnit))) >= conversionFactorKeys.indexOf(key)) {
            counter = CONVERSIONUNITS;
            if (amount > 0) {
                result.set(key, amount);
            }
        }
        else if (counter < CONVERSIONUNITS) {
            if (amount > 0) {
                if (counter < CONVERSIONUNITS) {
                    result.set(key, amount);
                }
                counter++;
                // Only next two units will be displayed. Examples: `1y 1mo 1d` instead of `1y 1mo 1d 1h 1min...`
            }
            else if (counter > 0) {
                counter++;
            }
        }
        rest = rest - amount * factor;
    }
    return result;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/time-deprecated/time.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @breaking-change - Will be removed with version 7.0.0 */
/** @deprecated Please use dtDuration instead */
/**
 * Pipe used to convert milliseconds to amount of time from years to nanoseconds
 */
class DtTime {
    /**
     * @param {?} input - The timevalue to be formatted to amount of time from years to nanoseconds
     * @param {?=} inputUnit
     * @param {?=} toUnit
     * @return {?}
     */
    // tslint:disable: no-any
    transform(input, inputUnit = DtTimeUnit.MILLISECOND, toUnit) {
        if (Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(input)) {
            return NO_DATA;
        }
        return Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(input)
            ? formatTime(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(input), inputUnit, toUnit)
            : NO_DATA;
    }
}
DtTime.ɵfac = function DtTime_Factory(t) { return new (t || DtTime)(); };
DtTime.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "dtTime", type: DtTime, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DtTime, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
                name: 'dtTime'
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/number-formatter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:no-magic-numbers
/** @type {?} */
const KILO_MULTIPLIER = 1000;
/** @type {?} */
const KIBI_MULTIPLIER = 1024;
/**
 * @record
 */
function DtNumberFormatOptions() { }
if (false) {}
/** @type {?} */
const ABBREVIATION_LEVELS = [
    { multiplier: Math.pow(KILO_MULTIPLIER, 3), postfix: 'bil' },
    { multiplier: Math.pow(KILO_MULTIPLIER, 2), postfix: 'mil' },
    { multiplier: KILO_MULTIPLIER, postfix: 'k' },
];
/** @type {?} */
const DEFAULT_PRECISION_FOR_MIN_VALUE = 3;
/**
 * Helper function that adjusts a given number by abbreviating or adjusting the precision
 * Returns adjusted number as a string
 *
 * @param {?} value - numeric value to be transformed
 * @param {?=} abbreviate - defines whether to abbreviate big numbers or not (by adding appropriate postfixes); false by default
 * @param {?=} maxPrecision - The maximum amount of digits to be used, if provided
 * @return {?}
 */
function adjustNumber(value, abbreviate = false, maxPrecision) {
    /** @type {?} */
    const calcValue = Math.abs(value);
    return abbreviate && calcValue >= KILO_MULTIPLIER
        ? abbreviateNumber(value)
        : adjustPrecision(value, maxPrecision);
}
/**
 * @param {?} value
 * @param {?=} maxPrecision
 * @return {?}
 */
function adjustPrecision(value, maxPrecision) {
    // tslint:disable:no-magic-numbers
    /** @type {?} */
    const calcValue = Math.abs(value);
    /** @type {?} */
    const minValue = 1 /
        Math.pow(10, Math.max(maxPrecision || DEFAULT_PRECISION_FOR_MIN_VALUE, 0));
    /** @type {?} */
    let digits = 0;
    if (calcValue === 0) {
        return '0';
    }
    else if (calcValue < minValue) {
        if (value < 0) {
            return `-${minValue}`;
        }
        else {
            return `< ${minValue}`;
        }
    }
    else if (maxPrecision) {
        digits = maxPrecision;
    }
    else if (calcValue < 1) {
        digits = 3;
    }
    else if (calcValue < 10) {
        digits = 2;
    }
    else if (calcValue < 100) {
        digits = 1;
    }
    return Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatNumber"])(value, 'en-US', `0.0-${digits}`);
}
/**
 * @param {?} sourceValue
 * @return {?}
 */
function abbreviateNumber(sourceValue) {
    /** @type {?} */
    let value = Math.abs(sourceValue);
    /** @type {?} */
    let postfix = '';
    /** @type {?} */
    const level = ABBREVIATION_LEVELS.find((/**
     * @param {?} m
     * @return {?}
     */
    (m) => m.multiplier <= value));
    if (level !== undefined) {
        value = sourceValue / level.multiplier;
        postfix = level.postfix;
    }
    /** @type {?} */
    const formattedValue = adjustPrecision(value);
    return `${formattedValue}${postfix}`;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/bits-bytes-formatter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function DtUnitConversion() { }
if (false) {}
/**
 * Util function used to format a number to either Bits or Bytes
 * @param {?} input
 * @param {?} conversions
 * @param {?} options
 * @return {?}
 */
function formatToBitsBytes(input, conversions, options) {
    /** @type {?} */
    const sourceData = input instanceof DtFormattedValue
        ? input.sourceData
        : {
            input,
            unit: options.inputUnit,
        };
    /** @type {?} */
    let formattedData = {};
    /** @type {?} */
    const value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(sourceData.input, NaN);
    if (!isNaN(value)) {
        /** @type {?} */
        const valueInUnit = convertToUnit(value, conversions, sourceData.unit);
        /** @type {?} */
        const conversion = options.outputUnit
            ? getFixedUnitConversion(conversions, options.outputUnit)
            : getAutoUnitConversion(conversions, valueInUnit);
        /** @type {?} */
        const convertedValue = conversion
            ? valueInUnit / conversion.multiplier
            : valueInUnit;
        /** @type {?} */
        const convertedUnit = conversion ? conversion.unit : options.inputUnit;
        formattedData = {
            transformedValue: convertedValue,
            displayValue: adjustNumber(convertedValue),
            displayUnit: convertedUnit,
            displayRateUnit: input instanceof DtFormattedValue
                ? input.displayData.displayRateUnit
                : undefined,
        };
    }
    return new DtFormattedValue(sourceData, formattedData);
}
/**
 * Converts number to given unit by applying the corect conversionrate
 * @param {?} input
 * @param {?} conversions
 * @param {?} inputUnit
 * @return {?}
 */
function convertToUnit(input, conversions, inputUnit) {
    /** @type {?} */
    const conversion = conversions.find((/**
     * @param {?} m
     * @return {?}
     */
    (m) => m.unit === inputUnit));
    return conversion !== undefined ? input * conversion.multiplier : input;
}
/**
 * @param {?} conversions
 * @param {?} valueInUnit
 * @return {?}
 */
function getAutoUnitConversion(conversions, valueInUnit) {
    return conversions.find((/**
     * @param {?} m
     * @return {?}
     */
    (m) => valueInUnit >= m.multiplier));
}
/**
 * @param {?} conversions
 * @param {?} outputUnit
 * @return {?}
 */
function getFixedUnitConversion(conversions, outputUnit) {
    return conversions.find((/**
     * @param {?} m
     * @return {?}
     */
    (m) => m.unit === outputUnit));
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/bits/bits-formatter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_BITS_OPTIONS = {
    factor: KILO_MULTIPLIER,
    inputUnit: "bit" /* BITS */,
};
// tslint:disable:no-magic-numbers
/** @type {?} */
const KILO_CONVERSIONS = [
    { multiplier: Math.pow(KILO_MULTIPLIER, 5), unit: "Pbit" /* PETA_BITS */ },
    { multiplier: Math.pow(KILO_MULTIPLIER, 4), unit: "Tbit" /* TERA_BITS */ },
    { multiplier: Math.pow(KILO_MULTIPLIER, 3), unit: "Gbit" /* GIGA_BITS */ },
    { multiplier: Math.pow(KILO_MULTIPLIER, 2), unit: "Mbit" /* MEGA_BITS */ },
    { multiplier: KILO_MULTIPLIER, unit: "kbit" /* KILO_BITS */ },
];
/** @type {?} */
const KIBI_CONVERSIONS = [
    { multiplier: Math.pow(KIBI_MULTIPLIER, 5), unit: "Pbit" /* PETA_BITS */ },
    { multiplier: Math.pow(KIBI_MULTIPLIER, 4), unit: "Tbit" /* TERA_BITS */ },
    { multiplier: Math.pow(KIBI_MULTIPLIER, 3), unit: "Gbit" /* GIGA_BITS */ },
    { multiplier: Math.pow(KIBI_MULTIPLIER, 2), unit: "Mbit" /* MEGA_BITS */ },
    { multiplier: KIBI_MULTIPLIER, unit: "kbit" /* KILO_BITS */ },
];
// tslint:enable:no-magic-numbers
/**
 * Util function that formats given number as bits
 * @param {?} input - value that gets formatted
 * @param {?=} options
 * @return {?}
 */
function formatBits(
// tslint:disable-next-line:no-any
input, options) {
    /** @type {?} */
    const mergedOptions = Object.assign(Object.assign({}, DEFAULT_BITS_OPTIONS), options);
    /** @type {?} */
    const conversions = getConversions(mergedOptions.factor);
    return formatToBitsBytes(input, conversions, mergedOptions);
}
/**
 * @param {?} factor
 * @return {?}
 */
function getConversions(factor) {
    return factor === KIBI_MULTIPLIER ? KIBI_CONVERSIONS : KILO_CONVERSIONS;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/bits/bits.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Pipe for formatting a given number to Bits
 */
class DtBits {
    /**
     * @param {?} input - The value to be formatted as bits
     * @param {?=} factor - The factor used to divide the number for decimal prefixes. Default is 1000
     * @param {?=} inputUnit - The unit for the input number. Default is DtUnit.BITS
     * @return {?}
     */
    transform(
    // tslint:disable-next-line:no-any
    input, factor = KILO_MULTIPLIER, inputUnit = "bit" /* BITS */) {
        if (Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(input)) {
            return NO_DATA;
        }
        if (input instanceof DtFormattedValue) {
            return formatBits(input, { factor, inputUnit });
        }
        if (Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(input)) {
            return formatBits(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(input), { factor, inputUnit });
        }
        return NO_DATA;
    }
}
DtBits.ɵfac = function DtBits_Factory(t) { return new (t || DtBits)(); };
DtBits.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "dtBits", type: DtBits, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DtBits, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
                name: 'dtBits'
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/bytes/bytes-formatter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_BYTES_OPTIONS = {
    factor: KILO_MULTIPLIER,
    inputUnit: "B" /* BYTES */,
};
// tslint:disable:no-magic-numbers
/** @type {?} */
const KILO_CONVERSIONS$1 = [
    { multiplier: Math.pow(KILO_MULTIPLIER, 5), unit: "PB" /* PETA_BYTES */ },
    { multiplier: Math.pow(KILO_MULTIPLIER, 4), unit: "TB" /* TERA_BYTES */ },
    { multiplier: Math.pow(KILO_MULTIPLIER, 3), unit: "GB" /* GIGA_BYTES */ },
    { multiplier: Math.pow(KILO_MULTIPLIER, 2), unit: "MB" /* MEGA_BYTES */ },
    { multiplier: KILO_MULTIPLIER, unit: "kB" /* KILO_BYTES */ },
];
/** @type {?} */
const KIBI_CONVERSIONS$1 = [
    { multiplier: Math.pow(KIBI_MULTIPLIER, 5), unit: "PB" /* PETA_BYTES */ },
    { multiplier: Math.pow(KIBI_MULTIPLIER, 4), unit: "TB" /* TERA_BYTES */ },
    { multiplier: Math.pow(KIBI_MULTIPLIER, 3), unit: "GB" /* GIGA_BYTES */ },
    { multiplier: Math.pow(KIBI_MULTIPLIER, 2), unit: "MB" /* MEGA_BYTES */ },
    { multiplier: KIBI_MULTIPLIER, unit: "kB" /* KILO_BYTES */ },
];
// tslint:enable:no-magic-numbers
/**
 * Util function that formats given number as bytes
 * @param {?} input - value that gets formatted
 * @param {?=} options
 * @return {?}
 */
function formatBytes(input, // tslint:disable-line:no-any
options) {
    /** @type {?} */
    const mergedOptions = Object.assign(Object.assign({}, DEFAULT_BYTES_OPTIONS), options);
    /** @type {?} */
    const conversions = getConversions$1(mergedOptions.factor);
    return formatToBitsBytes(input, conversions, mergedOptions);
}
/**
 * @param {?} factor
 * @return {?}
 */
function getConversions$1(factor) {
    return factor === KIBI_MULTIPLIER ? KIBI_CONVERSIONS$1 : KILO_CONVERSIONS$1;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/bytes/bytes.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Pipe for formatting a given number to Bytes
 */
class DtBytes {
    /**
     * @param {?} input - The number to be formatted as bytes
     * @param {?=} factor - The factor used to divide the number for decimal prefixes. Default is 1000
     * @param {?=} inputUnit - The unit for the input number. Default is DtUnit.BYTES
     * @return {?}
     */
    transform(
    // tslint:disable-next-line:no-any
    input, factor = KILO_MULTIPLIER, inputUnit = "B" /* BYTES */) {
        if (Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(input)) {
            return NO_DATA;
        }
        if (input instanceof DtFormattedValue) {
            return formatBytes(input, { factor, inputUnit });
        }
        if (Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(input)) {
            return formatBytes(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(input), { factor, inputUnit });
        }
        return NO_DATA;
    }
}
DtBytes.ɵfac = function DtBytes_Factory(t) { return new (t || DtBytes)(); };
DtBytes.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "dtBytes", type: DtBytes, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DtBytes, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
                name: 'dtBytes'
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/bytes/kilobytes.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Pipe for formatting a given number to Kilobytes
 */
class DtKilobytes {
    /**
     * @param {?} input - The value to be formatted as Kilobytes
     * @param {?=} factor - The factor used to divide the number for decimal prefixes. Default is 1000
     * @param {?=} inputUnit - The unit for the input number. Default is DtUnit.BYTES
     * @return {?}
     */
    transform(
    // tslint:disable-next-line:no-any
    input, factor = KILO_MULTIPLIER, inputUnit = "B" /* BYTES */) {
        if (Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(input)) {
            return NO_DATA;
        }
        if (input instanceof DtFormattedValue) {
            return formatBytes(input, {
                factor,
                inputUnit,
                outputUnit: "kB" /* KILO_BYTES */,
            });
        }
        if (Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(input)) {
            return formatBytes(input, {
                factor,
                inputUnit,
                outputUnit: "kB" /* KILO_BYTES */,
            });
        }
        return NO_DATA;
    }
}
DtKilobytes.ɵfac = function DtKilobytes_Factory(t) { return new (t || DtKilobytes)(); };
DtKilobytes.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "dtKilobytes", type: DtKilobytes, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DtKilobytes, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
                name: 'dtKilobytes'
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/bytes/megabytes.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Pipe for formatting a given number to Megabytes
 */
class DtMegabytes {
    /**
     * @param {?} input - The number to be formatted as Megabytes
     * @param {?=} factor - The factor used to divide the number for decimal prefixes. Default is 1000
     * @param {?=} inputUnit - The unit for the input number. Default is DtUnit.BYTES
     * @return {?}
     */
    transform(
    // tslint:disable-next-line:no-any
    input, factor = KILO_MULTIPLIER, inputUnit = "B" /* BYTES */) {
        if (Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(input)) {
            return NO_DATA;
        }
        if (input instanceof DtFormattedValue) {
            return formatBytes(input, {
                factor,
                inputUnit,
                outputUnit: "MB" /* MEGA_BYTES */,
            });
        }
        if (Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(input)) {
            return formatBytes(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(input), {
                factor,
                inputUnit,
                outputUnit: "MB" /* MEGA_BYTES */,
            });
        }
        return NO_DATA;
    }
}
DtMegabytes.ɵfac = function DtMegabytes_Factory(t) { return new (t || DtMegabytes)(); };
DtMegabytes.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "dtMegabytes", type: DtMegabytes, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DtMegabytes, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
                name: 'dtMegabytes'
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/count/count-formatter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Util function formats the given number to a set of counting abbreviations (e.g. '20000000' will result in '20 mil')
 *
 * @param {?} input - numeric value to be transformed
 * @param {?=} inputUnit - input unit, typically defined unit of type DtUnit (DtUnit.COUNT by default), custom strings are also allowed
 *    value is used only as a reference in case an additional rate pipe is used
 * @return {?}
 */
function formatCount(input, inputUnit = "count" /* COUNT */) {
    /** @type {?} */
    const sourceData = input instanceof DtFormattedValue
        ? input.sourceData
        : {
            input,
            unit: inputUnit,
        };
    /** @type {?} */
    const value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(sourceData.input, NaN);
    /** @type {?} */
    const formattedData = !isNaN(value)
        ? {
            transformedValue: value,
            displayValue: adjustNumber(value, true),
            displayUnit: inputUnit !== "count" /* COUNT */ ? inputUnit : undefined,
            displayRateUnit: input instanceof DtFormattedValue
                ? input.displayData.displayRateUnit
                : undefined,
        }
        : {};
    return new DtFormattedValue(sourceData, formattedData);
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/count/count.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DtCount {
    /**
     * @param {?} input - The value to be formatted as an abbreviation
     * @param {?=} inputUnit - The unit for the input number. Default is DtUnit.COUNT
     * @return {?}
     */
    transform(
    // tslint:disable-next-line:no-any
    input, inputUnit = "count" /* COUNT */) {
        if (Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(input)) {
            return NO_DATA;
        }
        if (input instanceof DtFormattedValue) {
            return formatCount(input, inputUnit);
        }
        if (Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(input)) {
            return formatCount(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(input), inputUnit);
        }
        return NO_DATA;
    }
}
DtCount.ɵfac = function DtCount_Factory(t) { return new (t || DtCount)(); };
DtCount.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "dtCount", type: DtCount, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DtCount, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
                name: 'dtCount'
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/date/date-range.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Error message that should be logged if no numbers are provided to the dateRange formatter.
 * \@internal
 * @type {?}
 */
const ERROR_MESSAGE_NO_NUMBERS_PROVIDED = 'The DtDateRange formatter could not format the provided values! Please ensure that two numbers are provided!';
/**
 * Error message that should be logged if not 2 numbers are provided.
 * \@internal
 * @type {?}
 */
const ERROR_MESSAGE_WRONG_FORMAT = 'The DtDateRange formatter expects an array of two numbers that should be formatted!';
/**
 * \@internal Placeholder that should be displayed if no valid timestamps are provided
 * @type {?}
 */
const PLACEHOLDER = '{from} – {to}';
/**
 * Instance of the logger for the date range formatter
 * @type {?}
 */
const logger = _dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_2__["DtLoggerFactory"].create('DtDateRange Formatter');
class DtDateRange {
    /**
     * @param {?} _locale
     */
    constructor(_locale) {
        this._locale = _locale;
    }
    /**
     * Pipe will format 2 UTC Timestamps to date time.
     * Client web browser time zone will be included.
     *
     * ### Formatting Examples
     * - `Jan 24 09:05 - 15:59` - for same day
     * - `Jan 23 00:00 - Jan 24 12:01` - for different dates in current year
     * - `2017 Apr 13 13:13 - 2018 Jun 06 06:06` - for different dates and years
     *
     * ### Usage in templates
     *
     * `{{ [startUtcTimestamp, endUtcTimestamp] | dtDateRange }}`
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        // tslint:disable-next-line no-magic-numbers
        if (!Array.isArray(value) || value.length !== 2) {
            logger.error(ERROR_MESSAGE_WRONG_FORMAT);
            return PLACEHOLDER;
        }
        return dtFormatDateRange(value[0], value[1], this._locale);
    }
}
DtDateRange.ɵfac = function DtDateRange_Factory(t) { return new (t || DtDateRange)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])); };
DtDateRange.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "dtDateRange", type: DtDateRange, pure: true });
/** @nocollapse */
DtDateRange.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DtDateRange, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
                name: 'dtDateRange',
                pure: true
            }]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
            }] }]; }, null); })();
if (false) {}
/**
 * Formats two provided dates (start and end) to reflect a range.
 * \@example
 * `Jan 24 09:05 - 15:59` - For the same day.
 * `Jan 23 00:00 - Jan 24 12:01` - For different dates in the current year.
 * `2017 Apr 13 13:13 - 2018 Jun 06 06:06` - For different dates and years.
 * @param {?} start The start timestamp.
 * @param {?} end The end timestamp.
 * @param {?=} locale The locale to format with – default: *en-US*
 * @return {?}
 */
function dtFormatDateRange(start, end, locale = 'en-US') {
    if (isNaN(start) || isNaN(end)) {
        logger.error(ERROR_MESSAGE_NO_NUMBERS_PROVIDED);
        return PLACEHOLDER;
    }
    /** @type {?} */
    const date1 = new Date(start);
    /** @type {?} */
    const date2 = new Date(end);
    /** @type {?} */
    const now = new Date(Date.now());
    /** @type {?} */
    let dateString1 = 'MMM d HH:mm';
    /** @type {?} */
    let dateString2 = 'MMM d HH:mm';
    if (date1.getUTCFullYear() === date2.getUTCFullYear()) {
        if (now.getUTCFullYear() !== date1.getUTCFullYear()) {
            dateString1 = 'y MMM d HH:mm';
        }
        if (date1.getUTCMonth() === date2.getUTCMonth() &&
            date1.getUTCDay() === date2.getUTCDay()) {
            dateString2 = 'HH:mm';
        }
    }
    else {
        dateString1 = 'y MMM d HH:mm';
        dateString2 = dateString1;
    }
    dateString1 = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(start, dateString1, locale);
    dateString2 = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(end, dateString2, locale);
    return `${dateString1} — ${dateString2}`;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/percent/percent-formatter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Util function that adds percent formatting to any number
 *
 * @param {?} input - numeric value to be transformed
 * @param {?=} maxPrecision - The maximum amount of digits to be used, if provided
 * @return {?}
 */
function formatPercent(input, maxPrecision) {
    /** @type {?} */
    const inputData = {
        input,
        unit: "%" /* PERCENT */,
    };
    /** @type {?} */
    const value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(input, NaN);
    /** @type {?} */
    const formattedData = !isNaN(value)
        ? {
            transformedValue: value,
            displayValue: adjustNumber(value, undefined, maxPrecision),
            displayUnit: inputData.unit,
        }
        : {};
    return new DtFormattedValue(inputData, formattedData);
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/percent/percent.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Pipe used to add percent formatting
 */
class DtPercent {
    /**
     * @param {?} input - The value to be formatted as a percentage
     * @param {?=} maxPrecision - The maximum amount of digits to be used, if provided
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    transform(input, maxPrecision) {
        if (Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(input)) {
            return NO_DATA;
        }
        if (Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(input)) {
            return formatPercent(input, maxPrecision);
        }
        return NO_DATA;
    }
}
DtPercent.ɵfac = function DtPercent_Factory(t) { return new (t || DtPercent)(); };
DtPercent.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "dtPercent", type: DtPercent, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DtPercent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
                name: 'dtPercent'
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/rate/rate-formatter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Util function that adds rate formatting
 *
 * @param {?} input - numeric value or DtFormattedValue to be transformed
 * @param {?} rateUnit - rate unit connected and displayed with the value,
 *  typically defined rate unit of type DtRateUnit, custom strings are also allowed
 * @return {?}
 */
function formatRate(input, rateUnit) {
    /** @type {?} */
    const sourceData = input instanceof DtFormattedValue
        ? input.sourceData
        : { input, unit: "count" /* COUNT */ };
    /** @type {?} */
    const displayValue = input instanceof DtFormattedValue
        ? input.displayData.displayValue
        : input.toString();
    /** @type {?} */
    const displayUnit = input instanceof DtFormattedValue
        ? input.displayData.displayUnit
        : undefined;
    /** @type {?} */
    const displayWhiteSpace = input instanceof DtFormattedValue
        ? input.displayData.displayWhiteSpace
        : undefined;
    /** @type {?} */
    const formattedData = {
        transformedValue: sourceData.input,
        displayRateUnit: rateUnit,
        displayUnit,
        displayValue,
        displayWhiteSpace,
    };
    return new DtFormattedValue(sourceData, formattedData);
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/rate/rate.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Pipe used to add a rate (e.g. per second) to the value
 */
class DtRate {
    /**
     * @param {?} input - The value or DtFomrattedValue to be formatted with a rate
     * @param {?} rateUnit - The unit for the rate of the input
     * @return {?}
     */
    transform(input, // tslint:disable-line:no-any
    rateUnit) {
        if (Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(input)) {
            return NO_DATA;
        }
        if (input instanceof DtFormattedValue) {
            return formatRate(input, rateUnit);
        }
        if (Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(input)) {
            return formatRate(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(input), rateUnit);
        }
        return NO_DATA;
    }
}
DtRate.ɵfac = function DtRate_Factory(t) { return new (t || DtRate)(); };
DtRate.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "dtRate", type: DtRate, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DtRate, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
                name: 'dtRate'
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/duration/duration-formatter-constants.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} formatMethod
 * @return {?}
 */
function toDurationMode(formatMethod) {
    if (formatMethod === 'DEFAULT') {
        return 'DEFAULT';
    }
    else if (formatMethod === 'PRECISE') {
        return 'PRECISE';
    }
    else if (typeof formatMethod === 'number') {
        return formatMethod;
    }
}
// tslint:disable: no-magic-numbers
/**
 * Factorials needed for converting milliseconds to other time units
 * @type {?}
 */
const CONVERSION_FACTORS_TO_MS$1 = new Map([
    [DtTimeUnit.YEAR, 12 * 30.41666 * 24 * 60 * 60 * 1000],
    [DtTimeUnit.MONTH, 30.41666 * 24 * 60 * 60 * 1000],
    [DtTimeUnit.DAY, 24 * 60 * 60 * 1000],
    [DtTimeUnit.HOUR, 60 * 60 * 1000],
    [DtTimeUnit.MINUTE, 60 * 1000],
    [DtTimeUnit.SECOND, 1000],
    [DtTimeUnit.MILLISECOND, 1],
    [DtTimeUnit.MICROSECOND, 1000],
    [DtTimeUnit.NANOSECOND, 1],
]);
/**
 * Default for the conversionunit when no formatmethod is passed as a number.
 * @type {?}
 */
const CONVERSIONUNITS$1 = 3;
/**
 * Use when converting a duration to micro- or nanoseconds
 * @type {?}
 */
const MOVE_COMMA = 1000000;

/**
 * @fileoverview added by tsickle
 * Generated from: src/duration/duration-formatter-utils/convert-to-milliseconds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Converts any duration to milliseconds
 * @param {?} duration numeric time value
 * @param {?} inputUnit dtTimeUnit value describing which unit the duration is in
 * @return {?}
 */
function dtConvertToMilliseconds(duration, inputUnit) {
    if (duration >= 0) {
        return inputUnit === DtTimeUnit.MICROSECOND ||
            inputUnit === DtTimeUnit.NANOSECOND
            ? (duration * (/** @type {?} */ (CONVERSION_FACTORS_TO_MS$1.get(inputUnit)))) / MOVE_COMMA
            : duration * (/** @type {?} */ (CONVERSION_FACTORS_TO_MS$1.get(inputUnit)));
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/duration/duration-formatter-utils/transform-result.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Calculates output duration in either "DEFAULT" or "CUSTOM" mode.
 * If precision is DEFAULT then displays a maximum of three units, but
 * if precision is a number, then displays that amount of units.
 * @param {?} duration numeric time value
 * @param {?} inputUnit dtTimeUnit value describing which unit the duration is in
 * @param {?} formatMethod the formatting method
 * @return {?}
 */
function dtTransformResult(duration, inputUnit, formatMethod) {
    /** @type {?} */
    const result = new Map();
    /** @type {?} */
    const unitsToDisplay = typeof formatMethod === 'number' ? formatMethod : CONVERSIONUNITS$1;
    /** @type {?} */
    let rest = duration * (/** @type {?} */ (CONVERSION_FACTORS_TO_MS$1.get(inputUnit)));
    /** @type {?} */
    let displayedUnits = 0;
    for (const key of Array.from(CONVERSION_FACTORS_TO_MS$1.keys())) {
        if (key === DtTimeUnit.MICROSECOND) {
            rest = Math.round(rest * MOVE_COMMA); // handles IEEE floating point number problem
        }
        /** @type {?} */
        const amount = Math.trunc(rest / (/** @type {?} */ (CONVERSION_FACTORS_TO_MS$1.get(key))));
        if (displayedUnits < unitsToDisplay) {
            if (amount > 0) {
                result.set(key, amount.toString());
                // Only increase when a unit with a value bigger than 0 exists
                displayedUnits++;
            }
            else if (displayedUnits > 0) {
                // Only increase when a unit with a value is already set
                displayedUnits++;
            }
        }
        rest = rest - amount * (/** @type {?} */ (CONVERSION_FACTORS_TO_MS$1.get(key)));
    }
    return result;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/duration/duration-formatter-utils/transform-result-precise.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Calculates the duration precisely. Will convert duration to the inputUnit or to the outputUnit if set. (floating point number for its corelated unit)
 * @param {?} duration numeric time value
 * @param {?} inputUnit dtTimeUnit value describing which unit the duration is in
 * @param {?} outputUnit dtTimeUnit | undefined value describing the unit to which it should format
 * @param {?} formatMethod the formatting method
 * @return {?}
 */
function dtTransformResultPrecise(duration, inputUnit, outputUnit, formatMethod) {
    /** @type {?} */
    const amount = inputUnit === DtTimeUnit.MILLISECOND
        ? duration
        : dtConvertToMilliseconds(duration, inputUnit);
    return outputUnit !== undefined
        ? calcResult((/** @type {?} */ (amount)), formatMethod, outputUnit)
        : calcResult((/** @type {?} */ (amount)), formatMethod, inputUnit);
}
/**
 * @param {?} amount
 * @param {?} formatMethod
 * @param {?} unit
 * @return {?}
 */
function calcResult(amount, formatMethod, unit) {
    /** @type {?} */
    let result = new Map();
    if (formatMethod === 'PRECISE') {
        amount = amount / (/** @type {?} */ (CONVERSION_FACTORS_TO_MS$1.get(unit)));
        // Need to move the comma since IEEE can't handle floating point numbers very well.
        if (unit === DtTimeUnit.MICROSECOND || unit === DtTimeUnit.NANOSECOND) {
            amount *= MOVE_COMMA;
        }
        result.set(unit, amount.toString());
    }
    else {
        amount = Math.trunc(amount / (/** @type {?} */ (CONVERSION_FACTORS_TO_MS$1.get(unit))));
        amount < 1 ? result.set(unit, '< 1') : result.set(unit, amount.toString());
    }
    return result;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/duration/duration-formatter-utils/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: src/duration/duration-formatter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Formats a numeric value to a duration string
 * @param {?} duration numeric time value
 * @param {?=} formatMethod the formatting method
 * @param {?=} outputUnit dtTimeUnit | undefined value describing the unit to which it should format e.g to seconds
 * @param {?=} inputUnit dtTimeUnit value describing which unit the duration is in (default: milliseconds)
 * @return {?}
 */
function formatDuration(duration, formatMethod = 'DEFAULT', outputUnit, inputUnit = DtTimeUnit.MILLISECOND) {
    /** @type {?} */
    const inputData = {
        input: duration,
        unit: inputUnit,
    };
    if (duration <= 0 && formatMethod === 'DEFAULT') {
        return new DtFormattedValue(inputData, {
            transformedValue: duration,
            displayValue: '< 1',
            displayUnit: inputUnit,
            displayWhiteSpace: false,
        });
    }
    /** @type {?} */
    const result = outputUnit || formatMethod === 'PRECISE'
        ? dtTransformResultPrecise(duration, inputUnit, outputUnit, formatMethod)
        : dtTransformResult(duration, inputUnit, formatMethod);
    // Return NO_DATA when inputUnit is invalid
    if (CONVERSION_FACTORS_TO_MS$1.get(inputUnit) === undefined) {
        return NO_DATA;
    }
    if (result === undefined) {
        return NO_DATA;
    }
    /** @type {?} */
    let resultString = '';
    result.forEach((/**
     * @param {?} value
     * @param {?} key
     * @return {?}
     */
    (value, key) => {
        resultString = `${resultString}${value} ${key} `;
    }));
    return new DtFormattedValue(inputData, {
        transformedValue: inputData.input,
        displayValue: resultString.trim(),
        displayWhiteSpace: false,
    });
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/duration/duration.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Pipe used to convert milliseconds to amount of time from years to nanoseconds
 */
class DtDuration {
    /**
     * @param {?} duration The timevalue to be formatted to amount of time from years to nanoseconds
     * @param {?} formatMethod DtDurationMode Configuration for formatting the output
     * @param {?} outputUnit dtTimeUnit | undefined value describing the unit to which it should format
     * @param {?=} inputUnit dtTimeUnit value describing which unit the duration is in
     * @return {?}
     */
    transform(duration, formatMethod, outputUnit, inputUnit = DtTimeUnit.MILLISECOND) {
        if (Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(duration)) {
            return NO_DATA;
        }
        return Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(duration)
            ? formatDuration(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(duration), formatMethod, outputUnit, inputUnit)
            : NO_DATA;
    }
}
DtDuration.ɵfac = function DtDuration_Factory(t) { return new (t || DtDuration)(); };
DtDuration.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "dtDuration", type: DtDuration, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DtDuration, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
                name: 'dtDuration'
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/formatters-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const FORMATTERS = [
    DtBytes,
    DtBits,
    DtKilobytes,
    DtMegabytes,
    DtCount,
    DtPercent,
    DtRate,
    DtDateRange,
    DtTime,
    DtDuration,
];
class DtFormattersModule {
}
DtFormattersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DtFormattersModule });
DtFormattersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DtFormattersModule_Factory(t) { return new (t || DtFormattersModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DtFormattersModule, { declarations: function () { return [DtBytes,
        DtBits,
        DtKilobytes,
        DtMegabytes,
        DtCount,
        DtPercent,
        DtRate,
        DtDateRange,
        DtTime,
        DtDuration]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]; }, exports: function () { return [DtBytes,
        DtBits,
        DtKilobytes,
        DtMegabytes,
        DtCount,
        DtPercent,
        DtRate,
        DtDateRange,
        DtTime,
        DtDuration]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DtFormattersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: FORMATTERS,
                exports: FORMATTERS,
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: dynatrace-barista-components-formatters.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=dynatrace-barista-components-formatters.js.map

/***/ }),

/***/ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-pagination.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-pagination.js ***!
  \*********************************************************************************************************************/
/*! exports provided: DtPagination, DtPaginationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtPagination", function() { return DtPagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtPaginationModule", function() { return DtPaginationModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dynatrace/barista-components/button */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-button.js");
/* harmony import */ var _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dynatrace/barista-components/icon */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-icon.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @dynatrace/barista-components/core */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-core.js");








/**
 * @fileoverview added by tsickle
 * Generated from: src/pagination-defaults.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright 2020 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * \@internal The default page size if there is no page size and there are no provided page size options.
 * @type {?}
 */





function DtPagination_ng_container_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r3._ariaLabelEllipsis);
} }
function DtPagination_ng_container_4_li_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DtPagination_ng_container_4_li_2_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8._setPage(page_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r6._ariaLabelPage + " " + page_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", page_r5, " ");
} }
function DtPagination_ng_container_4_li_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r7._ariaLabelCurrent + " " + page_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", page_r5, " ");
} }
function DtPagination_ng_container_4_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DtPagination_ng_container_4_li_2_button_1_Template, 2, 2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DtPagination_ng_container_4_li_2_span_2_Template, 2, 2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", page_r5 !== ctx_r4.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", page_r5 === ctx_r4.currentPage);
} }
function DtPagination_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DtPagination_ng_container_4_li_1_Template, 3, 1, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DtPagination_ng_container_4_li_2_Template, 3, 2, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const block_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r2 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", block_r1);
} }
const DEFAULT_PAGE_SIZE = 50;
/**
 * \@internal The offset from the start and the end when it should start adding the ellipsis character
 * @type {?}
 */
const BOUND = 3;
/**
 * \@internal The maximum amount of pages that are displayed in a row
 * @type {?}
 */
const MAX_PAGINATION_ITEMS = 7;
/**
 * \@internal Aria label for the previous page Button.
 * @type {?}
 */
const ARIA_DEFAULT_PREVIOUS_LABEL = 'Previous page';
/**
 * \@internal Aria label for the next page Button.
 * @type {?}
 */
const ARIA_DEFAULT_NEXT_LABEL = 'Next page';
/**
 * \@internal Aria label for the pagination.
 * @type {?}
 */
const ARIA_DEFAULT_LABEL = 'Pagination';
/**
 * \@internal Aria label for the ellipsis character.
 * @type {?}
 */
const ARIA_DEFAULT_ELLIPSES = 'The next pages are ellipses';
/**
 * \@internal Aria label for a page button (Page 1,2,3...).
 * @type {?}
 */
const ARIA_DEFAULT_PAGE_LABEL = 'page';
/**
 * \@internal Aria label for the current page button.
 * @type {?}
 */
const ARIA_DEFAULT_CURRENT_LABEL = 'You are currently on page';

/**
 * @fileoverview added by tsickle
 * Generated from: src/pagination-calculate-pages.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@internal
 * Calculates the numbers to be displayed by the pagination, according to the pagination State.
 * ellipsis pages that should not be shown.
 * @param {?} numberOfPages the number of pages that should be displayed
 * @param {?} currentPage the number of the current page (starts with 1)
 * @return {?}
 */
function calculatePages(numberOfPages, currentPage) {
    if (currentPage > numberOfPages || currentPage < 1) {
        return [];
    }
    if (numberOfPages < MAX_PAGINATION_ITEMS) {
        // create an Array with the length of numberOfPages that starts with one and ends with n
        return [Array.from({ length: numberOfPages }, (/**
             * @param {?} _
             * @param {?} index
             * @return {?}
             */
            (_, index) => index + 1))];
    }
    /** @type {?} */
    const start = new Set(Array.from({ length: BOUND }, (/**
     * @param {?} _
     * @param {?} index
     * @return {?}
     */
    (_, index) => index + 1)));
    /** @type {?} */
    const end = new Set(Array.from({ length: BOUND }, (/**
     * @param {?} _
     * @param {?} index
     * @return {?}
     */
    (_, index) => numberOfPages - BOUND + index + 1)));
    /** @type {?} */
    const middle = new Set();
    if (start.has(currentPage)) {
        start.add(currentPage + 1);
    }
    else if (end.has(currentPage)) {
        end.add(currentPage - 1);
    }
    else {
        middle.add(currentPage - 1);
        middle.add(currentPage);
        middle.add(currentPage + 1);
    }
    /** @type {?} */
    const startArray = Array.from(start);
    /** @type {?} */
    const middleArray = Array.from(middle);
    /** @type {?} */
    const endArray = Array.from(end).sort((/**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    (a, b) => a - b));
    if (middle.has(currentPage)) {
        return [[startArray[0]], middleArray, [endArray[endArray.length - 1]]];
    }
    if (start.has(currentPage)) {
        return [
            startArray,
            endArray.slice(startArray.length - MAX_PAGINATION_ITEMS + 1),
        ];
    }
    // current is in the end
    return [
        startArray.splice(0, MAX_PAGINATION_ITEMS - endArray.length - 1),
        endArray,
    ];
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/pagination.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DtPagination {
    /**
     * @param {?} _changeDetectorRef
     */
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Event that gets fired if the pagination changes the current page
         */
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._length = 0;
        this._pageSize = DEFAULT_PAGE_SIZE;
        this._currentPage = 1;
        /**
         * \@internal Aria label for the previous page button. Defaults to "Previous page"
         */
        this._ariaLabelPrevious = ARIA_DEFAULT_PREVIOUS_LABEL;
        /**
         * \@internal Aria label for the next page button. Defaults to "Next page"
         */
        this._ariaLabelNext = ARIA_DEFAULT_NEXT_LABEL;
        /**
         * Aria label for the pagination. Defaults to "Pagination"
         */
        this.ariaLabel = ARIA_DEFAULT_LABEL;
        /**
         * \@internal Aria label for the ellipsis character. Defaults to "The next pages are ellipsis"
         */
        this._ariaLabelEllipsis = ARIA_DEFAULT_ELLIPSES;
        /**
         * \@internal Aria label for a page button (Page 1,2,3...). Defaults to "Page"
         */
        this._ariaLabelPage = ARIA_DEFAULT_PAGE_LABEL;
        /**
         * \@internal Aria label for the current page button.
         * Defaults to "You are currently on page"
         */
        this._ariaLabelCurrent = ARIA_DEFAULT_CURRENT_LABEL;
        this._numberOfPages = 0;
        /**
         * \@internal
         * The async subject is used to get the last value, even it has completed.
         * Used to detect when the pagination is ready.
         */
        this._initialized = new rxjs__WEBPACK_IMPORTED_MODULE_5__["AsyncSubject"]();
        /**
         * \@internal Array of the pages to be displayed
         */
        this._pages = [];
        this._updateItems();
    }
    /**
     * The length of the total number of items that are being paginated. Defaulted to 0.
     * @return {?}
     */
    get length() {
        return this._length;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set length(value) {
        /** @type {?} */
        const length = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceNumberProperty"])(value);
        if (Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_6__["isNumber"])(value) && this._length !== length) {
            this._length = length;
            this._updateItems();
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Number of items to display on a page. By default set to 50.
     * @return {?}
     */
    get pageSize() {
        return this._pageSize;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set pageSize(value) {
        /** @type {?} */
        const pageSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceNumberProperty"])(value);
        if (Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_6__["isNumber"])(value) && this._pageSize !== pageSize) {
            this._pageSize = pageSize;
            this._updateItems();
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * The current page of the pagination
     * @return {?}
     */
    get currentPage() {
        return this._currentPage;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set currentPage(value) {
        /** @type {?} */
        const currentPage = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceNumberProperty"])(value);
        if (Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_6__["isNumber"])(value) && this._currentPage !== currentPage) {
            this._currentPage = currentPage;
            this._updateItems();
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Aria label for the previous page button. Defaults to "Previous page"
     * @deprecated `aria-label-previous` does not conform with accessibility standards.
     * Please use `ariaLabelPrevious` input instead.
     * \@breaking-change Will be removed in version 7.0.0
     * @return {?}
     */
    get ariaPreviousLabel() {
        return this._ariaLabelPrevious;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ariaPreviousLabel(value) {
        this._ariaLabelPrevious = value;
    }
    /**
     * Aria label for the previous page button. Defaults to "Previous page"
     * @return {?}
     */
    get ariaLabelPrevious() {
        return this._ariaLabelPrevious;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ariaLabelPrevious(value) {
        this._ariaLabelPrevious = value;
    }
    /**
     * Aria label for the next page button. Defaults to "Next page"
     * @deprecated `aria-label-next` does not conform with accessibility standards.
     * Please use `ariaLabelNext` input instead.
     * \@breaking-change Will be removed in version 7.0.0
     * @return {?}
     */
    get ariaNextLabel() {
        return this._ariaLabelNext;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ariaNextLabel(value) {
        this._ariaLabelNext = value;
    }
    /**
     * Aria label for the next page button. Defaults to "Next page"
     * @return {?}
     */
    get ariaLabelNext() {
        return this._ariaLabelNext;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ariaLabelNext(value) {
        this._ariaLabelNext = value;
    }
    /**
     * Aria label for the ellipsis character. Defaults to "The next pages are ellipses"
     * @deprecated `aria-label-ellipses` does not conform with accessibility standards.
     * Please use `ariaLabelEllipsis` input instead.
     * \@breaking-change Will be removed in version 7.0.0
     * @return {?}
     */
    get ariaLabelEllipses() {
        return this._ariaLabelEllipsis;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ariaLabelEllipses(value) {
        this._ariaLabelEllipsis = value;
    }
    /**
     * Aria label for the ellipsis character. Defaults to "The next pages are ellipsis"
     * @return {?}
     */
    get ariaLabelEllipsis() {
        return this._ariaLabelEllipsis;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ariaLabelEllipsis(value) {
        this._ariaLabelEllipsis = value;
    }
    /**
     * Aria label for a page button (Page 1,2,3...). Defaults to "Page"
     * @deprecated `aria-label-page` does not conform with accessibility standards.
     * Please use `ariaLabelPage` input instead.
     * \@breaking-change Will be removed in version 7.0.0
     * @return {?}
     */
    get ariaPageLabel() {
        return this._ariaLabelPage;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ariaPageLabel(value) {
        this._ariaLabelPage = value;
    }
    /**
     * Aria label for a page button (Page 1,2,3...). Defaults to "Page"
     * @return {?}
     */
    get ariaLabelPage() {
        return this._ariaLabelPage;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ariaLabelPage(value) {
        this._ariaLabelPage = value;
    }
    /**
     * Aria label for the current page button. Defaults to "You are currently on page"
     * @deprecated `aria-label-current` does not conform with accessibility standards.
     * Please use `ariaLabelCurrent` input instead.
     * \@breaking-change Will be removed in version 7.0.0
     * @return {?}
     */
    get ariaCurrentLabel() {
        return this._ariaLabelCurrent;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ariaCurrentLabel(value) {
        this._ariaLabelCurrent = value;
    }
    /**
     * Aria label for the current page button. Defaults to "You are currently on page"
     * @return {?}
     */
    get ariaLabelCurrent() {
        return this._ariaLabelCurrent;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ariaLabelCurrent(value) {
        this._ariaLabelCurrent = value;
    }
    /**
     * The number of pages by the provided page size and the length of all items
     * @return {?}
     */
    get numberOfPages() {
        return this._numberOfPages;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._initialized.next(true);
        this._initialized.complete();
    }
    /**
     * sets the previous page as current page
     * @return {?}
     */
    previous() {
        if (!this._isFirstPage) {
            this._setPage(this.currentPage - 1);
        }
    }
    /**
     * sets the next page as current page
     * @return {?}
     */
    next() {
        if (!this._isLastPage) {
            this._setPage(this.currentPage + 1);
        }
    }
    /**
     * \@internal
     * sets the current page and emits the changed event with the current page
     * only triggered by user interaction.
     * @param {?} page
     * @return {?}
     */
    _setPage(page) {
        this.currentPage = page;
        this.changed.emit(page);
    }
    /**
     * Calculates the pages that should be displayed by the pagination
     * @private
     * @return {?}
     */
    _updateItems() {
        this._numberOfPages =
            this._pageSize > 0 ? Math.ceil(this.length / this.pageSize) : 0;
        this._isFirstPage = this._currentPage <= 1;
        this._isLastPage = this._currentPage >= this._numberOfPages;
        this._pages = calculatePages(this._numberOfPages, this._currentPage);
    }
}
DtPagination.ɵfac = function DtPagination_Factory(t) { return new (t || DtPagination)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
DtPagination.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DtPagination, selectors: [["dt-pagination"]], hostAttrs: ["role", "navigation", 1, "dt-pagination"], inputs: { ariaLabel: ["aria-label", "ariaLabel"], length: "length", pageSize: "pageSize", currentPage: "currentPage", ariaPreviousLabel: ["aria-label-previous", "ariaPreviousLabel"], ariaLabelPrevious: "ariaLabelPrevious", ariaNextLabel: ["aria-label-next", "ariaNextLabel"], ariaLabelNext: "ariaLabelNext", ariaLabelEllipses: ["aria-label-ellipses", "ariaLabelEllipses"], ariaLabelEllipsis: "ariaLabelEllipsis", ariaPageLabel: ["aria-label-page", "ariaPageLabel"], ariaLabelPage: "ariaLabelPage", ariaCurrentLabel: ["aria-label-current", "ariaCurrentLabel"], ariaLabelCurrent: "ariaLabelCurrent" }, outputs: { changed: "changed" }, exportAs: ["dtPagination"], decls: 8, vars: 8, consts: [[1, "dt-pagination-list"], [1, "dt-pagination-previous"], ["dt-icon-button", "", "variant", "nested", "color", "accent", 3, "disabled", "click"], ["name", "dropdownclosed"], [4, "ngFor", "ngForOf"], [1, "dt-pagination-next"], ["class", "dt-pagination-item", 4, "ngIf"], ["class", "dt-pagination-item", 4, "ngFor", "ngForOf"], [1, "dt-pagination-item"], ["dt-button", "", "variant", "nested", 3, "click", 4, "ngIf"], ["aria-current", "", 4, "ngIf"], ["dt-button", "", "variant", "nested", 3, "click"], ["aria-current", ""]], template: function DtPagination_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ol", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DtPagination_Template_button_click_2_listener() { return ctx.previous(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "dt-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DtPagination_ng_container_4_Template, 3, 2, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DtPagination_Template_button_click_6_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "dt-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx._isFirstPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx._ariaLabelPrevious)("aria-disabled", ctx._isFirstPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx._pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx._isLastPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx._ariaLabelNext)("aria-disabled", ctx._isLastPage);
    } }, directives: [_dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_2__["DtButton"], _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_3__["DtIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"]], styles: [".dt-pagination-list[_ngcontent-%COMP%]{font-family:BerninaSansWeb,OpenSans,sans-serif;color:#454646;font-weight:400;font-size:14px;line-height:1.6;display:flex;margin:0;padding:0}.dt-pagination-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style-type:none}.dt-pagination-previous[_ngcontent-%COMP%]{margin-right:8px}.dt-pagination-previous[_ngcontent-%COMP%]   dt-icon[_ngcontent-%COMP%]{transform:scale(-1,1)}.dt-pagination-next[_ngcontent-%COMP%]{margin-left:8px}.dt-pagination-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .dt-pagination-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#6d6d6d;display:inline-block;line-height:32px;min-width:32px;padding:0;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.dt-pagination-item[_ngcontent-%COMP%]   [aria-current][_ngcontent-%COMP%]{color:#191919;font-weight:700;font-size:14px;line-height:32px}"], changeDetection: 0 });
/** @nocollapse */
DtPagination.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
DtPagination.propDecorators = {
    changed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    length: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    currentPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    ariaPreviousLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['aria-label-previous',] }],
    ariaLabelPrevious: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    ariaNextLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['aria-label-next',] }],
    ariaLabelNext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['aria-label',] }],
    ariaLabelEllipses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['aria-label-ellipses',] }],
    ariaLabelEllipsis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    ariaPageLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['aria-label-page',] }],
    ariaLabelPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    ariaCurrentLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['aria-label-current',] }],
    ariaLabelCurrent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DtPagination, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                exportAs: 'dtPagination',
                selector: 'dt-pagination',
                template: "<ol class=\"dt-pagination-list\" [attr.aria-label]=\"ariaLabel\">\n  <li class=\"dt-pagination-previous\">\n    <button\n      dt-icon-button\n      variant=\"nested\"\n      color=\"accent\"\n      [attr.aria-label]=\"_ariaLabelPrevious\"\n      [attr.aria-disabled]=\"_isFirstPage\"\n      [disabled]=\"_isFirstPage\"\n      (click)=\"previous()\"\n    >\n      <dt-icon name=\"dropdownclosed\"></dt-icon>\n    </button>\n  </li>\n\n  <ng-container *ngFor=\"let block of _pages; let i = index\">\n    <li *ngIf=\"i > 0\" class=\"dt-pagination-item\">\n      <span [attr.aria-label]=\"_ariaLabelEllipsis\">\u2026</span>\n    </li>\n\n    <li *ngFor=\"let page of block\" class=\"dt-pagination-item\">\n      <button\n        *ngIf=\"page !== currentPage\"\n        dt-button\n        variant=\"nested\"\n        [attr.aria-label]=\"_ariaLabelPage + ' ' + page\"\n        (click)=\"_setPage(page)\"\n      >\n        {{ page }}\n      </button>\n\n      <span\n        *ngIf=\"page === currentPage\"\n        aria-current\n        [attr.aria-label]=\"_ariaLabelCurrent + ' ' + page\"\n      >\n        {{ page }}\n      </span>\n    </li>\n  </ng-container>\n\n  <li class=\"dt-pagination-next\">\n    <button\n      dt-icon-button\n      variant=\"nested\"\n      color=\"accent\"\n      [attr.aria-label]=\"_ariaLabelNext\"\n      [attr.aria-disabled]=\"_isLastPage\"\n      [disabled]=\"_isLastPage\"\n      (click)=\"next()\"\n    >\n      <dt-icon name=\"dropdownclosed\"></dt-icon>\n    </button>\n  </li>\n</ol>\n",
                host: {
                    class: 'dt-pagination',
                    role: 'navigation'
                },
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].Emulated,
                styles: [".dt-pagination-list{font-family:BerninaSansWeb,OpenSans,sans-serif;color:#454646;font-weight:400;font-size:14px;line-height:1.6;display:flex;margin:0;padding:0}.dt-pagination-list li{list-style-type:none}.dt-pagination-previous{margin-right:8px}.dt-pagination-previous dt-icon{transform:scale(-1,1)}.dt-pagination-next{margin-left:8px}.dt-pagination-item button,.dt-pagination-item span{color:#6d6d6d;display:inline-block;line-height:32px;min-width:32px;padding:0;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.dt-pagination-item [aria-current]{color:#191919;font-weight:700;font-size:14px;line-height:32px}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { changed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-label']
        }], length: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], currentPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], ariaPreviousLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-label-previous']
        }], ariaLabelPrevious: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], ariaNextLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-label-next']
        }], ariaLabelNext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], ariaLabelEllipses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-label-ellipses']
        }], ariaLabelEllipsis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], ariaPageLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-label-page']
        }], ariaLabelPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], ariaCurrentLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-label-current']
        }], ariaLabelCurrent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/pagination-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DtPaginationModule {
}
DtPaginationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DtPaginationModule });
DtPaginationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DtPaginationModule_Factory(t) { return new (t || DtPaginationModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_3__["DtIconModule"], _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_2__["DtButtonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DtPaginationModule, { declarations: function () { return [DtPagination]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_3__["DtIconModule"], _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_2__["DtButtonModule"]]; }, exports: function () { return [DtPagination]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DtPaginationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_3__["DtIconModule"], _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_2__["DtButtonModule"]],
                exports: [DtPagination],
                declarations: [DtPagination]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: dynatrace-barista-components-pagination.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=dynatrace-barista-components-pagination.js.map

/***/ }),

/***/ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-table.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-table.js ***!
  \****************************************************************************************************************/
/*! exports provided: DT_TABLE_SEARCH_CONTROL_VALUE_ACCESSOR, DtCell, DtCellDef, DtColumnDef, DtExpandableCell, DtExpandableRow, DtExpandableRowChangeEvent, DtExpandableRowContent, DtFavoriteColumn, DtHeaderCell, DtHeaderCellDef, DtHeaderRow, DtHeaderRowDef, DtRow, DtRowDef, DtSimpleColumnBase, DtSimpleNumberColumn, DtSimpleTextColumn, DtSort, DtSortBase, DtSortHeader, DtSortHeaderBase, DtTable, DtTableDataSource, DtTableEmptyState, DtTableEmptyStateDirective, DtTableEmptyStateImage, DtTableEmptyStateMessage, DtTableEmptyStateTitle, DtTableLoadingState, DtTableModule, DtTableSearch, _DtSortHeaderMixinBase, _DtSortMixinBase, _DtTableBase, _DtTableBaseModule, _setDtColumnCssClasses, _updateDtColumnStyles, getDtSortHeaderNotContainedWithinSortError, getDtSortInvalidDirectionError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DT_TABLE_SEARCH_CONTROL_VALUE_ACCESSOR", function() { return DT_TABLE_SEARCH_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtCell", function() { return DtCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtCellDef", function() { return DtCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtColumnDef", function() { return DtColumnDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtExpandableCell", function() { return DtExpandableCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtExpandableRow", function() { return DtExpandableRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtExpandableRowChangeEvent", function() { return DtExpandableRowChangeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtExpandableRowContent", function() { return DtExpandableRowContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtFavoriteColumn", function() { return DtFavoriteColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtHeaderCell", function() { return DtHeaderCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtHeaderCellDef", function() { return DtHeaderCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtHeaderRow", function() { return DtHeaderRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtHeaderRowDef", function() { return DtHeaderRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtRow", function() { return DtRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtRowDef", function() { return DtRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtSimpleColumnBase", function() { return DtSimpleColumnBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtSimpleNumberColumn", function() { return DtSimpleNumberColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtSimpleTextColumn", function() { return DtSimpleTextColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtSort", function() { return DtSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtSortBase", function() { return DtSortBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtSortHeader", function() { return DtSortHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtSortHeaderBase", function() { return DtSortHeaderBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtTable", function() { return DtTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtTableDataSource", function() { return DtTableDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtTableEmptyState", function() { return DtTableEmptyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtTableEmptyStateDirective", function() { return DtTableEmptyStateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtTableEmptyStateImage", function() { return DtTableEmptyStateImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtTableEmptyStateMessage", function() { return DtTableEmptyStateMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtTableEmptyStateTitle", function() { return DtTableEmptyStateTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtTableLoadingState", function() { return DtTableLoadingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtTableModule", function() { return DtTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtTableSearch", function() { return DtTableSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_DtSortHeaderMixinBase", function() { return _DtSortHeaderMixinBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_DtSortMixinBase", function() { return _DtSortMixinBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_DtTableBase", function() { return _DtTableBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_DtTableBaseModule", function() { return _DtTableBaseModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_setDtColumnCssClasses", function() { return _setDtColumnCssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_updateDtColumnStyles", function() { return _updateDtColumnStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDtSortHeaderNotContainedWithinSortError", function() { return getDtSortHeaderNotContainedWithinSortError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDtSortInvalidDirectionError", function() { return getDtSortInvalidDirectionError; });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dynatrace/barista-components/button */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-button.js");
/* harmony import */ var _dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @dynatrace/barista-components/core */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-core.js");
/* harmony import */ var _dynatrace_barista_components_empty_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @dynatrace/barista-components/empty-state */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-empty-state.js");
/* harmony import */ var _dynatrace_barista_components_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @dynatrace/barista-components/form-field */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-form-field.js");
/* harmony import */ var _dynatrace_barista_components_formatters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @dynatrace/barista-components/formatters */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-formatters.js");
/* harmony import */ var _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @dynatrace/barista-components/icon */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-icon.js");
/* harmony import */ var _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @dynatrace/barista-components/input */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-input.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



















/**
 * @fileoverview added by tsickle
 * Generated from: src/row.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Data row definition for the dt-table.
 * Captures the header row's template and other row properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 * @template T
 */












const _c0 = ["*"];
const _c1 = [[["caption"]]];
const _c2 = ["caption"];
const _c3 = ["emptyStateTemplate"];
function DtTable_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
} }
function DtTable_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c4 = [[["", "dtTableEmptyState", ""], ["dt-empty-state"], ["", "dtCustomEmptyState", ""]], [["", "dtTableLoadingState", ""]]];
const _c5 = ["[dtTableEmptyState], dt-empty-state, [dtCustomEmptyState]", "[dtTableLoadingState]"];
const _c6 = ["dtExpandableRow"];
function DtExpandableRow_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 7);
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r17._expandableContentTemplate);
} }
const _c7 = function (a0) { return { "dt-expandable-row-expandable-expanded": a0 }; };
function DtSimpleTextColumn_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "dt-header-cell", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dt-sort-header", ctx_r19.sortable);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r19.label || ctx_r19.name);
} }
function DtSimpleTextColumn_dt_cell_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "dt-cell", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r21 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dtIndicator", ctx_r20._getIndicator(data_r21))("dtIndicatorColor", ctx_r20._getIndicator(data_r21));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("title", ctx_r20._getData(data_r21));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r20._getData(data_r21));
} }
function DtSimpleNumberColumn_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "dt-header-cell", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dt-sort-header", ctx_r22.sortable);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r22.label || ctx_r22.name);
} }
function DtSimpleNumberColumn_dt_cell_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "dt-cell", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r24 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dtIndicator", ctx_r23._getIndicator(data_r24))("dtIndicatorColor", ctx_r23._getIndicator(data_r24));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("title", ctx_r23._getData(data_r24));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r23._getData(data_r24));
} }
function DtFavoriteColumn_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "dt-header-cell", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dt-sort-header", ctx_r25.sortable);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r25.label);
} }
function DtFavoriteColumn_dt_cell_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
} }
const _c8 = function (a0, a1) { return { favorite: a0, data: a1 }; };
function DtFavoriteColumn_dt_cell_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "dt-cell", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DtFavoriteColumn_dt_cell_2_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r29 = ctx.$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dtIndicator", ctx_r26._getIndicator(data_r29))("dtIndicatorColor", ctx_r26._getIndicator(data_r29));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("title", ctx_r26._isFavorite(data_r29));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r27)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](5, _c8, ctx_r26._isFavorite(data_r29), data_r29));
} }
function DtFavoriteColumn_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DtFavoriteColumn_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34); const data_r32 = ctx.data; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r33._toggleFavorite(data_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "dt-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const favorite_r31 = ctx.favorite;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("dt-favorite-column-filled-star", favorite_r31)("dt-favorite-column-empty-star", !favorite_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", favorite_r31 ? "favorite" : "star-empty");
} }
const _c9 = ["dt-sort-header", ""];
function DtSortHeader_button_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
} }
function DtSortHeader_button_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "dt-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", ctx_r40._sortIconName);
} }
function DtSortHeader_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DtSortHeader_button_1_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DtSortHeader_button_1_div_2_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", ctx_r35._isDisabled || null)("aria-label", ctx_r35.ariaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r35._isDisabled);
} }
function DtSortHeader_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
} }
function DtSortHeader_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DtSortHeader_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r37);
} }
function DtSortHeader_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
} }
const _c10 = [[["dt-table-empty-state-image"]], [["dt-table-empty-state-title"]], [["dt-table-empty-state-message"]]];
const _c11 = ["dt-table-empty-state-image", "dt-table-empty-state-title", "dt-table-empty-state-message"];
class DtRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"] {
}
DtRowDef.ɵfac = function DtRowDef_Factory(t) { return ɵDtRowDef_BaseFactory(t || DtRowDef); };
DtRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: DtRowDef, selectors: [["", "dtRowDef", ""]], inputs: { columns: ["dtRowDefColumns", "columns"], when: ["dtRowDefWhen", "when"] }, exportAs: ["dtRowDef"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"], useExisting: DtRowDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
const ɵDtRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](DtRowDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DtRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[dtRowDef]',
                exportAs: 'dtRowDef',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"], useExisting: DtRowDef }],
                inputs: ['columns: dtRowDefColumns', 'when: dtRowDefWhen']
            }]
    }], null, null); })();
/**
 * Data row template container that contains the cell outlet. Adds the right class and role.
 */
class DtRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"] {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        super();
        this._elementRef = _elementRef;
        this._cells = new Set();
        this._cellStateChangesSub = rxjs__WEBPACK_IMPORTED_MODULE_12__["Subscription"].EMPTY;
        DtRow._mostRecentRow = this;
    }
    /**
     * \@internal
     * Returns the array of registered cells
     * @return {?}
     */
    get _registeredCells() {
        return Array.from(this._cells);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (DtRow._mostRecentRow === this) {
            DtRow._mostRecentRow = null;
        }
        this._cellStateChangesSub.unsubscribe();
    }
    /**
     * \@internal
     * The cell registers here and the listeners is added to apply the correct css classes
     * @param {?} cell
     * @return {?}
     */
    _registerCell(cell) {
        this._cells.add(cell);
        this._listenForStateChanges();
    }
    /**
     * \@internal
     * The cell unregisters here and the listeners are updated
     * @param {?} cell
     * @return {?}
     */
    _unregisterCell(cell) {
        this._cells.delete(cell);
        this._listenForStateChanges();
    }
    /**
     * @private
     * @return {?}
     */
    _listenForStateChanges() {
        this._cellStateChangesSub.unsubscribe();
        /** @type {?} */
        const cells = Array.from(this._cells.values());
        this._cellStateChangesSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(...cells.map((/**
         * @param {?} cell
         * @return {?}
         */
        (cell) => cell._stateChanges))).subscribe((/**
         * @return {?}
         */
        () => {
            this._applyCssClasses(cells);
        }));
    }
    /**
     * @private
     * @param {?} cells
     * @return {?}
     */
    _applyCssClasses(cells) {
        /** @type {?} */
        const hasError = !!cells.find((/**
         * @param {?} cell
         * @return {?}
         */
        (cell) => cell.hasError));
        /** @type {?} */
        const hasWarning = !!cells.find((/**
         * @param {?} cell
         * @return {?}
         */
        (cell) => cell.hasWarning));
        /** @type {?} */
        const hasIndicator = hasError || hasWarning;
        if (hasIndicator) {
            Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["_addCssClass"])(this._elementRef.nativeElement, 'dt-table-row-indicator');
        }
        else {
            Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["_removeCssClass"])(this._elementRef.nativeElement, 'dt-table-row-indicator');
        }
        if (hasWarning) {
            Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["_replaceCssClass"])(this._elementRef.nativeElement, 'dt-color-error', 'dt-color-warning');
        }
        else {
            Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["_removeCssClass"])(this._elementRef.nativeElement, 'dt-color-warning');
        }
        if (hasError) {
            Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["_replaceCssClass"])(this._elementRef.nativeElement, 'dt-color-warning', 'dt-color-error');
        }
        else {
            Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["_removeCssClass"])(this._elementRef.nativeElement, 'dt-color-error');
        }
    }
}
DtRow.ɵfac = function DtRow_Factory(t) { return new (t || DtRow)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
DtRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DtRow, selectors: [["dt-row"]], hostAttrs: ["role", "row", 1, "dt-row"], exportAs: ["dtRow"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function DtRow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
    } }, directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]], styles: ["[_nghost-%COMP%]{min-height:40px;align-items:stretch;border:0;box-sizing:border-box;display:flex;position:relative}[_nghost-%COMP%]::after{display:inline-block;min-height:inherit;content:\"\"}[_nghost-%COMP%]:nth-child(even){background-color:#fff;border:1px solid #fff}[_nghost-%COMP%]:nth-child(odd){background-color:#f8f8f8;border:1px solid #f8f8f8}.dt-table-row-indicator[_nghost-%COMP%]::before{width:2px;height:calc(100% - 4px);content:\"\";display:block;position:absolute;left:2px;-ms-grid-row-align:center;align-self:center}.dt-table-interactive-rows[_nghost-%COMP%]:hover, .dt-table-interactive-rows   [_nghost-%COMP%]:hover{border:1px solid #898989}.dt-table-row-indicator.dt-color-error[_nghost-%COMP%]::before{background-color:#c41425}.dt-table-row-indicator.dt-color-warning[_nghost-%COMP%]::before{background-color:#e6be00}.dt-theme-light   .dt-table-row-indicator.dt-color-error[_nghost-%COMP%]::before, .dt-theme-turquoise   .dt-table-row-indicator.dt-color-error[_nghost-%COMP%]::before, .dt-theme-turquoise.dt-theme-light   .dt-table-row-indicator.dt-color-error[_nghost-%COMP%]::before{background-color:#c41425}.dt-theme-light   .dt-table-row-indicator.dt-color-warning[_nghost-%COMP%]::before, .dt-theme-turquoise   .dt-table-row-indicator.dt-color-warning[_nghost-%COMP%]::before, .dt-theme-turquoise.dt-theme-light   .dt-table-row-indicator.dt-color-warning[_nghost-%COMP%]::before{background-color:#e6be00}.dt-theme-dark   .dt-table-row-indicator.dt-color-error[_nghost-%COMP%]::before, .dt-theme-turquoise.dt-theme-dark   .dt-table-row-indicator.dt-color-error[_nghost-%COMP%]::before{background-color:#e74d59}.dt-theme-dark   .dt-table-row-indicator.dt-color-warning[_nghost-%COMP%]::before, .dt-theme-turquoise.dt-theme-dark   .dt-table-row-indicator.dt-color-warning[_nghost-%COMP%]::before{background-color:#e6be00}.dt-theme-blue   .dt-table-row-indicator.dt-color-error[_nghost-%COMP%]::before, .dt-theme-blue.dt-theme-light   .dt-table-row-indicator.dt-color-error[_nghost-%COMP%]::before{background-color:#c41425}.dt-theme-blue   .dt-table-row-indicator.dt-color-warning[_nghost-%COMP%]::before, .dt-theme-blue.dt-theme-light   .dt-table-row-indicator.dt-color-warning[_nghost-%COMP%]::before{background-color:#e6be00}.dt-theme-blue.dt-theme-dark   .dt-table-row-indicator.dt-color-error[_nghost-%COMP%]::before{background-color:#e74d59}.dt-theme-blue.dt-theme-dark   .dt-table-row-indicator.dt-color-warning[_nghost-%COMP%]::before{background-color:#e6be00}.dt-theme-purple   .dt-table-row-indicator.dt-color-error[_nghost-%COMP%]::before, .dt-theme-purple.dt-theme-light   .dt-table-row-indicator.dt-color-error[_nghost-%COMP%]::before{background-color:#c41425}.dt-theme-purple   .dt-table-row-indicator.dt-color-warning[_nghost-%COMP%]::before, .dt-theme-purple.dt-theme-light   .dt-table-row-indicator.dt-color-warning[_nghost-%COMP%]::before{background-color:#e6be00}.dt-theme-purple.dt-theme-dark   .dt-table-row-indicator.dt-color-error[_nghost-%COMP%]::before{background-color:#e74d59}.dt-theme-purple.dt-theme-dark   .dt-table-row-indicator.dt-color-warning[_nghost-%COMP%]::before{background-color:#e6be00}.dt-theme-royalblue   .dt-table-row-indicator.dt-color-error[_nghost-%COMP%]::before, .dt-theme-royalblue.dt-theme-light   .dt-table-row-indicator.dt-color-error[_nghost-%COMP%]::before{background-color:#c41425}.dt-theme-royalblue   .dt-table-row-indicator.dt-color-warning[_nghost-%COMP%]::before, .dt-theme-royalblue.dt-theme-light   .dt-table-row-indicator.dt-color-warning[_nghost-%COMP%]::before{background-color:#e6be00}.dt-theme-royalblue.dt-theme-dark   .dt-table-row-indicator.dt-color-error[_nghost-%COMP%]::before{background-color:#e74d59}.dt-theme-royalblue.dt-theme-dark   .dt-table-row-indicator.dt-color-warning[_nghost-%COMP%]::before{background-color:#e6be00}"], changeDetection: 0 });
/**
 * \@internal Necessary due to the fact that we cannot get the DtRow via normal DI
 */
DtRow._mostRecentRow = null;
/** @nocollapse */
DtRow.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DtRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'dt-row',
                template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
                host: {
                    class: 'dt-row',
                    role: 'row'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].Emulated,
                exportAs: 'dtRow',
                styles: [":host{min-height:40px;align-items:stretch;border:0;box-sizing:border-box;display:flex;position:relative}:host::after{display:inline-block;min-height:inherit;content:\"\"}:host:nth-child(even){background-color:#fff;border:1px solid #fff}:host:nth-child(odd){background-color:#f8f8f8;border:1px solid #f8f8f8}:host.dt-table-row-indicator::before{width:2px;height:calc(100% - 4px);content:\"\";display:block;position:absolute;left:2px;-ms-grid-row-align:center;align-self:center}:host-context(.dt-table-interactive-rows):hover{border:1px solid #898989}:host.dt-table-row-indicator.dt-color-error::before{background-color:#c41425}:host.dt-table-row-indicator.dt-color-warning::before{background-color:#e6be00}.dt-theme-light :host.dt-table-row-indicator.dt-color-error::before,.dt-theme-turquoise :host.dt-table-row-indicator.dt-color-error::before,.dt-theme-turquoise.dt-theme-light :host.dt-table-row-indicator.dt-color-error::before{background-color:#c41425}.dt-theme-light :host.dt-table-row-indicator.dt-color-warning::before,.dt-theme-turquoise :host.dt-table-row-indicator.dt-color-warning::before,.dt-theme-turquoise.dt-theme-light :host.dt-table-row-indicator.dt-color-warning::before{background-color:#e6be00}.dt-theme-dark :host.dt-table-row-indicator.dt-color-error::before,.dt-theme-turquoise.dt-theme-dark :host.dt-table-row-indicator.dt-color-error::before{background-color:#e74d59}.dt-theme-dark :host.dt-table-row-indicator.dt-color-warning::before,.dt-theme-turquoise.dt-theme-dark :host.dt-table-row-indicator.dt-color-warning::before{background-color:#e6be00}.dt-theme-blue :host.dt-table-row-indicator.dt-color-error::before,.dt-theme-blue.dt-theme-light :host.dt-table-row-indicator.dt-color-error::before{background-color:#c41425}.dt-theme-blue :host.dt-table-row-indicator.dt-color-warning::before,.dt-theme-blue.dt-theme-light :host.dt-table-row-indicator.dt-color-warning::before{background-color:#e6be00}.dt-theme-blue.dt-theme-dark :host.dt-table-row-indicator.dt-color-error::before{background-color:#e74d59}.dt-theme-blue.dt-theme-dark :host.dt-table-row-indicator.dt-color-warning::before{background-color:#e6be00}.dt-theme-purple :host.dt-table-row-indicator.dt-color-error::before,.dt-theme-purple.dt-theme-light :host.dt-table-row-indicator.dt-color-error::before{background-color:#c41425}.dt-theme-purple :host.dt-table-row-indicator.dt-color-warning::before,.dt-theme-purple.dt-theme-light :host.dt-table-row-indicator.dt-color-warning::before{background-color:#e6be00}.dt-theme-purple.dt-theme-dark :host.dt-table-row-indicator.dt-color-error::before{background-color:#e74d59}.dt-theme-purple.dt-theme-dark :host.dt-table-row-indicator.dt-color-warning::before{background-color:#e6be00}.dt-theme-royalblue :host.dt-table-row-indicator.dt-color-error::before,.dt-theme-royalblue.dt-theme-light :host.dt-table-row-indicator.dt-color-error::before{background-color:#c41425}.dt-theme-royalblue :host.dt-table-row-indicator.dt-color-warning::before,.dt-theme-royalblue.dt-theme-light :host.dt-table-row-indicator.dt-color-warning::before{background-color:#e6be00}.dt-theme-royalblue.dt-theme-dark :host.dt-table-row-indicator.dt-color-error::before{background-color:#e74d59}.dt-theme-royalblue.dt-theme-dark :host.dt-table-row-indicator.dt-color-warning::before{background-color:#e6be00}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/sort/sort-errors.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright 2020 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * \@internal
 * @return {?}
 */
function getDtSortHeaderNotContainedWithinSortError() {
    return Error(`DtSortHeader must be placed within a parent element with the DtSort directive.`);
}
/**
 * \@internal
 * @param {?} direction
 * @return {?}
 */
function getDtSortInvalidDirectionError(direction) {
    return Error(`${direction} is not a valid sort direction ('asc' or 'desc').`);
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/sort/sort.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The current sort state.
 * @record
 */
function DtSortEvent() { }
if (false) {}
/**
 * Boilerplate for applying mixins to DtSort.
 * \@internal
 */
class DtSortBase {
}
/** @type {?} */
const _DtSortMixinBase = Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisabled"])(DtSortBase);
/**
 * Container for DtSortHeaders to manage the sort state and provide default sort parameters.
 */
class DtSort extends _DtSortMixinBase {
    constructor() {
        super(...arguments);
        /**
         * Used to notify any child components listening to state changes.
         * \@internal
         */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        /**
         * \@internal Initialized subject that fires on initialization and completes on destroy.
         */
        this._initialized = new rxjs__WEBPACK_IMPORTED_MODULE_12__["BehaviorSubject"](false);
        /**
         * The direction to set when an DtSortHeader is initially sorted.
         * May be overriden by the DtSortHeader's sort start.
         */
        this.start = 'asc';
        this._direction = '';
        /**
         * Event emitted when the user changes either the active sort or sort direction.
         */
        this.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    /**
     * The sort direction of the currently active DtSortHeader.
     * @return {?}
     */
    get direction() {
        return this._direction;
    }
    /**
     * @param {?} direction
     * @return {?}
     */
    set direction(direction) {
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["isDevMode"])() &&
            direction &&
            direction !== 'asc' &&
            direction !== 'desc') {
            throw getDtSortInvalidDirectionError(direction);
        }
        this._direction = direction;
    }
    /**
     * Sets the active sort id and determines the new sort direction.
     * @param {?} sortableOrActive
     * @param {?=} direction
     * @return {?}
     */
    sort(sortableOrActive, direction) {
        if (typeof sortableOrActive === 'string') {
            this.active = sortableOrActive;
            this.direction = (/** @type {?} */ (direction));
        }
        else {
            /** @type {?} */
            const sortable = sortableOrActive;
            if (this.active !== sortable.id) {
                this.active = sortable.id;
                this.direction = sortable.start ? sortable.start : this.start;
            }
            else {
                this.direction = this.getNextSortDirection(sortable);
            }
        }
        this.sortChange.emit({ active: this.active, direction: this.direction });
    }
    /**
     * Returns the next sort direction of the active sortable.
     * @param {?} sortable
     * @return {?}
     */
    getNextSortDirection(sortable) {
        if (!sortable) {
            return '';
        }
        /** @type {?} */
        const sortDirectionCycle = getSortDirection(sortable.start || this.start);
        // Get and return the next direction in the cycle
        /** @type {?} */
        let nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;
        if (nextDirectionIndex >= sortDirectionCycle.length) {
            nextDirectionIndex = 0;
        }
        return sortDirectionCycle[nextDirectionIndex];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._initialized.next(true);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // If the active column is set initially but the target direction is not defined
        // we need to default the sort direction to the start direction.
        if (Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["isDefined"])(changes.active) &&
            changes.active.firstChange &&
            this.direction === '') {
            this.direction = this.start;
        }
        // If active is bound and being changed after initialization
        // we need to update the sorter.
        if (Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["isDefined"])(changes.active) && !changes.active.firstChange) {
            this.sort(this.active, this.direction);
        }
        this._stateChanges.next();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._stateChanges.complete();
        this._initialized.complete();
    }
}
DtSort.ɵfac = function DtSort_Factory(t) { return ɵDtSort_BaseFactory(t || DtSort); };
DtSort.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: DtSort, selectors: [["", "dtSort", ""]], inputs: { disabled: ["dtSortDisabled", "disabled"], start: ["dtSortStart", "start"], direction: ["dtSortDirection", "direction"], active: ["dtSortActive", "active"] }, outputs: { sortChange: "dtSortChange" }, exportAs: ["dtSort"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });
DtSort.propDecorators = {
    active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['dtSortActive',] }],
    start: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['dtSortStart',] }],
    direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['dtSortDirection',] }],
    sortChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['dtSortChange',] }]
};
const ɵDtSort_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](DtSort);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DtSort, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[dtSort]',
                exportAs: 'dtSort',
                inputs: ['disabled: dtSortDisabled']
            }]
    }], null, { start: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['dtSortStart']
        }], sortChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"],
            args: ['dtSortChange']
        }], direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['dtSortDirection']
        }], active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['dtSortActive']
        }] }); })();
if (false) {}
/**
 * Returns the sort direction cycle to use given the provided parameters of order and clear.
 * @param {?} start
 * @return {?}
 */
function getSortDirection(start) {
    /** @type {?} */
    const sortOrder = ['asc', 'desc'];
    if (start === 'desc') {
        sortOrder.reverse();
    }
    return sortOrder;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cell.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Cell definition for the dt-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
class DtCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"] {
}
DtCellDef.ɵfac = function DtCellDef_Factory(t) { return ɵDtCellDef_BaseFactory(t || DtCellDef); };
DtCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: DtCellDef, selectors: [["", "dtCellDef", ""]], exportAs: ["dtCellDef"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"], useExisting: DtCellDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
const ɵDtCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](DtCellDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DtCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[dtCellDef]',
                exportAs: 'dtCellDef',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"], useExisting: DtCellDef }]
            }]
    }], null, null); })();
/**
 * Column definition for the dt-table.
 * Defines a set of cells available for a table column.
 */
class DtColumnDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"] {
    constructor() {
        super(...arguments);
        /**
         * The alignment of the colums
         */
        // tslint:disable-next-line:no-input-rename
        this.align = 'left';
        /**
         * \@internal Alignment subject which fires with changes to the alignment input.
         */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this._stateChanges.next();
    }
}
DtColumnDef.ɵfac = function DtColumnDef_Factory(t) { return ɵDtColumnDef_BaseFactory(t || DtColumnDef); };
DtColumnDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: DtColumnDef, selectors: [["", "dtColumnDef", ""]], inputs: { align: ["dtColumnAlign", "align"], name: ["dtColumnDef", "name"], proportion: ["dtColumnProportion", "proportion"], minWidth: ["dtColumnMinWidth", "minWidth"] }, exportAs: ["dtColumnDef"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"], useExisting: DtColumnDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });
DtColumnDef.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['dtColumnDef',] }],
    align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['dtColumnAlign',] }],
    proportion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['dtColumnProportion',] }],
    minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['dtColumnMinWidth',] }]
};
const ɵDtColumnDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](DtColumnDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DtColumnDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[dtColumnDef]',
                exportAs: 'dtColumnDef',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"], useExisting: DtColumnDef }]
            }]
    }], null, { align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['dtColumnAlign']
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['dtColumnDef']
        }], proportion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['dtColumnProportion']
        }], minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['dtColumnMinWidth']
        }] }); })();
if (false) {}
/**
 * Cell template container that adds the right classes and role.
 */
class DtCell {
    /**
     * @param {?} _columnDef
     * @param {?} _changeDetectorRef
     * @param {?} elem
     * @param {?=} dtSortable
     * @param {?=} _dtIndicator
     */
    constructor(_columnDef, _changeDetectorRef, elem, dtSortable, _dtIndicator) {
        this._columnDef = _columnDef;
        this._changeDetectorRef = _changeDetectorRef;
        this._dtIndicator = _dtIndicator;
        /**
         * \@internal
         * Emits whenever the indicators change or one of the inputs on the indicators changes
         */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        /**
         * \@internal
         * indicates if a cell is sorted, used for displaying a bold value
         */
        this._isSorted = false;
        this._sortChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_12__["Subscription"].EMPTY;
        this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        if (dtSortable) {
            this._isSorted = dtSortable.active === this._columnDef.name;
            dtSortable.sortChange
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy))
                .subscribe((/**
             * @param {?} sort
             * @return {?}
             */
            (sort) => {
                // If event is void, it is being unregisterd.
                this._isSorted = sort.active === this._columnDef.name;
                this._changeDetectorRef.detectChanges();
            }));
        }
        this._columnDef._stateChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy))
            .subscribe((/**
         * @return {?}
         */
        () => {
            _updateDtColumnStyles(this._columnDef, elem);
        }));
        if (DtRow._mostRecentRow) {
            this._row = DtRow._mostRecentRow;
            this._row._registerCell(this);
        }
    }
    /**
     * Whether the cell has an error
     * @return {?}
     */
    get hasError() {
        return this._hasIndicator('error');
    }
    /**
     * Whether the cell has a warning
     * @return {?}
     */
    get hasWarning() {
        return this._hasIndicator('warning');
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        /** @type {?} */
        const indicatorChanges = this._dtIndicator
            ? this._dtIndicator._stateChanges
            : this._indicators.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])((/**
             * @return {?}
             */
            () => !!this._indicators.length)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])((/**
             * @return {?}
             */
            () => Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(...this._indicators.map((/**
             * @param {?} indicator
             * @return {?}
             */
            (indicator) => indicator._stateChanges))))));
        indicatorChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe((/**
         * @return {?}
         */
        () => {
            this._stateChanges.next();
        }));
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            this._stateChanges.next();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._stateChanges.complete();
        this._sortChangeSubscription.unsubscribe();
        this._destroy.next();
        this._destroy.complete();
        if (this._row) {
            this._row._unregisterCell(this);
        }
    }
    /**
     * @private
     * @param {?} indicatorType
     * @return {?}
     */
    _hasIndicator(indicatorType) {
        if (this._dtIndicator) {
            return (this._dtIndicator.active && this._dtIndicator.color === indicatorType);
        }
        return (this._indicators &&
            Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["isDefined"])(this._indicators.find((/**
             * @param {?} indicator
             * @return {?}
             */
            (indicator) => indicator.active && indicator.color === indicatorType))));
    }
}
DtCell.ɵfac = function DtCell_Factory(t) { return new (t || DtCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](DtColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](DtSort, 12), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["DtIndicator"], 9)); };
DtCell.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DtCell, selectors: [["dt-cell"]], contentQueries: function DtCell_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, _dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["DtIndicator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._indicators = _t);
    } }, hostAttrs: ["role", "gridcell", 1, "dt-cell"], hostVars: 2, hostBindings: function DtCell_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("dt-cell-sorted", ctx._isSorted);
    } }, exportAs: ["dtCell"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function DtCell_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
    } }, styles: [".dt-cell-sorted[_nghost-%COMP%]{font-weight:600}.dt-table.dt-cell[_nghost-%COMP%], .dt-table   .dt-cell[_nghost-%COMP%]{overflow:hidden;word-wrap:break-word;position:relative;font-variant:tabular-nums;flex:1;display:flex;align-items:center;justify-content:flex-start;padding:8px 12px}.dt-table.dt-cell.dt-column-sorted[_nghost-%COMP%], .dt-table   .dt-cell.dt-column-sorted[_nghost-%COMP%]{color:#191919;font-weight:700}.dt-table.dt-cell.dt-table-column-align-right[_nghost-%COMP%], .dt-table   .dt-cell.dt-table-column-align-right[_nghost-%COMP%]{justify-content:flex-end;text-align:right}.dt-table.dt-cell.dt-table-column-align-center[_nghost-%COMP%], .dt-table   .dt-cell.dt-table-column-align-center[_nghost-%COMP%]{justify-content:center;text-align:center}.dt-tree-table.dt-cell[_nghost-%COMP%], .dt-tree-table   .dt-cell[_nghost-%COMP%]{overflow:hidden;word-wrap:break-word;position:relative;font-variant:tabular-nums;padding-left:12px;padding-right:12px;display:table-cell}.dt-tree-table.dt-cell.dt-column-sorted[_nghost-%COMP%], .dt-tree-table   .dt-cell.dt-column-sorted[_nghost-%COMP%]{color:#191919;font-weight:700}.dt-tree-table.dt-cell.dt-table-column-align-right[_nghost-%COMP%], .dt-tree-table   .dt-cell.dt-table-column-align-right[_nghost-%COMP%]{text-align:right}.dt-tree-table.dt-cell.dt-table-column-align-center[_nghost-%COMP%], .dt-tree-table   .dt-cell.dt-table-column-align-center[_nghost-%COMP%]{text-align:center}[_nghost-%COMP%]     .dt-info-group .dt-info-group-icon .dt-icon svg{fill:#454646}"], changeDetection: 0 });
/** @nocollapse */
DtCell.ctorParameters = () => [
    { type: DtColumnDef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: DtSort, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"] }] },
    { type: _dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["DtIndicator"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"] }] }
];
DtCell.propDecorators = {
    _indicators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["DtIndicator"], { descendants: true },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DtCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'dt-cell',
                template: '<ng-content></ng-content>',
                host: {
                    class: 'dt-cell',
                    role: 'gridcell',
                    '[class.dt-cell-sorted]': '_isSorted'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].Emulated,
                exportAs: 'dtCell',
                styles: [":host.dt-cell-sorted{font-weight:600}:host-context(.dt-table).dt-cell{overflow:hidden;word-wrap:break-word;position:relative;font-variant:tabular-nums;flex:1;display:flex;align-items:center;justify-content:flex-start;padding:8px 12px}:host-context(.dt-table).dt-cell.dt-column-sorted{color:#191919;font-weight:700}:host-context(.dt-table).dt-cell.dt-table-column-align-right{justify-content:flex-end;text-align:right}:host-context(.dt-table).dt-cell.dt-table-column-align-center{justify-content:center;text-align:center}:host-context(.dt-tree-table).dt-cell{overflow:hidden;word-wrap:break-word;position:relative;font-variant:tabular-nums;padding-left:12px;padding-right:12px;display:table-cell}:host-context(.dt-tree-table).dt-cell.dt-column-sorted{color:#191919;font-weight:700}:host-context(.dt-tree-table).dt-cell.dt-table-column-align-right{text-align:right}:host-context(.dt-tree-table).dt-cell.dt-table-column-align-center{text-align:center}:host ::ng-deep .dt-info-group .dt-info-group-icon .dt-icon svg{fill:#454646}"]
            }]
    }], function () { return [{ type: DtColumnDef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: DtSort, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
            }] }, { type: _dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["DtIndicator"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"]
            }] }]; }, { _indicators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["DtIndicator"], { descendants: true }]
        }] }); })();
if (false) {}
/** @type {?} */
const ALIGNMENT_CAST_MAP = new Map([
    ['icon', 'center'],
    ['control', 'center'],
    ['number', 'right'],
    ['date', 'right'],
    ['ip', 'right'],
]);
/**
 * Maps the provided alignment to a css align provided by the cast map, if there's no coincidence
 * return the provided one. In the latter case will be handle with the default left-aligned SCSS style.
 *
 * This will be also 'type checked' with the Template Compiler feature from \@Angular6.
 * @param {?} value
 * @return {?}
 */
function coerceAlignment(value) {
    return (ALIGNMENT_CAST_MAP.get((/** @type {?} */ (value))) ||
        ((/** @type {?} */ (value))));
}
/**
 * \@internal Sets the css classes on a DtColumn
 * @param {?} columnDef
 * @param {?} elementRef
 * @return {?}
 */
function _setDtColumnCssClasses(columnDef, elementRef) {
    const { align, cssClassFriendlyName } = columnDef;
    /** @type {?} */
    const cssAlignmentClass = coerceAlignment(align);
    Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["_removeCssClass"])(elementRef.nativeElement, 'dt-table-column-align-left');
    Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["_removeCssClass"])(elementRef.nativeElement, 'dt-table-column-align-center');
    Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["_removeCssClass"])(elementRef.nativeElement, 'dt-table-column-align-right');
    Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["_addCssClass"])(elementRef.nativeElement, `dt-table-column-align-${cssAlignmentClass}`);
    Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["_addCssClass"])(elementRef.nativeElement, `dt-table-column-${cssClassFriendlyName}`);
}
/**
 * \@internal Set classes name and styles props for columns.
 * @param {?} columnDef
 * @param {?} elementRef
 * @return {?}
 */
function _updateDtColumnStyles(columnDef, elementRef) {
    _setDtColumnCssClasses(columnDef, elementRef);
    /** @type {?} */
    const element = elementRef.nativeElement;
    if (element && element.style) {
        const { proportion, minWidth } = columnDef;
        /** @type {?} */
        const setProportion = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceNumberProperty"])(proportion);
        if (setProportion > 0) {
            element.style.flexGrow = setProportion + '';
            element.style.flexShrink = setProportion + '';
        }
        /** @type {?} */
        const valueAndUnit = Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["_parseCssValue"])(minWidth);
        if (valueAndUnit !== null) {
            element.style.minWidth = `${valueAndUnit.value}${valueAndUnit.unit}`;
        }
        else {
            element.style.minWidth = '';
        }
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/expandable/expandable-cell.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Cell template that adds the right classes, role and static content for the details cell,
 * which can be used to indicate that a table row is expandable.
 */
class DtExpandableCell extends DtCell {
}
DtExpandableCell.ɵfac = function DtExpandableCell_Factory(t) { return ɵDtExpandableCell_BaseFactory(t || DtExpandableCell); };
DtExpandableCell.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DtExpandableCell, selectors: [["dt-expandable-cell"]], hostAttrs: ["role", "gridcell", 1, "dt-expandable-cell"], inputs: { ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledBy: ["aria-labelledby", "ariaLabelledBy"] }, exportAs: ["dtExpandableCell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [["dt-icon-button", "", "variant", "nested", 3, "click"], ["name", "dropdownopen", 1, "dt-expandable-cell-dropdown"]], template: function DtExpandableCell_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DtExpandableCell_Template_button_click_0_listener() { return ctx._row.expanded ? ctx._row._collapse() : ctx._row._expandViaInteraction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "dt-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy);
    } }, directives: [_dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_4__["DtButton"], _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_9__["DtIcon"]], styles: [".dt-expandable-cell[_nghost-%COMP%]{overflow:hidden;word-wrap:break-word;position:relative;font-variant:tabular-nums;flex:1;display:flex;align-items:center;justify-content:flex-start;padding:8px 12px}.dt-expandable-cell.dt-column-sorted[_nghost-%COMP%]{color:#191919;font-weight:700}.dt-expandable-cell.dt-table-column-align-right[_nghost-%COMP%]{justify-content:flex-end;text-align:right}.dt-expandable-cell.dt-table-column-align-center[_nghost-%COMP%]{justify-content:center;text-align:center}.dt-expandable-cell[_nghost-%COMP%]   .dt-expandable-cell-dropdown[_ngcontent-%COMP%]{width:20px;height:20px;transform:rotate(0);transition:transform 225ms}.dt-expandable-cell.dt-expandable-cell-expanded[_nghost-%COMP%]   .dt-expandable-cell-dropdown[_ngcontent-%COMP%]{transform:rotate(180deg);transition:transform 225ms}"], changeDetection: 0 });
DtExpandableCell.propDecorators = {
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['aria-label',] }],
    ariaLabelledBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['aria-labelledby',] }]
};
const ɵDtExpandableCell_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](DtExpandableCell);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DtExpandableCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'dt-expandable-cell',
                template: "<button\n  dt-icon-button\n  variant=\"nested\"\n  [attr.aria-label]=\"ariaLabel\"\n  [attr.aria-labelledby]=\"ariaLabelledBy\"\n  (click)=\"_row.expanded ? _row._collapse() : _row._expandViaInteraction()\"\n>\n  <dt-icon class=\"dt-expandable-cell-dropdown\" name=\"dropdownopen\"></dt-icon>\n</button>\n",
                host: {
                    class: 'dt-expandable-cell',
                    role: 'gridcell'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].Emulated,
                preserveWhitespaces: false,
                exportAs: 'dtExpandableCell',
                styles: [":host.dt-expandable-cell{overflow:hidden;word-wrap:break-word;position:relative;font-variant:tabular-nums;flex:1;display:flex;align-items:center;justify-content:flex-start;padding:8px 12px}:host.dt-expandable-cell.dt-column-sorted{color:#191919;font-weight:700}:host.dt-expandable-cell.dt-table-column-align-right{justify-content:flex-end;text-align:right}:host.dt-expandable-cell.dt-table-column-align-center{justify-content:center;text-align:center}:host.dt-expandable-cell .dt-expandable-cell-dropdown{width:20px;height:20px;transform:rotate(0);transition:transform 225ms}:host.dt-expandable-cell.dt-expandable-cell-expanded .dt-expandable-cell-dropdown{transform:rotate(180deg);transition:transform 225ms}"]
            }]
    }], null, { ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['aria-label']
        }], ariaLabelledBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['aria-labelledby']
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/base-table.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
// tslint:disable-next-line: class-name
class _DtTableBase extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"] {
    /**
     * @param {?} differs
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     * @param {?} document
     * @param {?} platform
     * @param {?} _role
     * @param {?=} interactiveRows
     */
    constructor(differs, changeDetectorRef, elementRef, 
    // tslint:disable-next-line: no-any
    document, platform, _role, interactiveRows) {
        // tslint:disable-next-line: no-any
        super(differs, changeDetectorRef, elementRef, _role, (/** @type {?} */ (((/** @type {?} */ (null))))), // tslint:disable-line:no-any
        document, platform);
        this._role = _role;
        this._interactiveRows = false;
        this.interactiveRows = (/** @type {?} */ (interactiveRows));
    }
    /**
     * Whether the defined rows are interactive.
     * @return {?}
     */
    get interactiveRows() {
        return this._interactiveRows;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set interactiveRows(value) {
        this._interactiveRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value);
    }
}
_DtTableBase.ɵfac = function _DtTableBase_Factory(t) { return new (t || _DtTableBase)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinjectAttribute"]('role'), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinjectAttribute"]('interactiveRows')); };
_DtTableBase.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: _DtTableBase, selectors: [["dt-table-base"]], inputs: { interactiveRows: "interactiveRows" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c2, decls: 4, vars: 0, consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["footerRowOutlet", ""]], template: function _DtTableBase_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](3, 2);
    } }, directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["HeaderRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["DataRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["FooterRowOutlet"]], encapsulation: 2 });
/** @nocollapse */
_DtTableBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["Platform"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"], args: ['role',] }] },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"], args: ['interactiveRows',] }] }
];
_DtTableBase.propDecorators = {
    interactiveRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_DtTableBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'dt-table-base',
                template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_TABLE_TEMPLATE"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["Platform"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"],
                args: ['role']
            }] }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"],
                args: ['interactiveRows']
            }] }]; }, { interactiveRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();
if (false) {}
// tslint:disable-next-line: class-name
class _DtTableBaseModule {
}
_DtTableBaseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: _DtTableBaseModule });
_DtTableBaseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function _DtTableBaseModule_Factory(t) { return new (t || _DtTableBaseModule)(); }, imports: [[_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_DtTableBaseModule, { declarations: function () { return [_DtTableBase]; }, imports: function () { return [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"]]; }, exports: function () { return [_DtTableBase]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_DtTableBaseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"]],
                exports: [_DtTableBase],
                declarations: [_DtTableBase]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/table.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T
 */
function SimpleColumnsAccessorMaps() { }
if (false) {}
/** @type {?} */
let nextUniqueId = 0;
/**
 * @template T
 */
class DtTable extends _DtTableBase {
    /**
     * @param {?} differs
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     * @param {?} role
     * @param {?} _ngZone
     * @param {?} document
     * @param {?} platform
     * @param {?} _viewContainerRef
     */
    constructor(differs, changeDetectorRef, elementRef, role, 
    /** @breaking-change: ngZone is no longer necessary in the table injectors, will be removed with 7.0.0 */
    _ngZone, 
    // tslint:disable-next-line: no-any
    document, platform, _viewContainerRef) {
        super(differs, changeDetectorRef, elementRef, document, platform, role);
        this._viewContainerRef = _viewContainerRef;
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        /**
         * Sort accessor map that holds all sort accessor functions from the registered simple columns.
         */
        this._sortAccessorMap = new Map();
        /**
         * Sort accessor map that holds all display accessor functions from the registered simple columns.
         */
        this._displayAccessorMap = new Map();
        /**
         * Sort accessor map that holds all comparator accessor functions from the registered simple columns.
         */
        this._comparatorFunctionMap = new Map();
        /**
         * \@internal A generated UID
         */
        this._uniqueId = `dt-table-${nextUniqueId++}`;
        /**
         * \@internal Stream of all simple dataAccessor functions for all SimpleColumns
         */
        this._dataAccessors = new rxjs__WEBPACK_IMPORTED_MODULE_12__["BehaviorSubject"]({
            displayAccessorMap: this._displayAccessorMap,
            sortAccessorMap: this._sortAccessorMap,
            comparatorMap: this._comparatorFunctionMap,
        });
        /**
         * Subscription of attached stream of the portal outlet
         */
        this._portalOutletSubscription = rxjs__WEBPACK_IMPORTED_MODULE_12__["Subscription"].EMPTY;
        /**
         * CSS class added to any row or cell that has sticky positioning applied.
         */
        this.stickyCssClass = 'dt-table-sticky';
    }
    /**
     * Whether the loading state should be displayed.
     * @return {?}
     */
    get loading() {
        return this._loading;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set loading(value) {
        this._loading = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value);
    }
    /**
     * Whether multiple rows can be expanded at a time.
     * @return {?}
     */
    get multiExpand() {
        return this._multiExpand;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set multiExpand(value) {
        this._multiExpand = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value);
    }
    /**
     * Whether the datasource is empty.
     * @return {?}
     */
    get isEmptyDataSource() {
        return !(this._data && this._data.length);
    }
    /**
     * Updates the dataAccessors subject for the connected datasource.
     * @private
     * @return {?}
     */
    _updateAccessors() {
        this._dataAccessors.next({
            displayAccessorMap: this._displayAccessorMap,
            sortAccessorMap: this._sortAccessorMap,
            comparatorMap: this._comparatorFunctionMap,
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
        this._portalOutletSubscription.unsubscribe();
    }
    /**
     * Renders rows based on the table's latest set of data,
     * which was either provided directly as an input or retrieved
     * through an Observable stream (directly or from a DataSource).
     * @return {?}
     */
    renderRows() {
        super.renderRows();
        // no need if there is no empty state provided via content projection
        if (!this._emptyState.first) {
            return;
        }
        // if we have a subscription we need to unsubscribe to re-subscribe later on
        // we need to subscribe in this function in case that there is no other hook
        // where we can hook into the cdk Table
        if (this._portalOutletSubscription) {
            this._portalOutletSubscription.unsubscribe();
        }
        this._portalOutletSubscription = this._portalOutlet.attached
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["mapTo"])(this._emptyState.first))
            .subscribe((/**
         * @param {?} emptyState
         * @return {?}
         */
        (emptyState) => {
            // Update the layout of the empty state after it was attached
            emptyState._visible = true;
        }));
        if (this.isEmptyDataSource) {
            if (!this._portalOutlet.hasAttached()) {
                /** @type {?} */
                const template = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["TemplatePortal"](this._emptyStateTemplate, this._viewContainerRef);
                this._portalOutlet.attachTemplatePortal(template);
            }
            this._emptyState.first._visible = true;
        }
        else {
            // ned to unset the visibility to have every time the component will be attached a fading animation.
            this._emptyState.first._visible = false;
            this._portalOutlet.detach();
        }
    }
    /**
     * Update the column accessor functions
     * @param {?} name
     * @param {?=} displayAccessor
     * @param {?=} sortAccessor
     * @param {?=} comparatorFunction
     * @return {?}
     */
    _updateColumnAccessors(name, displayAccessor, sortAccessor, comparatorFunction) {
        if (displayAccessor) {
            this._displayAccessorMap.set(name, displayAccessor);
        }
        else {
            this._displayAccessorMap.delete(name);
        }
        if (sortAccessor) {
            this._sortAccessorMap.set(name, sortAccessor);
        }
        else {
            this._sortAccessorMap.delete(name);
        }
        if (comparatorFunction) {
            this._comparatorFunctionMap.set(name, comparatorFunction);
        }
        else {
            this._comparatorFunctionMap.delete(name);
        }
        this._updateAccessors();
    }
    /**
     * \@internal Helper function for simple columns to unregister their sort accessors.
     * @param {?} name
     * @return {?}
     */
    _removeColumnAccessors(name) {
        this._sortAccessorMap.delete(name);
        this._displayAccessorMap.delete(name);
        this._comparatorFunctionMap.delete(name);
        this._updateAccessors();
    }
}
DtTable.ɵfac = function DtTable_Factory(t) { return new (t || DtTable)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinjectAttribute"]('role'), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"])); };
DtTable.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DtTable, selectors: [["dt-table"]], contentQueries: function DtTable_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, _dynatrace_barista_components_empty_state__WEBPACK_IMPORTED_MODULE_6__["DtEmptyState"], false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._emptyState = _t);
    } }, viewQuery: function DtTable_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["CdkPortalOutlet"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._emptyStateTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._portalOutlet = _t.first);
    } }, hostAttrs: [1, "dt-table"], hostVars: 2, hostBindings: function DtTable_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("dt-table-interactive-rows", ctx.interactiveRows);
    } }, inputs: { loading: "loading", multiExpand: "multiExpand" }, exportAs: ["dtTable"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c5, decls: 7, vars: 1, consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["footerRowOutlet", ""], ["emptyStateTemplate", ""], ["cdkPortalOutlet", ""], ["class", "dt-table-float-loading", 4, "ngIf"], [1, "dt-table-float-loading"]], template: function DtTable_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DtTable_ng_template_3_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, DtTable_div_6_Template, 2, 0, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["HeaderRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["DataRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["FooterRowOutlet"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["CdkPortalOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".dt-header-cell{font-family:BerninaSansWeb,OpenSans,sans-serif;font-size:12px;line-height:1.6;color:#6d6d6d;font-weight:600;word-break:normal;padding:2px;overflow:hidden}.dt-table[_nghost-%COMP%]     .dt-header-cell, .dt-table   [_nghost-%COMP%]     .dt-header-cell{overflow:hidden;word-wrap:break-word;position:relative;font-variant:tabular-nums;flex:1;display:flex;align-items:center;justify-content:flex-start;align-items:flex-end;border-bottom:1px solid #e6e6e6;padding:8px 12px}.dt-table[_nghost-%COMP%]     .dt-header-cell.dt-column-sorted, .dt-table   [_nghost-%COMP%]     .dt-header-cell.dt-column-sorted{color:#191919;font-weight:700}.dt-table[_nghost-%COMP%]     .dt-header-cell.dt-table-column-align-right, .dt-table   [_nghost-%COMP%]     .dt-header-cell.dt-table-column-align-right{justify-content:flex-end;text-align:right}.dt-table[_nghost-%COMP%]     .dt-header-cell.dt-table-column-align-center, .dt-table   [_nghost-%COMP%]     .dt-header-cell.dt-table-column-align-center{justify-content:center;text-align:center}.dt-table-interactive-rows[_nghost-%COMP%]:hover, .dt-table-interactive-rows   [_nghost-%COMP%]:hover{color:#191919}  .dt-cell .dt-info-group{align-items:center;padding:4px 0}  .dt-cell .dt-info-group .dt-info-group-content{line-height:22px}  .dt-cell .dt-info-group .dt-info-group-title{font-size:16px;line-height:22px}[_nghost-%COMP%]{display:flex;flex-flow:column nowrap;min-width:100%;position:relative;font-family:BerninaSansWeb,OpenSans,sans-serif;color:#454646;font-weight:400;font-size:14px;line-height:1.6}[_nghost-%COMP%]   .dt-table-float-loading[_ngcontent-%COMP%]{position:absolute;top:0;display:flex;align-items:center;justify-content:center;height:100%;width:100%}[_nghost-%COMP%]     .dt-empty-state{margin:8px auto;width:calc(100% - 16px)}.dt-table-search + [_nghost-%COMP%]{margin-top:8px}"], changeDetection: 0 });
/** @nocollapse */
DtTable.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"], args: ['role',] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }
];
DtTable.propDecorators = {
    loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    multiExpand: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    _emptyState: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [_dynatrace_barista_components_empty_state__WEBPACK_IMPORTED_MODULE_6__["DtEmptyState"],] }],
    _emptyStateTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['emptyStateTemplate', { static: true },] }],
    _portalOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["CdkPortalOutlet"], { static: true },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DtTable, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'dt-table',
                template: "<ng-container headerRowOutlet></ng-container>\n<ng-container rowOutlet></ng-container>\n<ng-container footerRowOutlet></ng-container>\n\n<ng-template #emptyStateTemplate>\n  <ng-content\n    select=\"[dtTableEmptyState], dt-empty-state, [dtCustomEmptyState]\"\n  ></ng-content>\n</ng-template>\n\n<ng-container cdkPortalOutlet></ng-container>\n\n<div *ngIf=\"loading\" class=\"dt-table-float-loading\">\n  <ng-content select=\"[dtTableLoadingState]\"></ng-content>\n</div>\n",
                exportAs: 'dtTable',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].Emulated,
                preserveWhitespaces: false,
                host: {
                    class: 'dt-table',
                    '[class.dt-table-interactive-rows]': 'interactiveRows'
                },
                styles: ["::ng-deep .dt-header-cell{font-family:BerninaSansWeb,OpenSans,sans-serif;font-size:12px;line-height:1.6;color:#6d6d6d;font-weight:600;word-break:normal;padding:2px;overflow:hidden}:host-context(.dt-table) ::ng-deep .dt-header-cell{overflow:hidden;word-wrap:break-word;position:relative;font-variant:tabular-nums;flex:1;display:flex;align-items:center;justify-content:flex-start;align-items:flex-end;border-bottom:1px solid #e6e6e6;padding:8px 12px}:host-context(.dt-table) ::ng-deep .dt-header-cell.dt-column-sorted{color:#191919;font-weight:700}:host-context(.dt-table) ::ng-deep .dt-header-cell.dt-table-column-align-right{justify-content:flex-end;text-align:right}:host-context(.dt-table) ::ng-deep .dt-header-cell.dt-table-column-align-center{justify-content:center;text-align:center}:host-context(.dt-table-interactive-rows):hover{color:#191919}::ng-deep .dt-cell .dt-info-group{align-items:center;padding:4px 0}::ng-deep .dt-cell .dt-info-group .dt-info-group-content{line-height:22px}::ng-deep .dt-cell .dt-info-group .dt-info-group-title{font-size:16px;line-height:22px}:host{display:flex;flex-flow:column nowrap;min-width:100%;position:relative;font-family:BerninaSansWeb,OpenSans,sans-serif;color:#454646;font-weight:400;font-size:14px;line-height:1.6}:host .dt-table-float-loading{position:absolute;top:0;display:flex;align-items:center;justify-content:center;height:100%;width:100%}:host ::ng-deep .dt-empty-state{margin:8px auto;width:calc(100% - 16px)}.dt-table-search+:host{margin-top:8px}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"],
                args: ['role']
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["Platform"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }]; }, { loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], multiExpand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], _emptyState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [_dynatrace_barista_components_empty_state__WEBPACK_IMPORTED_MODULE_6__["DtEmptyState"]]
        }], _emptyStateTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['emptyStateTemplate', { static: true }]
        }], _portalOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["CdkPortalOutlet"], { static: true }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/expandable/expandable-row.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let nextUniqueId$1 = 0;
class DtExpandableRowChangeEvent {
    /**
     * @param {?} row
     */
    constructor(row) {
        this.row = row;
    }
}
if (false) {}
class DtExpandableRowContent {
}
DtExpandableRowContent.ɵfac = function DtExpandableRowContent_Factory(t) { return new (t || DtExpandableRowContent)(); };
DtExpandableRowContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: DtExpandableRowContent, selectors: [["ng-template", "dtExpandableRowContent", ""]], exportAs: ["DtExpandableRowContent"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DtExpandableRowContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'ng-template[dtExpandableRowContent]',
                exportAs: 'DtExpandableRowContent'
            }]
    }], null, null); })();
/**
 * Data row template container that contains the cell outlet and an expandable section.
 * Adds the right class and role.
 */
class DtExpandableRow extends DtRow {
    /**
     * @param {?} _table
     * @param {?} _changeDetectorRef
     * @param {?} _expansionDispatcher
     * @param {?} elementRef
     */
    constructor(_table, _changeDetectorRef, _expansionDispatcher, elementRef) {
        super(elementRef);
        this._table = _table;
        this._changeDetectorRef = _changeDetectorRef;
        this._expansionDispatcher = _expansionDispatcher;
        this._expanded = false;
        this._uniqueId = `dt-expandable-row-${nextUniqueId$1++}`;
        /**
         * Event emitted when the row's expandable state changes.
         */
        this.expandChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * \@internal Event emitted when the row is expanded.
         */
        this._expandedStream = this.expandChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])((/**
         * @param {?} changeEvent
         * @return {?}
         */
        (changeEvent) => changeEvent.row.expanded)));
        /**
         * \@internal Event emitted when the row is collapsed.
         */
        this._collapsedStream = this.expandChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])((/**
         * @param {?} changeEvent
         * @return {?}
         */
        (changeEvent) => !changeEvent.row.expanded)));
        this._templateSubscription = rxjs__WEBPACK_IMPORTED_MODULE_12__["Subscription"].EMPTY;
        this._expansionDispatcher.listen((/**
         * @param {?} rowId
         * @param {?} tableId
         * @return {?}
         */
        (rowId, tableId) => {
            /**
             * If the table does not allow multiple rows to be expanded at a time,
             * the currently expanded row is collapsed.
             */
            if (this._table &&
                !this._table.multiExpand &&
                this._table._uniqueId === tableId &&
                this._uniqueId !== rowId) {
                this._collapse();
            }
        }));
    }
    /**
     * The expanded state of the row.
     * @return {?}
     */
    get expanded() {
        return this._expanded;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set expanded(value) {
        /** @type {?} */
        const coercedValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value);
        if (coercedValue) {
            this._expand();
        }
        else {
            this._collapse();
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._templateSubscription = this._expandableContentTemplates.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(null))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this._expandableContentTemplate =
                this._expandableContentTemplates.first || null;
            this._changeDetectorRef.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
        this._templateSubscription.unsubscribe();
    }
    /**
     * @private
     * @return {?}
     */
    _expand() {
        if (!this._expanded) {
            this._expanded = true;
            this._setExpandableCell(true);
            this.expandChange.emit(new DtExpandableRowChangeEvent(this));
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * \@internal Collapses the row
     * @return {?}
     */
    _collapse() {
        if (this._expanded) {
            this._expanded = false;
            this._setExpandableCell(false);
            this.expandChange.emit(new DtExpandableRowChangeEvent(this));
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * \@internal Expands the row. This is only called as a result of an user action.
     * @return {?}
     */
    _expandViaInteraction() {
        if (!this._expanded) {
            this._expanded = true;
            this._setExpandableCell(true);
            this._expansionDispatcher.notify(this._uniqueId, this._table._uniqueId);
            this.expandChange.emit(new DtExpandableRowChangeEvent(this));
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Sets the style of the expandable cell.
     * @private
     * @param {?} expanded
     * @return {?}
     */
    _setExpandableCell(expanded) {
        // Somehow a hack, a better solution would be appreciated.
        /** @type {?} */
        const cells = ((/** @type {?} */ (this._rowRef
            .nativeElement))).querySelectorAll('dt-expandable-cell');
        [].slice.call(cells).forEach((/**
         * @param {?} cell
         * @return {?}
         */
        (cell) => {
            (expanded ? _dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["_addCssClass"] : _dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["_removeCssClass"])(cell, 'dt-expandable-cell-expanded');
        }));
    }
}
DtExpandableRow.ɵfac = function DtExpandableRow_Factory(t) { return new (t || DtExpandableRow)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](DtTable), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_15__["UniqueSelectionDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
DtExpandableRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DtExpandableRow, selectors: [["dt-expandable-row"]], contentQueries: function DtExpandableRow_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, DtExpandableRowContent, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._expandableContentTemplates = _t);
    } }, viewQuery: function DtExpandableRow_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](_c6, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._rowRef = _t.first);
    } }, hostAttrs: ["role", "row", "class.dt-expandable-row-initial", "_pristine", 1, "dt-expandable-row"], inputs: { expanded: "expanded" }, outputs: { expandChange: "expandChange", _expandedStream: "expanded", _collapsedStream: "collapsed" }, exportAs: ["dtExpandableRow"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0, decls: 9, vars: 6, consts: [[1, "dt-expandable-row-base", 3, "ngClass"], ["dtExpandableRow", ""], ["cdkCellOutlet", ""], [1, "dt-expandable-row-collapsible"], [1, "dt-expandable-row-expandable", 3, "ngClass"], [3, "ngTemplateOutlet", 4, "ngIf"], ["dtExpandableContent", ""], [3, "ngTemplateOutlet"]], template: function DtExpandableRow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, DtExpandableRow_ng_container_5_Template, 1, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.expanded ? "dt-expandable-row-base-expanded" : "dt-expandable-row-base-collapsed");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@detailExpand", ctx.expanded ? "expanded" : "collapsed");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c7, ctx.expanded));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.expanded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], styles: [".dt-expandable-row[_nghost-%COMP%]:nth-child(even){background-color:#fff}.dt-expandable-row[_nghost-%COMP%]:nth-child(odd){background-color:#f8f8f8}.dt-expandable-row-base[_ngcontent-%COMP%]{position:relative;min-height:40px;align-items:stretch;border:2px solid transparent;box-sizing:border-box;display:flex}.dt-expandable-row-base[_ngcontent-%COMP%]::after{display:inline-block;min-height:inherit;content:\"\"}.dt-expandable-row-base-collapsed[_ngcontent-%COMP%]:hover{border:1px solid #898989;padding:1px}.dt-expandable-row-base[_ngcontent-%COMP%] + .dt-expandable-row-collapsible[_ngcontent-%COMP%]{overflow:hidden}.dt-expandable-row-base-expanded[_ngcontent-%COMP%]{border-top:2px solid #454646;border-bottom:hidden;border-left:hidden;border-right:hidden;padding:0 2px;background-color:#e6e6e6}.dt-expandable-row-expandable[_ngcontent-%COMP%]{background-color:#fff;padding:16px 12px 16px 14px}.dt-expandable-row-expandable-expanded[_ngcontent-%COMP%]{border-bottom:2px solid #454646}.dt-expandable-row-initial[_nghost-%COMP%]   .dt-expandable-row-collapsible[_ngcontent-%COMP%]{height:0;min-height:0;visibility:hidden}.dt-table-row-indicator[_nghost-%COMP%]   .dt-expandable-row-base[_ngcontent-%COMP%]::before{width:2px;height:calc(100% - 4px);content:\"\";display:block;position:absolute;left:2px;-ms-grid-row-align:center;align-self:center}.dt-table-row-indicator[_nghost-%COMP%]   .dt-expandable-row-base-collapsed[_ngcontent-%COMP%]:hover::before{height:calc(100% - 6px);left:3px}.dt-table-row-indicator[_nghost-%COMP%]   .dt-expandable-row-base-expanded[_ngcontent-%COMP%]::before{height:calc(100% - 4px);left:4px}[_nghost-%COMP%]   .dt-expandable-row-base-expanded[_ngcontent-%COMP%]{border-top-color:#00b9cc;background-color:#e1f7f9}[_nghost-%COMP%]   .dt-expandable-row-expandable-expanded[_ngcontent-%COMP%]{border-bottom-color:#00b9cc}.dt-table-row-indicator.dt-color-error[_nghost-%COMP%]   .dt-expandable-row-base[_ngcontent-%COMP%]::before{background-color:#c41425}.dt-table-row-indicator.dt-color-warning[_nghost-%COMP%]   .dt-expandable-row-base[_ngcontent-%COMP%]::before{background-color:#e6be00}.dt-theme-light   [_nghost-%COMP%]   .dt-expandable-row-base-expanded[_ngcontent-%COMP%], .dt-theme-turquoise   [_nghost-%COMP%]   .dt-expandable-row-base-expanded[_ngcontent-%COMP%], .dt-theme-turquoise.dt-theme-light   [_nghost-%COMP%]   .dt-expandable-row-base-expanded[_ngcontent-%COMP%]{border-top-color:#00b9cc;background-color:#e1f7f9}.dt-theme-light   [_nghost-%COMP%]   .dt-expandable-row-expandable-expanded[_ngcontent-%COMP%], .dt-theme-turquoise   [_nghost-%COMP%]   .dt-expandable-row-expandable-expanded[_ngcontent-%COMP%], .dt-theme-turquoise.dt-theme-light   [_nghost-%COMP%]   .dt-expandable-row-expandable-expanded[_ngcontent-%COMP%]{border-bottom-color:#00b9cc}.dt-theme-light   .dt-table-row-indicator.dt-color-error[_nghost-%COMP%]   .dt-expandable-row-base[_ngcontent-%COMP%]::before, .dt-theme-turquoise   .dt-table-row-indicator.dt-color-error[_nghost-%COMP%]   .dt-expandable-row-base[_ngcontent-%COMP%]::before, .dt-theme-turquoise.dt-theme-light   .dt-table-row-indicator.dt-color-error[_nghost-%COMP%]   .dt-expandable-row-base[_ngcontent-%COMP%]::before{background-color:#c41425}.dt-theme-light   .dt-table-row-indicator.dt-color-warning[_nghost-%COMP%]   .dt-expandable-row-base[_ngcontent-%COMP%]::before, .dt-theme-turquoise   .dt-table-row-indicator.dt-color-warning[_nghost-%COMP%]   .dt-expandable-row-base[_ngcontent-%COMP%]::before, .dt-theme-turquoise.dt-theme-light   .dt-table-row-indicator.dt-color-warning[_nghost-%COMP%]   .dt-expandable-row-base[_ngcontent-%COMP%]::before{background-color:#e6be00}.dt-theme-dark   [_nghost-%COMP%]   .dt-expandable-row-base-expanded[_ngcontent-%COMP%], .dt-theme-turquoise.dt-theme-dark   [_nghost-%COMP%]   .dt-expandable-row-base-expanded[_ngcontent-%COMP%]{border-top-color:#00b9cc;background-color:#e1f7f9}.dt-theme-dark   [_nghost-%COMP%]   .dt-expandable-row-expandable-expanded[_ngcontent-%COMP%], .dt-theme-turquoise.dt-theme-dark   [_nghost-%COMP%]   .dt-expandable-row-expandable-expanded[_ngcontent-%COMP%]{border-bottom-color:#00b9cc}.dt-theme-dark   .dt-table-row-indicator.dt-color-error[_nghost-%COMP%]   .dt-expandable-row-base[_ngcontent-%COMP%]::before, .dt-theme-turquoise.dt-theme-dark   .dt-table-row-indicator.dt-color-error[_nghost-%COMP%]   .dt-expandable-row-base[_ngcontent-%COMP%]::before{background-color:#e74d59}.dt-theme-dark   .dt-table-row-indicator.dt-color-warning[_nghost-%COMP%]   .dt-expandable-row-base[_ngcontent-%COMP%]::before, .dt-theme-turquoise.dt-theme-dark   .dt-table-row-indicator.dt-color-warning[_nghost-%COMP%]   .dt-expandable-row-base[_ngcontent-%COMP%]::before{background-color:#e6be00}.dt-theme-blue   [_nghost-%COMP%]   .dt-expandable-row-base-expanded[_ngcontent-%COMP%], .dt-theme-blue.dt-theme-light   [_nghost-%COMP%]   .dt-expandable-row-base-expanded[_ngcontent-%COMP%]{border-top-color:#14a8f5;background-color:#e0f4fc}.dt-theme-blue   [_nghost-%COMP%]   .dt-expandable-row-expandable-expanded[_ngcontent-%COMP%], .dt-theme-blue.dt-theme-light   [_nghost-%COMP%]   .dt-expandable-row-expandable-expanded[_ngcontent-%COMP%]{border-bottom-color:#14a8f5}.dt-theme-blue   .dt-table-row-indicator.dt-color-error[_nghost-%COMP%]   .dt-expandable-row-base[_ngcontent-%COMP%]::before, .dt-theme-blue.dt-theme-light   .dt-table-row-indicator.dt-color-error[_nghost-%COMP%]   .dt-expandable-row-base[_ngcontent-%COMP%]::before{background-color:#c41425}.dt-theme-blue   .dt-table-row-indicator.dt-color-warning[_nghost-%COMP%]   .dt-expandable-row-base[_ngcontent-%COMP%]::before, .dt-theme-blue.dt-theme-light   .dt-table-row-indicator.dt-color-warning[_nghost-%COMP%]   .dt-expandable-row-base[_ngcontent-%COMP%]::before{background-color:#e6be00}.dt-theme-blue.dt-theme-dark   [_nghost-%COMP%]   .dt-expandable-row-base-expanded[_ngcontent-%COMP%]{border-top-color:#14a8f5;background-color:#e0f4fc}.dt-theme-blue.dt-theme-dark   [_nghost-%COMP%]   .dt-expandable-row-expandable-expanded[_ngcontent-%COMP%]{border-bottom-color:#14a8f5}.dt-theme-blue.dt-theme-dark   .dt-table-row-indicator.dt-color-error[_nghost-%COMP%]   .dt-expandable-row-base[_ngcontent-%COMP%]::before{background-color:#e74d59}.dt-theme-blue.dt-theme-dark   .dt-table-row-indicator.dt-color-warning[_nghost-%COMP%]   .dt-expandable-row-base[_ngcontent-%COMP%]::before{background-color:#e6be00}.dt-theme-purple   [_nghost-%COMP%]   .dt-expandable-row-base-expanded[_ngcontent-%COMP%], .dt-theme-purple.dt-theme-light   [_nghost-%COMP%]   .dt-expandable-row-base-expanded[_ngcontent-%COMP%]{border-top-color:#9355b7;background-color:#eedbfd}.dt-theme-purple   [_nghost-%COMP%]   .dt-expandable-row-expandable-expanded[_ngcontent-%COMP%], .dt-theme-purple.dt-theme-light   [_nghost-%COMP%]   .dt-expandable-row-expandable-expanded[_ngcontent-%COMP%]{border-bottom-color:#9355b7}.dt-theme-purple   .dt-table-row-indicator.dt-color-error[_nghost-%COMP%]   .dt-expandable-row-base[_ngcontent-%COMP%]::before, .dt-theme-purple.dt-theme-light   .dt-table-row-indicator.dt-color-error[_nghost-%COMP%]   .dt-expandable-row-base[_ngcontent-%COMP%]::before{background-color:#c41425}.dt-theme-purple   .dt-table-row-indicator.dt-color-warning[_nghost-%COMP%]   .dt-expandable-row-base[_ngcontent-%COMP%]::before, .dt-theme-purple.dt-theme-light   .dt-table-row-indicator.dt-color-warning[_nghost-%COMP%]   .dt-expandable-row-base[_ngcontent-%COMP%]::before{background-color:#e6be00}.dt-theme-purple.dt-theme-dark   [_nghost-%COMP%]   .dt-expandable-row-base-expanded[_ngcontent-%COMP%]{border-top-color:#9355b7;background-color:#eedbfd}.dt-theme-purple.dt-theme-dark   [_nghost-%COMP%]   .dt-expandable-row-expandable-expanded[_ngcontent-%COMP%]{border-bottom-color:#9355b7}.dt-theme-purple.dt-theme-dark   .dt-table-row-indicator.dt-color-error[_nghost-%COMP%]   .dt-expandable-row-base[_ngcontent-%COMP%]::before{background-color:#e74d59}.dt-theme-purple.dt-theme-dark   .dt-table-row-indicator.dt-color-warning[_nghost-%COMP%]   .dt-expandable-row-base[_ngcontent-%COMP%]::before{background-color:#e6be00}.dt-theme-royalblue   [_nghost-%COMP%]   .dt-expandable-row-base-expanded[_ngcontent-%COMP%], .dt-theme-royalblue.dt-theme-light   [_nghost-%COMP%]   .dt-expandable-row-base-expanded[_ngcontent-%COMP%]{border-top-color:#526cff;background-color:#e6eaff}.dt-theme-royalblue   [_nghost-%COMP%]   .dt-expandable-row-expandable-expanded[_ngcontent-%COMP%], .dt-theme-royalblue.dt-theme-light   [_nghost-%COMP%]   .dt-expandable-row-expandable-expanded[_ngcontent-%COMP%]{border-bottom-color:#526cff}.dt-theme-royalblue   .dt-table-row-indicator.dt-color-error[_nghost-%COMP%]   .dt-expandable-row-base[_ngcontent-%COMP%]::before, .dt-theme-royalblue.dt-theme-light   .dt-table-row-indicator.dt-color-error[_nghost-%COMP%]   .dt-expandable-row-base[_ngcontent-%COMP%]::before{background-color:#c41425}.dt-theme-royalblue   .dt-table-row-indicator.dt-color-warning[_nghost-%COMP%]   .dt-expandable-row-base[_ngcontent-%COMP%]::before, .dt-theme-royalblue.dt-theme-light   .dt-table-row-indicator.dt-color-warning[_nghost-%COMP%]   .dt-expandable-row-base[_ngcontent-%COMP%]::before{background-color:#e6be00}.dt-theme-royalblue.dt-theme-dark   [_nghost-%COMP%]   .dt-expandable-row-base-expanded[_ngcontent-%COMP%]{border-top-color:#526cff;background-color:#e6eaff}.dt-theme-royalblue.dt-theme-dark   [_nghost-%COMP%]   .dt-expandable-row-expandable-expanded[_ngcontent-%COMP%]{border-bottom-color:#526cff}.dt-theme-royalblue.dt-theme-dark   .dt-table-row-indicator.dt-color-error[_nghost-%COMP%]   .dt-expandable-row-base[_ngcontent-%COMP%]::before{background-color:#e74d59}.dt-theme-royalblue.dt-theme-dark   .dt-table-row-indicator.dt-color-warning[_nghost-%COMP%]   .dt-expandable-row-base[_ngcontent-%COMP%]::before{background-color:#e6be00}"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({ height: '0px', minHeight: '0', visibility: 'hidden' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({ height: 'auto', visibility: 'visible' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('collapsed => expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["keyframes"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({ height: 'auto', visibility: 'hidden', offset: 0.95 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({ height: 'auto', visibility: 'visible', offset: 1 }),
                ]))),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('expanded => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["keyframes"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({ height: 'auto', visibility: 'hidden', offset: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
                        height: '0px',
                        minHeight: '0',
                        visibility: 'hidden',
                        offset: 1
                    }),
                ]))),
            ]),
        ] }, changeDetection: 0 });
/** @nocollapse */
DtExpandableRow.ctorParameters = () => [
    { type: DtTable },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_15__["UniqueSelectionDispatcher"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
DtExpandableRow.propDecorators = {
    expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    expandChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    _expandedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['expanded',] }],
    _collapsedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['collapsed',] }],
    _rowRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['dtExpandableRow', { static: true },] }],
    _expandableContentTemplates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [DtExpandableRowContent, { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DtExpandableRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('detailExpand', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({ height: '0px', minHeight: '0', visibility: 'hidden' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({ height: 'auto', visibility: 'visible' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('collapsed => expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({ height: 'auto', visibility: 'hidden', offset: 0.95 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({ height: 'auto', visibility: 'visible', offset: 1 }),
                        ]))),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('expanded => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({ height: 'auto', visibility: 'hidden', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
                                height: '0px',
                                minHeight: '0',
                                visibility: 'hidden',
                                offset: 1
                            }),
                        ]))),
                    ]),
                ],
                selector: 'dt-expandable-row',
                template: "<div\n  class=\"dt-expandable-row-base\"\n  [ngClass]=\"\n    expanded\n      ? 'dt-expandable-row-base-expanded'\n      : 'dt-expandable-row-base-collapsed'\n  \"\n  #dtExpandableRow\n>\n  <ng-container cdkCellOutlet></ng-container>\n</div>\n<div\n  [@detailExpand]=\"expanded ? 'expanded' : 'collapsed'\"\n  class=\"dt-expandable-row-collapsible\"\n>\n  <div\n    class=\"dt-expandable-row-expandable\"\n    [ngClass]=\"{ 'dt-expandable-row-expandable-expanded': expanded }\"\n  >\n    <ng-container\n      *ngIf=\"expanded\"\n      [ngTemplateOutlet]=\"_expandableContentTemplate\"\n    ></ng-container>\n    <div #dtExpandableContent>\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n",
                host: {
                    role: 'row',
                    class: 'dt-expandable-row',
                    'class.dt-expandable-row-initial': '_pristine'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].Emulated,
                exportAs: 'dtExpandableRow',
                styles: [":host.dt-expandable-row:nth-child(even){background-color:#fff}:host.dt-expandable-row:nth-child(odd){background-color:#f8f8f8}.dt-expandable-row-base{position:relative;min-height:40px;align-items:stretch;border:2px solid transparent;box-sizing:border-box;display:flex}.dt-expandable-row-base::after{display:inline-block;min-height:inherit;content:\"\"}.dt-expandable-row-base-collapsed:hover{border:1px solid #898989;padding:1px}.dt-expandable-row-base+.dt-expandable-row-collapsible{overflow:hidden}.dt-expandable-row-base-expanded{border-top:2px solid #454646;border-bottom:hidden;border-left:hidden;border-right:hidden;padding:0 2px;background-color:#e6e6e6}.dt-expandable-row-expandable{background-color:#fff;padding:16px 12px 16px 14px}.dt-expandable-row-expandable-expanded{border-bottom:2px solid #454646}:host.dt-expandable-row-initial .dt-expandable-row-collapsible{height:0;min-height:0;visibility:hidden}:host.dt-table-row-indicator .dt-expandable-row-base::before{width:2px;height:calc(100% - 4px);content:\"\";display:block;position:absolute;left:2px;-ms-grid-row-align:center;align-self:center}:host.dt-table-row-indicator .dt-expandable-row-base-collapsed:hover::before{height:calc(100% - 6px);left:3px}:host.dt-table-row-indicator .dt-expandable-row-base-expanded::before{height:calc(100% - 4px);left:4px}:host .dt-expandable-row-base-expanded{border-top-color:#00b9cc;background-color:#e1f7f9}:host .dt-expandable-row-expandable-expanded{border-bottom-color:#00b9cc}:host.dt-table-row-indicator.dt-color-error .dt-expandable-row-base::before{background-color:#c41425}:host.dt-table-row-indicator.dt-color-warning .dt-expandable-row-base::before{background-color:#e6be00}.dt-theme-light :host .dt-expandable-row-base-expanded,.dt-theme-turquoise :host .dt-expandable-row-base-expanded,.dt-theme-turquoise.dt-theme-light :host .dt-expandable-row-base-expanded{border-top-color:#00b9cc;background-color:#e1f7f9}.dt-theme-light :host .dt-expandable-row-expandable-expanded,.dt-theme-turquoise :host .dt-expandable-row-expandable-expanded,.dt-theme-turquoise.dt-theme-light :host .dt-expandable-row-expandable-expanded{border-bottom-color:#00b9cc}.dt-theme-light :host.dt-table-row-indicator.dt-color-error .dt-expandable-row-base::before,.dt-theme-turquoise :host.dt-table-row-indicator.dt-color-error .dt-expandable-row-base::before,.dt-theme-turquoise.dt-theme-light :host.dt-table-row-indicator.dt-color-error .dt-expandable-row-base::before{background-color:#c41425}.dt-theme-light :host.dt-table-row-indicator.dt-color-warning .dt-expandable-row-base::before,.dt-theme-turquoise :host.dt-table-row-indicator.dt-color-warning .dt-expandable-row-base::before,.dt-theme-turquoise.dt-theme-light :host.dt-table-row-indicator.dt-color-warning .dt-expandable-row-base::before{background-color:#e6be00}.dt-theme-dark :host .dt-expandable-row-base-expanded,.dt-theme-turquoise.dt-theme-dark :host .dt-expandable-row-base-expanded{border-top-color:#00b9cc;background-color:#e1f7f9}.dt-theme-dark :host .dt-expandable-row-expandable-expanded,.dt-theme-turquoise.dt-theme-dark :host .dt-expandable-row-expandable-expanded{border-bottom-color:#00b9cc}.dt-theme-dark :host.dt-table-row-indicator.dt-color-error .dt-expandable-row-base::before,.dt-theme-turquoise.dt-theme-dark :host.dt-table-row-indicator.dt-color-error .dt-expandable-row-base::before{background-color:#e74d59}.dt-theme-dark :host.dt-table-row-indicator.dt-color-warning .dt-expandable-row-base::before,.dt-theme-turquoise.dt-theme-dark :host.dt-table-row-indicator.dt-color-warning .dt-expandable-row-base::before{background-color:#e6be00}.dt-theme-blue :host .dt-expandable-row-base-expanded,.dt-theme-blue.dt-theme-light :host .dt-expandable-row-base-expanded{border-top-color:#14a8f5;background-color:#e0f4fc}.dt-theme-blue :host .dt-expandable-row-expandable-expanded,.dt-theme-blue.dt-theme-light :host .dt-expandable-row-expandable-expanded{border-bottom-color:#14a8f5}.dt-theme-blue :host.dt-table-row-indicator.dt-color-error .dt-expandable-row-base::before,.dt-theme-blue.dt-theme-light :host.dt-table-row-indicator.dt-color-error .dt-expandable-row-base::before{background-color:#c41425}.dt-theme-blue :host.dt-table-row-indicator.dt-color-warning .dt-expandable-row-base::before,.dt-theme-blue.dt-theme-light :host.dt-table-row-indicator.dt-color-warning .dt-expandable-row-base::before{background-color:#e6be00}.dt-theme-blue.dt-theme-dark :host .dt-expandable-row-base-expanded{border-top-color:#14a8f5;background-color:#e0f4fc}.dt-theme-blue.dt-theme-dark :host .dt-expandable-row-expandable-expanded{border-bottom-color:#14a8f5}.dt-theme-blue.dt-theme-dark :host.dt-table-row-indicator.dt-color-error .dt-expandable-row-base::before{background-color:#e74d59}.dt-theme-blue.dt-theme-dark :host.dt-table-row-indicator.dt-color-warning .dt-expandable-row-base::before{background-color:#e6be00}.dt-theme-purple :host .dt-expandable-row-base-expanded,.dt-theme-purple.dt-theme-light :host .dt-expandable-row-base-expanded{border-top-color:#9355b7;background-color:#eedbfd}.dt-theme-purple :host .dt-expandable-row-expandable-expanded,.dt-theme-purple.dt-theme-light :host .dt-expandable-row-expandable-expanded{border-bottom-color:#9355b7}.dt-theme-purple :host.dt-table-row-indicator.dt-color-error .dt-expandable-row-base::before,.dt-theme-purple.dt-theme-light :host.dt-table-row-indicator.dt-color-error .dt-expandable-row-base::before{background-color:#c41425}.dt-theme-purple :host.dt-table-row-indicator.dt-color-warning .dt-expandable-row-base::before,.dt-theme-purple.dt-theme-light :host.dt-table-row-indicator.dt-color-warning .dt-expandable-row-base::before{background-color:#e6be00}.dt-theme-purple.dt-theme-dark :host .dt-expandable-row-base-expanded{border-top-color:#9355b7;background-color:#eedbfd}.dt-theme-purple.dt-theme-dark :host .dt-expandable-row-expandable-expanded{border-bottom-color:#9355b7}.dt-theme-purple.dt-theme-dark :host.dt-table-row-indicator.dt-color-error .dt-expandable-row-base::before{background-color:#e74d59}.dt-theme-purple.dt-theme-dark :host.dt-table-row-indicator.dt-color-warning .dt-expandable-row-base::before{background-color:#e6be00}.dt-theme-royalblue :host .dt-expandable-row-base-expanded,.dt-theme-royalblue.dt-theme-light :host .dt-expandable-row-base-expanded{border-top-color:#526cff;background-color:#e6eaff}.dt-theme-royalblue :host .dt-expandable-row-expandable-expanded,.dt-theme-royalblue.dt-theme-light :host .dt-expandable-row-expandable-expanded{border-bottom-color:#526cff}.dt-theme-royalblue :host.dt-table-row-indicator.dt-color-error .dt-expandable-row-base::before,.dt-theme-royalblue.dt-theme-light :host.dt-table-row-indicator.dt-color-error .dt-expandable-row-base::before{background-color:#c41425}.dt-theme-royalblue :host.dt-table-row-indicator.dt-color-warning .dt-expandable-row-base::before,.dt-theme-royalblue.dt-theme-light :host.dt-table-row-indicator.dt-color-warning .dt-expandable-row-base::before{background-color:#e6be00}.dt-theme-royalblue.dt-theme-dark :host .dt-expandable-row-base-expanded{border-top-color:#526cff;background-color:#e6eaff}.dt-theme-royalblue.dt-theme-dark :host .dt-expandable-row-expandable-expanded{border-bottom-color:#526cff}.dt-theme-royalblue.dt-theme-dark :host.dt-table-row-indicator.dt-color-error .dt-expandable-row-base::before{background-color:#e74d59}.dt-theme-royalblue.dt-theme-dark :host.dt-table-row-indicator.dt-color-warning .dt-expandable-row-base::before{background-color:#e6be00}"]
            }]
    }], function () { return [{ type: DtTable }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_15__["UniqueSelectionDispatcher"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, { expandChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], _expandedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"],
            args: ['expanded']
        }], _collapsedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"],
            args: ['collapsed']
        }], expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], _rowRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['dtExpandableRow', { static: true }]
        }], _expandableContentTemplates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [DtExpandableRowContent, { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/expandable/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: src/header/header-cell.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Header cell definition for the dt-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
class DtHeaderCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"] {
}
DtHeaderCellDef.ɵfac = function DtHeaderCellDef_Factory(t) { return ɵDtHeaderCellDef_BaseFactory(t || DtHeaderCellDef); };
DtHeaderCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: DtHeaderCellDef, selectors: [["", "dtHeaderCellDef", ""]], exportAs: ["dtHeaderCellDef"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"], useExisting: DtHeaderCellDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
const ɵDtHeaderCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](DtHeaderCellDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DtHeaderCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[dtHeaderCellDef]',
                exportAs: 'dtHeaderCellDef',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"], useExisting: DtHeaderCellDef }]
            }]
    }], null, null); })();
/**
 * Header cell template container that adds the right classes and role.
 */
class DtHeaderCell {
    /**
     * @param {?} columnDef
     * @param {?} elem
     */
    constructor(columnDef, elem) {
        /**
         * Destroy subject which will fire when the component gets destroyed.
         */
        this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        columnDef._stateChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy))
            .subscribe((/**
         * @return {?}
         */
        () => {
            _updateDtColumnStyles(columnDef, elem);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy.next();
        this._destroy.complete();
    }
}
DtHeaderCell.ɵfac = function DtHeaderCell_Factory(t) { return new (t || DtHeaderCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](DtColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
DtHeaderCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: DtHeaderCell, selectors: [["dt-header-cell"]], hostAttrs: ["role", "columnheader", 1, "dt-header-cell"], exportAs: ["dtHeaderCell"] });
/** @nocollapse */
DtHeaderCell.ctorParameters = () => [
    { type: DtColumnDef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DtHeaderCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'dt-header-cell',
                exportAs: 'dtHeaderCell',
                host: {
                    class: 'dt-header-cell',
                    role: 'columnheader'
                }
            }]
    }], function () { return [{ type: DtColumnDef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/header/header-row.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Header row definition for the dt-table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
class DtHeaderRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"] {
}
DtHeaderRowDef.ɵfac = function DtHeaderRowDef_Factory(t) { return ɵDtHeaderRowDef_BaseFactory(t || DtHeaderRowDef); };
DtHeaderRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: DtHeaderRowDef, selectors: [["", "dtHeaderRowDef", ""]], inputs: { columns: ["dtHeaderRowDef", "columns"], sticky: ["dtHeaderRowDefSticky", "sticky"] }, exportAs: ["dtHeaderRowDef"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"], useExisting: DtHeaderRowDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
const ɵDtHeaderRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](DtHeaderRowDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DtHeaderRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[dtHeaderRowDef]',
                exportAs: 'dtHeaderRowDef',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"], useExisting: DtHeaderRowDef }],
                inputs: ['columns: dtHeaderRowDef', 'sticky: dtHeaderRowDefSticky']
            }]
    }], null, null); })();
/**
 * Header template container that contains the cell outlet. Adds the right class and role.
 */
class DtHeaderRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"] {
}
DtHeaderRow.ɵfac = function DtHeaderRow_Factory(t) { return ɵDtHeaderRow_BaseFactory(t || DtHeaderRow); };
DtHeaderRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DtHeaderRow, selectors: [["dt-header-row"]], hostAttrs: ["role", "rowheader", 1, "dt-header-row"], exportAs: ["dtHeaderRow"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function DtHeaderRow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
    } }, directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]], styles: [".dt-table.dt-header-row[_nghost-%COMP%], .dt-table   .dt-header-row[_nghost-%COMP%]{align-items:stretch;border:0;box-sizing:border-box;display:flex}.dt-table.dt-header-row[_nghost-%COMP%]::after, .dt-table   .dt-header-row[_nghost-%COMP%]::after{display:inline-block;min-height:inherit;content:\"\"}.dt-tree-table.dt-header-row[_nghost-%COMP%], .dt-tree-table   .dt-header-row[_nghost-%COMP%]{display:table-row}.dt-header-row.dt-table-sticky[_nghost-%COMP%]{background-color:#fff}"], changeDetection: 0 });
const ɵDtHeaderRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](DtHeaderRow);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DtHeaderRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'dt-header-row',
                template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
                host: {
                    class: 'dt-header-row',
                    role: 'rowheader'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].Emulated,
                exportAs: 'dtHeaderRow',
                styles: [":host-context(.dt-table).dt-header-row{align-items:stretch;border:0;box-sizing:border-box;display:flex}:host-context(.dt-table).dt-header-row::after{display:inline-block;min-height:inherit;content:\"\"}:host-context(.dt-tree-table).dt-header-row{display:table-row}:host.dt-header-row.dt-table-sticky{background-color:#fff}"]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/header/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: src/search/table-search.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An event emitted by the `DtTableSearch` component when the input has changed.
 * @record
 */
function DtTableSearchChangeEvent() { }
if (false) {}
/**
 * Provider Expression that allows dt-checkbox to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @type {?}
 */
const DT_TABLE_SEARCH_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NG_VALUE_ACCESSOR"],
    // tslint:disable-next-line: no-use-before-declare no-forward-ref
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])((/**
     * @return {?}
     */
    () => DtTableSearch)),
    multi: true,
};
/**
 * A search field that can be used above tables for filtering.
 *
 * Searching data for the table means filtering out rows that are passed via
 * the data source. For highlighting the matched strings in the table the
 * `DtHighlight` component can be used.
 */
class DtTableSearch {
    constructor() {
        this._value = '';
        /**
         * Event emitted when the user changes the search term.
         */
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    /**
     * The current search term.
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
        /** @type {?} */
        const actualValue = value || '';
        /** @type {?} */
        const change = this._value !== actualValue;
        this._value = actualValue;
        if (change && this._handleChange !== undefined) {
            this._handleChange(actualValue);
        }
    }
    /**
     * \@internal Executes _onTouched handler when input loses focus
     * @return {?}
     */
    _handleBlur() {
        if (this._handleTouched !== undefined) {
            this._handleTouched();
        }
    }
    /**
     * \@internal Emits a change event
     * @param {?} event
     * @return {?}
     */
    _handleInputChange(event) {
        /** @type {?} */
        const value = ((/** @type {?} */ (event.target))).value;
        this.value = value;
        this.valueChange.emit({ source: this, value });
    }
    /**
     * Implemented as a part of ControlValueAccessor.
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
    }
    /**
     * Implemented as a part of ControlValueAccessor.
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._handleChange = fn;
    }
    /**
     * Implemented as a part of ControlValueAccessor.
     * @param {?=} fn
     * @return {?}
     */
    registerOnTouched(fn = (/**
     * @return {?}
     */
    () => { })) {
        this._handleTouched = fn;
    }
}
DtTableSearch.ɵfac = function DtTableSearch_Factory(t) { return new (t || DtTableSearch)(); };
DtTableSearch.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DtTableSearch, selectors: [["dt-table-search"]], hostAttrs: [1, "dt-table-search"], inputs: { value: "value", placeholder: "placeholder", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledBy: ["aria-labelledby", "ariaLabelledBy"] }, outputs: { valueChange: "valueChange" }, exportAs: ["dtTableSearch"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([DT_TABLE_SEARCH_CONTROL_VALUE_ACCESSOR])], decls: 4, vars: 4, consts: [["dtInput", "", "type", "text", 3, "value", "placeholder", "blur", "input"], ["dtPrefix", "", "color", "dark", "name", "search-magnifyingglass"]], template: function DtTableSearch_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "dt-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function DtTableSearch_Template_input_blur_1_listener() { return ctx._handleBlur(); })("input", function DtTableSearch_Template_input_input_1_listener($event) { return ctx._handleInputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "dt-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.value)("placeholder", ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy);
    } }, directives: [_dynatrace_barista_components_form_field__WEBPACK_IMPORTED_MODULE_7__["DtFormField"], _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_10__["DtInput"], _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_9__["DtIcon"], _dynatrace_barista_components_form_field__WEBPACK_IMPORTED_MODULE_7__["DtPrefix"]], styles: ["[_nghost-%COMP%]{display:block}"], changeDetection: 0 });
DtTableSearch.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['aria-label',] }],
    ariaLabelledBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['aria-labelledby',] }],
    valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DtTableSearch, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'dt-table-search',
                exportAs: 'dtTableSearch',
                template: "<dt-form-field>\n  <input\n    dtInput\n    type=\"text\"\n    (blur)=\"_handleBlur()\"\n    (input)=\"_handleInputChange($event)\"\n    [value]=\"value\"\n    [placeholder]=\"placeholder\"\n    [attr.aria-label]=\"ariaLabel\"\n    [attr.aria-labelledby]=\"ariaLabelledBy\"\n  />\n  <dt-icon dtPrefix color=\"dark\" name=\"search-magnifyingglass\">$</dt-icon>\n</dt-form-field>\n",
                host: {
                    class: 'dt-table-search'
                },
                providers: [DT_TABLE_SEARCH_CONTROL_VALUE_ACCESSOR],
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].Emulated,
                styles: [":host{display:block}"]
            }]
    }], function () { return []; }, { valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['aria-label']
        }], ariaLabelledBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['aria-labelledby']
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/search/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: src/simple-columns/simple-column-base.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class DtSimpleColumnBase {
    /**
     * @param {?} table
     */
    constructor(table) {
        this.table = table;
        this._sortable = true;
    }
    /**
     * Input for the name with which the columnDefinition will register itself to the table.
     * @return {?}
     */
    get name() {
        return this._name;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    set name(name) {
        this._name = name;
        if (this._columnDef) {
            this._columnDef.name = name;
        }
    }
    /**
     * Whether the column is sortable
     * @return {?}
     */
    get sortable() {
        return this._sortable;
    }
    /**
     * @param {?} sortable
     * @return {?}
     */
    set sortable(sortable) {
        this._sortable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(sortable);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._syncColumnDefName();
        if (this.table) {
            this._columnDef.cell = this._cellDef;
            this._columnDef.headerCell = this._headerDef;
            this.table.addColumnDef(this._columnDef);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.table &&
            (changes.displayAccessor || changes.sortAccessor || changes.comparator)) {
            this.table._updateColumnAccessors(this.name, this.displayAccessor, this.sortAccessor, this.comparator);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.table) {
            this.table.removeColumnDef(this._columnDef);
            this.table._removeColumnAccessors(this.name);
        }
    }
    /**
     * \@internal Get data function either returns a data access with the given name or calls the
     * dataAccessor function to get the simpleData for display.
     * @param {?} data
     * @return {?}
     */
    // tslint:disable-next-line: no-any
    _getData(data) {
        /** @type {?} */
        const output = this.displayAccessor
            ? this.displayAccessor(data, this.name)
            : ((/** @type {?} */ (data)))[this.name];
        return this.formatter ? this.formatter(output) : output;
    }
    /**
     * \@internal Get the indicator status based on the passed row data.
     * @param {?} data
     * @return {?}
     */
    _getIndicator(data) {
        return this.hasProblem ? this.hasProblem(data, this.name) : undefined;
    }
    /**
     * Synchronizes the column definition name with the text column name.
     * @private
     * @return {?}
     */
    _syncColumnDefName() {
        if (this._columnDef) {
            this._columnDef.name = this._name;
        }
    }
}
DtSimpleColumnBase.ɵfac = function DtSimpleColumnBase_Factory(t) { return new (t || DtSimpleColumnBase)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](DtTable, 8)); };
DtSimpleColumnBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: DtSimpleColumnBase, viewQuery: function DtSimpleColumnBase_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](DtColumnDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](DtHeaderCellDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](DtCellDef, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._columnDef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._headerDef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._cellDef = _t.first);
    } }, inputs: { name: "name", sortable: "sortable", proportion: ["dtColumnProportion", "proportion"], label: "label", displayAccessor: "displayAccessor", sortAccessor: "sortAccessor", formatter: "formatter", hasProblem: "hasProblem", comparator: "comparator" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
DtSimpleColumnBase.ctorParameters = () => [
    { type: DtTable, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
DtSimpleColumnBase.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    proportion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['dtColumnProportion',] }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    displayAccessor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    sortAccessor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    formatter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    hasProblem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    comparator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    sortable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    _columnDef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [DtColumnDef, { static: true },] }],
    _headerDef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [DtHeaderCellDef, { static: true },] }],
    _cellDef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [DtCellDef, { static: true },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DtSimpleColumnBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{}]
    }], function () { return [{ type: DtTable, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], sortable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], proportion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['dtColumnProportion']
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], displayAccessor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], sortAccessor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], formatter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], hasProblem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], comparator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], _columnDef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [DtColumnDef, { static: true }]
        }], _headerDef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [DtHeaderCellDef, { static: true }]
        }], _cellDef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [DtCellDef, { static: true }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/simple-columns/simple-text-column.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class DtSimpleTextColumn extends DtSimpleColumnBase {
    // tslint:disable-next-line: no-any
    /**
     * @param {?} table
     */
    constructor(table) {
        super(table);
    }
}
DtSimpleTextColumn.ɵfac = function DtSimpleTextColumn_Factory(t) { return new (t || DtSimpleTextColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](DtTable, 8)); };
DtSimpleTextColumn.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DtSimpleTextColumn, selectors: [["dt-simple-text-column"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{ provide: DtSimpleColumnBase, useExisting: DtSimpleTextColumn }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [["dtColumnAlign", "text", 3, "dtColumnDef", "dtColumnProportion"], [4, "dtHeaderCellDef"], [3, "dtIndicator", "dtIndicatorColor", 4, "dtCellDef"], [3, "dt-sort-header"], [3, "dtIndicator", "dtIndicatorColor"], [1, "dt-simple-text-cell-data"]], template: function DtSimpleTextColumn_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DtSimpleTextColumn_ng_container_1_Template, 3, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DtSimpleTextColumn_dt_cell_2_Template, 3, 4, "dt-cell", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dtColumnDef", ctx.name)("dtColumnProportion", ctx.proportion);
    } }, directives: function () { return [DtColumnDef,
        DtHeaderCellDef,
        DtCellDef,
        DtHeaderCell,
        DtSortHeader,
        DtCell, _dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["DtIndicator"]]; }, styles: [".dt-simple-number-cell-data[_ngcontent-%COMP%], .dt-simple-text-cell-data[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}"] });
/** @nocollapse */
DtSimpleTextColumn.ctorParameters = () => [
    { type: DtTable, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DtSimpleTextColumn, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'dt-simple-text-column',
                template: "<ng-container\n  [dtColumnDef]=\"name\"\n  dtColumnAlign=\"text\"\n  [dtColumnProportion]=\"proportion\"\n>\n  <ng-container *dtHeaderCellDef>\n    <dt-header-cell [dt-sort-header]=\"sortable\">{{\n      label || name\n    }}</dt-header-cell>\n  </ng-container>\n  <dt-cell\n    *dtCellDef=\"let data\"\n    [dtIndicator]=\"_getIndicator(data)\"\n    [dtIndicatorColor]=\"_getIndicator(data)\"\n    [attr.title]=\"_getData(data)\"\n  >\n    <div class=\"dt-simple-text-cell-data\">{{ _getData(data) }}</div>\n  </dt-cell>\n</ng-container>\n",
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].Emulated,
                /*
                   * Deliberatley set to Default because the embedded view that gets created for the
                   * dtColumDef can't handle onPush and results in ChangeAfterChecked error.
                   */
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
                providers: [{ provide: DtSimpleColumnBase, useExisting: DtSimpleTextColumn }],
                styles: [".dt-simple-number-cell-data,.dt-simple-text-cell-data{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}"]
            }]
    }], function () { return [{ type: DtTable, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/simple-columns/simple-number-column.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class DtSimpleNumberColumn extends DtSimpleColumnBase {
    // tslint:disable-next-line: no-any
    /**
     * @param {?} table
     */
    constructor(table) {
        super(table);
    }
    /**
     * \@internal Get data either returns a data access with the given name or calls the
     * displayAccessor function to get the simpleData for display.
     * @param {?} data
     * @return {?}
     */
    // tslint:disable-next-line: no-any
    _getData(data) {
        /** @type {?} */
        const output = this.displayAccessor
            ? this.displayAccessor(data, this.name)
            : ((/** @type {?} */ (data)))[this.name];
        if (Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["isNumber"])(output) && !Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["isDefined"])(this.formatter)) {
            return Object(_dynatrace_barista_components_formatters__WEBPACK_IMPORTED_MODULE_8__["formatCount"])(output);
        }
        return this.formatter ? this.formatter(output) : output;
    }
}
DtSimpleNumberColumn.ɵfac = function DtSimpleNumberColumn_Factory(t) { return new (t || DtSimpleNumberColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](DtTable, 8)); };
DtSimpleNumberColumn.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DtSimpleNumberColumn, selectors: [["dt-simple-number-column"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            { provide: DtSimpleColumnBase, useExisting: DtSimpleNumberColumn },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [["dtColumnAlign", "number", 3, "dtColumnDef", "dtColumnProportion"], [4, "dtHeaderCellDef"], [3, "dtIndicator", "dtIndicatorColor", 4, "dtCellDef"], ["start", "desc", 3, "dt-sort-header"], [3, "dtIndicator", "dtIndicatorColor"], [1, "dt-simple-number-cell-data"]], template: function DtSimpleNumberColumn_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DtSimpleNumberColumn_ng_container_1_Template, 3, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DtSimpleNumberColumn_dt_cell_2_Template, 3, 4, "dt-cell", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dtColumnDef", ctx.name)("dtColumnProportion", ctx.proportion);
    } }, directives: function () { return [DtColumnDef,
        DtHeaderCellDef,
        DtCellDef,
        DtHeaderCell,
        DtSortHeader,
        DtCell, _dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["DtIndicator"]]; }, styles: [".dt-simple-number-cell-data[_ngcontent-%COMP%], .dt-simple-text-cell-data[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}"] });
/** @nocollapse */
DtSimpleNumberColumn.ctorParameters = () => [
    { type: DtTable, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DtSimpleNumberColumn, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'dt-simple-number-column',
                template: "<ng-container\n  [dtColumnDef]=\"name\"\n  dtColumnAlign=\"number\"\n  [dtColumnProportion]=\"proportion\"\n>\n  <ng-container *dtHeaderCellDef>\n    <dt-header-cell [dt-sort-header]=\"sortable\" start=\"desc\">{{\n      label || name\n    }}</dt-header-cell>\n  </ng-container>\n  <dt-cell\n    *dtCellDef=\"let data\"\n    [dtIndicator]=\"_getIndicator(data)\"\n    [dtIndicatorColor]=\"_getIndicator(data)\"\n    [attr.title]=\"_getData(data)\"\n  >\n    <div class=\"dt-simple-number-cell-data\">{{ _getData(data) }}</div>\n  </dt-cell>\n</ng-container>\n",
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].Emulated,
                /*
                   * Deliberatley set to Default because the embedded view that gets created for the
                   * dtColumDef can't handle onPush and results in ChangeAfterChecked error.
                   */
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
                providers: [
                    { provide: DtSimpleColumnBase, useExisting: DtSimpleNumberColumn },
                ],
                styles: [".dt-simple-number-cell-data,.dt-simple-text-cell-data{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}"]
            }]
    }], function () { return [{ type: DtTable, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/simple-columns/favorite-column.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class DtFavoriteColumn extends DtSimpleColumnBase {
    /**
     * @param {?} table
     */
    constructor(table) {
        super(table);
        /**
         * Event that is emitted whenever the star icon for the favorite column is toggled.
         */
        this.favoriteToggled = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    /**
     * \@internal is Favorite returns whether the column specified by name in the datasource
     * holds true or false.
     * @param {?} data
     * @return {?}
     */
    _isFavorite(data) {
        return this.displayAccessor
            ? this.displayAccessor(data, this.name)
            : ((/** @type {?} */ (data)))[this.name]; // tslint:disable-line:no-any
    }
    /**
     * \@internal Toggle Favorite toggles the value of the favorite column in the
     * datasource using the predefined name.
     * @param {?} data
     * @return {?}
     */
    _toggleFavorite(data) {
        this.favoriteToggled.emit(data);
    }
}
DtFavoriteColumn.ɵfac = function DtFavoriteColumn_Factory(t) { return new (t || DtFavoriteColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](DtTable, 8)); };
DtFavoriteColumn.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DtFavoriteColumn, selectors: [["dt-favorite-column"]], outputs: { favoriteToggled: "favoriteToggled" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{ provide: DtSimpleColumnBase, useExisting: DtFavoriteColumn }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 2, consts: [["dtColumnAlign", "icon", 3, "dtColumnDef", "dtColumnProportion"], [4, "dtHeaderCellDef"], [3, "dtIndicator", "dtIndicatorColor", 4, "dtCellDef"], ["favoriteTemplate", ""], ["start", "desc", 3, "dt-sort-header"], [3, "dtIndicator", "dtIndicatorColor"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["dt-icon-button", "", "variant", "nested", 3, "click"], [3, "name"]], template: function DtFavoriteColumn_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DtFavoriteColumn_ng_container_1_Template, 3, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DtFavoriteColumn_dt_cell_2_Template, 2, 8, "dt-cell", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DtFavoriteColumn_ng_template_3_Template, 2, 5, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dtColumnDef", ctx.name)("dtColumnProportion", ctx.proportion);
    } }, directives: function () { return [DtColumnDef,
        DtHeaderCellDef,
        DtCellDef,
        DtHeaderCell,
        DtSortHeader,
        DtCell, _dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["DtIndicator"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_4__["DtButton"], _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_9__["DtIcon"]]; }, styles: [".dt-simple-number-cell-data[_ngcontent-%COMP%], .dt-simple-text-cell-data[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}  .dt-favorite-column-empty-star svg{fill:#b7b7b7!important}  .dt-favorite-column-filled-star svg{fill:#006d75!important}"] });
/** @nocollapse */
DtFavoriteColumn.ctorParameters = () => [
    { type: DtTable, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
DtFavoriteColumn.propDecorators = {
    favoriteToggled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DtFavoriteColumn, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'dt-favorite-column',
                template: "<ng-container\n  [dtColumnDef]=\"name\"\n  dtColumnAlign=\"icon\"\n  [dtColumnProportion]=\"proportion\"\n>\n  <ng-container *dtHeaderCellDef>\n    <dt-header-cell [dt-sort-header]=\"sortable\" start=\"desc\">{{\n      label\n    }}</dt-header-cell>\n  </ng-container>\n  <dt-cell\n    *dtCellDef=\"let data\"\n    [dtIndicator]=\"_getIndicator(data)\"\n    [dtIndicatorColor]=\"_getIndicator(data)\"\n    [attr.title]=\"_isFavorite(data)\"\n  >\n    <ng-container\n      *ngTemplateOutlet=\"\n        favoriteTemplate;\n        context: { favorite: _isFavorite(data), data: data }\n      \"\n    ></ng-container>\n  </dt-cell>\n</ng-container>\n\n<ng-template #favoriteTemplate let-favorite=\"favorite\" let-data=\"data\">\n  <button dt-icon-button variant=\"nested\" (click)=\"_toggleFavorite(data)\">\n    <dt-icon\n      [name]=\"favorite ? 'favorite' : 'star-empty'\"\n      [class.dt-favorite-column-filled-star]=\"favorite\"\n      [class.dt-favorite-column-empty-star]=\"!favorite\"\n    ></dt-icon>\n  </button>\n</ng-template>\n",
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].Emulated,
                /*
                   * Deliberatley set to Default because the embedded view that gets created for the
                   * dtColumDef can't handle onPush and results in ChangeAfterChecked error.
                   */
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
                providers: [{ provide: DtSimpleColumnBase, useExisting: DtFavoriteColumn }],
                styles: [".dt-simple-number-cell-data,.dt-simple-text-cell-data{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}::ng-deep .dt-favorite-column-empty-star svg{fill:#b7b7b7!important}::ng-deep .dt-favorite-column-filled-star svg{fill:#006d75!important}"]
            }]
    }], function () { return [{ type: DtTable, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, { favoriteToggled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/simple-columns/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: src/sort/sort-header.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Boilerplate for applying mixins to the sort header.
 * \@internal
 */
class DtSortHeaderBase {
}
/** @type {?} */
const _DtSortHeaderMixinBase = Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisabled"])(DtSortHeaderBase);
/**
 * Applies sorting behavior (click to change sort) and styles to an element, including an
 * arrow to display the current sort direction.
 */
class DtSortHeader extends _DtSortHeaderMixinBase {
    /**
     * @param {?} _changeDetectorRef
     * @param {?} _dtColumnDef
     * @param {?} _sort
     */
    constructor(_changeDetectorRef, _dtColumnDef, _sort) {
        super();
        this._changeDetectorRef = _changeDetectorRef;
        this._dtColumnDef = _dtColumnDef;
        this._sort = _sort;
        this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_12__["Subscription"].EMPTY;
        /**
         * The direction the arrow should be facing according to the current state.
         * \@internal
         */
        this._sortIconName = 'sorter-double';
        this._sortable = true;
        if (_sort) {
            this._rerenderSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(_sort.sortChange, _sort._stateChanges).subscribe((/**
             * @return {?}
             */
            () => {
                this._updateSorterIcon();
                this._changeDetectorRef.markForCheck();
            }));
        }
    }
    /**
     * Enables sorting on the dt-sort-header by applying the directive or not.
     * @return {?}
     */
    get sortable() {
        return this._sortable;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set sortable(value) {
        this._sortable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value);
        if (this.sortable && !this._sort) {
            throw getDtSortHeaderNotContainedWithinSortError();
        }
    }
    /**
     * Returns the internal id
     * @return {?}
     */
    get id() {
        return this._id;
    }
    /**
     * Wether the entire table sorting is disabled or the column is disabled
     * \@internal
     * @return {?}
     */
    get _isDisabled() {
        return (this._sort && this._sort.disabled) || this.disabled;
    }
    /**
     * Whether this DtSortHeader is currently sorted in either ascending or descending order.
     * \@internal
     * @return {?}
     */
    get _isSorted() {
        /** @type {?} */
        const sorted = this._sortable &&
            this._sort.active === this._id &&
            (this._sort.direction === 'asc' || this._sort.direction === 'desc');
        return sorted;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._id = this._dtColumnDef.name;
        this._updateSorterIcon();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._rerenderSubscription.unsubscribe();
    }
    /**
     * Updates the icon used for the sorter
     * @private
     * @return {?}
     */
    _updateSorterIcon() {
        this._sortIconName = this._isSorted
            ? this._sort.direction === 'asc'
                ? 'sorter2-up'
                : 'sorter2-down'
            : 'sorter-double';
    }
    /**
     * Triggers the sort on this sort header
     * \@internal
     * @return {?}
     */
    _handleClick() {
        if (this._isDisabled || !this._sortable) {
            return;
        }
        this._sort.sort(this);
    }
    /**
     * Gets the aria-sort attribute that should be applied to this sort header. If this header
     * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
     * says that the aria-sort property should only be present on one header at a time, so removing
     * ensures this is true.
     * \@internal
     * @return {?}
     */
    _getAriaSortAttribute() {
        if (!this._isSorted) {
            return null;
        }
        return this._sort.direction === 'asc' ? 'ascending' : 'descending';
    }
}
DtSortHeader.ɵfac = function DtSortHeader_Factory(t) { return new (t || DtSortHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](DtColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](DtSort, 8)); };
DtSortHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DtSortHeader, selectors: [["dt-header-cell", "dt-sort-header", ""]], hostVars: 5, hostBindings: function DtSortHeader_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DtSortHeader_click_HostBindingHandler() { return ctx._handleClick(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-sort", ctx._getAriaSortAttribute());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("dt-sort-header-disabled", ctx._isDisabled)("dt-sortable", ctx.sortable && !ctx._isDisabled);
    } }, inputs: { disabled: "disabled", sortable: ["dt-sort-header", "sortable"], start: "start", ariaLabel: ["sort-aria-label", "ariaLabel"] }, exportAs: ["dtSortHeader"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], attrs: _c9, ngContentSelectors: _c0, decls: 5, vars: 4, consts: [[1, "dt-sort-header-container"], ["class", "dt-sort-header-button", "type", "button", 4, "ngIf"], [4, "ngIf"], ["content", ""], ["type", "button", 1, "dt-sort-header-button"], [4, "ngTemplateOutlet"], ["class", "dt-sort-header-arrow", 4, "ngIf"], [1, "dt-sort-header-arrow"], [3, "name"]], template: function DtSortHeader_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DtSortHeader_button_1_Template, 3, 4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DtSortHeader_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DtSortHeader_ng_template_3_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("dt-sort-header-sorted", ctx._isSorted);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.sortable);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.sortable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_9__["DtIcon"]], styles: [".dt-sort-header-container{align-items:center}.dt-sort-header-disabled .dt-sort-header-container{cursor:default}.dt-sort-header-button{color:#6d6d6d;border:none;background:0 0;display:flex;align-items:flex-end;text-align:left;padding:0;cursor:inherit;outline:0;font:inherit}.dt-sortable:hover{background-color:#f2f2f2;cursor:pointer}.dt-sortable:hover .dt-sort-header-button{color:#454646}.dt-sortable:hover .dt-sort-header-arrow{fill:#454646}.dt-sort-header-arrow{width:12px;min-width:12px;height:14px;position:relative;display:flex;margin:0 0 4px 4px}.dt-sort-header-arrow .dt-icon{fill:#ccc}.dt-sort-header-sorted .dt-sort-header-button{color:#454646}.dt-sort-header-sorted .dt-sort-header-arrow .dt-icon{fill:#454646}.dt-table-column-align-right .dt-sort-header-button{text-align:right}.dt-table-column-align-center .dt-sort-header-button{text-align:center}"], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
DtSortHeader.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: DtColumnDef },
    { type: DtSort, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
DtSortHeader.propDecorators = {
    sortable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['dt-sort-header',] }],
    start: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['sort-aria-label',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DtSortHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'dt-header-cell[dt-sort-header]',
                exportAs: 'dtSortHeader',
                template: "<div class=\"dt-sort-header-container\" [class.dt-sort-header-sorted]=\"_isSorted\">\n  <button\n    *ngIf=\"sortable\"\n    class=\"dt-sort-header-button\"\n    type=\"button\"\n    [attr.disabled]=\"_isDisabled || null\"\n    [attr.aria-label]=\"ariaLabel\"\n  >\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n    <div class=\"dt-sort-header-arrow\" *ngIf=\"!_isDisabled\">\n      <dt-icon [name]=\"_sortIconName\"></dt-icon>\n    </div>\n  </button>\n  <ng-container *ngIf=\"!sortable\">\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </ng-container>\n</div>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n",
                host: {
                    '(click)': '_handleClick()',
                    '[attr.aria-sort]': '_getAriaSortAttribute()',
                    '[class.dt-sort-header-disabled]': '_isDisabled',
                    '[class.dt-sortable]': 'sortable && !_isDisabled'
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                inputs: ['disabled'],
                styles: [".dt-sort-header-container{align-items:center}.dt-sort-header-disabled .dt-sort-header-container{cursor:default}.dt-sort-header-button{color:#6d6d6d;border:none;background:0 0;display:flex;align-items:flex-end;text-align:left;padding:0;cursor:inherit;outline:0;font:inherit}.dt-sortable:hover{background-color:#f2f2f2;cursor:pointer}.dt-sortable:hover .dt-sort-header-button{color:#454646}.dt-sortable:hover .dt-sort-header-arrow{fill:#454646}.dt-sort-header-arrow{width:12px;min-width:12px;height:14px;position:relative;display:flex;margin:0 0 4px 4px}.dt-sort-header-arrow .dt-icon{fill:#ccc}.dt-sort-header-sorted .dt-sort-header-button{color:#454646}.dt-sort-header-sorted .dt-sort-header-arrow .dt-icon{fill:#454646}.dt-table-column-align-right .dt-sort-header-button{text-align:right}.dt-table-column-align-center .dt-sort-header-button{text-align:center}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: DtColumnDef }, { type: DtSort, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, { sortable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['dt-sort-header']
        }], start: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['sort-aria-label']
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/states/table-empty-state-image.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated Use `<dt-empty-state>` and `<dt-empty-state-item-img>` instead.
 * \@breaking-change To be removed with 6.0.0.
 */
class DtTableEmptyStateImage {
}
DtTableEmptyStateImage.ɵfac = function DtTableEmptyStateImage_Factory(t) { return new (t || DtTableEmptyStateImage)(); };
DtTableEmptyStateImage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DtTableEmptyStateImage, selectors: [["dt-table-empty-state-image"]], hostAttrs: [1, "dt-table-empty-state-image"], exportAs: ["dtTableEmptyStateImage"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function DtTableEmptyStateImage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
    } }, styles: [".dt-table-empty-state-image[_nghost-%COMP%]{box-sizing:content-box;padding:2px;display:inline-block;height:86px;width:86px;flex-grow:0;flex-shrink:0}.dt-table-empty-state-image[_nghost-%COMP%]   img[_ngcontent-%COMP%]{border:0;height:86px;width:86px}"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DtTableEmptyStateImage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'dt-table-empty-state-image',
                template: '<ng-content></ng-content>',
                exportAs: 'dtTableEmptyStateImage',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].Emulated,
                preserveWhitespaces: false,
                host: {
                    class: 'dt-table-empty-state-image'
                },
                styles: [":host.dt-table-empty-state-image{box-sizing:content-box;padding:2px;display:inline-block;height:86px;width:86px;flex-grow:0;flex-shrink:0}:host.dt-table-empty-state-image img{border:0;height:86px;width:86px}"]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/states/table-empty-state-message.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated Use `<dt-empty-state>` instead.
 * \@breaking-change To be removed with 6.0.0.
 */
class DtTableEmptyStateMessage {
}
DtTableEmptyStateMessage.ɵfac = function DtTableEmptyStateMessage_Factory(t) { return new (t || DtTableEmptyStateMessage)(); };
DtTableEmptyStateMessage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DtTableEmptyStateMessage, selectors: [["dt-table-empty-state-message"]], hostAttrs: [1, "dt-table-empty-state-message"], exportAs: ["dtTableEmptyStateMessage"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function DtTableEmptyStateMessage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
    } }, styles: [".dt-table-empty-state-message[_nghost-%COMP%]{display:block}"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DtTableEmptyStateMessage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'dt-table-empty-state-message',
                template: '<ng-content></ng-content>',
                exportAs: 'dtTableEmptyStateMessage',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].Emulated,
                preserveWhitespaces: false,
                host: {
                    class: 'dt-table-empty-state-message'
                },
                styles: [":host.dt-table-empty-state-message{display:block}"]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/states/table-empty-state-title.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated Use `<dt-empty-state>` and `<dt-empty-state-item-title>` instead.
 * \@breaking-change To be removed with 6.0.0.
 */
class DtTableEmptyStateTitle {
}
DtTableEmptyStateTitle.ɵfac = function DtTableEmptyStateTitle_Factory(t) { return new (t || DtTableEmptyStateTitle)(); };
DtTableEmptyStateTitle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DtTableEmptyStateTitle, selectors: [["dt-table-empty-state-title"]], hostAttrs: [1, "dt-table-empty-state-title"], exportAs: ["dtTableEmptyStateTitle"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function DtTableEmptyStateTitle_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
    } }, styles: [".dt-table-empty-state-title[_nghost-%COMP%]{display:block;font-family:BerninaSansWeb,OpenSans,sans-serif;color:#454646;font-weight:400;font-size:24px;line-height:1.6}"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DtTableEmptyStateTitle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'dt-table-empty-state-title',
                template: '<ng-content></ng-content>',
                exportAs: 'dtTableEmptyStateTitle',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].Emulated,
                preserveWhitespaces: false,
                host: {
                    class: 'dt-table-empty-state-title'
                },
                styles: [":host.dt-table-empty-state-title{display:block;font-family:BerninaSansWeb,OpenSans,sans-serif;color:#454646;font-weight:400;font-size:24px;line-height:1.6}"]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/states/table-empty-state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated Use `<dt-empty-state>` instead.
 * \@breaking-change To be removed with 6.0.0.
 */
class DtTableEmptyState {
}
DtTableEmptyState.ɵfac = function DtTableEmptyState_Factory(t) { return new (t || DtTableEmptyState)(); };
DtTableEmptyState.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DtTableEmptyState, selectors: [["dt-table-empty-state"]], contentQueries: function DtTableEmptyState_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticContentQuery"](dirIndex, DtTableEmptyStateImage, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticContentQuery"](dirIndex, DtTableEmptyStateTitle, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticContentQuery"](dirIndex, DtTableEmptyStateMessage, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._emptyImage = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._emptyTitle = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._emptyMessage = _t.first);
    } }, hostAttrs: [1, "dt-table-empty-state"], exportAs: ["dtTableEmptyState"], ngContentSelectors: _c11, decls: 4, vars: 0, consts: [[1, "dt-table-empty-state-message-area"]], template: function DtTableEmptyState_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, styles: [".dt-table-empty-state[_nghost-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center;margin:48px 0;font-family:BerninaSansWeb,OpenSans,sans-serif;color:#454646;font-weight:400;font-size:14px;line-height:1.6}.dt-table-empty-state[_nghost-%COMP%]   .dt-table-empty-state-message-area[_ngcontent-%COMP%]{padding-left:8px;white-space:pre-line}"], changeDetection: 0 });
DtTableEmptyState.propDecorators = {
    _emptyImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [DtTableEmptyStateImage, { static: true },] }],
    _emptyTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [DtTableEmptyStateTitle, { static: true },] }],
    _emptyMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [DtTableEmptyStateMessage, { static: true },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DtTableEmptyState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'dt-table-empty-state',
                template: "<ng-content select=\"dt-table-empty-state-image\"></ng-content>\n\n<div class=\"dt-table-empty-state-message-area\">\n  <ng-content select=\"dt-table-empty-state-title\"></ng-content>\n  <ng-content select=\"dt-table-empty-state-message\"></ng-content>\n</div>\n",
                exportAs: 'dtTableEmptyState',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].Emulated,
                preserveWhitespaces: false,
                host: {
                    class: 'dt-table-empty-state'
                },
                styles: [":host.dt-table-empty-state{display:flex;flex-flow:row nowrap;justify-content:center;margin:48px 0;font-family:BerninaSansWeb,OpenSans,sans-serif;color:#454646;font-weight:400;font-size:14px;line-height:1.6}:host.dt-table-empty-state .dt-table-empty-state-message-area{padding-left:8px;white-space:pre-line}"]
            }]
    }], null, { _emptyImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [DtTableEmptyStateImage, { static: true }]
        }], _emptyTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [DtTableEmptyStateTitle, { static: true }]
        }], _emptyMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [DtTableEmptyStateMessage, { static: true }]
        }] }); })();
if (false) {}
/**
 * @deprecated Use `<dt-empty-state>` instead.
 * \@breaking-change To be removed with 6.0.0.
 */
class DtTableEmptyStateDirective {
}
DtTableEmptyStateDirective.ɵfac = function DtTableEmptyStateDirective_Factory(t) { return new (t || DtTableEmptyStateDirective)(); };
DtTableEmptyStateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: DtTableEmptyStateDirective, selectors: [["", "dtTableEmptyState", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DtTableEmptyStateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[dtTableEmptyState]'
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/states/table-loading-state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DtTableLoadingState {
}
DtTableLoadingState.ɵfac = function DtTableLoadingState_Factory(t) { return new (t || DtTableLoadingState)(); };
DtTableLoadingState.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: DtTableLoadingState, selectors: [["", "dtTableLoadingState", ""]], exportAs: ["dtTableLoadingState"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DtTableLoadingState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[dtTableLoadingState]',
                exportAs: 'dtTableLoadingState'
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/states/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: src/table-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXPORTED_DECLARATIONS = [
    DtTable,
    DtHeaderRow,
    DtHeaderRowDef,
    DtRow,
    DtRowDef,
    DtCell,
    DtCellDef,
    DtColumnDef,
    DtExpandableCell,
    DtExpandableRow,
    DtHeaderCell,
    DtHeaderCellDef,
    DtTableEmptyState,
    DtTableEmptyStateDirective,
    DtTableEmptyStateImage,
    DtTableEmptyStateTitle,
    DtTableEmptyStateMessage,
    DtTableLoadingState,
    DtSort,
    DtSortHeader,
    DtTableSearch,
    DtSimpleTextColumn,
    DtSimpleNumberColumn,
    DtExpandableRowContent,
    DtFavoriteColumn,
];
class DtTableModule {
}
DtTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DtTableModule });
DtTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function DtTableModule_Factory(t) { return new (t || DtTableModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
            _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_9__["DtIconModule"],
            _dynatrace_barista_components_form_field__WEBPACK_IMPORTED_MODULE_7__["DtFormFieldModule"],
            _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_10__["DtInputModule"],
            _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_4__["DtButtonModule"],
            _dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["DtIndicatorModule"],
            _dynatrace_barista_components_formatters__WEBPACK_IMPORTED_MODULE_8__["DtFormattersModule"],
            _dynatrace_barista_components_empty_state__WEBPACK_IMPORTED_MODULE_6__["DtEmptyStateModule"],
        ],
        _dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["DtIndicatorModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DtTableModule, { declarations: function () { return [DtTable,
        DtHeaderRow,
        DtHeaderRowDef,
        DtRow,
        DtRowDef,
        DtCell,
        DtCellDef,
        DtColumnDef,
        DtExpandableCell,
        DtExpandableRow,
        DtHeaderCell,
        DtHeaderCellDef,
        DtTableEmptyState,
        DtTableEmptyStateDirective,
        DtTableEmptyStateImage,
        DtTableEmptyStateTitle,
        DtTableEmptyStateMessage,
        DtTableLoadingState,
        DtSort,
        DtSortHeader,
        DtTableSearch,
        DtSimpleTextColumn,
        DtSimpleNumberColumn,
        DtExpandableRowContent,
        DtFavoriteColumn]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
        _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_9__["DtIconModule"],
        _dynatrace_barista_components_form_field__WEBPACK_IMPORTED_MODULE_7__["DtFormFieldModule"],
        _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_10__["DtInputModule"],
        _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_4__["DtButtonModule"],
        _dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["DtIndicatorModule"],
        _dynatrace_barista_components_formatters__WEBPACK_IMPORTED_MODULE_8__["DtFormattersModule"],
        _dynatrace_barista_components_empty_state__WEBPACK_IMPORTED_MODULE_6__["DtEmptyStateModule"]]; }, exports: function () { return [DtTable,
        DtHeaderRow,
        DtHeaderRowDef,
        DtRow,
        DtRowDef,
        DtCell,
        DtCellDef,
        DtColumnDef,
        DtExpandableCell,
        DtExpandableRow,
        DtHeaderCell,
        DtHeaderCellDef,
        DtTableEmptyState,
        DtTableEmptyStateDirective,
        DtTableEmptyStateImage,
        DtTableEmptyStateTitle,
        DtTableEmptyStateMessage,
        DtTableLoadingState,
        DtSort,
        DtSortHeader,
        DtTableSearch,
        DtSimpleTextColumn,
        DtSimpleNumberColumn,
        DtExpandableRowContent,
        DtFavoriteColumn,
        _dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["DtIndicatorModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DtTableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
                    _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_9__["DtIconModule"],
                    _dynatrace_barista_components_form_field__WEBPACK_IMPORTED_MODULE_7__["DtFormFieldModule"],
                    _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_10__["DtInputModule"],
                    _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_4__["DtButtonModule"],
                    _dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["DtIndicatorModule"],
                    _dynatrace_barista_components_formatters__WEBPACK_IMPORTED_MODULE_8__["DtFormattersModule"],
                    _dynatrace_barista_components_empty_state__WEBPACK_IMPORTED_MODULE_6__["DtEmptyStateModule"],
                ],
                exports: [...EXPORTED_DECLARATIONS, _dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["DtIndicatorModule"]],
                declarations: [...EXPORTED_DECLARATIONS]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/table-data-source.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_PAGE_SIZE = 10;
/**
 * @template T
 */
class DtTableDataSource extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["DataSource"] {
    /**
     * @param {?=} initialData
     */
    constructor(initialData = []) {
        super();
        /**
         * \@internal DisplayAccessorMap for SimpleColumn displayAccessor functions.
         */
        this._displayAccessorMap = new Map();
        /**
         * \@internal SortAccessorMap for SimpleColumn sortAccessor functions. This sortAccessorMap
         * is automatically populated by the sortAccessor functions on the dt-simple-columns.
         */
        this._simpleColumnSortAccessorMap = new Map();
        /**
         * \@internal
         * SortAccessorMap for SimpleColumn sortAccessor functions. This sortAccessorMap
         * is exposed to the outside and can be filled by the consumer.
         */
        this._customSortAccessorMap = new Map();
        /**
         * Comparator map for SimpleColumn comparator functions
         */
        this._simpleComparatorMap = new Map();
        /**
         * Comparator map for column comparator functions
         */
        this._customComparatorMap = new Map();
        /**
         * Stream emitting render data to the table (depends on ordered data changes).
         */
        this._renderData = new rxjs__WEBPACK_IMPORTED_MODULE_12__["BehaviorSubject"]([]);
        /**
         * Stream that emits when a new filter string is set on the data source.
         */
        this._filter = new rxjs__WEBPACK_IMPORTED_MODULE_12__["BehaviorSubject"]('');
        /**
         * Used to react to internal changes of the pagination that are made by the data source itself.
         */
        this._internalPageChanges = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        /**
         * Used for unsubscribing
         */
        this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        /**
         * Subscription to the changes that should trigger an update to the table's rendered rows, such
         * as filtering, sorting, pagination, or base data changes.
         */
        this._renderChangesSubscription = rxjs__WEBPACK_IMPORTED_MODULE_12__["Subscription"].EMPTY;
        this._searchChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_12__["Subscription"].EMPTY;
        /**
         * Public stream emitting render data to the table
         */
        this.renderData = this._renderData.asObservable();
        this._search = null;
        this._pagination = null;
        this._pageSize = DEFAULT_PAGE_SIZE;
        /**
         * Data accessor function that is used for accessing data properties for sorting through
         * the default sortData function.
         * This default function assumes that the sort header IDs (which defaults to the column name)
         * matches the datas properties (e.g. column Xyz represents data['Xyz']).
         * May be set to a custom function for different behavior.
         */
        this.sortingDataAccessor = (/**
         * @param {?} data
         * @param {?} sortHeaderId
         * @return {?}
         */
        (data, sortHeaderId) => {
            /** @type {?} */
            let value;
            if (this._customSortAccessorMap.has(sortHeaderId)) {
                value = (/** @type {?} */ (this._customSortAccessorMap.get(sortHeaderId)))(data);
            }
            else if (this._simpleColumnSortAccessorMap.has(sortHeaderId)) {
                value = (/** @type {?} */ (this._simpleColumnSortAccessorMap.get(sortHeaderId)))(data, sortHeaderId);
            }
            else if (this._displayAccessorMap.has(sortHeaderId)) {
                value = (/** @type {?} */ (this._displayAccessorMap.get(sortHeaderId)))(data, sortHeaderId);
            }
            else {
                // tslint:disable-next-line: no-any
                value = ((/** @type {?} */ (data)))[sortHeaderId];
            }
            if (Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["isNumber"])(value)) {
                /** @type {?} */
                const numberValue = Number(value);
                // Numbers beyond `MAX_SAFE_INTEGER` can't be compared reliably so we
                // leave them as strings. For more info: https://goo.gl/y5vbSg
                return numberValue < Number.MAX_SAFE_INTEGER ? numberValue : value;
            }
            if (value === undefined) {
                return null;
            }
            return value;
        });
        /**
         * Gets a sorted copy of the data array based on the state of the DtSort. Called
         * after changes are made to the filtered data or when sort changes are emitted from DtSort.
         * By default, the function retrieves the active sort and its direction and compares data
         * by retrieving data using the sortingDataAccessor. May be overridden for a custom implementation
         * of data ordering.
         */
        this.sortData = (/**
         * @param {?} data
         * @param {?} sort
         * @return {?}
         */
        (data, sort) => {
            /** @type {?} */
            const active = sort.active;
            /** @type {?} */
            const direction = sort.direction;
            if (!active || direction === '') {
                return data;
            }
            /** @type {?} */
            const comparator = this._getComparatorFunction(active);
            return data.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => comparator(a, b) * (direction === 'asc' ? 1 : -1)));
        });
        /**
         * Checks if a data object matches the data source's filter string. By default, each data object
         * is converted to a string of its properties and returns true if the filter has
         * at least one occurrence in that string. By default, the filter string has its whitespace
         * trimmed and the match is case-insensitive. May be overridden for a custom implementation of
         * filter matching.
         * @param data Data object used to check against the filter.
         * @param filter Filter string that has been set on the data source.
         * @return Whether the filter matches against the data
         */
        this.filterPredicate = (/**
         * @param {?} data
         * @param {?} filter
         * @return {?}
         */
        (data, filter) => {
            // Transform the data into a lowercase string of all property values.
            /** @type {?} */
            const dataStr = Object.keys(data)
                .reduce((/**
             * @param {?} currentTerm
             * @param {?} key
             * @return {?}
             */
            (currentTerm, key) => 
            // Use an obscure Unicode character to delimit the words in the concatenated string.
            // This avoids matches where the values of two columns combined will match the user's query
            // (e.g. `Flute` and `Stop` will match `Test`). The character is intended to be something
            // that has a very low chance of being typed in by somebody in a text field. This one in
            // particular is "White up-pointing triangle with dot" from
            // https://en.wikipedia.org/wiki/List_of_Unicode_characters
            // tslint:disable-next-line
            `${currentTerm}${((/** @type {?} */ (data)))[key]}◬`), '')
                .toLowerCase();
            // Transform the filter by converting it to lowercase and removing whitespace.
            /** @type {?} */
            const transformedFilter = filter.trim().toLowerCase();
            return dataStr.indexOf(transformedFilter) !== -1;
        });
        this._data = new rxjs__WEBPACK_IMPORTED_MODULE_12__["BehaviorSubject"](initialData);
        this._updateChangeSubscription();
    }
    /**
     * Array of data that should be rendered by the table, where each object represents one row.
     * @return {?}
     */
    get data() {
        return this._data.value;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set data(data) {
        this._data.next(data);
        this._updateChangeSubscription();
    }
    /**
     * Instance of the DtSort directive used by the table to control its sorting.
     * Sort changes emitted by the DtSort will trigger an update to the tables
     * rendered data.
     * @return {?}
     */
    get sort() {
        return this._sort;
    }
    /**
     * @param {?} sort
     * @return {?}
     */
    set sort(sort) {
        this._sort = sort;
        this._updateChangeSubscription();
    }
    /**
     * Instance of the DtTableSearch directive used by the table to control which
     * rows are displayed. Search changes emitted by the DtTableSearch will
     * trigger an update to the tables rendered data.
     * @return {?}
     */
    get search() {
        return this._search;
    }
    /**
     * @param {?} search
     * @return {?}
     */
    set search(search) {
        this._search = search;
        this._searchChangeSubscription.unsubscribe();
        if (this._search !== null) {
            this._searchChangeSubscription = this._search.valueChange.subscribe((/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                this._filter.next(event.value);
            }));
        }
        else {
            this._searchChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_12__["Subscription"].EMPTY;
        }
    }
    /**
     * Filter term that should be used to filter out objects from the data array.
     * @return {?}
     */
    get filter() {
        return this._filter.value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set filter(value) {
        this._filter.next(value);
    }
    /**
     * Instance of the `DtPagination` component used by the table to control what page of the data is
     * displayed. Page changes emitted by the pagination will trigger an update to the
     * table's rendered data.
     *
     * Note that the data source uses the pagination's properties to calculate which page of data
     * should be displayed.
     * @return {?}
     */
    get pagination() {
        return this._pagination;
    }
    /**
     * @param {?} pagination
     * @return {?}
     */
    set pagination(pagination) {
        this._pagination = pagination;
        this._internalPageChanges.next();
        this._updateChangeSubscription();
    }
    /**
     * Number of items to display on a page. By default set to 50.
     * @return {?}
     */
    get pageSize() {
        return this._pageSize;
    }
    /**
     * @param {?} pageSize
     * @return {?}
     */
    set pageSize(pageSize) {
        this._pageSize = pageSize;
        if (!!this._pagination) {
            this._pagination.pageSize = pageSize;
            this._internalPageChanges.next();
        }
        this._updateChangeSubscription();
    }
    /**
     * Subscribe to changes that should trigger an update to the table's rendered rows. When the
     * changes occur, process the current state of the sort with the provided base data, and send
     * it to the table for rendering.
     * @private
     * @return {?}
     */
    _updateChangeSubscription() {
        /** @type {?} */
        const sortChange = this._sort
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(this._sort.sortChange, this._sort._initialized)
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])(null);
        /** @type {?} */
        const pageChange = this
            ._pagination
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(this._pagination._initialized, this._internalPageChanges, this._pagination.changed)
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])(null);
        /** @type {?} */
        const dataStream = this._data;
        // Watch for base data or filter changes to provide a filtered set of data.
        /** @type {?} */
        const filteredData = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["combineLatest"])([dataStream, this._filter]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])((/**
         * @param {?} __0
         * @return {?}
         */
        ([data]) => this._filterData(data))));
        // Watch for filtered data or sort changes to provide a sorted set of data.
        /** @type {?} */
        const sortedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["combineLatest"])([filteredData, sortChange]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])((/**
         * @param {?} __0
         * @return {?}
         */
        ([data]) => this._sortData(data))));
        // Watch for ordered data or page changes to provide a paged set of data.
        /** @type {?} */
        const paginatedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["combineLatest"])([sortedData, pageChange]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])((/**
         * @param {?} __0
         * @return {?}
         */
        ([data]) => this._pageData(data))));
        this._renderChangesSubscription.unsubscribe();
        this._renderChangesSubscription = paginatedData.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this._renderData.next(data);
        }));
    }
    /**
     * \@internal
     * Returns a sorted copy of the data if DtSort has a sort applied, otherwise just returns the
     * data array as provided. Uses the default data accessor for data lookup, unless a
     * sortDataAccessor function is defined.
     * @param {?} data
     * @return {?}
     */
    _sortData(data) {
        // If there is no active sort or direction, return the data without trying to sort.
        if (!this.sort) {
            return data;
        }
        return this.sortData(data.slice(), this.sort);
    }
    /**
     * Returns a filtered data array where each filter object contains the filter string within
     * the result of the filterTermAccessor function. If no filter is set, returns the data array
     * as provided.
     * @private
     * @param {?} data
     * @return {?}
     */
    _filterData(data) {
        // If there is a filter string, filter out data that does not contain it.
        // May be overridden for customization.
        this.filteredData = !this.filter
            ? data
            : data.filter((/**
             * @param {?} obj
             * @return {?}
             */
            (obj) => this.filterPredicate(obj, this.filter)));
        if (this._pagination &&
            this._pagination.length !== this.filteredData.length) {
            this._updatePagination(this.filteredData.length);
        }
        return this.filteredData;
    }
    /**
     * Returns a paged splice of the provided data array according to the provided pagination's page
     * index and length. If there is no pagination provided, return the data array as provided.
     * @private
     * @param {?} data
     * @return {?}
     */
    _pageData(data) {
        if (!this._pagination) {
            return data;
        }
        // -1 in case that the currentPage starts with 1
        /** @type {?} */
        const pageSize = this._pagination.pageSize;
        /** @type {?} */
        const startIndex = (this._pagination.currentPage - 1) * pageSize;
        return data.slice().splice(startIndex, pageSize);
    }
    /**
     * Updates the pagination to reflect the length of the filtered data, and makes sure that the page
     * index does not exceed the pagination's last page. Values are changed in a resolved promise to
     * guard against making property changes within a round of change detection.
     * @private
     * @param {?} filteredDataLength
     * @return {?}
     */
    _updatePagination(filteredDataLength) {
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            if (this._pagination) {
                /** @type {?} */
                const pagination = this._pagination;
                pagination.length = filteredDataLength;
                // If the page index is set beyond the page, reduce it to the last page.
                if (pagination.currentPage > 0) {
                    // Set the last page index, if this would result to 0, fall back to the default
                    // page 1.
                    /** @type {?} */
                    const lastPageIndex = Math.ceil(pagination.length / pagination.pageSize) || 1;
                    /** @type {?} */
                    const newPageIndex = Math.min(pagination.currentPage, lastPageIndex);
                    if (newPageIndex !== pagination.currentPage) {
                        pagination.currentPage = newPageIndex;
                        // Since the pagination only emits after user-generated changes,
                        // we need our own stream so we know to should re-render the data.
                        this._internalPageChanges.next();
                    }
                }
            }
        }));
    }
    /**
     * Used by the DtTable. Called when it connects to the data source.
     * @param {?} _table
     * @return {?}
     */
    connect(_table) {
        _table._dataAccessors
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ comparatorMap, displayAccessorMap, sortAccessorMap }) => {
            this._displayAccessorMap = displayAccessorMap;
            this._simpleColumnSortAccessorMap = sortAccessorMap;
            this._simpleComparatorMap = comparatorMap;
            this._updateChangeSubscription();
        }));
        return this._renderData;
    }
    /**
     * Used by the DtTable. Called when it is destroyed. No-op.
     * @return {?}
     */
    disconnect() {
        this._renderChangesSubscription.unsubscribe();
        this._searchChangeSubscription.unsubscribe();
        this._destroy.next();
        this._destroy.complete();
    }
    /**
     * Lets the user define a sortAccessor function for a named column,
     * that is being used for sorting when the DataSource is used in combination
     * with simple and non-simple columns.
     * @param {?} columnName
     * @param {?} fn
     * @return {?}
     */
    addSortAccessorFunction(columnName, fn) {
        this._customSortAccessorMap.set(columnName, fn);
        this._data.next(this._data.value);
    }
    /**
     * Lets the user remove a sortAccessor function for a named column,
     * that is being used for sorting when the DataSource is used in combination
     * with simple and non-simple columns.
     * @param {?} columnName
     * @return {?}
     */
    removeSortAccessorFunction(columnName) {
        this._customSortAccessorMap.delete(columnName);
    }
    /**
     * Lets the user define a comparator function for a named column,
     * that is being used for sorting when the DataSource is used in combination
     * with simple and non-simple columns.
     * A comparator defined with this function is used instead of a comparator
     * defined in a simple column.
     * @param {?} columnName
     * @param {?} fn
     * @return {?}
     */
    addComparatorFunction(columnName, fn) {
        this._customComparatorMap.set(columnName, fn);
        this._data.next(this._data.value);
    }
    /**
     * Lets the user remove a comparator function for a named column.
     * @param {?} columnName
     * @return {?}
     */
    removeComparatorFunction(columnName) {
        this._customComparatorMap.delete(columnName);
    }
    /**
     * Gets a comparator function which calls the responsible comparator function.
     * The comparator is first searched in the custom comparators, then in the simple
     * comparators, and if this does not exists, a fallback comparator is used.
     * @private
     * @param {?} columnName
     * @return {?}
     */
    _getComparatorFunction(columnName) {
        /** @type {?} */
        const customComparator = this._customComparatorMap.get(columnName);
        if (customComparator) {
            return customComparator;
        }
        /** @type {?} */
        const simpleComparator = this._simpleComparatorMap.get(columnName);
        if (simpleComparator) {
            return (/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => simpleComparator(a, b, columnName));
        }
        return (/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => this._fallbackColumnComparator(a, b, columnName));
    }
    /**
     * Default comparator so compare two rows.
     * If is used if no comparator is set in the SimpleColumns or custom defined one.
     * @private
     * @param {?} left
     * @param {?} right
     * @param {?} active
     * @return {?}
     */
    _fallbackColumnComparator(left, right, active) {
        /** @type {?} */
        const valueA = this.sortingDataAccessor(left, active);
        /** @type {?} */
        const valueB = this.sortingDataAccessor(right, active);
        return Object(_dynatrace_barista_components_core__WEBPACK_IMPORTED_MODULE_5__["compareValues"])(valueA, valueB, 'asc');
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: dynatrace-barista-components-table.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=dynatrace-barista-components-table.js.map

/***/ }),

/***/ "./src/app/dynamic-table/dynamic-table.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dynamic-table/dynamic-table.component.ts ***!
  \**********************************************************/
/*! exports provided: DynamicTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicTableComponent", function() { return DynamicTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dynatrace_barista_components_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dynatrace/barista-components/pagination */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-pagination.js");
/* harmony import */ var _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dynatrace/barista-components/table */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-table.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hero.service */ "./src/app/hero.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @dynatrace/barista-components/input */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-input.js");
/* harmony import */ var _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @dynatrace/barista-components/icon */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-icon.js");













const _c0 = ["sortable"];
const _c1 = ["heroesTable"];
function DynamicTableComponent_dt_header_cell_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dt-header-cell", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DynamicTableComponent_dt_cell_16_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dt-cell", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicTableComponent_dt_cell_16_Template_dt_cell_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86); const row_r84 = ctx.$implicit; const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r85.navigateToDetails(row_r84.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", row_r84.name, " ");
} }
function DynamicTableComponent_dt_header_cell_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dt-header-cell", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nickname");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DynamicTableComponent_dt_cell_19_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dt-cell", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicTableComponent_dt_cell_19_Template_dt_cell_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89); const row_r87 = ctx.$implicit; const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r88.navigateToDetails(row_r87.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r87 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", row_r87.nickname, " ");
} }
function DynamicTableComponent_dt_header_cell_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dt-header-cell", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DynamicTableComponent_dt_cell_22_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dt-cell", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicTableComponent_dt_cell_22_Template_dt_cell_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92); const row_r90 = ctx.$implicit; const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r91.navigateToDetails(row_r90.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r90 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r90.id);
} }
function DynamicTableComponent_dt_header_cell_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dt-header-cell");
} }
function DynamicTableComponent_dt_cell_25_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dt-cell", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicTableComponent_dt_cell_25_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const row_r93 = ctx.$implicit; const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r94.deleteHero(row_r93.id, row_r93); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DynamicTableComponent_dt_header_row_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dt-header-row");
} }
function DynamicTableComponent_dt_row_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dt-row");
} if (rf & 2) {
    const row_r96 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@table", row_r96.isDeleted ? "hide" : null);
} }
const _c2 = function () { return ["id", "name", "nickname", "delete"]; };
class DynamicTableComponent {
    constructor(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.searchValue = '';
    }
    ngOnInit() {
        const heroesLocal = this.heroService.tryGetHeroes();
        if (!heroesLocal) {
            this.heroService.getHeroes().subscribe(h => this.onGetHeroes(h));
        }
        else {
            this.onGetHeroes(heroesLocal);
        }
    }
    add(name) {
        name = name.trim();
        if (!name) {
            return;
        }
        const heroesLocal = this.heroService.tryGetHeroes();
        const maxId = Math.max.apply(null, heroesLocal.map(h => h.id));
        const newHero = {
            name, id: maxId + 1, series: {}, stories: {}, nickname: name,
            description: '', modified: new Date().toString(), resourceURI: '', comics: {}, events: {}, urls: [],
            thumbnail: { path: 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available', extension: 'jpg' }
        };
        heroesLocal.push(newHero);
        this.heroService.addHero(newHero).subscribe(() => this.heroService.setHeroes(heroesLocal));
        // this.scrollToBottom();
    }
    updateDataSource(heroes) {
        let goToEnd;
        if (this.data && heroes.length > this.data.length) {
            goToEnd = true;
        }
        const isNewPage = this.data.length % this.pagination.pageSize === 0;
        this.initTable(heroes);
        if (goToEnd) {
            this.pagination.currentPage = isNewPage ? this.pagination.numberOfPages + 1 : this.pagination.numberOfPages;
            this.dataSource.pagination = this.paginationList.last;
        }
        this.paginationChanges();
    }
    initTable(heroes) {
        this.data = heroes;
        this.dataSource = new _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtTableDataSource"](heroes);
        this.dataSource.sort = this.sortable;
        this.dataSource.search = this.tableSearch;
        this.dataSource.pagination = this.pagination;
        this.dataSource.pageSize = 20;
    }
    onGetHeroes(heroes) {
        heroes.map(h => h.nickname = h.nickname || h.name);
        this.initTable(heroes);
    }
    ngAfterViewInit() {
        if (this.dataSource) {
            this.dataSource.sort = this.sortable;
            this.dataSource.search = this.tableSearch;
            this.paginationChanges();
        }
        this.subscription = this.heroService.heroesChanged.subscribe((heroes) => this.updateDataSource(heroes));
    }
    paginationChanges() {
        this.paginationList.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null)).subscribe(() => {
            if (this.paginationList.first) {
                this.dataSource.pagination = this.paginationList.first;
                this.dataSource.pageSize = 20;
            }
            else {
                this.dataSource.pagination = null;
            }
        });
    }
    deleteHero(id, row) {
        row.isDeleted = true;
        let heroesLocal = this.data || this.heroService.tryGetHeroes();
        this.heroService.getHeroIndex(id).subscribe((index) => {
            heroesLocal = heroesLocal.filter((h) => h.id !== id);
            this.heroService.deleteHero(index).subscribe(() => this.heroService.setHeroes(heroesLocal));
        });
    }
    navigateToDetails(id) {
        this.router.navigate(['/detail/', id]);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe(); // we need to get notified of changes from the detail page
    }
}
DynamicTableComponent.ɵfac = function DynamicTableComponent_Factory(t) { return new (t || DynamicTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_5__["HeroService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
DynamicTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DynamicTableComponent, selectors: [["app-dynamic-table"]], viewQuery: function DynamicTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true, _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtSort"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_dynatrace_barista_components_pagination__WEBPACK_IMPORTED_MODULE_1__["DtPagination"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtTableSearch"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_dynatrace_barista_components_pagination__WEBPACK_IMPORTED_MODULE_1__["DtPagination"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sortable = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pagination = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.heroesTable = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tableSearch = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginationList = _t);
    } }, decls: 30, vars: 8, consts: [[3, "ngSubmit"], ["f", "ngForm"], [1, "flex"], ["type", "text", "name", "heroName", "minlength", "1", "dtInput", "", "placeholder", "Please enter hero name", "required", "", "ngModel", "", 1, "hero_input"], ["heroName", ""], ["type", "submit", 1, "inline-flex", "button-item", 3, "click"], [1, "add-icon"], ["name", "plus-add"], ["name", "tableSearch", "placeholder", "Search table data...", "aria-label", "Search table data", 3, "ngModel", "ngModelChange"], ["interactiveRows", "", "dtSort", "", 1, "heroes", 3, "dataSource"], ["sortable", "", "heroesTable", ""], ["dtColumnDef", "name"], ["dt-sort-header", "", 4, "dtHeaderCellDef"], [3, "click", 4, "dtCellDef"], ["dtColumnDef", "nickname"], ["dtColumnDef", "id"], ["dtColumnDef", "delete"], [4, "dtHeaderCellDef"], ["style", "cursor: initial;", 4, "dtCellDef"], [4, "dtHeaderRowDef"], [4, "dtRowDef", "dtRowDefColumns"], ["pagination", ""], ["dt-sort-header", ""], [3, "click"], [2, "cursor", "initial"], [1, "trash", 3, "click"]], template: function DynamicTableComponent_Template(rf, ctx) { if (rf & 1) {
        const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DynamicTableComponent_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r97); const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r69.valid && _r69.resetForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicTableComponent_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r97); const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.add(_r70.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "dt-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "dt-table-search", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicTableComponent_Template_dt_table_search_ngModelChange_10_listener($event) { return ctx.searchValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "dt-table", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DynamicTableComponent_dt_header_cell_15_Template, 2, 0, "dt-header-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DynamicTableComponent_dt_cell_16_Template, 2, 1, "dt-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DynamicTableComponent_dt_header_cell_18_Template, 2, 0, "dt-header-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DynamicTableComponent_dt_cell_19_Template, 2, 1, "dt-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DynamicTableComponent_dt_header_cell_21_Template, 2, 0, "dt-header-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DynamicTableComponent_dt_cell_22_Template, 2, 1, "dt-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DynamicTableComponent_dt_header_cell_24_Template, 1, 0, "dt-header-cell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DynamicTableComponent_dt_cell_25_Template, 4, 0, "dt-cell", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DynamicTableComponent_dt_header_row_26_Template, 1, 0, "dt-header-row", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DynamicTableComponent_dt_row_27_Template, 1, 1, "dt-row", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "dt-pagination", null, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("empty", !_r70.value.trim().length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_8__["DtInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_9__["DtIcon"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtTableSearch"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtTable"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtSort"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtColumnDef"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtHeaderCellDef"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtCellDef"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtHeaderRowDef"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtRowDef"], _dynatrace_barista_components_pagination__WEBPACK_IMPORTED_MODULE_1__["DtPagination"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtHeaderCell"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtSortHeader"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtCell"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtHeaderRow"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtRow"]], styles: ["dt-table-search[_ngcontent-%COMP%] {\r\n  margin: 10px 0;\r\n}\r\n\r\n.heroes_container[_ngcontent-%COMP%] {\r\n  margin: 0 10px;\r\n}\r\n\r\n.hero_input[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  margin-right: 10px;\r\n}\r\n\r\n.inline-flex[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n}\r\n\r\n.flex[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  background-color: #eee;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  background-color: #cfd8dc;\r\n}\r\n\r\nbutton.delete[_ngcontent-%COMP%] {\r\n  background-color: gray;\r\n  color: white;\r\n  padding: 4px 10px;\r\n  float: right;\r\n}\r\n\r\nbutton.delete[_ngcontent-%COMP%]:hover {\r\n  background-color: #9c5061;\r\n}\r\n\r\n.inline[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: inline-block;\r\n}\r\n\r\n.inline[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 75%;\r\n  display: inline-block;\r\n  margin-right: 10px;\r\n}\r\n\r\n.heroes_container[_ngcontent-%COMP%] {\r\n  border-top: 3px solid #c7bb63;\r\n  padding-top: 16px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, .12);\r\n  padding: 20px;\r\n  border-bottom: 1px solid rgba(14, 30, 37, .12);\r\n  background: white;\r\n}\r\n\r\n.scroll[_ngcontent-%COMP%] {\r\n  transform: rotate(0);\r\n  z-index: 20;\r\n  width: 40px;\r\n  height: 40px;\r\n  position: fixed;\r\n  bottom: 20px;\r\n  right: 20px;\r\n  fill: #00a1b2;\r\n  transition: transform .35s ease-in-out;\r\n  transition-delay: 1s;\r\n  cursor: pointer;\r\n}\r\n\r\n.scrolltop[_ngcontent-%COMP%] {\r\n  transform: rotate(180deg);\r\n}\r\n\r\n@media (max-width: 440px) {\r\n  .scroll[_ngcontent-%COMP%] {\r\n    background: #e0e0e0b8;\r\n    border: 1px solid #45464626\r\n  }\r\n\r\n  .heroes[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .heroes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    max-width: 200px;\r\n  }\r\n\r\n  .flex[_ngcontent-%COMP%]   .add-icon[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n  }\r\n}\r\n\r\n.add-icon[_ngcontent-%COMP%], .delete-icon[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 20px;\r\n  height: 20px;\r\n  margin-right: 4px;\r\n  margin-top: 5px;\r\n  vertical-align: top;\r\n}\r\n\r\n.add-icon[_ngcontent-%COMP%] {\r\n  fill: white;\r\n}\r\n\r\n.delete-icon[_ngcontent-%COMP%] {\r\n  fill: #00a1b2;\r\n}\r\n\r\n.delete-icon[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\n.button-item[_ngcontent-%COMP%] {\r\n  background: #00a1b2;\r\n  border-color: #00a1b2;\r\n  color: #fff;\r\n}\r\n\r\n.button-item[_ngcontent-%COMP%]:hover {\r\n  background: #00848e;\r\n  border-color: #00848e;\r\n}\r\n\r\ndt-row[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n}\r\n\r\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-family: 'Titillium Web', sans-serif;\r\n  font-size: 23px;\r\n  line-height: 42px;\r\n  font-weight: 100;\r\n  text-align: center;\r\n  height: 100%;\r\n}\r\n\r\nsection[_ngcontent-%COMP%] {\r\n  \r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-family: 'Titillium Web', sans-serif;\r\n  font-size: 23px;\r\n  line-height: 42px;\r\n  font-weight: 100;\r\n  text-align: center;\r\n  height: 100%;\r\n}\r\n\r\nsection[_ngcontent-%COMP%] {\r\n  \r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n\r\n\r\n.trash[_ngcontent-%COMP%] {\r\n  background: #00a1b2;\r\n  width: 16.5px;\r\n  height: 15px;\r\n  display: inline-block;\r\n  margin: 0 auto;\r\n  margin-top: 9px;\r\n  cursor: pointer;\r\n  position: relative;\r\n  -webkit-border-bottom-right-radius: 3px;\r\n  -webkit-border-bottom-left-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n}\r\n\r\n.trash[_ngcontent-%COMP%]:after {\r\n  position: absolute;\r\n  left: -24.5px;\r\n  right: 0;\r\n  bottom: -12.5px;\r\n  width: 75px;\r\n}\r\n\r\n.trash[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 3px;\r\n  background: #00a1b2;\r\n  top: -4.5px;\r\n  left: -2.5px;\r\n  right: -2.5px;\r\n\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n  transform: rotate(0deg);\r\n  transition: transform 250ms;\r\n  transform-origin: 19% 100%;\r\n}\r\n\r\n.trash[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 6.5px;\r\n  height: 1.75px;\r\n  background: #00a1b2;\r\n  top: -2.5px;\r\n\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n  transform: rotate(0deg);\r\n  transition: transform 250ms;\r\n  transform-origin: 19% 100%;\r\n  left: 6.75px;\r\n}\r\n\r\n.trash[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 1.75px;\r\n  height: 12.5px;\r\n  background: #fff;\r\n  display: block;\r\n  margin: 3.5px auto;\r\n  border-radius: 2.5px;\r\n}\r\n\r\n.trash[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:after {\r\n  content: '';\r\n  width: 1.75px;\r\n  height: 12.5px;\r\n  background: #fff;\r\n  position: absolute;\r\n  left: -4.5px;\r\n  border-radius: 2.5px;\r\n}\r\n\r\n.trash[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:before {\r\n  content: '';\r\n  width: 1.75px;\r\n  height: 12.5px;\r\n  background: #fff;\r\n  position: absolute;\r\n  right: -4.5px;\r\n  border-radius: 2.5px;\r\n}\r\n\r\n.trash[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\r\n  transform: rotate(-45deg);\r\n  transition: transform 250ms;\r\n}\r\n\r\ninput.ng-dirty.empty[_ngcontent-%COMP%]:not(:focus), .dt-input-invalid.ng-invalid.empty[_ngcontent-%COMP%]:not(:focus) {\r\n  border: 1px solid red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHluYW1pYy10YWJsZS9keW5hbWljLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFFbEIsNkNBQTZDO0VBQzdDLGFBQWE7RUFDYiw4Q0FBOEM7RUFDOUMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFFYixzQ0FBc0M7RUFDdEMsb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtJQUNyQjtFQUNGOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBOzs7R0FHRzs7QUFFSDtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsdUNBQXVDO0VBQ3ZDLHNDQUFzQztFQUN0QywrQkFBK0I7RUFDL0IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixRQUFRO0VBQ1IsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTs7RUFFYiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osY0FBYztFQUNkLG1CQUFtQjtFQUNuQixXQUFXOztFQUVYLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIsWUFBWTtBQUNkOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2R5bmFtaWMtdGFibGUvZHluYW1pYy10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZHQtdGFibGUtc2VhcmNoIHtcclxuICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxuLmhlcm9lc19jb250YWluZXIge1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcblxyXG4uaGVyb19pbnB1dCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uaW5saW5lLWZsZXgge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG4uZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGN1cnNvcjogaGFuZDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xyXG59XHJcblxyXG5idXR0b24uZGVsZXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA0cHggMTBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbmJ1dHRvbi5kZWxldGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YzUwNjE7XHJcbn1cclxuXHJcbi5pbmxpbmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmlubGluZSBpbnB1dCB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uaGVyb2VzX2NvbnRhaW5lciB7XHJcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNjN2JiNjM7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgxNCwgMzAsIDM3LCAuMTIpO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMTQsIDMwLCAzNywgLjEyKTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE0LCAzMCwgMzcsIC4xMik7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5zY3JvbGwge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gIHotaW5kZXg6IDIwO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIGZpbGw6ICMwMGExYjI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjM1cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjM1cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zY3JvbGx0b3Age1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NDBweCkge1xyXG4gIC5zY3JvbGwge1xyXG4gICAgYmFja2dyb3VuZDogI2UwZTBlMGI4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQ1NDY0NjI2XHJcbiAgfVxyXG5cclxuICAuaGVyb2VzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmhlcm9lcyBhIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmZsZXggLmFkZC1pY29uIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmFkZC1pY29uLFxyXG4uZGVsZXRlLWljb24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbi5hZGQtaWNvbiB7XHJcbiAgZmlsbDogd2hpdGU7XHJcbn1cclxuXHJcbi5kZWxldGUtaWNvbiB7XHJcbiAgZmlsbDogIzAwYTFiMjtcclxufVxyXG5cclxuLmRlbGV0ZS1pY29uOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcblxyXG4uYnV0dG9uLWl0ZW0ge1xyXG4gIGJhY2tncm91bmQ6ICMwMGExYjI7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDBhMWIyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYnV0dG9uLWl0ZW06aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwMDg0OGU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA4NDhlO1xyXG59XHJcblxyXG5kdC1yb3c6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYm9keSxcclxuaHRtbCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgLyogYmFja2dyb3VuZDogI2RjZTdlYjsgKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5ib2R5LFxyXG5odG1sIHtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICAvKiBiYWNrZ3JvdW5kOiAjZGNlN2ViOyAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIC5kdC10YWJsZS1pbnRlcmFjdGl2ZS1yb3dzOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMDBhMWIyMjk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59ICovXHJcblxyXG4udHJhc2gge1xyXG4gIGJhY2tncm91bmQ6ICMwMGExYjI7XHJcbiAgd2lkdGg6IDE2LjVweDtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDlweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcclxuICAtd2Via2l0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLnRyYXNoOmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTI0LjVweDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IC0xMi41cHg7XHJcbiAgd2lkdGg6IDc1cHg7XHJcbn1cclxuXHJcbi50cmFzaCBzcGFuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgYmFja2dyb3VuZDogIzAwYTFiMjtcclxuICB0b3A6IC00LjVweDtcclxuICBsZWZ0OiAtMi41cHg7XHJcbiAgcmlnaHQ6IC0yLjVweDtcclxuXHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDE5JSAxMDAlO1xyXG59XHJcblxyXG4udHJhc2ggc3BhbjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA2LjVweDtcclxuICBoZWlnaHQ6IDEuNzVweDtcclxuICBiYWNrZ3JvdW5kOiAjMDBhMWIyO1xyXG4gIHRvcDogLTIuNXB4O1xyXG5cclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXM7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTklIDEwMCU7XHJcbiAgbGVmdDogNi43NXB4O1xyXG59XHJcblxyXG5cclxuLnRyYXNoIGkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMS43NXB4O1xyXG4gIGhlaWdodDogMTIuNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAzLjVweCBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIuNXB4O1xyXG59XHJcblxyXG4udHJhc2ggaTphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDEuNzVweDtcclxuICBoZWlnaHQ6IDEyLjVweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAtNC41cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMi41cHg7XHJcbn1cclxuXHJcbi50cmFzaCBpOmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDEuNzVweDtcclxuICBoZWlnaHQ6IDEyLjVweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogLTQuNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIuNXB4O1xyXG59XHJcblxyXG4udHJhc2g6aG92ZXIgc3BhbiB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXM7XHJcbn1cclxuXHJcbmlucHV0Lm5nLWRpcnR5LmVtcHR5Om5vdCg6Zm9jdXMpLCAuZHQtaW5wdXQtaW52YWxpZC5uZy1pbnZhbGlkLmVtcHR5Om5vdCg6Zm9jdXMpIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('table', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    transform: 'translateX(0)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    transform: 'translateX(100px)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => hide', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(1400, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                            transform: 'translateX(0px)',
                            opacity: 1,
                            offset: 0
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                            transform: 'translateX(20px)',
                            opacity: 0.9,
                            offset: 0.3
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                            transform: 'translateX(35px)',
                            opacity: 0.7,
                            offset: 0.5
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                            transform: 'translateX(50px)',
                            opacity: 0.5,
                            offset: 0.7
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                            transform: 'translateX(100px)',
                            opacity: 0,
                            offset: 1
                        })
                    ]))
                ]),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dynamic-table',
                templateUrl: './dynamic-table.component.html',
                styleUrls: ['./dynamic-table.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('table', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                            transform: 'translateX(0)'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                            transform: 'translateX(100px)'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => hide', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(1400, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                    transform: 'translateX(0px)',
                                    opacity: 1,
                                    offset: 0
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                    transform: 'translateX(20px)',
                                    opacity: 0.9,
                                    offset: 0.3
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                    transform: 'translateX(35px)',
                                    opacity: 0.7,
                                    offset: 0.5
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                    transform: 'translateX(50px)',
                                    opacity: 0.5,
                                    offset: 0.7
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                    transform: 'translateX(100px)',
                                    opacity: 0,
                                    offset: 1
                                })
                            ]))
                        ]),
                    ]),
                ]
            }]
    }], function () { return [{ type: _hero_service__WEBPACK_IMPORTED_MODULE_5__["HeroService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, { sortable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sortable', { read: _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtSort"], static: true }]
        }], pagination: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_dynatrace_barista_components_pagination__WEBPACK_IMPORTED_MODULE_1__["DtPagination"], { static: true }]
        }], heroesTable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['heroesTable']
        }], paginationList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_dynatrace_barista_components_pagination__WEBPACK_IMPORTED_MODULE_1__["DtPagination"]]
        }], tableSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtTableSearch"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/heroes/heroes.component.ts":
/*!********************************************!*\
  !*** ./src/app/heroes/heroes.component.ts ***!
  \********************************************/
/*! exports provided: HeroesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesComponent", function() { return HeroesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hero.service */ "./src/app/hero.service.ts");
/* harmony import */ var _dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dynamic-table/dynamic-table.component */ "./src/app/dynamic-table/dynamic-table.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _scrolling_scrolling_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scrolling/scrolling.component */ "./src/app/scrolling/scrolling.component.ts");
/* harmony import */ var _dashboard_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard/loading/loading.component */ "./src/app/dashboard/loading/loading.component.ts");







const _c0 = ["heroesContainer"];
function HeroesComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeroesComponent {
    constructor(heroService) {
        this.heroService = heroService;
    }
    ngOnInit() { }
}
HeroesComponent.ɵfac = function HeroesComponent_Factory(t) { return new (t || HeroesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"])); };
HeroesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroesComponent, selectors: [["app-heroes"]], viewQuery: function HeroesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.heroesContainer = _t.first);
    } }, decls: 8, vars: 2, consts: [[1, "heroes_container"], ["heroesContainer", ""], [4, "ngIf"], [3, "container"]], template: function HeroesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Heroes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-dynamic-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeroesComponent_div_6_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-scrolling", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.heroService.tryGetHeroes());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("container", _r67);
    } }, directives: [_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_2__["DynamicTableComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _scrolling_scrolling_component__WEBPACK_IMPORTED_MODULE_4__["ScrollingComponent"], _dashboard_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"]], styles: [".heroes_container[_ngcontent-%COMP%] {\r\n  margin: 0 10px;\r\n}\r\n\r\n\r\n\r\n.heroes_container[_ngcontent-%COMP%] {\r\n  border-top: 3px solid #c7bb63;\r\n  padding-top: 16px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, .12);\r\n  padding: 20px;\r\n  border-bottom: 1px solid rgba(14, 30, 37, .12);\r\n  background: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyb2VzL2hlcm9lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdURHO0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCRztBQUVIO0VBQ0UsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFFbEIsNkNBQTZDO0VBQzdDLGFBQWE7RUFDYiw4Q0FBOEM7RUFDOUMsaUJBQWlCO0FBQ25CO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkciLCJmaWxlIjoic3JjL2FwcC9oZXJvZXMvaGVyb2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVyb2VzX2NvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbn1cclxuLypcclxuLmhlcm9lcyB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uaGVyb2VzIGxpIHtcclxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XHJcbiAgbWFyZ2luOiAuNWVtO1xyXG4gIHBhZGRpbmc6IC4zZW0gMDtcclxuICBoZWlnaHQ6IDEuNmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmhlcm9lcyBsaTpob3ZlciB7XHJcbiAgY29sb3I6ICM2MDdEOEI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcclxuICBsZWZ0OiAuMWVtO1xyXG59XHJcblxyXG4uaGVyb2VzIGEge1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNi41cHgpO1xyXG59XHJcblxyXG4uaGVyb2VzIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDBhMWIyO1xyXG59XHJcblxyXG4uaGVyb2VzIC5iYWRnZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAuNmVtIDAuNmVtIDAgMC42ZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTFiMjtcclxuICBsaW5lLWhlaWdodDogMWVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEuNWVtO1xyXG4gIG1pbi13aWR0aDogMTZweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IC44ZW07XHJcbn1cclxuXHJcbi5oZXJvZXMgLmJhZGdlOmhvdmVyLFxyXG4uaGVyb2VzIGxpOmhvdmVyIC5iYWRnZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkOGI5NTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59ICovXHJcblxyXG4vKiAuaGVyb19pbnB1dCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uaW5saW5lLWZsZXgge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG4uZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGN1cnNvcjogaGFuZDtcclxufSAqL1xyXG4vKlxyXG5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XHJcbn1cclxuXHJcbmJ1dHRvbi5kZWxldGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuYnV0dG9uLmRlbGV0ZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljNTA2MTtcclxufVxyXG5cclxuLmlubGluZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uaW5saW5lIGlucHV0IHtcclxuICB3aWR0aDogNzUlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn0gKi9cclxuXHJcbi5oZXJvZXNfY29udGFpbmVyIHtcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgI2M3YmI2MztcclxuICBwYWRkaW5nLXRvcDogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDE0LCAzMCwgMzcsIC4xMik7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgxNCwgMzAsIDM3LCAuMTIpO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTQsIDMwLCAzNywgLjEyKTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLyogLmFkZC1pY29uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGZpbGw6IHdoaXRlO1xyXG59XHJcblxyXG4uYnV0dG9uLWl0ZW0ge1xyXG4gIGJhY2tncm91bmQ6ICMwMGExYjI7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDBhMWIyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYnV0dG9uLWl0ZW06aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwMDg0OGU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA4NDhlO1xyXG59ICovXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-heroes',
                templateUrl: './heroes.component.html',
                styleUrls: ['./heroes.component.css']
            }]
    }], function () { return [{ type: _hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"] }]; }, { heroesContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['heroesContainer']
        }] }); })();


/***/ }),

/***/ "./src/app/heroes/heroes.module.ts":
/*!*****************************************!*\
  !*** ./src/app/heroes/heroes.module.ts ***!
  \*****************************************/
/*! exports provided: HeroesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesModule", function() { return HeroesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _dynatrace_barista_components_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dynatrace/barista-components/pagination */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-pagination.js");
/* harmony import */ var _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dynatrace/barista-components/table */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-table.js");
/* harmony import */ var _heroes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./heroes.component */ "./src/app/heroes/heroes.component.ts");
/* harmony import */ var _dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dynamic-table/dynamic-table.component */ "./src/app/dynamic-table/dynamic-table.component.ts");
/* harmony import */ var _scrolling_scrolling_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scrolling/scrolling.component */ "./src/app/scrolling/scrolling.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");











class HeroesModule {
}
HeroesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HeroesModule });
HeroesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HeroesModule_Factory(t) { return new (t || HeroesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _dynatrace_barista_components_pagination__WEBPACK_IMPORTED_MODULE_3__["DtPaginationModule"],
            _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_4__["DtTableModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild([{ path: '', component: _heroes_component__WEBPACK_IMPORTED_MODULE_5__["HeroesComponent"] }]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeroesModule, { declarations: [_heroes_component__WEBPACK_IMPORTED_MODULE_5__["HeroesComponent"],
        _dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_6__["DynamicTableComponent"],
        _scrolling_scrolling_component__WEBPACK_IMPORTED_MODULE_7__["ScrollingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _dynatrace_barista_components_pagination__WEBPACK_IMPORTED_MODULE_3__["DtPaginationModule"],
        _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_4__["DtTableModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _heroes_component__WEBPACK_IMPORTED_MODULE_5__["HeroesComponent"],
                    _dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_6__["DynamicTableComponent"],
                    _scrolling_scrolling_component__WEBPACK_IMPORTED_MODULE_7__["ScrollingComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _dynatrace_barista_components_pagination__WEBPACK_IMPORTED_MODULE_3__["DtPaginationModule"],
                    _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_4__["DtTableModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild([{ path: '', component: _heroes_component__WEBPACK_IMPORTED_MODULE_5__["HeroesComponent"] }]),
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/scrolling/scrolling.component.ts":
/*!**************************************************!*\
  !*** ./src/app/scrolling/scrolling.component.ts ***!
  \**************************************************/
/*! exports provided: ScrollingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollingComponent", function() { return ScrollingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dynatrace/barista-components/icon */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-icon.js");




function ScrollingComponent_dt_icon_0_Template(rf, ctx) { if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dt-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollingComponent_dt_icon_0_Template_dt_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r99.toggleScroll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("scrolltop", !ctx_r98.isTop);
} }
class ScrollingComponent {
    constructor() {
        this.isTop = true;
    }
    handleScroll($event) {
        this.isTop = window.pageYOffset <= window.innerHeight / 3;
        this.isHidden = false;
        // console.log(`scrolled to ${this.isTop ? 'top' : 'bottom'}; \n isHidden: ${this.isHidden}`);
        // console.log(window.pageYOffset, $event);
    }
    ngOnInit() {
    }
    scrollToBottom() {
        window.scroll({
            top: this.container.scrollHeight,
            left: 0,
            behavior: 'smooth'
        });
        this.isTop = false;
        this.isHidden = false;
        // console.log(`scrolled to bottom`);
    }
    scrollToTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        this.isTop = true;
        this.isHidden = true;
        // console.log(`scrolled to top; is hidden`);
    }
    toggleScroll() {
        this.isTop ? this.scrollToBottom() : this.scrollToTop();
    }
}
ScrollingComponent.ɵfac = function ScrollingComponent_Factory(t) { return new (t || ScrollingComponent)(); };
ScrollingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScrollingComponent, selectors: [["app-scrolling"]], hostBindings: function ScrollingComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollingComponent_scroll_HostBindingHandler($event) { return ctx.handleScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { container: "container" }, decls: 1, vars: 1, consts: [["name", "dropdownopen", "class", "scroll", 3, "scrolltop", "click", 4, "ngIf"], ["name", "dropdownopen", 1, "scroll", 3, "click"]], template: function ScrollingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ScrollingComponent_dt_icon_0_Template, 1, 2, "dt-icon", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isHidden);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_2__["DtIcon"]], styles: [".scroll[_ngcontent-%COMP%] {\r\n  transform: rotate(0);\r\n  z-index: 20;\r\n  width: 40px;\r\n  height: 40px;\r\n  position: fixed;\r\n  bottom: 20px;\r\n  right: 20px;\r\n  fill: #00a1b2;\r\n  transition: transform .35s ease-in-out;\r\n  transition-delay: 1s;\r\n  cursor: pointer;\r\n}\r\n\r\n.scrolltop[_ngcontent-%COMP%] {\r\n  transform: rotate(180deg);\r\n}\r\n\r\n@media (max-width: 440px) {\r\n  .scroll[_ngcontent-%COMP%] {\r\n    background: #e0e0e0b8;\r\n    border: 1px solid #45464626\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Nyb2xsaW5nL3Njcm9sbGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFFYixzQ0FBc0M7RUFDdEMsb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtJQUNyQjtFQUNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zY3JvbGxpbmcvc2Nyb2xsaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICB6LWluZGV4OiAyMDtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMjBweDtcclxuICByaWdodDogMjBweDtcclxuICBmaWxsOiAjMDBhMWIyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMXM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2Nyb2xsdG9wIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDQwcHgpIHtcclxuICAuc2Nyb2xsIHtcclxuICAgIGJhY2tncm91bmQ6ICNlMGUwZTBiODtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NTQ2NDYyNlxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scrolling',
                templateUrl: './scrolling.component.html',
                styleUrls: ['./scrolling.component.css']
            }]
    }], function () { return []; }, { container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], handleScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=heroes-heroes-module.js.map