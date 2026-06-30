import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./iframe-Di2CNPDO.js";import{C as a,a as i}from"./ChoiceTag-BeFuXBZJ.js";import"./preload-helper-Uod2V3eo.js";import"./cn-2dOUpm6k.js";const f={title:"Components/Choice Tag",component:i,tags:["autodocs"],subcomponents:{ChoiceTag:a}},r={args:{children:null,"aria-label":"Refinement style"},render:()=>{const[u,g]=h.useState("direct");return e.jsx("div",{style:{padding:16,borderRadius:8,background:"var(--rc-button-ai-ghost)"},children:e.jsxs(i,{value:u,onValueChange:g,"aria-label":"Refinement style",children:[e.jsx(a,{value:"direct",children:"More direct"}),e.jsx(a,{value:"reframe",children:"Reframe"}),e.jsx(a,{value:"tighten",children:"Tighten tone"})]})})}},t={args:{children:null,"aria-label":"Refinement style"},render:()=>e.jsxs(i,{value:"direct",disabled:!0,"aria-label":"Refinement style",children:[e.jsx(a,{value:"direct",children:"More direct"}),e.jsx(a,{value:"reframe",children:"Reframe"}),e.jsx(a,{value:"tighten",children:"Tighten tone"})]})};var l,o,n;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: null,
    'aria-label': 'Refinement style'
  },
  render: () => {
    const [value, setValue] = useState('direct');
    return <div style={{
      padding: 16,
      borderRadius: 8,
      background: 'var(--rc-button-ai-ghost)'
    }}>
        <ChoiceTagGroup value={value} onValueChange={setValue} aria-label="Refinement style">
          <ChoiceTag value="direct">More direct</ChoiceTag>
          <ChoiceTag value="reframe">Reframe</ChoiceTag>
          <ChoiceTag value="tighten">Tighten tone</ChoiceTag>
        </ChoiceTagGroup>
      </div>;
  }
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var s,c,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: null,
    'aria-label': 'Refinement style'
  },
  render: () => <ChoiceTagGroup value="direct" disabled aria-label="Refinement style">
      <ChoiceTag value="direct">More direct</ChoiceTag>
      <ChoiceTag value="reframe">Reframe</ChoiceTag>
      <ChoiceTag value="tighten">Tighten tone</ChoiceTag>
    </ChoiceTagGroup>
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const b=["SingleSelect","Disabled"];export{t as Disabled,r as SingleSelect,b as __namedExportsOrder,f as default};
