(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-sidebar-container style = \"height: 100vh\">\r\n    <!-- A sidebar -->\r\n    <ng-sidebar [mode]=\"'over'\"   [closeOnClickOutside]=\"true\" [(opened)]=\"isSideMenuOpen\">\r\n        <div class=\"wrapper\">\r\n            \r\n            <button type=\"button\" class=\"close cl-light\" aria-label=\"Close\" (click)=\"isSideMenuOpen =false\"> \r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n            <div class=\"ml-3 mt-0 p-0\">\r\n                    <span class=\"mr-2\"><a  href=\"/\"class=\"text-hide flag-icon it\" >Italiano</a></span>\r\n                    <span class=\"mr-2\"><a href=\"/en\" class=\"text-hide flag-icon en\" >English</a></span>\r\n            </div>\r\n            <a class=\"navbar-brand pt-0 text-aplight\"  href=\"/\"><i class =\"ap-icon-logo bigg\"></i></a>  \r\n            <ul class=\"nav flex-column\">\r\n                <ng-container *ngFor=\"let mainEntry of MenuEntries; let i = index\">\r\n                        <li class=\"nav-item\"><a \r\n                            [ngClass]= \"getAnchorClass(mainEntry.value)\"\r\n                            (click)=\"setActiveMenuEntriess(i, -1)\"\r\n                            >{{mainEntry.value.defName}}</a></li>\r\n                        \r\n                        \r\n                        <ul class=\"nav flex-column second-level\" *ngIf=\"mainEntry.children?.length >0\">\r\n                                \r\n                                    \r\n                                <li class=\"nav-item\"  *ngFor=\"let subEntry of mainEntry.children; let j = index\">\r\n                                    \r\n                                    <a \r\n                                    [ngClass]= \"getAnchorClass(subEntry)\"\r\n                                    (click)=\"setActiveMenuEntriess(i, j)\"\r\n                                    >\r\n                                        <span><i class=\"material-icons\" *ngIf=\"canGPHBeProcessed\"   [class.hidden]= \"subEntry.isExclusive  || !isEntryActive(subEntry)\">check</i></span> \r\n                                        {{subEntry.defName}}\r\n                                    </a>\r\n                                </li>\r\n                        </ul>\r\n                </ng-container>\r\n               \r\n            </ul>\r\n        </div>\r\n\r\n        <div id=\"bottom\" class=\"row ml-0 mr-0 text-center\">\r\n\r\n            <div class=\"col-12  align-self-end h4\">\r\n                <a class=\"text-dark mr-2\" href=\"https://www.facebook.com/abbadiapasseggiate\" target=\"_blank\"><i class =\"ap-icon-facebook\"></i></a>\r\n                <a class=\"text-dark\" href=\"https://twitter.com/abbadiapass\" target=\"_blank\"><i class =\"ap-icon-twitter\"></i></a>\r\n                <a class=\"text-dark ml-2\" href=\"https://www.instagram.com/abbadiapasseggiate/\" target=\"_blank\"><i class =\"ap-icon-instagram\"></i></a>\r\n            </div>\r\n            <div class=\"col-12  align-self-end \">\r\n            Copyright &copy; 2019 AbbadiaPasseggiate\r\n            </div>\r\n        </div>\r\n    </ng-sidebar>\r\n\r\n\r\n    <div ng-sidebar-content class=\".container-fluid\">\r\n        <div  [class.obscure]=\"isSideMenuOpen\"></div>\r\n        <router-outlet></router-outlet>\r\n        <router-outlet name=\"luoghiPopup\"></router-outlet>\r\n    </div>\r\n\r\n</ng-sidebar-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/image-grid/image-grid.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/image-grid/image-grid.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row masonry-grid\">\n    <div class=\"col  masonry-column\" *ngFor =\"let col of colsInfo; let i = index\">\n      <div *ngFor =\"let img of col; let j = index\">\n        <img [src]=\"img | imgUrl\"  class=\"img-fluid my-thumb\" alt=\"{{img?.title}}\" (click)=\"openLightBox(i, j)\"> \n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modal-alert/modal-alert.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modal-alert/modal-alert.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\" id=\"modal-title\">Attenzione!</h4>\n  <button type=\"button\" class=\"close\" aria-describedby=\"modal-title\" (click)=\"modal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <p>Funzionalità al momento non disponibile</p>\n  <p><strong>Verrai reindirizzato sul vecchio sito. Continuare?</strong></p>\n  \n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"modal.dismiss('cancel click')\">Cancel</button>\n  <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"modal.close('Ok click')\">Ok</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/my-map/map-overlay/location-preview/location-preview.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-map/map-overlay/location-preview/location-preview.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center\" *ngIf=\"!luogoInfos\">\n  <div class=\"spinner-grow  text-primary\" role=\"status\">\n    <span class=\"sr-only\">Caricamento...</span>\n  </div>\n</div>\n\n<div *ngIf=\"luogoInfos && luogoInfos.mainData && luogoInfos.mainData  && luogoInfos.mainData.description && luogoInfos.mainData.description.length> 0 \">\n\n  <p *ngFor=\"let desc of descData?.descriptions; let i = index\">\n    \n    <span *ngFor=\"let subdesc of desc; let j = index\">\n      {{subdesc}}\n      <a class =\"text-primary \" *ngIf= \"j<desc.length -1\" (click)=onDescLinkClick(descData.descRefs[i][j])> {{descData.descRefs[i][j].name}}</a>\n    </span>\n\n  </p>\n\n  \n</div> \n<ng-container *ngIf=\"luogoInfos && luogoInfos.trailRefs && luogoInfos.trailRefs.length>0\">\n  <h5>Come raggiungerlo?</h5>\n  <div>\n    <ul>\n      <li *ngFor=\"let trailref of luogoInfos?.trailRefs\">\n        <a class=\"text-primary\" (click)=\"this.onDescLinkClick(trailref)\">{{trailref.name}} </a>\n      </li>\n    </ul>\n      \n  </div>\n</ng-container>\n\n\n\n<app-image-grid  *ngIf=\"luogoInfos && luogoInfos.imagesData\" [imageInfo] =\"luogoInfos?.imagesData\" [maxCols]=\"2\" [useLightBox]=\"true\"></app-image-grid>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/my-map/map-overlay/map-overlay.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-map/map-overlay/map-overlay.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"modal-dialog \tmodal-lg modal-dialog-scrollable m-0\" role=\"document\">\r\n  <div class=\"modal-content\" [class.expanded]=\"expanded\">\r\n    <div class=\"modal-header\" (click)=\"expand()\">\r\n      <h4 class=\"modal-title\">{{previewResponse?.mainData.name}}</h4>\r\n\r\n      <div class=\"btn-group\" role=\"group\" >\r\n     \r\n        <button type=\"button\" class=\"close\" (click)=\"closePopup($event)\" aria-label=\"Close\"> \r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-body\" scrollSpy [querySelector]=\"'p[scroll-inspect]'\" (sectionChange)=\"onParChange($event)\">\r\n\r\n      <app-location-preview *ngIf=\"previewResponse?.mainData?.type == 1\" [luogoInfos] = \"previewResponse\"></app-location-preview>\r\n      <app-trail-preview *ngIf=\"previewResponse?.mainData?.type == 2\" [trailInfos] = \"previewResponse\"></app-trail-preview>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"closePopup($event)\"    >Close</button>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/my-map/map-overlay/trail-preview/trail-preview.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-map/map-overlay/trail-preview/trail-preview.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"jumbotron mt-0 text-center\">\r\n\r\n    <div  class=\"container\" *ngIf=\"trailInfos && trailInfos.mainData\">\r\n        <p *ngFor=\"let par of trailInfos.mainData.pars; let i  = index\"> \r\n            <span *ngFor=\"let subdesc of par.descriptions; let j = index\">\r\n                {{subdesc}}\r\n                <a class =\"text-primary \" (click) = \"onRefClick(par.descRefs[j])\"  *ngIf= \"j<par.descriptions.length -1\"> {{par.descRefs[j].name}}</a>\r\n            </span>\r\n        </p>\r\n    </div>\r\n\r\n</section>\r\n\r\n<div *ngIf=\"trailInfos && trailInfos.pars\" >\r\n    <p *ngFor=\"let par of trailInfos.pars; let i  = index\" [id]=\"'par_' + par.parIndex\" [class.emph] =\"isParSelected(par)\" scroll-inspect> \r\n        <span *ngFor=\"let subdesc of par.descriptions; let j = index\">\r\n            {{subdesc}}\r\n            <a class =\"text-primary \" (click) = \"onRefClick(par.descRefs[j])\" *ngIf= \"j<par.descriptions.length -1\"> {{par.descRefs[j].name}}</a>\r\n        </span>\r\n    </p>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/my-map/map-redirect-with-params/map-redirect-with-params.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-map/map-redirect-with-params/map-redirect-with-params.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  map-redirect-with-params works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/my-map/my-map.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-map/my-map.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"map\" class=\"p-0\"></div>\r\n\r\n\r\n<button  #geolocBtn class=\"ap-control my-geoloc btn \"     \r\n    [class.btn-outline-danger]=\"geolocControl.geolocationData.status==0\"   \r\n    [class.btn-outline-warning]=\"geolocControl.geolocationData.status==2\"   \r\n    [class.btn-outline-success]=\"geolocControl.geolocationData.status==1\"  \r\n    [class.tras02]=\"true\" \r\n    (click)=\"geolocControl.toggleLocation()\" > <span><i class=\"material-icons\">\r\n        my_location\r\n        </i></span></button>\r\n\r\n\r\n<button  class=\"ap-control my-menu btn btn-outline-aplight tras02 \" (click)= \"onMenuClick()\">\r\n    <span><i class=\"material-icons\">\r\n    menu\r\n    </i></span></button>\r\n\r\n\r\n\r\n\r\n\r\n<div  #attributionCtrl class=\"\" >\r\n    <button type=\"button\" class=\"ap-control my-attribution btn btn-outline-aplight tras02\"  [hidden]=\"attributionControl.collapsed\" (click)=\"attributionControl.toggleCollapsed()\"><span ><i class=\"material-icons\"> info </i></span></button>\r\n    <button type=\"button\" class=\"ap-control my-attribution btn btn-outline-aplight tras02\"  [hidden]=\"!attributionControl.collapsed\"  (click)=\"attributionControl.toggleCollapsed()\"><span ><i class=\"material-icons\"> chevron_left </i></span></button>\r\n    <div [ngbCollapse]= \"!attributionControl.collapsed\" class= \"ap-control my-attribution card\">\r\n        <span *ngFor= \"let attr of attributionControl.attribution\" [innerHTML]=\"attr\"></span>\r\n    </div>\r\n</div>\r\n\r\n<div  #LayerCtrl class=\"\" >\r\n    <button type=\"button\" class=\"ap-control my-layer-ctrl btn btn-outline-aplight tras02\"  [hidden]=\"layerControl.collapsed\" (click)=\"layerControl.toggleCollapsed()\"><span ><i class=\"material-icons\"> layers </i></span></button>\r\n    <button type=\"button\" class=\"ap-control my-layer-ctrl btn btn-outline-aplight tras02\"  [hidden]=\"!layerControl.collapsed\"  (click)=\"layerControl.toggleCollapsed()\"><span ><i class=\"material-icons\"> chevron_left </i></span></button>\r\n    <div [ngbCollapse]= \"!layerControl.collapsed\" class= \"ap-control my-layer-ctrl card\">\r\n        <div class=\"row no-gutters\" >\r\n            <div class=\"col layer-prew\" *ngFor=\"let opt of layerControl.visibleLayersKeys\" >\r\n                    <a  (click)=\"layerControl.setLayerVisible(opt)\"  >\r\n                        <img  [src]=\"'assets/img/thumb/' + opt + '.jpg'\" class=\"img-thumbnail\" [class.border-primary]=\"layerControl.activeLayerKey==opt\"  > \r\n                    </a>\r\n            </div>\r\n        </div>\r\n        \r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/photo/photo.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/photo/photo.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-dark\">\n  <button  class=\"btn btn-outline-aplight \" (click)= \"onMenuClick()\">\n    <span><i class=\"material-icons\">menu</i></span>\n  </button>\n</nav>\n<main role=\"main\">\n\n  <section class=\"jumbotron mb-0 text-center\">\n    <div class=\"container\">\n      <h1 class=\"jumbotron-heading\">Galleria Fotografica</h1>\n      <p class=\"lead text-muted\">In corrispondenza del suo primo anniversario, Abbadia Passeggiate innaugura questa galleria immagini contenente le migliori foto delle (e dalle) nostre montagne.</p>\n\n      <p>Tutte le immagini, salvo dove indicato diversamente, provengono dalla collezione di Abbadia Passeggiate.</p>\n      <!-- <p>\n        <a href=\"#\" class=\"btn btn-primary my-2\">Main call to action</a>\n        <a href=\"#\" class=\"btn btn-secondary my-2\">Secondary action</a>\n      </p> -->\n    </div>\n  </section>\n\n  <div class=\"album py-5 bg-light\">\n    <div class=\"container\">\n\n      <div class=\"row\" >\n        \n        <div class=\"col-md-4\"   *ngFor=\"let photo of photos\">\n          <div class=\"card mb-4 box-shadow\" >\n            <img class=\"card-img-top\" src =\"..\\..\\assets\\icons\\icons\\ap\\logo.svg\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">Descrizione della bellissima immagine {{photo}}</p>\n              <div class=\"d-flex justify-content-between align-items-center\">\n                <div class=\"btn-group\">\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>\n                </div>\n                <small class=\"text-muted\">9 mins</small>\n              </div>\n            </div>\n          </div>\n        </div>\n        \n        \n      </div>\n    </div>\n  </div>\n\n</main>\n\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _photo_photo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photo/photo.component */ "./src/app/photo/photo.component.ts");




var appRoutes = [
    { path: '',
        redirectTo: '/map-default',
        pathMatch: 'full' },
    {
        path: 'photo',
        component: _photo_photo_component__WEBPACK_IMPORTED_MODULE_3__["PhotoComponent"]
    }
    //   { path: '**', component: PageNotFoundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                )
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flag-icon {\n  display: inline-block;\n  background: none;\n  width: 22px;\n  height: 20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.flag-icon.it {\n  background-image: url('it.svg');\n}\n\n.flag-icon.en {\n  background-image: url('en.svg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxQYW9sb1xcU3ZpbHVwcG9cXEFiYmFkaWFQYXNzZWdnaWF0ZVxcQWJiYWRpYVBhc3NlZ2dpYXRlL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNBSjs7QURHQTtFQUVJLCtCQUFBO0FDREo7O0FESUE7RUFFSSwrQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsYWctaWNvblxyXG57XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB3aWR0aDogMjJweDsgXHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmZsYWctaWNvbi5pdFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2Fzc2V0cy9pY29ucy9pY29ucy9hcC9pdC5zdmcnKTtcclxufVxyXG5cclxuLmZsYWctaWNvbi5lblxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2Fzc2V0cy9pY29ucy9pY29ucy9hcC9lbi5zdmcnKTtcclxufSIsIi5mbGFnLWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5mbGFnLWljb24uaXQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvaWNvbnMvaWNvbnMvYXAvaXQuc3ZnXCIpO1xufVxuXG4uZmxhZy1pY29uLmVuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ljb25zL2ljb25zL2FwL2VuLnN2Z1wiKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_communication_sidebar_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/communication/sidebar-data.service */ "./src/app/services/communication/sidebar-data.service.ts");
/* harmony import */ var _om_menu_entry_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./om/menu-entry-data */ "./src/app/om/menu-entry-data.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(sidebarDataService, activateRoute, router) {
        this.sidebarDataService = sidebarDataService;
        this.activateRoute = activateRoute;
        this.router = router;
        /**
         * Added to skip some view changes on the loading of the page, that are triggered by some modification in sidebarDataServices.
         * These changes can lead to angular exceptions (ExpressionChangedAfterItHasBeenCheckedError)
         */
        this.canGPHBeProcessed = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sidebarDataService.isOpen$.subscribe(function (val) {
            if (!_this.canGPHBeProcessed && val)
                _this.canGPHBeProcessed = true;
            _this.isSideMenuOpen = val;
        });
    };
    Object.defineProperty(AppComponent.prototype, "MenuEntries", {
        get: function () {
            return this.sidebarDataService.menuEntries;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.isEntryActive = function (entry) {
        return entry.status == _om_menu_entry_data__WEBPACK_IMPORTED_MODULE_3__["MenuEntryStatus"].Active;
    };
    AppComponent.prototype.isEntryDefault = function (entry) {
        return entry.status == _om_menu_entry_data__WEBPACK_IMPORTED_MODULE_3__["MenuEntryStatus"].Default;
    };
    AppComponent.prototype.isEntryDisabled = function (entry) {
        return entry.status == _om_menu_entry_data__WEBPACK_IMPORTED_MODULE_3__["MenuEntryStatus"].Disable;
    };
    AppComponent.prototype.setActiveMenuEntriess = function (selectedMain, selectedSub) {
        this.sidebarDataService.setActiveEntries(selectedMain, selectedSub);
    };
    AppComponent.prototype.getAnchorClass = function (entry) {
        if (!this.canGPHBeProcessed)
            return "";
        var result;
        if (this.isEntryDisabled(entry))
            result = "nav-link disabled";
        else if (this.isEntryDefault(entry))
            result = "nav-link text-aplight";
        else if (this.isEntryActive(entry))
            result = "text-aplight nav-link active";
        return result;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_communication_sidebar_data_service__WEBPACK_IMPORTED_MODULE_2__["SidebarDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _my_map_my_map_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-map/my-map-routing.module */ "./src/app/my-map/my-map-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-lightbox */ "./node_modules/ngx-lightbox/index.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-sidebar */ "./node_modules/ng-sidebar/lib/index.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng_sidebar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-scrollbar */ "./node_modules/ngx-scrollbar/fesm5/ngx-scrollbar.js");
/* harmony import */ var _services_locations_locations_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/locations/locations.service */ "./src/app/services/locations/locations.service.ts");
/* harmony import */ var _services_trails_trails_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/trails/trails.service */ "./src/app/services/trails/trails.service.ts");
/* harmony import */ var _services_communication_preview_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/communication/preview.service */ "./src/app/services/communication/preview.service.ts");
/* harmony import */ var _services_communication_sidebar_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/communication/sidebar-data.service */ "./src/app/services/communication/sidebar-data.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _my_map_my_map_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./my-map/my-map.component */ "./src/app/my-map/my-map.component.ts");
/* harmony import */ var _my_map_map_overlay_map_overlay_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./my-map/map-overlay/map-overlay.component */ "./src/app/my-map/map-overlay/map-overlay.component.ts");
/* harmony import */ var _pipes_img_url_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/img-url.pipe */ "./src/app/pipes/img-url.pipe.ts");
/* harmony import */ var _image_grid_image_grid_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./image-grid/image-grid.component */ "./src/app/image-grid/image-grid.component.ts");
/* harmony import */ var _modal_alert_modal_alert_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modal-alert/modal-alert.component */ "./src/app/modal-alert/modal-alert.component.ts");
/* harmony import */ var _photo_photo_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./photo/photo.component */ "./src/app/photo/photo.component.ts");
/* harmony import */ var _my_map_map_redirect_with_params_map_redirect_with_params_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./my-map/map-redirect-with-params/map-redirect-with-params.component */ "./src/app/my-map/map-redirect-with-params/map-redirect-with-params.component.ts");
/* harmony import */ var _my_map_map_overlay_location_preview_location_preview_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./my-map/map-overlay/location-preview/location-preview.component */ "./src/app/my-map/map-overlay/location-preview/location-preview.component.ts");
/* harmony import */ var _my_map_map_overlay_trail_preview_trail_preview_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./my-map/map-overlay/trail-preview/trail-preview.component */ "./src/app/my-map/map-overlay/trail-preview/trail-preview.component.ts");
/* harmony import */ var _directives_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./directives/scroll-spy.directive */ "./src/app/directives/scroll-spy.directive.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _my_map_my_map_component__WEBPACK_IMPORTED_MODULE_15__["MyMapComponent"],
                _my_map_map_overlay_map_overlay_component__WEBPACK_IMPORTED_MODULE_16__["MapOverlayComponent"],
                _pipes_img_url_pipe__WEBPACK_IMPORTED_MODULE_17__["ImgUrlPipe"],
                _image_grid_image_grid_component__WEBPACK_IMPORTED_MODULE_18__["ImageGridComponent"],
                _modal_alert_modal_alert_component__WEBPACK_IMPORTED_MODULE_19__["ModalAlertComponent"],
                _photo_photo_component__WEBPACK_IMPORTED_MODULE_20__["PhotoComponent"],
                _my_map_map_redirect_with_params_map_redirect_with_params_component__WEBPACK_IMPORTED_MODULE_21__["MapRedirectWithParamsComponent"],
                _my_map_map_overlay_location_preview_location_preview_component__WEBPACK_IMPORTED_MODULE_22__["LocationPreviewComponent"],
                _my_map_map_overlay_trail_preview_trail_preview_component__WEBPACK_IMPORTED_MODULE_23__["TrailPreviewComponent"],
                _directives_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_24__["ScrollSpyDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _my_map_my_map_routing_module__WEBPACK_IMPORTED_MODULE_4__["MyMapRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                ngx_lightbox__WEBPACK_IMPORTED_MODULE_7__["LightboxModule"],
                ng_sidebar__WEBPACK_IMPORTED_MODULE_8__["SidebarModule"].forRoot(),
                ngx_scrollbar__WEBPACK_IMPORTED_MODULE_9__["NgScrollbarModule"]
            ],
            entryComponents: [_modal_alert_modal_alert_component__WEBPACK_IMPORTED_MODULE_19__["ModalAlertComponent"]],
            providers: [_services_locations_locations_service__WEBPACK_IMPORTED_MODULE_10__["LocationsService"],
                _services_trails_trails_service__WEBPACK_IMPORTED_MODULE_11__["TrailsService"],
                _services_communication_preview_service__WEBPACK_IMPORTED_MODULE_12__["PreviewService"],
                _services_communication_sidebar_data_service__WEBPACK_IMPORTED_MODULE_13__["SidebarDataService"],
                _pipes_img_url_pipe__WEBPACK_IMPORTED_MODULE_17__["ImgUrlPipe"],
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"], useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_25__["environment"].locale }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/directives/scroll-spy.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/directives/scroll-spy.directive.ts ***!
  \****************************************************/
/*! exports provided: ScrollSpyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollSpyDirective", function() { return ScrollSpyDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScrollSpyDirective = /** @class */ (function () {
    function ScrollSpyDirective(_el) {
        this._el = _el;
        this.useOffset = false;
        this.offset = 0;
        this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ScrollSpyDirective.prototype.onScroll = function (event) {
        var currentSection;
        var children = this._el.nativeElement.children;
        var scrollTop = event.target.scrollTop;
        var offset = this.useOffset ? this.offset : this.getOffset(event.target);
        var parentOffset = event.target.offsetTop;
        for (var i = 0; i < children.length; i++) {
            var element = children[i];
            var selectedEls = element.querySelectorAll(this.querySelector);
            for (var j = 0; j < selectedEls.length; j++) {
                var selectedElement = selectedEls[j];
                if ((selectedElement.offsetTop - parentOffset) <= scrollTop + offset) {
                    currentSection = selectedEls[j].id;
                }
            }
        }
        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
        }
    };
    ScrollSpyDirective.prototype.getScrollPercentage = function (targetEl) {
        if (targetEl.scrollHeight - targetEl.offsetHeight == 0)
            return 0;
        return targetEl.scrollTop / (targetEl.scrollHeight - targetEl.offsetHeight);
    };
    ScrollSpyDirective.prototype.getOffset = function (targetEl) {
        return this.getScrollPercentage(targetEl) * targetEl.offsetHeight;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ScrollSpyDirective.prototype, "querySelector", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ScrollSpyDirective.prototype, "useOffset", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ScrollSpyDirective.prototype, "offset", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ScrollSpyDirective.prototype, "sectionChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('scroll', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ScrollSpyDirective.prototype, "onScroll", null);
    ScrollSpyDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[scrollSpy]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ScrollSpyDirective);
    return ScrollSpyDirective;
}());



/***/ }),

/***/ "./src/app/image-grid/image-grid.component.scss":
/*!******************************************************!*\
  !*** ./src/app/image-grid/image-grid.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".masonry-column {\n  padding: 0 1px;\n}\n\n.masonry-grid > div .my-thumb {\n  margin: 5px 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1hZ2UtZ3JpZC9DOlxcVXNlcnNcXFBhb2xvXFxTdmlsdXBwb1xcQWJiYWRpYVBhc3NlZ2dpYXRlXFxBYmJhZGlhUGFzc2VnZ2lhdGUvc3JjXFxhcHBcXGltYWdlLWdyaWRcXGltYWdlLWdyaWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ltYWdlLWdyaWQvaW1hZ2UtZ3JpZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlLWdyaWQvaW1hZ2UtZ3JpZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXNvbnJ5LWNvbHVtbiB7XHJcbiAgICBwYWRkaW5nOiAwIDFweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hc29ucnktZ3JpZCA+IGRpdiAubXktdGh1bWIge1xyXG4gICAgbWFyZ2luOiA1cHggMXB4O1xyXG4gIH1cclxuICAiLCIubWFzb25yeS1jb2x1bW4ge1xuICBwYWRkaW5nOiAwIDFweDtcbn1cblxuLm1hc29ucnktZ3JpZCA+IGRpdiAubXktdGh1bWIge1xuICBtYXJnaW46IDVweCAxcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/image-grid/image-grid.component.ts":
/*!****************************************************!*\
  !*** ./src/app/image-grid/image-grid.component.ts ***!
  \****************************************************/
/*! exports provided: ImageGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageGridComponent", function() { return ImageGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pipes_img_url_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/img-url.pipe */ "./src/app/pipes/img-url.pipe.ts");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-lightbox */ "./node_modules/ngx-lightbox/index.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_3__);




var ImageGridComponent = /** @class */ (function () {
    function ImageGridComponent(lightBox, imgPipe) {
        this.lightBox = lightBox;
        this.imgPipe = imgPipe;
    }
    ImageGridComponent.prototype.ngOnInit = function () {
    };
    ImageGridComponent.prototype.ngOnChanges = function (changes) {
        this.redrawGrid(this.maxCols);
    };
    ImageGridComponent.prototype.redrawGrid = function (maxColNumber) {
        var _this = this;
        this.colsInfo = [];
        if (!this.imageInfo || this.imageInfo.length == 0) {
            return;
        }
        for (var i = 0; i < maxColNumber; i++) {
            this.colsInfo[i] = [];
        }
        this.imageInfo.forEach(function (img, i) {
            _this.colsInfo[i % maxColNumber].push(img);
        });
        var emptyIndex = this.colsInfo.findIndex(function (col) { return col.length == 0; });
        if (emptyIndex != -1)
            this.colsInfo.splice(emptyIndex, maxColNumber - emptyIndex - 1);
        this.maxCols = maxColNumber;
    };
    ImageGridComponent.prototype.openLightBox = function (colindex, rowindex) {
        var _this = this;
        if (!this.useLightBox)
            return;
        // open lightbox
        var index = rowindex * this.maxCols + colindex;
        var lightBoxAlbum = this.imageInfo.map(function (image) {
            var desc = "<h5>" + image.title + "</h5>";
            if (image.description != null)
                image.description.forEach(function (descPar) { return desc += "<p>" + descPar + "</p> "; });
            return {
                src: _this.imgPipe.transform(image, true),
                caption: desc,
                thumb: _this.imgPipe.transform(image, false)
            };
        });
        this.lightBox.open(lightBoxAlbum, index);
    };
    ImageGridComponent.prototype.onResize = function (event) {
        var innerWidth = window.innerWidth;
        var newColNum = innerWidth < 576 ? 1 : this.maxCols;
        if (newColNum != this.maxCols) {
            this.redrawGrid(newColNum);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ImageGridComponent.prototype, "imageInfo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ImageGridComponent.prototype, "maxCols", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ImageGridComponent.prototype, "useLightBox", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ImageGridComponent.prototype, "onResize", null);
    ImageGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-grid',
            template: __webpack_require__(/*! raw-loader!./image-grid.component.html */ "./node_modules/raw-loader/index.js!./src/app/image-grid/image-grid.component.html"),
            styles: [__webpack_require__(/*! ./image-grid.component.scss */ "./src/app/image-grid/image-grid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_lightbox__WEBPACK_IMPORTED_MODULE_3__["Lightbox"],
            _pipes_img_url_pipe__WEBPACK_IMPORTED_MODULE_2__["ImgUrlPipe"]])
    ], ImageGridComponent);
    return ImageGridComponent;
}());



/***/ }),

/***/ "./src/app/modal-alert/modal-alert.component.scss":
/*!********************************************************!*\
  !*** ./src/app/modal-alert/modal-alert.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsLWFsZXJ0L21vZGFsLWFsZXJ0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modal-alert/modal-alert.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modal-alert/modal-alert.component.ts ***!
  \******************************************************/
/*! exports provided: ModalAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAlertComponent", function() { return ModalAlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var ModalAlertComponent = /** @class */ (function () {
    function ModalAlertComponent(modal) {
        this.modal = modal;
    }
    ModalAlertComponent.prototype.ngOnInit = function () {
    };
    ModalAlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-alert',
            template: __webpack_require__(/*! raw-loader!./modal-alert.component.html */ "./node_modules/raw-loader/index.js!./src/app/modal-alert/modal-alert.component.html"),
            styles: [__webpack_require__(/*! ./modal-alert.component.scss */ "./src/app/modal-alert/modal-alert.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], ModalAlertComponent);
    return ModalAlertComponent;
}());



/***/ }),

/***/ "./src/app/my-map/api-key-bing.ts":
/*!****************************************!*\
  !*** ./src/app/my-map/api-key-bing.ts ***!
  \****************************************/
/*! exports provided: API_KEY_BING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_KEY_BING", function() { return API_KEY_BING; });
var API_KEY_BING = {
    key: 'Ai9-269FPOE2hv5jRs1OksKKe-XaEyr_TC_61-gmnVMyIz3kzp5YvL50vjj1KiiS',
};


/***/ }),

/***/ "./src/app/my-map/map-overlay/location-preview/location-preview.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/my-map/map-overlay/location-preview/location-preview.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LW1hcC9tYXAtb3ZlcmxheS9sb2NhdGlvbi1wcmV2aWV3L2xvY2F0aW9uLXByZXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/my-map/map-overlay/location-preview/location-preview.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/my-map/map-overlay/location-preview/location-preview.component.ts ***!
  \***********************************************************************************/
/*! exports provided: LocationPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPreviewComponent", function() { return LocationPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _om_loc_prev_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../om/loc-prev.response */ "./src/app/om/loc-prev.response.ts");
/* harmony import */ var _om_complex_description_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../om/complex-description-data */ "./src/app/om/complex-description-data.ts");
/* harmony import */ var _pipes_img_url_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pipes/img-url.pipe */ "./src/app/pipes/img-url.pipe.ts");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-lightbox */ "./node_modules/ngx-lightbox/index.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_communication_preview_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/communication/preview.service */ "./src/app/services/communication/preview.service.ts");







var LocationPreviewComponent = /** @class */ (function () {
    function LocationPreviewComponent(lightBox, imgPipe, previewService) {
        this.lightBox = lightBox;
        this.imgPipe = imgPipe;
        this.previewService = previewService;
        this._luogoInfos = null;
    }
    Object.defineProperty(LocationPreviewComponent.prototype, "luogoInfos", {
        get: function () {
            return this._luogoInfos;
        },
        set: function (val) {
            this._luogoInfos = val;
            this.updateDescData();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationPreviewComponent.prototype, "descData", {
        get: function () {
            return this._descData;
        },
        enumerable: true,
        configurable: true
    });
    LocationPreviewComponent.prototype.ngOnInit = function () {
    };
    LocationPreviewComponent.prototype.updateDescData = function () {
        if (this._luogoInfos)
            this._descData = new _om_complex_description_data__WEBPACK_IMPORTED_MODULE_3__["ComplexDescriptionData"](this._luogoInfos.mainData);
        else
            this._descData = new _om_complex_description_data__WEBPACK_IMPORTED_MODULE_3__["ComplexDescriptionData"]();
    };
    LocationPreviewComponent.prototype.openLightBox = function (index) {
        var _this = this;
        // open lightbox
        var lightBoxAlbum = this.luogoInfos.imagesData.map(function (image) {
            var desc = "<h5>" + image.title + "</h5>";
            if (image.description != null)
                image.description.forEach(function (descPar) { return desc += "<p>" + descPar + "</p> "; });
            return {
                src: _this.imgPipe.transform(image, true),
                caption: desc,
                thumb: _this.imgPipe.transform(image, false)
            };
        });
        this.lightBox.open(lightBoxAlbum, index);
    };
    LocationPreviewComponent.prototype.onDescLinkClick = function (ref) {
        this.previewService.setNewRef(ref);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _om_loc_prev_response__WEBPACK_IMPORTED_MODULE_2__["LocationPreviewResponse"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_om_loc_prev_response__WEBPACK_IMPORTED_MODULE_2__["LocationPreviewResponse"]])
    ], LocationPreviewComponent.prototype, "luogoInfos", null);
    LocationPreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location-preview',
            template: __webpack_require__(/*! raw-loader!./location-preview.component.html */ "./node_modules/raw-loader/index.js!./src/app/my-map/map-overlay/location-preview/location-preview.component.html"),
            styles: [__webpack_require__(/*! ./location-preview.component.scss */ "./src/app/my-map/map-overlay/location-preview/location-preview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_lightbox__WEBPACK_IMPORTED_MODULE_5__["Lightbox"],
            _pipes_img_url_pipe__WEBPACK_IMPORTED_MODULE_4__["ImgUrlPipe"],
            _services_communication_preview_service__WEBPACK_IMPORTED_MODULE_6__["PreviewService"]])
    ], LocationPreviewComponent);
    return LocationPreviewComponent;
}());



/***/ }),

/***/ "./src/app/my-map/map-overlay/map-overlay.component.css":
/*!**************************************************************!*\
  !*** ./src/app/my-map/map-overlay/map-overlay.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " :host() { \r\n    \r\n    background-color: rgba(256,256,256,0);\r\n    display: block;\r\n    left: 0;\r\n    width: 100%;\r\n    bottom: 0%;\r\n    padding: 0;\r\n   \r\n\r\n    /*TODO: sostituire classe host con qualcosa di meglio => laterale se monitor, centrale altrimenti, al massimo con parte sotto libera*/\r\n} \r\n\r\n.modal-content\r\n{\r\n    height: 50vh;\r\n} \r\n\r\n.modal-content.expanded\r\n{\r\n    height: 90vh;\r\n} \r\n\r\n@media (min-width: 992px) {\r\n    :host() { \r\n    \r\n        width: 60%;\r\n        top:10%;\r\n    } \r\n    .modal-content\r\n    {\r\n        height: 90vh;\r\n    }\r\n    .hidden-xl-up\r\n    {\r\n        display: none;\r\n    }\r\n} \r\n\r\n@media (min-width: 1200px) { \r\n    :host() { \r\n        width: 30%;\r\n    } \r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktbWFwL21hcC1vdmVybGF5L21hcC1vdmVybGF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7O0lBRUcscUNBQXFDO0lBQ3JDLGNBQWM7SUFDZCxPQUFPO0lBQ1AsV0FBVztJQUNYLFVBQVU7SUFDVixVQUFVOzs7SUFHVixxSUFBcUk7QUFDekk7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUlBO0lBQ0k7O1FBRUksVUFBVTtRQUNWLE9BQU87SUFDWDtJQUNBOztRQUVJLFlBQVk7SUFDaEI7SUFDQTs7UUFFSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtDQUNIIiwiZmlsZSI6InNyYy9hcHAvbXktbWFwL21hcC1vdmVybGF5L21hcC1vdmVybGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgOmhvc3QoKSB7IFxyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NiwyNTYsMjU2LDApO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206IDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgXHJcblxyXG4gICAgLypUT0RPOiBzb3N0aXR1aXJlIGNsYXNzZSBob3N0IGNvbiBxdWFsY29zYSBkaSBtZWdsaW8gPT4gbGF0ZXJhbGUgc2UgbW9uaXRvciwgY2VudHJhbGUgYWx0cmltZW50aSwgYWwgbWFzc2ltbyBjb24gcGFydGUgc290dG8gbGliZXJhKi9cclxufSBcclxuXHJcbi5tb2RhbC1jb250ZW50XHJcbntcclxuICAgIGhlaWdodDogNTB2aDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQuZXhwYW5kZWRcclxue1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgOmhvc3QoKSB7IFxyXG4gICAgXHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICB0b3A6MTAlO1xyXG4gICAgfSBcclxuICAgIC5tb2RhbC1jb250ZW50XHJcbiAgICB7XHJcbiAgICAgICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgfVxyXG4gICAgLmhpZGRlbi14bC11cFxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHsgXHJcbiAgICA6aG9zdCgpIHsgXHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgIH0gXHJcbiB9Il19 */"

/***/ }),

/***/ "./src/app/my-map/map-overlay/map-overlay.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/my-map/map-overlay/map-overlay.component.ts ***!
  \*************************************************************/
/*! exports provided: MapOverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapOverlayComponent", function() { return MapOverlayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_locations_locations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/locations/locations.service */ "./src/app/services/locations/locations.service.ts");
/* harmony import */ var _services_communication_preview_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/communication/preview.service */ "./src/app/services/communication/preview.service.ts");
/* harmony import */ var _services_trails_trails_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/trails/trails.service */ "./src/app/services/trails/trails.service.ts");
/* harmony import */ var _trail_preview_trail_preview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trail-preview/trail-preview.component */ "./src/app/my-map/map-overlay/trail-preview/trail-preview.component.ts");








var MapOverlayComponent = /** @class */ (function () {
    function MapOverlayComponent(router, activatedRoute, locationService, trailsService, previewService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.locationService = locationService;
        this.trailsService = trailsService;
        this.previewService = previewService;
        // @HostBinding('@routeAnimation') routeAnimation = true;
        this.display = 'block';
        this.position = 'absolute';
    }
    MapOverlayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            _this.previewResponse = null;
            if (+params.get('type') == 1)
                return _this.locationService.getLocationData(+params.get('id'));
            else
                return _this.trailsService.getTrailData(+params.get('id'));
        }))
            .subscribe(function (res) {
            _this.previewResponse = res;
        });
    };
    MapOverlayComponent.prototype.closePopup = function (event) {
        // Providing a `null` value to the named outlet
        // clears the contents of the named outlet
        this.previewService.setState(false);
        this.router.navigate([{ outlets: { luoghiPopup: null } }], { relativeTo: this.activatedRoute.parent } // <--- PARENT activated route.
        );
        event.stopPropagation();
    };
    MapOverlayComponent.prototype.onParChange = function (elementId) {
        if (this.trailComponent) {
            this.trailComponent.onParChange(elementId);
        }
    };
    MapOverlayComponent.prototype.expand = function () {
        this.expanded = !this.expanded;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.display'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MapOverlayComponent.prototype, "display", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.position'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MapOverlayComponent.prototype, "position", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_trail_preview_trail_preview_component__WEBPACK_IMPORTED_MODULE_7__["TrailPreviewComponent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _trail_preview_trail_preview_component__WEBPACK_IMPORTED_MODULE_7__["TrailPreviewComponent"])
    ], MapOverlayComponent.prototype, "trailComponent", void 0);
    MapOverlayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'overlay',
            template: __webpack_require__(/*! raw-loader!./map-overlay.component.html */ "./node_modules/raw-loader/index.js!./src/app/my-map/map-overlay/map-overlay.component.html"),
            styles: [__webpack_require__(/*! ./map-overlay.component.css */ "./src/app/my-map/map-overlay/map-overlay.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_locations_locations_service__WEBPACK_IMPORTED_MODULE_4__["LocationsService"],
            _services_trails_trails_service__WEBPACK_IMPORTED_MODULE_6__["TrailsService"],
            _services_communication_preview_service__WEBPACK_IMPORTED_MODULE_5__["PreviewService"]])
    ], MapOverlayComponent);
    return MapOverlayComponent;
}());



/***/ }),

/***/ "./src/app/my-map/map-overlay/trail-preview/trail-preview.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/my-map/map-overlay/trail-preview/trail-preview.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 992px) {\n  p.emph {\n    font-weight: 500;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktbWFwL21hcC1vdmVybGF5L3RyYWlsLXByZXZpZXcvQzpcXFVzZXJzXFxQYW9sb1xcU3ZpbHVwcG9cXEFiYmFkaWFQYXNzZWdnaWF0ZVxcQWJiYWRpYVBhc3NlZ2dpYXRlL3NyY1xcYXBwXFxteS1tYXBcXG1hcC1vdmVybGF5XFx0cmFpbC1wcmV2aWV3XFx0cmFpbC1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9teS1tYXAvbWFwLW92ZXJsYXkvdHJhaWwtcHJldmlldy90cmFpbC1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0k7SUFFSSxnQkFBQTtFQ0ROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9teS1tYXAvbWFwLW92ZXJsYXkvdHJhaWwtcHJldmlldy90cmFpbC1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgcC5lbXBoIFxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbn1cclxuIiwiQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIHAuZW1waCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/my-map/map-overlay/trail-preview/trail-preview.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/my-map/map-overlay/trail-preview/trail-preview.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TrailPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailPreviewComponent", function() { return TrailPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _om_trail_prev_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../om/trail-prev.response */ "./src/app/om/trail-prev.response.ts");
/* harmony import */ var _services_communication_preview_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/communication/preview.service */ "./src/app/services/communication/preview.service.ts");
/* harmony import */ var _om_trail_par_desc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../om/trail-par-desc */ "./src/app/om/trail-par-desc.ts");





var TrailPreviewComponent = /** @class */ (function () {
    function TrailPreviewComponent(previewService) {
        this.previewService = previewService;
    }
    Object.defineProperty(TrailPreviewComponent.prototype, "trailInfos", {
        get: function () {
            return this._trailInfos;
        },
        set: function (val) {
            this._trailInfos = val;
            this.previewService.setTrailHeaderData(this._trailInfos.mainData);
            // reset paragraph position when a new location is loaded
            this.previewService.setTrailActiveSection(_om_trail_par_desc__WEBPACK_IMPORTED_MODULE_4__["TrailParDesc"].getDummyTrailParDesc());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrailPreviewComponent.prototype, "currentPar", {
        get: function () {
            return this._currentPar;
        },
        set: function (val) {
            this._currentPar = val;
            this.previewService.setTrailActiveSection(val);
        },
        enumerable: true,
        configurable: true
    });
    TrailPreviewComponent.prototype.onParChange = function (elemId) {
        if (!elemId) {
            this.currentPar = null;
            return;
        }
        var matchResult = elemId.match(/par_\d*/);
        if (!matchResult || matchResult.length == 0 || !this.trailInfos || !this.trailInfos.pars) {
            this.currentPar = null;
        }
        else {
            var parIndex_1 = +elemId.replace("par_", "");
            this.currentPar = this.trailInfos.pars.find(function (par) { return par.parIndex == parIndex_1; });
        }
    };
    TrailPreviewComponent.prototype.isParSelected = function (paragraph) {
        return this.currentPar && paragraph.parIndex == this.currentPar.parIndex && paragraph.mainTrailsID == this.currentPar.mainTrailsID;
    };
    TrailPreviewComponent.prototype.onRefClick = function (ref) {
        this.previewService.setNewRef(ref);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _om_trail_prev_response__WEBPACK_IMPORTED_MODULE_2__["TrailPreviewResponse"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_om_trail_prev_response__WEBPACK_IMPORTED_MODULE_2__["TrailPreviewResponse"]])
    ], TrailPreviewComponent.prototype, "trailInfos", null);
    TrailPreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trail-preview',
            template: __webpack_require__(/*! raw-loader!./trail-preview.component.html */ "./node_modules/raw-loader/index.js!./src/app/my-map/map-overlay/trail-preview/trail-preview.component.html"),
            styles: [__webpack_require__(/*! ./trail-preview.component.scss */ "./src/app/my-map/map-overlay/trail-preview/trail-preview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_communication_preview_service__WEBPACK_IMPORTED_MODULE_3__["PreviewService"]])
    ], TrailPreviewComponent);
    return TrailPreviewComponent;
}());



/***/ }),

/***/ "./src/app/my-map/map-redirect-with-params/map-redirect-with-params.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/my-map/map-redirect-with-params/map-redirect-with-params.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LW1hcC9tYXAtcmVkaXJlY3Qtd2l0aC1wYXJhbXMvbWFwLXJlZGlyZWN0LXdpdGgtcGFyYW1zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/my-map/map-redirect-with-params/map-redirect-with-params.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/my-map/map-redirect-with-params/map-redirect-with-params.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MapRedirectWithParamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapRedirectWithParamsComponent", function() { return MapRedirectWithParamsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MapRedirectWithParamsComponent = /** @class */ (function () {
    function MapRedirectWithParamsComponent(router) {
        router.navigate(['/map', { loc: 1, trails: 0 }]);
    }
    MapRedirectWithParamsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map-redirect-with-params',
            template: __webpack_require__(/*! raw-loader!./map-redirect-with-params.component.html */ "./node_modules/raw-loader/index.js!./src/app/my-map/map-redirect-with-params/map-redirect-with-params.component.html"),
            styles: [__webpack_require__(/*! ./map-redirect-with-params.component.scss */ "./src/app/my-map/map-redirect-with-params/map-redirect-with-params.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MapRedirectWithParamsComponent);
    return MapRedirectWithParamsComponent;
}());



/***/ }),

/***/ "./src/app/my-map/my-map-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/my-map/my-map-routing.module.ts ***!
  \*************************************************/
/*! exports provided: MyMapRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMapRoutingModule", function() { return MyMapRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _map_overlay_map_overlay_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-overlay/map-overlay.component */ "./src/app/my-map/map-overlay/map-overlay.component.ts");
/* harmony import */ var _my_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-map.component */ "./src/app/my-map/my-map.component.ts");
/* harmony import */ var _map_redirect_with_params_map_redirect_with_params_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-redirect-with-params/map-redirect-with-params.component */ "./src/app/my-map/map-redirect-with-params/map-redirect-with-params.component.ts");






var myMapRoutes = [
    {
        path: 'map',
        component: _my_map_component__WEBPACK_IMPORTED_MODULE_4__["MyMapComponent"]
    },
    {
        path: 'map-default',
        component: _map_redirect_with_params_map_redirect_with_params_component__WEBPACK_IMPORTED_MODULE_5__["MapRedirectWithParamsComponent"]
    },
    {
        path: 'luoghiPrewiew/:id/:type',
        component: _map_overlay_map_overlay_component__WEBPACK_IMPORTED_MODULE_3__["MapOverlayComponent"],
        outlet: 'luoghiPopup'
    }
];
var MyMapRoutingModule = /** @class */ (function () {
    function MyMapRoutingModule() {
    }
    MyMapRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(myMapRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], MyMapRoutingModule);
    return MyMapRoutingModule;
}());



/***/ }),

/***/ "./src/app/my-map/my-map.component.css":
/*!*********************************************!*\
  !*** ./src/app/my-map/my-map.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n#map {\r\n    height: 100vh;\r\n}\r\n\r\n\r\n.geo-dot circle\r\n{\r\n    stroke:#fff;\r\n    stroke-width:3;\r\n    fill:#2A93EE;\r\n    fill-opacity:1;\r\n    opacity:1;\r\n}\r\n\r\n\r\n.ap-control.my-geoloc\r\n{\r\n    top: 10em;\r\n}\r\n\r\n\r\n.ap-control.my-attribution.btn, div.ap-control.my-attribution\r\n{\r\n    top: 13em;\r\n}\r\n\r\n\r\n.ap-control.my-layer-ctrl.btn, div.ap-control.my-layer-ctrl\r\n{\r\n    top: 16em;\r\n}\r\n\r\n\r\n.ap-control.my-menu\r\n{\r\n    left: 0.5em;\r\n    top:1em;\r\n}\r\n\r\n\r\ndiv.ap-control.my-attribution\r\n{\r\n    background-color: rgba(255,255,255,0.5);\r\n}\r\n\r\n\r\ndiv.ap-control.my-layer-ctrl\r\n{\r\n    background-color: rgba(255,255,255,0);\r\n}\r\n\r\n\r\ndiv.ap-control.my-attribution, div.ap-control.my-layer-ctrl\r\n{\r\n    \r\n    \r\n    padding: 0.2em;\r\n    right: 3.75em;\r\n    min-height:2.25em;\r\n    max-width:50%;\r\n\r\n}\r\n\r\n\r\n.layer-prew\r\n{\r\n    max-width: 10em;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktbWFwL215LW1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOzs7QUFHQTs7SUFFSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7SUFDWixjQUFjO0lBQ2QsU0FBUztBQUNiOzs7QUFHQTs7SUFFSSxTQUFTO0FBQ2I7OztBQUVBOztJQUVJLFNBQVM7QUFDYjs7O0FBRUE7O0lBRUksU0FBUztBQUNiOzs7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsT0FBTztBQUNYOzs7QUFFQTs7SUFFSSx1Q0FBdUM7QUFDM0M7OztBQUNBOztJQUVJLHFDQUFxQztBQUN6Qzs7O0FBQ0E7Ozs7SUFJSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixhQUFhOztBQUVqQjs7O0FBRUE7O0lBRUksZUFBZTtJQUNmLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9teS1tYXAvbXktbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiNtYXAge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuXHJcbi5nZW8tZG90IGNpcmNsZVxyXG57XHJcbiAgICBzdHJva2U6I2ZmZjtcclxuICAgIHN0cm9rZS13aWR0aDozO1xyXG4gICAgZmlsbDojMkE5M0VFO1xyXG4gICAgZmlsbC1vcGFjaXR5OjE7XHJcbiAgICBvcGFjaXR5OjE7XHJcbn1cclxuXHJcblxyXG4uYXAtY29udHJvbC5teS1nZW9sb2Ncclxue1xyXG4gICAgdG9wOiAxMGVtO1xyXG59XHJcblxyXG4uYXAtY29udHJvbC5teS1hdHRyaWJ1dGlvbi5idG4sIGRpdi5hcC1jb250cm9sLm15LWF0dHJpYnV0aW9uXHJcbntcclxuICAgIHRvcDogMTNlbTtcclxufVxyXG5cclxuLmFwLWNvbnRyb2wubXktbGF5ZXItY3RybC5idG4sIGRpdi5hcC1jb250cm9sLm15LWxheWVyLWN0cmxcclxue1xyXG4gICAgdG9wOiAxNmVtO1xyXG59XHJcbi5hcC1jb250cm9sLm15LW1lbnVcclxue1xyXG4gICAgbGVmdDogMC41ZW07XHJcbiAgICB0b3A6MWVtO1xyXG59XHJcblxyXG5kaXYuYXAtY29udHJvbC5teS1hdHRyaWJ1dGlvblxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XHJcbn1cclxuZGl2LmFwLWNvbnRyb2wubXktbGF5ZXItY3RybFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDApO1xyXG59XHJcbmRpdi5hcC1jb250cm9sLm15LWF0dHJpYnV0aW9uLCBkaXYuYXAtY29udHJvbC5teS1sYXllci1jdHJsXHJcbntcclxuICAgIFxyXG4gICAgXHJcbiAgICBwYWRkaW5nOiAwLjJlbTtcclxuICAgIHJpZ2h0OiAzLjc1ZW07XHJcbiAgICBtaW4taGVpZ2h0OjIuMjVlbTtcclxuICAgIG1heC13aWR0aDo1MCU7XHJcblxyXG59XHJcblxyXG4ubGF5ZXItcHJld1xyXG57XHJcbiAgICBtYXgtd2lkdGg6IDEwZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/my-map/my-map.component.ts":
/*!********************************************!*\
  !*** ./src/app/my-map/my-map.component.ts ***!
  \********************************************/
/*! exports provided: MyMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMapComponent", function() { return MyMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_key_bing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-key-bing */ "./src/app/my-map/api-key-bing.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_my_map_sentieri_layer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/my-map/sentieri-layer.service */ "./src/app/services/my-map/sentieri-layer.service.ts");
/* harmony import */ var _services_communication_preview_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/communication/preview.service */ "./src/app/services/communication/preview.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/Map */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/View */ "./node_modules/ol/View.js");
/* harmony import */ var ol_layer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/interaction */ "./node_modules/ol/interaction.js");
/* harmony import */ var ol_control__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");
/* harmony import */ var ol_easing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/easing */ "./node_modules/ol/easing.js");
/* harmony import */ var _ol_custom_controls_geoloc_control__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../ol-custom/controls/geoloc-control */ "./src/app/ol-custom/controls/geoloc-control.ts");
/* harmony import */ var _ol_custom_controls_my_attribution_control__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../ol-custom/controls/my-attribution-control */ "./src/app/ol-custom/controls/my-attribution-control.ts");
/* harmony import */ var _ol_custom_controls_layer_control__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../ol-custom/controls/layer-control */ "./src/app/ol-custom/controls/layer-control.ts");
/* harmony import */ var _services_my_map_vector_styles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/my-map/vector-styles */ "./src/app/services/my-map/vector-styles.ts");
/* harmony import */ var _om_desc_references__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../om/desc-references */ "./src/app/om/desc-references.ts");
/* harmony import */ var _services_communication_sidebar_data_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../services/communication/sidebar-data.service */ "./src/app/services/communication/sidebar-data.service.ts");
/* harmony import */ var _services_trails_trails_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../services/trails/trails.service */ "./src/app/services/trails/trails.service.ts");
/* harmony import */ var _pipes_img_url_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../pipes/img-url.pipe */ "./src/app/pipes/img-url.pipe.ts");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-lightbox */ "./node_modules/ngx-lightbox/index.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_24__);








// import 'ol/ol.css';

















var LAYER_ROAD = 'Road';
var LAYER_AERIAL = 'Aerial';
var LAYER_AERIAL_LBLS = 'AerialWithLabels';
var LAYER_ARC_GIS = 'ArcGIS';
var LAYER_OPEN_TOPO = 'OpenTopoMap';
var MyMapComponent = /** @class */ (function () {
    function MyMapComponent(sentieriLayerService, router, activatedRoute, previewService, sidebarDataService, trailsService, lightBox, imgPipe) {
        this.sentieriLayerService = sentieriLayerService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.previewService = previewService;
        this.sidebarDataService = sidebarDataService;
        this.trailsService = trailsService;
        this.lightBox = lightBox;
        this.imgPipe = imgPipe;
        this.intersectClickInteractionConfigured = false;
    }
    MyMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.url.subscribe(function (url) {
            _this.sidebarDataService.setMainActiveByRoute(url);
            _this.routerLinkPath = url[0].path;
        });
        var attributionArcGIS = 'Tiles &copy; <a href="http://services.arcgisonline.com/ArcGIS/' +
            'rest/services/World_Topo_Map/MapServer">ArcGIS</a>';
        var attributionAP = 'Tiles &copy; <a href="http://www.abbadiapasseggiate.altervista.org">ABBADIA PASSEGGIATE</a>';
        var layersPrimariMap = {};
        layersPrimariMap[LAYER_ROAD] = null;
        layersPrimariMap[LAYER_AERIAL] = null;
        layersPrimariMap[LAYER_AERIAL_LBLS] = null;
        var layersMap = {
            layersPrimariMap: layersPrimariMap,
            overlaysAP: {}
        };
        var layers = [];
        Object.keys(layersPrimariMap).forEach(function (property) {
            var layer = new ol_layer__WEBPACK_IMPORTED_MODULE_10__["Tile"]({
                visible: false,
                preload: Infinity,
                source: new ol_source__WEBPACK_IMPORTED_MODULE_11__["BingMaps"]({
                    key: _api_key_bing__WEBPACK_IMPORTED_MODULE_2__["API_KEY_BING"].key,
                    imagerySet: property
                })
            });
            layers.push(layer);
            layer.isCtrVisible = property != LAYER_ROAD;
            layer.isSentieriVisible = true;
            layersPrimariMap[property] = layer;
        });
        layersPrimariMap[LAYER_ARC_GIS] = new ol_layer__WEBPACK_IMPORTED_MODULE_10__["Tile"]({
            source: new ol_source__WEBPACK_IMPORTED_MODULE_11__["XYZ"]({
                attributions: [attributionArcGIS],
                url: 'http://server.arcgisonline.com/ArcGIS/rest/services/' +
                    'World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
        layersPrimariMap[LAYER_ARC_GIS].isSentieriVisible = true;
        layers.push(layersPrimariMap[LAYER_ARC_GIS]);
        layersPrimariMap[LAYER_OPEN_TOPO] = new ol_layer__WEBPACK_IMPORTED_MODULE_10__["Tile"]({
            source: new ol_source__WEBPACK_IMPORTED_MODULE_11__["OSM"]({
                attributions: [
                    'Kartendaten: © <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>-Mitwirkende, SRTM | Kartendarstellung: © <a href="http://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
                ],
                url: 'https://{a-c}.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
        layers.push(layersPrimariMap[LAYER_OPEN_TOPO]);
        layersMap.overlaysAP["ctr"] = new ol_layer__WEBPACK_IMPORTED_MODULE_10__["Tile"]({
            opacity: 0.3,
            minResolution: 0.5,
            maxResolution: 6,
            visible: true,
            source: new ol_source__WEBPACK_IMPORTED_MODULE_11__["XYZ"]({
                attributions: [attributionAP],
                url: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].protocolName + _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].tileServerName + '/tiles/trasCTR/{z}/{x}/{-y}.png',
                minZoom: 14,
                maxZoom: 18
            })
        });
        layers.push(layersMap.overlaysAP["ctr"]);
        layersMap.overlaysAP["sentieri"] = this.sentieriLayerService.getSentieri();
        layers.push(layersMap.overlaysAP["sentieri"]);
        var view = new ol_View__WEBPACK_IMPORTED_MODULE_9__["default"]({
            center: Object(ol_proj__WEBPACK_IMPORTED_MODULE_12__["fromLonLat"])([9.351, 45.89910]),
            zoom: 15,
            maxZoom: 18,
            minZoom: 5
        });
        var zoomInEl = document.createElement("i");
        zoomInEl.innerText = "add";
        zoomInEl.className = "material-icons";
        var zoomOutEl = document.createElement("i");
        zoomOutEl.innerText = "remove";
        zoomOutEl.className = "material-icons";
        var rotateEl = document.createElement("i");
        rotateEl.innerText = "navigation";
        rotateEl.className = "material-icons";
        var controls = Object(ol_control__WEBPACK_IMPORTED_MODULE_14__["defaults"])({
            attribution: false,
            rotate: true,
            rotateOptions: {
                label: rotateEl,
                // autoHide:false, // for always visible
                className: "ap-control btn btn-outline-aplight tras02 my-rot"
            },
            zoom: true,
            zoomOptions: {
                className: "ap-control btn btn-outline-aplight tras02 my-zoom",
                zoomInLabel: zoomInEl,
                zoomOutLabel: zoomOutEl
            }
        }).getArray();
        controls[0].element.classList.remove("btn", "btn-outline-aplight", "ol-control", "ol-unselectable");
        controls[1].element.classList.remove("btn", "btn-outline-aplight", "ol-control", "ol-unselectable");
        this.map = new ol_Map__WEBPACK_IMPORTED_MODULE_8__["default"]({
            controls: controls,
            target: 'map',
            layers: layers,
            view: view
        });
        var layerPercorsi = this.sentieriLayerService.getPercorsi();
        this.map.addLayer(layerPercorsi);
        var layerLuoghi = this.sentieriLayerService.getLuoghi();
        this.map.addLayer(layerLuoghi);
        // this.checkActiveInteractionLayer(layerLuoghi, layerPercorsi);
        // create a Select interaction and add it to the map
        var select = new ol_interaction__WEBPACK_IMPORTED_MODULE_13__["Select"]({
            layers: [layerLuoghi, layerPercorsi],
            style: this.sentieriLayerService.getFunctionStyle(_services_my_map_vector_styles__WEBPACK_IMPORTED_MODULE_19__["VectorStyleType"].Percorsi, true),
            hitTolerance: 7
        });
        this.map.addInteraction(select);
        // use the features Collection to detect when a feature is selected,
        // the collection will emit the add event
        var selectedFeatures = select.getFeatures();
        selectedFeatures.on('add', function (event) {
            var feature = event.target.item(0);
            var interactId = feature.getProperties().interactId;
            _this.onAddSelectedFeature(feature, interactId);
            // if it's a trail i immediately remove it... Better use another interaction type in future
            if (interactId == _om_desc_references__WEBPACK_IMPORTED_MODULE_20__["DescRefTypes"].Trail)
                selectedFeatures.clear();
            else if (interactId == _om_desc_references__WEBPACK_IMPORTED_MODULE_20__["DescRefTypes"].Location)
                _this.previewService.setTrailHeaderData(null);
        });
        this.previewService.isOpen$.subscribe(function (isOpen) {
            if (!isOpen) {
                selectedFeatures.clear();
                _this.previewService.setTrailHeaderData(null);
            }
        });
        this.previewService.newRef$.subscribe(function (newRef) {
            _this.router.navigate([{ outlets: { luoghiPopup: ['luoghiPrewiew', newRef.id, newRef.type] } }]);
            selectedFeatures.clear();
            var features;
            if (newRef.type == _om_desc_references__WEBPACK_IMPORTED_MODULE_20__["DescRefTypes"].Location) {
                features = layerLuoghi.getSource().getFeatures();
                var newFeature = features.find(function (f) { return f.getProperties().id == newRef.id; });
                selectedFeatures.push(newFeature);
            }
            else {
                features = layerPercorsi.getSource().getFeatures();
                var newFeature = features.find(function (f) { return f.getProperties().id == newRef.id; });
                if (newFeature) {
                    _this.moveView(newFeature);
                }
            }
        });
        this.activatedRoute.paramMap.subscribe(function (mapPar) { return _this.enableMapLayers(mapPar, layerLuoghi, layerPercorsi); });
        this.previewService.trailHeaderData$.subscribe(function (hd) { return _this.onSingleTrailActivate(hd, layerLuoghi, layerPercorsi); });
        this.previewService.trailActiveSection$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (actscec) { return !actscec || !actscec.isDummySec(); }), // this kind of active section is pushed on the stream when the page is loaded the first time
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500))
            .subscribe(function (actsec) {
            var layerIntersect = _this.getLayerIntesect();
            if (layerIntersect) {
                layerIntersect.changed();
            }
            var layerStep = _this.getLayerStep();
            if (!layerStep) {
                //that should never happen... better return anyway
                return;
            }
            if (!actsec) {
                // this is the case when I scroll to the top
                _this.moveView(layerStep.getSource());
                return;
            }
            var source = layerStep.getSource();
            if (source instanceof ol_source__WEBPACK_IMPORTED_MODULE_11__["Vector"]) {
                var activeFeature = source.getFeatures().find(function (feature) { return feature.getProperties().id == actsec.featureId; });
                if (activeFeature) {
                    _this.moveView(activeFeature);
                }
            }
        });
        this.geolocControl = new _ol_custom_controls_geoloc_control__WEBPACK_IMPORTED_MODULE_16__["GeolocControl"]({ element: this.geolcationButtonElement.nativeElement }, this.map);
        this.attributionControl = new _ol_custom_controls_my_attribution_control__WEBPACK_IMPORTED_MODULE_17__["MyAttributionControl"]({ element: this.attributionControlElement.nativeElement }, this.map);
        this.layerControl = new _ol_custom_controls_layer_control__WEBPACK_IMPORTED_MODULE_18__["LayerControl"]({ element: this.layerControlElement.nativeElement }, layersMap, this.map);
        this.layerControl.setLayerVisible(LAYER_AERIAL);
    };
    MyMapComponent.prototype.enableMapLayers = function (mapPar, locLayer, trailLayer) {
        if (mapPar.has("loc") && +mapPar.get("loc") == 1)
            locLayer.setVisible(true);
        else
            locLayer.setVisible(false);
        if (mapPar.has("trails") && +mapPar.get("trails") == 1)
            trailLayer.setVisible(true);
        else
            trailLayer.setVisible(false);
    };
    MyMapComponent.prototype.restoreMapLayers = function (locLayer, trailLayer) {
        var activeSubEntries = this.sidebarDataService.getActiveSub("map");
        if (activeSubEntries.some(function (entry) { return entry.routerLink == "loc"; }))
            locLayer.setVisible(true);
        else
            locLayer.setVisible(false);
        if (activeSubEntries.some(function (entry) { return entry.routerLink == "trails"; }))
            trailLayer.setVisible(true);
        else
            trailLayer.setVisible(false);
    };
    MyMapComponent.prototype.onAddSelectedFeature = function (feature, interactionType) {
        var locId = feature.getProperties().id;
        this.previewService.setState(true);
        this.router.navigate([{ outlets: { luoghiPopup: ['luoghiPrewiew', locId, interactionType] } }]);
        this.moveView(feature);
    };
    MyMapComponent.prototype.moveView = function (input) {
        var mapExtent = this.map.getView().calculateExtent();
        var deltaExtMap = [];
        deltaExtMap[0] = mapExtent[2] - mapExtent[0]; //x
        deltaExtMap[1] = mapExtent[3] - mapExtent[1]; //y
        if (input instanceof ol_source__WEBPACK_IMPORTED_MODULE_11__["Vector"]) {
            var source = input;
            this.moveViewFromExtent(source.getExtent());
        }
        else {
            var feature = input;
            if (feature.getGeometry().getType() == "Point") {
                var featureCord = feature.getGeometry().getCoordinates();
                var offset = [];
                if (window.innerWidth < 992) {
                    offset[0] = 0;
                    offset[1] = deltaExtMap[1] * 0.25;
                }
                else if (window.innerWidth < 1200) {
                    offset[0] = deltaExtMap[0] * 0.3;
                    offset[1] = 0;
                }
                else {
                    offset[0] = deltaExtMap[0] * 0.15;
                    offset[1] = 0;
                }
                for (var i = 0; i < featureCord.length; i++) {
                    featureCord[i] -= offset[i];
                }
                this.map.getView().animate({
                    center: featureCord,
                    duration: 1000,
                    easing: ol_easing__WEBPACK_IMPORTED_MODULE_15__["easeOut"]
                });
            }
            else {
                var featureExt = feature.getGeometry().getExtent();
                this.moveViewFromExtent(featureExt);
            }
        }
    };
    MyMapComponent.prototype.moveViewFromExtent = function (featureExt) {
        if (!this.checkExtent(featureExt)) {
            console.warn("An invalid extent was passed to moveViewFromExtent");
            return;
        }
        var padding = [0, 0, 0, 0];
        if (window.innerWidth < 992) {
            padding[2] = window.innerHeight * 0.5;
        }
        else if (window.innerWidth < 1200) {
            padding[3] = window.innerWidth * 0.6;
        }
        else {
            padding[3] = window.innerWidth * 0.3;
        }
        this.map.getView().fit(featureExt, {
            duration: 1000,
            easing: ol_easing__WEBPACK_IMPORTED_MODULE_15__["easeOut"],
            padding: padding
        });
    };
    /**
     * Used to check if an array of number is a valid extent
     *
     * @param featureExtent extent to be check
     */
    MyMapComponent.prototype.checkExtent = function (featureExtent) {
        var e_1, _a;
        if (!featureExtent)
            return false;
        if (featureExtent.length != 4)
            return false;
        try {
            for (var featureExtent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](featureExtent), featureExtent_1_1 = featureExtent_1.next(); !featureExtent_1_1.done; featureExtent_1_1 = featureExtent_1.next()) {
                var vertex = featureExtent_1_1.value;
                if (!isFinite(vertex))
                    return false;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (featureExtent_1_1 && !featureExtent_1_1.done && (_a = featureExtent_1.return)) _a.call(featureExtent_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return true;
    };
    MyMapComponent.prototype.getLayerStep = function () {
        var layerStep = this.map.getLayers().getArray().find(function (layer) { return layer.getProperties()["layerName"] == "stepTrail"; });
        return layerStep;
    };
    MyMapComponent.prototype.getLayerIntesect = function () {
        return this.map.getLayers().getArray().find(function (layer) { return layer.getProperties()["layerName"] == "intersectTrail"; });
    };
    MyMapComponent.prototype.onSingleTrailActivate = function (hd, layerLuoghi, layerPercorsi) {
        var _this = this;
        var layerStep = this.getLayerStep();
        var layerIntersect = this.getLayerIntesect();
        if (!hd) {
            this.restoreMapLayers(layerLuoghi, layerPercorsi);
            if (layerStep)
                layerStep.setVisible(false);
            if (layerIntersect)
                layerIntersect.setVisible(false);
            return;
        }
        if (!layerStep) {
            layerStep = this.sentieriLayerService.getLayerByName(hd.stepsLayerName, "stepTrail");
            this.map.addLayer(layerStep);
        }
        else if (layerStep.getProperties()["trailId"] != hd.id) {
            layerStep.setSource(this.sentieriLayerService.getVectorSourceByName(hd.stepsLayerName));
        }
        if (!layerIntersect) {
            layerIntersect = this.sentieriLayerService.getLayerByName(hd.intersectionsLayerName, "intersectTrail");
            this.map.addLayer(layerIntersect);
            this.addClickInteractionToMap(layerIntersect, function (f) { return _this.openLightBoxForIntersection(hd.id, f.getProperties().id); });
        }
        else if (layerIntersect.getProperties()["trailId"] != hd.id) {
            layerIntersect.setSource(this.sentieriLayerService.getVectorSourceByName(hd.intersectionsLayerName));
        }
        layerPercorsi.setVisible(false);
        layerStep.setVisible(true);
        layerIntersect.setVisible(true);
    };
    MyMapComponent.prototype.onMenuClick = function () {
        this.sidebarDataService.setState(true);
    };
    MyMapComponent.prototype.addClickInteractionToMap = function (layer, callback) {
        var _this = this;
        var clickCondition = function (pixel) {
            var features = [];
            _this.map.forEachFeatureAtPixel(pixel, function (feature, lay) { return features.push(feature); }, {
                layerFilter: (function (clickLy) { return clickLy == layer; }),
                hitTolerance: 7
            });
            if (features.length > 0) {
                callback(features[0]);
            }
        };
        this.map.on('click', function (evt) {
            var pixel = evt.pixel;
            clickCondition(pixel);
        });
    };
    MyMapComponent.prototype.openLightBoxForIntersection = function (mainTrailId, featureId) {
        var _this = this;
        this.trailsService.getIntersectionImageData(mainTrailId, featureId)
            .subscribe(function (apPhotos) {
            var lightBoxAlbum = apPhotos.map(function (image) {
                var desc = "<h5>" + image.title + "</h5>";
                if (image.description != null)
                    image.description.forEach(function (descPar) { return desc += "<p>" + descPar + "</p> "; });
                return {
                    src: _this.imgPipe.transform(image, true),
                    caption: desc,
                    thumb: _this.imgPipe.transform(image, false)
                };
            });
            _this.lightBox.open(lightBoxAlbum, 0);
        });
    };
    MyMapComponent.prototype.onResize = function (event) {
        event.target.innerWidth;
        this.map.updateSize();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("geolocBtn", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MyMapComponent.prototype, "geolcationButtonElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("attributionCtrl", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MyMapComponent.prototype, "attributionControlElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("LayerCtrl", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MyMapComponent.prototype, "layerControlElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MyMapComponent.prototype, "onResize", null);
    MyMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-map',
            template: __webpack_require__(/*! raw-loader!./my-map.component.html */ "./node_modules/raw-loader/index.js!./src/app/my-map/my-map.component.html"),
            providers: [_services_my_map_sentieri_layer_service__WEBPACK_IMPORTED_MODULE_5__["SentieriLayerService"]],
            styles: [__webpack_require__(/*! ./my-map.component.css */ "./src/app/my-map/my-map.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_my_map_sentieri_layer_service__WEBPACK_IMPORTED_MODULE_5__["SentieriLayerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_communication_preview_service__WEBPACK_IMPORTED_MODULE_6__["PreviewService"],
            _services_communication_sidebar_data_service__WEBPACK_IMPORTED_MODULE_21__["SidebarDataService"],
            _services_trails_trails_service__WEBPACK_IMPORTED_MODULE_22__["TrailsService"],
            ngx_lightbox__WEBPACK_IMPORTED_MODULE_24__["Lightbox"],
            _pipes_img_url_pipe__WEBPACK_IMPORTED_MODULE_23__["ImgUrlPipe"]])
    ], MyMapComponent);
    return MyMapComponent;
}());



/***/ }),

/***/ "./src/app/ol-custom/controls/geoloc-control.ts":
/*!******************************************************!*\
  !*** ./src/app/ol-custom/controls/geoloc-control.ts ***!
  \******************************************************/
/*! exports provided: GeolocControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocControl", function() { return GeolocControl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_my_map_vector_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/my-map/vector-styles */ "./src/app/services/my-map/vector-styles.ts");
/* harmony import */ var _om_geolocation_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../om/geolocation-data */ "./src/app/om/geolocation-data.ts");
/* harmony import */ var ol_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");
/* harmony import */ var ol_Geolocation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/Geolocation */ "./node_modules/ol/Geolocation.js");
/* harmony import */ var ol_Feature__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/Feature */ "./node_modules/ol/Feature.js");
/* harmony import */ var ol_layer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/View */ "./node_modules/ol/View.js");










var GeolocControl = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GeolocControl, _super);
    function GeolocControl(option, map) {
        var _this = _super.call(this, option) || this;
        map.addControl(_this);
        _this.originalView = new ol_View__WEBPACK_IMPORTED_MODULE_9__["default"]({
            center: map.getView().getCenter(),
            zoom: map.getView().getZoom()
        });
        _this.setUpGeolocation();
        return _this;
    }
    GeolocControl.prototype.setUpGeolocation = function () {
        var _this = this;
        // init without tracking, it will be enable from GUI
        var map = _super.prototype.getMap.call(this);
        this.geolocation = new ol_Geolocation__WEBPACK_IMPORTED_MODULE_4__["default"]({
            tracking: false,
            projection: map.getView().getProjection(),
            enableHighAccuracy: true
        });
        var positionFeature = new ol_Feature__WEBPACK_IMPORTED_MODULE_5__["default"]();
        positionFeature.setStyle(function () { return _services_my_map_vector_styles__WEBPACK_IMPORTED_MODULE_1__["geolocationStyle"].POSITION; });
        this.geolocationData = new _om_geolocation_data__WEBPACK_IMPORTED_MODULE_2__["GeolocationData"](_om_geolocation_data__WEBPACK_IMPORTED_MODULE_2__["GeolocationStatus"].Disabled);
        this.geolocation.on('change:position', function () {
            if (_this.geolocationData.status == _om_geolocation_data__WEBPACK_IMPORTED_MODULE_2__["GeolocationStatus"].ActiveWithError)
                _this.manageLocation(true, false);
            var p = _this.geolocation.getPosition();
            _this.manageMapViewConfiguration();
            positionFeature.setGeometry(p ?
                new ol_geom__WEBPACK_IMPORTED_MODULE_8__["Point"](p) : null);
        });
        this.geolocation.on('error', function () {
            _this.manageLocation(true, true);
        });
        var accuracyFeature = new ol_Feature__WEBPACK_IMPORTED_MODULE_5__["default"]();
        this.geolocation.on('change:accuracyGeometry', function () {
            accuracyFeature.setGeometry(_this.geolocation.getAccuracyGeometry());
            accuracyFeature.setStyle(function () { return _services_my_map_vector_styles__WEBPACK_IMPORTED_MODULE_1__["geolocationStyle"].ACCURANCY; });
        });
        this.geolocLayer = new ol_layer__WEBPACK_IMPORTED_MODULE_6__["Vector"]({
            map: map,
            source: new ol_source__WEBPACK_IMPORTED_MODULE_7__["Vector"]({
                features: [positionFeature, accuracyFeature]
            }),
        });
    };
    GeolocControl.prototype.toggleLocation = function () {
        var isTracking = this.geolocation.getTracking();
        this.manageLocation(!isTracking);
    };
    GeolocControl.prototype.manageLocation = function (active, error) {
        if (error === void 0) { error = false; }
        var locStatus;
        if (!active) {
            locStatus = _om_geolocation_data__WEBPACK_IMPORTED_MODULE_2__["GeolocationStatus"].Disabled;
        }
        else if (!error) {
            locStatus = _om_geolocation_data__WEBPACK_IMPORTED_MODULE_2__["GeolocationStatus"].Active;
        }
        else {
            locStatus = _om_geolocation_data__WEBPACK_IMPORTED_MODULE_2__["GeolocationStatus"].ActiveWithError;
        }
        var map = _super.prototype.getMap.call(this);
        this.geolocation.setTracking(active);
        this.geolocationData.status = locStatus;
        this.geolocLayer.setVisible(active && !error);
        map.updateSize();
        if (!active)
            this.manageMapViewConfiguration();
    };
    GeolocControl.prototype.manageMapViewConfiguration = function () {
        var map = _super.prototype.getMap.call(this);
        if (this.geolocationData.status == _om_geolocation_data__WEBPACK_IMPORTED_MODULE_2__["GeolocationStatus"].Disabled) {
            map.getView().setCenter(this.originalView.getCenter());
            map.getView().setZoom(this.originalView.getZoom());
        }
        else if (this.geolocationData.status == _om_geolocation_data__WEBPACK_IMPORTED_MODULE_2__["GeolocationStatus"].Active && this.geolocationData.firstActivation) {
            map.getView().setCenter(this.geolocation.getPosition());
            map.getView().setResolution(Math.max(this.geolocation.getAccuracy() / 256, this.originalView.getResolution()));
            this.geolocationData.confirmStatus();
        }
    };
    return GeolocControl;
}(ol_control__WEBPACK_IMPORTED_MODULE_3__["Control"]));



/***/ }),

/***/ "./src/app/ol-custom/controls/layer-control.ts":
/*!*****************************************************!*\
  !*** ./src/app/ol-custom/controls/layer-control.ts ***!
  \*****************************************************/
/*! exports provided: LayerControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerControl", function() { return LayerControl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ol_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");


var LayerControl = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LayerControl, _super);
    function LayerControl(option, _layerMap, map) {
        var _this = _super.call(this, option) || this;
        _this._layerMap = _layerMap;
        _this.select = option.element;
        map.addControl(_this);
        return _this;
    }
    Object.defineProperty(LayerControl.prototype, "layerMap", {
        get: function () {
            return this._layerMap;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayerControl.prototype, "visibleLayersKeys", {
        get: function () {
            return Object.keys(this._layerMap.layersPrimariMap);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayerControl.prototype, "activeLayerKey", {
        get: function () {
            return this._activeLayerKey;
        },
        enumerable: true,
        configurable: true
    });
    LayerControl.prototype.setLayerVisible = function (chosenStyle) {
        var _this = this;
        this._activeLayerKey = chosenStyle;
        Object.keys(this.layerMap.layersPrimariMap).forEach(function (property) {
            _this.layerMap.layersPrimariMap[property].setVisible(property === chosenStyle);
        }, this);
        if (this.layerMap.overlaysAP) {
            this.layerMap.overlaysAP["ctr"].setVisible(this.layerMap.layersPrimariMap[chosenStyle].isCtrVisible);
            this.layerMap.overlaysAP["sentieri"].setVisible(this.layerMap.layersPrimariMap[chosenStyle].isSentieriVisible);
        }
    };
    LayerControl.prototype.toggleCollapsed = function () {
        this.collapsed = !this.collapsed;
    };
    return LayerControl;
}(ol_control__WEBPACK_IMPORTED_MODULE_1__["Control"]));



/***/ }),

/***/ "./src/app/ol-custom/controls/my-attribution-control.ts":
/*!**************************************************************!*\
  !*** ./src/app/ol-custom/controls/my-attribution-control.ts ***!
  \**************************************************************/
/*! exports provided: MyAttributionControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAttributionControl", function() { return MyAttributionControl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ol_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");
/* harmony import */ var ol_layer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");



var MyAttributionControl = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MyAttributionControl, _super);
    function MyAttributionControl(option, map) {
        var _this = _super.call(this, option) || this;
        map.addControl(_this);
        _this.attribution = [];
        var domEl = option.element;
        domEl.querySelector("div");
        map.getLayers().forEach(function (layer, index, array) {
            layer.on('change:visible', function (e) {
                var currentLayer = e.target;
                _this.onLayerVisibilityChange(currentLayer, map);
            });
            _this.onLayerVisibilityChange(layer, map);
        });
        return _this;
    }
    MyAttributionControl.prototype.onLayerVisibilityChange = function (currentLayer, map) {
        var _this = this;
        if (!currentLayer || (currentLayer instanceof ol_layer__WEBPACK_IMPORTED_MODULE_2__["Group"])) {
            return;
        }
        var attributionFunc = currentLayer.getSource().getAttributions();
        if (!attributionFunc)
            return;
        var currentAttr = attributionFunc({
            extent: map.getView().calculateExtent(),
            viewState: map.getView().getState()
        });
        // se passa da visibile a non visibile
        currentAttr.forEach(function (el) {
            var index = _this.attribution.indexOf(el);
            // se layer visibile aggiungo solo se non c'è già
            if (currentLayer.getVisible() && index == -1) {
                _this.attribution.push(el);
            }
            else if (!currentLayer.getVisible() && index >= 0) {
                _this.attribution.splice(index, 1);
            }
        });
    };
    MyAttributionControl.prototype.toggleCollapsed = function () {
        this.collapsed = !this.collapsed;
    };
    return MyAttributionControl;
}(ol_control__WEBPACK_IMPORTED_MODULE_1__["Control"]));



/***/ }),

/***/ "./src/app/om/complex-description-data.ts":
/*!************************************************!*\
  !*** ./src/app/om/complex-description-data.ts ***!
  \************************************************/
/*! exports provided: ComplexDescriptionData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplexDescriptionData", function() { return ComplexDescriptionData; });
var ComplexDescriptionData = /** @class */ (function () {
    function ComplexDescriptionData(locData) {
        this.descriptions = [];
        this.descRefs = [];
        if (!locData || !locData.description)
            return;
        if (locData.description.length == 0)
            return;
        for (var j = 0; j < locData.description.length; j++) {
            var descPar = locData.description[j];
            this.descriptions[j] = descPar.split(/\{\d*\}/);
            this.descRefs[j] = [];
            var continueAnalyze = true;
            var _loop_1 = function () {
                var matchResult = descPar.match(/\{\d*\}/);
                if (matchResult && matchResult.length > 0) {
                    descPar = descPar.substr(matchResult.index + matchResult[0].length);
                    var id_1 = +matchResult[0].substr(1, 1);
                    var index = locData.refs.findIndex(function (ref) { return ref.index == id_1; });
                    this_1.descRefs[j].push(locData.refs[index]);
                }
                else {
                    continueAnalyze = false;
                }
            };
            var this_1 = this;
            while (continueAnalyze) {
                _loop_1();
            }
        }
    }
    return ComplexDescriptionData;
}());



/***/ }),

/***/ "./src/app/om/desc-references.ts":
/*!***************************************!*\
  !*** ./src/app/om/desc-references.ts ***!
  \***************************************/
/*! exports provided: DescRefTypes, DescReferences */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescRefTypes", function() { return DescRefTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescReferences", function() { return DescReferences; });
var DescRefTypes;
(function (DescRefTypes) {
    DescRefTypes[DescRefTypes["Location"] = 1] = "Location";
    DescRefTypes[DescRefTypes["Trail"] = 2] = "Trail";
})(DescRefTypes || (DescRefTypes = {}));
var DescReferences = /** @class */ (function () {
    function DescReferences(index, id, name, type, oldLink) {
        this.index = index;
        this.id = id;
        this.name = name;
        this.type = type;
        this.oldLink = oldLink;
    }
    return DescReferences;
}());



/***/ }),

/***/ "./src/app/om/geolocation-data.ts":
/*!****************************************!*\
  !*** ./src/app/om/geolocation-data.ts ***!
  \****************************************/
/*! exports provided: GeolocationData, GeolocationStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationData", function() { return GeolocationData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationStatus", function() { return GeolocationStatus; });
var GeolocationData = /** @class */ (function () {
    function GeolocationData(status) {
        this._previousStatus = GeolocationStatus.Disabled;
        this._status = GeolocationStatus.Disabled;
        this.status = status;
    }
    Object.defineProperty(GeolocationData.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (status) {
            this._previousStatus = this._status;
            this._status = status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GeolocationData.prototype, "firstActivation", {
        get: function () {
            return this._previousStatus == GeolocationStatus.Disabled && this._status != GeolocationStatus.Disabled;
        },
        enumerable: true,
        configurable: true
    });
    GeolocationData.prototype.confirmStatus = function () {
        this._previousStatus = this._status;
    };
    return GeolocationData;
}());

var GeolocationStatus;
(function (GeolocationStatus) {
    GeolocationStatus[GeolocationStatus["Disabled"] = 0] = "Disabled";
    GeolocationStatus[GeolocationStatus["Active"] = 1] = "Active";
    GeolocationStatus[GeolocationStatus["ActiveWithError"] = 2] = "ActiveWithError";
})(GeolocationStatus || (GeolocationStatus = {}));


/***/ }),

/***/ "./src/app/om/img-data.ts":
/*!********************************!*\
  !*** ./src/app/om/img-data.ts ***!
  \********************************/
/*! exports provided: APImageData, APImageTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APImageData", function() { return APImageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APImageTypes", function() { return APImageTypes; });
var APImageData = /** @class */ (function () {
    function APImageData(id, title, description, photoname, type, locid, ext, trailId, featureId) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.photoname = photoname;
        this.type = type;
        this.locid = locid;
        this.ext = ext;
        this.trailId = trailId;
        this.featureId = featureId;
    }
    return APImageData;
}());

var APImageTypes;
(function (APImageTypes) {
    APImageTypes[APImageTypes["small"] = 0] = "small";
    APImageTypes[APImageTypes["big"] = 1] = "big";
    APImageTypes[APImageTypes["bigAndSmall"] = 2] = "bigAndSmall";
})(APImageTypes || (APImageTypes = {}));


/***/ }),

/***/ "./src/app/om/loc-data.ts":
/*!********************************!*\
  !*** ./src/app/om/loc-data.ts ***!
  \********************************/
/*! exports provided: LocationData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationData", function() { return LocationData; });
/* harmony import */ var _desc_references__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./desc-references */ "./src/app/om/desc-references.ts");

var LocationData = /** @class */ (function () {
    function LocationData(id, description, name, rating, refs) {
        if (rating === void 0) { rating = 0; }
        this.id = id;
        this.description = description;
        this.name = name;
        this.rating = rating;
        this.refs = refs;
        this.type = _desc_references__WEBPACK_IMPORTED_MODULE_0__["DescRefTypes"].Location;
    }
    LocationData.clone = function (oldLoc) {
        return new LocationData(oldLoc.id, oldLoc.description, oldLoc.name, oldLoc.rating, oldLoc.refs);
    };
    return LocationData;
}());



/***/ }),

/***/ "./src/app/om/loc-prev.response.ts":
/*!*****************************************!*\
  !*** ./src/app/om/loc-prev.response.ts ***!
  \*****************************************/
/*! exports provided: LocationPreviewResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPreviewResponse", function() { return LocationPreviewResponse; });
/* harmony import */ var _loc_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loc-data */ "./src/app/om/loc-data.ts");

var LocationPreviewResponse = /** @class */ (function () {
    function LocationPreviewResponse(oldLoc) {
        this.mainData = _loc_data__WEBPACK_IMPORTED_MODULE_0__["LocationData"].clone(oldLoc.mainData);
        this.trailRefs = oldLoc.trailRefs;
        this.imagesData = oldLoc.imagesData;
    }
    return LocationPreviewResponse;
}());



/***/ }),

/***/ "./src/app/om/menu-entry-data.ts":
/*!***************************************!*\
  !*** ./src/app/om/menu-entry-data.ts ***!
  \***************************************/
/*! exports provided: MenuEntryData, MenuEntryStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuEntryData", function() { return MenuEntryData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuEntryStatus", function() { return MenuEntryStatus; });
var MenuEntryData = /** @class */ (function () {
    function MenuEntryData(defName, translKey, routerLink, _status, isExclusive) {
        if (isExclusive === void 0) { isExclusive = true; }
        this.defName = defName;
        this.translKey = translKey;
        this.routerLink = routerLink;
        this._status = _status;
        this.isExclusive = isExclusive;
    }
    Object.defineProperty(MenuEntryData.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: true,
        configurable: true
    });
    MenuEntryData.prototype.setActive = function () {
        this._status = MenuEntryStatus.Active;
    };
    MenuEntryData.prototype.setDefault = function () {
        this._status = MenuEntryStatus.Default;
    };
    return MenuEntryData;
}());

var MenuEntryStatus;
(function (MenuEntryStatus) {
    MenuEntryStatus[MenuEntryStatus["Default"] = 0] = "Default";
    MenuEntryStatus[MenuEntryStatus["Active"] = 1] = "Active";
    MenuEntryStatus[MenuEntryStatus["Disable"] = -1] = "Disable";
})(MenuEntryStatus || (MenuEntryStatus = {}));


/***/ }),

/***/ "./src/app/om/menu-tree.ts":
/*!*********************************!*\
  !*** ./src/app/om/menu-tree.ts ***!
  \*********************************/
/*! exports provided: MenuTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuTree", function() { return MenuTree; });
var MenuTree = /** @class */ (function () {
    function MenuTree(value, children) {
        this._value = value;
        if (children)
            this._children = children;
        else
            this._children = [];
    }
    Object.defineProperty(MenuTree.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuTree.prototype, "children", {
        get: function () {
            // returns a copy
            return this._children.map(function (c) { return c; });
        },
        enumerable: true,
        configurable: true
    });
    return MenuTree;
}());



/***/ }),

/***/ "./src/app/om/par-with-refs.ts":
/*!*************************************!*\
  !*** ./src/app/om/par-with-refs.ts ***!
  \*************************************/
/*! exports provided: ParWithRefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParWithRefs", function() { return ParWithRefs; });
/**
 * It represents a paragraph with reference informations
 */
var ParWithRefs = /** @class */ (function () {
    function ParWithRefs(description, initDescRefs, parIndex) {
        this.parIndex = parIndex;
        this.descriptions = [];
        if (!description)
            return;
        this.descriptions = description.split(/\{\d*\}/);
        this.descRefs = [];
        var continueAnalyze = true;
        var _loop_1 = function () {
            var matchResult = description.match(/\{\d*\}/);
            if (matchResult && matchResult.length > 0) {
                description = description.substr(matchResult.index + matchResult[0].length);
                var id_1 = +matchResult[0].substr(1, 1);
                var index = initDescRefs.findIndex(function (ref) { return ref.index == id_1; });
                this_1.descRefs.push(initDescRefs[index]);
            }
            else {
                continueAnalyze = false;
            }
        };
        var this_1 = this;
        while (continueAnalyze) {
            _loop_1();
        }
    }
    ParWithRefs.generatePar = function (input) {
        if (!input)
            return null;
        return new ParWithRefs(input.description, input.ref, input.parIndex);
    };
    return ParWithRefs;
}());



/***/ }),

/***/ "./src/app/om/trail-header-data.ts":
/*!*****************************************!*\
  !*** ./src/app/om/trail-header-data.ts ***!
  \*****************************************/
/*! exports provided: TrailHeaderData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailHeaderData", function() { return TrailHeaderData; });
/* harmony import */ var _desc_references__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./desc-references */ "./src/app/om/desc-references.ts");
/* harmony import */ var _par_with_refs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./par-with-refs */ "./src/app/om/par-with-refs.ts");


var TrailHeaderData = /** @class */ (function () {
    function TrailHeaderData(id, pars, name, level, rating, stepsLayerName, intersectionsLayerName) {
        if (rating === void 0) { rating = 0; }
        this.id = id;
        this.pars = pars;
        this.name = name;
        this.level = level;
        this.rating = rating;
        this.stepsLayerName = stepsLayerName;
        this.intersectionsLayerName = intersectionsLayerName;
        this.type = _desc_references__WEBPACK_IMPORTED_MODULE_0__["DescRefTypes"].Trail;
    }
    TrailHeaderData.generateMainData = function (input) {
        return new TrailHeaderData(input.id, input.pars.map(function (inPar) { return _par_with_refs__WEBPACK_IMPORTED_MODULE_1__["ParWithRefs"].generatePar(inPar); }).sort(function (par1, par2) { return par1.parIndex - par2.parIndex; }), input.name, input.level, input.rating, input.stepsLayerName, input.intersectionsLayerName);
    };
    return TrailHeaderData;
}());



/***/ }),

/***/ "./src/app/om/trail-par-desc.ts":
/*!**************************************!*\
  !*** ./src/app/om/trail-par-desc.ts ***!
  \**************************************/
/*! exports provided: TrailParDesc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailParDesc", function() { return TrailParDesc; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _par_with_refs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./par-with-refs */ "./src/app/om/par-with-refs.ts");


var TrailParDesc = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TrailParDesc, _super);
    function TrailParDesc(description, initDescRefs, parIndex, mainTrailsID, featureId, intersectionFeatureIds
    //TODO  add here and on the db an array of intersection feature ids. 
    //      in the feature will be saved a referece to the location id (new kind of location for it), that will link to a photo
    ) {
        var _this = _super.call(this, description, initDescRefs, parIndex) || this;
        _this.mainTrailsID = mainTrailsID;
        _this.featureId = featureId;
        _this.intersectionFeatureIds = intersectionFeatureIds;
        return _this;
    }
    TrailParDesc.prototype.isDummySec = function () {
        return this.parIndex == -1;
    };
    TrailParDesc.generatePar = function (input) {
        if (!input)
            return null;
        return new TrailParDesc(input.description, input.ref, input.parIndex, input.mainTrailsID, input.featureId, input.intersectionFeatureIds);
    };
    TrailParDesc.getDummyTrailParDesc = function () {
        return new TrailParDesc(null, [], -1, -1, -1, []);
    };
    return TrailParDesc;
}(_par_with_refs__WEBPACK_IMPORTED_MODULE_1__["ParWithRefs"]));



/***/ }),

/***/ "./src/app/om/trail-prev.response.ts":
/*!*******************************************!*\
  !*** ./src/app/om/trail-prev.response.ts ***!
  \*******************************************/
/*! exports provided: TrailPreviewResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailPreviewResponse", function() { return TrailPreviewResponse; });
/* harmony import */ var _trail_header_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trail-header-data */ "./src/app/om/trail-header-data.ts");
/* harmony import */ var _trail_par_desc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trail-par-desc */ "./src/app/om/trail-par-desc.ts");


var TrailPreviewResponse = /** @class */ (function () {
    function TrailPreviewResponse(inputLoc) {
        this.mainData = _trail_header_data__WEBPACK_IMPORTED_MODULE_0__["TrailHeaderData"].generateMainData(inputLoc.mainData);
        this.pars = inputLoc.pars.map(function (inPars) { return _trail_par_desc__WEBPACK_IMPORTED_MODULE_1__["TrailParDesc"].generatePar(inPars); }).sort(function (par1, par2) { return par1.parIndex - par2.parIndex; });
    }
    return TrailPreviewResponse;
}());



/***/ }),

/***/ "./src/app/photo/photo.component.scss":
/*!********************************************!*\
  !*** ./src/app/photo/photo.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  padding: 1em 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG8vQzpcXFVzZXJzXFxQYW9sb1xcU3ZpbHVwcG9cXEFiYmFkaWFQYXNzZWdnaWF0ZVxcQWJiYWRpYVBhc3NlZ2dpYXRlL3NyY1xcYXBwXFxwaG90b1xccGhvdG8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Bob3RvL3Bob3RvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3Bob3RvL3Bob3RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhclxyXG57XHJcbiAgICBwYWRkaW5nOiAxZW0gMC41ZW07XHJcbn0iLCIubmF2YmFyIHtcbiAgcGFkZGluZzogMWVtIDAuNWVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/photo/photo.component.ts":
/*!******************************************!*\
  !*** ./src/app/photo/photo.component.ts ***!
  \******************************************/
/*! exports provided: PhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoComponent", function() { return PhotoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_communication_sidebar_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/communication/sidebar-data.service */ "./src/app/services/communication/sidebar-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PhotoComponent = /** @class */ (function () {
    function PhotoComponent(sidebarDataService, activatedRoute) {
        this.sidebarDataService = sidebarDataService;
        this.activatedRoute = activatedRoute;
        this.photos = ["foto 1", "foto 2", "foto 3", "foto 4", "foto 5", "foto 6"];
    }
    PhotoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.url.subscribe(function (url) { return _this.sidebarDataService.setMainActiveByRoute(url); });
    };
    PhotoComponent.prototype.onMenuClick = function () {
        this.sidebarDataService.setState(true);
    };
    PhotoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-photo',
            template: __webpack_require__(/*! raw-loader!./photo.component.html */ "./node_modules/raw-loader/index.js!./src/app/photo/photo.component.html"),
            styles: [__webpack_require__(/*! ./photo.component.scss */ "./src/app/photo/photo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_communication_sidebar_data_service__WEBPACK_IMPORTED_MODULE_2__["SidebarDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PhotoComponent);
    return PhotoComponent;
}());



/***/ }),

/***/ "./src/app/pipes/img-url.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/img-url.pipe.ts ***!
  \***************************************/
/*! exports provided: ImgUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgUrlPipe", function() { return ImgUrlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _om_img_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../om/img-data */ "./src/app/om/img-data.ts");
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/environments/environment */ "./src/environments/environment.ts");




var ImgUrlPipe = /** @class */ (function () {
    function ImgUrlPipe() {
    }
    ImgUrlPipe.prototype.transform = function (value, maxSize) {
        if (maxSize === void 0) { maxSize = false; }
        var imgFolder = "img";
        switch (value.type) {
            case _om_img_data__WEBPACK_IMPORTED_MODULE_2__["APImageTypes"].small:
                return _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].protocolName + _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverName + '/' + imgFolder + '/small/' + value.photoname + "." + value.ext;
            case _om_img_data__WEBPACK_IMPORTED_MODULE_2__["APImageTypes"].big:
                return _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].protocolName + _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverName + '/' + imgFolder + '/big/' + value.photoname + "." + value.ext;
            case _om_img_data__WEBPACK_IMPORTED_MODULE_2__["APImageTypes"].bigAndSmall:
                if (maxSize) {
                    return _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].protocolName + _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverName + '/' + imgFolder + '/big/' + value.photoname + "." + value.ext;
                }
                else {
                    return _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].protocolName + _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverName + '/' + imgFolder + '/small/' + value.photoname + "." + value.ext;
                }
            default:
                return '';
        }
    };
    ImgUrlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'imgUrl'
        })
    ], ImgUrlPipe);
    return ImgUrlPipe;
}());



/***/ }),

/***/ "./src/app/services/communication/preview.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/communication/preview.service.ts ***!
  \***********************************************************/
/*! exports provided: PreviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewService", function() { return PreviewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _om_desc_references__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../om/desc-references */ "./src/app/om/desc-references.ts");




var PreviewService = /** @class */ (function () {
    function PreviewService() {
        this.isOpenSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.newRef = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.trailHeaderData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.trailActiveSection = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.isOpen$ = this.isOpenSource.asObservable();
        this.newRef$ = this.newRef.asObservable();
        this.trailHeaderData$ = this.trailHeaderData.asObservable();
        this.trailActiveSection$ = this.trailActiveSection.asObservable();
    }
    // Service message commands
    PreviewService.prototype.setState = function (isOpen) {
        this.isOpenSource.next(isOpen);
    };
    PreviewService.prototype.setNewRef = function (ref) {
        this.newRef.next(ref);
        if (ref.type == _om_desc_references__WEBPACK_IMPORTED_MODULE_3__["DescRefTypes"].Location) {
            this.setTrailHeaderData(null);
        }
    };
    PreviewService.prototype.setTrailHeaderData = function (hd) {
        this.trailHeaderData.next(hd);
    };
    PreviewService.prototype.setTrailActiveSection = function (as) {
        this.trailActiveSection.next(as);
    };
    PreviewService.prototype.getTrailActiveSectionCurrentVal = function () {
        return this.trailActiveSection.value;
    };
    PreviewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PreviewService);
    return PreviewService;
}());



/***/ }),

/***/ "./src/app/services/communication/sidebar-data.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/services/communication/sidebar-data.service.ts ***!
  \****************************************************************/
/*! exports provided: SidebarDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarDataService", function() { return SidebarDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _om_menu_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../om/menu-tree */ "./src/app/om/menu-tree.ts");
/* harmony import */ var _om_menu_entry_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../om/menu-entry-data */ "./src/app/om/menu-entry-data.ts");






var SidebarDataService = /** @class */ (function () {
    function SidebarDataService(router) {
        this.router = router;
        // As from documentation: A Subject that requires an initial value and emits its current value to new subscribers
        // that's the best option in this case
        this.isOpen = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.isOpen$ = this.isOpen.asObservable();
        this.menuEntries = [];
        var menuEntry = new _om_menu_entry_data__WEBPACK_IMPORTED_MODULE_5__["MenuEntryData"]("Mappa", "map", "map", _om_menu_entry_data__WEBPACK_IMPORTED_MODULE_5__["MenuEntryStatus"].Default);
        var menuSubEntry1 = new _om_menu_entry_data__WEBPACK_IMPORTED_MODULE_5__["MenuEntryData"]("Mostra Luoghi", "loc", "loc", _om_menu_entry_data__WEBPACK_IMPORTED_MODULE_5__["MenuEntryStatus"].Default, false);
        var menuSubEntry2 = new _om_menu_entry_data__WEBPACK_IMPORTED_MODULE_5__["MenuEntryData"]("Mostra Percorsi", "trails", "trails", _om_menu_entry_data__WEBPACK_IMPORTED_MODULE_5__["MenuEntryStatus"].Default, false);
        this.menuEntries.push(new _om_menu_tree__WEBPACK_IMPORTED_MODULE_4__["MenuTree"](menuEntry, [menuSubEntry1, menuSubEntry2]));
        menuEntry = new _om_menu_entry_data__WEBPACK_IMPORTED_MODULE_5__["MenuEntryData"]("Photos", "photo", "photo", _om_menu_entry_data__WEBPACK_IMPORTED_MODULE_5__["MenuEntryStatus"].Default);
        this.menuEntries.push(new _om_menu_tree__WEBPACK_IMPORTED_MODULE_4__["MenuTree"](menuEntry));
        menuEntry = new _om_menu_entry_data__WEBPACK_IMPORTED_MODULE_5__["MenuEntryData"]("Link", "links", "", _om_menu_entry_data__WEBPACK_IMPORTED_MODULE_5__["MenuEntryStatus"].Disable);
        this.menuEntries.push(new _om_menu_tree__WEBPACK_IMPORTED_MODULE_4__["MenuTree"](menuEntry));
    }
    // Service message commands
    SidebarDataService.prototype.setState = function (isOpen) {
        this.isOpen.next(isOpen);
    };
    SidebarDataService.prototype.getActiveMainEntryIndex = function () {
        if (!this.menuEntries)
            return -1;
        return this.menuEntries.findIndex(function (entry) { return entry.value.status == _om_menu_entry_data__WEBPACK_IMPORTED_MODULE_5__["MenuEntryStatus"].Active; });
    };
    SidebarDataService.prototype.resetSubEntryStatus = function (mainIndex, leaveNotExclusive) {
        if (leaveNotExclusive === void 0) { leaveNotExclusive = false; }
        for (var i = 0; i < this.menuEntries[mainIndex].children.length; i++) {
            if (leaveNotExclusive && !this.menuEntries[mainIndex].children[i].isExclusive)
                continue;
            this.menuEntries[mainIndex].children[i].setDefault();
        }
    };
    SidebarDataService.prototype.resetMainEntryStatus = function () {
        for (var i = 0; i < this.menuEntries.length; i++) {
            if (this.menuEntries[i].value.status != _om_menu_entry_data__WEBPACK_IMPORTED_MODULE_5__["MenuEntryStatus"].Disable)
                this.menuEntries[i].value.setDefault();
        }
    };
    SidebarDataService.prototype.setActiveEntries = function (selectedMain, selectedSub, navigate) {
        if (navigate === void 0) { navigate = true; }
        var activeMainIndex = this.getActiveMainEntryIndex();
        if (activeMainIndex != selectedMain) {
            if (activeMainIndex >= 0)
                this.menuEntries[activeMainIndex].value.setDefault();
            this.menuEntries[selectedMain].value.setActive();
        }
        if (selectedSub >= 0) {
            // if the current main index was already selected, I check if the subindex was already active
            if (activeMainIndex == selectedMain) {
                var newSelChildren = this.menuEntries[selectedMain].children[selectedSub];
                if (newSelChildren.status == _om_menu_entry_data__WEBPACK_IMPORTED_MODULE_5__["MenuEntryStatus"].Active) {
                    if (!newSelChildren.isExclusive)
                        newSelChildren.setDefault();
                    this.manageNavigation(selectedMain, navigate);
                    return;
                }
            }
            if (activeMainIndex >= 0)
                this.resetSubEntryStatus(activeMainIndex, true);
            this.menuEntries[selectedMain].children[selectedSub].setActive();
        }
        else {
            if (activeMainIndex >= 0)
                this.resetSubEntryStatus(activeMainIndex);
        }
        this.manageNavigation(selectedMain, navigate);
    };
    SidebarDataService.prototype.setMainActiveByRoute = function (u) {
        var path = u.reduce(function (prevVal, curVal, currIndex, array) { return prevVal + (currIndex == 0 ? "" : "/") + curVal.path; }, "");
        this.resetMainEntryStatus();
        var mainIndex = this.menuEntries.findIndex(function (entry) { return entry.value.routerLink == path; });
        this.setActiveEntries(mainIndex, -1, false);
        this.activateSubEntriesByUrl(mainIndex, u);
    };
    /**
     * It activates menu subentries of the provided main index entry based on the optional parameters of the url
     *
     * @param mainIndex main menu entry index
     * @param u urlsegment array
     */
    SidebarDataService.prototype.activateSubEntriesByUrl = function (mainIndex, u) {
        var e_1, _a, e_2, _b;
        if (!this.menuEntries[mainIndex].children)
            return;
        try {
            for (var u_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](u), u_1_1 = u_1.next(); !u_1_1.done; u_1_1 = u_1.next()) {
                var url = u_1_1.value;
                if (url.parameters) {
                    var _loop_1 = function (paramKey) {
                        var index = this_1.menuEntries[mainIndex].children.findIndex(function (entry) { return entry.routerLink == paramKey; });
                        if (index >= 0 && this_1.menuEntries[mainIndex].children[index].status != _om_menu_entry_data__WEBPACK_IMPORTED_MODULE_5__["MenuEntryStatus"].Disable) {
                            if (+url.parameters[paramKey] == 1)
                                this_1.menuEntries[mainIndex].children[index].setActive();
                            else
                                this_1.menuEntries[mainIndex].children[index].setDefault();
                        }
                    };
                    var this_1 = this;
                    try {
                        for (var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](Object.keys(url.parameters)), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var paramKey = _d.value;
                            _loop_1(paramKey);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (u_1_1 && !u_1_1.done && (_a = u_1.return)) _a.call(u_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    SidebarDataService.prototype.getActiveSub = function (param) {
        var mainIndex;
        var routerLinkPath;
        if (typeof param === 'string') {
            routerLinkPath = param;
        }
        else {
            mainIndex = param;
        }
        if (!mainIndex) {
            if (!routerLinkPath) {
                return;
            }
            else {
                for (var i = 0; i < this.menuEntries.length; i++) {
                    if (this.menuEntries[i].value.routerLink == routerLinkPath) {
                        mainIndex = i;
                        break;
                    }
                }
            }
        }
        return this.menuEntries[mainIndex].children.filter(function (entry) { return entry.status == _om_menu_entry_data__WEBPACK_IMPORTED_MODULE_5__["MenuEntryStatus"].Active; });
    };
    /**
     * Manages navigation from main index. Active subindexes are passed as optional parameter
     * @param mainIndex
     */
    SidebarDataService.prototype.manageNavigation = function (mainIndex, navigate) {
        var e_3, _a;
        if (navigate === void 0) { navigate = true; }
        if (!navigate)
            return;
        var mainRouterPath = "/" + this.menuEntries[mainIndex].value.routerLink;
        var optionalParameters = {};
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.menuEntries[mainIndex].children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                if (child.status != _om_menu_entry_data__WEBPACK_IMPORTED_MODULE_5__["MenuEntryStatus"].Disable) {
                    optionalParameters[child.routerLink] = child.status;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.router.navigate([mainRouterPath, optionalParameters]);
    };
    SidebarDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SidebarDataService);
    return SidebarDataService;
}());



/***/ }),

/***/ "./src/app/services/locations/locations.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/locations/locations.service.ts ***!
  \*********************************************************/
/*! exports provided: LocationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsService", function() { return LocationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _om_loc_prev_response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../om/loc-prev.response */ "./src/app/om/loc-prev.response.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var LocationsService = /** @class */ (function () {
    function LocationsService(http, locale) {
        this.http = http;
        this.locale = locale;
    }
    LocationsService.prototype.getLocationData = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].protocolName + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverName + ("/services/locations/map/" + this.locale + "/" + id))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (locRes) { return new _om_loc_prev_response__WEBPACK_IMPORTED_MODULE_4__["LocationPreviewResponse"](locRes); }));
    };
    LocationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String])
    ], LocationsService);
    return LocationsService;
}());



/***/ }),

/***/ "./src/app/services/my-map/sentieri-layer.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/my-map/sentieri-layer.service.ts ***!
  \***********************************************************/
/*! exports provided: SentieriLayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentieriLayerService", function() { return SentieriLayerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _vector_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vector-styles */ "./src/app/services/my-map/vector-styles.ts");
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");
/* harmony import */ var ol_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/format */ "./node_modules/ol/format.js");
/* harmony import */ var ol_layer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _communication_preview_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../communication/preview.service */ "./src/app/services/communication/preview.service.ts");








var SentieriLayerService = /** @class */ (function () {
    function SentieriLayerService(previewService) {
        this.previewService = previewService;
    }
    SentieriLayerService.prototype.getFunctionStyle = function (tipoStrada, selected) {
        var _this = this;
        return function (feature, resolution) {
            var styleForLines = Object(_vector_styles__WEBPACK_IMPORTED_MODULE_2__["getVectorStyle"])(tipoStrada, resolution, selected);
            var styleForPoint;
            if (styleForLines.getText()) {
                styleForLines.getText().setText(feature.getProperties().name);
            }
            if (feature.getGeometry().getType() == "Point") {
                styleForPoint = Object(_vector_styles__WEBPACK_IMPORTED_MODULE_2__["getPointStyle"])(feature, resolution, selected);
                if (tipoStrada == _vector_styles__WEBPACK_IMPORTED_MODULE_2__["VectorStyleType"].PasseggiataSelez)
                    _this.manageIntersectionLayerVisibility(feature, styleForPoint);
            }
            var stylesForVector = {
                'Point': styleForPoint,
                'LineString': styleForLines,
                'MultiLineString': styleForLines,
                'MultiPoint': styleForPoint,
            };
            return stylesForVector[feature.getGeometry().getType()];
        };
    };
    SentieriLayerService.prototype.getJsonLayerFromUrl = function (url, tipoStrada) {
        var vectorSource = new ol_source__WEBPACK_IMPORTED_MODULE_3__["Vector"]({
            format: new ol_format__WEBPACK_IMPORTED_MODULE_4__["GeoJSON"](),
            url: url,
        });
        return new ol_layer__WEBPACK_IMPORTED_MODULE_5__["Vector"]({
            source: vectorSource,
            minResolution: 0.5,
            maxResolution: 20,
            style: this.getFunctionStyle(tipoStrada, false)
        });
    };
    SentieriLayerService.prototype.manageIntersectionLayerVisibility = function (feature, definedStyle) {
        var activeSec = this.previewService.getTrailActiveSectionCurrentVal();
        if (activeSec) {
            var currentInterFeatIds = activeSec.intersectionFeatureIds;
            if (currentInterFeatIds.some(function (id) { return id == feature.getProperties().id; }))
                definedStyle.getImage().setScale(1.15);
        }
    };
    SentieriLayerService.prototype.getSentieri = function () {
        var layersPercorsi = [];
        layersPercorsi.push(this.getJsonLayerFromUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].protocolName + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].serverName + '/vector/sentieriUfficiali.json', _vector_styles__WEBPACK_IMPORTED_MODULE_2__["VectorStyleType"].SentieriUfficiali));
        layersPercorsi.push(this.getJsonLayerFromUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].protocolName + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].serverName + '/vector/piste.json', _vector_styles__WEBPACK_IMPORTED_MODULE_2__["VectorStyleType"].Piste));
        layersPercorsi.push(this.getJsonLayerFromUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].protocolName + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].serverName + '/vector/strade.json', _vector_styles__WEBPACK_IMPORTED_MODULE_2__["VectorStyleType"].Strade));
        layersPercorsi.push(this.getJsonLayerFromUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].protocolName + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].serverName + '/vector/traccia.json', _vector_styles__WEBPACK_IMPORTED_MODULE_2__["VectorStyleType"].Tracce));
        layersPercorsi.push(this.getJsonLayerFromUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].protocolName + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].serverName + '/vector/tracceImboscate.json', _vector_styles__WEBPACK_IMPORTED_MODULE_2__["VectorStyleType"].Imboscate));
        layersPercorsi.push(this.getJsonLayerFromUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].protocolName + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].serverName + '/vector/viandante.json', _vector_styles__WEBPACK_IMPORTED_MODULE_2__["VectorStyleType"].Viandante));
        return new ol_layer__WEBPACK_IMPORTED_MODULE_5__["Group"]({ layers: layersPercorsi });
    };
    SentieriLayerService.prototype.getLuoghi = function () {
        return this.getJsonLayerFromUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].protocolName + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].serverName + '/vector/luoghi.json', _vector_styles__WEBPACK_IMPORTED_MODULE_2__["VectorStyleType"].Luoghi);
    };
    SentieriLayerService.prototype.getPercorsi = function () {
        return this.getJsonLayerFromUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].protocolName + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].serverName + '/vector/percorsi.json', _vector_styles__WEBPACK_IMPORTED_MODULE_2__["VectorStyleType"].Percorsi);
    };
    SentieriLayerService.prototype.getLayerByName = function (layerName, layerNameProperties, vecotrStyleType) {
        if (vecotrStyleType === void 0) { vecotrStyleType = _vector_styles__WEBPACK_IMPORTED_MODULE_2__["VectorStyleType"].PasseggiataSelez; }
        var layer = this.getJsonLayerFromUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].protocolName + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].serverName + '/vector/' + layerName + '.json', vecotrStyleType);
        if (layerNameProperties) {
            layer.setProperties({ "layerName": layerNameProperties });
        }
        return layer;
    };
    SentieriLayerService.prototype.getVectorSourceByName = function (layerName) {
        return new ol_source__WEBPACK_IMPORTED_MODULE_3__["Vector"]({
            format: new ol_format__WEBPACK_IMPORTED_MODULE_4__["GeoJSON"](),
            url: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].protocolName + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].serverName + '/vector/' + layerName + '.json',
        });
    };
    SentieriLayerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_communication_preview_service__WEBPACK_IMPORTED_MODULE_7__["PreviewService"]])
    ], SentieriLayerService);
    return SentieriLayerService;
}());



/***/ }),

/***/ "./src/app/services/my-map/vector-styles.ts":
/*!**************************************************!*\
  !*** ./src/app/services/my-map/vector-styles.ts ***!
  \**************************************************/
/*! exports provided: FontSizes, FontWeights, VectorStyleType, ICON_TYPE_PEAK, ICON_TYPE_WATERFALL, ICON_TYPE_HUT, ICON_TYPE_MUSEUM, ICON_TYPE_VIEWSIGHT, ICON_TYPE_INFO, LOC_TYPE_COMUNE, LOC_TYPE_FRAZIONE, LOC_TYPE_LUOGO, LOC_TYPE_INCROCIO, convertIconName, BootstrapTheme, getVectorStyle, getPointStyle, geolocationStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontSizes", function() { return FontSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontWeights", function() { return FontWeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VectorStyleType", function() { return VectorStyleType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_TYPE_PEAK", function() { return ICON_TYPE_PEAK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_TYPE_WATERFALL", function() { return ICON_TYPE_WATERFALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_TYPE_HUT", function() { return ICON_TYPE_HUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_TYPE_MUSEUM", function() { return ICON_TYPE_MUSEUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_TYPE_VIEWSIGHT", function() { return ICON_TYPE_VIEWSIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_TYPE_INFO", function() { return ICON_TYPE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOC_TYPE_COMUNE", function() { return LOC_TYPE_COMUNE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOC_TYPE_FRAZIONE", function() { return LOC_TYPE_FRAZIONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOC_TYPE_LUOGO", function() { return LOC_TYPE_LUOGO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOC_TYPE_INCROCIO", function() { return LOC_TYPE_INCROCIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertIconName", function() { return convertIconName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapTheme", function() { return BootstrapTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVectorStyle", function() { return getVectorStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPointStyle", function() { return getPointStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geolocationStyle", function() { return geolocationStyle; });
/* harmony import */ var ol_style_TextPlacement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/style/TextPlacement */ "./node_modules/ol/style/TextPlacement.js");
/* harmony import */ var ol_style_RegularShape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/style/RegularShape */ "./node_modules/ol/style/RegularShape.js");
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/style */ "./node_modules/ol/style.js");



var FontSizes;
(function (FontSizes) {
    FontSizes[FontSizes["Small"] = 0] = "Small";
    FontSizes[FontSizes["Medium"] = 1] = "Medium";
    FontSizes[FontSizes["Big"] = 2] = "Big";
})(FontSizes || (FontSizes = {}));
var FontWeights;
(function (FontWeights) {
    FontWeights[FontWeights["Default"] = 0] = "Default";
    FontWeights[FontWeights["Italic"] = 1] = "Italic";
    FontWeights[FontWeights["Bold"] = 2] = "Bold";
})(FontWeights || (FontWeights = {}));
function getFont(size, weight) {
    if (weight === void 0) { weight = FontWeights.Default; }
    var fontType = "sans-serif";
    var sizeConcat = "";
    switch (size) {
        case FontSizes.Small:
            sizeConcat += "14px ";
            break;
        case FontSizes.Medium:
            sizeConcat += "16px ";
            break;
        case FontSizes.Big:
            sizeConcat += "20px ";
            break;
    }
    var weightConcat = translateFontWeight(weight);
    return weightConcat + sizeConcat + fontType;
}
function translateFontWeight(weight) {
    var weightConcat = "";
    switch (weight) {
        case FontWeights.Bold:
            weightConcat += "bold ";
            break;
        case FontWeights.Italic:
            weightConcat += "italic ";
            break;
        case FontWeights.Default:
            weightConcat += " ";
            break;
    }
    return weightConcat;
}
function modifyFontWeight(currentFontInfo, weight) {
    var info = currentFontInfo.split(" ");
    if (info.length > 0) {
        info[0] = translateFontWeight(weight);
    }
    return info.reduce(function (pr, cur, index, array) { return pr + " " + cur; }, "");
}
var VectorStyleType;
(function (VectorStyleType) {
    VectorStyleType[VectorStyleType["SentieriUfficiali"] = 0] = "SentieriUfficiali";
    VectorStyleType[VectorStyleType["Piste"] = 1] = "Piste";
    VectorStyleType[VectorStyleType["Strade"] = 2] = "Strade";
    VectorStyleType[VectorStyleType["Tracce"] = 3] = "Tracce";
    VectorStyleType[VectorStyleType["Imboscate"] = 4] = "Imboscate";
    VectorStyleType[VectorStyleType["Viandante"] = 5] = "Viandante";
    VectorStyleType[VectorStyleType["Luoghi"] = 6] = "Luoghi";
    VectorStyleType[VectorStyleType["Percorsi"] = 7] = "Percorsi";
    VectorStyleType[VectorStyleType["PasseggiataSelez"] = 8] = "PasseggiataSelez";
})(VectorStyleType || (VectorStyleType = {}));
var ICON_TYPE_PEAK = "peak";
var ICON_TYPE_WATERFALL = "cascata";
var ICON_TYPE_HUT = "rifugio";
var ICON_TYPE_MUSEUM = "museo";
var ICON_TYPE_VIEWSIGHT = "vista";
var ICON_TYPE_INFO = "info";
var LOC_TYPE_COMUNE = "comune";
var LOC_TYPE_FRAZIONE = "frazione";
var LOC_TYPE_LUOGO = "luogo";
var LOC_TYPE_INCROCIO = "intersection";
function convertIconName(GeoJSONIconName) {
    var map = {};
    map[ICON_TYPE_PEAK] = "assets/icons/material-design-icons/baseline-terrain-24px.svg";
    map[ICON_TYPE_WATERFALL] = "assets/icons/map-icons/waterfall.svg";
    map[ICON_TYPE_HUT] = "assets/icons/material-design-icons/baseline-home-24px.svg";
    map[ICON_TYPE_MUSEUM] = "assets/icons/map-icons/museum.svg";
    map[ICON_TYPE_VIEWSIGHT] = "assets/icons/map-icons/viewpoint.svg";
    map[ICON_TYPE_INFO] = "assets/icons/material-design-icons/baseline-info-24px.svg";
    // if(!map[GeoJSONIconName])
    // {
    //     map[GeoJSONIconName] = map["peak"];
    // }
    return map[GeoJSONIconName];
}
var BootstrapTheme = /** @class */ (function () {
    function BootstrapTheme() {
    }
    Object.defineProperty(BootstrapTheme, "Instance", {
        get: function () {
            if (!this._instance)
                BootstrapTheme.computeStyles();
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    BootstrapTheme.GetRGBA = function (color, opacity) {
        if (opacity === void 0) { opacity = 1; }
        color = color.trim();
        var pattern = /^#([A-Fa-f0-9]{6})$/;
        if (!color.match(pattern))
            return [0, 0, 0, opacity];
        color = color.replace("#", "");
        var result = [];
        result.push(parseInt(color.substr(0, 2), 16));
        result.push(parseInt(color.substr(2, 2), 16));
        result.push(parseInt(color.substr(4, 2), 16));
        result.push(opacity);
        return result;
    };
    BootstrapTheme.computeStyles = function () {
        var style = getComputedStyle(document.body);
        this._instance = new BootstrapTheme();
        this._instance.primary = style.getPropertyValue('--primary');
        this._instance.secondary = style.getPropertyValue('--secondary');
        this._instance.success = style.getPropertyValue('--success');
        this._instance.info = style.getPropertyValue('--info');
        this._instance.warning = style.getPropertyValue('--warning');
        this._instance.danger = style.getPropertyValue('--danger');
        this._instance.light = style.getPropertyValue('--light');
        this._instance.dark = style.getPropertyValue('--dark');
        this._instance.aplight = style.getPropertyValue('--aplight');
    };
    return BootstrapTheme;
}());

function getVectorStyle(styleType, resolution, selected) {
    var style = new ol_style__WEBPACK_IMPORTED_MODULE_2__["Style"]({});
    switch (styleType) {
        case VectorStyleType.SentieriUfficiali:
            style = new ol_style__WEBPACK_IMPORTED_MODULE_2__["Style"]({
                stroke: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Stroke"]({
                    color: 'red',
                    width: resolution < 10 ? 4 : 3,
                    lineDash: [8, 10]
                }),
                text: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Text"]({
                    font: getFont(FontSizes.Small),
                    placement: ol_style_TextPlacement__WEBPACK_IMPORTED_MODULE_0__["default"].LINE,
                    fill: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Fill"]({
                        color: 'white'
                    }),
                    stroke: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Stroke"]({
                        color: 'black',
                        width: resolution < 10 ? 3 : 2,
                    }),
                })
            });
            break;
        case VectorStyleType.Viandante:
            style = new ol_style__WEBPACK_IMPORTED_MODULE_2__["Style"]({
                stroke: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Stroke"]({
                    color: [255, 102, 204],
                    width: resolution < 10 ? 4 : 3,
                    lineDash: [8, 10]
                }),
                text: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Text"]({
                    font: getFont(FontSizes.Small),
                    placement: ol_style_TextPlacement__WEBPACK_IMPORTED_MODULE_0__["default"].LINE,
                    fill: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Fill"]({
                        color: 'white'
                    }),
                    stroke: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Stroke"]({
                        color: 'black',
                        width: resolution < 10 ? 3 : 2,
                    }),
                })
            });
            break;
        case VectorStyleType.Strade:
            style = new ol_style__WEBPACK_IMPORTED_MODULE_2__["Style"]({
                stroke: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Stroke"]({
                    color: [196, 196, 196],
                    width: resolution < 10 ? 7 : 5,
                }),
                text: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Text"]({
                    font: getFont(FontSizes.Small),
                    placement: ol_style_TextPlacement__WEBPACK_IMPORTED_MODULE_0__["default"].LINE,
                    fill: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Fill"]({
                        color: 'white'
                    }),
                    stroke: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Stroke"]({
                        color: 'black',
                        width: resolution < 10 ? 3 : 2,
                    }),
                })
            });
            break;
        case VectorStyleType.Piste:
            style = new ol_style__WEBPACK_IMPORTED_MODULE_2__["Style"]({
                stroke: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Stroke"]({
                    color: [80, 40, 0],
                    width: resolution < 10 ? 6 : 4,
                }),
                text: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Text"]({
                    font: getFont(FontSizes.Small),
                    placement: ol_style_TextPlacement__WEBPACK_IMPORTED_MODULE_0__["default"].LINE,
                    fill: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Fill"]({
                        color: 'white'
                    }),
                    stroke: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Stroke"]({
                        color: 'black',
                        width: resolution < 10 ? 3 : 2,
                    }),
                })
            });
            break;
        case VectorStyleType.Tracce:
            if (resolution < 10) {
                style = new ol_style__WEBPACK_IMPORTED_MODULE_2__["Style"]({
                    stroke: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Stroke"]({
                        color: [102, 51, 0],
                        width: 3,
                        lineDash: [5, 10]
                    })
                });
            }
            break;
        case VectorStyleType.Imboscate:
            if (resolution < 8) {
                style = new ol_style__WEBPACK_IMPORTED_MODULE_2__["Style"]({
                    stroke: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Stroke"]({
                        color: [256, 196, 0],
                        width: 2,
                        lineDash: [5, 10]
                    })
                });
            }
            break;
        case VectorStyleType.Percorsi:
            var colorStyle = BootstrapTheme.GetRGBA(BootstrapTheme.Instance.aplight, 0.6);
            if (selected)
                colorStyle[3] = 1;
            style = new ol_style__WEBPACK_IMPORTED_MODULE_2__["Style"]({
                stroke: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Stroke"]({
                    color: colorStyle,
                    width: resolution < 10 ? 4 : 3,
                }),
                text: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Text"]({
                    font: getFont(FontSizes.Small),
                    placement: ol_style_TextPlacement__WEBPACK_IMPORTED_MODULE_0__["default"].LINE,
                    fill: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Fill"]({
                        color: 'white'
                    }),
                    stroke: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Stroke"]({
                        color: 'black',
                        width: resolution < 10 ? 3 : 2,
                    }),
                })
            });
            break;
        case VectorStyleType.PasseggiataSelez:
            style = new ol_style__WEBPACK_IMPORTED_MODULE_2__["Style"]({
                stroke: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Stroke"]({
                    color: BootstrapTheme.GetRGBA(BootstrapTheme.Instance.aplight, 1),
                    width: resolution < 10 ? 4 : 3,
                })
            });
            break;
        case VectorStyleType.Luoghi:
            style = new ol_style__WEBPACK_IMPORTED_MODULE_2__["Style"]({
                image: new ol_style_RegularShape__WEBPACK_IMPORTED_MODULE_1__["default"]({
                    fill: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Fill"]({ color: 'red' }),
                    stroke: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Stroke"]({ color: 'black', width: 2 }),
                    points: 5,
                    radius: 10,
                    radius2: 4,
                    angle: 0
                })
            });
            break;
    }
    return style;
}
function getPointStyle(feature, resolution, selected) {
    var style;
    var luogo = feature.getProperties().style;
    if (luogo == LOC_TYPE_COMUNE) {
        style = new ol_style__WEBPACK_IMPORTED_MODULE_2__["Style"]({
            text: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Text"]({
                font: getFont(FontSizes.Big),
                fill: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Fill"]({
                    color: 'white'
                }),
                stroke: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Stroke"]({
                    color: 'black',
                    width: 4,
                }),
            })
        });
    }
    else if (luogo == LOC_TYPE_FRAZIONE) {
        style = new ol_style__WEBPACK_IMPORTED_MODULE_2__["Style"]({
            text: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Text"]({
                font: getFont(FontSizes.Medium),
                fill: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Fill"]({
                    color: 'white'
                }),
                stroke: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Stroke"]({
                    color: 'black',
                    width: 3,
                }),
            })
        });
    }
    else {
        style = new ol_style__WEBPACK_IMPORTED_MODULE_2__["Style"]({
            text: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Text"]({
                font: getFont(FontSizes.Small),
                fill: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Fill"]({
                    color: 'white'
                }),
                stroke: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Stroke"]({
                    color: 'black',
                    width: 3,
                }),
                offsetY: 16
            })
        });
    }
    if (luogo == LOC_TYPE_INCROCIO) {
        style.getText().setText("");
    }
    else if (resolution < 10 || luogo == LOC_TYPE_COMUNE)
        style.getText().setText(feature.getProperties().name);
    else
        style.getText().setText("");
    var imageName = convertIconName(feature.getProperties().icon);
    if (imageName && resolution < 10) {
        var icon = new ol_style__WEBPACK_IMPORTED_MODULE_2__["Icon"]({
            src: imageName,
            color: 'white',
            scale: resolution < 8 && luogo != LOC_TYPE_INCROCIO ? 1.15 : 0.8,
            anchor: [0.5, 0.7]
        });
        style.setImage(icon);
    }
    else
        style.setImage(null);
    if (selected) {
        var oldStrokeWidth = style.getText().getStroke().getWidth();
        style.getText().getStroke().setWidth(oldStrokeWidth * 0.7);
        style.getText().getStroke().setColor(BootstrapTheme.Instance.primary);
        style.getText().getFill().setColor(BootstrapTheme.Instance.light);
        var fontInfo = style.getText().getFont();
        style.getText().setFont(modifyFontWeight(fontInfo, FontWeights.Bold));
    }
    return style;
}
var geolocationStyle = {
    ACCURANCY: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Style"]({
        fill: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Fill"]({
            color: 'rgba(0, 0, 255, 0.2)'
        })
    }),
    POSITION: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Style"]({
        image: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Circle"]({
            radius: 6,
            fill: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Fill"]({
                color: '#3399CC'
            }),
            stroke: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Stroke"]({
                color: '#fff',
                width: 2
            })
        })
    })
};


/***/ }),

/***/ "./src/app/services/trails/trails.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/trails/trails.service.ts ***!
  \***************************************************/
/*! exports provided: TrailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailsService", function() { return TrailsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _om_trail_prev_response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../om/trail-prev.response */ "./src/app/om/trail-prev.response.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var TrailsService = /** @class */ (function () {
    function TrailsService(http, locale) {
        this.http = http;
        this.locale = locale;
    }
    TrailsService.prototype.getTrailData = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].protocolName + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverName + ("/services/trails/map/" + this.locale + "/" + id))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (locRes) { return new _om_trail_prev_response__WEBPACK_IMPORTED_MODULE_4__["TrailPreviewResponse"](locRes); }));
    };
    TrailsService.prototype.getIntersectionImageData = function (trailId, featureId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].protocolName + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverName + ("/services/trails/map/" + this.locale + "/intersection/" + trailId + "/" + featureId));
    };
    TrailsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String])
    ], TrailsService);
    return TrailsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    serverName: "abbadiapasseggiate.herokuapp.com",
    protocolName: "https://",
    tileServerName: "abbadiapasseggiate-tiles.herokuapp.com",
    locale: "en"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Paolo\Sviluppo\AbbadiaPasseggiate\AbbadiaPasseggiate\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map