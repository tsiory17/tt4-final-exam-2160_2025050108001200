
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TravelEntry } from '../models/travelEntry.model';
import { environment } from '../../../environment/environment';
@Injectable({
  providedIn: 'root',
})
export class TravelEntryService {
  private apiUrl = environment.apiUrl; // Use the apiUrl from environment

  constructor(private http: HttpClient) {}

  // Fetch all travel entries
  getAll(): Observable<TravelEntry[]> {
    return this.http.get<TravelEntry[]>(this.apiUrl);
  }

  // Fetch a single travel entry by ID
  getById(id: number): Observable<TravelEntry> {
    return this.http.get<TravelEntry>(`${this.apiUrl}/${id}`);
  }

  // Create a new travel entry
  create(entry: TravelEntry): Observable<TravelEntry> {
    return this.http.post<TravelEntry>(this.apiUrl, entry);
  }

  // Update an existing travel entry
  update(entry: TravelEntry): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${entry.id}`, entry);
  }

  // Delete a travel entry by ID
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
