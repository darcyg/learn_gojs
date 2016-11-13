var G = go.GraphObject.make;
var diagram = G(go.Diagram, "myDiagramDiv");

diagram.add(G(
  go.Part,
  'Horizontal',
  {
    background: '#ccc',
    height: 90,
    defaultAlignment: go.Spot.Bottom
  },
  G(
    go.Shape,
    {
      width: 30,
      margin: 3,
      fill: '#394',
      height: 60
    }
  ),
  G(
    go.Shape,
    {
      width: 30,
      margin: 3,
      fill: '#394',
      height: 20
    }
  ),
  G(
    go.Shape,
    {
      width: 30,
      margin: 3,
      fill: '#394',
      height: 40
    }
  ),
  G(
    go.Shape,
    {
      width: 30,
      margin: 3,
      fill: '#394',
      stretch: go.GraphObject.Fill
    }
  )
));