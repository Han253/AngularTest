import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Author } from 'src/app/models/author';
import { AuthorService } from 'src/app/service/author.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  authorForm: FormGroup;
  author:Author = new Author();

  constructor(private AuthorInyectado: AuthorService,private fbGenerator: FormBuilder, private route: Router) {
    this.authorForm = this.fbGenerator.group({
      name:['',Validators.required],
      country:['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.authorForm = this.fbGenerator.group({
      name:['',Validators.required],
      country:['',Validators.required]
    })
  }

  add_author(){
    this.author = this.authorForm.value as Author;
    this.AuthorInyectado.addAuthor(this.author).subscribe((authorRecived)=>{
      this.route.navigate([''])
    });
  }

}
