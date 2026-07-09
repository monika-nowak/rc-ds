import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./iframe-DvHjSd81.js";import{a,C as s}from"./ChoiceTag-CGb5hXa2.js";import"./preload-helper-Uod2V3eo.js";import"./cn-2dOUpm6k.js";const S={title:"Components/Choice Tag",component:s,tags:["autodocs"],subcomponents:{ChoiceTag:a}},r={args:{children:null,"aria-label":"Refinement style"},render:()=>{const[o,l]=C.useState("direct");return e.jsx("div",{style:{padding:16,borderRadius:8,background:"var(--rc-button-ai-ghost)"},children:e.jsxs(s,{value:o,onValueChange:l,"aria-label":"Refinement style",children:[e.jsx(a,{value:"direct",children:"More direct"}),e.jsx(a,{value:"reframe",children:"Reframe"}),e.jsx(a,{value:"tighten",children:"Tighten tone"})]})})}},i={args:{children:null,"aria-label":"Refinement style"},render:()=>e.jsxs(s,{value:"direct",disabled:!0,"aria-label":"Refinement style",children:[e.jsx(a,{value:"direct",children:"More direct"}),e.jsx(a,{value:"reframe",children:"Reframe"}),e.jsx(a,{value:"tighten",children:"Tighten tone"})]})},t={args:{children:null,"aria-label":"Suggested prompts"},render:()=>{const[o,l]=C.useState("Break down by specialty");return e.jsxs(s,{value:o,onValueChange:l,size:"md","aria-label":"Suggested prompts",children:[e.jsx(a,{value:"Break down by specialty",children:"Break down by specialty"}),e.jsx(a,{value:"Academic vs community",children:"Academic vs community"}),e.jsx(a,{value:"Why are HCPs deviating?",children:"Why are HCPs deviating?"}),e.jsx(a,{value:"Is this growing MoM?",children:"Is this growing MoM?"})]})}};var n,c,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,g,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: null,
    'aria-label': 'Refinement style'
  },
  render: () => <ChoiceTagGroup value="direct" disabled aria-label="Refinement style">
      <ChoiceTag value="direct">More direct</ChoiceTag>
      <ChoiceTag value="reframe">Reframe</ChoiceTag>
      <ChoiceTag value="tighten">Tighten tone</ChoiceTag>
    </ChoiceTagGroup>
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var m,p,v;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: null,
    'aria-label': 'Suggested prompts'
  },
  render: () => {
    const [value, setValue] = useState('Break down by specialty');
    return <ChoiceTagGroup value={value} onValueChange={setValue} size="md" aria-label="Suggested prompts">
        <ChoiceTag value="Break down by specialty">Break down by specialty</ChoiceTag>
        <ChoiceTag value="Academic vs community">Academic vs community</ChoiceTag>
        <ChoiceTag value="Why are HCPs deviating?">Why are HCPs deviating?</ChoiceTag>
        <ChoiceTag value="Is this growing MoM?">Is this growing MoM?</ChoiceTag>
      </ChoiceTagGroup>;
  }
}`,...(v=(p=t.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};const j=["SingleSelect","Disabled","MediumSize"];export{i as Disabled,t as MediumSize,r as SingleSelect,j as __namedExportsOrder,S as default};
