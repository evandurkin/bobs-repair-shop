import { Component, OnInit } from '@angular/core';
import { Service } from '../service.interface'
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})


export class ServicesComponent implements OnInit {
  passwordReset = { isChecked: false, value: 39.99 };
  spywareRemoval = { isChecked: false, value: 99.99 };
  ramUpgrade = { isChecked: false, value: 129.99 };
  softwareInstallation = { isChecked: false, value: 49.99 };
  tuneUp = { isChecked: false, value: 89.99 };
  keyboardCleaning = { isChecked: false, value: 45.00 };


  get total() {
    return(
    (this.passwordReset.isChecked ? this.passwordReset.value : 0) +
    (this.spywareRemoval.isChecked ? this.spywareRemoval.value : 0) +
    (this.ramUpgrade.isChecked ? this.ramUpgrade.value : 0) +
    (this.softwareInstallation.isChecked ? this.softwareInstallation.value : 0) +
    (this.tuneUp.isChecked ? this.tuneUp.value : 0) +
    (this.keyboardCleaning.isChecked ? this.keyboardCleaning.value : 0)
    )
  }
  constructor(){}
  ngOnInit(): void {
  }


}
