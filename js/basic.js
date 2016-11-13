var G = go.GraphObject.make;
var diagram = G(go.Diagram, "myDiagramDiv");

var node = new go.Node(go.Panel.Auto);
var shape = new go.Shape();
shape.figure = 'RoundedRectangle';
shape.fill = '#394';
node.add(shape);
var textBlock = new go.TextBlock();
textBlock.text = 'Hello!';
textBlock.margin = 5;
textBlock.editable = true;
node.add(textBlock);
diagram.add(node);