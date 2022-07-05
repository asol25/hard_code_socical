import { Request, Response, Router } from 'express';
import { userModel } from '../../model/users';
import { sendRefreshToken } from './service';
const AuthenticationRouter = Router();

AuthenticationRouter.post('/login', async (req: Request, res: Response) => {
    try {
        if (!req.body.email) return res.status(400).send('The refresh F5 pages');
        const user = await userModel.findOne({ "email": req.body.email });
        !user ? new userModel(req.body).save() : 0;
        user.token = await sendRefreshToken(user);
        return res.status(200).json(user);  
    } catch (error) {
        console.error('login error: ' + error || error?.response?.message);
        return res.status(500).send({ 'login error: ': error.message });
    }
});

export default AuthenticationRouter;