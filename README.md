# react_hooks_std

## useEffect
    useEffect用于处理大多数副作用，其中的回调函数会在render执行之后在调用，确保不会阻止浏览器的渲染

## useLayoutEffect
    如果副作用是跟DOM相关的，就需要使用useLayoutEffect。useLayoutEffect中的副作用会在DOM更新之后同步执行

## useReducer
1. useReducer非常有用，能够替代一部分redux的功能
2. useReducer接收两个参数，一个是reducer函数，跟redux中的reducer是一样的
3. 另外一个是初始的状态值
4. 返回的是一个数组，数组中的第一个元素是状态值，第二个元素是dispatch函数，你可以调用dispatch函数，来触发state的更新

## useRef
    借助useRef，我们可以在函数组件中获取组件或DOM节点的引用


# React Hooks简单原理：只是数组
1. react hooks 的使用有两个原则：
    - 不要再循环，条件判断，函数嵌套中使用hooks
    - 只能在函数组件中使用
    - 第二个原则很好理解，hooks的提出主要是为了解决class组件的一系列问题；但是第一个原则却让人感到困惑
```
// 简单实现
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
    if(firstRun) {
        state.push(initVal)
        setters.push(createSetter(cursor))
        firstRun = false
    }
    const setter = setters[cursor]
    const value = state[cursor]
    count++ 
    return [value, setter]
}
```

[hooks study resources](https://zhuanlan.zhihu.com/p/51356920)
