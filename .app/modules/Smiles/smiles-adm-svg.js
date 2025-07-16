function SmilesInAdmonitions() {
  // Use danger admonitions for molecule structures
  document.querySelectorAll(".adm-danger").forEach(admonition => {
    const heading = admonition.querySelector(".adm-heading span")
    if (!heading) return

    const match = heading.textContent.split(/[|?]/)
    if (!match) return

    const purpose = match[0].trim()
    if (purpose != "Reaction") return

    // Create DIV/SVG containers
    const smiles = match[1].trim()
    const standard = "http://www.w3.org/2000/svg"
    const divElement = document.createElement("div")
    const svgElement = document.createElementNS(standard, "svg")

    svgElement.setAttribute("data-smiles", smiles)
    divElement.appendChild(svgElement)
    admonition.appendChild(divElement)
  })

  try {
    SmiDrawer.apply()
  } catch (error) {
    window.alert(`Failed to parse SMILES "${smiles}": ` + error)
  }

  // Scale svg elements with the id "data-smiles"
  document.querySelectorAll("svg[data-smiles]").forEach(svg => {
    const {x, y, width, height} = svg.viewBox.baseVal
    const scale = width / 800

    svg.setAttribute("transform-origin","0 0")
    svg.setAttribute("transform",`scale(${scale}, 1.0)`)
  })
}
