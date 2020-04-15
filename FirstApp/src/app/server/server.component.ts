import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
      .online {
                  color: white;
              }
    `]
})


export class ServerComponent implements OnInit {

  serverId: number = 1;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    this.serverId = 1 + Math.floor(Math.random() * 10);
  }

  ngOnInit(): void {
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
