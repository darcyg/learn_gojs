var G = go.GraphObject.make;
var diagram = G(go.Diagram, "myDiagramDiv");

diagram.add(G(
  go.Part,
  'Horizontal',
  G(
    go.Shape,
    {
      width:100,
      height:40,
      margin:2,
      fill: '#394',
      strokeWidth: 0
    }
  ),
  G(
    go.Shape,
    {
      width:100,
      height:40,
      fill: null,
      stroke: '#394',
      strokeWidth: 4
    }
  ),
  G(
    go.Shape,
    {
      width: 100,
      height:40,
      fill: null,
      stroke: '#439',
      strokeWidth: 5,
      background: '#394'
    }
  )
));