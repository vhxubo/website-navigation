import{d as e,c as l,a as t,t as a,F as o,r,o as i,b as d,e as s,f as n,g as c,h as m,i as A,w as b,v as g,j as u,k as h,T as p,l as w,m as M}from"./vendor.6cd515b5.js";!function(e=".",l="__import__"){try{self[l]=new Function("u","return import(u)")}catch(t){const a=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[l]=e=>new Promise(((t,r)=>{const i=new URL(e,a);if(self[l].moduleMap[i])return t(self[l].moduleMap[i]);const d=new Blob([`import * as m from '${i}';`,`${l}.moduleMap['${i}']=m;`],{type:"text/javascript"}),s=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(d),onerror(){r(new Error(`Failed to import: ${e}`)),o(s)},onload(){t(self[l].moduleMap[i]),o(s)}});document.head.appendChild(s)})),self[l].moduleMap={}}}("/assets/");var k=e({props:{board:{type:Object}},setup:()=>({openUrl:e=>{window.open(e)}})});const I={class:"text-lg pb-2 pl-2"},T={class:"flex flex-wrap flex-shrink m-auto clear-both"};k.render=function(e,d,s,n,c,m){var A,b,g;return i(),l("div",{class:"bg-white dark:bg-gray-800 max-w-screen-lg lg:mx-auto p-3 border-2 rounded-lg border-gray-100 dark:border-gray-800 md:mx-2",id:null==(A=e.board)?void 0:A.label},[t("p",I,a(null==(b=e.board)?void 0:b.label),1),t("div",T,[(i(!0),l(o,null,r(null==(g=e.board)?void 0:g.items,(t=>(i(),l("div",{key:t.name,class:"shadow rounded-md px-6 py-3 m-2 cursor-pointer select-none hover:shadow-md dark:bg-gray-700",onClick:l=>e.openUrl(t.url),title:null==t?void 0:t.description},a(t.name),9,["onClick","title"])))),128))])],8,["id"])};var R=e({name:"App",components:{Board:k},setup(){const e=d({list:[],updateTime:"",author:""}),l=s(!1),t=()=>{let e=document.documentElement.scrollTop||document.body.scrollTop;l.value=e>300},a=s("light");n((async()=>{window.addEventListener("scroll",t,!0);const{data:l}=await c.get("https://cdn.jsdelivr.net/gh/vhxubo/websites/api/urls.json");e.list=l.list,e.updateTime=l.updateTime,e.author=l.author,console.log(e),"dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(a.value="dark",document.querySelector("html").classList.add("dark")):(a.value="light",document.querySelector("html").classList.remove("dark"))})),m((()=>{window.removeEventListener("scroll",t)}));return{toTop:()=>{window.scroll(0,0)},show:l,urlsData:e,changeMode:()=>{"dark"==localStorage.theme?(localStorage.theme="light",a.value="light",document.querySelector("html").classList.remove("dark")):(localStorage.theme="dark",a.value="dark",document.querySelector("html").classList.add("dark"))},mode:a}}});const E={class:"select-none flex h-16 bg-white dark:bg-gray-800 px-8 justify-between items-center border-gray-200 dark:border-gray-900 border-b text-gray-700 dark:text-gray-300"},J=t("div",{class:"text-2xl font-semibold tracking-wide"},"🐚网址导航",-1),Z={class:"flex items-center"},v={href:"http://github.com/vhxubo/website-navigation"},B={width:"32",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERCMUIwOUY4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERCMUIwOUU4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJBOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJCOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jUqS1wAAApVJREFUeNq0l89rE1EQx3e3gVJoSPzZeNEWPKgHoa0HBak0iHiy/4C3WvDmoZ56qJ7txVsPQu8qlqqHIhRKJZceesmhioQEfxTEtsoSpdJg1u/ABJ7Pmc1m8zLwgWTmzcw3L+/te+tHUeQltONgCkyCi2AEDHLsJ6iBMlgHL8FeoqokoA2j4CloRMmtwTmj7erHBXPgCWhG6a3JNXKdCiDl1cidVbXZkJoXQRi5t5BrxwoY71FzU8S4JuAIqFkJ2+BFSlEh525b/hr3+k/AklDkNsf6wTT4yv46KIMNpsy+iMdMc47HNWxbsgVcUn7FmLAzzoFAWDsBx+wVP6bUpp5ewI+DOeUx0Wd9D8F70BTGNjkWtqnhmT1JQAHcUgZd8Lo3rQb1LAT8eJVUfgGvHQigGp+V2Z0iAUUl8QH47kAA1XioxIo+bRN8OG8F/oBjwv+Z1nJgX5jpdzQDw0LCjsPmrcW7I/iHScCAEDj03FtD8A0EyuChHgg4KTlJQF3wZ7WELppnBX+dBFSVpJsOBWi1qiRgSwnOgoyD5hmuJdkWCVhTgnTvW3AgYIFrSbZGh0UW/Io5Vp+DQoK7o80pztWMemZbgxeNwCNwDbw1fIfgGZjhU6xPaJgBV8BdsMw5cbZoHsenwYFxkZzl83xTSKTiviCAfCsJLysH3POfC8m8NegyGAGfLP/VmGmfSChgXroR0RSWjEFv2J/nG84cuKFMf4sTCZqXuJd4KaXFVjEG3+tw4eXbNK/YC9oXXs3O8NY8y99L4BXY5cvLY/Bb2VZ58EOJVcB18DHJq9lRsKr8inyKGVjlmh29mtHs3AHfuhCwy1vXT/Nu2GKQt+UHsGdctyX6eQyNvc+5sfX9Dl7Pe2J/BRgAl2CpwmrsHR0AAAAASUVORK5CYII=",alt:"github"},D={width:"32",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg==",alt:"github"},y={class:"m-0.5"},U={class:"m-0.5"},N={class:"text-center py-4"},S={class:"text-sm mb-2"},W=u(" Create by "),j=t("a",{href:"https://github.com/vhxubo"},"vhxubo",-1),G=u(" ❤️ ");R.render=function(e,d,s,n,c,m){var u;const M=A("Board");return i(),l(o,null,[t("header",E,[J,t("div",Z,[t("span",null,[t("a",v,[b(t("img",B,null,512),[[g,"dark"===e.mode]]),b(t("img",D,null,512),[[g,"light"===e.mode]])])]),t("span",{class:"flex bg-gray-300 dark:bg-gray-700 bg-opacity-50 rounded-full cursor-pointer ring-2 ring-current ml-4",onClick:d[1]||(d[1]=(...l)=>e.changeMode&&e.changeMode(...l))},[t("div",y,a("light"===e.mode?"☀":"    "),1),t("div",U,a("dark"===e.mode?"🌙":"    "),1)])])]),(i(!0),l(o,null,r(null==(u=e.urlsData)?void 0:u.list,(e=>(i(),l(M,{key:e.label,board:e,class:"m-4"},null,8,["board"])))),128)),t("footer",N,[t("div",S," UpdateTime: "+a(e.urlsData.updateTime)+" From: "+a(e.urlsData.author),1),W,j,G]),t(p,{name:"fade"},{default:h((()=>[e.show?(i(),l("button",{key:0,class:"z-10 fixed bottom-4 right-4 rounded-full text-2xl text-white",onClick:d[2]||(d[2]=(...l)=>e.toTop&&e.toTop(...l))}," 🔝 ")):w("",!0)])),_:1})],64)};M(R).mount("#app");
