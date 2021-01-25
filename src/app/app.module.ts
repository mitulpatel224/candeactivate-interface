import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { routing } from "./app.routes";

import AppComponent from "./app.component";
import ComponentOne from "./component-one";
import ComponentTwo from "./component-two";
import ActivateGuard from "./activate-guard";
import DeactivateGuard from "./deactivate-guard";
import ComponentThreeComponent from "./component-three";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule, BrowserModule, routing, FormsModule],
  declarations: [
    AppComponent,
    ComponentOne,
    ComponentTwo,
    ComponentThreeComponent
  ],
  providers: [ActivateGuard, DeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
