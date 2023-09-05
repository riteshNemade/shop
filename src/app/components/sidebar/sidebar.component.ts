import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  categories: String[]=[];
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories=data;
    })
  }

  
}


