import { Routes } from '@angular/router';

//Disclosure Embeds
import { DisclosureEmbeddedMainComponent } from './embeds/disclosure/main/disclosure-embedded-main';


//RadioGroup Embeds
import { RadioGroupEmbeddedMainComponent } from './embeds/radio-group/main/radiogroup-embedded-main';

//TabGroup Embeds
import { TabGroupEmbeddedMainComponent } from './embeds/tab-group/main/tabgroup-embedded-main';

export const routes: Routes = [
    {
        path: 'embeds',
        children: [
            {
                path: 'disclosure',
                children: [
                    {
                        path: 'main',
                        component: DisclosureEmbeddedMainComponent,
                        title: 'Disclosure Embedded Example - Main',
                    },
                ]
            },
            {
                path: 'radiogroup',
                children: [
                    {
                        path: 'main',
                        component: RadioGroupEmbeddedMainComponent,
                        title: 'Radio Group Embedded Example - Main',
                    },
                ]
            },
            {
                path: 'tabgroup',
                children: [
                    {
                        path: 'main',
                        component: TabGroupEmbeddedMainComponent,
                        title: 'Tab Group Embedded Example - Main',
                    },
                ]
            }
        ],
    },
];
