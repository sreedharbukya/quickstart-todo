import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {TodoDataService} from "./todo.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports:      [ BrowserModule,
    FormsModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TodoDataService]
})
export class AppModule { }
