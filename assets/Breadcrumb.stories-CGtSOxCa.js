import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as w}from"./iframe-DBX0v1Wm.js";import{B as h,a as ee}from"./Breadcrumb-BOe4d28O.js";import"./preload-helper-Uod2V3eo.js";import"./cn-2dOUpm6k.js";import"./Icon-6KlfR_aX.js";import"./IconBase.es-zeqnIraZ.js";import"./CaretRight.es-C7OiW3AX.js";import"./CaretDown.es-CCRlVziS.js";import"./Minus.es-gPxNOu_K.js";import"./Warning.es-BxbdZV1j.js";import"./Flag.es-D0A0cjfy.js";import"./Trash.es-ChueP44e.js";import"./IconButton-BKzAixFV.js";import"./Menu-DVqBUp66.js";import"./Divider-BhWe8uDS.js";const r=[{id:"client-a",label:"Client A",prefix:"A"},{id:"client-b",label:"Client B",prefix:"B"},{id:"client-c",label:"Client C",prefix:"C"}],H=[{label:"Client A",showDropdown:!0,onClick:()=>{}},{label:"Knowledge base",href:"#knowledge-base"},{label:"Upload file",isCurrent:!0}],we={title:"Components/Breadcrumb",component:h,tags:["autodocs"],args:{leading:{prefix:"A"},showLeading:!0,items:H}},c={name:"Default (Client A › Knowledge base › Upload file)"},p={name:"Without avatar",args:{showLeading:!1,items:[{label:"Client A",showDropdown:!0,onClick:()=>{}},{label:"Knowledge base",href:"#knowledge-base"},{label:"Upload file",isCurrent:!0}]}},m={name:"Without dropdown",args:{leading:{prefix:"A"},items:[{label:"Client A",href:"#client-a"},{label:"Knowledge base",href:"#knowledge-base"},{label:"Upload file",isCurrent:!0}]}},u={args:{items:[]},render:function(){const[i,l]=w.useState("client-a"),[s,x]=w.useState([{label:"Client A",showDropdown:!0},{label:"Knowledge base",href:"#knowledge-base"},{label:"Upload file"}]),C=r.find(e=>e.id===i)??r[0],J=(e,n)=>{x(o=>o.map((I,Z)=>Z===e?{...I,label:n}:I))},Q=()=>{x(e=>{const n=e.map(o=>({...o,isCurrent:!1}));return[...n,{label:`Step ${n.length+1}`}]})},X=()=>{x(e=>e.length>1?e.slice(0,-1):e)},Y=s.map((e,n)=>n===0?{...e,label:C.label,showDropdown:!0,dropdownOptions:r,dropdownValue:i,onDropdownValueChange:l}:e);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--rc-spacing-4)"},children:[t.jsx(h,{leading:{prefix:C.prefix},showLeading:!0,items:Y}),t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--rc-spacing-2)"},children:[t.jsx("button",{type:"button",onClick:Q,children:"Add item"}),t.jsx("button",{type:"button",onClick:X,children:"Remove last"})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--rc-spacing-2)"},children:s.map((e,n)=>t.jsxs("label",{style:{display:"flex",gap:"var(--rc-spacing-2)"},children:[t.jsxs("span",{style:{width:72},children:["Item ",n+1]}),t.jsx("input",{value:n===0?C.label:e.label,disabled:n===0,onChange:o=>J(n,o.target.value)})]},`breadcrumb-edit-${n}`))})]})}},d={name:"Legacy (kind-based entries)",args:{leading:void 0,showLeading:void 0,items:[{kind:"selector",id:"client",label:"Client A",prefix:"A"},{kind:"link",id:"kb",label:"Knowledge base"},{kind:"current",id:"upload",label:"Upload file"}]}},b={name:"Projects list (PoC)",args:{items:[]},render:()=>{const[a,i]=w.useState("client-a"),l=r.find(s=>s.id===a)??r[0];return t.jsx(h,{leading:{prefix:l.prefix},items:[{label:l.label,showDropdown:!0,dropdownOptions:r,dropdownValue:a,onDropdownValueChange:i},{label:"Projects"}]})}},g={name:"Project detail (PoC)",args:{items:[]},render:()=>{const[a,i]=w.useState("client-a"),l=r.find(s=>s.id===a)??r[0];return t.jsx(h,{leading:{prefix:l.prefix},items:[{label:l.label,showDropdown:!0,dropdownOptions:r,dropdownValue:a,onDropdownValueChange:i},{kind:"back",id:"back",label:"Back to projects",onClick:()=>window.alert("Navigate to /clients/client-a/projects")},{label:"MSL Insights – May 2026"}]})},parameters:{docs:{description:{story:'On a project screen the trail shows the project title. The back arrow returns to all projects for the selected client — not a "Projects" text link.'}}}},f={args:{items:H,leading:{prefix:"A"}},render:a=>t.jsx(ee,{...a})};var k,v,y;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Default (Client A › Knowledge base › Upload file)'
}`,...(y=(v=c.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var j,D,A;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Without avatar',
  args: {
    showLeading: false,
    items: [{
      label: 'Client A',
      showDropdown: true,
      onClick: () => undefined
    }, {
      label: 'Knowledge base',
      href: '#knowledge-base'
    }, {
      label: 'Upload file',
      isCurrent: true
    }]
  }
}`,...(A=(D=p.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var P,S,B;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Without dropdown',
  args: {
    leading: {
      prefix: 'A'
    },
    items: [{
      label: 'Client A',
      href: '#client-a'
    }, {
      label: 'Knowledge base',
      href: '#knowledge-base'
    }, {
      label: 'Upload file',
      isCurrent: true
    }]
  }
}`,...(B=(S=m.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var L,V,K;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    items: []
  },
  render: function PlaygroundRender() {
    const [clientId, setClientId] = useState('client-a');
    const [items, setItems] = useState<BreadcrumbItemData[]>([{
      label: 'Client A',
      showDropdown: true
    }, {
      label: 'Knowledge base',
      href: '#knowledge-base'
    }, {
      label: 'Upload file'
    }]);
    const client = clients.find(item => item.id === clientId) ?? clients[0];
    const updateLabel = (index: number, label: string) => {
      setItems(current => current.map((item, itemIndex) => itemIndex === index ? {
        ...item,
        label
      } : item));
    };
    const addItem = () => {
      setItems(current => {
        const next = current.map(item => ({
          ...item,
          isCurrent: false
        }));
        return [...next, {
          label: \`Step \${next.length + 1}\`
        }];
      });
    };
    const removeItem = () => {
      setItems(current => current.length > 1 ? current.slice(0, -1) : current);
    };
    const trailItems: BreadcrumbItemData[] = items.map((item, index) => {
      if (index === 0) {
        return {
          ...item,
          label: client.label,
          showDropdown: true,
          dropdownOptions: clients,
          dropdownValue: clientId,
          onDropdownValueChange: setClientId
        };
      }
      return item;
    });
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--rc-spacing-4)'
    }}>
        <Breadcrumbs leading={{
        prefix: client.prefix
      }} showLeading items={trailItems} />
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--rc-spacing-2)'
      }}>
          <button type="button" onClick={addItem}>
            Add item
          </button>
          <button type="button" onClick={removeItem}>
            Remove last
          </button>
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--rc-spacing-2)'
      }}>
          {items.map((item, index) => <label key={\`breadcrumb-edit-\${index}\`} style={{
          display: 'flex',
          gap: 'var(--rc-spacing-2)'
        }}>
              <span style={{
            width: 72
          }}>Item {index + 1}</span>
              <input value={index === 0 ? client.label : item.label} disabled={index === 0} onChange={event => updateLabel(index, event.target.value)} />
            </label>)}
        </div>
      </div>;
  }
}`,...(K=(V=u.parameters)==null?void 0:V.docs)==null?void 0:K.source}}};var U,T,W,O,R;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Legacy (kind-based entries)',
  args: {
    leading: undefined,
    showLeading: undefined,
    items: [{
      kind: 'selector' as const,
      id: 'client',
      label: 'Client A',
      prefix: 'A'
    }, {
      kind: 'link' as const,
      id: 'kb',
      label: 'Knowledge base'
    }, {
      kind: 'current' as const,
      id: 'upload',
      label: 'Upload file'
    }]
  }
}`,...(W=(T=d.parameters)==null?void 0:T.docs)==null?void 0:W.source},description:{story:"@deprecated Legacy kind-based entries — still supported.",...(R=(O=d.parameters)==null?void 0:O.docs)==null?void 0:R.description}}};var M,$,E;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Projects list (PoC)',
  args: {
    items: []
  },
  render: () => {
    const [clientId, setClientId] = useState('client-a');
    const client = clients.find(item => item.id === clientId) ?? clients[0];
    return <Breadcrumbs leading={{
      prefix: client.prefix
    }} items={[{
      label: client.label,
      showDropdown: true,
      dropdownOptions: clients,
      dropdownValue: clientId,
      onDropdownValueChange: setClientId
    }, {
      label: 'Projects'
    }]} />;
  }
}`,...(E=($=b.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var N,_,q;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Project detail (PoC)',
  args: {
    items: []
  },
  render: () => {
    const [clientId, setClientId] = useState('client-a');
    const client = clients.find(item => item.id === clientId) ?? clients[0];
    return <Breadcrumbs leading={{
      prefix: client.prefix
    }} items={[{
      label: client.label,
      showDropdown: true,
      dropdownOptions: clients,
      dropdownValue: clientId,
      onDropdownValueChange: setClientId
    }, {
      kind: 'back',
      id: 'back',
      label: 'Back to projects',
      onClick: () => window.alert('Navigate to /clients/client-a/projects')
    }, {
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
}`,...(q=(_=g.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var z,F,G;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    items: defaultTrail,
    leading: {
      prefix: 'A'
    }
  },
  render: args => <BreadcrumbBar {...args} />
}`,...(G=(F=f.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const he=["Default","WithoutAvatar","WithoutDropdown","Playground","LegacyTrail","ProjectsTrail","ProjectDetailTrail","Bar"];export{f as Bar,c as Default,d as LegacyTrail,u as Playground,g as ProjectDetailTrail,b as ProjectsTrail,p as WithoutAvatar,m as WithoutDropdown,he as __namedExportsOrder,we as default};
