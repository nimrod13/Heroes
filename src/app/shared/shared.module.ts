import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AttributionComponent } from '../attribution/attribution.component';
import { DtFormFieldModule } from '@dynatrace/barista-components/form-field';
import { DtInputModule } from '@dynatrace/barista-components/input';
import { DtToastModule } from '@dynatrace/barista-components/toast';
import { DtButtonModule } from '@dynatrace/barista-components/button';
import { LoadingComponent } from '../dashboard/loading/loading.component';
import { DtLoadingDistractorModule } from '@dynatrace/barista-components/loading-distractor';
import { DtIconModule } from '@dynatrace/barista-components/icon';
import { DtCardModule } from '@dynatrace/barista-components/card';
import { MessagesComponent } from '../messages/messages.component';

@NgModule({
  declarations: [
    AttributionComponent,
    LoadingComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DtInputModule,
    DtFormFieldModule,
    DtToastModule,
    DtButtonModule,
    DtLoadingDistractorModule,
    DtCardModule,
    DtIconModule.forRoot({ svgIconLocation: 'assets/icons/{{name}}.svg' }),
  ],
  exports: [
    CommonModule,
    FormsModule,
    DtInputModule,
    DtButtonModule,
    DtCardModule,
    DtIconModule,
    MessagesComponent,
    AttributionComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
