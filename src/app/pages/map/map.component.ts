import { Component, inject } from '@angular/core';
import { MapService } from '../../services/map.service';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-map',
  imports: [KeyValuePipe],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {

  public countryDetails: any = {}

  mapService = inject(MapService)

  isObject(value: any): boolean {
    return value && typeof value === 'object' && !Array.isArray(value);
  }

  isEmpty(value: object) {
    return Object.keys(value).length === 0
  }

  async handleMouseClick(event: MouseEvent) {

    const target = event.target as HTMLElement; // Explicitly cast target to HTMLElement

    if (target.nodeName === 'path') {
      this.countryDetails = await this.mapService.getCountryDetails(target.id)
      console.log(this.countryDetails);

    }
  }
}

