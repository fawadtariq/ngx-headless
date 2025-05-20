import { Component, ViewChild } from '@angular/core';
import { DisclorureTemplateComponent } from "../examples/discolsure/disclosure-template/disclosure-template.component";
import { DisclorureInjectionComponent } from '../examples/discolsure/disclosure-injection/disclosure-injection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DisclorureTemplateComponent,
    DisclorureInjectionComponent
],
  templateUrl: "app.component.html",
})
export class AppComponent {
}
