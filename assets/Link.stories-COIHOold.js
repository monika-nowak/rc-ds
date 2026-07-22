import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as o}from"./Icon-CvApckDy.js";import{P as k}from"./Popover-BS7gz5D7.js";import{L as a}from"./Link-C731kjes.js";import"./cn-2dOUpm6k.js";import"./iframe-DVYlbdCj.js";import"./preload-helper-Uod2V3eo.js";import"./IconBase.es-B2CDjfeH.js";import"./CaretRight.es-DZQcZDHf.js";import"./CaretDown.es-dcCKaQIp.js";import"./Minus.es-jJJNhrfV.js";import"./Warning.es-xNai1R_s.js";import"./Flag.es-BdG3sE1r.js";import"./Trash.es-ByI4ZgPH.js";const w="_popoverContent_17qyo_1",b="_body_17qyo_8",S="_sizeStack_17qyo_20",i={popoverContent:w,body:b,sizeStack:S},E={title:"Components/Link",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Inline action link with zero padding — aligns flush with surrounding text (e.g. popover body). Use for in-context actions like “See full breakdown”. Use Button for standalone controls with touch targets."}}},argTypes:{size:{control:"radio",options:["sm","md"]}}},r={args:{children:"See full breakdown",size:"sm",iconRight:e.jsx(o,{name:"caret-down",size:12})}},s={name:"As anchor",args:{children:"View documentation",href:"#",size:"md",iconRight:e.jsx(o,{name:"arrow-square-out",size:14})}},n={name:"In popover · flush alignment",args:{children:"See full breakdown",size:"sm"},render:()=>e.jsx(k,{appearance:"default",placement:"top",caret:!0,children:e.jsxs("div",{className:i.popoverContent,children:[e.jsxs("p",{className:i.body,children:["The ",e.jsx("strong",{children:"combined score"})," is a weighted average of the"," ",e.jsx("strong",{children:"deterministic score"}),", ",e.jsx("strong",{children:"AI read"}),", and"," ",e.jsx("strong",{children:"strategic relevance"})," scores."]}),e.jsx(a,{size:"sm",iconRight:e.jsx(o,{name:"caret-down",size:12}),children:"See full breakdown"})]})})},t={args:{children:"Link",size:"sm"},render:()=>e.jsxs("div",{className:i.sizeStack,children:[e.jsx(a,{size:"sm",iconRight:e.jsx(o,{name:"caret-down",size:12}),children:"Small (12px) — popover context"}),e.jsx(a,{size:"md",iconRight:e.jsx(o,{name:"caret-down",size:14}),children:"Medium (14px) — default page context"})]})};var c,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'See full breakdown',
    size: 'sm',
    iconRight: <Icon name="caret-down" size={12} />
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,l,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'As anchor',
  args: {
    children: 'View documentation',
    href: '#',
    size: 'md',
    iconRight: <Icon name="arrow-square-out" size={14} />
  }
}`,...(g=(l=s.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var h,u,z;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'In popover · flush alignment',
  args: {
    children: 'See full breakdown',
    size: 'sm'
  },
  render: () => <PopoverBubble appearance="default" placement="top" caret>
      <div className={styles.popoverContent}>
        <p className={styles.body}>
          The <strong>combined score</strong> is a weighted average of the{' '}
          <strong>deterministic score</strong>, <strong>AI read</strong>, and{' '}
          <strong>strategic relevance</strong> scores.
        </p>
        <Link size="sm" iconRight={<Icon name="caret-down" size={12} />}>
          See full breakdown
        </Link>
      </div>
    </PopoverBubble>
}`,...(z=(u=n.parameters)==null?void 0:u.docs)==null?void 0:z.source}}};var x,f,v;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Link',
    size: 'sm'
  },
  render: () => <div className={styles.sizeStack}>
      <Link size="sm" iconRight={<Icon name="caret-down" size={12} />}>
        Small (12px) — popover context
      </Link>
      <Link size="md" iconRight={<Icon name="caret-down" size={14} />}>
        Medium (14px) — default page context
      </Link>
    </div>
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const M=["Default","AsAnchor","InPopover","Sizes"];export{s as AsAnchor,r as Default,n as InPopover,t as Sizes,M as __namedExportsOrder,E as default};
