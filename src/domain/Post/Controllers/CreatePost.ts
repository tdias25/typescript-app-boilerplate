import ResponseInterface from "../../../app/Http/Contracts/ResponseInterface";
import RequestInterface from "../../../app/Http/Contracts/RequestInterface";

/* this is just a dummy */
class Response implements ResponseInterface {
    headers: string[];

    constructor({ headers }) {
        this.withHeaders(headers)
    }

    withHeaders(headers) {
        this.headers = headers;
    }
}

export default class CreatePost {
    async handle(request: RequestInterface, response: ResponseInterface, PostService: PostService): Promise<ResponseInterface> {

        let Post = PostService.makePostFromRequest(request)

        return await new response({
            headers: {
                'content-type': 'application/json'
            }
        })
    }
}