function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length===0){
    return "There is nobody waiting to be served!"
  } else
    { let person = line[0]
      line.shift()
      return `Currently serving ${person}.`
  }
}

function currentLine(line) {
  var result = "The line is currently:"
  if (line.length==0){
    return "The line is currently empty."
  } else {
    for (var i = 0; i < line.length-1; i++) {
      result+= ` ${i+1}. ${line[i]},`
    }
    result+=` ${line.length}. ${line[line.length-1]}`
  }
  return result
}
