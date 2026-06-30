import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-Dj2fNUKW.js";import{c as We,s as $e,a as Ae}from"./CaretRight.es-VMw27wF1.js";import{c as w}from"./cn-2dOUpm6k.js";import"./preload-helper-Uod2V3eo.js";import"./IconBase.es-BN1nhKFu.js";const Ke="_field_3py3x_1",Re="_sm_3py3x_9",Ue="_label_3py3x_13",Ge="_wrapper_3py3x_22",Je="_trigger_3py3x_26",Qe="_value_3py3x_52",Xe="_placeholder_3py3x_60",Ze="_icon_3py3x_64",ea="_error_3py3x_72",aa="_focus_3py3x_77",ta="_open_3py3x_78",ra="_disabled_3py3x_112",sa="_helper_3py3x_118",la="_calendar_3py3x_122",oa="_header_3py3x_140",na="_monthLabel_3py3x_148",da="_navButton_3py3x_157",ia="_weekdays_3py3x_180",ca="_weekday_3py3x_180",pa="_days_3py3x_199",ua="_week_3py3x_180",ma="_day_3py3x_199",ya="_selected_3py3x_232",fa="_outside_3py3x_236",ha="_today_3py3x_245",ga="_helperError_3py3x_277",t={field:Ke,sm:Re,label:Ue,wrapper:Ge,trigger:Je,value:Qe,placeholder:Xe,icon:Ze,error:ea,focus:aa,open:ta,disabled:ra,helper:sa,calendar:la,header:oa,monthLabel:na,navButton:da,weekdays:ia,weekday:ca,days:pa,week:ua,day:ma,selected:ya,outside:fa,today:ha,helperError:ga},xa=["Su","Mo","Tu","We","Th","Fr","Sa"];function J(r){if(!r)return null;const s=/^(\d{2})\/(\d{2})\/(\d{4})$/.exec(r);if(!s)return null;const d=Number(s[1]),c=Number(s[2]),u=Number(s[3]),l=new Date(u,d-1,c);return l.getFullYear()!==u||l.getMonth()!==d-1||l.getDate()!==c?null:l}function I(r){const s=String(r.getMonth()+1).padStart(2,"0"),d=String(r.getDate()).padStart(2,"0"),c=String(r.getFullYear());return`${s}/${d}/${c}`}function Q(r,s){return r.getFullYear()===s.getFullYear()&&r.getMonth()===s.getMonth()&&r.getDate()===s.getDate()}function va(r,s){const d=new Date(r,s,1),c=new Date(d);c.setDate(d.getDate()-d.getDay());const u=[],l=new Date(c);for(let h=0;h<6;h+=1){const m=[];for(let S=0;S<7;S+=1)m.push({date:new Date(l),outside:l.getMonth()!==s}),l.setDate(l.getDate()+1);u.push(m)}return u}function X(r){return new Intl.DateTimeFormat("en-US",{month:"long",year:"numeric"}).format(r)}function i({label:r,helperText:s,showLabel:d=!0,showHelperText:c=!1,placeholder:u="mm/dd/yyyy",value:l,defaultValue:h,onValueChange:m,size:S="md",state:g="default",disabled:ze,className:Fe,id:Be}){const[x,M]=n.useState(g==="open"),[Le,Me]=n.useState(h),[v,C]=n.useState(()=>{const a=J(l??h)??new Date;return new Date(a.getFullYear(),a.getMonth(),1)}),O=n.useRef(null),Ce=n.useId(),b=Be??Ce,P=`${b}-calendar`,Y=d&&r,W=c&&s,$=Y?`${b}-label`:void 0,A=W?`${b}-helper`:void 0,q=l!==void 0,p=J(q?l:Le),_=ze||g==="disabled",K=g==="error",qe=n.useMemo(()=>new Date,[]),R=n.useCallback(a=>{q||Me(a),m==null||m(a)},[q,m]),f=n.useCallback(()=>{M(!1)},[]),Ie=n.useCallback(a=>{R(I(a)),C(new Date(a.getFullYear(),a.getMonth(),1)),f()},[f,R]);n.useEffect(()=>{p&&C(new Date(p.getFullYear(),p.getMonth(),1))},[p]),n.useEffect(()=>{if(!x)return;const a=y=>{var D;(D=O.current)!=null&&D.contains(y.target)||f()},o=y=>{y.key==="Escape"&&f()};return document.addEventListener("mousedown",a),document.addEventListener("keydown",o),()=>{document.removeEventListener("mousedown",a),document.removeEventListener("keydown",o)}},[f,x]);const Oe=n.useMemo(()=>va(v.getFullYear(),v.getMonth()),[v]),U=a=>{C(o=>new Date(o.getFullYear(),o.getMonth()+a,1))},Pe=a=>{_||((a.key==="Enter"||a.key===" "||a.key==="ArrowDown")&&(a.preventDefault(),M(!0)),a.key==="Escape"&&f())},G=p?I(p):void 0;return e.jsxs("div",{className:w(t.field,_&&t.disabled,S==="sm"&&t.sm,Fe),children:[Y?e.jsx("label",{id:$,className:t.label,htmlFor:b,children:r}):null,e.jsxs("div",{ref:O,className:t.wrapper,children:[e.jsxs("button",{id:b,type:"button",className:w(t.trigger,x&&t.open,(g==="focus"||g==="open")&&t.focus,K&&t.error),disabled:_,"aria-haspopup":"dialog","aria-expanded":x,"aria-controls":P,"aria-labelledby":$,"aria-describedby":A,onClick:()=>{_||M(a=>!a)},onKeyDown:Pe,children:[e.jsx("span",{className:w(t.value,!G&&t.placeholder),children:G??u}),e.jsx("span",{className:t.icon,"aria-hidden":!0,children:e.jsx(We,{size:16,weight:"regular"})})]}),x&&!_?e.jsxs("div",{id:P,role:"dialog","aria-label":X(v),className:t.calendar,children:[e.jsxs("div",{className:t.header,children:[e.jsx("button",{type:"button",className:t.navButton,"aria-label":"Previous month",onClick:()=>U(-1),children:e.jsx($e,{size:16,weight:"bold"})}),e.jsx("span",{className:t.monthLabel,children:X(v)}),e.jsx("button",{type:"button",className:t.navButton,"aria-label":"Next month",onClick:()=>U(1),children:e.jsx(Ae,{size:16,weight:"bold"})})]}),e.jsx("div",{className:t.weekdays,children:xa.map(a=>e.jsx("span",{className:t.weekday,children:a},a))}),e.jsx("div",{className:t.days,children:Oe.map(a=>e.jsx("div",{className:t.week,children:a.map(({date:o,outside:y})=>{const D=p?Q(o,p):!1,Ye=Q(o,qe);return e.jsx("button",{type:"button",className:w(t.day,y&&t.outside,Ye&&t.today,D&&t.selected),disabled:y,"aria-label":I(o),"aria-pressed":D,onClick:()=>{y||Ie(o)},children:o.getDate()},o.toISOString())})},a[0].date.toISOString()))})]}):null]}),W?e.jsx("span",{id:A,className:w(t.helper,K&&t.helperError),children:s}):null]})}i.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},showLabel:{required:!1,tsType:{name:"boolean"},description:"Show the label row. Matches Figma `Label` boolean property.",defaultValue:{value:"true",computed:!1}},showHelperText:{required:!1,tsType:{name:"boolean"},description:"Show helper text below the field. Matches Figma `Helper Text` boolean property.",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'mm/dd/yyyy'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'md' | 'sm'",elements:[{name:"literal",value:"'md'"},{name:"literal",value:"'sm'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'focus'
| 'open'
| 'filled'
| 'error'
| 'disabled'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'focus'"},{name:"literal",value:"'open'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'error'"},{name:"literal",value:"'disabled'"}]},description:"Static visual state for docs; interactive focus/open still apply when enabled.",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""}}};const ka={title:"Components/Date Picker",component:i,tags:["autodocs"],parameters:{layout:"padded",docs:{story:{inline:!1,iframeHeight:460}}},args:{label:"Date",placeholder:"mm/dd/yyyy",helperText:"Helper text",showLabel:!0,showHelperText:!1},argTypes:{showLabel:{control:"boolean"},showHelperText:{control:"boolean"}}},j={},T={args:{state:"focus"}},k={args:{defaultValue:"06/10/2026",state:"filled"}},E={args:{defaultValue:"06/10/2026",state:"open"},parameters:{docs:{description:{story:"Click the trigger to open the calendar panel."}}}},V={args:{helperText:"Error message",showHelperText:!0,state:"error"}},H={args:{state:"disabled"}},N={args:{size:"sm",defaultValue:"06/10/2026"}},z={args:{showLabel:!1,defaultValue:"06/10/2026"}},F={args:{showHelperText:!1,defaultValue:"06/10/2026"}},B={name:"Open + Calendar",render:()=>e.jsx("div",{style:{padding:24,maxWidth:288},children:e.jsx(i,{label:"Start date",defaultValue:"06/10/2026",state:"open"})})},L={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 288px)",gap:48,padding:24,alignItems:"start"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Default"}),e.jsx(i,{label:"Date",placeholder:"mm/dd/yyyy",helperText:"Helper text"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Focus"}),e.jsx(i,{label:"Date",placeholder:"mm/dd/yyyy",helperText:"Helper text",state:"focus"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Filled"}),e.jsx(i,{label:"Date",defaultValue:"06/10/2026",helperText:"Helper text"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Open"}),e.jsx(i,{label:"Date",defaultValue:"06/10/2026",state:"open"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Error"}),e.jsx(i,{label:"Date",placeholder:"mm/dd/yyyy",helperText:"Error message",showHelperText:!0,state:"error"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Disabled"}),e.jsx(i,{label:"Date",placeholder:"mm/dd/yyyy",helperText:"Helper text",state:"disabled"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Small"}),e.jsx(i,{label:"Date",defaultValue:"06/10/2026",size:"sm"})]})]})};var Z,ee,ae;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:"{}",...(ae=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,re,se;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ce=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var pe,ue,me;V.parameters={...V.parameters,docs:{...(pe=V.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    helperText: 'Error message',
    showHelperText: true,
    state: 'error'
  }
}`,...(me=(ue=V.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ye,fe,he;H.parameters={...H.parameters,docs:{...(ye=H.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...(he=(fe=H.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var ge,xe,ve;N.parameters={...N.parameters,docs:{...(ge=N.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    defaultValue: '06/10/2026'
  }
}`,...(ve=(xe=N.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var be,_e,De;z.parameters={...z.parameters,docs:{...(be=z.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    showLabel: false,
    defaultValue: '06/10/2026'
  }
}`,...(De=(_e=z.parameters)==null?void 0:_e.docs)==null?void 0:De.source}}};var we,Se,je;F.parameters={...F.parameters,docs:{...(we=F.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    showHelperText: false,
    defaultValue: '06/10/2026'
  }
}`,...(je=(Se=F.parameters)==null?void 0:Se.docs)==null?void 0:je.source}}};var Te,ke,Ee;B.parameters={...B.parameters,docs:{...(Te=B.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ne=(He=L.parameters)==null?void 0:He.docs)==null?void 0:Ne.source}}};const Ea=["Default","Focus","Filled","Open","Error","Disabled","Small","WithoutLabel","WithoutHelper","ComposedExample","AllStates"];export{L as AllStates,B as ComposedExample,j as Default,H as Disabled,V as Error,k as Filled,T as Focus,E as Open,N as Small,F as WithoutHelper,z as WithoutLabel,Ea as __namedExportsOrder,ka as default};
