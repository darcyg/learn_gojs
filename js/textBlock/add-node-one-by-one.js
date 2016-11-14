var G = go.GraphObject.make;
var diagram = G(go.Diagram, "myDiagramDiv");
diagram.add(
  G(go.Node, "Auto",
    G(go.Shape, "Ellipse", { fill: "lightblue" }),
    G(go.TextBlock, "Hello!", { margin: 5 })
  ));

diagram.add(
  G(go.Node, "Auto",
    G(go.Shape, "Ellipse", { fill: "lightblue" }),
    G(go.TextBlock, "Hello2!", { margin: 5 })
  ));

diagram.add(
  G(go.Node, "Auto",
    G(go.Shape, "Ellipse", { fill: "lightblue" }),
    G(go.TextBlock, "Hello2!", { margin: 5 })
  ));