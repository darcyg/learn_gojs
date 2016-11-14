var G = go.GraphObject.make;
var diagram = G(go.Diagram, "myDiagramDiv");

diagram.add(
  G(go.Part, "Horizontal",
    G(go.Panel, "Vertical",
      { width: 150, defaultStretch: go.GraphObject.Horizontal },
      G(go.TextBlock, { text: "textAlign: 'left'", background: "lightgreen", margin: 2,
        textAlign: "left" }),
      G(go.TextBlock, { text: "textAlign: 'center'", background: "lightgreen", margin: 2,
        textAlign: "center" }),
      G(go.TextBlock, { text: "textAlign: 'right'", background: "lightgreen", margin: 2,
        textAlign: "right" })
    ),
    G(go.Panel, "Vertical",
      { width: 150, defaultStretch: go.GraphObject.None },
      G(go.TextBlock, { text: "alignment: Left", background: "lightgreen", margin: 2,
        alignment: go.Spot.Left }),
      G(go.TextBlock, { text: "alignment: Center", background: "lightgreen", margin: 2,
        alignment: go.Spot.Center }),
      G(go.TextBlock, { text: "alignment: Right", background: "lightgreen", margin: 2,
        alignment: go.Spot.Right })
    )
  ));