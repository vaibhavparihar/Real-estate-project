import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { OurVersionComponent } from './components/our-version/our-version.component';
import { HomeSectionItemsComponent } from './components/home-section-items/home-section-items.component';
// import { TooltipModule } from './tooltip-pro/tooltip.module';

@NgModule({
  declarations: [
    OurServicesComponent,
    OurVersionComponent,
    HomeSectionItemsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatTabsModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatNativeDateModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatExpansionModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatRadioModule,
    // TooltipModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatTabsModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatNativeDateModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatExpansionModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatRadioModule,
    HomeSectionItemsComponent,
    OurServicesComponent,
  ],
})
export class SharedModule {}
