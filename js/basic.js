var G = go.GraphObject.make;
var diagram = G(go.Diagram, "myDiagramDiv");

diagram.nodeTemplate =
  $(go.Node, "Auto",
    $(go.Shape,
      { figure: "RoundedRectangle",
        fill: "white" },
      //数据绑定是一种声明.
      //声明一个对象的属性值应该用于设置另一个对象的属性值。
      new go.Binding("fill", "color")),
    $(go.TextBlock,
      { margin: 5 },
      new go.Binding("text", "key"))
  );

var nodeDataArray = [
  { key: "Alpha", color: "lightblue" },
  { key: "Beta", color: "pink" }
];
var linkDataArray = [
  { from: "Alpha", to: "Beta" }
];
diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
