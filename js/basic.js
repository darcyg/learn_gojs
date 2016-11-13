var G = go.GraphObject.make;
var diagram = G(go.Diagram, "myDiagramDiv");

diagram.add(G(
  go.Part,
  'Vertical',
  G(
    go.TextBlock,
    {
      text: '选中后，单击编辑，不可换行',
      background: '#492',
      margin: 5,
      editable: true,
      isMultiline: false
    }
  ),
  G(
    go.TextBlock,
    {
      text: '允许嵌入换行',
      background: '#492',
      margin: 5,
      editable: true
    }
  )
));