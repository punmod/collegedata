import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CourseService {
  courses=[];
  constructor(private _http:Http) { }
  checkMe:any;
   getCourses(){
    
    return this._http.get("http://misrusachd.in/api/courseapi/select.php/")
      .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
           return res.json()
        }
       
      });
  }
  addCourse(info){
    return this._http.post("http://misrusachd.in/api/courseapi/insert.php",info)
      .map(()=>"");
  }
  getCourse(aid){
    return this._http.post("http://misrusachd.in/api/courseapi/selectone.php/",{'aid':aid})
      .map(res=>res.json());
  }
  deleteCourse(id){
    return this._http.post("http://misrusachd.in/api/courseapi/delete.php/",{'id':id})
      .map(()=>this.getCourses());
  }
  updateCourse(info){
    return this._http.post("http://misrusachd.in/api/courseapi/update.php/", info)
      .map(()=>"");
  }
}
