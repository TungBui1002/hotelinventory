import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Room } from '../rooms/rooms';
import { RoomsService } from '../services/rooms.service';
import { FilterRoomsPipe } from '../pipes/filter-rooms.pipe';

@Component({
  selector: 'hinv-rooms-list',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterRoomsPipe],
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit {
  @Input() rooms: Room[] = [];
  searchText: string = '';
  selectedPrice: string = '';
  selectedRating: string = '';

  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {
    if (!this.rooms.length) {
      this.roomsService.getRooms().subscribe(
        (data) => {
          this.rooms = data;
        },
        (error) => {
          console.error('Error fetching rooms:', error);
        }
      );
    }
  }

  bookRoom(room: Room): void {
    // TODO: Implement booking functionality
    console.log('Booking room:', room);
    // You can add navigation to booking form or show a modal here
  }
}
