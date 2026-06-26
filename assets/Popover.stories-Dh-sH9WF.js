import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as pe}from"./Icon-CHMb96qT.js";import{B as w}from"./Button-DvYF7HI1.js";import{I as me}from"./IconButton-DBkrmQ7n.js";import{r as p}from"./iframe-DU-HkXDM.js";import{c as m}from"./cn-2dOUpm6k.js";import"./IconBase.es-dfYi9-aW.js";import"./CaretRight.es-mmraASgB.js";import"./CaretDown.es-C9rHCYNs.js";import"./Minus.es-BrkTo7fO.js";import"./Warning.es-CEp7k_Af.js";import"./File.es-shImriO1.js";import"./Trash.es-DNrp-RrF.js";import"./preload-helper-Uod2V3eo.js";const de="_panel_194fo_1",ue="_inverse_194fo_18",fe="_surface_194fo_24",ve="_surfaceNoCaret_194fo_30",ge="_surfaceTop_194fo_34",he="_surfaceBottom_194fo_35",_e="_surfaceLeft_194fo_39",be="_surfaceRight_194fo_40",xe="_caret_194fo_44",ye="_caretTop_194fo_52",Ne="_caretBottom_194fo_56",je="_caretLeft_194fo_60",Re="_caretRight_194fo_64",we="_caretDefault_194fo_68",Te="_caretInverse_194fo_84",Ce="_caretAlignStart_194fo_100",Be="_caretAlignCenter_194fo_105",Pe="_caretAlignEnd_194fo_109",Se="_root_194fo_130",Ie="_trigger_194fo_135",Le="_popup_194fo_139",Ee="_placementTop_194fo_145",Ae="_placementBottom_194fo_149",ke="_placementLeft_194fo_153",De="_placementRight_194fo_157",qe="_alignCenter_194fo_161",Ve="_alignStart_194fo_167",ze="_alignEnd_194fo_172",t={panel:de,default:"_default_194fo_12",inverse:ue,surface:fe,surfaceNoCaret:ve,surfaceTop:ge,surfaceBottom:he,surfaceLeft:_e,surfaceRight:be,caret:xe,caretTop:ye,caretBottom:Ne,caretLeft:je,caretRight:Re,caretDefault:we,caretInverse:Te,caretAlignStart:Ce,caretAlignCenter:Be,caretAlignEnd:Pe,root:Se,trigger:Ie,popup:Le,placementTop:Ee,placementBottom:Ae,placementLeft:ke,placementRight:De,alignCenter:qe,alignStart:Ve,alignEnd:ze},Fe={top:t.surfaceTop,bottom:t.surfaceBottom,left:t.surfaceLeft,right:t.surfaceRight},He={top:t.caretTop,bottom:t.caretBottom,left:t.caretLeft,right:t.caretRight},Ge={start:t.caretAlignStart,center:t.caretAlignCenter,end:t.caretAlignEnd},Me={top:!1,bottom:!0,left:!1,right:!0};function c({children:s,placement:l="top",align:d="center",caret:i=!0,appearance:u="default",className:j}){const r=e.jsx("span",{className:m(t.panel,t[u]),children:s}),f=i?e.jsx("span",{className:m(t.caret,He[l],Ge[d],u==="inverse"?t.caretInverse:t.caretDefault),"aria-hidden":!0}):null;return e.jsx("span",{className:m(t.surface,Fe[l],!i&&t.surfaceNoCaret,j),children:Me[l]?e.jsxs(e.Fragment,{children:[f,r]}):e.jsxs(e.Fragment,{children:[r,f]})})}function T({children:s,content:l,placement:d="top",align:i="center",caret:u=!0,appearance:j="default",openOn:r="click",defaultOpen:f=!1,open:C,onOpenChange:R,className:ee}){const[te,ae]=p.useState(f),o=C??te,B=p.useRef(null),P=p.useId(),v=n=>{C===void 0&&ae(n),R==null||R(n)};p.useEffect(()=>{if(!o||r!=="click")return;const n=ie=>{var L;(L=B.current)!=null&&L.contains(ie.target)||v(!1)};return document.addEventListener("pointerdown",n),()=>document.removeEventListener("pointerdown",n)},[o,r]);const S=()=>v(!0),I=()=>v(!1),re=()=>v(!o),ne=n=>{n.currentTarget.contains(n.relatedTarget)||I()},se={top:t.placementTop,bottom:t.placementBottom,left:t.placementLeft,right:t.placementRight}[d],oe={start:t.alignStart,center:t.alignCenter,end:t.alignEnd}[i],ce=r==="click"?{onClick:re,"aria-expanded":o,"aria-controls":o?P:void 0}:{},le=p.cloneElement(s,ce);return e.jsxs("span",{ref:B,className:m(t.root,ee),onMouseEnter:r==="hover"?S:void 0,onMouseLeave:r==="hover"?I:void 0,onFocus:r==="hover"?S:void 0,onBlur:r==="hover"?ne:void 0,children:[e.jsx("span",{className:t.trigger,children:le}),o?e.jsx("span",{id:P,role:"dialog",className:m(t.popup,se,oe),children:e.jsx(c,{placement:d,align:i,caret:u,appearance:j,children:l})}):null]})}c.__docgenInfo={description:"",methods:[],displayName:"PopoverBubble",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:"",defaultValue:{value:"'center'",computed:!1}},caret:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},appearance:{required:!1,tsType:{name:"union",raw:"'default' | 'inverse'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'inverse'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};T.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""},content:{required:!0,tsType:{name:"ReactNode"},description:""},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:"",defaultValue:{value:"'center'",computed:!1}},caret:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},appearance:{required:!1,tsType:{name:"union",raw:"'default' | 'inverse'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'inverse'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},openOn:{required:!1,tsType:{name:"union",raw:"'click' | 'hover'",elements:[{name:"literal",value:"'click'"},{name:"literal",value:"'hover'"}]},description:"",defaultValue:{value:"'click'",computed:!1}},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Ye="_metricList_784e4_1",Oe="_metricRow_784e4_8",Ue="_richContent_784e4_22",$e="_title_784e4_29",Je="_body_784e4_36",Ke="_actions_784e4_47",Qe="_placementGrid_784e4_52",We="_placementLabel_784e4_60",a={metricList:Ye,metricRow:Oe,richContent:Ue,title:$e,body:Je,actions:Ke,placementGrid:Qe,placementLabel:We},dt={title:"Components/Popover",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Carbon-style popover shell: 16px padding, 352px max width, 4px offset, optional 8px caret. Pass any ReactNode as content — text, rows, links, or controls."}}}},g={args:{children:"Short helper copy that can wrap when needed.",appearance:"default",caret:!0,placement:"top"}},h={name:"Inverse · metric rows",args:{children:null,appearance:"inverse",caret:!0,placement:"top"},render:()=>e.jsx(c,{appearance:"inverse",placement:"top",caret:!0,children:e.jsxs("div",{className:a.metricList,children:[e.jsxs("div",{className:a.metricRow,children:[e.jsx("span",{children:"Deterministic score (DET)"}),e.jsx("strong",{children:"0.47/1"})]}),e.jsxs("div",{className:a.metricRow,children:[e.jsx("span",{children:"AI Read (AI)"}),e.jsx("strong",{children:"0.86/1"})]}),e.jsxs("div",{className:a.metricRow,children:[e.jsx("span",{children:"Strategic Relevance (SR)"}),e.jsx("strong",{children:"5/5"})]})]})})},_={name:"Default · mixed content",args:{children:null,appearance:"default",caret:!0,placement:"bottom"},render:()=>e.jsx(c,{appearance:"default",placement:"bottom",caret:!0,children:e.jsxs("div",{className:a.richContent,children:[e.jsx("p",{className:a.title,children:"Export options"}),e.jsx("p",{className:a.body,children:"Choose a format for this view. You can change defaults in settings."}),e.jsxs("div",{className:a.actions,children:[e.jsx(w,{size:"sm",variant:"secondary",children:"CSV"}),e.jsx(w,{size:"sm",variant:"primary",children:"PDF"})]})]})})},b={args:{children:"Popover without a caret tip — flush to the trigger edge.",appearance:"default",caret:!1,placement:"bottom"}},x={args:{children:"Popover content",appearance:"inverse",caret:!0,placement:"top"},render:()=>e.jsx("div",{className:a.placementGrid,children:["top","bottom","left","right"].map(s=>e.jsx(c,{appearance:"inverse",placement:s,caret:!0,children:e.jsx("span",{className:a.placementLabel,children:s})},s))})},y={name:"Popover · click",args:{children:null,appearance:"inverse",caret:!0,placement:"top"},render:()=>e.jsx(T,{openOn:"click",appearance:"inverse",placement:"top",content:e.jsxs("div",{className:a.metricList,children:[e.jsxs("div",{className:a.metricRow,children:[e.jsx("span",{children:"Deterministic score (DET)"}),e.jsx("strong",{children:"0.47/1"})]}),e.jsxs("div",{className:a.metricRow,children:[e.jsx("span",{children:"AI Read (AI)"}),e.jsx("strong",{children:"0.86/1"})]})]}),children:e.jsx(me,{label:"Score details",variant:"ghost",size:"sm",children:e.jsx(pe,{name:"info",size:16})})})},N={name:"Popover · hover",args:{children:null,appearance:"default",caret:!0,placement:"bottom"},render:()=>e.jsx(T,{openOn:"hover",appearance:"default",placement:"bottom",content:e.jsx("p",{className:a.body,children:"Hover to open. Content can include links and buttons."}),children:e.jsx(w,{variant:"tertiary",size:"sm",children:"Hover me"})})};var E,A,k;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: 'Short helper copy that can wrap when needed.',
    appearance: 'default',
    caret: true,
    placement: 'top'
  }
}`,...(k=(A=g.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var D,q,V;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Inverse · metric rows',
  args: {
    children: null,
    appearance: 'inverse',
    caret: true,
    placement: 'top'
  },
  render: () => <PopoverBubble appearance="inverse" placement="top" caret>
      <div className={styles.metricList}>
        <div className={styles.metricRow}>
          <span>Deterministic score (DET)</span>
          <strong>0.47/1</strong>
        </div>
        <div className={styles.metricRow}>
          <span>AI Read (AI)</span>
          <strong>0.86/1</strong>
        </div>
        <div className={styles.metricRow}>
          <span>Strategic Relevance (SR)</span>
          <strong>5/5</strong>
        </div>
      </div>
    </PopoverBubble>
}`,...(V=(q=h.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var z,F,H;_.parameters={..._.parameters,docs:{...(z=_.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Default · mixed content',
  args: {
    children: null,
    appearance: 'default',
    caret: true,
    placement: 'bottom'
  },
  render: () => <PopoverBubble appearance="default" placement="bottom" caret>
      <div className={styles.richContent}>
        <p className={styles.title}>Export options</p>
        <p className={styles.body}>Choose a format for this view. You can change defaults in settings.</p>
        <div className={styles.actions}>
          <Button size="sm" variant="secondary">
            CSV
          </Button>
          <Button size="sm" variant="primary">
            PDF
          </Button>
        </div>
      </div>
    </PopoverBubble>
}`,...(H=(F=_.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var G,M,Y;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: 'Popover without a caret tip — flush to the trigger edge.',
    appearance: 'default',
    caret: false,
    placement: 'bottom'
  }
}`,...(Y=(M=b.parameters)==null?void 0:M.docs)==null?void 0:Y.source}}};var O,U,$;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: 'Popover content',
    appearance: 'inverse',
    caret: true,
    placement: 'top'
  },
  render: () => <div className={styles.placementGrid}>
      {(['top', 'bottom', 'left', 'right'] as const).map(placement => <PopoverBubble key={placement} appearance="inverse" placement={placement} caret>
          <span className={styles.placementLabel}>{placement}</span>
        </PopoverBubble>)}
    </div>
}`,...($=(U=x.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var J,K,Q;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Popover · click',
  args: {
    children: null,
    appearance: 'inverse',
    caret: true,
    placement: 'top'
  },
  render: () => <Popover openOn="click" appearance="inverse" placement="top" content={<div className={styles.metricList}>
          <div className={styles.metricRow}>
            <span>Deterministic score (DET)</span>
            <strong>0.47/1</strong>
          </div>
          <div className={styles.metricRow}>
            <span>AI Read (AI)</span>
            <strong>0.86/1</strong>
          </div>
        </div>}>
      <IconButton label="Score details" variant="ghost" size="sm">
        <Icon name="info" size={16} />
      </IconButton>
    </Popover>
}`,...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var W,X,Z;N.parameters={...N.parameters,docs:{...(W=N.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Popover · hover',
  args: {
    children: null,
    appearance: 'default',
    caret: true,
    placement: 'bottom'
  },
  render: () => <Popover openOn="hover" appearance="default" placement="bottom" content={<p className={styles.body}>Hover to open. Content can include links and buttons.</p>}>
      <Button variant="tertiary" size="sm">
        Hover me
      </Button>
    </Popover>
}`,...(Z=(X=N.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const ut=["DefaultShell","InverseMetricBreakdown","RichContent","NoCaret","AllPlacements","ClickTrigger","HoverTrigger"];export{x as AllPlacements,y as ClickTrigger,g as DefaultShell,N as HoverTrigger,h as InverseMetricBreakdown,b as NoCaret,_ as RichContent,ut as __namedExportsOrder,dt as default};
