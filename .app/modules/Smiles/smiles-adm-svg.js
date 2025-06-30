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

    const smiles = match[1].trim()
    const width = match[2] ? parseInt(match[2]) : 600
    const height = match[3] ? parseInt(match[3]) : 300
    const align = match[4] || "center"
    const svgId = `smiles-svg-${index}`

    // Create SVG container
    const svgContainer = document.createElement("div")
    svgContainer.id = svgId
    svgContainer.width = width
    svgContainer.height = height
    svgContainer.setAttribute("data-smiles", smiles)
    svgContainer.setAttribute("data-smiles-options", '{"width": 500, "height": 250 }')
    svgContainer.style.overflowX = "auto"
    svgContainer.style.display = "block"

    admonition.appendChild(svgContainer)
  })

  try {
    SmiDrawer.apply()
  } catch (error) {
    window.alert(`Failed to parse SMILES "${smiles}": ` + error)
  }
}
