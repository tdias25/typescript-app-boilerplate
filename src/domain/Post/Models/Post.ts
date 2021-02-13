export default class Post {
    private title: string;

    constructor({ title }) {
        this.title = title
    }

    public getTitle() {
        return this.title;
    }
}