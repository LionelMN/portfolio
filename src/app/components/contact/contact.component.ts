import { Component, OnInit } from '@angular/core';
import { SocialLinkI } from '../../interfaces/social-link-i';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  socialLinks : SocialLinkI[] = [
    {
      url: "lionelmontesnuez@gmail.com",
      socialNetwork: "gmail",
      description: "Send me an email!"
    },
    {
      url: "https://www.linkedin.com/in/lionel-montesdeoca-nuez/",
      socialNetwork: "linkedin",
      description: "Connect with me on a professional level on Linkedin"
    },
    {
      url: "https://github.com/LionelMN",
      socialNetwork: "github",
      description: "Check out my Github for my personal projects"
    },
    {
      url: "https://twitter.com/NuezLionel",
      socialNetwork: "twitter",
      description: "Connect with me on a personal level on Twitter"
    },
  ]

  ngOnInit(): void {
  }

}
