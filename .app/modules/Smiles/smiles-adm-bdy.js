function SmilesInAdmonitions() {
  // Use danger admonitions for molecule structures
  document.querySelectorAll(".adm-danger").forEach(adm => {
    const heading = adm.querySelector(".adm-heading span")
    if (!heading) return

    const match = heading.textContent.split(/[|?]/)
    if (!match) return

    const bdy = adm.querySelector(".adm-body")
    if (!bdy) return

    let smiles = ""

    const purpose = match[0].trim()
    if (purpose == "Smiles") {
      smiles = match[1].trim()
    } else if (purpose == "Search") {
      let search = match[1].trim()
      fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/"${search}"/property/IsomericSMILES/TXT`)
      .then ((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.text()
      })
      .then ((text) => {
        smiles = text.trim()
        heading.textContent += ` | Smiles ? "${smiles}"`
      })
    } else {
      return
    }

    if (smiles.includes(">")) {
      svg.setAttribute("Purpose", "Reaction")
    } else {
      svg.setAttribute("Purpose", "Molecule")
    }

    const svgNS = "http://www.w3.org/2000/svg"
    const svg = document.createElementNS(svgNS, "svg")
    svg.setAttribute("data-smiles", smiles)
    bdy.appendChild(svg)
  })

  try {
    SmiDrawer.apply()
  } catch (error) {
    window.alert(`Failed to parse SMILES "${smiles}": ` + error)
  }

  // Scale svg elements with the attribute "data-smiles"
  document.querySelectorAll("svg[data-smiles]").forEach(svg => {
    const par = svg.parentElement
    const purpose = svg.getAttribute("Purpose")
    const {x, y, width, height} = svg.viewBox.baseVal
    const scale = width / ((purpose == "Reaction") ? 800 : 500)
    const hight = ((purpose == "Reaction") ? 80 : 140) / height

    svg.setAttribute("transform-origin","0 0")
    svg.setAttribute("transform",`scale(${scale})`)
    par.style.height = (height * hight) + "px"
    window.alert("scale: " + scale + "\nhight: " + hight)
  })
}
