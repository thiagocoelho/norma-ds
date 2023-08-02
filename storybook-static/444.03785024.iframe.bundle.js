"use strict";(self.webpackChunk_olostecnologia_norma_ds=self.webpackChunk_olostecnologia_norma_ds||[]).push([[444],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}});var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=(0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.Z)(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}},"./node_modules/@mui/material/Grid/Grid.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{ZP:function(){return Grid_Grid}});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),breakpoints=__webpack_require__("./node_modules/@mui/system/esm/breakpoints.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js");var Grid_GridContext=react.createContext(),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getGridUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiGrid",slot)}const GRID_SIZES=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var Grid_gridClasses=(0,generateUtilityClasses.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((spacing=>`spacing-xs-${spacing}`)),...["column-reverse","column","row-reverse","row"].map((direction=>`direction-xs-${direction}`)),...["nowrap","wrap-reverse","wrap"].map((wrap=>`wrap-xs-${wrap}`)),...GRID_SIZES.map((size=>`grid-xs-${size}`)),...GRID_SIZES.map((size=>`grid-sm-${size}`)),...GRID_SIZES.map((size=>`grid-md-${size}`)),...GRID_SIZES.map((size=>`grid-lg-${size}`)),...GRID_SIZES.map((size=>`grid-xl-${size}`))]),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function getOffset(val){const parse=parseFloat(val);return`${parse}${String(val).replace(String(parse),"")||"px"}`}function extractZeroValueBreakpointKeys({breakpoints:breakpoints,values:values}){let nonZeroKey="";Object.keys(values).forEach((key=>{""===nonZeroKey&&0!==values[key]&&(nonZeroKey=key)}));const sortedBreakpointKeysByValue=Object.keys(breakpoints).sort(((a,b)=>breakpoints[a]-breakpoints[b]));return sortedBreakpointKeysByValue.slice(0,sortedBreakpointKeysByValue.indexOf(nonZeroKey))}const GridRoot=(0,styled.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState:ownerState}=props,{container:container,direction:direction,item:item,spacing:spacing,wrap:wrap,zeroMinWidth:zeroMinWidth,breakpoints:breakpoints}=ownerState;let spacingStyles=[];container&&(spacingStyles=function resolveSpacingStyles(spacing,breakpoints,styles={}){if(!spacing||spacing<=0)return[];if("string"==typeof spacing&&!Number.isNaN(Number(spacing))||"number"==typeof spacing)return[styles[`spacing-xs-${String(spacing)}`]];const spacingStyles=[];return breakpoints.forEach((breakpoint=>{const value=spacing[breakpoint];Number(value)>0&&spacingStyles.push(styles[`spacing-${breakpoint}-${String(value)}`])})),spacingStyles}(spacing,breakpoints,styles));const breakpointsStyles=[];return breakpoints.forEach((breakpoint=>{const value=ownerState[breakpoint];value&&breakpointsStyles.push(styles[`grid-${breakpoint}-${String(value)}`])})),[styles.root,container&&styles.container,item&&styles.item,zeroMinWidth&&styles.zeroMinWidth,...spacingStyles,"row"!==direction&&styles[`direction-xs-${String(direction)}`],"wrap"!==wrap&&styles[`wrap-xs-${String(wrap)}`],...breakpointsStyles]}})((({ownerState:ownerState})=>(0,esm_extends.Z)({boxSizing:"border-box"},ownerState.container&&{display:"flex",flexWrap:"wrap",width:"100%"},ownerState.item&&{margin:0},ownerState.zeroMinWidth&&{minWidth:0},"wrap"!==ownerState.wrap&&{flexWrap:ownerState.wrap})),(function generateDirection({theme:theme,ownerState:ownerState}){const directionValues=(0,breakpoints.P$)({values:ownerState.direction,breakpoints:theme.breakpoints.values});return(0,breakpoints.k9)({theme:theme},directionValues,(propValue=>{const output={flexDirection:propValue};return 0===propValue.indexOf("column")&&(output[`& > .${Grid_gridClasses.item}`]={maxWidth:"none"}),output}))}),(function generateRowGap({theme:theme,ownerState:ownerState}){const{container:container,rowSpacing:rowSpacing}=ownerState;let styles={};if(container&&0!==rowSpacing){const rowSpacingValues=(0,breakpoints.P$)({values:rowSpacing,breakpoints:theme.breakpoints.values});let zeroValueBreakpointKeys;"object"==typeof rowSpacingValues&&(zeroValueBreakpointKeys=extractZeroValueBreakpointKeys({breakpoints:theme.breakpoints.values,values:rowSpacingValues})),styles=(0,breakpoints.k9)({theme:theme},rowSpacingValues,((propValue,breakpoint)=>{var _zeroValueBreakpointK;const themeSpacing=theme.spacing(propValue);return"0px"!==themeSpacing?{marginTop:`-${getOffset(themeSpacing)}`,[`& > .${Grid_gridClasses.item}`]:{paddingTop:getOffset(themeSpacing)}}:null!=(_zeroValueBreakpointK=zeroValueBreakpointKeys)&&_zeroValueBreakpointK.includes(breakpoint)?{}:{marginTop:0,[`& > .${Grid_gridClasses.item}`]:{paddingTop:0}}}))}return styles}),(function generateColumnGap({theme:theme,ownerState:ownerState}){const{container:container,columnSpacing:columnSpacing}=ownerState;let styles={};if(container&&0!==columnSpacing){const columnSpacingValues=(0,breakpoints.P$)({values:columnSpacing,breakpoints:theme.breakpoints.values});let zeroValueBreakpointKeys;"object"==typeof columnSpacingValues&&(zeroValueBreakpointKeys=extractZeroValueBreakpointKeys({breakpoints:theme.breakpoints.values,values:columnSpacingValues})),styles=(0,breakpoints.k9)({theme:theme},columnSpacingValues,((propValue,breakpoint)=>{var _zeroValueBreakpointK2;const themeSpacing=theme.spacing(propValue);return"0px"!==themeSpacing?{width:`calc(100% + ${getOffset(themeSpacing)})`,marginLeft:`-${getOffset(themeSpacing)}`,[`& > .${Grid_gridClasses.item}`]:{paddingLeft:getOffset(themeSpacing)}}:null!=(_zeroValueBreakpointK2=zeroValueBreakpointKeys)&&_zeroValueBreakpointK2.includes(breakpoint)?{}:{width:"100%",marginLeft:0,[`& > .${Grid_gridClasses.item}`]:{paddingLeft:0}}}))}return styles}),(function generateGrid({theme:theme,ownerState:ownerState}){let size;return theme.breakpoints.keys.reduce(((globalStyles,breakpoint)=>{let styles={};if(ownerState[breakpoint]&&(size=ownerState[breakpoint]),!size)return globalStyles;if(!0===size)styles={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===size)styles={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const columnsBreakpointValues=(0,breakpoints.P$)({values:ownerState.columns,breakpoints:theme.breakpoints.values}),columnValue="object"==typeof columnsBreakpointValues?columnsBreakpointValues[breakpoint]:columnsBreakpointValues;if(null==columnValue)return globalStyles;const width=Math.round(size/columnValue*1e8)/1e6+"%";let more={};if(ownerState.container&&ownerState.item&&0!==ownerState.columnSpacing){const themeSpacing=theme.spacing(ownerState.columnSpacing);if("0px"!==themeSpacing){const fullWidth=`calc(${width} + ${getOffset(themeSpacing)})`;more={flexBasis:fullWidth,maxWidth:fullWidth}}}styles=(0,esm_extends.Z)({flexBasis:width,flexGrow:0,maxWidth:width},more)}return 0===theme.breakpoints.values[breakpoint]?Object.assign(globalStyles,styles):globalStyles[theme.breakpoints.up(breakpoint)]=styles,globalStyles}),{})}));const useUtilityClasses=ownerState=>{const{classes:classes,container:container,direction:direction,item:item,spacing:spacing,wrap:wrap,zeroMinWidth:zeroMinWidth,breakpoints:breakpoints}=ownerState;let spacingClasses=[];container&&(spacingClasses=function resolveSpacingClasses(spacing,breakpoints){if(!spacing||spacing<=0)return[];if("string"==typeof spacing&&!Number.isNaN(Number(spacing))||"number"==typeof spacing)return[`spacing-xs-${String(spacing)}`];const classes=[];return breakpoints.forEach((breakpoint=>{const value=spacing[breakpoint];if(Number(value)>0){const className=`spacing-${breakpoint}-${String(value)}`;classes.push(className)}})),classes}(spacing,breakpoints));const breakpointsClasses=[];breakpoints.forEach((breakpoint=>{const value=ownerState[breakpoint];value&&breakpointsClasses.push(`grid-${breakpoint}-${String(value)}`)}));const slots={root:["root",container&&"container",item&&"item",zeroMinWidth&&"zeroMinWidth",...spacingClasses,"row"!==direction&&`direction-xs-${String(direction)}`,"wrap"!==wrap&&`wrap-xs-${String(wrap)}`,...breakpointsClasses]};return(0,composeClasses.Z)(slots,getGridUtilityClass,classes)},Grid=react.forwardRef((function Grid(inProps,ref){const themeProps=(0,useThemeProps.Z)({props:inProps,name:"MuiGrid"}),{breakpoints:breakpoints}=(0,useTheme.Z)(),props=(0,extendSxProp.Z)(themeProps),{className:className,columns:columnsProp,columnSpacing:columnSpacingProp,component:component="div",container:container=!1,direction:direction="row",item:item=!1,rowSpacing:rowSpacingProp,spacing:spacing=0,wrap:wrap="wrap",zeroMinWidth:zeroMinWidth=!1}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),rowSpacing=rowSpacingProp||spacing,columnSpacing=columnSpacingProp||spacing,columnsContext=react.useContext(Grid_GridContext),columns=container?columnsProp||12:columnsContext,breakpointsValues={},otherFiltered=(0,esm_extends.Z)({},other);breakpoints.keys.forEach((breakpoint=>{null!=other[breakpoint]&&(breakpointsValues[breakpoint]=other[breakpoint],delete otherFiltered[breakpoint])}));const ownerState=(0,esm_extends.Z)({},props,{columns:columns,container:container,direction:direction,item:item,rowSpacing:rowSpacing,columnSpacing:columnSpacing,wrap:wrap,zeroMinWidth:zeroMinWidth,spacing:spacing},breakpointsValues,{breakpoints:breakpoints.keys}),classes=useUtilityClasses(ownerState);return(0,jsx_runtime.jsx)(Grid_GridContext.Provider,{value:columns,children:(0,jsx_runtime.jsx)(GridRoot,(0,esm_extends.Z)({ownerState:ownerState,className:(0,clsx_m.Z)(classes.root,className),as:component,ref:ref},otherFiltered))})}));var Grid_Grid=Grid},"./node_modules/@mui/material/Paper/Paper.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Paper_Paper}});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js");var styles_getOverlayAlpha=elevation=>{let alphaValue;return alphaValue=elevation<1?5.11916*elevation**2:4.5*Math.log(elevation+1)+2,(alphaValue/100).toFixed(2)},useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getPaperUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiPaper",slot)}(0,generateUtilityClasses.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component","elevation","square","variant"],PaperRoot=(0,styled.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState:ownerState}=props;return[styles.root,styles[ownerState.variant],!ownerState.square&&styles.rounded,"elevation"===ownerState.variant&&styles[`elevation${ownerState.elevation}`]]}})((({theme:theme,ownerState:ownerState})=>{var _theme$vars$overlays;return(0,esm_extends.Z)({backgroundColor:(theme.vars||theme).palette.background.paper,color:(theme.vars||theme).palette.text.primary,transition:theme.transitions.create("box-shadow")},!ownerState.square&&{borderRadius:theme.shape.borderRadius},"outlined"===ownerState.variant&&{border:`1px solid ${(theme.vars||theme).palette.divider}`},"elevation"===ownerState.variant&&(0,esm_extends.Z)({boxShadow:(theme.vars||theme).shadows[ownerState.elevation]},!theme.vars&&"dark"===theme.palette.mode&&{backgroundImage:`linear-gradient(${(0,colorManipulator.Fq)("#fff",styles_getOverlayAlpha(ownerState.elevation))}, ${(0,colorManipulator.Fq)("#fff",styles_getOverlayAlpha(ownerState.elevation))})`},theme.vars&&{backgroundImage:null==(_theme$vars$overlays=theme.vars.overlays)?void 0:_theme$vars$overlays[ownerState.elevation]}))}));var Paper_Paper=react.forwardRef((function Paper(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiPaper"}),{className:className,component:component="div",elevation:elevation=1,square:square=!1,variant:variant="elevation"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{component:component,elevation:elevation,square:square,variant:variant}),classes=(ownerState=>{const{square:square,elevation:elevation,variant:variant,classes:classes}=ownerState,slots={root:["root",variant,!square&&"rounded","elevation"===variant&&`elevation${elevation}`]};return(0,composeClasses.Z)(slots,getPaperUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(PaperRoot,(0,esm_extends.Z)({as:component,ownerState:ownerState,className:(0,clsx_m.Z)(classes.root,className),ref:ref},other))}))},"./node_modules/@mui/material/styles/useTheme.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return useTheme}});__webpack_require__("./node_modules/react/index.js");var _mui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/system/esm/useTheme.js"),_defaultTheme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/styles/defaultTheme.js"),_identifier__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/styles/identifier.js");function useTheme(){const theme=(0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.Z)(_defaultTheme__WEBPACK_IMPORTED_MODULE_2__.Z);return theme[_identifier__WEBPACK_IMPORTED_MODULE_3__.Z]||theme}}}]);