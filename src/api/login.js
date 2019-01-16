import http from '@/axios';
export default {
    login(data) {
        let options = {
            url: "/login",
            type: "POST",
            data
        }
        return http(options);
    }
}