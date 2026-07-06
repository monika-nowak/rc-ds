import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as s}from"./Icon-6KlfR_aX.js";import{P as A}from"./Popover-D23kH1UQ.js";import{c as P}from"./cn-2dOUpm6k.js";import"./iframe-DBX0v1Wm.js";import"./preload-helper-Uod2V3eo.js";import"./IconBase.es-zeqnIraZ.js";import"./CaretRight.es-C7OiW3AX.js";import"./CaretDown.es-CCRlVziS.js";import"./Minus.es-gPxNOu_K.js";import"./Warning.es-BxbdZV1j.js";import"./Flag.es-D0A0cjfy.js";import"./Trash.es-ChueP44e.js";const T="_link_1g4wh_1",C="_icon_1g4wh_32",i={link:T,icon:C};function o({size:I="md",iconLeft:d,iconRight:l,children:N,className:R,href:m,...p}){const u=P(i.link,I==="sm"?"rc-label-sm":"rc-label-md",R),h=e.jsxs(e.Fragment,{children:[d?e.jsx("span",{className:i.icon,children:d}):null,e.jsx("span",{children:N}),l?e.jsx("span",{className:i.icon,children:l}):null]});if(m!=null){const q=p;return e.jsx("a",{href:m,className:u,...q,children:h})}const L=p;return e.jsx("button",{type:"button",className:u,...L,children:h})}o.__docgenInfo={description:"",methods:[],displayName:"Link",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},iconLeft:{required:!1,tsType:{name:"ReactNode"},description:""},iconRight:{required:!1,tsType:{name:"ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const B="_popoverContent_17qyo_1",V="_body_17qyo_8",D="_sizeStack_17qyo_20",c={popoverContent:B,body:V,sizeStack:D},Y={title:"Components/Link",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Inline action link with zero padding — aligns flush with surrounding text (e.g. popover body). Use for in-context actions like “See full breakdown”. Use Button for standalone controls with touch targets."}}},argTypes:{size:{control:"radio",options:["sm","md"]}}},n={args:{children:"See full breakdown",size:"sm",iconRight:e.jsx(s,{name:"caret-down",size:12})}},r={name:"As anchor",args:{children:"View documentation",href:"#",size:"md",iconRight:e.jsx(s,{name:"arrow-square-out",size:14})}},t={name:"In popover · flush alignment",args:{children:"See full breakdown",size:"sm"},render:()=>e.jsx(A,{appearance:"default",placement:"top",caret:!0,children:e.jsxs("div",{className:c.popoverContent,children:[e.jsxs("p",{className:c.body,children:["The ",e.jsx("strong",{children:"combined score"})," is a weighted average of the"," ",e.jsx("strong",{children:"deterministic score"}),", ",e.jsx("strong",{children:"AI read"}),", and"," ",e.jsx("strong",{children:"strategic relevance"})," scores."]}),e.jsx(o,{size:"sm",iconRight:e.jsx(s,{name:"caret-down",size:12}),children:"See full breakdown"})]})})},a={args:{children:"Link",size:"sm"},render:()=>e.jsxs("div",{className:c.sizeStack,children:[e.jsx(o,{size:"sm",iconRight:e.jsx(s,{name:"caret-down",size:12}),children:"Small (12px) — popover context"}),e.jsx(o,{size:"md",iconRight:e.jsx(s,{name:"caret-down",size:14}),children:"Medium (14px) — default page context"})]})};var g,x,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'See full breakdown',
    size: 'sm',
    iconRight: <Icon name="caret-down" size={12} />
  }
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var z,k,v;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'As anchor',
  args: {
    children: 'View documentation',
    href: '#',
    size: 'md',
    iconRight: <Icon name="arrow-square-out" size={14} />
  }
}`,...(v=(k=r.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var w,b,j;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(j=(b=t.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var y,S,_;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(_=(S=a.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};const Z=["Default","AsAnchor","InPopover","Sizes"];export{r as AsAnchor,n as Default,t as InPopover,a as Sizes,Z as __namedExportsOrder,Y as default};
