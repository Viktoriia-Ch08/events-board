import{p as t,i as e}from"./index-B-p0eL-N.js";const r=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  margin-bottom: 10px;
`,a=t.input`
  width: 320px;
  height: 40px;
  border-radius: 12px;
  cursor: 'pointer';
  padding: 0 15px;
`,i=t.label`
  display: flex;
  align-items: center;
  gap: 7px;

  margin-bottom: 10px;
`,n=t.button`
  width: 300px;
  height: 40px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: var(--font-weight-medium);
  color: var(--text-clr-black);
  background-color: var(--text-special-clr);

  &:active {
    background-color: var(--btn-yellow-hover-focus);
  }

  &:disabled {
    background-color: var(--text-clr-second-light-grey);
    border: 1px solid var(--text-clr-black);
  }

  @media ${e.tablet} {
    width: 230px;
    transform: background-color var(--hover-focus-trans);
    &:hover,
    &:focus {
      background-color: var(--btn-yellow-hover-focus);
    }
  }

  @media ${e.desktop} {
    width: 260px;
  }
`,c=t.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;
  margin-bottom: 20px;

  font-size: 20px;
  text-shadow: 1px 1px 2px var(--text-clr-black);
  border-radius: 12px;

  color: var(--text-special-clr);
  background-color: transparent;
  border: 2px solid var(--text-clr-black);

  @media ${e.tablet} {
    width: 200px;
    font-size: 20px;
  }
`,s=t.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  @media ${e.tablet} {
  }
`,l=t.p`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: var(--font-weight-bold);
`,p=t.h2`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: var(--font-weight-bold);
`;export{r as I,c as R,n as S,s as a,p as b,a as c,l as d,i as e};
