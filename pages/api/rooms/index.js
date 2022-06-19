import { rooms } from "../../../Data/rooms"

export default function handler(req, res) {
    res.status(200).json(rooms)
}