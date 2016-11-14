var G = go.GraphObject.make;
var diagram = G(go.Diagram, "myDiagramDiv");
// the node template describes how each Node should be constructed
diagram.nodeTemplate =
  G(go.Node, "Auto",  // the Shape automatically fits around the TextBlock
    G(go.Shape, "RoundedRectangle",
      // bind Shape.fill to Node.data.color
      new go.Binding("fill", "color")),
    G(go.TextBlock,
      { margin: 3 },  // some room around the text
      // bind TextBlock.text to Node.data.key
      new go.Binding("text", "key"))
  );

// the Model holds only the essential information describing the diagram
diagram.model = new go.GraphLinksModel(
  [ // a JavaScript Array of JavaScript objects, one per node
    { key: "Alpha", color: "lightblue" },
    { key: "Beta", color: "orange" },
    { key: "Gamma", color: "lightgreen" },
    { key: "Delta", color: "pink" }
  ],
  [ // a JavaScript Array of JavaScript objects, one per link
    { from: "Alpha", to: "Beta" },
    { from: "Alpha", to: "Gamma" },
    { from: "Beta", to: "Beta" },
    { from: "Gamma", to: "Delta" },
    { from: "Delta", to: "Alpha" }
  ]);
