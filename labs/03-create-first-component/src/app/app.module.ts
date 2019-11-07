import { LeafletModule } from './leaflet/leaflet.module';
import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
    declarations: [AppComponent, SidebarComponent, FooterComponent],
    imports:      [BrowserModule, LeafletModule, HttpClientModule],
    bootstrap:    [AppComponent],
})
export class AppModule {}
