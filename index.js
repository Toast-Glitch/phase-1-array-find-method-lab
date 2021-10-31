//return the winning year from the array
function superbowlWin(Array) {
     const win = Array.find(Object => Object.result === "W")
     if (win != undefined) {return win.year} return undefined
}