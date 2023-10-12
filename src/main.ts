import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { initAuth } from '@badisi/ngx-auth';


/**
 * Auth configuration
 * @see https://badisi.github.io/auth-js/site/documentation/configuration
 */
initAuth({
  authorityUrl: 'https://dev-fijd1e9x.us.auth0.com',
  clientId: 'kRVVEnAWKMpxxpcodl0TqLXfIHgQvmmt',
  scope: `openid profile email phone offline_access read:current_user`,
  loadUserInfo: false,
  loginRequired: false,
}).then(authProvider => {
  platformBrowserDynamic([
    authProvider
  ]).bootstrapModule(AppModule).catch(err => console.error(err));
}).catch(error => console.error(error));
