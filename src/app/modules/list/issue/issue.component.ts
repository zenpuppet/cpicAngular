import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../data/api.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  public issues;

  constructor(private _api: ApiService) { }

  public ngOnInit() {
    // console.log(this._api);
    this._api.loadData("https://api.github.com/repos/ombegov/ITDB-schema/issues?state=open").subscribe((results) => {

        console.log(results)
        // do stuff with our data here.
        // ....
        // asign data to our class property in the end
        // so it will be available to our template
        this.issues = results
    })

}
}
