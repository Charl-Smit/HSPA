import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('Form') addPropertyForm!: NgForm;

  constructor(private router: Router, private housingService: HousingService) {}

  ngOnInit() {
    this.housingService.getAllCities().subscribe(data => {
       console.log(data)
     })
    setTimeout(() => {
      this.addPropertyForm.controls['Name'].setValue('Default Value');
    });
  }

  onBack() {
    this.router.navigate(['/'])
  }

  onSubmit(Form : NgForm) {
    console.log('Congratulations! Form Submitted.')
    console.log(this.addPropertyForm)
  }

}
