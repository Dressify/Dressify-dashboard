import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-help-board',
  templateUrl: './help-board.component.html',
  styleUrls: ['./help-board.component.scss']
})
export class HelpBoardComponent implements OnInit {
  @Input() userName: string;
  @Input() quote: string;
  constructor() { }

  ngOnInit(): void {
  }

}
