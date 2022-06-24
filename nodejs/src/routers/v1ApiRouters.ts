import { Request, Response, Router, NextFunction } from 'express';
// import { Authentication } from "../modules/auth/router";
import auth from "../middleware/auth/authz.middleware";
import rateLimit from "../middleware/limit/rateLimit";
import resetPasswordSpeedLimiter from "../middleware/limit/slowdown"
const v1ApiRouter = Router();

v1ApiRouter.use("/", rateLimit, resetPasswordSpeedLimiter, (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        success: "true",
        data: "Api v1",
    });
    // next();
});

// v1ApiRouter.use("/api/authentication", Authentication);
export default v1ApiRouter;