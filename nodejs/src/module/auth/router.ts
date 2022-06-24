import express, { Request, Response } from 'express';
// import { userModel } from '../../model/users';
const AuthenticationRouter = express.Router();

AuthenticationRouter.post('/login', (req: Request, res: Response) => {
    try {
        console.log(req.body);
        // const user = userModel.findOne((({ email, username, nickname, picture, updated_at }) =>
        //     ({ email, username, nickname, picture, updated_at }))(req.body.user));
        // const user = userModel.findOne(req.body.user.email);
        // !user ? new userModel(req.body.user).save() : res.status(200).json(user);
    } catch (error) {
        console.error('login error: ' + error || error?.response?.message);
        res.status(500).send({ 'login error: ': error.message });
    }
});

AuthenticationRouter.get('/login', (req: Request, res: Response) => {
    try {
        console.log(req.body);
        // const user = userModel.findOne((({ email, username, nickname, picture, updated_at }) =>
        //     ({ email, username, nickname, picture, updated_at }))(req.body.user));
        // const user = userModel.findOne(req.body.user.email);
        // !user ? new userModel(req.body.user).save() : res.status(200).json(user);
    } catch (error) {
        console.error('login error: ' + error || error?.response?.message);
        res.status(500).send({ 'login error: ': error.message });
    }
});

export default AuthenticationRouter;