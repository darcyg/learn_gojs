var G = go.GraphObject.make;
var diagram = G(go.Diagram, "myDiagramDiv");

diagram.nodeTemplate =
  G(go.Node, "Auto",
    { locationSpot: go.Spot.Center },
    new go.Binding("location", "loc").makeTwoWay(),  // TwoWay Binding
    G(go.Shape, "RoundedRectangle",
      { fill: "lightblue", stroke: "blue", strokeWidth: 2 }),
    G(go.TextBlock,
      { margin: 5 },
      new go.Binding("text", "key"))
  );

var nodeDataArray = [
  { key: "Alpha", loc: new go.Point(0, 0) }
];
diagram.model = new go.GraphLinksModel(nodeDataArray);

shiftNode = (function() {  // define a function named "shiftNode" callable by onclick
  // all model changes should happen in a transaction
  diagram.startTransaction("shift node");
  var data = diagram.model.nodeDataArray[0];  // get the first node data
  var node = diagram.findNodeForData(data);   // find the corresponding Node
  var p = node.location.copy();  // make a copy of the location, a Point
  p.x += 10;
  if (p.x > 200) p.x = 0;
  // changing the Node.location also changes the data.loc property due to TwoWay binding
  node.location = p;
  // show the updated location held by the "loc" property of the node data
  document.getElementById("bindTwoWayData").textContent = data.loc.toString();
  diagram.commitTransaction("shift node");
});
shiftNode();  // initialize everything
