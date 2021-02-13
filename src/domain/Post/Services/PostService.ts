import RequestInterface from '../../../app/Http/Contracts/RequestInterface'
import Post from '../Models/Post'

export default class PostService {

    public makePostFromRequest(request: RequestInterface): Post {

        return new Post({
            title: request.getParams('title')
        })
    }
}