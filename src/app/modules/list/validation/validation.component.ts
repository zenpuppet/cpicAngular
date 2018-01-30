import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../data/api.service';


@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  public validations;

  constructor(private _api: ApiService) { }

  public ngOnInit() {
    // console.log(this._api);
    this._api.loadData("https://jsonplaceholder.typicode.com/posts").subscribe((results) => {

        // console.log(results)
        // do stuff with our data here.
        // ....
        // asign data to our class property in the end
        // so it will be available to our template
        this.validations = results
    })

    this._api.loadData("./assets/data/validations.json").subscribe((results) => {

        console.log("Validations", results)
        // do stuff with our data here.
        // ....
        // asign data to our class property in the end
        // so it will be available to our template
        // this.validations = results
    })

}
}
