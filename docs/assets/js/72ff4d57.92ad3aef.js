"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[238],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||l[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7894:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={id:"user-studio-statistic",title:"UserStudioStatistic"},s=void 0,d={unversionedId:"schema/objects/user-studio-statistic",id:"schema/objects/user-studio-statistic",title:"UserStudioStatistic",description:"No description",source:"@site/docs/schema/objects/user-studio-statistic.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/user-studio-statistic",permalink:"/graphql-markdown/schema/objects/user-studio-statistic",tags:[],version:"current",frontMatter:{id:"user-studio-statistic",title:"UserStudioStatistic"},sidebar:"basic",previous:{title:"UserStatusStatistic",permalink:"/graphql-markdown/schema/objects/user-status-statistic"},next:{title:"UserTagStatistic",permalink:"/graphql-markdown/schema/objects/user-tag-statistic"}},u=[{value:"Fields",id:"fields",children:[{value:"<code>count</code> (Int)",id:"count-int",children:[],level:4},{value:"<code>meanScore</code> (Float)",id:"meanscore-float",children:[],level:4},{value:"<code>minutesWatched</code> (Int)",id:"minuteswatched-int",children:[],level:4},{value:"<code>chaptersRead</code> (Int)",id:"chaptersread-int",children:[],level:4},{value:"<code>mediaIds</code> (Int)",id:"mediaids-int",children:[],level:4},{value:"<code>studio</code> (Studio)",id:"studio-studio",children:[],level:4}],level:3}],l={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type UserStudioStatistic {\n  count: Int!\n  meanScore: Float!\n  minutesWatched: Int!\n  chaptersRead: Int!\n  mediaIds: [Int]!\n  studio: Studio\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"count-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"count")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"meanscore-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"meanScore")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"minuteswatched-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"minutesWatched")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"chaptersread-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"chaptersRead")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"mediaids-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"mediaIds")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"studio-studio"},(0,i.kt)("inlineCode",{parentName:"h4"},"studio")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/studio"},(0,i.kt)("inlineCode",{parentName:"a"},"Studio")),")"))}p.isMDXComponent=!0}}]);