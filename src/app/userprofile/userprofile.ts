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
      name : 'Hari',
      email : 'hari@gmail.com',
      role : 'Frontend Developer',
      image : 'images/me.png',
      description : 'Passionate developer learning Angular and building modern web apps.'
    },
    {
      name : 'sathya',
      email : 'sathya@gmail.com',
      role : 'Data Engineer',
      description : 'Passionate developer learning Angular and building modern web apps.'
    },
    {
      name : 'Vineesh',
      email : 'Vineesh@gmail.com',
      role : 'Business analyst',
      description : 'Passionate developer learning Angular and building modern web apps.'
    },
    {
      name : 'Ragul',
      email : 'ragul@gmail.com',
      role : 'QA Tester',
      image : 'images/me.png',
      description : 'Passionate developer learning Angular and building modern web apps.'
    },
    {
      name : 'Muthu',
      email : 'muthu@gmail.com',
      role : 'Full stack Developer',
      description : 'Passionate developer learning Angular and building modern web apps.'
    },
    {
      name : 'Prasanna',
      email : 'prasanna@gmail.com',
      role : 'Senior Software Developer',
      description : 'Passionate developer learning Angular and building modern web apps.'
    }




  ];
}
