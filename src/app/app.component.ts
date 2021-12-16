import { Component, OnDestroy, OnInit } from '@angular/core';

import { MediaChange, MediaObserver } from '@angular/flex-layout'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'youtube';

  mediaSub: Subscription

  deviceSmall: boolean

  constructor(public mediaObsever: MediaObserver) {
    this.mediaSub = this.mediaObsever.media$.subscribe((result:MediaChange) => {
      console.log(result.mqAlias);
      this.deviceSmall = result.mqAlias === 'xs' ? true : false
    })
  }

  ngOnInit() {}

  ngOnDestroy() {}

}
