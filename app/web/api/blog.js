import axios from './api'
export default {
    getArticleList () {
        return axios.get('/blog/list')
    }
}