var G = go.GraphObject.make;

var myDiagram =
  G(go.Diagram, "myDiagramDiv",
    {
      initialContentAlignment: go.Spot.Center, // center Diagram contents
      "undoManager.isEnabled": true, // enable Ctrl-Z to undo and Ctrl-Y to redo
      layout: G(go.TreeLayout, // specify a Diagram.layout that arranges trees
        { angle: 0, layerSpacing: 35 })
    });

myDiagram.nodeTemplate =
  G(go.Node, "Horizontal",
    { background: "#44CCFF" },
    G(go.TextBlock, "Default Text",
      { margin: 12, stroke: "white", font: "bold 16px sans-serif" },
      new go.Binding("text", "name"))
  );

// define a Link template that routes orthogonally, with no arrowhead
myDiagram.linkTemplate =
  G(go.Link,
    { routing: go.Link.Orthogonal, corner: 5 },
    G(go.Shape, { strokeWidth: 3, stroke: "#555" })); // the link shape

var model = G(go.TreeModel);

model.nodeDataArray =
  [
    { key: "1",              name: "Don Meow"},
    { key: "2", parent: "1", name: "Demeter"},
    { key: "3", parent: "1", name: "Copricat"},
    { key: "4", parent: "3", name: "Jellylorum"},
    { key: "5", parent: "3", name: "Alonzo"},
    { key: "6", parent: "2", name: "Munkustrap"}
  ];

myDiagram.model = model;