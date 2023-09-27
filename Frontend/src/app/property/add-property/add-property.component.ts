import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('Form') addPropertyForm!: NgForm;
  @ViewChild('formTabs') formTabs!: TabsetComponent;

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

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }

  onSubmit(Form : NgForm) {
    console.log('Congratulations! Form Submitted.')
    console.log(this.addPropertyForm)
  }

}
