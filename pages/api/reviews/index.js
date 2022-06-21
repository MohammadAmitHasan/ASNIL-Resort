import { reviews } from "Data/review";

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(reviews)
    }
    else if (req.method === 'POST') {
        const user = req.body.user
        const review = req.body.review
        const newReview = {
            id: Date.now(),
            userName: user,
            review
        }
        reviews.push(newReview)
        res.status(201).json(newReview)
    }
}