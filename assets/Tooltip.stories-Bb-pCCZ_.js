import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as F}from"./Icon-CvApckDy.js";import{a as M}from"./SideNav-CZlvTgW_.js";import{r as j}from"./iframe-DVYlbdCj.js";import{c as s}from"./cn-2dOUpm6k.js";import"./IconBase.es-B2CDjfeH.js";import"./CaretRight.es-DZQcZDHf.js";import"./CaretDown.es-dcCKaQIp.js";import"./Minus.es-jJJNhrfV.js";import"./Warning.es-xNai1R_s.js";import"./Flag.es-BdG3sE1r.js";import"./Trash.es-ByI4ZgPH.js";import"./preload-helper-Uod2V3eo.js";const V="_bubble_b3sl4_1",W="_multiline_b3sl4_14",z="_surface_b3sl4_20",A="_surfaceTop_b3sl4_26",O="_surfaceBottom_b3sl4_30",k="_surfaceLeft_b3sl4_34",D="_surfaceRight_b3sl4_38",G="_caret_b3sl4_42",H="_caretTop_b3sl4_49",J="_caretBottom_b3sl4_54",K="_caretLeft_b3sl4_59",Q="_caretRight_b3sl4_64",U="_root_b3sl4_85",X="_trigger_b3sl4_90",Y="_popup_b3sl4_94",Z="_placementTop_b3sl4_101",$="_placementBottom_b3sl4_107",ee="_placementLeft_b3sl4_113",te="_placementRight_b3sl4_119",t={bubble:V,multiline:W,surface:z,surfaceTop:A,surfaceBottom:O,surfaceLeft:k,surfaceRight:D,caret:G,caretTop:H,caretBottom:J,caretLeft:K,caretRight:Q,root:U,trigger:X,popup:Y,placementTop:Z,placementBottom:$,placementLeft:ee,placementRight:te},oe={top:t.surfaceTop,bottom:t.surfaceBottom,left:t.surfaceLeft,right:t.surfaceRight},ae={top:t.caretTop,bottom:t.caretBottom,left:t.caretLeft,right:t.caretRight},re={top:!1,bottom:!0,left:!1,right:!0};function o({className:m,content:u,placement:a="top",multiline:d=!1}){const n=e.jsx("span",{className:s("rc-body-xs",t.bubble,d&&t.multiline),children:u}),r=e.jsx("span",{className:s(t.caret,ae[a]),"aria-hidden":!0});return e.jsx("span",{className:s(t.surface,oe[a],m),children:re[a]?e.jsxs(e.Fragment,{children:[r,n]}):e.jsxs(e.Fragment,{children:[n,r]})})}function C({className:m,content:u,placement:a="top",multiline:d=!1,children:n}){const[r,f]=j.useState(!1),b=j.useId(),g=()=>f(!0),_=()=>f(!1),w=h=>{h.currentTarget.contains(h.relatedTarget)||_()},E={top:t.placementTop,bottom:t.placementBottom,left:t.placementLeft,right:t.placementRight}[a];return e.jsxs("span",{className:s(t.root,m),onMouseEnter:g,onMouseLeave:_,onFocus:g,onBlur:w,children:[e.jsx("span",{className:t.trigger,"aria-describedby":r?b:void 0,children:n}),r?e.jsx("span",{id:b,role:"tooltip",className:s(t.popup,E),children:e.jsx(o,{content:u,placement:a,multiline:d})}):null]})}o.__docgenInfo={description:"",methods:[],displayName:"TooltipBubble",props:{className:{required:!1,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"ReactNode"},description:""},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},multiline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};C.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{className:{required:!1,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"ReactNode"},description:""},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},multiline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactElement"},description:""}}};const he={title:"Components/Tooltip",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Carbon-style tooltip: inverse surface, 12px text, compact single-line padding (12×2px), multiline padding 12px, 6px caret, 4px offset from trigger."}}}},c={args:{content:"Projects",placement:"top"}},l={args:{content:"Brief helpful context that may wrap to multiple lines.",placement:"top",multiline:!0}},p={args:{content:"Projects",placement:"top"},render:()=>e.jsxs("div",{style:{display:"flex",gap:32,alignItems:"center",flexWrap:"wrap"},children:[e.jsx(o,{content:"Projects",placement:"top"}),e.jsx(o,{content:"Projects",placement:"bottom"}),e.jsx(o,{content:"Projects",placement:"left"}),e.jsx(o,{content:"Projects",placement:"right"})]})},i={name:"Side Nav (PoC)",args:{content:"Projects",placement:"top"},render:()=>e.jsx(C,{content:"Projects",placement:"right",children:e.jsx(M,{active:!0,label:"Projects",icon:e.jsx(F,{name:"cards-three",size:16})})})};var x,T,v;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    content: 'Projects',
    placement: 'top'
  }
}`,...(v=(T=c.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var y,B,P;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    content: 'Brief helpful context that may wrap to multiple lines.',
    placement: 'top',
    multiline: true
  }
}`,...(P=(B=l.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var N,L,R;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(R=(L=p.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var S,I,q;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Side Nav (PoC)',
  args: {
    content: 'Projects',
    placement: 'top'
  },
  render: () => <Tooltip content="Projects" placement="right">
      <SideNavItem active label="Projects" icon={<Icon name="cards-three" size={16} />} />
    </Tooltip>
}`,...(q=(I=i.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const je=["SingleLine","MultiLine","AllPlacements","WithSideNavItem"];export{p as AllPlacements,l as MultiLine,c as SingleLine,i as WithSideNavItem,je as __namedExportsOrder,he as default};
