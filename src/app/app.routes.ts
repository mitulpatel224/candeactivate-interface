import { Routes, RouterModule } from "@angular/router";
import ComponentOne from "./component-one";
import ComponentTwo from "./component-two";
import ActivateGuard from "./activate-guard";
import DeactivateGuard from "./deactivate-guard";
import ComponentThreeComponent from "./component-three";

export const routes: Routes = [
  { path: "", redirectTo: "component-one", pathMatch: "full" },
  { path: "component-one", component: ComponentOne },
  {
    path: "component-two",
    component: ComponentTwo,
    canActivate: [ActivateGuard],
    canDeactivate: [DeactivateGuard]
  },
  {
    path: "component-three",
    component: ComponentThreeComponent,
    canDeactivate: [DeactivateGuard]
  }
];

export const routing = RouterModule.forRoot(routes);
