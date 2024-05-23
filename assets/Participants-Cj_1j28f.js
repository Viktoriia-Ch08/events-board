import{i as d,p as e,d as i,u as x,a as c,b as f,c as h,r as g,k as m,j as t}from"./index-DEVsI3mn.js";import{n as u}from"./index.browser-DP16PUbO.js";import{d as b}from"./selectors-D8T8xVRC.js";import{R as j}from"./Register.styled-Byrkh-t_.js";const v=a=>a.participants,w=d(v,a=>a.participants),P=e.div`
  display: flex;
  flex-direction: column;

  gap: 20px;
`,y=e.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media ${i.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`,z=e.li`
  display: flex;
  gap: 30px;

  width: 300px;
`,k=e.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
`,E=e.img`
  width: 60px;
  height: 60px;

  border-radius: 50%;
  background-color: gray;
`,I=e.h3`
  font-size: 20px;
  font-weight: var(--font-weight-bold);
  @media ${i.tablet} {
    font-size: 24px;
  }
`,B=e.p`
  font-size: 24px;
  font-weight: var(--font-weight-bold);
  text-align: center;
`,N=e.h1`
  margin-bottom: 15px;

  font-size: 36px;
  font-weight: var(--font-weight-bold);

  @media ${i.tablet} {
    font-size: 30px;
  }
`,R=e.h2`
  font-size: 20px;
  font-weight: var(--font-weight-bold);
  color: var(--text-special-clr);
  text-shadow: 1px 1px 2px var(--text-clr-black);

  @media ${i.tablet} {
    font-size: 30px;
  }
`,$="/events-board/assets/default-img-BO3taJb9.png",T=()=>{const a=x(),s=c(w),{id:n}=f(),o=c(b),l=h();return g.useEffect(()=>{a(m(n))},[a,n]),t.jsxs(t.Fragment,{children:[t.jsx(j,{onClick:()=>l(-1),children:"Return back"}),t.jsx(N,{children:"Participants"}),s.length>0?t.jsxs(P,{children:[t.jsx(R,{children:o}),t.jsx(y,{children:s.map(({user:{name:r,email:p}})=>t.jsxs(z,{children:[t.jsx(E,{src:$,alt:r}),t.jsxs(k,{children:[t.jsx(I,{children:r}),t.jsx("p",{children:p})]})]},u()))})]}):t.jsx(B,{children:"No one register yet."})]})};export{T as default};
