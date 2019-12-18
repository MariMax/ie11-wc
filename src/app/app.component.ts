import { Component, Input } from "@angular/core";

@Component({
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @Input()
  public handler = {
    onClick() {
      console.log("test");
    }
  };
  @Input()
  public caption = 'test';

  public onClick() {
    this.handler.onClick();
  }
}
