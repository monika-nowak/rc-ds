import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{I as m}from"./Icon-DJ18IvXe.js";import{I as u}from"./IconButton-BKzAixFV.js";import{I as F}from"./Input-9psq4Mkr.js";import{B as a}from"./Button-DWMQq-uk.js";import"./cn-2dOUpm6k.js";import"./iframe-BuZpaoXC.js";import"./preload-helper-Uod2V3eo.js";import"./IconBase.es-BUpxiAvL.js";import"./CaretRight.es-C6Ywz3nb.js";import"./CaretDown.es-Dj0JBTEX.js";import"./Minus.es-DHHAOb7E.js";import"./Warning.es-CuJUbBrY.js";import"./Flag.es-Bms5NN41.js";import"./Trash.es-nANDjqaU.js";import"./Badge-FbhFq4Pe.js";const or={title:"Components/Button",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","ghost","danger","ai","aiSecondary","aiTertiary","aiGhost"]},size:{control:"select",options:["xs","sm","md","lg"]}}},e={args:{children:"Button",variant:"primary"}},t={args:{children:"Button",variant:"secondary"}},n={args:{children:"Button",variant:"tertiary"}},s={args:{children:"Button",variant:"ghost"}},i={args:{children:"Delete",variant:"danger"}},o={name:"AI",args:{children:"Generate with AI",variant:"ai"}},c={args:{children:"Button",disabled:!0}},l={render:()=>r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:12},children:[r.jsx(a,{variant:"primary",children:"Primary"}),r.jsx(a,{variant:"secondary",children:"Secondary"}),r.jsx(a,{variant:"tertiary",children:"Tertiary"}),r.jsx(a,{variant:"ghost",children:"Ghost"}),r.jsx(a,{variant:"danger",children:"Danger"})]})},d={name:"All AI variants",render:()=>r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:12,alignItems:"center"},children:[r.jsx(a,{variant:"ai",children:"Generate with AI"}),r.jsx(a,{variant:"aiSecondary",children:"AI secondary"}),r.jsx(a,{variant:"aiTertiary",children:"AI tertiary"}),r.jsx(a,{variant:"aiGhost",size:"sm",iconLeft:r.jsx(m,{name:"sparkle",size:16,tone:"ai"}),children:"Ask AI"}),r.jsx(u,{variant:"aiGhost",size:"badge",label:"Ask AI to redraft",children:r.jsx(m,{name:"sparkle",size:12,tone:"ai"})})]})},p={name:"With input trailing action",render:()=>r.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-start",maxWidth:480},children:[r.jsx("div",{style:{flex:1},children:r.jsx(F,{label:"Label",defaultValue:"Value text",showHelperText:!1,trailingAction:r.jsx(u,{size:"md",variant:"tertiary",label:"More options",children:r.jsx(m,{name:"plus",size:18})})})}),r.jsx(a,{size:"md",variant:"secondary",children:"Action"}),r.jsx(u,{size:"md",variant:"tertiary",label:"More options",children:r.jsx(m,{name:"plus",size:18})})]})};var g,y,h;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'primary'
  }
}`,...(h=(y=e.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var v,x,I;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'secondary'
  }
}`,...(I=(x=t.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var B,A,f;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'tertiary'
  }
}`,...(f=(A=n.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var j,z,S;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'ghost'
  }
}`,...(S=(z=s.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var b,G,w;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Delete',
    variant: 'danger'
  }
}`,...(w=(G=i.parameters)==null?void 0:G.docs)==null?void 0:w.source}}};var T,k,D;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'AI',
  args: {
    children: 'Generate with AI',
    variant: 'ai'
  }
}`,...(D=(k=o.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var V,W,H;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    disabled: true
  }
}`,...(H=(W=c.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var L,M,P;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
}`,...(P=(M=l.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var E,_,C;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'All AI variants',
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    alignItems: 'center'
  }}>
      <Button variant="ai">Generate with AI</Button>
      <Button variant="aiSecondary">AI secondary</Button>
      <Button variant="aiTertiary">AI tertiary</Button>
      <Button variant="aiGhost" size="sm" iconLeft={<Icon name="sparkle" size={16} tone="ai" />}>
        Ask AI
      </Button>
      <IconButton variant="aiGhost" size="badge" label="Ask AI to redraft">
        <Icon name="sparkle" size={12} tone="ai" />
      </IconButton>
    </div>
}`,...(C=(_=d.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var O,R,q;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'With input trailing action',
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'flex-start',
    maxWidth: 480
  }}>
      <div style={{
      flex: 1
    }}>
        <Input label="Label" defaultValue="Value text" showHelperText={false} trailingAction={<IconButton size="md" variant="tertiary" label="More options">
              <Icon name="plus" size={18} />
            </IconButton>} />
      </div>
      <Button size="md" variant="secondary">
        Action
      </Button>
      <IconButton size="md" variant="tertiary" label="More options">
        <Icon name="plus" size={18} />
      </IconButton>
    </div>
}`,...(q=(R=p.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};const cr=["Primary","Secondary","Tertiary","Ghost","Danger","AI","Disabled","AllVariants","AllAIVariants","InputHeight"];export{o as AI,d as AllAIVariants,l as AllVariants,i as Danger,c as Disabled,s as Ghost,p as InputHeight,e as Primary,t as Secondary,n as Tertiary,cr as __namedExportsOrder,or as default};
