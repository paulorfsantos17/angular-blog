import { Component , OnInit } from '@angular/core';
import { RouterLink,ActivatedRoute } from '@angular/router';
import { DATA_FAKE } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  imports: [ RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  private id: string | null = ""
  photoCover: string = "https://picsum.photos/1000/500"
  contentTitle: string = ""
  contentDescription: string = ""

constructor(private route: ActivatedRoute) {}

ngOnInit() {
  this.route.paramMap.subscribe((params) => {
      this.id = params.get("id")
  })

    this.setValuesToComponent(this.id)
  
}

setValuesToComponent(id: string | null) {
  const result = DATA_FAKE.find((article) => article.id.toString() == id)
  this.contentTitle = result?.title ?? ""
  this.contentDescription = result?.description ?? ""
  this.photoCover = result?.photoCover ?? ""
}

}
