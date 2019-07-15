import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

/*importin routing module*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*importing components*/
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { BankhttpService } from './bankhttp.service';
import { BangalorecityComponent } from './bangalorecity/bangalorecity.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ChennaicityComponent } from './chennaicity/chennaicity.component';
import { DelhicityComponent } from './delhicity/delhicity.component';
import { HyderabadcityComponent } from './hyderabadcity/hyderabadcity.component';


/*importing angular material libraries or modules*/
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material';
import { MatBadgeModule, MatPaginatorModule, MatCheckboxModule, MatSortModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BangalorecityComponent,
    FavoritesComponent,
    ChennaicityComponent,
    DelhicityComponent,
    HyderabadcityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatBadgeModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatButtonToggleModule,
    MatIconModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSortModule,

    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'bangalore', component: BangalorecityComponent },
      { path: 'fav', component: FavoritesComponent },
      { path: 'chennai', component: ChennaicityComponent },
      { path: 'hyderabad', component: HyderabadcityComponent },
      { path: 'delhi', component: DelhicityComponent }
    ])
  ],
  /*adding the http service in providers*/
  providers: [BankhttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
