var G = go.GraphObject.make;
var diagram = G(go.Diagram, "myDiagramDiv");

diagram.add(G(
  go.Part,
  'Horizontal',
  G(
    go.TextBlock,
    {
      text: 'A1'
    }
  ),
  G(
    go.TextBlock,
    {
      text: 'A2',
      stroke: '#492'
    }
  ),
  G(
    go.TextBlock,
    {
      text: 'A3',
      background: '#492'
    }
  ),
  G(
    go.TextBlock,
    {
      text: 'A4',
      font: 'bold 22px serif'
    }
  )
));