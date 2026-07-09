import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as n,B as E}from"./Badge-D3qVxMwk.js";import"./cn-2dOUpm6k.js";import"./Icon-quxERthd.js";import"./iframe-SpVpO4_-.js";import"./preload-helper-Uod2V3eo.js";import"./IconBase.es-nCges0Do.js";import"./CaretRight.es-BtMKu1HW.js";import"./CaretDown.es-9dx_bpTB.js";import"./Minus.es-Bx0-RUTF.js";import"./Warning.es-BndqD_7T.js";import"./Flag.es-CW4_NuCL.js";import"./Trash.es-BBxtDL8P.js";const R={title:"Components/Spinner",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"3×3 dot grid loader with a center-out opacity wave. Matches Figma Spinner (Sm 18px, Lg 46px). Use `xs` (12px) inside Badge."}}},argTypes:{size:{control:"radio",options:["xs","sm","lg"]}}},r={args:{size:"sm"}},s={name:"Extra small (badge)",args:{size:"xs"}},a={args:{size:"lg"}},o={name:"In badge · generating",render:()=>e.jsx(E,{appearance:"subtle",color:"purple",loading:!0,children:"Generating…"})},t={args:{size:"sm"},render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:24},children:[e.jsx(n,{size:"xs"}),e.jsx(n,{size:"sm"}),e.jsx(n,{size:"lg"})]})};var i,p,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,d,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Extra small (badge)',
  args: {
    size: 'xs'
  }
}`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var g,u,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var S,z,j;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'In badge · generating',
  render: () => <Badge appearance="subtle" color="purple" loading>
      Generating…
    </Badge>
}`,...(j=(z=o.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var y,B,b;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  },
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 24
  }}>
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="lg" />
    </div>
}`,...(b=(B=t.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};const T=["Small","ExtraSmall","Large","InBadge","AllSizes"];export{t as AllSizes,s as ExtraSmall,o as InBadge,a as Large,r as Small,T as __namedExportsOrder,R as default};
