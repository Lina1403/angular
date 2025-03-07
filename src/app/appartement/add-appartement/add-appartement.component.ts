import { Component } from '@angular/core';
import { FormControl, FormGroup ,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-appartement',
  templateUrl: './add-appartement.component.html',
  styleUrls: ['./add-appartement.component.css']
})
export class AddAppartementComponent {

  AddApart= new FormGroup({

    apartNum :new FormControl('',Validators.required),

    floorNum :new FormControl('',[Validators.required,Validators.min(2)]),

    surface :new FormControl(''),

    terrace :new FormControl('yes'),

    surfaceterrace :new FormControl(''),

    category :new FormControl(''),

    ResidenceId :new FormControl('')

   });


}

