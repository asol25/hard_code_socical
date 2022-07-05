import { Router, Request, Response } from "express";
import { userModel } from "../../model/users";
const SuggestionsRouter = Router();

SuggestionsRouter.post('/', async (req: Request, res: Response) => {
    console.log(req.body)
    try {
        const NOT_USER = req.body.nickname;
        const LIMIT_SUGGESTION = 10;
        const suggestions = await userModel.find({ "nickname": { $nin: [NOT_USER] } }).limit(LIMIT_SUGGESTION);
        return res.status(200).json(suggestions);
    } catch (error) {
        console.error('suggestions error: ' + error || error?.response?.message);
        return res.status(500).send({ 'suggestions error: ': error.message });
    }
});
export default SuggestionsRouter;