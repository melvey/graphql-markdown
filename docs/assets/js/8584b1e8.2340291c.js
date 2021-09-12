"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[4881],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=d(a),h=r,u=c["".concat(l,".").concat(h)]||c[h]||p[h]||i;return a?n.createElement(u,o(o({ref:t},m),{},{components:a})):n.createElement(u,o({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5408:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return m},default:function(){return c}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={id:"media-list",title:"MediaList"},l=void 0,d={unversionedId:"schema/objects/media-list",id:"schema/objects/media-list",isDocsHomePage:!1,title:"MediaList",description:"List of anime or manga",source:"@site/docs/schema/objects/media-list.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/media-list",permalink:"/graphql-markdown/schema/objects/media-list",tags:[],version:"current",frontMatter:{id:"media-list",title:"MediaList"},sidebar:"schemaSidebar",previous:{title:"MediaListTypeOptions",permalink:"/graphql-markdown/schema/objects/media-list-type-options"},next:{title:"MediaMergeNotification",permalink:"/graphql-markdown/schema/objects/media-merge-notification"}},m=[{value:"Fields",id:"fields",children:[]}],p={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"List of anime or manga"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaList {\n  id: Int!\n  userId: Int!\n  mediaId: Int!\n  status: MediaListStatus\n  score(format: ScoreFormat): Float\n  progress: Int\n  progressVolumes: Int\n  repeat: Int\n  priority: Int\n  private: Boolean\n  notes: String\n  hiddenFromStatusLists: Boolean\n  customLists(asArray: Boolean): Json\n  advancedScores: Json\n  startedAt: FuzzyDate\n  completedAt: FuzzyDate\n  updatedAt: Int\n  createdAt: Int\n  media: Media\n  user: User\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("p",null,"The id of the list entry"),(0,i.kt)("h4",{id:"userid-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"userId")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("p",null,"The id of the user owner of the list entry"),(0,i.kt)("h4",{id:"mediaid-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"mediaId")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("p",null,"The id of the media"),(0,i.kt)("h4",{id:"status-medialiststatus"},(0,i.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/enums/media-list-status"},(0,i.kt)("inlineCode",{parentName:"a"},"MediaListStatus")),")"),(0,i.kt)("p",null,"The watching/reading status"),(0,i.kt)("h4",{id:"score-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"score")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("p",null,"The score of the entry"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"format-scoreformat"},(0,i.kt)("inlineCode",{parentName:"h5"},"format")," (",(0,i.kt)("a",{parentName:"h5",href:"/schema/enums/score-format"},(0,i.kt)("inlineCode",{parentName:"a"},"ScoreFormat")),")"))),(0,i.kt)("p",null,"Force the score to be returned in the provided format type."),(0,i.kt)("h4",{id:"progress-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"progress")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The amount of episodes/chapters consumed by the user"),(0,i.kt)("h4",{id:"progressvolumes-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"progressVolumes")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The amount of volumes read by the user"),(0,i.kt)("h4",{id:"repeat-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"repeat")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The amount of times the user has rewatched/read the media"),(0,i.kt)("h4",{id:"priority-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"priority")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Priority of planning"),(0,i.kt)("h4",{id:"private-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"private")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"If the entry should only be visible to authenticated user"),(0,i.kt)("h4",{id:"notes-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"notes")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Text notes"),(0,i.kt)("h4",{id:"hiddenfromstatuslists-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"hiddenFromStatusLists")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"If the entry shown be hidden from non-custom lists"),(0,i.kt)("h4",{id:"customlists-json"},(0,i.kt)("inlineCode",{parentName:"h4"},"customLists")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/json"},(0,i.kt)("inlineCode",{parentName:"a"},"Json")),")"),(0,i.kt)("p",null,"Map of booleans for which custom lists the entry are in"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"asarray-boolean"},(0,i.kt)("inlineCode",{parentName:"h5"},"asArray")," (",(0,i.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,i.kt)("p",null,"Change return structure to an array of objects"),(0,i.kt)("h4",{id:"advancedscores-json"},(0,i.kt)("inlineCode",{parentName:"h4"},"advancedScores")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/json"},(0,i.kt)("inlineCode",{parentName:"a"},"Json")),")"),(0,i.kt)("p",null,"Map of advanced scores with name keys"),(0,i.kt)("h4",{id:"startedat-fuzzydate"},(0,i.kt)("inlineCode",{parentName:"h4"},"startedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/fuzzy-date"},(0,i.kt)("inlineCode",{parentName:"a"},"FuzzyDate")),")"),(0,i.kt)("p",null,"When the entry was started by the user"),(0,i.kt)("h4",{id:"completedat-fuzzydate"},(0,i.kt)("inlineCode",{parentName:"h4"},"completedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/fuzzy-date"},(0,i.kt)("inlineCode",{parentName:"a"},"FuzzyDate")),")"),(0,i.kt)("p",null,"When the entry was completed by the user"),(0,i.kt)("h4",{id:"updatedat-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"When the entry data was last updated"),(0,i.kt)("h4",{id:"createdat-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"When the entry data was created"),(0,i.kt)("h4",{id:"media-media"},(0,i.kt)("inlineCode",{parentName:"h4"},"media")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/media"},(0,i.kt)("inlineCode",{parentName:"a"},"Media")),")"),(0,i.kt)("h4",{id:"user-user"},(0,i.kt)("inlineCode",{parentName:"h4"},"user")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,i.kt)("inlineCode",{parentName:"a"},"User")),")"))}c.isMDXComponent=!0}}]);