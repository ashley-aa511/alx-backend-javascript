// 1-main.js
import initializeRooms from './1-make_classrooms.js';

const rooms = initializeRooms();
rooms.forEach(room => console.log(room._maxStudentsSize)); // Output: 19, 20, 34
