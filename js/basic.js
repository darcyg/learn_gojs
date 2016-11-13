var G = go.GraphObject.make;
var diagram = G(go.Diagram, "myDiagramDiv");

diagram.add(G(
  go.Part,
  go.Panel.Position,
  //最简单的一种面板是“Position”（Panel.Position）。每个元素获得其正常大小，无论其默认大小或指定GraphObject.desiredSize
  //面板的大小刚好足以容纳所有元素
  {
    background: '#eee'
  },
  G(
    go.TextBlock,
    {
      text: '0, 0',
      background: '#394'
    }
  ),
  G(
    go.TextBlock,
    {
      text: '100, 100',
      background: '#394',
      position: new go.Point(100, 100)
    }
  ),
  G(
    go.TextBlock,
    {
      text: '0, 100',
      background: '#394',
      position: new go.Point(0, 100)
    }
  ),
  G(
    go.TextBlock,
    {
      text: '100, 000',
      background: '#394',
      position: new go.Point(100, 0)
    }
  )
));