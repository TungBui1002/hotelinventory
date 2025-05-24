import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, Input } from '@angular/core';
import { Room } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from "../rooms-list/rooms-list.component";

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [CommonModule, RoomsListComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() testInput: any;

  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;

  rooms = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20
  }

  roomList: Room[] = [{
    roomType: 'Deluxe Room',
    amenities: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
    price: 5000,
    photos: 'https://duonggiahotel.vn/wp-content/uploads/2023/01/4048e2d8302ae874b13b.jpg',
    checkinTime: new Date('21-May-2025'),
    checkoutTime: new Date('22-May-2025'),
    rating: 4.5
  },
  {
    roomType: 'VIP Room',
    amenities: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
    price: 9999,
    photos: 'https://image.tienphong.vn/w890/Uploaded/2025/Osgmky/3/ffc/3ffc95ce0d8fa03a7a9f40633c56d2db.jpg',
    checkinTime: new Date('21-May-2025'),
    checkoutTime: new Date('22-May-2025'),
    rating: 5.0
  },
  {
    roomType: 'Single Room',
    amenities: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
    price: 2000,
    photos: 'https://mixhotel.vn/uploads/images/62149804d6a5eb23e51e654f/khach-san-tinh-yeu-view-dep__4_.webp',
    checkinTime: new Date('21-May-2025'),
    checkoutTime: new Date('22-May-2025'),
    rating: 4.0
  },
  {
    roomType: 'Romantic Room',
    amenities: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
    price: 8000,
    photos: 'https://a25hotel.com/files/images/z4518556134797_5caf6cf28c593ff55705b01468bd3643.jpg',
    checkinTime: new Date('21-May-2025'),
    checkoutTime: new Date('22-May-2025'),
    rating: 4.6
  },
  {
    roomType: 'Single Room',
    amenities: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
    price: 3000,
    photos: 'https://www.chudu24.com/wp-content/uploads/2017/08/anantara-mui-ne-resort-spa-15-2.jpg',
    checkinTime: new Date('21-May-2025'),
    checkoutTime: new Date('22-May-2025'),
    rating: 4.2
  },
  {
    roomType: 'Private Suite',
    amenities: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
    price: 9000,
    photos: 'https://studiochupanhdep.com/Upload/Images/Album/anh-phong-khach-san-dep-07.jpg',
    checkinTime: new Date('21-May-2025'),
    checkoutTime: new Date('22-May-2025'),
    rating: 5.0
  },
  {
    roomType: 'Luxury Room',
    amenities: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
    price: 10000,
    photos: 'https://vanangroup.com.vn/wp-content/uploads/2025/01/InterContinental-Danang-Sun-Peninsula-Resort.jpg',
    checkinTime: new Date('21-May-2025'),
    checkoutTime: new Date('22-May-2025'),
    rating: 4.8
  }];

  constructor() {
    console.log('Constructor gọi đầu tiên');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.hideRooms = !this.hideRooms;
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
