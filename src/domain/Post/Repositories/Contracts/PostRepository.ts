import Post from '../../Models/Post'

export default interface PostRepository {
    findOne(): Promise<Post>;
    findAll(): Promise<Post[]>;
}