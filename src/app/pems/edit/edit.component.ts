import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { CourseService } from '../../course.service';
import { Course } from '../../course';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class PEditComponent implements OnInit {

   constructor(
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService
  ) { }

  ngOnInit() {
      this.getSingleCourse();
  }

  model:any={};
  //model = new Project();
  aid = this.route.snapshot.params['aid'];
   getSingleCourse(){
    
    this.courseService
      .getCourse(this.aid)
      .subscribe(course1 =>{
          this.model = course1[0];
          })
  };
  
  updateCourse(){
      this.courseService
        .updateCourse(this.model)
       .subscribe(()=> this.goBack());
  }
 
   goBack(){
    this.router.navigate(['/home']);
  }
}
