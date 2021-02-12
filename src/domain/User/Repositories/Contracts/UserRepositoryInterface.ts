import User from '../../Models/User'

export default interface UserRepositoryInterface {
    findOne(): Promise<User>;
    findAll(): Promise<User[]>;
}