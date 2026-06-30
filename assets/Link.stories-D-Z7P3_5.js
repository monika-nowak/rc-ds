import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as s}from"./Icon-Dfh7bYp3.js";import{P as A}from"./Popover-D5Xq_PNq.js";import{c as P}from"./cn-2dOUpm6k.js";import"./iframe-Dj2fNUKW.js";import"./preload-helper-Uod2V3eo.js";import"./IconBase.es-BN1nhKFu.js";import"./CaretRight.es-VMw27wF1.js";import"./CaretDown.es-BW8BGd4m.js";import"./Minus.es-DmGM4g94.js";import"./Warning.es-w2C_RtJU.js";import"./File.es-C6Vu3DIB.js";import"./Trash.es-DEznS888.js";const T="_link_qvvc0_1",C="_sm_qvvc0_34",B="_md_qvvc0_39",V="_icon_qvvc0_44",n={link:T,sm:C,md:B,icon:V};function o({size:I="md",iconLeft:d,iconRight:m,children:N,className:q,href:l,...p}){const u=P(n.link,n[I],q),h=e.jsxs(e.Fragment,{children:[d?e.jsx("span",{className:n.icon,children:d}):null,e.jsx("span",{children:N}),m?e.jsx("span",{className:n.icon,children:m}):null]});if(l!=null){const L=p;return e.jsx("a",{href:l,className:u,...L,children:h})}const R=p;return e.jsx("button",{type:"button",className:u,...R,children:h})}o.__docgenInfo={description:"",methods:[],displayName:"Link",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},iconLeft:{required:!1,tsType:{name:"ReactNode"},description:""},iconRight:{required:!1,tsType:{name:"ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const D="_popoverContent_17qyo_1",E="_body_17qyo_8",M="_sizeStack_17qyo_20",c={popoverContent:D,body:E,sizeStack:M},ee={title:"Components/Link",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Inline action link with zero padding — aligns flush with surrounding text (e.g. popover body). Use for in-context actions like “See full breakdown”. Use Button for standalone controls with touch targets."}}},argTypes:{size:{control:"radio",options:["sm","md"]}}},r={args:{children:"See full breakdown",size:"sm",iconRight:e.jsx(s,{name:"caret-down",size:12})}},t={name:"As anchor",args:{children:"View documentation",href:"#",size:"md",iconRight:e.jsx(s,{name:"arrow-square-out",size:14})}},a={name:"In popover · flush alignment",args:{children:"See full breakdown",size:"sm"},render:()=>e.jsx(A,{appearance:"default",placement:"top",caret:!0,children:e.jsxs("div",{className:c.popoverContent,children:[e.jsxs("p",{className:c.body,children:["The ",e.jsx("strong",{children:"combined score"})," is a weighted average of the"," ",e.jsx("strong",{children:"deterministic score"}),", ",e.jsx("strong",{children:"AI read"}),", and"," ",e.jsx("strong",{children:"strategic relevance"})," scores."]}),e.jsx(o,{size:"sm",iconRight:e.jsx(s,{name:"caret-down",size:12}),children:"See full breakdown"})]})})},i={args:{children:"Link",size:"sm"},render:()=>e.jsxs("div",{className:c.sizeStack,children:[e.jsx(o,{size:"sm",iconRight:e.jsx(s,{name:"caret-down",size:12}),children:"Small (12px) — popover context"}),e.jsx(o,{size:"md",iconRight:e.jsx(s,{name:"caret-down",size:14}),children:"Medium (14px) — default page context"})]})};var g,v,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'See full breakdown',
    size: 'sm',
    iconRight: <Icon name="caret-down" size={12} />
  }
}`,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var f,z,k;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'As anchor',
  args: {
    children: 'View documentation',
    href: '#',
    size: 'md',
    iconRight: <Icon name="arrow-square-out" size={14} />
  }
}`,...(k=(z=t.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var w,_,b;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(b=(_=a.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var j,y,S;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(S=(y=i.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const se=["Default","AsAnchor","InPopover","Sizes"];export{t as AsAnchor,r as Default,a as InPopover,i as Sizes,se as __namedExportsOrder,ee as default};
