import { Component, OnInit, Input } from '@angular/core';
import {Doctor} from '../../Doctor'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-doctor-item',
  templateUrl: './doctor-item.component.html',
  styleUrls: ['./doctor-item.component.css']
})
export class DoctorItemComponent implements OnInit {

  @Input() doctor!: Doctor;
  faCalendarCheck = faCalendarCheck;

  constructor() { }

  ngOnInit(): void {
  }

}
