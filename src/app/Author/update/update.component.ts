import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from 'src/app/models/author';
import { AuthorService } from 'src/app/service/author.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  authorForm: FormGroup;
  author:Author = new Author();
  id_author:number = 0;

  constructor(private AuthorInyectado: AuthorService,private fbGenerator: FormBuilder,private RutaActiva: ActivatedRoute, private route: Router) {
    this.authorForm = this.fbGenerator.group({
      name:['',Validators.required],
      country:['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.id_author = this.RutaActiva.snapshot.params.id;
    this.AuthorInyectado.getAuthor(this.id_author).subscribe((authorResponse)=>{
        this.author = authorResponse;
        this.authorForm = this.fbGenerator.group({
          name:['',Validators.required],
          country:['',Validators.required]
        })
        
        this.authorForm.setValue({
          name:this.author.name,
          country:this.author.country,
        });
    });
        
  }

  update(){
    this.author = this.authorForm.value as Author;
    this.author.id = this.id_author;
    this.AuthorInyectado.updateAuthor(this.author).subscribe((authorRecived)=>{
      this.route.navigate(['']);
    });

  }

}
