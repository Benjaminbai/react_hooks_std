let state = [], setters = [], cursor = 0, firstRun = true

function createSetter(cursor) {
    return function setterWithCursor(newVal) {
        state[cursor] = newVal
    }
}

export function useState(initVal) {
    if(firstRun) {
        state.push(initVal)
        setters.push(createSetter(cursor))
        firstRun = false
    }
    cursor++
    return [state[cursor], setters[cursor]]
}