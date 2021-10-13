import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from 'src/app/service/author.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  id_author:number = 0;

  constructor(private AuthorInyectado: AuthorService,private route: Router,private RutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_author = this.RutaActiva.snapshot.params.id;
  }

  delete(){
    this.AuthorInyectado.deleteAuthor(this.id_author).subscribe((response)=>{
      this.route.navigate([''])
    });    
  }

}
