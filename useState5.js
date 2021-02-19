
let state = []
let setters = []
let fistRun = true
let cursor = 0

const createSetter = (cursor) => {
    return function (newVal) {
        state[cursor] = newVal
    }
}

export const useState = (initVal) => {
    if (fistRun) {
        state.push(initVal)
        setters.push(createSetter(cursor))
        fistRun = false
    }
    let setter = setters[cursor]
    let value = state[cursor]
    cursor++
    return [value, setter]
}