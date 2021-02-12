export default interface ResponseInterface {
    headers: string[];

    withHeaders(headers: { headerName: 'headerValue' }): void
}