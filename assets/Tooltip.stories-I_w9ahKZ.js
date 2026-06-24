import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as E}from"./Icon-CQBq_qkc.js";import{a as F}from"./SideNav-rmSEU6Gs.js";import{r as j}from"./iframe-CHWteash.js";import{c as s}from"./cn-2dOUpm6k.js";import"./IconBase.es-DMwgXKuZ.js";import"./CaretRight.es-C8TVPgpN.js";import"./CaretDown.es-x55WEbKs.js";import"./Minus.es-BTZwBiQz.js";import"./Plus.es-BdUDdEAS.js";import"./File.es-DPrQh2yO.js";import"./Trash.es-CQZx0wex.js";import"./preload-helper-Uod2V3eo.js";const M="_bubble_l3kb3_1",V="_multiline_l3kb3_19",W="_surface_l3kb3_25",z="_surfaceTop_l3kb3_31",A="_surfaceBottom_l3kb3_35",O="_surfaceLeft_l3kb3_39",D="_surfaceRight_l3kb3_43",G="_caret_l3kb3_47",H="_caretTop_l3kb3_54",J="_caretBottom_l3kb3_59",K="_caretLeft_l3kb3_64",Q="_caretRight_l3kb3_69",U="_root_l3kb3_90",X="_trigger_l3kb3_95",Y="_popup_l3kb3_99",Z="_placementTop_l3kb3_106",$="_placementBottom_l3kb3_112",ee="_placementLeft_l3kb3_118",te="_placementRight_l3kb3_124",t={bubble:M,multiline:V,surface:W,surfaceTop:z,surfaceBottom:A,surfaceLeft:O,surfaceRight:D,caret:G,caretTop:H,caretBottom:J,caretLeft:K,caretRight:Q,root:U,trigger:X,popup:Y,placementTop:Z,placementBottom:$,placementLeft:ee,placementRight:te},oe={top:t.surfaceTop,bottom:t.surfaceBottom,left:t.surfaceLeft,right:t.surfaceRight},ae={top:t.caretTop,bottom:t.caretBottom,left:t.caretLeft,right:t.caretRight},re={top:!1,bottom:!0,left:!1,right:!0};function o({className:m,content:u,placement:a="top",multiline:d=!1}){const n=e.jsx("span",{className:s(t.bubble,d&&t.multiline),children:u}),r=e.jsx("span",{className:s(t.caret,ae[a]),"aria-hidden":!0});return e.jsx("span",{className:s(t.surface,oe[a],m),children:re[a]?e.jsxs(e.Fragment,{children:[r,n]}):e.jsxs(e.Fragment,{children:[n,r]})})}function q({className:m,content:u,placement:a="top",multiline:d=!1,children:n}){const[r,f]=j.useState(!1),g=j.useId(),b=()=>f(!0),_=()=>f(!1),C=h=>{h.currentTarget.contains(h.relatedTarget)||_()},w={top:t.placementTop,bottom:t.placementBottom,left:t.placementLeft,right:t.placementRight}[a];return e.jsxs("span",{className:s(t.root,m),onMouseEnter:b,onMouseLeave:_,onFocus:b,onBlur:C,children:[e.jsx("span",{className:t.trigger,"aria-describedby":r?g:void 0,children:n}),r?e.jsx("span",{id:g,role:"tooltip",className:s(t.popup,w),children:e.jsx(o,{content:u,placement:a,multiline:d})}):null]})}o.__docgenInfo={description:"",methods:[],displayName:"TooltipBubble",props:{className:{required:!1,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"ReactNode"},description:""},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},multiline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};q.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{className:{required:!1,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"ReactNode"},description:""},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},multiline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactElement"},description:""}}};const he={title:"Components/Tooltip",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Carbon-style tooltip: inverse surface, 12px text, compact single-line padding (12×2px), multiline padding 12px, 6px caret, 4px offset from trigger."}}}},c={args:{content:"Projects",placement:"top"}},l={args:{content:"Brief helpful context that may wrap to multiple lines.",placement:"top",multiline:!0}},p={args:{content:"Projects",placement:"top"},render:()=>e.jsxs("div",{style:{display:"flex",gap:32,alignItems:"center",flexWrap:"wrap"},children:[e.jsx(o,{content:"Projects",placement:"top"}),e.jsx(o,{content:"Projects",placement:"bottom"}),e.jsx(o,{content:"Projects",placement:"left"}),e.jsx(o,{content:"Projects",placement:"right"})]})},i={name:"Side Nav (PoC)",args:{content:"Projects",placement:"top"},render:()=>e.jsx(q,{content:"Projects",placement:"right",children:e.jsx(F,{active:!0,label:"Projects",icon:e.jsx(E,{name:"cards-three",size:16})})})};var x,T,v;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    content: 'Projects',
    placement: 'top'
  }
}`,...(v=(T=c.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var B,P,y;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    content: 'Brief helpful context that may wrap to multiple lines.',
    placement: 'top',
    multiline: true
  }
}`,...(y=(P=l.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};var k,N,L;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(I=(S=i.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const je=["SingleLine","MultiLine","AllPlacements","WithSideNavItem"];export{p as AllPlacements,l as MultiLine,c as SingleLine,i as WithSideNavItem,je as __namedExportsOrder,he as default};
