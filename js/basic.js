var G = go.GraphObject.make;
var diagram = G(go.Diagram, "myDiagramDiv");

diagram.add(G(
  go.Node,
  'Auto',
  G(
    go.Shape,
    'RoundedRectangle',
    {
      fill: '#394'
    }
  ),
  G(
    go.TextBlock,
    'Hello!',
    {
      margin: 5,
      editable: true
    }
  )
));