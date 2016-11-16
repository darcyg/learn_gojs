function init() {
  var G = go.GraphObject.make;

  myDiagram =
    G(go.Diagram, "myDiagramDiv",  // create a Diagram for the DIV HTML element
      {
        initialContentAlignment: go.Spot.Center,
        "undoManager.isEnabled": true,
        layout: G(go.TreeLayout, // specify a Diagram.layout that arranges trees
          { angle: 0, layerSpacing: 35 })
      });

  // when the document is modified, enable the "Save" button
  myDiagram.addDiagramListener("Modified", function(e) {
    var button = document.getElementById("SaveButton");
    if (button) button.disabled = !myDiagram.isModified;
  });

  myDiagram.nodeTemplate =
    G(go.Node, "Auto",
      G(go.Shape,
        "Ellipse",
        { width: 60, height: 40, stroke: "black", strokeWidth: 2 },
        new go.Binding("fill", "background")),

      G(go.TextBlock, "Default Text",
        { margin: 12, stroke: "white", font: "bold 16px sans-serif" },
        new go.Binding("text", "key"))
    );

// define a Link template that routes orthogonally, with no arrowhead
  myDiagram.linkTemplate =
    G(go.Link,
      { routing: go.Link.Orthogonal, corner: 5 },
      G(go.Shape, { strokeWidth: 3, stroke: "#555" })); // the link shape


  var model = G(go.TreeModel);
  model.nodeDataArray =
    [
      { key: "build",              background: "#44CCFF"},
      { key: "dev", parent: "build", background: "#44CCFF"},
      { key: "sit", parent: "build", background: "#44CCFF"},
      { key: "uat", parent: "sit", background: "#44CCFF"},
      { key: "prod", parent: "uat", background: "#44CCFF"}
    ];

  myDiagram.model = model;

  load();
}

// Show the diagram's model in JSON format
function save() {
  document.getElementById("mySavedModel").value = myDiagram.model.toJson();
  myDiagram.isModified = false;
}

function load() {
  myDiagram.model = go.Model.fromJson(document.getElementById("mySavedModel").value);
}

init()