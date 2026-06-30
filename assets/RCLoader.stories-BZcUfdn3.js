import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-Di2CNPDO.js";import{c as p}from"./cn-2dOUpm6k.js";import"./preload-helper-Uod2V3eo.js";const ke="_root_38tjo_18",ze="_stageSizer_38tjo_24",Ae="_stage_38tjo_24",Ee="_cell_38tjo_38",Me="_popIn_38tjo_45",Ve="_digit_38tjo_54",Oe="_tile_38tjo_61",qe="_accent_38tjo_70",Fe="_label_38tjo_76",Ge="_labelDark_38tjo_86",Pe="_fullscreen_38tjo_90",r={root:ke,stageSizer:ze,stage:Ae,cell:Ee,popIn:Me,digit:Ve,tile:Oe,accent:qe,label:Fe,labelDark:Ge,fullscreen:Pe},Z=152,ee=48,ae=46,re=6,te="cubic-bezier(0.22, 1, 0.36, 1)",E=240,$e=.82,w=(()=>{const e=[];for(let o=0;o<9;o++)for(let i=0;i<9;i++){const g=Math.abs(Math.floor(o/3)-Math.floor(i/3))<=1,d=i%3-o%3===1;g&&d&&e.push([o,i])}return e})(),M=["4","","6","0","5","3","2","1","9"],se=["var(--rc-support-info)","var(--rc-support-error)","var(--rc-purple-500)"],ne={r:4,c:8,a:1},Be=e=>Math.floor(e/3),We=e=>e%3,f=e=>Math.floor(Math.random()*e),He=()=>{var e;return typeof window<"u"&&((e=window.matchMedia)==null?void 0:e.call(window,"(prefers-reduced-motion: reduce)").matches)};function Re({size:e=Z,label:o="Loading",showLabel:i=!1,dark:g=!1,animate:d=!0,interval:V=220,moveInterval:T=1e3,fullscreen:Te=!1,className:O,style:q}){const Ce=e/Z,u=He(),C=g?"var(--rc-text-on-color)":"var(--rc-text-primary)",[D,F]=n.useState(ne),[G,N]=n.useState(!0),[De,P]=n.useState(0),[k,$]=n.useState(M),[z,Ne]=n.useState(()=>Array(9).fill(0)),B=n.useRef(D);B.current=D;const W=n.useRef(k);W.current=k;const H=n.useRef(z);H.current=z,n.useEffect(()=>{if(u||!d){F(ne),N(!0),P(0);return}const t=[];let s=-1;const h=()=>{N(!1),t.push(window.setTimeout(()=>{let m=f(w.length);if(w.length>1)for(;m===s;)m=f(w.length);s=m;const[b,v]=w[m],l=[0,1,2,3,4,5,6,7,8].filter(c=>c!==b&&c!==v),y=l[f(l.length)];F({r:b,c:v,a:y}),P(c=>(c+1)%se.length),N(!0),t.push(window.setTimeout(h,T))},E))};return t.push(window.setTimeout(h,T)),()=>t.forEach(clearTimeout)},[u,d,T]),n.useEffect(()=>{if(!d||u){$(M);return}let t;const s=()=>{const h=V*(.65+Math.random()*.7);t=window.setTimeout(()=>{const{r:m,c:b,a:v}=B.current,l=f(9);if(l!==m&&l!==b&&l!==v){const y=W.current.slice();y[l]=String(f(10));const c=H.current.slice();c[l]+=1,$(y),Ne(c)}s()},h)};return s(),()=>window.clearTimeout(t)},[d,u,V]);const{r:J,c:K,a:Q}=D,A=t=>({left:re+We(t)*ae,top:re+Be(t)*ae,width:ee,height:ee}),U=u?{}:{opacity:G?1:0,transform:G?"scale(1)":`scale(${$e})`,transition:`opacity ${E}ms ${te}, transform ${E}ms ${te}`,willChange:"opacity, transform",backfaceVisibility:"hidden"},X=t=>({...A(t),borderColor:C,color:C,...U}),Y=a.jsxs("div",{"data-rc-loader":!0,role:"status","aria-live":"polite","aria-label":o,className:p(r.root,O),style:q,children:[a.jsx("div",{className:r.stageSizer,style:{width:e,height:e},children:a.jsxs("div",{className:r.stage,style:{transform:`scale(${Ce})`},children:[M.map((t,s)=>s===J||s===K||s===Q?null:a.jsx("div",{"aria-hidden":"true",className:r.cell,style:A(s),children:a.jsx("span",{className:u?void 0:r.popIn,children:a.jsx("span",{className:r.digit,style:{color:C},children:k[s]})},z[s])},s)),a.jsx("div",{"aria-hidden":"true",className:r.cell,style:A(Q),children:a.jsx("span",{className:r.accent,style:{background:se[De],...U}})}),a.jsx("div",{"aria-hidden":"true",className:p(r.cell,r.tile),style:X(J),children:"R"}),a.jsx("div",{"aria-hidden":"true",className:p(r.cell,r.tile),style:X(K),children:"C"})]})}),i?a.jsx("p",{className:p(r.label,g&&r.labelDark),children:o}):null]});return Te?a.jsx("div",{className:p(r.fullscreen,O),style:q,children:Y}):Y}Re.__docgenInfo={description:"",methods:[],displayName:"RCLoader",props:{size:{required:!1,tsType:{name:"number"},description:"Total width/height in px. The whole stage scales proportionally. Default: 152.",defaultValue:{value:"152",computed:!1}},label:{required:!1,tsType:{name:"string"},description:'Accessible label announced by screen readers. Default: "Loading".',defaultValue:{value:"'Loading'",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"Render the label as visible text below the animation. Default: false.",defaultValue:{value:"false",computed:!1}},dark:{required:!1,tsType:{name:"boolean"},description:"Render foreground (digits / letters / borders) in white for dark surfaces. Default: false.",defaultValue:{value:"false",computed:!1}},animate:{required:!1,tsType:{name:"boolean"},description:"Whether the loader animates. Default: true.",defaultValue:{value:"true",computed:!1}},interval:{required:!1,tsType:{name:"number"},description:"Average delay between digit refreshes in ms. Default: 220.",defaultValue:{value:"220",computed:!1}},moveInterval:{required:!1,tsType:{name:"number"},description:"How long R/C stay in a configuration before fading to the next, in ms. Default: 1000.",defaultValue:{value:"1000",computed:!1}},fullscreen:{required:!1,tsType:{name:"boolean"},description:"Render centered inside a full-area overlay. Default: false.",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const Xe={title:"Components/RCLoader",component:Re,tags:["autodocs"],parameters:{docs:{description:{component:"Brand loading animation — 3×3 grid with R/C tiles, cycling accent square, and shuffling digits. Geometry matches Figma PoC (152px stage, 48px cells, 46px step, 16px accent)."}}},argTypes:{size:{control:{type:"number",min:32,max:304,step:8},description:"Total width/height in px (scales the 152px stage proportionally)."},interval:{control:{type:"number",min:80,max:800,step:20},description:"Average delay between digit refreshes in ms."},moveInterval:{control:{type:"number",min:400,max:3e3,step:100},description:"How long R/C stay in a configuration before fading to the next, in ms."},label:{control:"text"},showLabel:{control:"boolean"},dark:{control:"boolean"},animate:{control:"boolean"},fullscreen:{control:"boolean"}}},x={args:{size:152,label:"Loading"}},_={name:"Inline (64px)",args:{size:64,label:"Loading"}},S={args:{size:152,label:"Generating your dashboard",showLabel:!0}},j={name:"Dark surface",args:{size:152,dark:!0,showLabel:!0,label:"Importing records"},decorators:[e=>a.jsx("div",{style:{background:"var(--rc-background-inverse)",padding:"var(--rc-spacing-8)",borderRadius:"var(--rc-radius-md)"},children:a.jsx(e,{})})]},L={name:"Fast motion",args:{size:152,interval:120,moveInterval:600,showLabel:!0,label:"Fast interval / moveInterval"}},I={name:"Static (animate=false)",args:{size:152,animate:!1,showLabel:!0,label:"Not animating"}},R={args:{size:152,fullscreen:!0,showLabel:!0,label:"Generating…"},decorators:[e=>a.jsx("div",{style:{position:"relative",width:480,height:320,background:"var(--rc-layer-01)",border:"1px solid var(--rc-border-subtle-02)",borderRadius:"var(--rc-radius-md)"},children:a.jsx(e,{})})],parameters:{layout:"padded"}};var oe,le,ie;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    size: 152,
    label: 'Loading'
  }
}`,...(ie=(le=x.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,de,ue;_.parameters={..._.parameters,docs:{...(ce=_.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Inline (64px)',
  args: {
    size: 64,
    label: 'Loading'
  }
}`,...(ue=(de=_.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,pe,fe;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    size: 152,
    label: 'Generating your dashboard',
    showLabel: true
  }
}`,...(fe=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var ge,he,be;j.parameters={...j.parameters,docs:{...(ge=j.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: 'Dark surface',
  args: {
    size: 152,
    dark: true,
    showLabel: true,
    label: 'Importing records'
  },
  decorators: [Story => <div style={{
    background: 'var(--rc-background-inverse)',
    padding: 'var(--rc-spacing-8)',
    borderRadius: 'var(--rc-radius-md)'
  }}>
        <Story />
      </div>]
}`,...(be=(he=j.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var ve,ye,we;L.parameters={...L.parameters,docs:{...(ve=L.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: 'Fast motion',
  args: {
    size: 152,
    interval: 120,
    moveInterval: 600,
    showLabel: true,
    label: 'Fast interval / moveInterval'
  }
}`,...(we=(ye=L.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var xe,_e,Se;I.parameters={...I.parameters,docs:{...(xe=I.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: 'Static (animate=false)',
  args: {
    size: 152,
    animate: false,
    showLabel: true,
    label: 'Not animating'
  }
}`,...(Se=(_e=I.parameters)==null?void 0:_e.docs)==null?void 0:Se.source}}};var je,Le,Ie;R.parameters={...R.parameters,docs:{...(je=R.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    size: 152,
    fullscreen: true,
    showLabel: true,
    label: 'Generating…'
  },
  decorators: [Story => <div style={{
    position: 'relative',
    width: 480,
    height: 320,
    background: 'var(--rc-layer-01)',
    border: '1px solid var(--rc-border-subtle-02)',
    borderRadius: 'var(--rc-radius-md)'
  }}>
        <Story />
      </div>],
  parameters: {
    layout: 'padded'
  }
}`,...(Ie=(Le=R.parameters)==null?void 0:Le.docs)==null?void 0:Ie.source}}};const Ye=["Default","InlineSmall","WithLabel","OnDarkSurface","FastMotion","Static","Fullscreen"];export{x as Default,L as FastMotion,R as Fullscreen,_ as InlineSmall,j as OnDarkSurface,I as Static,S as WithLabel,Ye as __namedExportsOrder,Xe as default};
