const CHAR_CODES = {
  A: 65,
  Z: 90
}
function toCell() {
  return `
    <div class="cell" contenteditable></div>
  `
}

function toColumn(colName) {
  return `
    <div class="column">${colName}</div>
  `
}

function createRow(rowNumber, content) {
  return `
    <div class="row">
      <div class="row-info">${rowNumber}</div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CHAR_CODES.A + index)
}

export function createTable(rowsCount = 100) {
  const colsCount = CHAR_CODES.Z - CHAR_CODES.A
  const rows = []
  const cols = new Array(colsCount + 1)
    .fill('')
    .map(toChar)
    .map(toColumn)
    .join(' ')

  rows.push(createRow('', cols))

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
      .fill('')
      .map(toCell)
      .join('')
    rows.push(createRow(++i, cells))
  }
 
  return rows.join('')
}