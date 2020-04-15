import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-final',
  templateUrl: './databinding-final.component.html',
  styleUrls: ['./databinding-final.component.css']
})


export class DatabindingFinalComponent implements OnInit {
    serverElements = [
    {
      type : 'server',
      name : 'Testserver',
      content : 'Just a test!'
    }];
    

  constructor() { }

  ngOnInit(): void {
  }

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push(
      {
        type: 'server',
        name: serverData.serverName,
        content: serverData.serverContent
      });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push(
      {
        type: 'blueprint',
        name: blueprintData.serverName,
        content: blueprintData.serverContent
      });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0,1);
  }
}
