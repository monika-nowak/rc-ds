import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as t,B as E}from"./Badge-B_VwoA0O.js";import"./cn-2dOUpm6k.js";const v={title:"Components/Spinner",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"3×3 dot grid loader with a center-out opacity wave. Matches Figma Spinner (Sm 18px, Lg 46px). Use `xs` (12px) inside Badge."}}},argTypes:{size:{control:"radio",options:["xs","sm","lg"]}}},s={args:{size:"sm"}},r={name:"Extra small (badge)",args:{size:"xs"}},a={args:{size:"lg"}},n={name:"In badge · generating",render:()=>e.jsx(E,{appearance:"subtle",color:"purple",loading:!0,children:"Generating…"})},o={args:{size:"sm"},render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:24},children:[e.jsx(t,{size:"xs"}),e.jsx(t,{size:"sm"}),e.jsx(t,{size:"lg"})]})};var i,c,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,d,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Extra small (badge)',
  args: {
    size: 'xs'
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var g,u,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var S,z,j;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'In badge · generating',
  render: () => <Badge appearance="subtle" color="purple" loading>
      Generating…
    </Badge>
}`,...(j=(z=n.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var y,B,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(b=(B=o.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};const L=["Small","ExtraSmall","Large","InBadge","AllSizes"];export{o as AllSizes,r as ExtraSmall,n as InBadge,a as Large,s as Small,L as __namedExportsOrder,v as default};
