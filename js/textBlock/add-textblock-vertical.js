var G = go.GraphObject.make;
var diagram = G(go.Diagram, "myDiagramDiv");

diagram.add(
  G(go.Part, "Vertical",
    G(go.TextBlock, { text: "a Text Block" }),
    G(go.TextBlock, { text: "a Text Block", stroke: "red" }),
    G(go.TextBlock, { text: "a Text Block", background: "lightblue" }),
    G(go.TextBlock, { text: "a Text Block", font: "bold 14pt serif" })
  ));