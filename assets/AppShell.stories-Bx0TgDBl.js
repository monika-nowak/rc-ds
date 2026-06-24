import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./iframe-BH_zNAgC.js";import{A as N}from"./Avatar-CIfS1ftf.js";import{B as I}from"./Breadcrumb-LAPyVQBS.js";import{L as S}from"./Logo-CaDbwhKt.js";import{c as y}from"./cn-2dOUpm6k.js";import{S as P,a as c}from"./SideNav-rmSEU6Gs.js";import{I as d}from"./Icon-sGIf7kVh.js";import"./preload-helper-Uod2V3eo.js";import"./IconButton-D3K7mo_e.js";import"./CaretDown.es-BY4yHaWr.js";import"./IconBase.es-DDBWKy-D.js";import"./Menu-D3nK8gBs.js";import"./CaretRight.es-FsFfKZnF.js";import"./Minus.es-DieFk8IS.js";import"./Plus.es-BWdDhnEA.js";import"./File.es-DKD7WV0_.js";import"./Trash.es-CHO74X-f.js";const k="_header_2q2cg_1",_="_start_2q2cg_13",C="_end_2q2cg_19",p={header:k,start:_,end:C};function h({className:a,start:s,end:t,children:r}){return e.jsxs("header",{className:y(p.header,a),children:[e.jsx("div",{className:p.start,children:s??r}),t?e.jsx("div",{className:p.end,children:t}):null]})}h.__docgenInfo={description:"",methods:[],displayName:"AppHeader",props:{className:{required:!1,tsType:{name:"string"},description:""},start:{required:!1,tsType:{name:"ReactNode"},description:""},end:{required:!1,tsType:{name:"ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const A="_shell_s2g93_1",z="_main_s2g93_7",M="_content_s2g93_14",m={shell:A,main:z,content:M};function o({className:a,sidebar:s,header:t,children:r}){return e.jsxs("div",{className:y(m.shell,a),children:[s,e.jsxs("div",{className:m.main,children:[t,e.jsx("main",{className:m.content,children:r})]})]})}o.__docgenInfo={description:"",methods:[],displayName:"AppShell",props:{className:{required:!1,tsType:{name:"string"},description:""},sidebar:{required:!0,tsType:{name:"ReactNode"},description:""},header:{required:!0,tsType:{name:"ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const i=[{id:"client-a",label:"Client A",prefix:"A"},{id:"client-b",label:"Client B",prefix:"B"},{id:"client-c",label:"Client C",prefix:"C"}],W={title:"Patterns/App Shell",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"}},n={name:"Projects (PoC)",args:{sidebar:null,header:null,children:null},render:()=>{const[a,s]=v.useState("client-a"),t=i.find(r=>r.id===a)??i[0];return e.jsx(o,{sidebar:e.jsxs(P,{logo:e.jsx(S,{compact:!0}),children:[e.jsx(c,{active:!0,label:"Projects",icon:e.jsx(d,{name:"cards-three",size:16})}),e.jsx(c,{label:"Data sources",icon:e.jsx(d,{name:"database",size:16})})]}),header:e.jsx(h,{start:e.jsx(I,{items:[{kind:"selector",id:"client",label:t.label,prefix:t.prefix,options:i,value:a,onValueChange:s},{kind:"current",id:"projects",label:"Projects"}]}),end:e.jsx(N,{name:"Monika Nowak",size:"md"})}),children:e.jsx("div",{style:{padding:"var(--rc-spacing-6)"},children:e.jsx("h1",{className:"rc-heading-lg",style:{margin:0},children:"Projects"})})})}},l={name:"Project detail (PoC)",args:{sidebar:null,header:null,children:null},render:()=>{const[a,s]=v.useState("client-a"),t=i.find(r=>r.id===a)??i[0];return e.jsx(o,{sidebar:e.jsxs(P,{logo:e.jsx(S,{compact:!0}),children:[e.jsx(c,{active:!0,label:"Projects",icon:e.jsx(d,{name:"cards-three",size:16})}),e.jsx(c,{label:"Data sources",icon:e.jsx(d,{name:"database",size:16})})]}),header:e.jsx(h,{start:e.jsx(I,{items:[{kind:"selector",id:"client",label:t.label,prefix:t.prefix,options:i,value:a,onValueChange:s},{kind:"back",id:"back",label:"Back to projects",href:`/clients/${a}/projects`},{kind:"current",id:"project",label:"MSL Insights – May 2026"}]}),end:e.jsx(N,{name:"Monika Nowak",size:"md"})}),children:e.jsx("div",{style:{padding:"var(--rc-spacing-6)"},children:e.jsx("h1",{className:"rc-heading-lg",style:{margin:0},children:"MSL Insights – May 2026"})})})}};var u,g,j;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Projects (PoC)',
  args: {
    sidebar: null,
    header: null,
    children: null
  },
  render: () => {
    const [clientId, setClientId] = useState('client-a');
    const client = clients.find(item => item.id === clientId) ?? clients[0];
    return <AppShell sidebar={<SideNav logo={<Logo compact />}>
          <SideNavItem active label="Projects" icon={<Icon name="cards-three" size={16} />} />
          <SideNavItem label="Data sources" icon={<Icon name="database" size={16} />} />
        </SideNav>} header={<AppHeader start={<Breadcrumbs items={[{
      kind: 'selector',
      id: 'client',
      label: client.label,
      prefix: client.prefix,
      options: clients,
      value: clientId,
      onValueChange: setClientId
    }, {
      kind: 'current',
      id: 'projects',
      label: 'Projects'
    }]} />} end={<Avatar name="Monika Nowak" size="md" />} />}>
      <div style={{
        padding: 'var(--rc-spacing-6)'
      }}>
        <h1 className="rc-heading-lg" style={{
          margin: 0
        }}>
          Projects
        </h1>
      </div>
    </AppShell>;
  }
}`,...(j=(g=n.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var b,x,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Project detail (PoC)',
  args: {
    sidebar: null,
    header: null,
    children: null
  },
  render: () => {
    const [clientId, setClientId] = useState('client-a');
    const client = clients.find(item => item.id === clientId) ?? clients[0];
    return <AppShell sidebar={<SideNav logo={<Logo compact />}>
            <SideNavItem active label="Projects" icon={<Icon name="cards-three" size={16} />} />
            <SideNavItem label="Data sources" icon={<Icon name="database" size={16} />} />
          </SideNav>} header={<AppHeader start={<Breadcrumbs items={[{
      kind: 'selector',
      id: 'client',
      label: client.label,
      prefix: client.prefix,
      options: clients,
      value: clientId,
      onValueChange: setClientId
    }, {
      kind: 'back',
      id: 'back',
      label: 'Back to projects',
      href: \`/clients/\${clientId}/projects\`
    }, {
      kind: 'current',
      id: 'project',
      label: 'MSL Insights – May 2026'
    }]} />} end={<Avatar name="Monika Nowak" size="md" />} />}>
        <div style={{
        padding: 'var(--rc-spacing-6)'
      }}>
          <h1 className="rc-heading-lg" style={{
          margin: 0
        }}>
            MSL Insights – May 2026
          </h1>
        </div>
      </AppShell>;
  }
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const X=["ProjectsPage","ProjectDetailPage"];export{l as ProjectDetailPage,n as ProjectsPage,X as __namedExportsOrder,W as default};
