var G = go.GraphObject.make;
var diagram = G(go.Diagram, "myDiagramDiv");

diagram.add(G(
  go.Part,
  go.Panel.Vertical,
  {
    background: '#eee'
  },
  G(
    go.TextBlock,
    {
      text: '左',
      background: '#394',
      alignment: go.Spot.Left
    }
  ),
  G(
    go.TextBlock,
    {
      text: '中',
      background: '#394',
      alignment: go.Spot.Center
    }
  ),
  G(
    go.TextBlock,
    {
      text: '右',
      background: '#394',
      alignment: go.Spot.Right
    }
  ),
  G(
    go.TextBlock,
    {
      text: '－－－－拉伸面板－－－－',
      background: '#394'
    }
  ),
  G(
    go.TextBlock,
    {
      text: '扩展背景',
      background: '#394',
      alignment: go.Spot.Right,
      stretch: go.GraphObject.Fill
    }
  )
));