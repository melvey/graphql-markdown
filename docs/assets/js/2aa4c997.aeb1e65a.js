"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[228],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7719:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={id:"airing-schedule",title:"AiringSchedule"},l=void 0,s={unversionedId:"schema/objects/airing-schedule",id:"schema/objects/airing-schedule",isDocsHomePage:!1,title:"AiringSchedule",description:"Media Airing Schedule. NOTE: We only aim to guarantee that FUTURE airing data is present and accurate.",source:"@site/docs/schema/objects/airing-schedule.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/airing-schedule",permalink:"/graphql-markdown/schema/objects/airing-schedule",tags:[],version:"current",frontMatter:{id:"airing-schedule",title:"AiringSchedule"},sidebar:"schemaSidebar",previous:{title:"AiringScheduleEdge",permalink:"/graphql-markdown/schema/objects/airing-schedule-edge"},next:{title:"AniChartUser",permalink:"/graphql-markdown/schema/objects/ani-chart-user"}},d=[{value:"Fields",id:"fields",children:[]}],u={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Media Airing Schedule. NOTE: We only aim to guarantee that FUTURE airing data is present and accurate."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type AiringSchedule {\n  id: Int!\n  airingAt: Int!\n  timeUntilAiring: Int!\n  episode: Int!\n  mediaId: Int!\n  media: Media\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,a.kt)("p",null,"The id of the airing schedule item"),(0,a.kt)("h4",{id:"airingat-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"airingAt")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,a.kt)("p",null,"The time the episode airs at"),(0,a.kt)("h4",{id:"timeuntilairing-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"timeUntilAiring")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,a.kt)("p",null,"Seconds until episode starts airing"),(0,a.kt)("h4",{id:"episode-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"episode")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,a.kt)("p",null,"The airing episode number"),(0,a.kt)("h4",{id:"mediaid-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"mediaId")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,a.kt)("p",null,"The associate media id of the airing episode"),(0,a.kt)("h4",{id:"media-media"},(0,a.kt)("inlineCode",{parentName:"h4"},"media")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/media"},(0,a.kt)("inlineCode",{parentName:"a"},"Media")),")"),(0,a.kt)("p",null,"The associate media of the airing episode"))}p.isMDXComponent=!0}}]);