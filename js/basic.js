var G = go.GraphObject.make;
var diagram = G(go.Diagram, "myDiagramDiv");

diagram.add(G(  //GraphObject.make是一个函数的第一个参数必须是一个类类型。
  go.Node,
  go.Panel.Auto,
  G(
    go.Shape,
    'RoundedRectangle',
    {
      fill: '#394'
    }
  ),
  G(
    go.TextBlock,
    {
      text: 'Hello!',
      margin: 5,
      editable: true
    }
  )
));
