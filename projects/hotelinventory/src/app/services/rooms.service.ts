import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../rooms/rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  // Thay YOUR_IP_ADDRESS bằng IP thực của máy bạn
  private apiUrl = 'http://10.6.1.191:3000/api/rooms';

  constructor(private http: HttpClient) {}

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.apiUrl);
  }

  getRoomByType(type: string): Observable<Room> {
    return this.http.get<Room>(`${this.apiUrl}/${type}`);
  }

  addRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(this.apiUrl, room);
  }

  updateRoom(type: string, room: Room): Observable<Room> {
    return this.http.put<Room>(`${this.apiUrl}/${type}`, room);
  }

  deleteRoom(type: string): Observable<Room> {
    return this.http.delete<Room>(`${this.apiUrl}/${type}`);
  }
} 