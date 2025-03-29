import { Component , OnInit } from '@angular/core';
import { RouterLink,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  imports: [ RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  photoCover: string = "https://picsum.photos/1000/500"
  contentTitle: string = ""
  contentDescription: string = ""

constructor(private route: ActivatedRoute) {}

ngOnInit() {
  this.route.paramMap.subscribe((params) => {
      console.log(params.get("id"))
  })
}

}
