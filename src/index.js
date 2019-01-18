import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/index';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './redux/store';

// 全局样式
import './index.css'

// Antd 样式
import 'antd/dist/antd'
// Antd 国际化
import { LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import en_GB from 'antd/lib/locale-provider/en_GB';

// 国际化
import { IntlProvider, addLocaleData } from 'react-intl';

// 个人配置
import zh_cn from './language/zh_CN';
import en_gb from './language/en_GB';

// react-intl语言包
import zh from 'react-intl/locale-data/zh';//react-intl语言包
import en from 'react-intl/locale-data/en';//react-intl语言包
addLocaleData([...en, ...zh]);

ReactDOM.render(<Provider store={store}>
    <LocaleProvider locale={zh_CN}>
        <Router />
    </LocaleProvider>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
