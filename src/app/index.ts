// App
export * from './layout/base/app.component.ts';
export * from './layout/base/app.service.ts';

import { AppState } from './layout/base/app.service.ts';

// Application wide providers
export const APP_PROVIDERS = [
  AppState
];
