function SmilesInAdmonitions() {
  // Use danger admonitions for molecule structures
  const admonitions = document.querySelectorAll(".adm-danger")

  admonitions.forEach((admonition, index) => {
    const heading = admonition.querySelector(".adm-heading span")
    if (!heading) return

    const match = heading.textContent.split(/[|?]/)
    if (!match) return

    const purpose = match[0].trim()
    if (purpose != "Molecule") return

    // Parse the Molecule options
    const smiles = match[1].trim()
    const svgWidth = 600
    const svgId = `smiles-svg-${index}`

    // Create DIV/SVG containers
    const divContainer = document.createElement("div")
    divContainer.id = svgId

    const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svgElement.id = svgId
    svgElement.setAttributeNS("data-smiles", smiles)

    divContainer.appendChild(svgElement)
    admonition.appendChild(divContainer)
  })

  try {
    SmiDrawer.apply()
  } catch (error) {
    window.alert(`Failed to parse SMILES "${smiles}": ` + error)
  }

  // Scale svg elements with the id 'data-smiles'
  const svgs = document.querySelectorAll('svg[data-smiles]')
  svgs.forEach(svg => {
    const {x, y, width, height} = svg.viewBox.baseVal
    const scale = 600 / width

    svg.setAttribute('transform',`scale(${scale})`);
  })
}

}
