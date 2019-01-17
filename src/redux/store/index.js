import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducers from '../reducers/index';
// import { createLogger } from 'redux-logger'
// // 使用日志打印方法， collapsed让action折叠，看着舒服。
// const loggerMiddleware = createLogger({ collapsed: true });

const store = createStore(rootReducers, composeWithDevTools());
export default store;