import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTES } from '@angular/router';
import { DynamicComponentManifest } from './dynamic-component-manifest';
// export const DYNAMIC_COMPONENT_MANIFESTS = new InjectionToken<any>(‘DYNAMIC_COMPONENT_MANIFESTS’);

@NgModule({
  providers: [{provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader}],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DynamicComponentLoaderModule { 
  // static forRoot(manifests: DynamicComponentManifest[]): ModuleWithProviders {
  //   return {
  //     ngModule: DynamicComponentLoaderModule,
  //     providers: [
  //       // provider for Angular CLI to analyze
  //       { provide: ROUTES, useValue: manifests, multi: true }
  //     ],
  //   };
  // }
}
