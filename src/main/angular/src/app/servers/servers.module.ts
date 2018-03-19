import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServersListComponent } from './servers-list.component';
import { AuthGuard, SharedModule } from '../shared';

const serversRouting: ModuleWithProviders = RouterModule.forChild([
    {
      path: 'servers',
      component: ServersListComponent,
      canActivate: [ AuthGuard ]
    }
  ]);

  @NgModule({
    imports: [
      serversRouting,
      NgbModule,
      SharedModule
    ],
    declarations: [
        ServersListComponent
    ],
    providers: [
    ]
  })
  export class ServersModule {}