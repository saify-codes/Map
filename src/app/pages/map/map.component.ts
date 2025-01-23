import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit {

  constructor() { }

  public ngOnInit() {

  }
  handleMouseClick(event: MouseEvent) {

    const target = event.target as HTMLElement; // Explicitly cast target to HTMLElement

    if (target.nodeName === 'path') {

    }
  }
}

