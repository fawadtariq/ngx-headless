import { Routes } from '@angular/router';

//Disclosure Embeds
import { DisclosureEmbeddedMainComponent } from './embeds/disclosure/main/disclosure-embedded-main';

import { ListboxEmbeddedMainComponent } from './embeds/listbox/main/listbox-embedded-main';

import { ComboboxEmbeddedMainComponent } from './embeds/combobox/main/combobox-embedded-main';

import { PopoverEmbeddedMainComponent } from './embeds/popover/main/popover-embedded-main';

import { DialogEmbeddedMainComponent } from './embeds/dialog/main/dialog-embedded-main';

//RadioGroup Embeds
import { RadioGroupEmbeddedMainComponent } from './embeds/radio-group/main/radiogroup-embedded-main';

//TabGroup Embeds
import { TabGroupEmbeddedMainComponent } from './embeds/tab-group/main/tabgroup-embedded-main';
import { MenuEmbeddedMainComponent } from './embeds/menu/main/menu-embedded-main';
import { SwitchEmbeddedMainComponent } from './embeds/switch/switch-embedded-main';

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
                path: 'listbox',
                children: [
                    {
                        path: 'main',
                        component: ListboxEmbeddedMainComponent,
                        title: 'Listbox Embedded Example - Main',
                    },
                ]
            },
            {
                path: 'combobox',
                children: [
                    {
                        path: 'main',
                        component: ComboboxEmbeddedMainComponent,
                        title: 'Combobox Embedded Example - Main',
                    },
                ]
            },
            {
                path: 'popover',
                children: [
                    {
                        path: 'main',
                        component: PopoverEmbeddedMainComponent,
                        title: 'Popover Embedded Example - Main',
                    },
                ]
            },
            {
                path: 'dialog',
                children: [
                    {
                        path: 'main',
                        component: DialogEmbeddedMainComponent,
                        title: 'Dialog Embedded Example - Main',
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
            },
            {
                path: 'menu',
                children: [
                    {
                        path: 'main',
                        component: MenuEmbeddedMainComponent,
                        title: 'Menu Embedded Example - Main',
                    },
                ]
            },
            {
                path: 'switch',
                children: [
                    {
                        path: 'main',
                        component: SwitchEmbeddedMainComponent,
                        title: 'Switch Embedded Example - Main',
                    },
                ]
            }
        ],
    },
];
