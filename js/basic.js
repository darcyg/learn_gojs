var G = go.GraphObject.make;
var diagram = G(go.Diagram, "myDiagramDiv");

diagram.add(G(
  go.Part,
  G(
    go.Panel,
    'Table',
    G(
      go.TextBlock,
      {
        text: '顶标题',
        row: 0,
        column: 0,
        columnSpan: 3,
        stretch: go.GraphObject.Horizontal,
        margin: 2,
        background: '#394'
      }
    ),
    G(
      go.TextBlock,
      {
        text: '侧标题',
        row: 1,
        column: 0,
        rowSpan:2,
        margin: 2,
        stretch: go.GraphObject.Vertical,
        background: '#394'
      }
    ),
    G(
      go.TextBlock,
      {
        text: '一行一列',
        row: 1,
        column: 1,
        margin: 2,
        background: '#394'
      }
    ),
    G(
      go.TextBlock,
      {
        text: '一行两列',
        row: 1,
        column: 2,
        margin: 2,
        background: '#394'
      }
    ),
    G(
      go.TextBlock,
      {
        text: '二行一列',
        row: 2,
        column: 1,
        margin: 2,
        background: '#394'
      }
    ),
    G(
      go.TextBlock,
      {
        text: '二行三列',
        row: 2,
        column: 3,
        margin: 2,
        background: '#394'
      }
    ),
    G(
      go.TextBlock,
      {
        text: '结尾',
        row: 3,
        column: 2,
        columnSpan: 2,
        margin: 2,
        background: '#394'
      }
    )
  )
));