import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators/map';
import 'rxjs/add/operator/catch';

import { ApiService } from '../../shared/services/api.service';
import { Crawl } from './crawl.model';

@Injectable()
export class ServerCrawlService {
    constructor(
        private http: Http,
        private apiService: ApiService
      ) {}

    get(): Observable<Crawl> {
        return this.apiService.get('/computenode/crawl')
            .pipe(map((data: { crawl: Crawl }) => data.crawl));
    }

}