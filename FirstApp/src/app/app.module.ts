import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { NgForAddCompComponent } from './ng-for-add-comp/ng-for-add-comp.component';
import { DatabindingSampleComponent } from './databinding-sample/databinding-sample.component';
import { DatabindingFinalComponent } from './Component/databinding-final/databinding-final.component';
import { CockpitComponent } from './Component/cockpit/cockpit.component';
import { ServerElementComponent } from './Component/server-element/server-element.component';

@NgModule({
  declarations:[
    AppComponent,
    ServerComponent,
    ServersComponent,
    NgForAddCompComponent,
    DatabindingSampleComponent,
    DatabindingFinalComponent,
    CockpitComponent,
    ServerElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [DatabindingSampleComponent]
})

export class AppModule { }
