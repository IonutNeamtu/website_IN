import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

if (module.hot) {
  module.hot.accept('./app/app.module', bootstrap);
} else {
  enableProdMode();
  bootstrap();
}
