import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as Y,n as Z}from"./Trash.es-CHO74X-f.js";import{r as d}from"./iframe-BH_zNAgC.js";import{s as $}from"./CaretDown.es-BY4yHaWr.js";import{c as _}from"./cn-2dOUpm6k.js";import{M as ee}from"./Menu-D3nK8gBs.js";import"./IconBase.es-DDBWKy-D.js";import"./preload-helper-Uod2V3eo.js";const re="_wrapper_1w1ce_1",ne="_root_1w1ce_6",ae="_main_1w1ce_13",te="_caret_1w1ce_14",ie="_label_1w1ce_35",se="_divider_1w1ce_50",oe="_md_1w1ce_57",ue="_sm_1w1ce_61",le="_primary_1w1ce_94",de="_disabled_1w1ce_103",me="_open_1w1ce_104",ce="_secondary_1w1ce_112",pe="_menu_1w1ce_141",r={wrapper:re,root:ne,main:ae,caret:te,label:ie,divider:se,md:oe,sm:ue,primary:le,disabled:de,open:me,secondary:ce,menu:pe};function n({variant:i="primary",size:t="md",menuItems:H,menuGroupLabel:W="Actions",showMenuGroupLabel:O=!0,showMenuDivider:P=!0,showMenuDelete:K=!0,menuIcon:F,onMainClick:J,className:Q,children:U,disabled:o,...X}){const[s,u]=d.useState(!1),h=d.useRef(null),f=d.useId();return d.useEffect(()=>{if(!s)return;const l=b=>{var S;(S=h.current)!=null&&S.contains(b.target)||u(!1)},w=b=>{b.key==="Escape"&&u(!1)};return document.addEventListener("mousedown",l),document.addEventListener("keydown",w),()=>{document.removeEventListener("mousedown",l),document.removeEventListener("keydown",w)}},[s]),e.jsxs("div",{ref:h,className:_(r.wrapper,Q),children:[e.jsxs("div",{className:_(r.root,r[i],r[t],o&&r.disabled,s&&r.open),children:[e.jsx("button",{type:"button",disabled:o,className:r.main,onClick:J,...X,children:e.jsx("span",{className:r.label,children:U})}),e.jsx("span",{className:r.divider,"aria-hidden":!0}),e.jsx("button",{type:"button",disabled:o,className:r.caret,"aria-label":"More options","aria-haspopup":"menu","aria-expanded":s,"aria-controls":f,onClick:()=>u(l=>!l),children:F??e.jsx($,{weight:"bold","aria-hidden":!0})})]}),s&&!o?e.jsx(ee,{id:f,className:r.menu,entries:H,groupLabel:W,showGroupLabel:O,showDivider:P,showDelete:K,onSelect:()=>u(!1)}):null]})}n.__docgenInfo={description:"",methods:[],displayName:"SplitButton",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},menuItems:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| { kind: 'group'; id: string; label: string }
| { kind: 'separator'; id: string }
| {
    kind: 'item';
    id: string;
    label: string;
    icon?: ReactNode;
    shortcut?: string;
    destructive?: boolean;
    disabled?: boolean;
    onSelect?: () => void;
  }`,elements:[{name:"signature",type:"object",raw:"{ kind: 'group'; id: string; label: string }",signature:{properties:[{key:"kind",value:{name:"literal",value:"'group'",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:"{ kind: 'separator'; id: string }",signature:{properties:[{key:"kind",value:{name:"literal",value:"'separator'",required:!0}},{key:"id",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kind: 'item';
  id: string;
  label: string;
  icon?: ReactNode;
  shortcut?: string;
  destructive?: boolean;
  disabled?: boolean;
  onSelect?: () => void;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:"'item'",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"shortcut",value:{name:"string",required:!1}},{key:"destructive",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}]}],raw:"MenuEntry[]"},description:""},menuGroupLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Actions'",computed:!1}},showMenuGroupLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showMenuDivider:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showMenuDelete:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},menuIcon:{required:!1,tsType:{name:"ReactNode"},description:""},onMainClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Omit"]};const a=[{kind:"item",id:"edit",label:"Edit",icon:e.jsx(Y,{size:16,weight:"regular"})},{kind:"item",id:"duplicate",label:"Duplicate"},{kind:"item",id:"share",label:"Share...",shortcut:"⌘S"},{kind:"separator",id:"sep"},{kind:"item",id:"delete",label:"Delete",icon:e.jsx(Z,{size:16,weight:"regular"}),destructive:!0}],_e={title:"Components/Split Button",component:n,tags:["autodocs"],args:{children:"Create & Send",menuItems:a,menuGroupLabel:"Actions",showMenuGroupLabel:!0,showMenuDivider:!0,showMenuDelete:!0,onMainClick:()=>{}},argTypes:{menuGroupLabel:{control:"text"},showMenuGroupLabel:{control:"boolean"},showMenuDivider:{control:"boolean"},showMenuDelete:{control:"boolean"}}},m={args:{variant:"primary"}},c={args:{variant:"secondary"}},p={args:{variant:"primary",size:"sm"}},g={render:i=>e.jsx("div",{style:{padding:24,minHeight:280},children:e.jsx(n,{...i,onMainClick:()=>alert("Create & Send"),menuItems:a.map(t=>t.kind==="item"?{...t,onSelect:()=>alert(t.label)}:t)})})},v={name:"Without group label",args:{showMenuGroupLabel:!1},render:i=>e.jsx("div",{style:{padding:24,minHeight:280},children:e.jsx(n,{...i})})},y={render:()=>e.jsxs("div",{style:{display:"grid",gap:16,padding:24,minHeight:280},children:[e.jsx(n,{variant:"primary",menuItems:a,menuGroupLabel:"Actions",children:"Create & Send"}),e.jsx(n,{variant:"secondary",menuItems:a,menuGroupLabel:"Actions",children:"Create & Send"}),e.jsx(n,{variant:"primary",size:"sm",menuItems:a,menuGroupLabel:"Actions",children:"Create & Send"}),e.jsx(n,{variant:"secondary",size:"sm",menuItems:a,menuGroupLabel:"Actions",children:"Create & Send"}),e.jsx(n,{variant:"primary",menuItems:a,menuGroupLabel:"Actions",disabled:!0,children:"Create & Send"})]})};var k,x,L;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...(L=(x=m.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var j,q,G;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(G=(q=c.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var M,C,I;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'sm'
  }
}`,...(I=(C=p.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var A,B,N;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: 24,
    minHeight: 280
  }}>
      <SplitButton {...args} onMainClick={() => alert('Create & Send')} menuItems={menuItems.map(item => item.kind === 'item' ? {
      ...item,
      onSelect: () => alert(item.label)
    } : item)} />
    </div>
}`,...(N=(B=g.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var D,E,T;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Without group label',
  args: {
    showMenuGroupLabel: false
  },
  render: args => <div style={{
    padding: 24,
    minHeight: 280
  }}>
      <SplitButton {...args} />
    </div>
}`,...(T=(E=v.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var z,R,V;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 16,
    padding: 24,
    minHeight: 280
  }}>
      <SplitButton variant="primary" menuItems={menuItems} menuGroupLabel="Actions">
        Create & Send
      </SplitButton>
      <SplitButton variant="secondary" menuItems={menuItems} menuGroupLabel="Actions">
        Create & Send
      </SplitButton>
      <SplitButton variant="primary" size="sm" menuItems={menuItems} menuGroupLabel="Actions">
        Create & Send
      </SplitButton>
      <SplitButton variant="secondary" size="sm" menuItems={menuItems} menuGroupLabel="Actions">
        Create & Send
      </SplitButton>
      <SplitButton variant="primary" menuItems={menuItems} menuGroupLabel="Actions" disabled>
        Create & Send
      </SplitButton>
    </div>
}`,...(V=(R=y.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};const ke=["Primary","Secondary","Small","WithMenu","WithoutGroupLabel","AllVariants"];export{y as AllVariants,m as Primary,c as Secondary,p as Small,g as WithMenu,v as WithoutGroupLabel,ke as __namedExportsOrder,_e as default};
