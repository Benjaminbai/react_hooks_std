```
function useState(initialValue) {
  var state = initialValue;
  function setState(newState) {
    state = newState;
    render();
  }
  return [state, setState];
}
```
- 这样，state并不会发生变化
- 没有存储 state，每次渲染 Counter 组件的时候，state 都是新重置的
- 把 state 提取出来，存在 useState 外面

```
var _state;
function useState(initialValue) {
  _state = _state || initialValue;
  function setState(newState) {
    _state = newState;
    render();
  }
  return [state, setState];
}
```



```
let _deps;
function useEffect(callback, depArray) {
    const hasNoDep = !depArray // 判断依赖项是否存在
    const hasChangedDeps = _deps? !depArray.every((el,i) => el === _deps[i]) : true
    if(hasNoDeps || hasChangedDeps) {
        callback()
        _deps = depArray
    }
}
```
- 它俩都只能使用一次，因为只有一个 _state 和 一个 _deps
- 需要可以存储多个 _state 和 _deps。
- 初次渲染的时候，按照 useState，useEffect 的顺序，把 state，deps 等按顺序塞到 memoizedState 数组中。
- 更新的时候，按照顺序，从 memoizedState 中把上次记录的值拿出来

```
let memorizedState = []
let cursor = 0
function useState(initValue) {
    memorizedState[curosr] = memorizedState[curosr]|| initValue
    const currentCursor = cursor
    function setState(newState) {
        memorizedState[currentCursor] = newState
        render()
    }
    return [memorizedState[cursor++], setState]
}

function useEffect(callback, depArray) {
  const hasNoDeps = !depArray;
  const deps = memoizedState[cursor];
  const hasChangedDeps = deps
    ? !depArray.every((el, i) => el === deps[i])
    : true;
  
  if (hasNoDeps || hasChangedDeps) {
    callback();
    memoizedState[cursor] = depArray;
  }
  
  cursor++;
}
```