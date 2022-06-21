export default function handler(req, res) {
    res.setPreviewData({
        user: 'Hasan'
    })
    res.redirect(req.query.redirect)
}