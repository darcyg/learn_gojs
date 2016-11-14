var G = go.GraphObject.make;
var diagram = G(go.Diagram, "myDiagramDiv");


diagram.nodeTemplate =
  G(go.Node, "Auto",
    G(go.Shape,
      { fill: G(go.Brush, go.Brush.Linear, { 0: "white", 1: "lightblue" }),
        stroke: "darkblue", strokeWidth: 2 }),
    G(go.Panel, "Table",
      { defaultAlignment: go.Spot.Left, margin: 4 },
      G(go.RowColumnDefinition, { column: 1, width: 4 }),
      G(go.TextBlock,
        { row: 0, column: 0, columnSpan: 3, alignment: go.Spot.Center },
        { font: "bold 12pt sans-serif" },
        new go.Binding("text", "key")),
      G(go.TextBlock, "First: ",
        { row: 1, column: 0 }),
      G(go.TextBlock,
        { row: 1, column: 2 },
        new go.Binding("text", "prop1")),
      G(go.TextBlock, "Second: ",
        { row: 2, column: 0 }),
      G(go.TextBlock,
        { row: 2, column: 2 },
        new go.Binding("text", "prop2"))
    )
  );

diagram.model.nodeDataArray = [
  { key: "Alpha", prop1: "value of 'prop1'", prop2: "the other property" }
];