var G = go.GraphObject.make;
var diagram = G(go.Diagram, "myDiagramDiv");

diagram.add(G(
  go.Part,
  'Table',
  {
    background: '#ddd'
  },
  G(
    go.TextBlock,
    {
      text: '这里的文字会重叠',
      row: 0,
      column: 0
    }
  ),
  G(
    go.TextBlock,
    {
      text: '叠重会字文的里这',
      row: 0,
      column: 0
    }
  )
));