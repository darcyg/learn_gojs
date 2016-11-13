var G = go.GraphObject.make;
var diagram = G(go.Diagram, "myDiagramDiv");

diagram.add(G(
  go.Part,
  go.Panel.Horizontal,
  {
    position: new go.Point(500, 0),
    background: '#ddd',
    height: 150
  },
  G(
    go.Shape,
    {
      width: 30,
      height: 50,
      fill: '#394',
      alignment: go.Spot.Top //center bottom
    }
  ),
  G(
    go.Shape,
    {
      width: 30,
      height: 100,
      fill: '#394'
    }
  )
));