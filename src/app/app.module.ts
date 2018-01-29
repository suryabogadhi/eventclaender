import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EventsService } from './events.service';

// Import our library
import { FullCalendarModule } from 'ng-fullcalendar';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
   // CalendarModule.forRoot()
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
