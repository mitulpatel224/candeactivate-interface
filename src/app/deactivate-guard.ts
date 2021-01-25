import { CanDeactivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { Deactivate } from "./deactivate.class";

@Injectable()
export default class DeactivateGuard implements CanDeactivate<Deactivate> {
  canDeactivate(component: Deactivate) {
    let can = component.canDeactivate();
    console.log("DeactivateGuard#canDeactivate called, can: ", can);
    if (!can) {
      alert("Deactivation blocked");
      return false;
    }

    return true;
  }
}
