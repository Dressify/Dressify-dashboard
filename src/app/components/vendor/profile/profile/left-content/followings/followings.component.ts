import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followings',
  templateUrl: './followings.component.html',
  styleUrls: ['./followings.component.scss']
})
export class FollowingsComponent implements OnInit {
  public isProfile = false;
  constructor() { }

  ngOnInit(): void {
  }

}
