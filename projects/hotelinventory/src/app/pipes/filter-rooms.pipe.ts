import { Pipe, PipeTransform } from '@angular/core';
import { Room } from '../rooms/rooms';

@Pipe({
  name: 'filterRooms',
  standalone: true
})
export class FilterRoomsPipe implements PipeTransform {
  transform(rooms: Room[], searchText: string, selectedPrice: string, selectedRating: string): Room[] {
    if (!rooms) return [];
    
    return rooms.filter(room => {
      const matchesSearch = !searchText || 
        room.roomType.toLowerCase().includes(searchText.toLowerCase());
      
      const matchesPrice = !selectedPrice || 
        (selectedPrice === '5000' && room.price >= 5000) ||
        (selectedPrice === '3000' && room.price >= 3000 && room.price < 5000) ||
        (selectedPrice === '1000' && room.price >= 1000 && room.price < 3000);
      
      const matchesRating = !selectedRating ||
        (selectedRating === '4.5' && room.rating >= 4.5) ||
        (selectedRating === '4' && room.rating >= 4 && room.rating < 4.5) ||
        (selectedRating === '3' && room.rating >= 3 && room.rating < 4);
      
      return matchesSearch && matchesPrice && matchesRating;
    });
  }
} 