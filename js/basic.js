var G = go.GraphObject.make;
var diagram = G(go.Diagram, "myDiagramDiv");

diagram.add(G(
  go.Part,
  'Horizontal',
  G(
    go.Panel,
    'Vertical',
    {
      width: 150,
      defaultStretch: go.GraphObject.Horizontal
    },
    G(
      go.TextBlock,
      {
        text: '左对齐',
        background: '#492',
        textAlign: 'left',
        margin: 2
      }
    ),
    G(
      go.TextBlock,
      {
        text: '居中',
        background: '#492',
        textAlign: 'center',
        margin: 2
      }
    ),
    G(
      go.TextBlock,
      {
        text: '右对齐',
        background: '#492',
        textAlign: 'right',
        margin: 2
      }
    )
  ),
  G(
    go.Panel,
    'Vertical',
    {
      width: 150,
      defaultStretch: go.GraphObject.None
    },
    G(
      go.TextBlock,
      {
        text: '左对齐',
        background: '#492',
        alignment: go.Spot.Left,
        margin: 2
      }
    ),
    G(
      go.TextBlock,
      {
        text: '居中',
        background: '#492',
        alignment: go.Spot.Center,
        margin: 2
      }
    ),
    G(
      go.TextBlock,
      {
        text: '右对齐',
        background: '#492',
        alignment: go.Spot.Right,
        margin: 2
      }
    )
  )
));