var G = go.GraphObject.make;
var diagram = G(go.Diagram, "myDiagramDiv");

diagram.nodeTemplate =
  G(go.Node, "Auto",
    G(go.Shape,
      { figure: "RoundedRectangle",
        fill: "white" }),
    G(go.TextBlock,
      { text: "hello!",
        margin: 5 })
  );

var nodeDataArray = [
  { key: "Alpha" },
  { key: "Beta" }
];
var linkDataArray = [
  { from: "Alpha", to: "Beta" }
];
diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);