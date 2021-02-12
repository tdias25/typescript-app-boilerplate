import ResponseInterface from '../Contracts/ResponseInterface'

export default interface Route {
    methods: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'][];
    handle: ResponseInterface,
    middlewares: ResponseInterface[]
}