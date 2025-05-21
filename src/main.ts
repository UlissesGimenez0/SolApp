import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { PageComponent } from './app/view/page/page.component';

bootstrapApplication(PageComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ]
});
