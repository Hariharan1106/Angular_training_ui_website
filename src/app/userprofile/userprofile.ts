import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Navbar } from "../navbar/navbar";


@Component({
  selector: 'app-userprofile',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './userprofile.html',
  styleUrl: './userprofile.css'
})
export class Userprofile {

  
@ViewChild('cardContainer') cardContainer!: ElementRef;

  scrollLeft() {
    this.cardContainer.nativeElement.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.cardContainer.nativeElement.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }
// dsfsf
  

  
  users = [

     {
      name : 'Prasanna',
      email : 'prasanna@gmail.com',
      role : 'Senior Software Developer',
      description : 'Analyze requirements and design system architecture.',
      images: 'images/pk.jfif'
    },
    
    
    // {
    //   name : 'Vineesh',
    //   email : 'Vineesh@gmail.com',
    //   role : 'Business analyst',
    //   description : 'Collaborate with stakeholders, developers, testers, and project managers.',
    //     images: 'images/vineesh.JPG'  
    // },
    {
      name : 'Ragul',
      email : 'ragul@gmail.com',
      role : 'QA Tester',
      image : 'images/me.jpg',
      description : 'Conduct various types of testing like functional, performance, regression, and UAT (User Acceptance Testing).',
        images: 'images/ragul.JPG'
    },
    {
      name : 'Muthu',
      email : 'muthu@gmail.com',
      role : 'Full stack Developer',
      description : 'Design and develop frontend user interfaces using modern frameworks.',
        images: 'images/muthu.JPG'   
    },
    {
      name : 'sathya',
      email : 'sathya@gmail.com',
      role : 'Data Engineer',
      description : 'Work with large-scale datasets from multiple sources (databases, APIs, logs, etc.).',
        images: 'images/sathya.jfif'
    },
   {
      name : 'Hari',
      email : 'hari@gmail.com',
      role : 'Frontend Developer',
      image : 'images/me.jpg',
      description : 'Passionate developer learning Angular and building modern web apps.',
      images: 'images/hari.jfif'
    }
  ];
}
