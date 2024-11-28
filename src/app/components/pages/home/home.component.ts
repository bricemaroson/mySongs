import { Component, inject, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Song } from '../../../models/Song';
import { Router } from '@angular/router';
import { SongService } from '../../../services/song.service';
@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  songs: Song[] = [];
  private subscription = new Subscription();
  constructor(private songService: SongService) {
    // Utilisez votre service ici
  }

  ngOnInit(): void {
    this.loadSongs();
  }

  loadSongs(): void {
    const subscription = this.songService.getSongs().subscribe((songs) => {
      songs.forEach((song) => {
        if (song.date) {
          song.date = new Date(song.date);
        }
      });
      this.songs = songs;
    });
    this.subscription.add(subscription);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
