import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as a}from"./Icon-CvApckDy.js";import{I as r}from"./IconButton-BCtUxGtU.js";import"./cn-2dOUpm6k.js";import"./iframe-DVYlbdCj.js";import"./preload-helper-Uod2V3eo.js";import"./IconBase.es-B2CDjfeH.js";import"./CaretRight.es-DZQcZDHf.js";import"./CaretDown.es-dcCKaQIp.js";import"./Minus.es-jJJNhrfV.js";import"./Warning.es-xNai1R_s.js";import"./Flag.es-BdG3sE1r.js";import"./Trash.es-ByI4ZgPH.js";const W={title:"Components/Icon Button",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","ghost","danger","ai","aiSecondary","aiTertiary","aiGhost"]},size:{control:"select",options:["badge","xs","sm","md","lg"]}}},s={args:{label:"Add",variant:"primary",children:e.jsx(a,{name:"plus",size:18,tone:"on-color"})}},o={args:{label:"More",variant:"ghost",children:e.jsx(a,{name:"dots-three",size:18})}},t={name:"AI",args:{label:"Ask AI",variant:"ai",children:e.jsx(a,{name:"sparkle",size:18,tone:"on-color"})}},n={name:"AI ghost compact",args:{label:"Ask AI to redraft",variant:"aiGhost",size:"badge",children:e.jsx(a,{name:"sparkle",size:12,tone:"ai"})}},i={name:"All AI variants",args:{label:"AI",children:e.jsx(a,{name:"sparkle",size:18,tone:"on-color"})},render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:12,alignItems:"center"},children:[e.jsx(r,{variant:"ai",size:"sm",label:"Generate with AI",children:e.jsx(a,{name:"sparkle",size:16,tone:"on-color"})}),e.jsx(r,{variant:"aiSecondary",size:"sm",label:"AI secondary",children:e.jsx(a,{name:"sparkle",size:16,tone:"ai"})}),e.jsx(r,{variant:"aiTertiary",size:"sm",label:"AI tertiary",children:e.jsx(a,{name:"sparkle",size:16,tone:"ai"})}),e.jsx(r,{variant:"aiGhost",size:"sm",label:"AI ghost",children:e.jsx(a,{name:"sparkle",size:16,tone:"ai"})}),e.jsx(r,{variant:"aiGhost",size:"badge",label:"Ask AI to redraft",children:e.jsx(a,{name:"sparkle",size:12,tone:"ai"})})]})};var l,c,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Add',
    variant: 'primary',
    children: <Icon name="plus" size={18} tone="on-color" />
  }
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,d,I;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'More',
    variant: 'ghost',
    children: <Icon name="dots-three" size={18} />
  }
}`,...(I=(d=o.parameters)==null?void 0:d.docs)==null?void 0:I.source}}};var A,h,g;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'AI',
  args: {
    label: 'Ask AI',
    variant: 'ai',
    children: <Icon name="sparkle" size={18} tone="on-color" />
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var z,u,b;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'AI ghost compact',
  args: {
    label: 'Ask AI to redraft',
    variant: 'aiGhost',
    size: 'badge',
    children: <Icon name="sparkle" size={12} tone="ai" />
  }
}`,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var x,v,k;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'All AI variants',
  args: {
    label: 'AI',
    children: <Icon name="sparkle" size={18} tone="on-color" />
  },
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    alignItems: 'center'
  }}>
      <IconButton variant="ai" size="sm" label="Generate with AI">
        <Icon name="sparkle" size={16} tone="on-color" />
      </IconButton>
      <IconButton variant="aiSecondary" size="sm" label="AI secondary">
        <Icon name="sparkle" size={16} tone="ai" />
      </IconButton>
      <IconButton variant="aiTertiary" size="sm" label="AI tertiary">
        <Icon name="sparkle" size={16} tone="ai" />
      </IconButton>
      <IconButton variant="aiGhost" size="sm" label="AI ghost">
        <Icon name="sparkle" size={16} tone="ai" />
      </IconButton>
      <IconButton variant="aiGhost" size="badge" label="Ask AI to redraft">
        <Icon name="sparkle" size={12} tone="ai" />
      </IconButton>
    </div>
}`,...(k=(v=i.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const _=["Primary","Ghost","AI","AIGhostCompact","AllAIVariants"];export{t as AI,n as AIGhostCompact,i as AllAIVariants,o as Ghost,s as Primary,_ as __namedExportsOrder,W as default};
