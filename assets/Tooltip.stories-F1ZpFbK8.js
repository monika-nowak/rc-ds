import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as E}from"./Icon-Dfh7bYp3.js";import{a as F}from"./SideNav-rmSEU6Gs.js";import{r as y}from"./iframe-Dj2fNUKW.js";import{c as s}from"./cn-2dOUpm6k.js";import"./IconBase.es-BN1nhKFu.js";import"./CaretRight.es-VMw27wF1.js";import"./CaretDown.es-BW8BGd4m.js";import"./Minus.es-DmGM4g94.js";import"./Warning.es-w2C_RtJU.js";import"./File.es-C6Vu3DIB.js";import"./Trash.es-DEznS888.js";import"./preload-helper-Uod2V3eo.js";const M="_bubble_3zzys_1",V="_multiline_3zzys_19",W="_surface_3zzys_25",A="_surfaceTop_3zzys_31",O="_surfaceBottom_3zzys_35",k="_surfaceLeft_3zzys_39",D="_surfaceRight_3zzys_43",G="_caret_3zzys_47",H="_caretTop_3zzys_54",J="_caretBottom_3zzys_59",K="_caretLeft_3zzys_64",Q="_caretRight_3zzys_69",U="_root_3zzys_90",X="_trigger_3zzys_95",Y="_popup_3zzys_99",Z="_placementTop_3zzys_106",$="_placementBottom_3zzys_112",ee="_placementLeft_3zzys_118",te="_placementRight_3zzys_124",t={bubble:M,multiline:V,surface:W,surfaceTop:A,surfaceBottom:O,surfaceLeft:k,surfaceRight:D,caret:G,caretTop:H,caretBottom:J,caretLeft:K,caretRight:Q,root:U,trigger:X,popup:Y,placementTop:Z,placementBottom:$,placementLeft:ee,placementRight:te},oe={top:t.surfaceTop,bottom:t.surfaceBottom,left:t.surfaceLeft,right:t.surfaceRight},ae={top:t.caretTop,bottom:t.caretBottom,left:t.caretLeft,right:t.caretRight},re={top:!1,bottom:!0,left:!1,right:!0};function o({className:m,content:u,placement:a="top",multiline:d=!1}){const n=e.jsx("span",{className:s(t.bubble,d&&t.multiline),children:u}),r=e.jsx("span",{className:s(t.caret,ae[a]),"aria-hidden":!0});return e.jsx("span",{className:s(t.surface,oe[a],m),children:re[a]?e.jsxs(e.Fragment,{children:[r,n]}):e.jsxs(e.Fragment,{children:[n,r]})})}function q({className:m,content:u,placement:a="top",multiline:d=!1,children:n}){const[r,f]=y.useState(!1),g=y.useId(),_=()=>f(!0),h=()=>f(!1),C=b=>{b.currentTarget.contains(b.relatedTarget)||h()},w={top:t.placementTop,bottom:t.placementBottom,left:t.placementLeft,right:t.placementRight}[a];return e.jsxs("span",{className:s(t.root,m),onMouseEnter:_,onMouseLeave:h,onFocus:_,onBlur:C,children:[e.jsx("span",{className:t.trigger,"aria-describedby":r?g:void 0,children:n}),r?e.jsx("span",{id:g,role:"tooltip",className:s(t.popup,w),children:e.jsx(o,{content:u,placement:a,multiline:d})}):null]})}o.__docgenInfo={description:"",methods:[],displayName:"TooltipBubble",props:{className:{required:!1,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"ReactNode"},description:""},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},multiline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};q.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{className:{required:!1,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"ReactNode"},description:""},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},multiline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactElement"},description:""}}};const be={title:"Components/Tooltip",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Carbon-style tooltip: inverse surface, 12px text, compact single-line padding (12×2px), multiline padding 12px, 6px caret, 4px offset from trigger."}}}},c={args:{content:"Projects",placement:"top"}},l={args:{content:"Brief helpful context that may wrap to multiple lines.",placement:"top",multiline:!0}},p={args:{content:"Projects",placement:"top"},render:()=>e.jsxs("div",{style:{display:"flex",gap:32,alignItems:"center",flexWrap:"wrap"},children:[e.jsx(o,{content:"Projects",placement:"top"}),e.jsx(o,{content:"Projects",placement:"bottom"}),e.jsx(o,{content:"Projects",placement:"left"}),e.jsx(o,{content:"Projects",placement:"right"})]})},i={name:"Side Nav (PoC)",args:{content:"Projects",placement:"top"},render:()=>e.jsx(q,{content:"Projects",placement:"right",children:e.jsx(F,{active:!0,label:"Projects",icon:e.jsx(E,{name:"cards-three",size:16})})})};var z,j,x;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    content: 'Projects',
    placement: 'top'
  }
}`,...(x=(j=c.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var T,v,B;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    content: 'Brief helpful context that may wrap to multiple lines.',
    placement: 'top',
    multiline: true
  }
}`,...(B=(v=l.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var P,N,L;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    content: 'Projects',
    placement: 'top'
  },
  render: () => <div style={{
    display: 'flex',
    gap: 32,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <TooltipBubble content="Projects" placement="top" />
      <TooltipBubble content="Projects" placement="bottom" />
      <TooltipBubble content="Projects" placement="left" />
      <TooltipBubble content="Projects" placement="right" />
    </div>
}`,...(L=(N=p.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var R,S,I;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Side Nav (PoC)',
  args: {
    content: 'Projects',
    placement: 'top'
  },
  render: () => <Tooltip content="Projects" placement="right">
      <SideNavItem active label="Projects" icon={<Icon name="cards-three" size={16} />} />
    </Tooltip>
}`,...(I=(S=i.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const ye=["SingleLine","MultiLine","AllPlacements","WithSideNavItem"];export{p as AllPlacements,l as MultiLine,c as SingleLine,i as WithSideNavItem,ye as __namedExportsOrder,be as default};
