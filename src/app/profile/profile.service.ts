import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 6',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'PHP\/CODEIGNITER',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'C++',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'PYTHON',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'ADOBE ILLUSTRATOR',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'DATA STRUCTURE',
      'progress': '70%'
    }
  ];

  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2019 - present',
      'education': 'Bachelor\'s Degree',
      'stream': 'BCom IT Mangement',
      'institution': 'Mancosa'
    },
    {
      'id': '2',
      'from_to_year': ' 2019 - 2020',
      'education': 'Certificate',
      'stream': 'Software Engineering',
      'institution': 'Hyperion Development'
    },
    {
      'id': '3',
      'from_to_year': '2012 - 2013',
      'education': 'High School',
      'stream': 'Science and Mathematics',
      'institution': 'SARSWATI SHISHU VIDHYA MANDIR, DHAMNOD, DHAR'
    }
  ];

  exprienceData: any = [
    {
      
    },
    {
     
    },
    {
     
    }
  ];
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}
