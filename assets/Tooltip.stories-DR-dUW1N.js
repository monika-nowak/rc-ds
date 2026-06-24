import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as F}from"./Icon-sGIf7kVh.js";import{a as M}from"./SideNav-rmSEU6Gs.js";import{r as j}from"./iframe-BH_zNAgC.js";import{c as s}from"./cn-2dOUpm6k.js";import"./IconBase.es-DDBWKy-D.js";import"./CaretRight.es-FsFfKZnF.js";import"./CaretDown.es-BY4yHaWr.js";import"./Minus.es-DieFk8IS.js";import"./Plus.es-BWdDhnEA.js";import"./File.es-DKD7WV0_.js";import"./Trash.es-CHO74X-f.js";import"./preload-helper-Uod2V3eo.js";const V="_bubble_1i98g_1",W="_multiline_1i98g_19",z="_surface_1i98g_25",A="_surfaceTop_1i98g_31",O="_surfaceBottom_1i98g_35",k="_surfaceLeft_1i98g_39",D="_surfaceRight_1i98g_43",G="_caret_1i98g_47",H="_caretTop_1i98g_54",J="_caretBottom_1i98g_59",K="_caretLeft_1i98g_64",Q="_caretRight_1i98g_69",U="_root_1i98g_90",X="_trigger_1i98g_95",Y="_popup_1i98g_99",Z="_placementTop_1i98g_106",$="_placementBottom_1i98g_112",ee="_placementLeft_1i98g_118",te="_placementRight_1i98g_124",t={bubble:V,multiline:W,surface:z,surfaceTop:A,surfaceBottom:O,surfaceLeft:k,surfaceRight:D,caret:G,caretTop:H,caretBottom:J,caretLeft:K,caretRight:Q,root:U,trigger:X,popup:Y,placementTop:Z,placementBottom:$,placementLeft:ee,placementRight:te},oe={top:t.surfaceTop,bottom:t.surfaceBottom,left:t.surfaceLeft,right:t.surfaceRight},ae={top:t.caretTop,bottom:t.caretBottom,left:t.caretLeft,right:t.caretRight},re={top:!1,bottom:!0,left:!1,right:!0};function o({className:m,content:u,placement:a="top",multiline:d=!1}){const n=e.jsx("span",{className:s(t.bubble,d&&t.multiline),children:u}),r=e.jsx("span",{className:s(t.caret,ae[a]),"aria-hidden":!0});return e.jsx("span",{className:s(t.surface,oe[a],m),children:re[a]?e.jsxs(e.Fragment,{children:[r,n]}):e.jsxs(e.Fragment,{children:[n,r]})})}function C({className:m,content:u,placement:a="top",multiline:d=!1,children:n}){const[r,f]=j.useState(!1),g=j.useId(),_=()=>f(!0),h=()=>f(!1),w=b=>{b.currentTarget.contains(b.relatedTarget)||h()},E={top:t.placementTop,bottom:t.placementBottom,left:t.placementLeft,right:t.placementRight}[a];return e.jsxs("span",{className:s(t.root,m),onMouseEnter:_,onMouseLeave:h,onFocus:_,onBlur:w,children:[e.jsx("span",{className:t.trigger,"aria-describedby":r?g:void 0,children:n}),r?e.jsx("span",{id:g,role:"tooltip",className:s(t.popup,E),children:e.jsx(o,{content:u,placement:a,multiline:d})}):null]})}o.__docgenInfo={description:"",methods:[],displayName:"TooltipBubble",props:{className:{required:!1,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"ReactNode"},description:""},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},multiline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};C.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{className:{required:!1,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"ReactNode"},description:""},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},multiline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactElement"},description:""}}};const be={title:"Components/Tooltip",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Carbon-style tooltip: inverse surface, 12px text, compact single-line padding (12×2px), multiline padding 12px, 6px caret, 4px offset from trigger."}}}},c={args:{content:"Projects",placement:"top"}},l={args:{content:"Brief helpful context that may wrap to multiple lines.",placement:"top",multiline:!0}},i={args:{content:"Projects",placement:"top"},render:()=>e.jsxs("div",{style:{display:"flex",gap:32,alignItems:"center",flexWrap:"wrap"},children:[e.jsx(o,{content:"Projects",placement:"top"}),e.jsx(o,{content:"Projects",placement:"bottom"}),e.jsx(o,{content:"Projects",placement:"left"}),e.jsx(o,{content:"Projects",placement:"right"})]})},p={name:"Side Nav (PoC)",args:{content:"Projects",placement:"top"},render:()=>e.jsx(C,{content:"Projects",placement:"right",children:e.jsx(M,{active:!0,label:"Projects",icon:e.jsx(F,{name:"cards-three",size:16})})})};var x,T,v;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(P=l.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};var N,L,R;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(R=(L=i.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var S,I,q;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Side Nav (PoC)',
  args: {
    content: 'Projects',
    placement: 'top'
  },
  render: () => <Tooltip content="Projects" placement="right">
      <SideNavItem active label="Projects" icon={<Icon name="cards-three" size={16} />} />
    </Tooltip>
}`,...(q=(I=p.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const je=["SingleLine","MultiLine","AllPlacements","WithSideNavItem"];export{i as AllPlacements,l as MultiLine,c as SingleLine,p as WithSideNavItem,je as __namedExportsOrder,be as default};
