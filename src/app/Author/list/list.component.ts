import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from 'src/app/models/author';
import { AuthorService } from 'src/app/service/author.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  authors: Array<Author> = new Array<Author>();

  constructor(private AuthorInyectado: AuthorService, private route: Router) { }

  ngOnInit(): void {
    this.AuthorInyectado.getAuthors().subscribe((authorsResponse)=>{
      this.authors = authorsResponse;
    });
  }

  authorDetail(authorId:number){
    this.route.navigate(['detail/'+authorId]);
  }

  updateAuthor(authorId:number){
    this.route.navigate(['update/'+authorId]);
  }

  deleteAuthor(authorId:number){
    this.route.navigate(['delete/'+authorId]);
  }

}
