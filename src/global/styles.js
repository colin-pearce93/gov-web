export const lightBorder = (sides) => {
  let borderWidths = {};
  if (sides === "all" || (typeof sides === 'object' && sides[0] === "all")) {
    borderWidths["borderWidth"] = .1;
  } else {
    borderWidths["borderWidth"] = 0;
    sides.forEach((side) => {
      borderWidths["border" + side + "Width"] = .1;
    });
  }
  return(
    Object.assign({
      borderStyle: "solid",
      borderColor: "rgba(0, 0, 0, .2)"
    }, borderWidths)
  )
}

export const flexCenter = (RowColumn) => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: String(RowColumn)
  }
}

export const font = {
  color: "rgba(0, 0, 0, .8)",
  fontSize: 14
}
