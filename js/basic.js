var G = go.GraphObject.make;
var diagram = G(go.Diagram, "myDiagramDiv");

diagram.add(G(
  go.Part,
  G(
    go.Panel,
    'Table',
    {
      defaultAlignment: go.Spot.Left
    },
    G(
      go.RowColumnDefinition,
      {
        column: 0,
        width: 100
      }
    ),
    G(
      go.RowColumnDefinition,
      {
        column:1,
        width: 15,
      }
    ),
    G(
      go.Panel,
      'Auto',
      {
        row: 0,
        column: 0,
        alignment: go.Spot.Left
      },
      G(
        go.Shape,
        'RoundedRectangle',
        {
          fill: '#493'
        }
      ),
      G(
        go.TextBlock,
        'auot panel'
      )
    ),
    G(
      go.TextBlock,
      {
        text: 'alignment: left',
        row: 0,
        column:2
      }
    ),
    G(
      go.Panel,
      'Auto',
      {
        row: 1,
        column: 0,
        alignment: go.Spot.Center
      },
      G(
        go.Shape,
        'RoundedRectangle',
        {
          fill: '#493'
        }
      ),
      G(
        go.TextBlock,
        'auto panel'
      )
    ),
    G(
      go.TextBlock,
      {
        text: 'alignment: center',
        row:1,
        column: 2
      }
    ),
    G(
      go.Panel,
      'Auto',
      {
        row:2,
        column: 0,
        alignment: go.Spot.Right
      },
      G(
        go.Shape,
        'RoundedRectangle',
        {
          fill: '#493'
        }
      ),
      G(
        go.TextBlock,
        'auto panel'
      )
    ),
    G(
      go.TextBlock,
      {
        text: 'alignment: right',
        row: 2,
        column: 2
      }
    )
  )
));