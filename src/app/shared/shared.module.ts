import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatSelectModule, MatDialogModule,
  MatAutocompleteModule, MatInputModule, MatMenuModule,
  MatButtonModule, MatIconModule, MatCardModule, MatRadioModule,
  MatListModule, MatTabsModule, MatDatepickerModule, MatTableModule, MatStepperModule, MatChipsModule,
  MatSlideToggleModule, MatExpansionModule, MatSliderModule, MatSnackBarModule, MatProgressSpinnerModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
  imports: [
    CommonModule,
    MatSlideToggleModule, MatExpansionModule, MatSliderModule, MatSnackBarModule, MatProgressSpinnerModule,
    MatSelectModule, MatDialogModule, BrowserAnimationsModule, MatSnackBarModule,
    MatAutocompleteModule, MatInputModule, MatMenuModule, CdkTableModule, CdkTreeModule, A11yModule,
    MatButtonModule, MatIconModule, MatCardModule, MatRadioModule,
    MatListModule, MatTabsModule, MatDatepickerModule, MatTableModule, MatStepperModule, MatChipsModule,
    MatSlideToggleModule, MatExpansionModule, MatSliderModule
  ],
  exports: [
    MatSlideToggleModule, MatExpansionModule, MatSliderModule, MatSnackBarModule, MatProgressSpinnerModule,
    MatSelectModule, MatDialogModule, BrowserAnimationsModule, MatSnackBarModule,
    MatAutocompleteModule, MatInputModule, MatMenuModule, CdkTableModule, CdkTreeModule, A11yModule,
    MatButtonModule, MatIconModule, MatCardModule, MatRadioModule,
    MatListModule, MatTabsModule, MatDatepickerModule, MatTableModule, MatStepperModule, MatChipsModule,
    MatSlideToggleModule, MatExpansionModule, MatSliderModule
  ],
  declarations: []
})
export class SharedModule { }
