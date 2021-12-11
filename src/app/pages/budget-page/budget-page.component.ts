import { Component, OnInit } from '@angular/core';
import { BudgetService } from './budget.service';

@Component({
  selector: 'app-budget-page',
  templateUrl: './budget-page.component.html',
  styleUrls: ['./budget-page.component.scss']
})
export class BudgetPageComponent implements OnInit {

  pedidos: any;

  constructor(private budgetService: BudgetService) { }

  ngOnInit(){

}

}
