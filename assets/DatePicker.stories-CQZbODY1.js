import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-CHWteash.js";import{c as We,s as $e,a as Ae}from"./CaretRight.es-C8TVPgpN.js";import{c as j}from"./cn-2dOUpm6k.js";import"./preload-helper-Uod2V3eo.js";import"./IconBase.es-DMwgXKuZ.js";const Ke="_field_egwrj_1",Re="_sm_egwrj_9",Ue="_label_egwrj_13",Ge="_wrapper_egwrj_22",Je="_trigger_egwrj_26",Qe="_value_egwrj_54",Xe="_placeholder_egwrj_62",Ze="_icon_egwrj_66",ea="_error_egwrj_74",aa="_focus_egwrj_79",ta="_open_egwrj_80",ra="_disabled_egwrj_114",sa="_helper_egwrj_120",la="_calendar_egwrj_124",oa="_header_egwrj_142",na="_monthLabel_egwrj_150",da="_navButton_egwrj_159",ia="_weekdays_egwrj_182",ca="_weekday_egwrj_182",ua="_days_egwrj_201",pa="_week_egwrj_182",ma="_day_egwrj_201",ga="_selected_egwrj_234",fa="_outside_egwrj_238",ha="_today_egwrj_247",ya="_helperError_egwrj_279",t={field:Ke,sm:Re,label:Ue,wrapper:Ge,trigger:Je,value:Qe,placeholder:Xe,icon:Ze,error:ea,focus:aa,open:ta,disabled:ra,helper:sa,calendar:la,header:oa,monthLabel:na,navButton:da,weekdays:ia,weekday:ca,days:ua,week:pa,day:ma,selected:ga,outside:fa,today:ha,helperError:ya},va=["Su","Mo","Tu","We","Th","Fr","Sa"];function J(r){if(!r)return null;const s=/^(\d{2})\/(\d{2})\/(\d{4})$/.exec(r);if(!s)return null;const d=Number(s[1]),c=Number(s[2]),p=Number(s[3]),l=new Date(p,d-1,c);return l.getFullYear()!==p||l.getMonth()!==d-1||l.getDate()!==c?null:l}function I(r){const s=String(r.getMonth()+1).padStart(2,"0"),d=String(r.getDate()).padStart(2,"0"),c=String(r.getFullYear());return`${s}/${d}/${c}`}function Q(r,s){return r.getFullYear()===s.getFullYear()&&r.getMonth()===s.getMonth()&&r.getDate()===s.getDate()}function wa(r,s){const d=new Date(r,s,1),c=new Date(d);c.setDate(d.getDate()-d.getDay());const p=[],l=new Date(c);for(let h=0;h<6;h+=1){const m=[];for(let D=0;D<7;D+=1)m.push({date:new Date(l),outside:l.getMonth()!==s}),l.setDate(l.getDate()+1);p.push(m)}return p}function X(r){return new Intl.DateTimeFormat("en-US",{month:"long",year:"numeric"}).format(r)}function i({label:r,helperText:s,showLabel:d=!0,showHelperText:c=!1,placeholder:p="mm/dd/yyyy",value:l,defaultValue:h,onValueChange:m,size:D="md",state:y="default",disabled:ze,className:Fe,id:Be}){const[v,M]=n.useState(y==="open"),[Le,Me]=n.useState(h),[w,C]=n.useState(()=>{const a=J(l??h)??new Date;return new Date(a.getFullYear(),a.getMonth(),1)}),O=n.useRef(null),Ce=n.useId(),b=Be??Ce,P=`${b}-calendar`,Y=d&&r,W=c&&s,$=Y?`${b}-label`:void 0,A=W?`${b}-helper`:void 0,q=l!==void 0,u=J(q?l:Le),x=ze||y==="disabled",K=y==="error",qe=n.useMemo(()=>new Date,[]),R=n.useCallback(a=>{q||Me(a),m==null||m(a)},[q,m]),f=n.useCallback(()=>{M(!1)},[]),Ie=n.useCallback(a=>{R(I(a)),C(new Date(a.getFullYear(),a.getMonth(),1)),f()},[f,R]);n.useEffect(()=>{u&&C(new Date(u.getFullYear(),u.getMonth(),1))},[u]),n.useEffect(()=>{if(!v)return;const a=g=>{var _;(_=O.current)!=null&&_.contains(g.target)||f()},o=g=>{g.key==="Escape"&&f()};return document.addEventListener("mousedown",a),document.addEventListener("keydown",o),()=>{document.removeEventListener("mousedown",a),document.removeEventListener("keydown",o)}},[f,v]);const Oe=n.useMemo(()=>wa(w.getFullYear(),w.getMonth()),[w]),U=a=>{C(o=>new Date(o.getFullYear(),o.getMonth()+a,1))},Pe=a=>{x||((a.key==="Enter"||a.key===" "||a.key==="ArrowDown")&&(a.preventDefault(),M(!0)),a.key==="Escape"&&f())},G=u?I(u):void 0;return e.jsxs("div",{className:j(t.field,x&&t.disabled,D==="sm"&&t.sm,Fe),children:[Y?e.jsx("label",{id:$,className:t.label,htmlFor:b,children:r}):null,e.jsxs("div",{ref:O,className:t.wrapper,children:[e.jsxs("button",{id:b,type:"button",className:j(t.trigger,v&&t.open,(y==="focus"||y==="open")&&t.focus,K&&t.error),disabled:x,"aria-haspopup":"dialog","aria-expanded":v,"aria-controls":P,"aria-labelledby":$,"aria-describedby":A,onClick:()=>{x||M(a=>!a)},onKeyDown:Pe,children:[e.jsx("span",{className:j(t.value,!G&&t.placeholder),children:G??p}),e.jsx("span",{className:t.icon,"aria-hidden":!0,children:e.jsx(We,{size:16,weight:"regular"})})]}),v&&!x?e.jsxs("div",{id:P,role:"dialog","aria-label":X(w),className:t.calendar,children:[e.jsxs("div",{className:t.header,children:[e.jsx("button",{type:"button",className:t.navButton,"aria-label":"Previous month",onClick:()=>U(-1),children:e.jsx($e,{size:16,weight:"bold"})}),e.jsx("span",{className:t.monthLabel,children:X(w)}),e.jsx("button",{type:"button",className:t.navButton,"aria-label":"Next month",onClick:()=>U(1),children:e.jsx(Ae,{size:16,weight:"bold"})})]}),e.jsx("div",{className:t.weekdays,children:va.map(a=>e.jsx("span",{className:t.weekday,children:a},a))}),e.jsx("div",{className:t.days,children:Oe.map(a=>e.jsx("div",{className:t.week,children:a.map(({date:o,outside:g})=>{const _=u?Q(o,u):!1,Ye=Q(o,qe);return e.jsx("button",{type:"button",className:j(t.day,g&&t.outside,Ye&&t.today,_&&t.selected),disabled:g,"aria-label":I(o),"aria-pressed":_,onClick:()=>{g||Ie(o)},children:o.getDate()},o.toISOString())})},a[0].date.toISOString()))})]}):null]}),W?e.jsx("span",{id:A,className:j(t.helper,K&&t.helperError),children:s}):null]})}i.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},showLabel:{required:!1,tsType:{name:"boolean"},description:"Show the label row. Matches Figma `Label` boolean property.",defaultValue:{value:"true",computed:!1}},showHelperText:{required:!1,tsType:{name:"boolean"},description:"Show helper text below the field. Matches Figma `Helper Text` boolean property.",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'mm/dd/yyyy'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'md' | 'sm'",elements:[{name:"literal",value:"'md'"},{name:"literal",value:"'sm'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'focus'
| 'open'
| 'filled'
| 'error'
| 'disabled'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'focus'"},{name:"literal",value:"'open'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'error'"},{name:"literal",value:"'disabled'"}]},description:"Static visual state for docs; interactive focus/open still apply when enabled.",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""}}};const ka={title:"Components/Date Picker",component:i,tags:["autodocs"],parameters:{layout:"padded",docs:{story:{inline:!1,iframeHeight:460}}},args:{label:"Date",placeholder:"mm/dd/yyyy",helperText:"Helper text",showLabel:!0,showHelperText:!1},argTypes:{showLabel:{control:"boolean"},showHelperText:{control:"boolean"}}},S={},T={args:{state:"focus"}},k={args:{defaultValue:"06/10/2026",state:"filled"}},E={args:{defaultValue:"06/10/2026",state:"open"},parameters:{docs:{description:{story:"Click the trigger to open the calendar panel."}}}},V={args:{helperText:"Error message",showHelperText:!0,state:"error"}},H={args:{state:"disabled"}},N={args:{size:"sm",defaultValue:"06/10/2026"}},z={args:{showLabel:!1,defaultValue:"06/10/2026"}},F={args:{showHelperText:!1,defaultValue:"06/10/2026"}},B={name:"Open + Calendar",render:()=>e.jsx("div",{style:{padding:24,maxWidth:288},children:e.jsx(i,{label:"Start date",defaultValue:"06/10/2026",state:"open"})})},L={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 288px)",gap:48,padding:24,alignItems:"start"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Default"}),e.jsx(i,{label:"Date",placeholder:"mm/dd/yyyy",helperText:"Helper text"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Focus"}),e.jsx(i,{label:"Date",placeholder:"mm/dd/yyyy",helperText:"Helper text",state:"focus"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Filled"}),e.jsx(i,{label:"Date",defaultValue:"06/10/2026",helperText:"Helper text"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Open"}),e.jsx(i,{label:"Date",defaultValue:"06/10/2026",state:"open"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Error"}),e.jsx(i,{label:"Date",placeholder:"mm/dd/yyyy",helperText:"Error message",showHelperText:!0,state:"error"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Disabled"}),e.jsx(i,{label:"Date",placeholder:"mm/dd/yyyy",helperText:"Helper text",state:"disabled"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Small"}),e.jsx(i,{label:"Date",defaultValue:"06/10/2026",size:"sm"})]})]})};var Z,ee,ae;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:"{}",...(ae=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,re,se;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    state: 'focus'
  }
}`,...(se=(re=T.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var le,oe,ne;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    defaultValue: '06/10/2026',
    state: 'filled'
  }
}`,...(ne=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var de,ie,ce;E.parameters={...E.parameters,docs:{...(de=E.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    defaultValue: '06/10/2026',
    state: 'open'
  },
  parameters: {
    docs: {
      description: {
        story: 'Click the trigger to open the calendar panel.'
      }
    }
  }
}`,...(ce=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ue,pe,me;V.parameters={...V.parameters,docs:{...(ue=V.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    helperText: 'Error message',
    showHelperText: true,
    state: 'error'
  }
}`,...(me=(pe=V.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ge,fe,he;H.parameters={...H.parameters,docs:{...(ge=H.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...(he=(fe=H.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var ye,ve,we;N.parameters={...N.parameters,docs:{...(ye=N.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    defaultValue: '06/10/2026'
  }
}`,...(we=(ve=N.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var be,xe,_e;z.parameters={...z.parameters,docs:{...(be=z.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    showLabel: false,
    defaultValue: '06/10/2026'
  }
}`,...(_e=(xe=z.parameters)==null?void 0:xe.docs)==null?void 0:_e.source}}};var je,De,Se;F.parameters={...F.parameters,docs:{...(je=F.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    showHelperText: false,
    defaultValue: '06/10/2026'
  }
}`,...(Se=(De=F.parameters)==null?void 0:De.docs)==null?void 0:Se.source}}};var Te,ke,Ee;B.parameters={...B.parameters,docs:{...(Te=B.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: 'Open + Calendar',
  render: () => <div style={{
    padding: 24,
    maxWidth: 288
  }}>
      <DatePicker label="Start date" defaultValue="06/10/2026" state="open" />
    </div>
}`,...(Ee=(ke=B.parameters)==null?void 0:ke.docs)==null?void 0:Ee.source}}};var Ve,He,Ne;L.parameters={...L.parameters,docs:{...(Ve=L.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 288px)',
    gap: 48,
    padding: 24,
    alignItems: 'start'
  }}>
      <div>
        <div style={{
        fontSize: 12,
        color: '#5a575d',
        marginBottom: 16
      }}>Default</div>
        <DatePicker label="Date" placeholder="mm/dd/yyyy" helperText="Helper text" />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#5a575d',
        marginBottom: 16
      }}>Focus</div>
        <DatePicker label="Date" placeholder="mm/dd/yyyy" helperText="Helper text" state="focus" />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#5a575d',
        marginBottom: 16
      }}>Filled</div>
        <DatePicker label="Date" defaultValue="06/10/2026" helperText="Helper text" />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#5a575d',
        marginBottom: 16
      }}>Open</div>
        <DatePicker label="Date" defaultValue="06/10/2026" state="open" />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#5a575d',
        marginBottom: 16
      }}>Error</div>
        <DatePicker label="Date" placeholder="mm/dd/yyyy" helperText="Error message" showHelperText state="error" />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#5a575d',
        marginBottom: 16
      }}>Disabled</div>
        <DatePicker label="Date" placeholder="mm/dd/yyyy" helperText="Helper text" state="disabled" />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#5a575d',
        marginBottom: 16
      }}>Small</div>
        <DatePicker label="Date" defaultValue="06/10/2026" size="sm" />
      </div>
    </div>
}`,...(Ne=(He=L.parameters)==null?void 0:He.docs)==null?void 0:Ne.source}}};const Ea=["Default","Focus","Filled","Open","Error","Disabled","Small","WithoutLabel","WithoutHelper","ComposedExample","AllStates"];export{L as AllStates,B as ComposedExample,S as Default,H as Disabled,V as Error,k as Filled,T as Focus,E as Open,N as Small,F as WithoutHelper,z as WithoutLabel,Ea as __namedExportsOrder,ka as default};
