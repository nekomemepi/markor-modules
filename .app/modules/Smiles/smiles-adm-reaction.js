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
    svgContainer.setAttribute('data-smiles', smiles)
    svgContainer.setAttribute('data-smiles-options', "{'width': 600, 'height': 300 }")
    svgContainer.style.overflow-x = auto
    svgContainer.style.display = 'block'

    admonition.appendChild(svgContainer)

    try {
      SmiDrawer.alert()
    } catch (error) {
      window.alert(`Failed to parse SMILES "${smiles}": ` + error)
    }
  })
}
