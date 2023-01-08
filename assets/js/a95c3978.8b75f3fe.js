"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[3550],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},94842:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=a(87462),n=(a(67294),a(3905)),o=a(54616);const i={title:"How to get insight from your own data by ask questions without SQL skills?",description:"Load data, then ask questions with your own language to get insight from your own data.",date:new Date("2023-01-06T00:00:00.000Z"),authors:["chatgpt"],tags:["openai"]},l=void 0,s={permalink:"/blog/chat2query-tutorials",editUrl:"https://github.com/pingcap/ossinsight/edit/main/web/blog/chat2query-tutorials/index.mdx",source:"@site/blog/chat2query-tutorials/index.mdx",title:"How to get insight from your own data by ask questions without SQL skills?",description:"Load data, then ask questions with your own language to get insight from your own data.",date:"2023-01-06T00:00:00.000Z",formattedDate:"January 6, 2023",tags:[{label:"openai",permalink:"/blog/tags/openai"}],readingTime:1.295,hasTruncateMarker:!1,authors:[{name:"Written with help of ChatGPT",title:"From OpenAI",url:"https://chat.openai.com/",key:"chatgpt"}],frontMatter:{title:"How to get insight from your own data by ask questions without SQL skills?",description:"Load data, then ask questions with your own language to get insight from your own data.",date:"2023-01-06T00:00:00.000Z",authors:["chatgpt"],tags:["openai"]},nextItem:{title:"Reducing Online Serving Latency from 1.11s to 123.6ms on a Distributed SQL Database",permalink:"/blog/reduce-query-latency"}},p={authorsImageUrls:[void 0]},u=[],c={toc:u};function m(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"To get insight of your own dataset without writing sql is easy, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Sign up for a TiDB Cloud account at ",(0,n.kt)("a",{parentName:"p",href:"https://tidbcloud.com/free-trial?utm_source=ossinsight&utm_medium=referral"},"https://tidbcloud.com/free-trial")," using your email, Google account, or GitHub account.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a free Serverless Tier cluster in the TiDB Cloud web console.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Connect to your cluster using a MySQL client, such as the MySQL command-line client. Use the following command to connect:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"mysql -h <endpoint> -P 4000 -u <username> -p\n")),(0,n.kt)("p",{parentName:"li"},"Replace ",(0,n.kt)("inlineCode",{parentName:"p"},"<endpoint>")," with the endpoint for your cluster, and ",(0,n.kt)("inlineCode",{parentName:"p"},"<username>")," with the username for your cluster. When prompted, enter the password for your cluster.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a database and table schema using MySQL commands. For example:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"# Create database:\nCREATE DATABASE mydatabase;\nUSE mydatabase;\n")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"# Create table schema:\nmysql -h <endpoint> -P 4000 -u <username> -p mydatabase < /path/to/schema.sql\n")))),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'In the TiDB Cloud web console, click the "Import" button and follow the prompts to load a CSV file into your cluster from a local file or from Amazon S3.'),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Import Data",src:a(75609).Z,width:"2880",height:"778"})))),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the web console's SQL editor to get insights from your data. But no worry, you don't need to write SQL, because we ask OpenAI for help translate your \"Natural Language Question\" to sql automatically, what you need is just like talking!"),(0,n.kt)("p",{parentName:"li"},"The magic is:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"-- Your question (then press Enter)\n")),(0,n.kt)("p",{parentName:"li"},"Then press the blue run button(on top-right) to execute it. The query results will be displayed in the bottom, here is an example:"),(0,n.kt)("video",{src:o.Z,width:"100%",autoplay:!0,controls:!0}))))}m.isMDXComponent=!0},54616:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/medias/how-to-use-chat2query-1e0ac55afcf56bb9cf9b4a9d4fdab82d.mp4"},75609:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/import-e582dbff5395f16d8707ac61a3749b3f.png"}}]);