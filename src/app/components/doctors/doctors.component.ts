import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import {Doctor} from '../../Doctor'

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  doctors: Doctor[] = [];
  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe((doctors) => this.doctors=doctors);
  }

}
