import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-Di2CNPDO.js";import{s as Xe}from"./CaretDown.es-BXFKHHTX.js";import{s as Ye,I as Ze}from"./Icon-BAmYyazB.js";import{c as y}from"./cn-2dOUpm6k.js";import"./preload-helper-Uod2V3eo.js";import"./IconBase.es-DD4heMZa.js";import"./CaretRight.es-Ca-hnMOj.js";import"./Minus.es-Ck-1Z9uJ.js";import"./Warning.es-ZOgui5mQ.js";import"./File.es-BJhvQiFM.js";import"./Trash.es-D4u-kDlL.js";const er="_field_cdw2g_1",rr="_label_cdw2g_9",tr="_wrapper_cdw2g_18",ar="_trigger_cdw2g_22",sr="_sm_cdw2g_44",or="_value_cdw2g_48",lr="_placeholder_cdw2g_56",nr="_caret_cdw2g_60",ir="_error_cdw2g_68",dr="_focus_cdw2g_73",cr="_open_cdw2g_74",pr="_disabled_cdw2g_108",ur="_helper_cdw2g_114",mr="_list_cdw2g_118",fr="_groupLabel_cdw2g_134",gr="_separator_cdw2g_144",br="_separatorLine_cdw2g_148",hr="_option_cdw2g_153",xr="_selected_cdw2g_172",vr="_optionLabel_cdw2g_186",yr="_check_cdw2g_194",wr="_helperError_cdw2g_223",s={field:er,label:rr,wrapper:tr,trigger:ar,sm:sr,value:or,placeholder:lr,caret:nr,error:ir,focus:dr,open:cr,disabled:pr,helper:ur,list:mr,groupLabel:fr,separator:gr,separatorLine:br,option:hr,selected:xr,optionLabel:vr,check:yr,helperError:wr};function Fe(f){return f.filter(u=>u.kind==="option")}function _r(f,u){var w;if(u)return(w=Fe(f).find(N=>N.id===u))==null?void 0:w.label}function c({label:f,helperText:u,showLabel:w=!0,showHelperText:N=!1,placeholder:Be="Select an option...",options:C,value:W,defaultValue:Ae,onValueChange:_,size:Me="md",state:F="default",disabled:We,className:Ke,id:Ue}){const[n,h]=i.useState(!1),[Re,$e]=i.useState(Ae),[m,d]=i.useState(-1),K=i.useRef(null),U=i.useRef(null),Ge=i.useId(),x=Ue??Ge,R=`${x}-listbox`,$=w&&f,G=N&&u,B=$?`${x}-label`:void 0,P=G?`${x}-helper`:void 0,A=W!==void 0,g=A?W:Re,o=Fe(C),J=_r(C,g),v=We||F==="disabled",Q=F==="error",X=i.useCallback(e=>{A||$e(e),_==null||_(e)},[A,_]),b=i.useCallback(()=>{h(!1),d(-1)},[]),M=i.useCallback(e=>{X(e),b()},[b,X]);i.useEffect(()=>{if(!n)return;const e=a=>{var l;(l=K.current)!=null&&l.contains(a.target)||b()},t=a=>{a.key==="Escape"&&b()};return document.addEventListener("mousedown",e),document.addEventListener("keydown",t),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("keydown",t)}},[b,n]),i.useEffect(()=>{var a;if(!n||m<0)return;const e=o[m];if(!e)return;const t=(a=U.current)==null?void 0:a.querySelector(`[data-option-id="${e.id}"]`);t==null||t.scrollIntoView({block:"nearest"})},[m,n,o]);const Pe=e=>{if(!v){if((e.key==="ArrowDown"||e.key==="ArrowUp"||e.key==="Enter"||e.key===" ")&&e.preventDefault(),e.key==="ArrowDown"){if(!n){h(!0);const t=o.findIndex(a=>a.id===g);d(t>=0?t:0);return}d(t=>{var l;const a=t<0?0:Math.min(t+1,o.length-1);for(;(l=o[a])!=null&&l.disabled&&a<o.length-1;)return a+1;return a});return}if(e.key==="ArrowUp"){if(!n){h(!0);const t=o.findIndex(a=>a.id===g);d(t>=0?t:o.length-1);return}d(t=>{var l;const a=t<0?o.length-1:Math.max(t-1,0);for(;(l=o[a])!=null&&l.disabled&&a>0;)return a-1;return a});return}if(e.key==="Enter"||e.key===" "){if(!n){h(!0);const a=o.findIndex(l=>l.id===g);d(a>=0?a:0);return}const t=o[m];t&&!t.disabled&&M(t.id);return}e.key==="Escape"&&b()}},Je=e=>{if(e.key==="ArrowDown"&&(e.preventDefault(),d(t=>Math.min(t+1,o.length-1))),e.key==="ArrowUp"&&(e.preventDefault(),d(t=>Math.max(t-1,0))),e.key==="Enter"||e.key===" "){e.preventDefault();const t=o[m];t&&!t.disabled&&M(t.id)}};return r.jsxs("div",{className:y(s.field,v&&s.disabled,Me==="sm"&&s.sm,Ke),children:[$?r.jsx("label",{id:B,className:s.label,htmlFor:x,children:f}):null,r.jsxs("div",{ref:K,className:s.wrapper,children:[r.jsxs("button",{id:x,type:"button",className:y(s.trigger,n&&s.open,F==="focus"&&s.focus,Q&&s.error),disabled:v,"aria-haspopup":"listbox","aria-expanded":n,"aria-controls":R,"aria-labelledby":B,"aria-describedby":P,onClick:()=>{if(!v&&(h(e=>!e),!n)){const e=o.findIndex(t=>t.id===g);d(e>=0?e:0)}},onKeyDown:Pe,children:[r.jsx("span",{className:y(s.value,!J&&s.placeholder),children:J??Be}),r.jsx("span",{className:s.caret,"aria-hidden":!0,children:n?r.jsx(Ye,{size:16,weight:"bold"}):r.jsx(Xe,{size:16,weight:"bold"})})]}),n&&!v?r.jsx("ul",{ref:U,id:R,role:"listbox",className:s.list,"aria-labelledby":B,onKeyDown:Je,children:C.map(e=>{var l;if(e.kind==="group")return r.jsx("li",{role:"presentation",className:s.groupLabel,children:e.label},e.id);if(e.kind==="separator")return r.jsx("li",{role:"separator",className:s.separator,children:r.jsx("div",{className:s.separatorLine})},e.id);const t=e.id===g,a=m>=0&&((l=o[m])==null?void 0:l.id)===e.id;return r.jsx("li",{role:"presentation",children:r.jsxs("button",{type:"button",role:"option","data-option-id":e.id,disabled:e.disabled,"aria-selected":t,className:y(s.option,t&&s.selected),onMouseEnter:()=>{const Y=o.findIndex(Qe=>Qe.id===e.id);Y>=0&&d(Y)},onClick:()=>{e.disabled||M(e.id)},tabIndex:a?0:-1,children:[r.jsx("span",{className:s.optionLabel,children:e.label}),r.jsx("span",{className:s.check,"aria-hidden":!0,children:r.jsx(Ze,{name:"check",size:16})})]})},e.id)})}):null]}),G?r.jsx("span",{id:P,className:y(s.helper,Q&&s.helperError),children:u}):null]})}c.__docgenInfo={description:"",methods:[],displayName:"Select",props:{label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},showLabel:{required:!1,tsType:{name:"boolean"},description:"Show the label row. Matches Figma `Label` boolean property.",defaultValue:{value:"true",computed:!1}},showHelperText:{required:!1,tsType:{name:"boolean"},description:"Show helper text below the field. Matches Figma `Helper Text` boolean property.",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select an option...'",computed:!1}},options:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| { kind: 'group'; id: string; label: string }
| { kind: 'separator'; id: string }
| {
    kind: 'option';
    id: string;
    label: string;
    disabled?: boolean;
  }`,elements:[{name:"signature",type:"object",raw:"{ kind: 'group'; id: string; label: string }",signature:{properties:[{key:"kind",value:{name:"literal",value:"'group'",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:"{ kind: 'separator'; id: string }",signature:{properties:[{key:"kind",value:{name:"literal",value:"'separator'",required:!0}},{key:"id",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kind: 'option';
  id: string;
  label: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:"'option'",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"SelectEntry[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'md' | 'sm'",elements:[{name:"literal",value:"'md'"},{name:"literal",value:"'sm'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'focus' | 'error' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'focus'"},{name:"literal",value:"'error'"},{name:"literal",value:"'disabled'"}]},description:"Static visual state for docs; interactive focus/open still apply when enabled.",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""}}};const p=[{kind:"option",id:"us",label:"United States"},{kind:"option",id:"ca",label:"Canada"},{kind:"option",id:"mx",label:"Mexico"},{kind:"option",id:"uk",label:"United Kingdom"},{kind:"option",id:"de",label:"Germany"}],kr=[{kind:"group",id:"fruits",label:"Fruits"},{kind:"option",id:"apple",label:"Apple"},{kind:"option",id:"banana",label:"Banana"},{kind:"option",id:"cherry",label:"Cherry"},{kind:"separator",id:"sep-1"},{kind:"group",id:"vegetables",label:"Vegetables"},{kind:"option",id:"carrot",label:"Carrot"},{kind:"option",id:"pea",label:"Pea",disabled:!0}],Nr={title:"Components/Select",component:c,tags:["autodocs"],args:{label:"Label",placeholder:"Select an option...",helperText:"Helper text",showLabel:!0,showHelperText:!1,options:p},argTypes:{showLabel:{control:"boolean"},showHelperText:{control:"boolean"}}},k={},S={args:{state:"focus"}},L={args:{defaultValue:"us"}},T={args:{defaultValue:"us"},parameters:{docs:{description:{story:"Click the trigger to open the dropdown list."}}}},j={args:{defaultValue:"us",helperText:"Error message",state:"error"}},E={args:{state:"disabled"}},V={args:{size:"sm",defaultValue:"us"}},q={args:{label:"Food",options:kr,defaultValue:"apple",showHelperText:!1}},D={args:{showLabel:!1,defaultValue:"us"}},H={args:{showHelperText:!1,defaultValue:"us"}},I={args:{showLabel:!1,showHelperText:!1,defaultValue:"us"}},z={render:()=>r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 280px)",gap:48,padding:24,alignItems:"start"},children:[r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Default"}),r.jsx(c,{label:"Label",placeholder:"Select an option...",helperText:"Helper text",options:p})]}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Focus"}),r.jsx(c,{label:"Label",placeholder:"Select an option...",helperText:"Helper text",options:p,state:"focus"})]}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Filled"}),r.jsx(c,{label:"Label",helperText:"Helper text",options:p,defaultValue:"us"})]}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Error"}),r.jsx(c,{label:"Label",helperText:"Error message",options:p,defaultValue:"us",state:"error"})]}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Disabled"}),r.jsx(c,{label:"Label",placeholder:"Select an option...",helperText:"Helper text",options:p,state:"disabled"})]}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Small"}),r.jsx(c,{label:"Label",helperText:"Helper text",options:p,defaultValue:"us",size:"sm"})]})]})},O={name:"Select + Dropdown List",render:()=>r.jsx("div",{style:{padding:24,maxWidth:280},children:r.jsx(c,{label:"Country",placeholder:"Select an option...",options:p,defaultValue:"us"})})};var Z,ee,re;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:"{}",...(re=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,ae,se;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    state: 'focus'
  }
}`,...(se=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,le,ne;L.parameters={...L.parameters,docs:{...(oe=L.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    defaultValue: 'us'
  }
}`,...(ne=(le=L.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var ie,de,ce;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    defaultValue: 'us'
  },
  parameters: {
    docs: {
      description: {
        story: 'Click the trigger to open the dropdown list.'
      }
    }
  }
}`,...(ce=(de=T.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,ue,me;j.parameters={...j.parameters,docs:{...(pe=j.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    defaultValue: 'us',
    helperText: 'Error message',
    state: 'error'
  }
}`,...(me=(ue=j.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var fe,ge,be;E.parameters={...E.parameters,docs:{...(fe=E.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...(be=(ge=E.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var he,xe,ve;V.parameters={...V.parameters,docs:{...(he=V.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    defaultValue: 'us'
  }
}`,...(ve=(xe=V.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var ye,we,_e;q.parameters={...q.parameters,docs:{...(ye=q.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    label: 'Food',
    options: groupedOptions,
    defaultValue: 'apple',
    showHelperText: false
  }
}`,...(_e=(we=q.parameters)==null?void 0:we.docs)==null?void 0:_e.source}}};var ke,Se,Le;D.parameters={...D.parameters,docs:{...(ke=D.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    showLabel: false,
    defaultValue: 'us'
  }
}`,...(Le=(Se=D.parameters)==null?void 0:Se.docs)==null?void 0:Le.source}}};var Te,je,Ee;H.parameters={...H.parameters,docs:{...(Te=H.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    showHelperText: false,
    defaultValue: 'us'
  }
}`,...(Ee=(je=H.parameters)==null?void 0:je.docs)==null?void 0:Ee.source}}};var Ve,qe,De;I.parameters={...I.parameters,docs:{...(Ve=I.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    showLabel: false,
    showHelperText: false,
    defaultValue: 'us'
  }
}`,...(De=(qe=I.parameters)==null?void 0:qe.docs)==null?void 0:De.source}}};var He,Ie,ze;z.parameters={...z.parameters,docs:{...(He=z.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 280px)',
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
        <Select label="Label" placeholder="Select an option..." helperText="Helper text" options={countryOptions} />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#5a575d',
        marginBottom: 16
      }}>Focus</div>
        <Select label="Label" placeholder="Select an option..." helperText="Helper text" options={countryOptions} state="focus" />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#5a575d',
        marginBottom: 16
      }}>Filled</div>
        <Select label="Label" helperText="Helper text" options={countryOptions} defaultValue="us" />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#5a575d',
        marginBottom: 16
      }}>Error</div>
        <Select label="Label" helperText="Error message" options={countryOptions} defaultValue="us" state="error" />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#5a575d',
        marginBottom: 16
      }}>Disabled</div>
        <Select label="Label" placeholder="Select an option..." helperText="Helper text" options={countryOptions} state="disabled" />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#5a575d',
        marginBottom: 16
      }}>Small</div>
        <Select label="Label" helperText="Helper text" options={countryOptions} defaultValue="us" size="sm" />
      </div>
    </div>
}`,...(ze=(Ie=z.parameters)==null?void 0:Ie.docs)==null?void 0:ze.source}}};var Oe,Ne,Ce;O.parameters={...O.parameters,docs:{...(Oe=O.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  name: 'Select + Dropdown List',
  render: () => <div style={{
    padding: 24,
    maxWidth: 280
  }}>
      <Select label="Country" placeholder="Select an option..." options={countryOptions} defaultValue="us" />
    </div>
}`,...(Ce=(Ne=O.parameters)==null?void 0:Ne.docs)==null?void 0:Ce.source}}};const Cr=["Default","Focus","Filled","Open","Error","Disabled","Small","WithGroups","WithoutLabel","WithoutHelper","TriggerOnly","AllStates","ComposedExample"];export{z as AllStates,O as ComposedExample,k as Default,E as Disabled,j as Error,L as Filled,S as Focus,T as Open,V as Small,I as TriggerOnly,q as WithGroups,H as WithoutHelper,D as WithoutLabel,Cr as __namedExportsOrder,Nr as default};
