var G = go.GraphObject.make;
var diagram = G(go.Diagram, "myDiagramDiv");


diagram.add(G(
  go.Part,
  'Horizontal',
  G(
    go.TextBlock,
    {
      text: '背景色',
      background: '#492',
      margin: 5
    }
  ),
  G(
    go.TextBlock,
    {
      text: '长100 * 宽30',
      background: '#492',
      margin: 5,
      width: 100,
      height: 30
    }
  ),
  G(
    go.TextBlock,
    {
      text: '长60宽30',
      background: '#492',
      margin: 5,
      width: 60,
      height: 30
    }
  ),
  G(
    go.TextBlock,
    {
      text: '长60宽20',
      background: '#492',
      margin: 5,
      width: 60,
      height: 20
    }
  ),
  G(
    go.TextBlock,
    {
      text: '长60宽10',
      background: '#492',
      margin: 5,
      width: 60,
      height: 10
    }
  )
));