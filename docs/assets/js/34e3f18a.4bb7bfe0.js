"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[2302],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return p}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),s=u(r),p=a,h=s["".concat(c,".").concat(p)]||s[p]||d[p]||o;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var m={};for(var c in t)hasOwnProperty.call(t,c)&&(m[c]=t[c]);m.originalType=e,m.mdxType="string"==typeof e?e:a,i[1]=m;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},8434:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return m},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return s}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],m={id:"thread-comment",title:"ThreadComment"},c=void 0,u={unversionedId:"schema/queries/thread-comment",id:"schema/queries/thread-comment",isDocsHomePage:!1,title:"ThreadComment",description:"Comment query",source:"@site/docs/schema/queries/thread-comment.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/thread-comment",permalink:"/graphql-markdown/schema/queries/thread-comment",tags:[],version:"current",frontMatter:{id:"thread-comment",title:"ThreadComment"},sidebar:"schemaSidebar",previous:{title:"Studio",permalink:"/graphql-markdown/schema/queries/studio"},next:{title:"Thread",permalink:"/graphql-markdown/schema/queries/thread"}},l=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],d={toc:l};function s(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Comment query"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"ThreadComment(\n  id: Int\n  threadId: Int\n  userId: Int\n  sort: [ThreadCommentSort]\n): [ThreadComment]\n\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"id-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"Filter by the comment id"),(0,o.kt)("h4",{id:"threadid-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"threadId")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"Filter by the thread id"),(0,o.kt)("h4",{id:"userid-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"userId")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"Filter by the user id of the comment's creator"),(0,o.kt)("h4",{id:"sort-threadcommentsort"},(0,o.kt)("inlineCode",{parentName:"h4"},"sort")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/enums/thread-comment-sort"},(0,o.kt)("inlineCode",{parentName:"a"},"[ThreadCommentSort]")),")"),(0,o.kt)("p",null,"The order the results will be returned in"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"threadcomment"},(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/thread-comment"},(0,o.kt)("inlineCode",{parentName:"a"},"ThreadComment"))),(0,o.kt)("p",null,"Forum Thread Comment"))}s.isMDXComponent=!0}}]);