import { Router, Request, Response } from "express";
import { newsfeedModel } from '../../model/newsfeed';
const Newsfeed = Router();

Newsfeed.post('/', async (req: Request, res: Response) => {
    console.log(req.body)
    try {
        const newsfeed = new newsfeedModel(req.body);
        newsfeed.save();
        return res.status(200).json(newsfeed);
    } catch (error) {
        console.error('suggestions error: ' + error || error?.response?.message);
        return res.status(500).send({ 'suggestions error: ': error.message });
    }
});

Newsfeed.get('/', async (req: Request, res: Response) => {
    try {
        const newsfeed = await newsfeedModel.find();
        return res.status(200).json(newsfeed);
    } catch (error) {
        console.error('suggestions error: ' + error || error?.response?.message);
        return res.status(500).send({ 'suggestions error: ': error.message });
    }
})

// LIKE and DISLIKE

Newsfeed.post('/likes', async (req: Request, res: Response) => {
    const { _id, nickname } = req.body;
    try {
        const newsfeed = await newsfeedModel.findOne({ "_id": _id })
        
        if (!isActionLoves(newsfeed, nickname)) {
            newsfeed.likes.push(nickname);
            await newsfeed.save();
        }

        const size = sizeArray(newsfeed.likes);
        return res.status(200).json(size);
    } catch (error) {
        console.error('Post Like error: ' + error || error?.response?.message);
        return res.status(500).send({ 'Post Like error: ': error.message });
    }
})

Newsfeed.get('/likes', async (req: Request, res: Response) => {
    const { _id } = req.body;
    try {
        const newsfeed = await newsfeedModel.findOne({ "_id": _id });
        const size = sizeArray(newsfeed.likes);
        return res.status(200).json(size);
    } catch (error) {
        console.error('Get likes error: ' + error || error?.response?.message);
        return res.status(500).send({ 'Get likes error: ': error.message });
    }
})
export default Newsfeed;

function isActionLoves(newsfeed, nickname) {
   return newsfeed.likes.includes(nickname)
}

function sizeArray(arr) {
    return arr.length - 1;
}