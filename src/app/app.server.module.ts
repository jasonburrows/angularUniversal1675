import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

import { NgxMasonryModule } from 'ngx-masonry';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  exports: [
    NgxMasonryModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
