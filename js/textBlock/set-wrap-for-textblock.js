var G = go.GraphObject.make;
var diagram = G(go.Diagram, "myDiagramDiv");


diagram.add(
  G(go.Part, "Vertical",
    G(go.TextBlock, { text: "a Text Block", background: "lightgreen", margin: 2 }),
    G(go.TextBlock, { text: "a Text Block", background: "lightgreen", margin: 2,
      width: 50, wrap: go.TextBlock.None }),
    G(go.TextBlock, { text: "a Text Block", background: "lightgreen", margin: 2,
      width: 50, wrap: go.TextBlock.WrapDesiredSize }),
    G(go.TextBlock, { text: "a Text Block", background: "lightgreen", margin: 2,
      width: 50, wrap: go.TextBlock.WrapFit })
  ));