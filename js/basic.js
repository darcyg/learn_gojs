var G = go.GraphObject.make;
var diagram = G(go.Diagram, "myDiagramDiv");

var style = {
  width: 55,
  height: 30,
  margin: 5,
  fill: '#555'
}
diagram.add(G(
  go.Node,
  'Auto',
  G(
    go.Shape,
    'RoundedRectangle',
    style
  ),
  G(
    go.TextBlock,
    {
      text: 'xy1'
    }
  )
));

diagram.add(G(
  go.Node,
  'Auto',
  G(
    go.Shape,
    'Rectangle',
    style
  ),
  G(
    go.TextBlock,
    {
      text: 'xy2'
    }
  )
));