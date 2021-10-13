import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from 'src/app/models/author';
import { AuthorService } from 'src/app/service/author.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  author:Author = new Author();
  id_author:number = 0;

  constructor(private AuthorInyectado: AuthorService,private route: Router,private RutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_author = this.RutaActiva.snapshot.params.id;
    this.AuthorInyectado.getAuthor(this.id_author).subscribe((authorResponse)=>{
        this.author = authorResponse;
    });
  }

  regresar(){
    this.route.navigate(['']);
  }

}
