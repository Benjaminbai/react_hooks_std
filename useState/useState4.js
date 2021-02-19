let state = []
let setters = []
let firstRun = true
let cursor = 0

function createSetter(cursor) {
    return function setterWithCursor(newVal) {
        state[cursor] = newVal
    }
}

export function useState(initVal) {
    if (firstRun) {
        state.push(initVal)
        setters.push(createSetter(cursor))
        firstRun = false
    }
    const setter = setter[cursor]
    const value = state[curssor]
    cursor++
    return [value, setter]
}