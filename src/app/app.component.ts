import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showOfflineIcon: boolean;

  ngOnInit(): void {
    this.showOfflineIcon = !navigator.onLine;
    window.addEventListener('online', () => this.showOfflineIcon = false);
    window.addEventListener('offline', () => this.showOfflineIcon = true);
  }
}
