function SmilesInAdmonitions() {
  // Use danger admonitions for molecule structures
  const admonitions = document.querySelectorAll('.adm-danger')

  admonitions.forEach((admonition, index) => {
    const heading = admonition.querySelector('.adm-heading span')
    if (!heading) return

    const match = heading.textContent.split(/[|;]/)
    if (!match) return

    const purpose = match[0].trim()
    if (purpose != "Molecule") return

    const smiles = match[1].trim()
    const cwidth = match[2] ? parseInt(match[2]) : 600
    const cheight = match[3] ? parseInt(match[3]) : 300
    const align = match[4] || 'center'
    const svgId = `smiles-svg-${index}`

    // Create SVG container
    const svgContainer = document.createElement('div')
    svgContainer.id = svgId
    svgContainer.style.width = cwidth + 'px'
    svgContainer.style.height = cheight + 'px'
    svgContainer.style.display = 'block'
    svgContainer.style.margin = align === 'center' ? '1em auto' : align === 'right' ? '1em 0 1em auto' : '1em 0'

    admonition.appendChild(svgContainer)

    // Set up the SVG Drawer
    const drawer = new SmilesDrawer.SvgDrawer({
      terminalCarbons: true,
      explicitHydrogens: true,
      atomVisualization: 'default',
      padding: 5.0,
      width: cwidth,
      height: cheight,
      themes: {
        light: {
          background: '#fdf6e3'
        }
      }
    })

    SmilesDrawer.parse(smiles, function (tree) {
      // Draw SVG and set innerHTML of container
      const svg = drawer.draw(tree, svgId, 'light', false)
      svgContainer.innerHTML = svg.outerHTML
    }, function (err) {
      window.alert(`Failed to parse SMILES "${smiles}": ` + err)
    })
  })
}
