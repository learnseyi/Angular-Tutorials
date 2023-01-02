import {
  Component,
  AfterContentInit,
  ContentChildren,
  QueryList,
  ElementRef,
} from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css'],
})
export class TabsContainerComponent implements AfterContentInit {
  active: boolean;
  @ContentChildren(TabsComponent) tabs: QueryList<TabsComponent> =
    new QueryList();
  // public tabTitle = ['Member', 'Staff','test'];

  constructor() {}

  switchTab(tab: TabsComponent) {
    this.tabs.forEach((tab) => tab.active = false);
    tab.active = true;
    console.log(tab.tabTitle, tab.active);
  }

  ngOnInit() {}

  ngAfterContentInit():void {
    const activeTabs = this.tabs?.filter((tab) =>  tab.active);
    !activeTabs || activeTabs.length === 0 ? this.switchTab(this.tabs.first) : ""
  }
}
