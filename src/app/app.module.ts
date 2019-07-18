import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material';
import { SpellsModule } from './components/spells/spells.module';
import { PotionsModule } from './components/potions/potions.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    SpellsModule,
    PotionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
