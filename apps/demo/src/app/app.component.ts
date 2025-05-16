import { Component, ViewChild } from '@angular/core';
import {
  DisclosureComponent,
  DisclosureButtonComponent,
  DisclosurePanelComponent,
} from '@ngx-headless/ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DisclosureComponent,
    DisclosureButtonComponent,
    DisclosurePanelComponent,
  ],
  templateUrl: "app.component.html",
})
export class AppComponent {

    @ViewChild('disclosure') disclosure!: DisclosureComponent;

}
