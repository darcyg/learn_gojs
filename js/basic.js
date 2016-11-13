var G = go.GraphObject.make;
var diagram = G(go.Diagram, "myDiagramDiv");

var node1 = G(
  go.Node,
  'Auto',
  G(
    go.Shape,
    {
      fill: '#493'
    }
  ),
  G(
    go.TextBlock,
    {
      text: 'node1'
    }
  )
);
diagram.add(node1);
var node2 = G(
  go.Node,
  'Auto',
  G(
    go.Shape,
    {
      fill: '#943'
    }
  ),
  G(
    go.TextBlock,
    {
      text: 'node2'
    }
  )
);
diagram.add(node2);
diagram.add(G(
  go.Link,
  {
    fromNode: node1,
    toNode: node2
  },
  G(
    go.Shape
  )
));