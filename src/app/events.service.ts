import { Inject,Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class EventsService {
  
  constructor() { }

    public getEvents(): Observable<any> {
    const dateObj = new Date();
    const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
    let data: any = [
      {
        title: 'Event1',
        start: '2018-01-01'
    },
    {
        title: 'Event2',
        start: '2018-02-01'
    }
    ];
    return Observable.of(data);
}

}
