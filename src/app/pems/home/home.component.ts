import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { CommonModule } from '@angular/common';

import { CourseService } from '../../course.service';
import { Course } from '../../course';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class PHomeComponent implements OnInit {
        
 
  constructor(
    private _courseService:CourseService,
   private route: ActivatedRoute,
    private router: Router
   ) {
     
  }
  courses:any={};
  count:any;
  ngOnInit() {
   this.getCourses(); 
  this.count=0;  
  }
    
 
 uid:any;
  getCourses(){
       this._courseService
        .getCourses()
        .subscribe(employ => {
          this.courses = employ;
      
    } )
   
     
           
}
  deleteCourse(id){
      this._courseService
        .deleteCourse(id)
        .subscribe(() => {
        this.getCourses();
      } )
  }

}
