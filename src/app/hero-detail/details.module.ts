import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroDetailComponent } from './hero-detail.component';
import { FallbackimgDirective } from '../fallbackimg.directive';
import { DtInlineEditorModule } from '@dynatrace/barista-components/inline-editor';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FallbackimgDirective,
    HeroDetailComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    DtInlineEditorModule,
    RouterModule.forChild([{ path: '', component: HeroDetailComponent }]),
  ],

})
export class DetailsModule { }
