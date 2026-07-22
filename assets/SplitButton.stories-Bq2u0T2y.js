import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as re,n as ne}from"./Trash.es-ByI4ZgPH.js";import{r as d}from"./iframe-DVYlbdCj.js";import{s as ae}from"./CaretDown.es-dcCKaQIp.js";import{c as h}from"./cn-2dOUpm6k.js";import{M as te}from"./Menu-DVqBUp66.js";import"./IconBase.es-B2CDjfeH.js";import"./preload-helper-Uod2V3eo.js";import"./Divider-BhWe8uDS.js";const se="_wrapper_13rj7_1",ie="_root_13rj7_6",oe="_main_13rj7_13",le="_caret_13rj7_14",ue="_label_13rj7_33",de="_divider_13rj7_48",me="_xs_13rj7_55",ce="_md_13rj7_59",pe="_sm_13rj7_63",ye="_primary_13rj7_98",ve="_disabled_13rj7_107",ge="_open_13rj7_108",be="_secondary_13rj7_116",Se="_menu_13rj7_145",r={wrapper:se,root:ie,main:oe,caret:le,label:ue,divider:de,xs:me,md:ce,sm:pe,primary:ye,disabled:ve,open:ge,secondary:be,menu:Se},he={xs:"rc-label-sm",sm:"rc-label-sm",md:"rc-label-md"};function n({variant:s="primary",size:t="md",menuItems:K,menuGroupLabel:F="Actions",showMenuGroupLabel:J=!0,showMenuDivider:Q=!0,showMenuDelete:U=!0,menuIcon:X,onMainClick:Y,className:Z,children:$,disabled:o,...ee}){const[i,l]=d.useState(!1),f=d.useRef(null),x=d.useId();return d.useEffect(()=>{if(!i)return;const u=S=>{var j;(j=f.current)!=null&&j.contains(S.target)||l(!1)},_=S=>{S.key==="Escape"&&l(!1)};return document.addEventListener("mousedown",u),document.addEventListener("keydown",_),()=>{document.removeEventListener("mousedown",u),document.removeEventListener("keydown",_)}},[i]),e.jsxs("div",{ref:f,className:h(r.wrapper,Z),children:[e.jsxs("div",{className:h(r.root,r[s],r[t],o&&r.disabled,i&&r.open),children:[e.jsx("button",{type:"button",disabled:o,className:r.main,onClick:Y,...ee,children:e.jsx("span",{className:h(he[t],r.label),children:$})}),e.jsx("span",{className:r.divider,"aria-hidden":!0}),e.jsx("button",{type:"button",disabled:o,className:r.caret,"aria-label":"More options","aria-haspopup":"menu","aria-expanded":i,"aria-controls":x,onClick:()=>l(u=>!u),children:X??e.jsx(ae,{weight:"bold","aria-hidden":!0})})]}),i&&!o?e.jsx(te,{id:x,className:r.menu,entries:K,groupLabel:F,showGroupLabel:J,showDivider:Q,showDelete:U,onSelect:()=>l(!1)}):null]})}n.__docgenInfo={description:"",methods:[],displayName:"SplitButton",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},menuItems:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| { kind: 'group'; id: string; label: string }
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
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:"'item'",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"shortcut",value:{name:"string",required:!1}},{key:"destructive",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}]}],raw:"MenuEntry[]"},description:""},menuGroupLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Actions'",computed:!1}},showMenuGroupLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showMenuDivider:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showMenuDelete:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},menuIcon:{required:!1,tsType:{name:"ReactNode"},description:""},onMainClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Omit"]};const a=[{kind:"item",id:"edit",label:"Edit",icon:e.jsx(re,{size:16,weight:"regular"})},{kind:"item",id:"duplicate",label:"Duplicate"},{kind:"item",id:"share",label:"Share...",shortcut:"⌘S"},{kind:"separator",id:"sep"},{kind:"item",id:"delete",label:"Delete",icon:e.jsx(ne,{size:16,weight:"regular"}),destructive:!0}],qe={title:"Components/Split Button",component:n,tags:["autodocs"],args:{children:"Create & Send",menuItems:a,menuGroupLabel:"Actions",showMenuGroupLabel:!0,showMenuDivider:!0,showMenuDelete:!0,onMainClick:()=>{}},argTypes:{variant:{control:"select",options:["primary","secondary"]},size:{control:"select",options:["xs","sm","md"]},menuGroupLabel:{control:"text"},showMenuGroupLabel:{control:"boolean"},showMenuDivider:{control:"boolean"},showMenuDelete:{control:"boolean"}}},m={args:{variant:"primary"}},c={args:{variant:"secondary"}},p={name:"Extra small",args:{variant:"primary",size:"xs"}},y={args:{variant:"primary",size:"sm"}},v={render:s=>e.jsx("div",{style:{padding:24,minHeight:280},children:e.jsx(n,{...s,onMainClick:()=>alert("Create & Send"),menuItems:a.map(t=>t.kind==="item"?{...t,onSelect:()=>alert(t.label)}:t)})})},g={name:"Without group label",args:{showMenuGroupLabel:!1},render:s=>e.jsx("div",{style:{padding:24,minHeight:280},children:e.jsx(n,{...s})})},b={render:()=>e.jsxs("div",{style:{display:"grid",gap:16,padding:24,minHeight:280},children:[e.jsx(n,{variant:"primary",menuItems:a,menuGroupLabel:"Actions",children:"Create & Send"}),e.jsx(n,{variant:"secondary",menuItems:a,menuGroupLabel:"Actions",children:"Create & Send"}),e.jsx(n,{variant:"primary",size:"xs",menuItems:a,menuGroupLabel:"Actions",children:"Create & Send"}),e.jsx(n,{variant:"secondary",size:"xs",menuItems:a,menuGroupLabel:"Actions",children:"Create & Send"}),e.jsx(n,{variant:"primary",size:"sm",menuItems:a,menuGroupLabel:"Actions",children:"Create & Send"}),e.jsx(n,{variant:"secondary",size:"sm",menuItems:a,menuGroupLabel:"Actions",children:"Create & Send"}),e.jsx(n,{variant:"primary",menuItems:a,menuGroupLabel:"Actions",disabled:!0,children:"Create & Send"})]})};var k,w,L;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...(L=(w=m.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var C,G,q;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(q=(G=c.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var I,M,A;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Extra small',
  args: {
    variant: 'primary',
    size: 'xs'
  }
}`,...(A=(M=p.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var B,z,E;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'sm'
  }
}`,...(E=(z=y.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var N,D,T;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: 24,
    minHeight: 280
  }}>
      <SplitButton {...args} onMainClick={() => alert('Create & Send')} menuItems={menuItems.map(item => item.kind === 'item' ? {
      ...item,
      onSelect: () => alert(item.label)
    } : item)} />
    </div>
}`,...(T=(D=v.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var R,V,H;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(H=(V=g.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var W,O,P;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
      <SplitButton variant="primary" size="xs" menuItems={menuItems} menuGroupLabel="Actions">
        Create & Send
      </SplitButton>
      <SplitButton variant="secondary" size="xs" menuItems={menuItems} menuGroupLabel="Actions">
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
}`,...(P=(O=b.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const Ie=["Primary","Secondary","ExtraSmall","Small","WithMenu","WithoutGroupLabel","AllVariants"];export{b as AllVariants,p as ExtraSmall,m as Primary,c as Secondary,y as Small,v as WithMenu,g as WithoutGroupLabel,Ie as __namedExportsOrder,qe as default};
