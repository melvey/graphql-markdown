"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[890],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(r),d=i,m=s["".concat(l,".").concat(d)]||s[d]||y[d]||a;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},7532:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return y}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),c=["components"],o={id:"activity-reply",title:"ActivityReply"},l=void 0,p={unversionedId:"schema/queries/activity-reply",id:"schema/queries/activity-reply",title:"ActivityReply",description:"Activity reply query",source:"@site/docs/schema/queries/activity-reply.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/activity-reply",permalink:"/graphql-markdown/schema/queries/activity-reply",tags:[],version:"current",frontMatter:{id:"activity-reply",title:"ActivityReply"},sidebar:"basic",previous:{title:"YearStats",permalink:"/graphql-markdown/schema/objects/year-stats"},next:{title:"Activity",permalink:"/graphql-markdown/schema/queries/activity"}},u={},y=[{value:"Arguments",id:"arguments",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>activityId</code> (<code>Int</code>)",id:"activityid-int",level:4},{value:"Type",id:"type",level:3},{value:"<code>ActivityReply</code>",id:"activityreply",level:4}],s={toc:y};function d(e){var t=e.components,r=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Activity reply query"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"ActivityReply(\n  id: Int\n  activityId: Int\n): ActivityReply\n\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"id-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"Filter by the reply id"),(0,a.kt)("h4",{id:"activityid-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"activityId")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"Filter by the parent id"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"activityreply"},(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/activity-reply"},(0,a.kt)("inlineCode",{parentName:"a"},"ActivityReply"))),(0,a.kt)("p",null,"Replay to an activity item"))}d.isMDXComponent=!0}}]);