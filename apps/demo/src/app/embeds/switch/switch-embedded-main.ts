// switch-demo.component.ts
import { Component } from '@angular/core';
import { 
    SwitchComponent, 
    SwitchLabel, 
    SwitchGroup  } from '@ngx-headless/ui';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'switch-embedded-main',
    standalone: true,
    templateUrl: './switch-embedded-main.html',
    imports: [CommonModule, SwitchComponent, SwitchLabel, SwitchGroup],
})
export class SwitchEmbeddedMainComponent {
    enabled = false;
    auto = true;
    ngOnInit() {
        setInterval(() => {
            if (this.auto) {
                this.enabled = !this.enabled;
            }
        }, 2000);
    }
}
