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
- **Update**: you probably don't need `ids`.
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

### Dev Tool
- Don't use `const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: process.env.NODE_ENV === "development", traceLimit: 25 })) ||
  compose;`
- use `yarn add redux-devtools-extension`
```javascript
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
 
const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
));
```

## Reference
- [Github/reselect](https://github.com/reduxjs/reselect#reselect)
- [Redux Hooks](https://react-redux.js.org/next/api/hooks#hooks)
- [React组件设计实践总结](https://bobi.ink/2019/05/10/react-component-design-01/)
- [React Patterns](https://reactpatterns.cn/)
- [React Bits](https://vasanthk.gitbooks.io/react-bits/)
- [Mind Hacks](http://mindhacks.cn/)
- [有赞技术](https://tech.youzan.com/tag/team-introduction/)