"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[2340],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=r.createContext({}),u=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(m.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),d=o,f=p["".concat(m,".").concat(d)]||p[d]||l[d]||a;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var m in n)hasOwnProperty.call(n,m)&&(c[m]=n[m]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5887:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={id:"recommendation-sort",title:"RecommendationSort"},m=void 0,u={unversionedId:"schema/enums/recommendation-sort",id:"schema/enums/recommendation-sort",isDocsHomePage:!1,title:"RecommendationSort",description:"Recommendation sort enums",source:"@site/docs/schema/enums/recommendation-sort.mdx",sourceDirName:"schema/enums",slug:"/schema/enums/recommendation-sort",permalink:"/graphql-markdown/schema/enums/recommendation-sort",tags:[],version:"current",frontMatter:{id:"recommendation-sort",title:"RecommendationSort"},sidebar:"schemaSidebar",previous:{title:"RecommendationRating",permalink:"/graphql-markdown/schema/enums/recommendation-rating"},next:{title:"ReviewRating",permalink:"/graphql-markdown/schema/enums/review-rating"}},s=[{value:"Values",id:"values",children:[]}],l={toc:s};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Recommendation sort enums"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum RecommendationSort {\n  ID\n  ID_DESC\n  RATING\n  RATING_DESC\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"id"},(0,a.kt)("inlineCode",{parentName:"h4"},"ID")),(0,a.kt)("h4",{id:"id_desc"},(0,a.kt)("inlineCode",{parentName:"h4"},"ID_DESC")),(0,a.kt)("h4",{id:"rating"},(0,a.kt)("inlineCode",{parentName:"h4"},"RATING")),(0,a.kt)("h4",{id:"rating_desc"},(0,a.kt)("inlineCode",{parentName:"h4"},"RATING_DESC")))}p.isMDXComponent=!0}}]);