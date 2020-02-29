import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {

  eventList: any;
  /* eventList=[
     {
       name:"Exhibition", 
       type:"Technical", 
       date:"21/06/2020", 
       venue:"Main block"
     },
     {
       name:"Workshop" ,
       type:"Technical" ,
       date:"21/06/2020" ,
       venue:"Megalab"
     },
     {
       name:"Dance" ,
       type:"Non-Technical" ,
       date:"21/06/2020", 
       venue:"Auditorium"
     }
   ]*/

  constructor(private httpclient:HttpClient) { 
    this.getEventList();
  }

  ngOnInit(): void {
  }
  getEventList(){
    //let url="https://api.myjson.com/bins/hppuc";
    let url="http://localhost:8080/page1/page5"
    let self = this;
    this.httpclient.get(url).subscribe(response=>{
      self.eventList=response;
    });
  }

}
