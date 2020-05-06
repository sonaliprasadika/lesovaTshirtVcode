import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { OffsetPanelComponent } from './offset-panel/offset-panel.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ShopComponent } from './shop/shop.component';
import { QuoteComponent } from './quote/quote.component';
import { ContactComponent } from './contact/contact.component';
import { LimitedPremiumComponent } from './limited-premium/limited-premium.component';
import { DesignerWearComponent } from './designer-wear/designer-wear.component';
import { DesignerWearSingleItemComponent } from './designer-wear-single-item/designer-wear-single-item.component';
import { LimitedPremiumSingleItemComponent } from './limited-premium-single-item/limited-premium-single-item.component';
import {GoogleMapCountryMapComponent} from './services/google-map-country-map.component';
import { TshirtslkComponent } from './tshirtslk/tshirtslk.component';
import {GoogleMapComponent} from './services/google-map.component';
import { LimitedPremiumBlockComponent } from './limited-premium-block/limited-premium-block.component';
import { CustomizedClothingBlockComponent } from './customized-clothing-block/customized-clothing-block.component';
import { TShirtslkBlockComponent } from './t-shirtslk-block/t-shirtslk-block.component';

import {SlideshowModule} from 'ng-simple-slideshow';
import { SublimationDesignPageComponent } from './sublimation-design-page/sublimation-design-page.component';
import { SublimationPlacementPageComponent } from './sublimation-placement-page/sublimation-placement-page.component';
import { DesignProtoTypesPageComponent } from './design-proto-types-page/design-proto-types-page.component';
import { TShirtsPatternPageComponent } from './t-shirts-pattern-page/t-shirts-pattern-page.component';
import { TShirtslkBlockInnerComponent } from './tshirtslk-block-inner/tshirtslk-block-inner.component';
import { OrderFormComponent } from './services/order-form/order-form.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    OffsetPanelComponent,
    MainSliderComponent,
    FooterComponent,
    PortfolioComponent,
    GalleryComponent,
    ShopComponent,
    QuoteComponent,
    ContactComponent,
    LimitedPremiumComponent,
    DesignerWearComponent,
    DesignerWearSingleItemComponent,
    LimitedPremiumSingleItemComponent,
    GoogleMapCountryMapComponent,
    GoogleMapComponent,
    TshirtslkComponent,
    LimitedPremiumBlockComponent,
    CustomizedClothingBlockComponent,
    TShirtslkBlockComponent,
    SublimationDesignPageComponent,
    SublimationPlacementPageComponent,
    DesignProtoTypesPageComponent,
    TShirtsPatternPageComponent,
    TShirtslkBlockInnerComponent,
    OrderFormComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
