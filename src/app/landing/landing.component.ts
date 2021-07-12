import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  slidePictures = [
    { path: 'assets/images/snow.png',id:1},
    { path: 'assets/images/red.png',id:2},
    { path: 'assets/images/mountains.png',id:3},

  ];

  articlePictures = [
    {path:'assets/images/html5.png',id:1,desc:'html5'},
    {path:'assets/images/bootstrap.png',id:2,desc:'bootstrap'},
    {path:'assets/images/css3.png',id:3,desc:'css'},
    {path:'assets/images/angular.png',id:4,desc:'angular'},
    {path:'assets/images/c_sharp.png',id:5,desc:'c sharp'},
    {path:'assets/images/flutter.png',id:6,desc:'flutter'},
    {path:'assets/images/dart.png',id:7,desc:'desc'},
    {path:'assets/images/java_core.jpg',id:8,desc:'desc'},
    {path:'assets/images/javascript.png',id:9,desc:'desc'},
    {path:'assets/images/mongo.jpg',id:10,desc:'desc'},
    {path:'assets/images/nginx.png',id:11,desc:'desc'},
    {path:'assets/images/nodejs.png',id:12,desc:'desc'},
    {path:'assets/images/oracle.png',id:13,desc:'desc'},
    {path:'assets/images/python.png',id:14,desc:'desc'},
    {path:'assets/images/splunk.png',id:15,desc:'desc'},
    {path:'assets/images/spring_boot.jpg',id:16,desc:'desc'},
    {path:'assets/images/rest_api.png',id:17,desc:'desc'},
    {path:'assets/images/visual_studio.png',id:18,desc:'desc'},
    {path:'assets/images/unity.png',id:19,desc:'desc'},
    {path:'assets/images/krita.png',id:20,desc:'desc'},
    {path:'assets/images/photoshop.png',id:21,desc:'desc'},
  ];

 /* articlePictures2 = [
    {path:'assets/images/javascript.png',id:9,desc:'desc'},
    {path:'assets/images/mongo.jpg',id:10,desc:'desc'},
    {path:'assets/images/nginx.png',id:11,desc:'desc'},
    {path:'assets/images/nodejs.png',id:12,desc:'desc'},
    {path:'assets/images/oracle.png',id:13,desc:'desc'},
    {path:'assets/images/python.png',id:14,desc:'desc'},
    {path:'assets/images/splunk.png',id:15,desc:'desc'},
    {path:'assets/images/spring_boot.jpg',id:16,desc:'desc'},

  ];
*/
  
  

  constructor() { }

  ngOnInit() {
  }

}
