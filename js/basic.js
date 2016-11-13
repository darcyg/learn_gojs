var G = go.GraphObject.make;
var diagram = G(go.Diagram, "myDiagramDiv");

diagram.add(G(
  go.Part,
  go.Panel.Table,
  //表板中的每个对象被放入由的值索引的GraphObject.row和GraphObject.column。
  //面板会看行和列的所有在面板中的对象，以确定该表应多少行和列。
  G(
    go.TextBlock,
    {
      text: '一行一列',
      row: 0,
      column: 0,
      margin: 2,
      background: '#493'
    }
  ),
  G(
    go.TextBlock,
    {
      text: '一行二列',
      row: 0,
      column: 1,
      margin: 2,
      background: '#493'
    }
  ),
  G(
    go.TextBlock,
    {
      text: '二行一列',
      row: 1,
      column: 0,
      margin: 2,
      background: '#493'
    }
  ),
  G(
    go.TextBlock,
    {
      text: '二行三列',
      row: 1,
      column: 2,
      margin: 2,
      background: '#493'
    }
  )
));