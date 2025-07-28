function SmilesInAdmonitions() {
  // Use danger admonitions for molecule structures
  document.querySelectorAll(".adm-danger").forEach(adm => {
    const heading = adm.querySelector(".adm-heading span")
    if (!heading) return

    const match = heading.textContent.split(/[|?]/)
    if (!match) return

    const bdy = adm.querySelector(".adm-body")
    if (!bdy) return

    const purpose = match[0].trim()
    if (purpose != "Smiles") return

    // Create SVG containers
    const smiles = match[1].trim()
    const svgNS = "http://www.w3.org/2000/svg"
    const svg = document.createElementNS(svgNS, "svg")

    if (smiles.includes(">")) {
      svg.setAttribute("Purpose", "Reaction")
    } else {
      svg.setAttribute("Purpose", "Molecule")
    }

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
