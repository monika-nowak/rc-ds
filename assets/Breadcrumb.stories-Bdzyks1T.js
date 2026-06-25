import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as P}from"./iframe-C1_cakPJ.js";import{B as d,a as S}from"./Breadcrumb-DCNQwu94.js";import"./preload-helper-Uod2V3eo.js";import"./cn-2dOUpm6k.js";import"./Icon-DOeyKxoZ.js";import"./IconBase.es-0DYgvYfT.js";import"./CaretRight.es-BKDEJhyc.js";import"./CaretDown.es-Dxtdvf2M.js";import"./Minus.es-DrOEzQfb.js";import"./Warning.es-CrTD24Hh.js";import"./File.es-DkYlWmQu.js";import"./Trash.es-DJi0weJb.js";import"./IconButton-DBkrmQ7n.js";import"./Menu-EVvy--Pv.js";const t=[{id:"client-a",label:"Client A",prefix:"A"},{id:"client-b",label:"Client B",prefix:"B"},{id:"client-c",label:"Client C",prefix:"C"}],U={title:"Components/Breadcrumb",component:d,tags:["autodocs"]},B=[{kind:"selector",id:"client",label:"Client A",prefix:"A"},{kind:"link",id:"kb",label:"Knowledge base"},{kind:"current",id:"upload",label:"Upload file"}],i={args:{items:B}},n={name:"Projects list (PoC)",args:{items:[]},render:()=>{const[e,l]=P.useState("client-a"),r=t.find(o=>o.id===e)??t[0];return c.jsx(d,{items:[{kind:"selector",id:"client",label:r.label,prefix:r.prefix,options:t,value:e,onValueChange:l},{kind:"current",id:"projects",label:"Projects"}]})}},a={name:"Project detail (PoC)",args:{items:[]},render:()=>{const[e,l]=P.useState("client-a"),r=t.find(o=>o.id===e)??t[0];return c.jsx(d,{items:[{kind:"selector",id:"client",label:r.label,prefix:r.prefix,options:t,value:e,onValueChange:l},{kind:"back",id:"back",label:"Back to projects",onClick:()=>window.alert("Navigate to /clients/client-a/projects")},{kind:"current",id:"project",label:"MSL Insights – May 2026"}]})},parameters:{docs:{description:{story:'On a project screen the trail shows the project title. The back arrow returns to all projects for the selected client — not a "Projects" text link.'}}}},s={args:{items:B},render:e=>c.jsx(S,{...e})};var p,m,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    items: trail
  }
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var b,j,k;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Projects list (PoC)',
  args: {
    items: []
  },
  render: () => {
    const [clientId, setClientId] = useState('client-a');
    const client = clients.find(item => item.id === clientId) ?? clients[0];
    return <Breadcrumbs items={[{
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
    }]} />;
  }
}`,...(k=(j=n.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var g,f,C;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Project detail (PoC)',
  args: {
    items: []
  },
  render: () => {
    const [clientId, setClientId] = useState('client-a');
    const client = clients.find(item => item.id === clientId) ?? clients[0];
    return <Breadcrumbs items={[{
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
      onClick: () => window.alert('Navigate to /clients/client-a/projects')
    }, {
      kind: 'current',
      id: 'project',
      label: 'MSL Insights – May 2026'
    }]} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'On a project screen the trail shows the project title. The back arrow returns to all projects for the selected client — not a "Projects" text link.'
      }
    }
  }
}`,...(C=(f=a.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var x,h,I;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    items: trail
  },
  render: args => <BreadcrumbBar {...args} />
}`,...(I=(h=s.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};const q=["Trail","ProjectsTrail","ProjectDetailTrail","Bar"];export{s as Bar,a as ProjectDetailTrail,n as ProjectsTrail,i as Trail,q as __namedExportsOrder,U as default};
