(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{218:function(e,n,i){"use strict";var t=i(0),o=i(116),r=o.View,s=o.Text,a=o.StyleSheet,d=i(250),l=d.StacksProvider,c=a.create({root:{backgroundColor:"#ddd",borderWidth:a.hairlineWidth,borderColor:"#999"}}),u=Object.assign({},t,d,{React:t,Placeholder:function(e){var n=e.width,i=e.height,o=void 0===i?100:i,s=e.style;e.children;return t.createElement(r,{style:[c.root,{width:n,height:o},s]})},PlaceholderView:function(e){var n=e.width,i=e.height,o=e.style,s=e.children;return t.createElement(r,{style:[{width:n,height:i},o]},s)},View:r,Text:s,App:function(e){var n=e.children;return t.createElement(l,null,n)}});n.a=u},250:function(e,n,i){var t=Object.create,o=Object.defineProperty,r=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,a=Object.getOwnPropertyNames,d=Object.getOwnPropertyDescriptor,l=e=>o(e,"__esModule",{value:!0}),c=e=>((e,n,i)=>{if(n&&"object"==typeof n||"function"==typeof n)for(let t of a(n))s.call(e,t)||"default"===t||o(e,t,{get:()=>n[t],enumerable:!(i=d(n,t))||i.enumerable});return e})(l(o(null!=e?t(r(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);l(n),((e,n)=>{for(var i in n)o(e,i,{get:n[i],enumerable:!0})})(n,{Box:()=>Ie,Column:()=>Ge,Columns:()=>_e,FillView:()=>$e,Grid:()=>nn,Hidden:()=>Ke,Inline:()=>Fe,Stack:()=>xe,StacksProvider:()=>on,Tiles:()=>Ue,useCurrentBreakpoint:()=>we,useDebugStyle:()=>Te,useResponsiveProp:()=>Ce,useSpacing:()=>Me,useSpacingHelpers:()=>Ee,useStacks:()=>he,useWindowDimensions:()=>Re});var u=c(i(0));function p(e){return void 0===e?{BS_PRIVATE_NESTED_SOME_NONE:0}:null!==e&&void 0!==e.BS_PRIVATE_NESTED_SOME_NONE?{BS_PRIVATE_NESTED_SOME_NONE:e.BS_PRIVATE_NESTED_SOME_NONE+1|0}:e}function g(e){if(null===e||void 0===e.BS_PRIVATE_NESTED_SOME_NONE)return e;var n=e.BS_PRIVATE_NESTED_SOME_NONE;return 0===n?void 0:{BS_PRIVATE_NESTED_SOME_NONE:n-1|0}}function f(e,n,i){return void 0!==e?i(g(e)):n}function S(e,n){if(void 0!==e)return p(n(g(e)))}function m(e,n){return void 0!==e?g(e):n}function v(e){}var b=function(e){return function(n){var i={teardown:function(){},ended:!1};return i.teardown=e({next:function(e){if(!i.ended)return n({TAG:1,_0:e})},complete:function(e){if(!i.ended)return i.ended=!0,n(0)}}),n({TAG:0,_0:function(e){if(e&&!i.ended)return i.ended=!0,i.teardown()}})}},y=function(e){return function(n){return function(i){var t={contents:!1};return n((function(n){if("number"==typeof n)t.contents||(t.contents=!0,i(n));else if(0===n.TAG){var o=n._0;i({TAG:0,_0:function(e){if(!t.contents)return e?(t.contents=!0,o(e)):o(e)}})}else t.contents||(e(n._0),i(n))}))}}},R=function(e){var n={sinks:new Array,talkback:v,gotSignal:!1};return function(i){return n.sinks=n.sinks.concat(i),1===n.sinks.length&&e((function(e){if("number"==typeof e)return n.sinks.forEach((function(e){return e(0)})),void(n.sinks=new Array);0!==e.TAG?(n.gotSignal=!1,n.sinks.forEach((function(n){return n(e)}))):n.talkback=e._0})),i({TAG:0,_0:function(e){return e?(n.sinks=n.sinks.filter((function(e){return e!==i})),0===n.sinks.length?n.talkback(1):void 0):n.gotSignal?void 0:(n.gotSignal=!0,n.talkback(e))}})}},h=function(e){return(n=function(e){},function(e){var i={talkback:v,ended:!1};return e((function(e){if("number"!=typeof e){if(0!==e.TAG)return i.ended?void 0:(n(e._0),i.talkback(0));var t=e._0;return i.talkback=t,t(0)}i.ended=!0})),{unsubscribe:function(e){if(!i.ended)return i.ended=!0,i.talkback(1)}}})(e);var n},M=function(e){return function(n){return function(i){var t={id:void 0,deferredEnded:!1,ended:!1},o=function(e){var n=t.id;if(void 0!==n)return t.id=void 0,void clearTimeout(g(n))};return n((function(n){if("number"==typeof n){if(t.ended)return;return t.ended=!0,void 0!==t.id?void(t.deferredEnded=!0):i(0)}if(0!==n.TAG)return t.ended?void 0:(o(),void(t.id=p(setTimeout((function(e){if(t.id=void 0,i(n),t.deferredEnded)return i(0)}),e(n._0)))));var r=n._0;return i({TAG:0,_0:function(e){if(!t.ended)return e?(t.ended=!0,t.deferredEnded=!1,o(),r(1)):r(0)}})}))}}},E=c(i(0)),w=2147483647,T=-2147483648;function C(e,n){return 0|((i=Math.random()*(n-e|0))>w?w:i<T?T:Math.floor(i))+e;var i}function A(e,n){return e>n?e:n}function I(e,n){if(e<=0)return[];for(var i=new Array(e),t=0;t<e;++t)i[t]=n(t);return i}function O(e,n){for(var i=e.length,t=n.length,o=new Array(i+t|0),r=0;r<i;++r)o[r]=e[r];for(var s=0;s<t;++s)o[i+s|0]=n[s];return o}function L(e,n){for(var i=e.length,t=new Array(i),o=0;o<i;++o)t[o]=n(o,e[o]);return t}var x=c(i(116));function B(e){return e.toString()+"%"}function k(e){return{margin:e}}function D(e){return{marginHorizontal:e}}function j(e){return{marginVertical:e}}function V(e){return{marginTop:e}}function H(e){return{marginRight:e}}function _(e){return{marginLeft:e}}function X(e){return{marginBottom:e}}function Y(e){return{marginStart:e}}function G(e){return{marginEnd:e}}function N(e){return{padding:e}}function P(e){return{paddingHorizontal:e}}function F(e){return{paddingVertical:e}}function z(e){return{paddingTop:e}}function q(e){return{paddingRight:e}}function U(e){return{paddingLeft:e}}function W(e){return{paddingBottom:e}}function J(e){return{paddingStart:e}}function $(e){return{paddingEnd:e}}function K(e){return{top:e}}function Q(e){return{right:e}}function Z(e){return{bottom:e}}function ee(e){return{left:e}}function ne(e,n){return(e.length-1|0)===n}function ie(e,n){var i=n.length;return function(e,n,i){if(i<=0)return[];var t=e.length,o=n<0?A(t+n|0,0):n,r=t-o|0,s=r<i?r:i;if(s<=0)return[];for(var a=new Array(s),d=0;d<s;++d)a[d]=e[o+d|0];return a}(n,0,e<0?0:i<e?i:e)}function te(e,n){var i=n.length;return function(e,n){for(var i=e.length,t=n<0?A(i+n|0,0):n,o=i-t|0,r=new Array(o),s=0;s<o;++s)r[s]=e[t+s|0];return r}(n,e<0?0:i<e?i:e)}function oe(e,n){return e<1||n.length<=e?[n]:O([ie(e,n)],oe(e,te(e,n)))}var re=x.StyleSheet.create({fullWidth:{width:B(100)},fullHeight:{height:B(100)},flexContent:{flex:0,flexBasis:"auto"},flexFluid:{flex:1},flexBasis12:{flexBasis:B(50)},flexBasis13:{flexBasis:B(33)},flexBasis14:{flexBasis:B(25)},flexBasis23:{flexBasis:B(66)},flexBasis34:{flexBasis:B(75)},flexBasis15:{flexBasis:B(20)},flexBasis25:{flexBasis:B(40)},flexBasis35:{flexBasis:B(60)},flexBasis45:{flexBasis:B(80)},alignStart:{alignItems:"flex-start"},alignCenter:{alignItems:"center"},alignEnd:{alignItems:"flex-end"},alignStretch:{alignItems:"stretch"},justifyStart:{justifyContent:"flex-start"},justifyCenter:{justifyContent:"center"},justifyEnd:{justifyContent:"flex-end"},justifySpaceAround:{justifyContent:"space-around"},justifySpaceBetween:{justifyContent:"space-between"},justifySpaceEvenly:{justifyContent:"space-evenly"},alignSelfStart:{alignSelf:"flex-start"},alignSelfCenter:{alignSelf:"center"},alignSelfEnd:{alignSelf:"flex-end"},alignSelfStretch:{alignSelf:"stretch"},directionRow:{flexDirection:"row"},directionRowReverse:{flexDirection:"row-reverse"},directionColumn:{flexDirection:"column"},directionColumnReverse:{flexDirection:"column-reverse"},wrap:{flexWrap:"wrap"},nowrap:{flexWrap:"nowrap"},shrink:{flexShrink:1}});function se(e){return S(e,(function(e){return"top"===e||"left"===e?re.alignStart:"right"===e||"bottom"===e?re.alignEnd:"center"===e?re.alignCenter:re.alignStretch}))}function ae(e){return S(e,(function(e){return"between"===e?re.justifySpaceBetween:"right"===e?re.justifyEnd:"center"===e?re.justifyCenter:"evenly"===e?re.justifySpaceEvenly:"around"===e?re.justifySpaceAround:re.justifyStart}))}function de(e){return S(e,(function(e){return"right"===e||"bottom"===e?re.justifyEnd:"between"===e?re.justifySpaceBetween:"center"===e?re.justifyCenter:"evenly"===e?re.justifySpaceEvenly:"around"===e?re.justifySpaceAround:re.justifyStart}))}function le(e){return S(e,(function(e){return"1/3"===e?re.flexBasis13:"1/4"===e?re.flexBasis14:"1/5"===e?re.flexBasis15:"2/3"===e?re.flexBasis23:"2/5"===e?re.flexBasis25:"3/4"===e?re.flexBasis34:"3/5"===e?re.flexBasis35:"4/5"===e?re.flexBasis45:"fluid"===e?re.flexFluid:"content"===e?re.flexContent:re.flexBasis12}))}function ce(e){return S(e,(function(e){return"row"===e?re.directionRow:"column-reverse"===e?re.directionColumnReverse:"row-reverse"===e?re.directionRowReverse:re.directionColumn}))}function ue(e){return S(e,(function(e){return"nowrap"===e?re.nowrap:re.wrap}))}var pe=R(b((function(e){var n=e.next;return x.Dimensions.addEventListener("change",n),function(){x.Dimensions.removeEventListener("change",n)}})));function ge(e,n,i){var t=n.desktop,o=n.tablet;return S(i,(function(n){var i=(e=>{if("string"==typeof e||"number"==typeof e||"boolean"==typeof e)return[e,e,e];if("length"in e){const{length:n}=e;if(2===n){const[n,i]=e;return[n,i,i]}if(3===n)return e;if(1===n){const[n]=e;return[n,n,n]}throw new Error(`Invalid responsive prop length: ${JSON.stringify(e)}`)}throw new Error(`Invalid responsive prop value: ${JSON.stringify(e)}`)})(n);return e<o?i[0]:e<t?i[1]:i[2]}))}function fe(e,n){return f(n,!1,(function(n){return"tablet"===n&&"mobile"===e||"desktop"===n&&"desktop"!==e}))}var Se=c(i(116)),me=c(i(0)),ve=c(i(116)),be=me.createContext({debug:!1,spacing:4,breakpoints:{tablet:768,desktop:992},dimensions:ve.Dimensions.get("window")});var ye={make:be.Provider,makeProps:function(e,n,i){return{value:e,children:n}}};function Re(e){var n=E.useState((function(){return Se.Dimensions.get("window")})),i=n[1];return E.useEffect((function(){return h(y((function(e){return i((function(n){return e.window}))}))(M((function(e){return"web"===Se.Platform.OS?60:0}))(pe))).unsubscribe}),[]),n[0]}function he(e){return E.useContext(be)}function Me(e){return f(e,0,(function(e){return E.useContext(be).spacing*e}))}function Ee(e){var n=E.useContext(be).spacing;return{multiply:function(e){return n*e},divide:function(e){return e/n}}}function we(e){var n,i,t=E.useContext(be);return n=t.dimensions.width,i=t.breakpoints,n<i.tablet?"mobile":n<i.desktop?"tablet":"desktop"}function Te(e){var n=E.useContext(be),i=E.useRef(void 0);return i.current=n.debug?{backgroundColor:"rgba("+I(3,(function(e){return C(0,255)})).map((function(e){return String(e)})).join(", ")+", 0.2)"}:void 0,i.current}function Ce(e){var n=E.useContext(be),i=n.breakpoints,t=n.dimensions.width;return function(e){return ge(t,i,e)}}var Ae=c(i(116));var Ie=function(e){var n,i=e.padding,t=e.paddingX,o=e.paddingY,r=e.paddingTop,s=e.paddingBottom,a=e.paddingLeft,d=e.paddingRight,l=e.paddingEnd,c=e.paddingStart,p=e.margin,g=e.marginX,f=e.marginY,v=e.marginTop,b=e.marginBottom,y=e.marginLeft,R=e.marginRight,h=e.marginEnd,M=e.marginStart,E=e.alignX,w=e.alignY,T=e.alignSelf,C=e.direction,A=e.wrap,I=e.flex,O=e.style,L=e.children,x=he(),B=x.dimensions,K=x.breakpoints,Q=Ee().multiply,Z=Te(),ee=function(e){return ge(B.width,K,e)},ne=S(S(ee(i),Q),N),ie=S(S(ee(t),Q),P),te=S(S(ee(o),Q),F),oe=S(S(ee(r),Q),z),ae=S(S(ee(s),Q),W),pe=S(S(ee(a),Q),U),fe=S(S(ee(d),Q),q),Se=S(S(ee(l),Q),$),me=S(S(ee(c),Q),J),ve=S(S(ee(p),Q),k),be=S(S(ee(g),Q),D),ye=S(S(ee(f),Q),j),Re=S(S(ee(v),Q),V),Me=S(S(ee(b),Q),X),we=S(S(ee(y),Q),_),Ce=S(S(ee(R),Q),H),Ie=S(S(ee(h),Q),G),Oe=S(S(ee(M),Q),Y),Le=ee(E),xe=ee(w),Be=ee(T),ke=ee(C),De=ee(A),je=ee(I),Ve=m(ke,"column"),He="column-reverse"===Ve||"column"===Ve?[se(Le),de(xe)]:[de(Le),se(xe)],_e={style:[ne,ie,te,oe,ae,pe,fe,Se,me,ve,be,ye,Re,Me,we,Ce,Ie,Oe,He[0],He[1],ce(ke),ue(De),le(je),(n=Be,S(n,(function(e){return"right"===e||"bottom"===e?re.alignSelfEnd:"stretch"===e?re.alignSelfStretch:"center"===e?re.alignSelfCenter:re.alignSelfStart}))),Z,O],children:m(L,null),accessibilityActions:e.accessibilityActions,accessibilityElementsHidden:e.accessibilityElementsHidden,accessibilityHint:e.accessibilityHint,accessibilityIgnoresInvertColors:e.accessibilityIgnoresInvertColors,accessibilityLabel:e.accessibilityLabel,accessibilityLiveRegion:e.accessibilityLiveRegion,accessibilityRole:e.accessibilityRole,accessibilityState:e.accessibilityState,accessibilityValue:e.accessibilityValue,accessibilityViewIsModal:e.accessibilityViewIsModal,accessible:e.accessible,collapsable:e.collapsable,hitSlop:e.hitSlop,importantForAccessibility:e.importantForAccessibility,nativeID:e.nativeID,needsOffscreenAlphaCompositing:e.needsOffscreenAlphaCompositing,onAccessibilityEscape:e.onAccessibilityEscape,onAccessibilityTap:e.onAccessibilityTap,onLayout:e.onLayout,onMagicTap:e.onMagicTap,onMoveShouldSetResponder:e.onMoveShouldSetResponder,onMoveShouldSetResponderCapture:e.onMoveShouldSetResponderCapture,onResponderEnd:e.onResponderEnd,onResponderGrant:e.onResponderGrant,onResponderMove:e.onResponderMove,onResponderReject:e.onResponderReject,onResponderRelease:e.onResponderRelease,onResponderStart:e.onResponderStart,onResponderTerminate:e.onResponderTerminate,onResponderTerminationRequest:e.onResponderTerminationRequest,onStartShouldSetResponder:e.onStartShouldSetResponder,onStartShouldSetResponderCapture:e.onStartShouldSetResponderCapture,pointerEvents:e.pointerEvents,removeClippedSubviews:e.removeClippedSubviews,renderToHardwareTextureAndroid:e.renderToHardwareTextureAndroid,shouldRasterizeIOS:e.shouldRasterizeIOS,testID:e.testID,onMouseDown:e.onMouseDown,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onMouseMove:e.onMouseMove,onMouseOver:e.onMouseOver,onMouseOut:e.onMouseOut,onMouseUp:e.onMouseUp};return u.createElement(Ae.View,_e)},Oe=c(i(0)),Le=c(i(116));var xe=function(e){var n=e.space,i=e.align,t=e.horizontal,o=e.style,r=e.children,s=Ce(),a=Me(s(n)),d=s(i),l=f(s(t),"column",(function(e){return e?"row":"column"})),c="column"===l,u=c?p(re.fullWidth):void 0,g=c?X:H,m=c?S(d,(function(e){return"right"===e?re.alignEnd:"stretch"===e?re.alignStretch:"center"===e?re.alignCenter:re.alignStart})):function(e){return S(e,(function(e){return"top"===e?re.justifyStart:"center"===e?re.justifyCenter:re.justifyEnd}))}(d),v=Te(),b=[u,o],y=Oe.Children.toArray(r),R={direction:[l],style:b,children:L(y,(function(e,n){return Oe.createElement(Le.View,{style:[u,m,v,ne(y,e)?void 0:p(g(a))],children:n,key:String(e)})})),padding:e.padding,paddingX:e.paddingX,paddingY:e.paddingY,paddingTop:e.paddingTop,paddingBottom:e.paddingBottom,paddingLeft:e.paddingLeft,paddingRight:e.paddingRight,paddingEnd:e.paddingEnd,paddingStart:e.paddingStart,margin:e.margin,marginX:e.marginX,marginY:e.marginY,marginTop:e.marginTop,marginBottom:e.marginBottom,marginLeft:e.marginLeft,marginRight:e.marginRight,marginEnd:e.marginEnd,marginStart:e.marginStart,accessibilityActions:e.accessibilityActions,accessibilityElementsHidden:e.accessibilityElementsHidden,accessibilityHint:e.accessibilityHint,accessibilityIgnoresInvertColors:e.accessibilityIgnoresInvertColors,accessibilityLabel:e.accessibilityLabel,accessibilityLiveRegion:e.accessibilityLiveRegion,accessibilityRole:e.accessibilityRole,accessibilityState:e.accessibilityState,accessibilityValue:e.accessibilityValue,accessibilityViewIsModal:e.accessibilityViewIsModal,accessible:e.accessible,collapsable:e.collapsable,hitSlop:e.hitSlop,importantForAccessibility:e.importantForAccessibility,nativeID:e.nativeID,needsOffscreenAlphaCompositing:e.needsOffscreenAlphaCompositing,onAccessibilityEscape:e.onAccessibilityEscape,onAccessibilityTap:e.onAccessibilityTap,onLayout:e.onLayout,onMagicTap:e.onMagicTap,onMoveShouldSetResponder:e.onMoveShouldSetResponder,onMoveShouldSetResponderCapture:e.onMoveShouldSetResponderCapture,onResponderEnd:e.onResponderEnd,onResponderGrant:e.onResponderGrant,onResponderMove:e.onResponderMove,onResponderReject:e.onResponderReject,onResponderRelease:e.onResponderRelease,onResponderStart:e.onResponderStart,onResponderTerminate:e.onResponderTerminate,onResponderTerminationRequest:e.onResponderTerminationRequest,onStartShouldSetResponder:e.onStartShouldSetResponder,onStartShouldSetResponderCapture:e.onStartShouldSetResponderCapture,pointerEvents:e.pointerEvents,removeClippedSubviews:e.removeClippedSubviews,renderToHardwareTextureAndroid:e.renderToHardwareTextureAndroid,shouldRasterizeIOS:e.shouldRasterizeIOS,testID:e.testID,onMouseDown:e.onMouseDown,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onMouseMove:e.onMouseMove,onMouseOver:e.onMouseOver,onMouseOut:e.onMouseOut,onMouseUp:e.onMouseUp};return Oe.createElement(Ie,R)},Be=c(i(0)),ke=c(i(116)),De=Be.createContext({isCollapsed:!1,space:0,debugStyle:void 0});var je=De.Provider;function Ve(e,n,i){return{value:e,children:n}}var He={context:De,useColumns:function(e){return Be.useContext(De)},Provider:{make:je,makeProps:Ve}};var _e=function(e){var n,i=e.space,t=e.reverse,o=e.alignX,r=e.alignY,s=e.collapseBelow,a=e.style,d=e.children,l=we(),c=Ce(),u=c(o),g=c(r),f=Me(c(i)),v=Te(),b=function(e,n,i){var t=fe(i,e);return{direction:m(n,!1)?t?"column-reverse":"row-reverse":t?"column":"row",isCollapsed:t}}(s,t,l),y=b.isCollapsed,R=-f,h=[p(re.fullWidth)],M=O(y?[p(re.fullWidth),p(V(R))]:[ae(u),(n=g,S(n,(function(e){return"stretch"===e?re.alignStretch:"top"===e?re.alignStart:"center"===e?re.alignCenter:re.alignEnd}))),p(_(R))],[ce(b.direction),a]),E={isCollapsed:y,space:f,debugStyle:v},w={style:h,children:Be.createElement(ke.View,{style:M,children:d}),padding:e.padding,paddingX:e.paddingX,paddingY:e.paddingY,paddingTop:e.paddingTop,paddingBottom:e.paddingBottom,paddingLeft:e.paddingLeft,paddingRight:e.paddingRight,paddingEnd:e.paddingEnd,paddingStart:e.paddingStart,margin:e.margin,marginX:e.marginX,marginY:e.marginY,marginTop:e.marginTop,marginBottom:e.marginBottom,marginLeft:e.marginLeft,marginRight:e.marginRight,marginEnd:e.marginEnd,marginStart:e.marginStart,accessibilityActions:e.accessibilityActions,accessibilityElementsHidden:e.accessibilityElementsHidden,accessibilityHint:e.accessibilityHint,accessibilityIgnoresInvertColors:e.accessibilityIgnoresInvertColors,accessibilityLabel:e.accessibilityLabel,accessibilityLiveRegion:e.accessibilityLiveRegion,accessibilityRole:e.accessibilityRole,accessibilityState:e.accessibilityState,accessibilityValue:e.accessibilityValue,accessibilityViewIsModal:e.accessibilityViewIsModal,accessible:e.accessible,collapsable:e.collapsable,hitSlop:e.hitSlop,importantForAccessibility:e.importantForAccessibility,nativeID:e.nativeID,needsOffscreenAlphaCompositing:e.needsOffscreenAlphaCompositing,onAccessibilityEscape:e.onAccessibilityEscape,onAccessibilityTap:e.onAccessibilityTap,onLayout:e.onLayout,onMagicTap:e.onMagicTap,onMoveShouldSetResponder:e.onMoveShouldSetResponder,onMoveShouldSetResponderCapture:e.onMoveShouldSetResponderCapture,onResponderEnd:e.onResponderEnd,onResponderGrant:e.onResponderGrant,onResponderMove:e.onResponderMove,onResponderReject:e.onResponderReject,onResponderRelease:e.onResponderRelease,onResponderStart:e.onResponderStart,onResponderTerminate:e.onResponderTerminate,onResponderTerminationRequest:e.onResponderTerminationRequest,onStartShouldSetResponder:e.onStartShouldSetResponder,onStartShouldSetResponderCapture:e.onStartShouldSetResponderCapture,pointerEvents:e.pointerEvents,removeClippedSubviews:e.removeClippedSubviews,renderToHardwareTextureAndroid:e.renderToHardwareTextureAndroid,shouldRasterizeIOS:e.shouldRasterizeIOS,testID:e.testID,onMouseDown:e.onMouseDown,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onMouseMove:e.onMouseMove,onMouseOver:e.onMouseOver,onMouseOut:e.onMouseOut,onMouseUp:e.onMouseUp};return Be.createElement(je,Ve(E,Be.createElement(Ie,w)))},Xe=c(i(0)),Ye=c(i(116));var Ge=function(e){var n=e.width,i=e.style,t=e.children,o=void 0!==n?n:["fluid"],r=He.useColumns(void 0),s=r.space,a=Ce()(o),d=[p(re.fullWidth),r.debugStyle,i],l=r.isCollapsed?[p(re.fullWidth),p(V(s))]:[le(a),p(re.shrink),p(_(s))],c={style:d,children:t,padding:e.padding,paddingX:e.paddingX,paddingY:e.paddingY,paddingTop:e.paddingTop,paddingBottom:e.paddingBottom,paddingLeft:e.paddingLeft,paddingRight:e.paddingRight,paddingEnd:e.paddingEnd,paddingStart:e.paddingStart,accessibilityActions:e.accessibilityActions,accessibilityElementsHidden:e.accessibilityElementsHidden,accessibilityHint:e.accessibilityHint,accessibilityIgnoresInvertColors:e.accessibilityIgnoresInvertColors,accessibilityLabel:e.accessibilityLabel,accessibilityLiveRegion:e.accessibilityLiveRegion,accessibilityRole:e.accessibilityRole,accessibilityState:e.accessibilityState,accessibilityValue:e.accessibilityValue,accessibilityViewIsModal:e.accessibilityViewIsModal,accessible:e.accessible,collapsable:e.collapsable,hitSlop:e.hitSlop,importantForAccessibility:e.importantForAccessibility,nativeID:e.nativeID,needsOffscreenAlphaCompositing:e.needsOffscreenAlphaCompositing,onAccessibilityEscape:e.onAccessibilityEscape,onAccessibilityTap:e.onAccessibilityTap,onLayout:e.onLayout,onMagicTap:e.onMagicTap,onMoveShouldSetResponder:e.onMoveShouldSetResponder,onMoveShouldSetResponderCapture:e.onMoveShouldSetResponderCapture,onResponderEnd:e.onResponderEnd,onResponderGrant:e.onResponderGrant,onResponderMove:e.onResponderMove,onResponderReject:e.onResponderReject,onResponderRelease:e.onResponderRelease,onResponderStart:e.onResponderStart,onResponderTerminate:e.onResponderTerminate,onResponderTerminationRequest:e.onResponderTerminationRequest,onStartShouldSetResponder:e.onStartShouldSetResponder,onStartShouldSetResponderCapture:e.onStartShouldSetResponderCapture,pointerEvents:e.pointerEvents,removeClippedSubviews:e.removeClippedSubviews,renderToHardwareTextureAndroid:e.renderToHardwareTextureAndroid,shouldRasterizeIOS:e.shouldRasterizeIOS,testID:e.testID,onMouseDown:e.onMouseDown,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onMouseMove:e.onMouseMove,onMouseOver:e.onMouseOver,onMouseOut:e.onMouseOut,onMouseUp:e.onMouseUp};return Xe.createElement(Ye.View,{style:l,children:Xe.createElement(Ie,c)})},Ne=c(i(0)),Pe=c(i(116));var Fe=function(e){var n=e.space,i=e.align,t=e.children,o=Ce(),r=o(i),s=Me(o(n)),a=-s,d=Te(),l=[ue("wrap"),ce("row"),ae(r),p(V(a)),p(H(a))],c=Ne.Children.toArray(t),u={children:Ne.createElement(Pe.View,{style:l,children:L(c,(function(e,n){return Ne.createElement(Pe.View,{style:[d,p(V(s)),p(H(s))],children:n,key:String(e)})}))}),padding:e.padding,paddingX:e.paddingX,paddingY:e.paddingY,paddingTop:e.paddingTop,paddingBottom:e.paddingBottom,paddingLeft:e.paddingLeft,paddingRight:e.paddingRight,paddingEnd:e.paddingEnd,paddingStart:e.paddingStart,margin:e.margin,marginX:e.marginX,marginY:e.marginY,marginTop:e.marginTop,marginBottom:e.marginBottom,marginLeft:e.marginLeft,marginRight:e.marginRight,marginEnd:e.marginEnd,marginStart:e.marginStart,accessibilityActions:e.accessibilityActions,accessibilityElementsHidden:e.accessibilityElementsHidden,accessibilityHint:e.accessibilityHint,accessibilityIgnoresInvertColors:e.accessibilityIgnoresInvertColors,accessibilityLabel:e.accessibilityLabel,accessibilityLiveRegion:e.accessibilityLiveRegion,accessibilityRole:e.accessibilityRole,accessibilityState:e.accessibilityState,accessibilityValue:e.accessibilityValue,accessibilityViewIsModal:e.accessibilityViewIsModal,accessible:e.accessible,collapsable:e.collapsable,hitSlop:e.hitSlop,importantForAccessibility:e.importantForAccessibility,nativeID:e.nativeID,needsOffscreenAlphaCompositing:e.needsOffscreenAlphaCompositing,onAccessibilityEscape:e.onAccessibilityEscape,onAccessibilityTap:e.onAccessibilityTap,onLayout:e.onLayout,onMagicTap:e.onMagicTap,onMoveShouldSetResponder:e.onMoveShouldSetResponder,onMoveShouldSetResponderCapture:e.onMoveShouldSetResponderCapture,onResponderEnd:e.onResponderEnd,onResponderGrant:e.onResponderGrant,onResponderMove:e.onResponderMove,onResponderReject:e.onResponderReject,onResponderRelease:e.onResponderRelease,onResponderStart:e.onResponderStart,onResponderTerminate:e.onResponderTerminate,onResponderTerminationRequest:e.onResponderTerminationRequest,onStartShouldSetResponder:e.onStartShouldSetResponder,onStartShouldSetResponderCapture:e.onStartShouldSetResponderCapture,pointerEvents:e.pointerEvents,removeClippedSubviews:e.removeClippedSubviews,renderToHardwareTextureAndroid:e.renderToHardwareTextureAndroid,shouldRasterizeIOS:e.shouldRasterizeIOS,style:e.style,testID:e.testID,onMouseDown:e.onMouseDown,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onMouseMove:e.onMouseMove,onMouseOver:e.onMouseOver,onMouseOut:e.onMouseOut,onMouseUp:e.onMouseUp};return Ne.createElement(Ie,u)},ze=c(i(0)),qe=c(i(116));var Ue=function(e){var n=e.columns,i=e.space,t=e.children,o=void 0!==i?i:[0],r=Ce(),s=r(n),a=Me(r(o)),d=Te(),l=[p(re.fullWidth),ce("row")],c=m(s,1),u={space:o,children:L(oe(c,ze.Children.toArray(t)),(function(e,n){var i=I(c,(function(e){return m(function(e,n){if(n>=0&&n<e.length)return p(e[n])}(n,e),null)})),t=L(i,(function(e,n){var t=[p(re.flexFluid),ne(i,e)?void 0:p(H(a)),ze.isValidElement(n)?d:void 0];return ze.createElement(qe.View,{style:t,children:n,key:String(e)})}));return ze.createElement(qe.View,{style:l,children:t,key:String(e)})})),padding:e.padding,paddingX:e.paddingX,paddingY:e.paddingY,paddingTop:e.paddingTop,paddingBottom:e.paddingBottom,paddingLeft:e.paddingLeft,paddingRight:e.paddingRight,paddingEnd:e.paddingEnd,paddingStart:e.paddingStart,margin:e.margin,marginX:e.marginX,marginY:e.marginY,marginTop:e.marginTop,marginBottom:e.marginBottom,marginLeft:e.marginLeft,marginRight:e.marginRight,marginEnd:e.marginEnd,marginStart:e.marginStart,accessibilityActions:e.accessibilityActions,accessibilityElementsHidden:e.accessibilityElementsHidden,accessibilityHint:e.accessibilityHint,accessibilityIgnoresInvertColors:e.accessibilityIgnoresInvertColors,accessibilityLabel:e.accessibilityLabel,accessibilityLiveRegion:e.accessibilityLiveRegion,accessibilityRole:e.accessibilityRole,accessibilityState:e.accessibilityState,accessibilityValue:e.accessibilityValue,accessibilityViewIsModal:e.accessibilityViewIsModal,accessible:e.accessible,collapsable:e.collapsable,hitSlop:e.hitSlop,importantForAccessibility:e.importantForAccessibility,nativeID:e.nativeID,needsOffscreenAlphaCompositing:e.needsOffscreenAlphaCompositing,onAccessibilityEscape:e.onAccessibilityEscape,onAccessibilityTap:e.onAccessibilityTap,onLayout:e.onLayout,onMagicTap:e.onMagicTap,onMoveShouldSetResponder:e.onMoveShouldSetResponder,onMoveShouldSetResponderCapture:e.onMoveShouldSetResponderCapture,onResponderEnd:e.onResponderEnd,onResponderGrant:e.onResponderGrant,onResponderMove:e.onResponderMove,onResponderReject:e.onResponderReject,onResponderRelease:e.onResponderRelease,onResponderStart:e.onResponderStart,onResponderTerminate:e.onResponderTerminate,onResponderTerminationRequest:e.onResponderTerminationRequest,onStartShouldSetResponder:e.onStartShouldSetResponder,onStartShouldSetResponderCapture:e.onStartShouldSetResponderCapture,pointerEvents:e.pointerEvents,removeClippedSubviews:e.removeClippedSubviews,renderToHardwareTextureAndroid:e.renderToHardwareTextureAndroid,shouldRasterizeIOS:e.shouldRasterizeIOS,style:e.style,testID:e.testID,onMouseDown:e.onMouseDown,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onMouseMove:e.onMouseMove,onMouseOver:e.onMouseOver,onMouseOut:e.onMouseOut,onMouseUp:e.onMouseUp};return ze.createElement(xe,u)},We=c(i(0)),Je=c(i(116));var $e=function(e){var n=e.top,i=e.right,t=e.bottom,o=e.left,r=e.style,s=e.children,a=Ce(),d=S(a(n),K),l=S(a(i),Q),c=S(a(t),Z),u=S(a(o),ee),g={style:[p(Je.StyleSheet.absoluteFillObject),d,l,c,u,r],children:m(s,null),padding:e.padding,paddingX:e.paddingX,paddingY:e.paddingY,paddingTop:e.paddingTop,paddingBottom:e.paddingBottom,paddingLeft:e.paddingLeft,paddingRight:e.paddingRight,paddingEnd:e.paddingEnd,paddingStart:e.paddingStart,margin:e.margin,marginX:e.marginX,marginY:e.marginY,marginTop:e.marginTop,marginBottom:e.marginBottom,marginLeft:e.marginLeft,marginRight:e.marginRight,marginEnd:e.marginEnd,marginStart:e.marginStart,alignX:e.alignX,alignY:e.alignY,alignSelf:e.alignSelf,direction:e.direction,wrap:e.wrap,flex:e.flex,accessibilityActions:e.accessibilityActions,accessibilityElementsHidden:e.accessibilityElementsHidden,accessibilityHint:e.accessibilityHint,accessibilityIgnoresInvertColors:e.accessibilityIgnoresInvertColors,accessibilityLabel:e.accessibilityLabel,accessibilityLiveRegion:e.accessibilityLiveRegion,accessibilityRole:e.accessibilityRole,accessibilityState:e.accessibilityState,accessibilityValue:e.accessibilityValue,accessibilityViewIsModal:e.accessibilityViewIsModal,accessible:e.accessible,collapsable:e.collapsable,hitSlop:e.hitSlop,importantForAccessibility:e.importantForAccessibility,nativeID:e.nativeID,needsOffscreenAlphaCompositing:e.needsOffscreenAlphaCompositing,onAccessibilityEscape:e.onAccessibilityEscape,onAccessibilityTap:e.onAccessibilityTap,onLayout:e.onLayout,onMagicTap:e.onMagicTap,onMoveShouldSetResponder:e.onMoveShouldSetResponder,onMoveShouldSetResponderCapture:e.onMoveShouldSetResponderCapture,onResponderEnd:e.onResponderEnd,onResponderGrant:e.onResponderGrant,onResponderMove:e.onResponderMove,onResponderReject:e.onResponderReject,onResponderRelease:e.onResponderRelease,onResponderStart:e.onResponderStart,onResponderTerminate:e.onResponderTerminate,onResponderTerminationRequest:e.onResponderTerminationRequest,onStartShouldSetResponder:e.onStartShouldSetResponder,onStartShouldSetResponderCapture:e.onStartShouldSetResponderCapture,pointerEvents:e.pointerEvents,removeClippedSubviews:e.removeClippedSubviews,renderToHardwareTextureAndroid:e.renderToHardwareTextureAndroid,shouldRasterizeIOS:e.shouldRasterizeIOS,testID:e.testID,onMouseDown:e.onMouseDown,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onMouseMove:e.onMouseMove,onMouseOver:e.onMouseOver,onMouseOut:e.onMouseOut,onMouseUp:e.onMouseUp};return We.createElement(Ie,g)};var Ke=function(e){var n=e.below,i=e.above,t=e.children,o=we();return(void 0!==i?void 0===n&&function(e,n){return f(n,!1,(function(n){return"tablet"===n&&"desktop"===e||"mobile"===n&&"mobile"!==e}))}(o,i):fe(o,n))?null:t},Qe=c(i(0)),Ze=c(i(116));var en=Ze.StyleSheet.create({root:Ze.StyleSheet.flatten([Ze.StyleSheet.absoluteFillObject,{flexDirection:"row"}]),column:{backgroundColor:"red",height:B(100)},warning:{left:24,position:"absolute",right:24,top:44},text:{color:"red"}});var nn=function(e){var n=e.gutter,i=e.margin,t=e.columns,o=e.opacity,r=void 0!==n?n:4,s=void 0!==i?i:4,a=void 0!==t?t:8,d=void 0!==o?o:.1,l=he().dimensions,c=function(e){var n=e.columns;return(e.width-((n-1)*e.gutter+2*e.margin))/n}({width:l.width,columns:a,gutter:r,margin:s}),u=function(e){var n=e.columns;return e.width*n+(n-1)*e.gutter+2*e.margin}({width:c,columns:a,gutter:r,margin:s}),p=[en.column,{opacity:d,marginRight:r,width:c}],g=[en.root,{paddingLeft:r,paddingRight:r}],f=I(a,(function(e){var n=String(e);return Qe.createElement(Ze.View,{style:p,key:n})}));return Qe.createElement(Ze.View,{pointerEvents:"none",style:g,children:null},f,u!==l.width?Qe.createElement(Ze.View,{style:en.warning,children:Qe.createElement(Ze.Text,{children:"Calculated grid width ("+u.toString()+") is different than window width ("+l.width.toString()+"). Adjust the grid options.",style:en.text})}):null)},tn=c(i(0));var on=function(e){var n=e.spacing,i=e.debug,t=e.breakpoints,o=e.children,r=void 0!==n?n:4,s=void 0!==i&&i,a=void 0!==t?t:{tablet:772,desktop:992},d=Re();return tn.createElement(ye.make,ye.makeProps({debug:s,spacing:r,breakpoints:a,dimensions:d},o,void 0))}}}]);