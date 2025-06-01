import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { TabComponent, TabGroupComponent, TabListComponent, TabPanelComponent } from '@ngx-headless/ui';

@Component({
    selector: 'tabgroup-embedded-main',
    templateUrl: './tabgroup-embedded-main.html',
    standalone: true,
    imports: [TabListComponent, TabGroupComponent, TabPanelComponent, TabComponent, CommonModule],
})
export class TabGroupEmbeddedMainComponent {
    @ViewChild('tabGroup') tabGroup!: TabGroupComponent;

    selectedIndex = 0;

    isSelected(index: number): boolean {
        return index === this.selectedIndex;
    }

    selectTab(index: number): void {
        this.tabGroup.selectTab(index);
    }

    categories = [
        {
            label: 'Recent',
            disabled: false,
            items: [
                {
                    id: 1,
                    title: 'Does drinking coffee make you smarter?',
                    date: '5h ago',
                    commentCount: 5,
                    shareCount: 2,
                },
                {
                    id: 2,
                    title: "So you've bought coffee... now what?",
                    date: '2h ago',
                    commentCount: 3,
                    shareCount: 2,
                },
            ],
        },
        {
            label: 'Popular',
            disabled: false,
            items: [
                {
                    id: 1,
                    title: 'Is tech making coffee better or worse?',
                    date: 'Jan 7',
                    commentCount: 29,
                    shareCount: 16,
                },
                {
                    id: 2,
                    title: 'The most innovative things happening in coffee',
                    date: 'Mar 19',
                    commentCount: 24,
                    shareCount: 12,
                },
            ],
        },
        {
            label: 'Trending',
            disabled: false,
            items: [
                {
                    id: 1,
                    title: 'Ask Me Anything: 10 answers to your questions about coffee',
                    date: '2d ago',
                    commentCount: 9,
                    shareCount: 5,
                },
                {
                    id: 2,
                    title: "The worst advice we've ever heard about coffee",
                    date: '4d ago',
                    commentCount: 1,
                    shareCount: 2,
                },
            ],
        },
    ];

}
