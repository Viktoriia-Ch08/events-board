import{h as d,p as e,i as c,u as x,a as n,b as f,c as h,r as m,k as g,j as t}from"./index-B-p0eL-N.js";import{n as u}from"./index.browser-DP16PUbO.js";import{d as j}from"./selectors-4kcr32cK.js";import{c as b}from"./Event.styled-jDLb6WBB.js";import{R as v}from"./Register.styled-Pu5sjbHb.js";const P=s=>s.participants,w=d(P,s=>s.participants),y=e.div`
  display: flex;
  flex-direction: column;

  gap: 20px;
`,E=e.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media ${c.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`,k=e.li`
  display: flex;
  gap: 30px;

  width: 300px;
`,I=e.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
`,B=e.img`
  width: 60px;
  height: 60px;

  border-radius: 50%;
  background-color: gray;
`,N=e.h3`
  font-size: 20px;
  font-weight: var(--font-weight-bold);
  @media ${c.tablet} {
    font-size: 24px;
  }
`,R=e.p`
  font-size: 24px;
  font-weight: var(--font-weight-bold);
  text-align: center;
`,z="/events-board/assets/default-img-BO3taJb9.png",$=()=>{const s=x(),a=n(w),{id:i}=f(),o=n(j),l=h();return m.useEffect(()=>{s(g(i))},[s,i]),t.jsxs(t.Fragment,{children:[t.jsx(v,{onClick:()=>l(-1),children:"Return back"}),a.length>0?t.jsxs(y,{children:[t.jsx(b,{children:o}),t.jsx(E,{children:a.map(({user:{name:r,email:p}})=>t.jsxs(k,{children:[t.jsx(B,{src:z,alt:r}),t.jsxs(I,{children:[t.jsx(N,{children:r}),t.jsx("p",{children:p})]})]},u()))})]}):t.jsx(R,{children:"No one register yet."})]})};export{$ as default};
