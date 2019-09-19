import { ApstoryLogger8Service } from './apstory-logger8.service';
import { NgModule, ModuleWithProviders } from '@angular/core';


@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class ApstoryLogger8Module {
  static forRoot(instrumentationKey: string): ModuleWithProviders {
    return {
      ngModule: ApstoryLogger8Module,
      providers: [ApstoryLogger8Service, { provide: 'instrumentationKey', useValue: instrumentationKey }]
    };
  }
}
