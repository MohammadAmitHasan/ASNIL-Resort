import { reviews } from "Data/review"

export default function handler(req, res) {
    const { reviewId } = req.query

    if (req.method === 'GET') {
        const review = reviews.find(review => review.id === parseInt(reviewId))
        res.status(200).json(review)
    }
    else if (req.method === 'DELETE') {
        const deletedReview = reviews.find(
            review => review.id === parseInt(reviewId)
        )
        const index = reviews.findIndex(
            review => review.id === parseInt(reviewId)
        )
        reviews.splice(index, 1)
        res.status(200).json(deletedReview)
    }
}