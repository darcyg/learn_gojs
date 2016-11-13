var G = go.GraphObject.make;
var diagram = G(go.Diagram, "myDiagramDiv");

diagram.nodeTemplate = G(
  go.Node,
  'Auto',
  new go.Binding('location', 'loc'),
  G(
    go.Shape,
    'RoundedRectangle',
    { fill: '#fff' },
    new go.Binding('fill', 'color')
  ),
  G(
    go.TextBlock,
    new go.Binding('text', 'text')
  )
)
diagram.linkTemplate = G(
  go.Link,
  G(
    go.Shape,
    new go.Binding('stroke', 'color'),
    new go.Binding('strokeWidth', 'thick')
  ),
  G(
    go.Shape,
    { toArrow: 'OpenTriangle', fill: null}
  )
)
var nodeDataArray = [
  { key:'1', text: 'hello1', color: '#345', loc: new go.Point(0, 0)},
  { key:'2', text: 'hello2', color: '#245', loc: new go.Point(0, 100)},
  { key:'3', text: 'hello3', loc: new go.Point(0, 200)}
]
var linkDataArray = [
  {from: '1', to: '2', color: '#452', thick: 2},
  {from: '2', to: '3', color: '#452', thick: 2},
]
diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);