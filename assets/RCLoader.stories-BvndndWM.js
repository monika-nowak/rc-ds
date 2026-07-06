import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-DBX0v1Wm.js";import{c as p}from"./cn-2dOUpm6k.js";import"./preload-helper-Uod2V3eo.js";const je="_root_9c159_18",ze="_stageSizer_9c159_24",Ae="_stage_9c159_24",Ee="_cell_9c159_38",Me="_popIn_9c159_45",Ve="_tile_9c159_54",Oe="_accent_9c159_60",qe="_label_9c159_66",Fe="_labelDark_9c159_72",Ge="_fullscreen_9c159_76",a={root:je,stageSizer:ze,stage:Ae,cell:Ee,popIn:Me,tile:Ve,accent:Oe,label:qe,labelDark:Fe,fullscreen:Ge},Z=152,ee=48,re=46,ae=6,te="cubic-bezier(0.22, 1, 0.36, 1)",E=240,Pe=.82,w=(()=>{const e=[];for(let o=0;o<9;o++)for(let c=0;c<9;c++){const g=Math.abs(Math.floor(o/3)-Math.floor(c/3))<=1,d=c%3-o%3===1;g&&d&&e.push([o,c])}return e})(),M=["4","","6","0","5","3","2","1","9"],se=["var(--rc-support-info)","var(--rc-support-error)","var(--rc-purple-500)"],ne={r:4,c:8,a:1},$e=e=>Math.floor(e/3),Be=e=>e%3,f=e=>Math.floor(Math.random()*e),We=()=>{var e;return typeof window<"u"&&((e=window.matchMedia)==null?void 0:e.call(window,"(prefers-reduced-motion: reduce)").matches)};function Te({size:e=Z,label:o="Loading",showLabel:c=!1,dark:g=!1,animate:d=!0,interval:V=220,moveInterval:C=1e3,fullscreen:Ce=!1,className:O,style:q}){const De=e/Z,u=We(),D=g?"var(--rc-text-on-color)":"var(--rc-text-primary)",[N,F]=n.useState(ne),[G,k]=n.useState(!0),[Ne,P]=n.useState(0),[j,$]=n.useState(M),[z,ke]=n.useState(()=>Array(9).fill(0)),B=n.useRef(N);B.current=N;const W=n.useRef(j);W.current=j;const H=n.useRef(z);H.current=z,n.useEffect(()=>{if(u||!d){F(ne),k(!0),P(0);return}const t=[];let s=-1;const h=()=>{k(!1),t.push(window.setTimeout(()=>{let m=f(w.length);if(w.length>1)for(;m===s;)m=f(w.length);s=m;const[b,v]=w[m],l=[0,1,2,3,4,5,6,7,8].filter(i=>i!==b&&i!==v),y=l[f(l.length)];F({r:b,c:v,a:y}),P(i=>(i+1)%se.length),k(!0),t.push(window.setTimeout(h,C))},E))};return t.push(window.setTimeout(h,C)),()=>t.forEach(clearTimeout)},[u,d,C]),n.useEffect(()=>{if(!d||u){$(M);return}let t;const s=()=>{const h=V*(.65+Math.random()*.7);t=window.setTimeout(()=>{const{r:m,c:b,a:v}=B.current,l=f(9);if(l!==m&&l!==b&&l!==v){const y=W.current.slice();y[l]=String(f(10));const i=H.current.slice();i[l]+=1,$(y),ke(i)}s()},h)};return s(),()=>window.clearTimeout(t)},[d,u,V]);const{r:J,c:K,a:Q}=N,A=t=>({left:ae+Be(t)*re,top:ae+$e(t)*re,width:ee,height:ee}),U=u?{}:{opacity:G?1:0,transform:G?"scale(1)":`scale(${Pe})`,transition:`opacity ${E}ms ${te}, transform ${E}ms ${te}`,willChange:"opacity, transform",backfaceVisibility:"hidden"},X=t=>({...A(t),borderColor:D,color:D,...U}),Y=r.jsxs("div",{"data-rc-loader":!0,role:"status","aria-live":"polite","aria-label":o,className:p(a.root,O),style:q,children:[r.jsx("div",{className:a.stageSizer,style:{width:e,height:e},children:r.jsxs("div",{className:a.stage,style:{transform:`scale(${De})`},children:[M.map((t,s)=>s===J||s===K||s===Q?null:r.jsx("div",{"aria-hidden":"true",className:a.cell,style:A(s),children:r.jsx("span",{className:u?void 0:a.popIn,children:r.jsx("span",{className:"rc-heading-h6",style:{color:D},children:j[s]})},z[s])},s)),r.jsx("div",{"aria-hidden":"true",className:a.cell,style:A(Q),children:r.jsx("span",{className:a.accent,style:{background:se[Ne],...U}})}),r.jsx("div",{"aria-hidden":"true",className:p("rc-heading-h6",a.cell,a.tile),style:X(J),children:"R"}),r.jsx("div",{"aria-hidden":"true",className:p("rc-heading-h6",a.cell,a.tile),style:X(K),children:"C"})]})}),c?r.jsx("p",{className:p("rc-body-md",a.label,g&&a.labelDark),children:o}):null]});return Ce?r.jsx("div",{className:p(a.fullscreen,O),style:q,children:Y}):Y}Te.__docgenInfo={description:"",methods:[],displayName:"RCLoader",props:{size:{required:!1,tsType:{name:"number"},description:"Total width/height in px. The whole stage scales proportionally. Default: 152.",defaultValue:{value:"152",computed:!1}},label:{required:!1,tsType:{name:"string"},description:'Accessible label announced by screen readers. Default: "Loading".',defaultValue:{value:"'Loading'",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"Render the label as visible text below the animation. Default: false.",defaultValue:{value:"false",computed:!1}},dark:{required:!1,tsType:{name:"boolean"},description:"Render foreground (digits / letters / borders) in white for dark surfaces. Default: false.",defaultValue:{value:"false",computed:!1}},animate:{required:!1,tsType:{name:"boolean"},description:"Whether the loader animates. Default: true.",defaultValue:{value:"true",computed:!1}},interval:{required:!1,tsType:{name:"number"},description:"Average delay between digit refreshes in ms. Default: 220.",defaultValue:{value:"220",computed:!1}},moveInterval:{required:!1,tsType:{name:"number"},description:"How long R/C stay in a configuration before fading to the next, in ms. Default: 1000.",defaultValue:{value:"1000",computed:!1}},fullscreen:{required:!1,tsType:{name:"boolean"},description:"Render centered inside a full-area overlay. Default: false.",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const Ue={title:"Components/RCLoader",component:Te,tags:["autodocs"],parameters:{docs:{description:{component:"Brand loading animation — 3×3 grid with R/C tiles, cycling accent square, and shuffling digits. Geometry matches Figma PoC (152px stage, 48px cells, 46px step, 16px accent)."}}},argTypes:{size:{control:{type:"number",min:32,max:304,step:8},description:"Total width/height in px (scales the 152px stage proportionally)."},interval:{control:{type:"number",min:80,max:800,step:20},description:"Average delay between digit refreshes in ms."},moveInterval:{control:{type:"number",min:400,max:3e3,step:100},description:"How long R/C stay in a configuration before fading to the next, in ms."},label:{control:"text"},showLabel:{control:"boolean"},dark:{control:"boolean"},animate:{control:"boolean"},fullscreen:{control:"boolean"}}},x={args:{size:152,label:"Loading"}},S={name:"Inline (64px)",args:{size:64,label:"Loading"}},_={args:{size:152,label:"Generating your dashboard",showLabel:!0}},L={name:"Dark surface",args:{size:152,dark:!0,showLabel:!0,label:"Importing records"},decorators:[e=>r.jsx("div",{style:{background:"var(--rc-background-inverse)",padding:"var(--rc-spacing-8)",borderRadius:"var(--rc-radius-md)"},children:r.jsx(e,{})})]},I={name:"Fast motion",args:{size:152,interval:120,moveInterval:600,showLabel:!0,label:"Fast interval / moveInterval"}},R={name:"Static (animate=false)",args:{size:152,animate:!1,showLabel:!0,label:"Not animating"}},T={args:{size:152,fullscreen:!0,showLabel:!0,label:"Generating…"},decorators:[e=>r.jsx("div",{style:{position:"relative",width:480,height:320,background:"var(--rc-layer-01)",border:"1px solid var(--rc-border-subtle-02)",borderRadius:"var(--rc-radius-md)"},children:r.jsx(e,{})})],parameters:{layout:"padded"}};var oe,le,ce;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    size: 152,
    label: 'Loading'
  }
}`,...(ce=(le=x.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ie,de,ue;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Inline (64px)',
  args: {
    size: 64,
    label: 'Loading'
  }
}`,...(ue=(de=S.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,pe,fe;_.parameters={..._.parameters,docs:{...(me=_.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    size: 152,
    label: 'Generating your dashboard',
    showLabel: true
  }
}`,...(fe=(pe=_.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var ge,he,be;L.parameters={...L.parameters,docs:{...(ge=L.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(be=(he=L.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var ve,ye,we;I.parameters={...I.parameters,docs:{...(ve=I.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: 'Fast motion',
  args: {
    size: 152,
    interval: 120,
    moveInterval: 600,
    showLabel: true,
    label: 'Fast interval / moveInterval'
  }
}`,...(we=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var xe,Se,_e;R.parameters={...R.parameters,docs:{...(xe=R.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: 'Static (animate=false)',
  args: {
    size: 152,
    animate: false,
    showLabel: true,
    label: 'Not animating'
  }
}`,...(_e=(Se=R.parameters)==null?void 0:Se.docs)==null?void 0:_e.source}}};var Le,Ie,Re;T.parameters={...T.parameters,docs:{...(Le=T.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Re=(Ie=T.parameters)==null?void 0:Ie.docs)==null?void 0:Re.source}}};const Xe=["Default","InlineSmall","WithLabel","OnDarkSurface","FastMotion","Static","Fullscreen"];export{x as Default,I as FastMotion,T as Fullscreen,S as InlineSmall,L as OnDarkSurface,R as Static,_ as WithLabel,Xe as __namedExportsOrder,Ue as default};
