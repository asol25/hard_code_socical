import { Request, Response, Router, NextFunction } from 'express';
import AuthenticationRouter from "../module/auth/router";
import rateLimit from "../middleware/limit/rateLimit";
import resetPasswordSpeedLimiter from "../middleware/limit/slowdown"
import SuggestionsRouter from '../module/suggestion/router';
import Newsfeed from '../module/newsfeed/router';
const v1ApiRouter = Router();

v1ApiRouter.use("/", rateLimit, resetPasswordSpeedLimiter,(req: Request, res: Response, next: NextFunction) => {
    next();
});

v1ApiRouter.use("/authentication", AuthenticationRouter);
v1ApiRouter.use("/suggestions", SuggestionsRouter);
v1ApiRouter.use("/newsfeed", Newsfeed);
export default v1ApiRouter;