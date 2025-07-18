import { Component } from '@angular/core';
import { About } from "../about/about";
import { Userprofile } from "../userprofile/userprofile";
import { Footer } from '../footer/footer';
import { Management } from "../management/management";
import { Contact } from "../contact/contact";
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [About, Userprofile, Footer, Management, Contact, Navbar],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
