function SmilesInAdmonitions() {
  // Use danger admonitions for molecule structures
  const admonitions = document.querySelectorAll('.adm-danger')

  admonitions.forEach((admonition, index) => {
    const heading = admonition.querySelector('.adm-heading span')
    if (!heading) return

    const match = heading.textContent.split(/[|:]/)
    if (!match) return

    const purpose = match[0].trim()
    if (purpose != "Molecule") return

    const smiles = match[1].trim()
    const width = match[2] ? parseInt(match[2]) : 500
    const height = match[3] ? parseInt(match[3]) : 150
    const align = match[4] || 'center'
    const canvasId = `smiles-canvas-${index}`

    // Create canvas
    const canvas = document.createElement('canvas')
    canvas.id = canvasId
    canvas.width = width
    canvas.height = height
    canvas.style.display = 'block'
    canvas.style.margin = align === 'center' ? '1em auto' : align === 'right' ? '1em 0 1em auto' : '1em 0'

    admonition.appendChild(canvas)

    const drawer = new SmilesDrawer.Drawer({
      terminalCarbons: true,
      explicitHydrogens: true,
      atomVisualization: 'default',
      padding: 5.0,
      width: 400,
      height: 130,
      themes: {
        light: {
          background: '#fdf6e3'
        }
      }
    })

    SmilesDrawer.parse(smiles, function (tree) {
      drawer.draw(tree, canvasId, 'light', false)
    }, function (err) {
      console.log(`Failed to parse SMILES "${smiles}":`, err)
    })
  })
}
