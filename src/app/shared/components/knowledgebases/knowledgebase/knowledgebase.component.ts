import {Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'app-knowledgebase',
  templateUrl: './knowledgebase.component.html',
  styleUrls: ['./knowledgebase.component.scss']
})
export class KnowledgebaseComponent implements OnInit {
  @Input() userName: string;
  @Input() quote: string;
  constructor() { }

  ngOnInit(): void {
  }

}
