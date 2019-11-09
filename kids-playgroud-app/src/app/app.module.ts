import { AppRoutingModule } from './app-routing.module';
import { LeafletModule } from './leaflet/leaflet.module';
import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './map/map.component';

@NgModule({
    declarations: [AppComponent, SidebarComponent, FooterComponent, MapComponent],
    imports:      [BrowserModule, LeafletModule, HttpClientModule, AppRoutingModule],
    bootstrap:    [AppComponent],
})
export class AppModule {}
