import { computed, Injectable, signal, WritableSignal } from '@angular/core';
import { Season } from '../components/seasons/seasons.types';

@Injectable({
  providedIn: 'root'
})
export class SeasonsService {

  constructor() { }

  season: WritableSignal<Season | undefined> = signal(undefined);

  seasonUrl = computed(() => {
    return this.season()?.toLowerCase().concat('.jpg');
  })

  setSeason(season: Season) {
    this.season.set(season);
  }
}
