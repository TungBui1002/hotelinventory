const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Room data
const rooms = [
    {
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
        price: 5000,
        photos: 'https://duonggiahotel.vn/wp-content/uploads/2023/01/4048e2d8302ae874b13b.jpg',
        checkinTime: '2025-05-21',
        checkoutTime: '2025-05-22',
        rating: 4.5
    },
    {
        roomType: 'VIP Room',
        amenities: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
        price: 9999,
        photos: 'https://image.tienphong.vn/w890/Uploaded/2025/Osgmky/3/ffc/3ffc95ce0d8fa03a7a9f40633c56d2db.jpg',
        checkinTime: '2025-05-21',
        checkoutTime: '2025-05-22',
        rating: 5.0
    },
    {
        roomType: 'Romantic Room',
        amenities: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
        price: 8000,
        photos: 'https://a25hotel.com/files/images/z4518556134797_5caf6cf28c593ff55705b01468bd3643.jpg',
        checkinTime: '2025-05-21',
        checkoutTime: '2025-05-22',
        rating: 4.6
    },
    {
        roomType: 'Single Room',
        amenities: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
        price: 3000,
        photos: 'https://www.chudu24.com/wp-content/uploads/2017/08/anantara-mui-ne-resort-spa-15-2.jpg',
        checkinTime: '2025-05-21',
        checkoutTime: '2025-05-22',
        rating: 4.2
    },
    {
        roomType: 'Private Suite',
        amenities: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
        price: 9000,
        photos: 'https://studiochupanhdep.com/Upload/Images/Album/anh-phong-khach-san-dep-07.jpg',
        checkinTime: '2025-05-21',
        checkoutTime: '2025-05-22',
        rating: 5.0
    },
    {
        roomType: 'Luxury Room',
        amenities: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
        price: 10000,
        photos: 'https://vanangroup.com.vn/wp-content/uploads/2025/01/InterContinental-Danang-Sun-Peninsula-Resort.jpg',
        checkinTime: '2025-05-21',
        checkoutTime: '2025-05-22',
        rating: 4.8
    }
];

// Get all rooms
app.get('/api/rooms', (req, res) => {
    res.json(rooms);
});

// Get room by type
app.get('/api/rooms/:type', (req, res) => {
    const room = rooms.find(r => r.roomType.toLowerCase() === req.params.type.toLowerCase());
    if (room) {
        res.json(room);
    } else {
        res.status(404).json({ message: 'Room not found' });
    }
});

// Add new room
app.post('/api/rooms', (req, res) => {
    const newRoom = req.body;
    rooms.push(newRoom);
    res.status(201).json(newRoom);
});

// Update room
app.put('/api/rooms/:type', (req, res) => {
    const index = rooms.findIndex(r => r.roomType.toLowerCase() === req.params.type.toLowerCase());
    if (index !== -1) {
        rooms[index] = { ...rooms[index], ...req.body };
        res.json(rooms[index]);
    } else {
        res.status(404).json({ message: 'Room not found' });
    }
});

// Delete room
app.delete('/api/rooms/:type', (req, res) => {
    const index = rooms.findIndex(r => r.roomType.toLowerCase() === req.params.type.toLowerCase());
    if (index !== -1) {
        const deletedRoom = rooms.splice(index, 1);
        res.json(deletedRoom[0]);
    } else {
        res.status(404).json({ message: 'Room not found' });
    }
});

const PORT = 3000;
const HOST = '0.0.0.0';  // Lắng nghe tất cả các network interfaces

app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
}); 