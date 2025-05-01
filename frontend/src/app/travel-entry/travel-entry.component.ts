import { Component, OnInit } from '@angular/core';
import { TravelEntry } from '../core/models/travelEntry.model';
import { TravelEntryService } from '../core/services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-travel-entry',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './travel-entry.component.html',
  styleUrls: ['./travel-entry.component.scss'],
})
export class TravelEntryComponent implements OnInit {
  entries: TravelEntry[] = [];
  updatedEntry: TravelEntry = {
    id: 0,
    location: '',
    date: new Date(),
    photos: '',
    description: ''
  };

  constructor(private travelEntryService: TravelEntryService) {}

  ngOnInit(): void {
    // Dummy data for local testing
    this.entries = [
      {
        id: 1,
        location: 'Paris',
        date: new Date('2023-06-01'),
        photos: 'https://example.com/photo-paris.jpg',
        description: 'Visited the Eiffel Tower.'
      },
      {
        id: 2,
        location: 'Tokyo',
        date: new Date('2023-08-15'),
        photos: 'https://example.com/photo-tokyo.jpg',
        description: 'Explored Shibuya and had amazing sushi.'
      }
    ];

    // Uncomment this when your API is ready
    /*
    this.travelEntryService.getAll().subscribe(
      (data) => {
        this.entries = data;
      },
      (error) => {
        console.error('Error fetching travel entries', error);
      }
    );
    */
  }

  onUpdateEntry(id: number): void {
    const entryToUpdate = this.entries.find((entry) => entry.id === id);
    if (entryToUpdate) {
      this.updatedEntry = { ...entryToUpdate };
    }
  }

  saveUpdatedEntry(): void {
    if (this.updatedEntry.id) {
      this.travelEntryService.update(this.updatedEntry).subscribe(
        () => {
          const index = this.entries.findIndex((entry) => entry.id === this.updatedEntry.id);
          if (index !== -1) {
            this.entries[index] = { ...this.updatedEntry };
          }
          this.updatedEntry = { id: 0, location: '', date: new Date(), photos: '', description: '' };
        },
        (error) => {
          console.error('Error updating entry', error);
        }
      );
    }
  }

  onDeleteEntry(id: number): void {
    this.travelEntryService.delete(id).subscribe(
      () => {
        this.entries = this.entries.filter((entry) => entry.id !== id);
      },
      (error) => {
        console.error('Error deleting entry', error);
      }
    );
  }
}
