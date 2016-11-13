var G = go.GraphObject.make;
var diagram = G(go.Diagram, "myDiagramDiv");

diagram.nodeTemplate = G(
  go.Node,
  'Auto',
  new go.Binding('location', 'loc', go.Point.Parse),
  G(
    go.Shape,
    'RoundedRectangle',
    {
      fill: '#ddd'
    }
  ),
  G(
    go.TextBlock,
    {
      margin: 5
    },
    new go.Binding('text', 'key')
  )
);
diagram.linkTemplate = G(
  go.Link,
  G(
    go.Shape,
    {
      toArrow: 'OpenTriangle',
      fill: null
    }
  )
);
var nodeDataArray = [
  { key: 'apple', loc: '0 0'},
  { key: 'object-c', loc: '0 150'}
];

var linkDataArray = [
  { from: 'apple', to: 'object-c'}
];

diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
