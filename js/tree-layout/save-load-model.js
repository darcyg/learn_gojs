function init() {
  if (window.goSamples) goSamples();  // init for these samples -- you don't need to call this
  var G = go.GraphObject.make;

  myDiagram =
    G(go.Diagram, "myDiagramDiv",  // create a Diagram for the DIV HTML element
      {
        initialContentAlignment: go.Spot.Center,
        "LinkDrawn": maybeChangeLinkCategory,     // these two DiagramEvents call a
        "LinkRelinked": maybeChangeLinkCategory,  // function that is defined below
        "undoManager.isEnabled": true
      });

  // when the document is modified, add a "*" to the title and enable the "Save" button
  myDiagram.addDiagramListener("Modified", function(e) {
    var button = document.getElementById("SaveButton");
    if (button) button.disabled = !myDiagram.isModified;
    var idx = document.title.indexOf("*");
    if (myDiagram.isModified) {
      if (idx < 0) document.title += "*";
    } else {
      if (idx >= 0) document.title = document.title.substr(0, idx);
    }
  });

  // the regular node template, which supports user-drawn links from the main Shape
  myDiagram.nodeTemplate =
    G("Node", "Auto",
      { locationSpot: go.Spot.Center,
        layerName: "Background" },  // always have regular nodes behind Links
      new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
      G("Shape", "RoundedRectangle",
        { fill: "white", stroke: null,
          portId: "", fromLinkable: true, toLinkable: true, cursor: "pointer" },
        new go.Binding("fill", "color")),
      G("TextBlock",
        { margin: 8 },  // make some extra space for the shape around the text
        new go.Binding("text", "key"))  // the label shows the node data's key
    );

  // This is the template for a label node on a link: just an Ellipse.
  // This node supports user-drawn links to and from the label node.
  myDiagram.nodeTemplateMap.add("LinkLabel",
    G("Node",
      { selectable: false, avoidable: false,
        layerName: "Foreground" },  // always have link label nodes in front of Links
      G("Shape", "Ellipse",
        { width: 5, height: 5, stroke: null,
          portId: "", fromLinkable: true, toLinkable: true, cursor: "pointer" })
    ));

  // the regular link template, a straight blue arrow
  myDiagram.linkTemplate =
    G("Link",
      { relinkableFrom: true, relinkableTo: true, toShortLength: 2 },
      G("Shape", { stroke: "#2E68CC", strokeWidth: 2 }),
      G("Shape", { fill: "#2E68CC", stroke: null, toArrow: "Standard" })
    );

  // This template shows links connecting with label nodes as green and arrow-less.
  myDiagram.linkTemplateMap.add("linkToLink",
    G("Link",
      { relinkableFrom: true, relinkableTo: true },
      G("Shape", { stroke: "#2D9945", strokeWidth: 2 })
    ));


  // GraphLinksModel support for link label nodes requires specifying two properties.
  myDiagram.model =
    G(go.GraphLinksModel,
      { linkLabelKeysProperty: "labelKeys" });

  // Whenever a new Link is drawng by the LinkingTool, it also adds a node data object
  // that acts as the label node for the link, to allow links to be drawn to/from the link.
  myDiagram.toolManager.linkingTool.archetypeLabelNodeData =
  { category: "LinkLabel" };

  // this DiagramEvent handler is called during the linking or relinking transactions
  function maybeChangeLinkCategory(e) {
    var link = e.subject;
    var linktolink = (link.fromNode.isLinkLabel || link.toNode.isLinkLabel);
    e.diagram.model.setCategoryForLinkData(link.data, (linktolink ? "linkToLink" : ""));
  }

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