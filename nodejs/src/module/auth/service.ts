import jwt from 'jsonwebtoken';
import { privateKey } from '../../middleware/auth/config';

export const sendRefreshToken = (user) => {
    return jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: user.email
    }, privateKey.secret);
}
