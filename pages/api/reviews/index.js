import { reviews } from "../../../Data/review";

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(reviews)
    }
    else if (req.method === 'POST') {
        const review = req.body.review
        const newReview = {
            id: Date.now(),
            text: review
        }
        reviews.push(newReview)
        res.status(201).json(newReview)
    }
}