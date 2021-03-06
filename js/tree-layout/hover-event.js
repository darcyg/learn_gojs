function init() {
  var G = go.GraphObject.make;

  myDiagram =
    G(go.Diagram, "myDiagramDiv",  // create a Diagram for the DIV HTML element
      {
        initialContentAlignment: go.Spot.Center,
        "undoManager.isEnabled": true,
        allowDelete: false,
        layout: G(go.TreeLayout, // specify a Diagram.layout that arranges trees
          {angle: 0, layerSpacing: 35})
      });

  // when the document is modified, enable the "Save" button
  myDiagram.addDiagramListener("Modified", function(e) {
    var button = document.getElementById("SaveButton");
    if(button) button.disabled = !myDiagram.isModified;
  });

  myDiagram.nodeTemplate =
    G(go.Node, "Auto",
      {
        cursor: "pointer",
        click: function(e, obj) {
          window.open("http://baidu.com");
        }
      },
      G(go.Shape,
        "Ellipse",
        {name: "SHAPE", width: 80, height: 60, stroke: "black", strokeWidth: 2},
        new go.Binding("figure", "fig"),
        new go.Binding("fill", "background")),


      G(go.Panel, "Vertical",
        G(go.TextBlock, "-",
          {margin: 0, stroke: "white", font: "bold 16px sans-serif"},
          new go.Binding("text", "key")),

        G(go.TextBlock, "-",
          {name: "buildNumber", margin: 0, stroke: "white", font: "bold 16px sans-serif"},
          new go.Binding("text", "parent"))
      ),
      {
        mouseEnter: function(e, obj, prev) {  // change group's background brush
          console.log('enter')
          console.log(obj.part.data.key)
          var shape = obj.part.findObject("SHAPE");
          var buildNumber = obj.part.findObject("buildNumber");
          if(shape) shape.fill = "red";
          if(buildNumber) buildNumber.text = "abc";
        },
        mouseLeave: function(e, obj, next) {  // restore to original brush
          console.log('leave')
          console.log(obj.part.data.key)
          var shape = obj.part.findObject("SHAPE");
          if(shape) shape.fill = "#44CCFF";
          var buildNumber = obj.part.findObject("buildNumber");
          if(buildNumber) buildNumber.text = obj.part.data.parent;
        }
      }
    );

// define a Link template that routes orthogonally, with no arrowhead
  myDiagram.linkTemplate =
    G(go.Link,
      {routing: go.Link.Orthogonal, corner: 5},
      G(go.Shape, {strokeWidth: 3, stroke: "#555"})); // the link shape

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