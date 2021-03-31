
let state = []
let setter = []
let firstRun = true
let cursor = 0

const createSetter = () => {
    return function(newVal) {
        state[cursor] = newVal
    }
}

export const useState = () => {
    if(firstRun) {
        state.push(initVal)
        setter.push(createSetter(cursor))
        firstRun = false
    }

    let setter = setter[cursor]
    let value = state[cursor]
    cursor++
    return [value, setter]
}