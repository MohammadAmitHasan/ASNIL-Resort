import { rooms } from "../../../Data/rooms"

export default function handler(req, res) {
    const { roomId } = req.query
    const room = rooms.find(room => room.id === parseInt(roomId))
    res.status(200).json(room)
}