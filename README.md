## Basics
### Important Functions in Redux
- `compose`
```javascript
import { compose } from 'redux';

const makeLouder = string => string.toUpperCase();
// @ts-ignore
const repeatThreeTimes = string => string.repeat(3);
const embolden = string => string.bold();

const makeLouderAndRepeatThreeTimesAndEmbolden = compose(makeLouder, repeatThreeTimes, embolden);

const tag = document.createElement("span");
const textNode = document.createTextNode(makeLouderAndRepeatThreeTimesAndEmbolden('b'));
tag.append(textNode);
document.getElementById("app")!.appendChild(tag);
```
- `store.subscribe`
```javascript
const store = createStore(rootReducer);
const unsubscribe = store.subscribe(() => {
  console.log(store.getState().a);
});
store.dispatch({ type: "ADD_ONE", payload: 1 });
store.dispatch({ type: "ADD_ONE", payload: 1 });
store.dispatch({ type: "ADD_ONE", payload: 1 });
store.dispatch({ type: "ADD_ONE", payload: 1 });
store.dispatch({ type: "ADD_ONE", payload: 1 });
unsubscribe();
```

### Normalized state
- `normalizr`: 
  - `id` is a **must**; 
  - `only` need to define **relationships** in schema.
```javascript
import { normalize, schema } from "normalizr";
import defaultState from "./default-state.json";

// schema
const user = new schema.Entity("users");
const card = new schema.Entity("cards", {
  assignedTo: user
});
const list = new schema.Entity("lists", {
  cards: [card]
});

// normalize
const normalizedLists = normalize(defaultState.lists, [list]);


// export normalized data
export const lists = {
  entities: normalizedLists.entities.lists,
  ids: normalizedLists.result
};

export const cards = {
  entities: normalizedLists.entities.cards,
  ids: Object.keys(normalizedLists.entities.cards)
};

export const users = {
  entities: normalizedLists.entities.users,
  ids: Object.keys(normalizedLists.entities.users)
}
```

## Optimization
### [useSelector](https://react-redux.js.org/next/api/hooks#useselector)
- The component will re-render only if the the **computed result of selector** has changed. 
- The change of state `doesn't necessarily`y cause specific component to re-render.
- The changes of  **multiple** `useSelectors` in one component will only cause the component to render **once**.
- Default Equality Compare: `===`, to Change:
```javascript
 // other methods: lodash.isEqual(), immutable.js的equal
 const lists = useSelector(listsSelector, shallowEqual);
```


### [Reselect](https://react-redux.js.org/next/api/hooks#using-memoizing-selectors)
- Reselect `won't stop` re-render. It just store and **re-use** the last render result.
- `props` is passed always in **second** function
#### Why we use reselect?
- Memorize `complex computation` results
- **De-normalize** the store state
#### How to use memoized selectors?
- Return type: **primitive** types
  - useSelector use `===` to compare
- Return type: **reference** types
  - Please set the compare method as shallow compare at first
#### Where should I declare memoized selectors?
- You should always avoid `render level`

|    Level    |  Dependency   |     Location      | Memoized |
| :---------: | :-----------: | :---------------: | :------: |
|    `App`    |     State     |   Separate File   |  False   |
| `Component` |     State     | Outside Component |  False   |
| `Instance`  | State & Props | Inside Component  | **True** |
|  `Render`   |     State     | Inside Component  |  False   |

<div style="text-align:center; margin:auto"><img src="img/2020-02-11-18-55-04.png"></div>

- `Instance level` Example
```javascript
const makeNumOfTodosWithIsDoneSelector = () =>
  createSelector(
    state => state.todos,
    (_, isDone) => isDone,
    (todos, isDone) => todos.filter(todo => todo.isDone === isDone).length)

export const TodoCounterForIsDoneValue = ({ isDone }) => {
  const selectNumOfTodosWithIsDone = useMemo(makeNumOfTodosWithIsDoneSelector,[])
  const numOfTodosWithIsDoneValue = useSelector(state =>selectNumOfTodosWithIsDone(state, isDone))
  return <div>{numOfTodosWithIsDoneValue}</div>
}
``` 


### memo
- You should use `memo` on **any component** having a `parent component`
- memo is used only for compare `props`, If `state` of `store` changes, the component will still **re-render**, 
- Default Compare Method: **Shallow Comparison**, change:
```javascript
import { memo } from 'react';
const myComponent = (props) => {...}
const areEqual = (prevProps, nextProps) => {...}
export default memo(MyComponent, areEqual);
```

## Reference
- [Github/reselect](https://github.com/reduxjs/reselect#reselect)
- [Redux Hooks](https://react-redux.js.org/next/api/hooks#hooks)
- [React组件设计实践总结](https://bobi.ink/2019/05/10/react-component-design-01/)
- [React Patterns](https://reactpatterns.cn/)
- [React Bits](https://vasanthk.gitbooks.io/react-bits/)
- [Mind Hacks](http://mindhacks.cn/)
- [有赞技术](https://tech.youzan.com/tag/team-introduction/)