import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  trackName: string = 'Dotnet';

  @Output() myEvent = new EventEmitter();
  ngOnInit(): void {
    this.myEvent.emit(this.trackName);
  }
}
