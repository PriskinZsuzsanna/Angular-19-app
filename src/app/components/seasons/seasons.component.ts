import { Component, computed, inject, signal, WritableSignal } from "@angular/core";
import { Season } from "./seasons.types";
import { SeasonsService } from "../../services/seasons.service";
import { NgClass } from "@angular/common";

@Component({
  selector: 'seasons',
  imports: [NgClass],
  templateUrl: './seasons.component.html',
  styleUrl: './seasons.component.scss'
})
export class SeasonsComponent {
  seasonsService = inject(SeasonsService)
  season = this.seasonsService.season;
  seasonUrl = this.seasonsService.seasonUrl;
  
  onSeasonClick(season: Season): void {
    this.seasonsService.setSeason(season);
  }
}