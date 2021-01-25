import { Component, OnInit } from "@angular/core";
import { Deactivate } from "./deactivate.class";

@Component({
  selector: "app-component-three",
  template: `
    <h4>Guarded Component Three</h4>
    <p>
      Try navigating away (back to component one). It will be blocked unless
      "Can deactivate" checkbox is checked.
    </p>
    <div>
      Can deactivate:
      <input #candeactivate type="checkbox" [(ngModel)]="flag" />
    </div>
  `
})
export default class ComponentThreeComponent implements OnInit, Deactivate {
  flag: boolean = false;
  constructor() {}

  canDeactivate() {
    return this.flag;
  }

  ngOnInit() {}
}
