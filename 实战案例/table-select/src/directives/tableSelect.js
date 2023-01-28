let isMouseOver = false;

const vTableSelect = {
  mounted (el, bindings) {
    vTableSelect.el = el;
    bindEvent(bindings.value);
  }
}

function bindEvent (state) {
  const { el } = vTableSelect;

  el.addEventListener('click', handleTDClick.bind(el, state), false);
  el.addEventListener('dblclick', handleTDDblclick.bind(el, state), false);
  el.addEventListener('mousedown', handleTDMouseDown.bind(el, state), false);
  window.addEventListener('click', handleWindowClick.bind(el, state), false);
}

// Event handlers
function handleTDClick (...[ state, e ]) {
  if (!isMouseOver) {
    const { target } = e;

    e.stopPropagation();
    restoreSelectedData(state);
    
    if (target.tagName === 'TD') {
      const {
        row,
        column
      } = getRowAndColumn(target);
      const selectedData = getTargetData(state.tableData, row, column);

      if (state.selectedData !== selectedData) {
        state.selectedData = selectedData;
        state.selectedData.selected = true;
      }
    }
  }
}

function handleTDDblclick (...[ state, e ]) {
  e.stopPropagation();

  const { target } = e;
  restoreSelectedData(state);

  if (target.tagName === 'TD') {
    const {
      row,
      column
    } = getRowAndColumn(target);

    state.selectedData = getTargetData(state.tableData, row, column);
    this.oInput = createInput(target, state.tableData, row, column);
  }

}

function handleTDMouseDown (...[ state, e ]) {
  e.stopPropagation();
  isMouseOver = false;

  const { target } = e;
  const _handleTDMouseOver = handleTDMouseOver.bind(this, state);
  restoreSelectedData(state);
  
  document.addEventListener('mouseover', _handleTDMouseOver, false);
  document.addEventListener('mouseup', handleTDMouseUp, false);

  if (target.tagName === 'TD') {
    const {
      row,
      column
    } = getRowAndColumn(target);

    this.startRow = row;
    this.startColumn = column;
  }

  function handleTDMouseUp () {
    document.removeEventListener('mouseover', _handleTDMouseOver, false);
    document.removeEventListener('mouseup', handleTDMouseUp, false);
    setTimeout(() => isMouseOver = false);
  }
}

function handleTDMouseOver (...[ state, e ]) {
  e.stopPropagation();
  isMouseOver = true;

  const { target } = e;

  if (target.tagName === 'TD') {
    const {
      row,
      column
    } = getRowAndColumn(target);

    this.endRow = row;
    this.endColumn = column;

    state.selectedAreaData = getSelectedAreaData(
      state.tableData,
      this.startRow,
      this.startColumn,
      this.endRow,
      this.endColumn
    );
  }

}

function handleWindowClick (state) {
  this.oInput && (state.selectedData.content = this.oInput.value);
  !isMouseOver && restoreSelectedData(state);
}

// Functions
function restoreSelectedData (state) {
  const { el } = vTableSelect;

  if (state.selectedData) {
    state.selectedData.selected = false;
  }

  if (state.selectedAreaData.length) {
    state.selectedAreaData.forEach(data => {
      data.selected = false;
    });

    state.selectedAreaData = [];
  }

  if (el.oInput) {
    el.oInput.remove();
    el.oInput = null;
  } 
}

function createInput(target, data, row, column) {
  const { content } = getTargetData(data, row, column);
  const oInput = document.createElement('input');
  oInput.type = 'text';
  oInput.value = content;
  oInput.onfocus = oInput.select;
  target.appendChild(oInput);
  oInput.focus();
  oInput.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    text-align: center;
    font-size: 16px;
  `;

  return oInput;
}

// utils
function getRowAndColumn (target) {
  const { dataset } = target;

  return {
    row: Number(dataset.row),
    column: Number(dataset.column)
  }
}

function getTargetData (data, row, column) {
  let target = null;

  data.forEach((_row, _rowIndex) => {
    if (row === _rowIndex) {
      _row.data.forEach((_column, _columnIndex) => {
        if (column === _columnIndex) {
          target = _column;
        }
      })
    }
  })

  return target;
}

function getSelectedAreaData (
  data,
  startRow,
  startColumn,
  endRow,
  endColumn
) {
  const selectedAreaData = [];

  if (startRow <= endRow) {
    for (let i = startRow; i <= endRow; i ++) {
      setSelectedAreaData(data[i].data, startColumn, endColumn);
    }
  } else {
    for (let i = startRow; i >= endRow; i --) {
      setSelectedAreaData(data[i].data, startColumn, endColumn);
    }
  }

  function setSelectedAreaData (rowData, startColumn, endColumn) {
    if (startColumn <= endColumn) {
      for (let j = startColumn; j <= endColumn; j ++) {
        pushColumnData(rowData[j]);
      }
    } else {
      for (let j = startColumn; j >= endColumn; j --) {
        pushColumnData(rowData[j]);
      }
    }

    function pushColumnData (columnData) {
      columnData.selected = true;
      selectedAreaData.push(columnData);
    }
  }

  return selectedAreaData;
}

export default vTableSelect;