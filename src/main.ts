import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const placeholderApiUrl = 'https://your-placeholder-api-url.com'; // Replace with your placeholder API URL

environment.apiUrl = environment.production ? placeholderApiUrl : '';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


