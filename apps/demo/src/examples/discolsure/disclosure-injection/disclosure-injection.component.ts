import { CommonModule } from '@angular/common';
import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {
    DisclosureComponent,
    DisclosureButtonComponent,
    DisclosurePanelComponent,
} from '@ngx-headless/ui';
import { DisclosureContextService } from 'projects/headless-ui/src/lib/disclosure/disclosure-context.service';
import { CloseButtonComponent } from "./close-button.component";

@Component({
    selector: 'disclosure-injection',
    standalone: true,
    imports: [
    DisclosureComponent,
    DisclosureButtonComponent,
    DisclosurePanelComponent,
    CommonModule,
    CloseButtonComponent
],
    templateUrl: "./disclosure-injection.component.html",
})
export class DisclorureInjectionComponent {


}
