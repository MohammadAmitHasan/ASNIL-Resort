// import { rooms } from "../../../Data/rooms"

const rooms = [
    {
        "id": 1,
        "title": "Dual Room",
        "price": 15000,
        "description": "2 luxurious rooms",
        "img": "/images/Rooms/dualRoom.webp"
    },
    {
        "id": 2,
        "title": "Garden Side Room",
        "price": 17500,
        "description": "There is a personal garden with the room",
        "img": "/images/Rooms/gardenSideRoom.webp"
    },
    {
        "id": 3,
        "title": "Roof Top Room",
        "price": 6000,
        "description": "You can have a nice view of the sea beach directly from the room",
        "img": "/images/Rooms/RoofTopRoom.webp"
    },
    {
        "id": 4,
        "title": "Single Room",
        "price": 4000,
        "description": "This is the very basic room of our resort",
        "img": "/images/Rooms/singleRoom.webp"
    },
    {
        "id": 5,
        "title": "Special Room",
        "price": 5600,
        "description": "Single special room having special services",
        "img": "/images/Rooms/specialRoom.webp"
    }
]

export default function handler(req, res) {
    const { roomId } = req.query
    const room = rooms.find(room => room.id === parseInt(roomId))
    res.status(200).json(room)
}