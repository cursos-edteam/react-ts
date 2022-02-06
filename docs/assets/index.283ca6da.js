import{s as r,j as m,r as p,u as b,F as x,a as h,B as y,R as k,b as g,c as w,d as F}from"./vendor.6e02c3d7.js";const N=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))d(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function c(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(i){if(i.ep)return;i.ep=!0;const o=c(i);fetch(i.href,o)}};N();const C=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,j=r.div`
  margin-top: 50px;
  height: calc(${t=>t.height}vh - 50px);
  width: 90%;
  border-radius: 10px 10px 0 0;
  background: url(${t=>t.src}) no-repeat;
  background-size: contain;
  opacity: 0.6;
  background-position: center;
  `,$=r.div`
  height: ${t=>t.height}vh;
  width: 100%;
  color: #FFF;
  background: #000;
  `,R=r.div`
  width: 100%;
  height: ${t=>t.height}vh;
  position: absolute;
  top: 0;
  margin: auto;
`,B=r.div`
  width: 50px;
  height: 50px;
  background: url(${t=>t.src}) no-repeat;
  background-size: cover;
  background-position: top;
  border-radius: 50%;
  border: 2px solid #FFF;
`,D=r.div`
  width: 100%;
  height: ${t=>t.height}vh;
  position: absolute;
  top: 0;
  z-index: 2;
  background: linear-gradient(transparent 0, #000 90%);
`,L=r.div`
  width: auto;
  height: ${t=>t.height}vh;
  background: url(${t=>t.src}) no-repeat;
  background-position: top;
  background-size: cover;
`,P=r.button`
  width: 80%;
  margin: auto;
  background: red;
  border: none;
  color: #FFF;
  padding: 5px;
  margin-top: 15px;
  border-radius: 7px;
  cursor: pointer;
`;var f="/assets/black-widow.a3e0864f.png";const e=m.exports.jsx,n=m.exports.jsxs,a=m.exports.Fragment,A=()=>{const[t,s]=p.exports.useState([]),c=async()=>{const l=(await(await fetch("https://gateway.marvel.com:443/v1/public/characters?apikey=7b871c42fe90dc8e8ab2ee201ce57555")).json()).data.results.map(u=>({name:u.name,description:u.description,thumbnail:`${u.thumbnail.path}.${u.thumbnail.extension}`}));s(l)};return p.exports.useEffect(()=>{c()},[]),e(a,{children:t.length>0?n(a,{children:[e(j,{height:50,src:t[1].thumbnail}),e(R,{height:50,children:e(L,{height:50,src:f})}),e(D,{height:50})]}):e("section",{className:"loading",children:"Cargando..."})})},v=p.exports.createContext({}),z=()=>{const t=b(),{state:s}=p.exports.useContext(v),c=()=>{t("/detail/2")};return e(a,{children:n($,{height:50,children:[e("section",{className:"icon-info",children:e(x,{size:25,color:"red"})}),e("section",{className:"title-info",children:s.name}),e("section",{className:"details-info",children:n("section",{className:"list-info",children:[e("div",{children:"2021"}),e("div",{children:"Fantastic"}),e("div",{children:"2h 35min"})]})}),n("section",{className:"star",children:[e(h,{color:"orange"}),e(h,{color:"orange"}),e(h,{color:"orange"}),e(h,{color:"orange"}),e(h,{color:"orange"})]}),n("section",{className:"description",children:[e("div",{className:"description-title",children:"Plot Summary"}),e("div",{className:"desc",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nihil, assumenda quasi adipisci voluptates nesciunt iste aliquam reiciendis commodi amet, autem architecto nisi dolore vitae maiores! Perferendis excepturi officia dolores!"})]}),n("section",{className:"description",children:[e("div",{className:"description-title",children:"Cast"}),e("div",{className:"images",children:[1,2,3,4].map(d=>e(B,{src:f},d))})]}),e("section",{className:"button-buy",children:e(P,{onClick:c,children:"Comprar"})})]})})},I=()=>e(a,{children:n(C,{children:[e(A,{}),e(z,{})]})}),M=()=>e(a,{children:"Hola Detalle"}),O={name:"Black Widow",url:"http://marvel.io/bw",time:"2 horas"},S=({children:t})=>e(v.Provider,{value:{state:O},children:t}),q=()=>e(a,{children:e(S,{children:e(y,{children:n(k,{children:[e(g,{path:"/",element:e(I,{})}),e(g,{path:"/detail/:id",element:e(M,{})})]})})})});w.render(e(F.StrictMode,{children:e(q,{})}),document.getElementById("root"));
