import { Component } from "@angular/core";
import { Deactivate } from "./deactivate.class";

@Component({
  selector: "component-two",
  template: `
    <h4>Guarded Component Two</h4>
    <p>
      Try navigating away (back to component one). It will be blocked unless
      "Can deactivate" checkbox is checked.
    </p>
    <div>
      Can deactivate:
      <input
        #candeactivate
        type="checkbox"
        (change)="checkboxChanged(candeactivate.checked)"
      />
    </div>
  `
})
export default class ComponentTwo implements Deactivate {
  private checked: boolean;
  constructor() {}

  canDeactivate() {
    return this.checked;
  }

  checkboxChanged(checked) {
    this.checked = checked;
  }
}
