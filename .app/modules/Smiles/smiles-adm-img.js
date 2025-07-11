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

    /* TODO: Fetch custom options
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
    */

    if (typeof smilesOptions === 'undefined') {
      const smilesOptions = { "width": 600, "height": 300, "padding": 1.0}
    }

    /* TODO:
        'data-smiles-product-weights'
        'data-smiles-reactant-weights'
        'data-smiles-reaction-options'
        'data-smiles-reagent-weights'
        'data-smiles-theme'
        'data-smiles-weights'
    */

    // Parse the Molecule options
    const smiles = match[1].trim()
    const parseInt(match[2]) && (smilesOptions.width = match[2].trim)
    const parseInt(match[3]) && (smilesOptions.height = match[3].trim)
    const imgId = `smiles-img-${index}`

    const imgElement = document.createElement("img")
    imgElement.id = imgId
    imgElement.setAttribute("data-smiles", smiles)
    imgElement.setAttribute("data-smiles-options", smilesOptions)

    admonition.appendChild(divContainer)
  })

  try {
    SmiDrawer.apply()
  } catch (error) {
    window.alert(`Failed to parse SMILES "${smiles}": ` + error)
  }
}
