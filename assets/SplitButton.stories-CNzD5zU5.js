import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as Q,n as U}from"./Trash.es-DbBONI4z.js";import{r as m}from"./iframe-CmWccSYy.js";import{s as X}from"./CaretDown.es-DhXSlHV8.js";import{c as x}from"./cn-2dOUpm6k.js";import{M as Y}from"./Menu-CvF043Me.js";import"./IconBase.es-D8NPu7BJ.js";import"./preload-helper-Uod2V3eo.js";const Z="_wrapper_q50yz_1",$="_root_q50yz_6",ee="_main_q50yz_13",re="_caret_q50yz_14",ne="_label_q50yz_35",te="_divider_q50yz_50",ae="_md_q50yz_57",ie="_sm_q50yz_61",se="_primary_q50yz_94",oe="_disabled_q50yz_103",de="_open_q50yz_104",ue="_secondary_q50yz_112",le="_menu_q50yz_141",r={wrapper:Z,root:$,main:ee,caret:re,label:ne,divider:te,md:ae,sm:ie,primary:se,disabled:oe,open:de,secondary:ue,menu:le};function me(a,n){if(n===void 0)return a;const o=a.filter(S=>S.kind!=="group");return n?[{kind:"group",id:"menu-group",label:n},...o]:o}function t({variant:a="primary",size:n="md",menuItems:o,menuGroupLabel:S,menuIcon:V,onMainClick:P,className:K,children:F,disabled:d,...J}){const[s,u]=m.useState(!1),h=m.useRef(null),f=m.useId();return m.useEffect(()=>{if(!s)return;const l=_=>{var q;(q=h.current)!=null&&q.contains(_.target)||u(!1)},k=_=>{_.key==="Escape"&&u(!1)};return document.addEventListener("mousedown",l),document.addEventListener("keydown",k),()=>{document.removeEventListener("mousedown",l),document.removeEventListener("keydown",k)}},[s]),e.jsxs("div",{ref:h,className:x(r.wrapper,K),children:[e.jsxs("div",{className:x(r.root,r[a],r[n],d&&r.disabled,s&&r.open),children:[e.jsx("button",{type:"button",disabled:d,className:r.main,onClick:P,...J,children:e.jsx("span",{className:r.label,children:F})}),e.jsx("span",{className:r.divider,"aria-hidden":!0}),e.jsx("button",{type:"button",disabled:d,className:r.caret,"aria-label":"More options","aria-haspopup":"menu","aria-expanded":s,"aria-controls":f,onClick:()=>u(l=>!l),children:V??e.jsx(X,{weight:"bold","aria-hidden":!0})})]}),s&&!d?e.jsx(Y,{id:f,className:r.menu,entries:me(o,S),onSelect:()=>u(!1)}):null]})}t.__docgenInfo={description:"",methods:[],displayName:"SplitButton",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},menuItems:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| { kind: 'group'; id: string; label: string }
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
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:"'item'",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"shortcut",value:{name:"string",required:!1}},{key:"destructive",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}]}],raw:"MenuEntry[]"},description:""},menuGroupLabel:{required:!1,tsType:{name:"string"},description:'Optional section title above menu items. Omit or pass `""` to hide.'},menuIcon:{required:!1,tsType:{name:"ReactNode"},description:""},onMainClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Omit"]};const i=[{kind:"item",id:"edit",label:"Edit",icon:e.jsx(Q,{size:16,weight:"regular"})},{kind:"item",id:"duplicate",label:"Duplicate"},{kind:"item",id:"share",label:"Share...",shortcut:"⌘S"},{kind:"separator",id:"sep"},{kind:"item",id:"delete",label:"Delete",icon:e.jsx(U,{size:16,weight:"regular"}),destructive:!0}],he={title:"Components/Split Button",component:t,tags:["autodocs"],args:{children:"Create & Send",menuItems:i,menuGroupLabel:"Actions",onMainClick:()=>{}},argTypes:{menuGroupLabel:{control:"text",description:"Section title above menu items. Leave empty to hide."}}},c={args:{variant:"primary"}},p={args:{variant:"secondary"}},y={args:{variant:"primary",size:"sm"}},g={render:a=>e.jsx("div",{style:{padding:24,minHeight:280},children:e.jsx(t,{...a,onMainClick:()=>alert("Create & Send"),menuItems:i.map(n=>n.kind==="item"?{...n,onSelect:()=>alert(n.label)}:n)})})},v={name:"Without group label",args:{menuGroupLabel:""},render:a=>e.jsx("div",{style:{padding:24,minHeight:280},children:e.jsx(t,{...a})})},b={render:()=>e.jsxs("div",{style:{display:"grid",gap:16,padding:24,minHeight:280},children:[e.jsx(t,{variant:"primary",menuItems:i,menuGroupLabel:"Actions",children:"Create & Send"}),e.jsx(t,{variant:"secondary",menuItems:i,menuGroupLabel:"Actions",children:"Create & Send"}),e.jsx(t,{variant:"primary",size:"sm",menuItems:i,menuGroupLabel:"Actions",children:"Create & Send"}),e.jsx(t,{variant:"secondary",size:"sm",menuItems:i,menuGroupLabel:"Actions",children:"Create & Send"}),e.jsx(t,{variant:"primary",menuItems:i,menuGroupLabel:"Actions",disabled:!0,children:"Create & Send"})]})};var j,w,z;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...(z=(w=c.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var C,L,I;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(I=(L=p.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var G,B,A;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'sm'
  }
}`,...(A=(B=y.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var N,E,M;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: 24,
    minHeight: 280
  }}>
      <SplitButton {...args} onMainClick={() => alert('Create & Send')} menuItems={menuItems.map(item => item.kind === 'item' ? {
      ...item,
      onSelect: () => alert(item.label)
    } : item)} />
    </div>
}`,...(M=(E=g.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var R,T,H;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Without group label',
  args: {
    menuGroupLabel: ''
  },
  render: args => <div style={{
    padding: 24,
    minHeight: 280
  }}>
      <SplitButton {...args} />
    </div>
}`,...(H=(T=v.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var W,O,D;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(D=(O=b.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};const fe=["Primary","Secondary","Small","WithMenu","WithoutGroupLabel","AllVariants"];export{b as AllVariants,c as Primary,p as Secondary,y as Small,g as WithMenu,v as WithoutGroupLabel,fe as __namedExportsOrder,he as default};
