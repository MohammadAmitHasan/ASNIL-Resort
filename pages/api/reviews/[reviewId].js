import { reviews } from "../../../Data/review"

export default function handler(req, res) {
    const { reviewId } = req.query

    if (req.method === 'GET') {
        const review = reviews.find(review => review.id === parseInt(reviewId))
        res.status(200).json(review)
    }

}