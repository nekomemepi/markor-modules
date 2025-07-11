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

    /* TODO:
        'data-smiles-product-weights'
        'data-smiles-reactant-weights'
        'data-smiles-reaction-options'
        'data-smiles-reagent-weights'
        'data-smiles-theme'
        'data-smiles-weights'
    */

    // Fetch custom options
    fetch('./smiles-opts-custom.json')
      .then(response => {
        if (!response.ok) {
          console.info('no smiles-opts-custom.json')
          return {}
        }
        return response.json()
      })
      .then(jsonData => {
        const smilesOptions = jsonData
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error)
      })

    // Parse the Molecule options
    const smiles = match[1].trim()
    const parseInt(match[2]) && (smilesOptions.width = match[2].trim)
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

  // for some reason data-smiles-options works for img but not svg
  const svgs = document.querySelectorAll("svg[data-smiles]")
  svgs.forEach((svg) => {
    window.alert(svg.getAttribute("data-smiles"))
  })

  // Select all svg elements with the id 'data-smiles'
  const htmlElements = document.querySelectorAll('#data-smiles')
  htmlElements.forEach(element => {
      const width = parseFloat(element.getAttribute('width'))
      if (!isNaN(width)) {
          element.style.transform = `scale(${width})`
          element.style.transformOrigin = 'top left'
      }
  })
}

}
