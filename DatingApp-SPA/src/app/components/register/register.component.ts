import { ValuesService } from './../../services/values.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  values: any = [];
  constructor(private authService: AuthService, private valuesService: ValuesService) { }

  ngOnInit() {
    this.valuesService.listAllValues().subscribe((values) => {
       this.values = values;
    });

  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      console.log('Successfully Register');
    }, error => {
      console.log(error.error);
    });
  }
  cancel() {

  }

}
