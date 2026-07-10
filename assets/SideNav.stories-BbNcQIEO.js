import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./iframe-okLCOoZf.js";import{L as u}from"./Logo-CaDbwhKt.js";import{I as i}from"./Icon-D1Mi1OoL.js";import{S as s,a as n}from"./SideNav-0T3d18aR.js";import"./preload-helper-Uod2V3eo.js";import"./cn-2dOUpm6k.js";import"./IconBase.es-DLmrfCuS.js";import"./CaretRight.es-BOg3ZnOv.js";import"./CaretDown.es-CsqFuBgP.js";import"./Minus.es-hMcAcDyQ.js";import"./Warning.es-B4vTOCq-.js";import"./Flag.es-D_cVYw98.js";import"./Trash.es-CHXGmJNG.js";const L={title:"Components/Side Nav",component:s,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Side nav is composed of `SideNavItem` children. Add or remove items by adding more `SideNavItem` components; swap icons via the `icon` prop with any curated `Icon` name."}}}},t={name:"Rail (PoC)",args:{children:null},render:()=>e.jsx("div",{style:{height:320,display:"flex"},children:e.jsxs(s,{logo:e.jsx(u,{compact:!0}),children:[e.jsx(n,{active:!0,label:"Projects",icon:e.jsx(i,{name:"cards-three",size:16})}),e.jsx(n,{label:"Data sources",icon:e.jsx(i,{name:"database",size:16})})]})})},j=[{id:"projects",label:"Projects",icon:"cards-three"},{id:"data-sources",label:"Data sources",icon:"database"},{id:"settings",label:"Settings",icon:"gear"}],o={name:"Custom menu",args:{children:null},render:()=>{const[v,h]=g.useState("projects");return e.jsx("div",{style:{height:360,display:"flex"},children:e.jsx(s,{logo:e.jsx(u,{compact:!0}),children:j.map(a=>e.jsx(n,{active:v===a.id,label:a.label,icon:e.jsx(i,{name:a.icon,size:16}),onClick:()=>h(a.id)},a.id))})})},parameters:{docs:{description:{story:"Define menu entries in an array, map them to `SideNavItem`, and control the active item in state. To add a position, push a new object; to change an icon, update the `icon` field."}}}};var r,c,d;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Rail (PoC)',
  args: {
    children: null
  },
  render: () => <div style={{
    height: 320,
    display: 'flex'
  }}>
      <SideNav logo={<Logo compact />}>
        <SideNavItem active label="Projects" icon={<Icon name="cards-three" size={16} />} />
        <SideNavItem label="Data sources" icon={<Icon name="database" size={16} />} />
      </SideNav>
    </div>
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,l,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Custom menu',
  args: {
    children: null
  },
  render: () => {
    const [activeId, setActiveId] = useState('projects');
    return <div style={{
      height: 360,
      display: 'flex'
    }}>
        <SideNav logo={<Logo compact />}>
          {defaultMenu.map(entry => <SideNavItem key={entry.id} active={activeId === entry.id} label={entry.label} icon={<Icon name={entry.icon} size={16} />} onClick={() => setActiveId(entry.id)} />)}
        </SideNav>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Define menu entries in an array, map them to \`SideNavItem\`, and control the active item in state. To add a position, push a new object; to change an icon, update the \`icon\` field.'
      }
    }
  }
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const M=["Rail","CustomMenu"];export{o as CustomMenu,t as Rail,M as __namedExportsOrder,L as default};
