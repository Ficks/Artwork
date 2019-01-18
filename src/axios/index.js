import Axios from 'axios';
import config from '@/config';

import { createBrowserHistory } from 'history';
import { message } from 'antd';
import qs from 'querystring';


// 封装Axios
export default params => {
    params.method = params.type || 'post';
    params.data = params.data || {};

    if (params.type == 'get') params.params = params.data;
    return new Promise((resolve, reject) => {
        //创建Axios实例，把基本的配置放进去
        const instance = Axios.create({
            timeout: 10 * 1000,
            withCredentials: true,
            //定义请求根目录
            baseURL: config.apiUrl,
        });

        // request拦截器
        instance.interceptors.request.use(config => {
            if (config.method == 'post') {
                config.data = qs.stringify(config.data);
            }
            return config;
        }, error => {
            // Do something with request error
            console.log(error); // for debug
            Promise.reject(error);
        });

        // params.headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
        instance(params).then(res => {
            console.log(res);
            //请求成功后执行的函数
            if (res.data.code == 1) {
                if (params.tips) {
                    message.success(res.data.message);
                }
                resolve(res.data);
            } else if (res.data.code = -99999) {
                // 登录超时
                message.warning(res.data.message);
                reject(res.data);
                createBrowserHistory().push('/login');
            } else {
                // 失败后
                reject(res.data);
                message.warning(res.data.message);
            }
        }).catch(err => {
            //失败后执行的函数
            message.error('服务器开小差了！');
            console.log(err);
            reject(err);
        })
    });
};
