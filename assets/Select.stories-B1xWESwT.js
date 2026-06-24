import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-BH_zNAgC.js";import{s as Xe}from"./CaretDown.es-BY4yHaWr.js";import{s as Ye,I as Ze}from"./Icon-sGIf7kVh.js";import{c as y}from"./cn-2dOUpm6k.js";import"./preload-helper-Uod2V3eo.js";import"./IconBase.es-DDBWKy-D.js";import"./CaretRight.es-FsFfKZnF.js";import"./Minus.es-DieFk8IS.js";import"./Plus.es-BWdDhnEA.js";import"./File.es-DKD7WV0_.js";import"./Trash.es-CHO74X-f.js";const er="_field_1rppb_1",rr="_label_1rppb_9",tr="_wrapper_1rppb_18",ar="_trigger_1rppb_22",sr="_sm_1rppb_45",or="_value_1rppb_50",lr="_placeholder_1rppb_58",nr="_caret_1rppb_62",ir="_error_1rppb_70",dr="_focus_1rppb_75",pr="_open_1rppb_76",cr="_disabled_1rppb_110",ur="_helper_1rppb_116",mr="_list_1rppb_120",br="_groupLabel_1rppb_136",fr="_separator_1rppb_146",gr="_separatorLine_1rppb_150",hr="_option_1rppb_155",xr="_selected_1rppb_174",vr="_optionLabel_1rppb_188",yr="_check_1rppb_196",_r="_helperError_1rppb_225",s={field:er,label:rr,wrapper:tr,trigger:ar,sm:sr,value:or,placeholder:lr,caret:nr,error:ir,focus:dr,open:pr,disabled:cr,helper:ur,list:mr,groupLabel:br,separator:fr,separatorLine:gr,option:hr,selected:xr,optionLabel:vr,check:yr,helperError:_r};function Fe(b){return b.filter(u=>u.kind==="option")}function kr(b,u){var _;if(u)return(_=Fe(b).find(N=>N.id===u))==null?void 0:_.label}function p({label:b,helperText:u,showLabel:_=!0,showHelperText:N=!1,placeholder:Be="Select an option...",options:C,value:W,defaultValue:Ae,onValueChange:k,size:Me="md",state:F="default",disabled:We,className:Ke,id:Ue}){const[n,h]=i.useState(!1),[Re,$e]=i.useState(Ae),[m,d]=i.useState(-1),K=i.useRef(null),U=i.useRef(null),Ge=i.useId(),x=Ue??Ge,R=`${x}-listbox`,$=_&&b,G=N&&u,B=$?`${x}-label`:void 0,P=G?`${x}-helper`:void 0,A=W!==void 0,f=A?W:Re,o=Fe(C),J=kr(C,f),v=We||F==="disabled",Q=F==="error",X=i.useCallback(e=>{A||$e(e),k==null||k(e)},[A,k]),g=i.useCallback(()=>{h(!1),d(-1)},[]),M=i.useCallback(e=>{X(e),g()},[g,X]);i.useEffect(()=>{if(!n)return;const e=a=>{var l;(l=K.current)!=null&&l.contains(a.target)||g()},t=a=>{a.key==="Escape"&&g()};return document.addEventListener("mousedown",e),document.addEventListener("keydown",t),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("keydown",t)}},[g,n]),i.useEffect(()=>{var a;if(!n||m<0)return;const e=o[m];if(!e)return;const t=(a=U.current)==null?void 0:a.querySelector(`[data-option-id="${e.id}"]`);t==null||t.scrollIntoView({block:"nearest"})},[m,n,o]);const Pe=e=>{if(!v){if((e.key==="ArrowDown"||e.key==="ArrowUp"||e.key==="Enter"||e.key===" ")&&e.preventDefault(),e.key==="ArrowDown"){if(!n){h(!0);const t=o.findIndex(a=>a.id===f);d(t>=0?t:0);return}d(t=>{var l;const a=t<0?0:Math.min(t+1,o.length-1);for(;(l=o[a])!=null&&l.disabled&&a<o.length-1;)return a+1;return a});return}if(e.key==="ArrowUp"){if(!n){h(!0);const t=o.findIndex(a=>a.id===f);d(t>=0?t:o.length-1);return}d(t=>{var l;const a=t<0?o.length-1:Math.max(t-1,0);for(;(l=o[a])!=null&&l.disabled&&a>0;)return a-1;return a});return}if(e.key==="Enter"||e.key===" "){if(!n){h(!0);const a=o.findIndex(l=>l.id===f);d(a>=0?a:0);return}const t=o[m];t&&!t.disabled&&M(t.id);return}e.key==="Escape"&&g()}},Je=e=>{if(e.key==="ArrowDown"&&(e.preventDefault(),d(t=>Math.min(t+1,o.length-1))),e.key==="ArrowUp"&&(e.preventDefault(),d(t=>Math.max(t-1,0))),e.key==="Enter"||e.key===" "){e.preventDefault();const t=o[m];t&&!t.disabled&&M(t.id)}};return r.jsxs("div",{className:y(s.field,v&&s.disabled,Me==="sm"&&s.sm,Ke),children:[$?r.jsx("label",{id:B,className:s.label,htmlFor:x,children:b}):null,r.jsxs("div",{ref:K,className:s.wrapper,children:[r.jsxs("button",{id:x,type:"button",className:y(s.trigger,n&&s.open,F==="focus"&&s.focus,Q&&s.error),disabled:v,"aria-haspopup":"listbox","aria-expanded":n,"aria-controls":R,"aria-labelledby":B,"aria-describedby":P,onClick:()=>{if(!v&&(h(e=>!e),!n)){const e=o.findIndex(t=>t.id===f);d(e>=0?e:0)}},onKeyDown:Pe,children:[r.jsx("span",{className:y(s.value,!J&&s.placeholder),children:J??Be}),r.jsx("span",{className:s.caret,"aria-hidden":!0,children:n?r.jsx(Ye,{size:16,weight:"bold"}):r.jsx(Xe,{size:16,weight:"bold"})})]}),n&&!v?r.jsx("ul",{ref:U,id:R,role:"listbox",className:s.list,"aria-labelledby":B,onKeyDown:Je,children:C.map(e=>{var l;if(e.kind==="group")return r.jsx("li",{role:"presentation",className:s.groupLabel,children:e.label},e.id);if(e.kind==="separator")return r.jsx("li",{role:"separator",className:s.separator,children:r.jsx("div",{className:s.separatorLine})},e.id);const t=e.id===f,a=m>=0&&((l=o[m])==null?void 0:l.id)===e.id;return r.jsx("li",{role:"presentation",children:r.jsxs("button",{type:"button",role:"option","data-option-id":e.id,disabled:e.disabled,"aria-selected":t,className:y(s.option,t&&s.selected),onMouseEnter:()=>{const Y=o.findIndex(Qe=>Qe.id===e.id);Y>=0&&d(Y)},onClick:()=>{e.disabled||M(e.id)},tabIndex:a?0:-1,children:[r.jsx("span",{className:s.optionLabel,children:e.label}),r.jsx("span",{className:s.check,"aria-hidden":!0,children:r.jsx(Ze,{name:"check",size:16})})]})},e.id)})}):null]}),G?r.jsx("span",{id:P,className:y(s.helper,Q&&s.helperError),children:u}):null]})}p.__docgenInfo={description:"",methods:[],displayName:"Select",props:{label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},showLabel:{required:!1,tsType:{name:"boolean"},description:"Show the label row. Matches Figma `Label` boolean property.",defaultValue:{value:"true",computed:!1}},showHelperText:{required:!1,tsType:{name:"boolean"},description:"Show helper text below the field. Matches Figma `Helper Text` boolean property.",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select an option...'",computed:!1}},options:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| { kind: 'group'; id: string; label: string }
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
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:"'option'",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:"SelectEntry[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'md' | 'sm'",elements:[{name:"literal",value:"'md'"},{name:"literal",value:"'sm'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'focus' | 'error' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'focus'"},{name:"literal",value:"'error'"},{name:"literal",value:"'disabled'"}]},description:"Static visual state for docs; interactive focus/open still apply when enabled.",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""}}};const c=[{kind:"option",id:"us",label:"United States"},{kind:"option",id:"ca",label:"Canada"},{kind:"option",id:"mx",label:"Mexico"},{kind:"option",id:"uk",label:"United Kingdom"},{kind:"option",id:"de",label:"Germany"}],Sr=[{kind:"group",id:"fruits",label:"Fruits"},{kind:"option",id:"apple",label:"Apple"},{kind:"option",id:"banana",label:"Banana"},{kind:"option",id:"cherry",label:"Cherry"},{kind:"separator",id:"sep-1"},{kind:"group",id:"vegetables",label:"Vegetables"},{kind:"option",id:"carrot",label:"Carrot"},{kind:"option",id:"pea",label:"Pea",disabled:!0}],Nr={title:"Components/Select",component:p,tags:["autodocs"],args:{label:"Label",placeholder:"Select an option...",helperText:"Helper text",showLabel:!0,showHelperText:!1,options:c},argTypes:{showLabel:{control:"boolean"},showHelperText:{control:"boolean"}}},S={},w={args:{state:"focus"}},L={args:{defaultValue:"us"}},T={args:{defaultValue:"us"},parameters:{docs:{description:{story:"Click the trigger to open the dropdown list."}}}},j={args:{defaultValue:"us",helperText:"Error message",state:"error"}},E={args:{state:"disabled"}},V={args:{size:"sm",defaultValue:"us"}},q={args:{label:"Food",options:Sr,defaultValue:"apple",showHelperText:!1}},D={args:{showLabel:!1,defaultValue:"us"}},H={args:{showHelperText:!1,defaultValue:"us"}},I={args:{showLabel:!1,showHelperText:!1,defaultValue:"us"}},z={render:()=>r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 280px)",gap:48,padding:24,alignItems:"start"},children:[r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Default"}),r.jsx(p,{label:"Label",placeholder:"Select an option...",helperText:"Helper text",options:c})]}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Focus"}),r.jsx(p,{label:"Label",placeholder:"Select an option...",helperText:"Helper text",options:c,state:"focus"})]}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Filled"}),r.jsx(p,{label:"Label",helperText:"Helper text",options:c,defaultValue:"us"})]}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Error"}),r.jsx(p,{label:"Label",helperText:"Error message",options:c,defaultValue:"us",state:"error"})]}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Disabled"}),r.jsx(p,{label:"Label",placeholder:"Select an option...",helperText:"Helper text",options:c,state:"disabled"})]}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Small"}),r.jsx(p,{label:"Label",helperText:"Helper text",options:c,defaultValue:"us",size:"sm"})]})]})},O={name:"Select + Dropdown List",render:()=>r.jsx("div",{style:{padding:24,maxWidth:280},children:r.jsx(p,{label:"Country",placeholder:"Select an option...",options:c,defaultValue:"us"})})};var Z,ee,re;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:"{}",...(re=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,ae,se;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    state: 'focus'
  }
}`,...(se=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,le,ne;L.parameters={...L.parameters,docs:{...(oe=L.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    defaultValue: 'us'
  }
}`,...(ne=(le=L.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var ie,de,pe;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(pe=(de=T.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ce,ue,me;j.parameters={...j.parameters,docs:{...(ce=j.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    defaultValue: 'us',
    helperText: 'Error message',
    state: 'error'
  }
}`,...(me=(ue=j.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var be,fe,ge;E.parameters={...E.parameters,docs:{...(be=E.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...(ge=(fe=E.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var he,xe,ve;V.parameters={...V.parameters,docs:{...(he=V.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    defaultValue: 'us'
  }
}`,...(ve=(xe=V.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var ye,_e,ke;q.parameters={...q.parameters,docs:{...(ye=q.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    label: 'Food',
    options: groupedOptions,
    defaultValue: 'apple',
    showHelperText: false
  }
}`,...(ke=(_e=q.parameters)==null?void 0:_e.docs)==null?void 0:ke.source}}};var Se,we,Le;D.parameters={...D.parameters,docs:{...(Se=D.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    showLabel: false,
    defaultValue: 'us'
  }
}`,...(Le=(we=D.parameters)==null?void 0:we.docs)==null?void 0:Le.source}}};var Te,je,Ee;H.parameters={...H.parameters,docs:{...(Te=H.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ce=(Ne=O.parameters)==null?void 0:Ne.docs)==null?void 0:Ce.source}}};const Cr=["Default","Focus","Filled","Open","Error","Disabled","Small","WithGroups","WithoutLabel","WithoutHelper","TriggerOnly","AllStates","ComposedExample"];export{z as AllStates,O as ComposedExample,S as Default,E as Disabled,j as Error,L as Filled,w as Focus,T as Open,V as Small,I as TriggerOnly,q as WithGroups,H as WithoutHelper,D as WithoutLabel,Cr as __namedExportsOrder,Nr as default};
