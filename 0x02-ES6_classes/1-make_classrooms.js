import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const sizes = [19, 20, 34];
  const rooms = [];
  for (const size of sizes) {
    const room = new ClassRoom(size);
    rooms.push(room);
  }
  return rooms;
}
