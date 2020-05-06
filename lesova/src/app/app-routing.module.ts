import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ShopComponent} from './shop/shop.component';
import {QuoteComponent} from './quote/quote.component';
import {ContactComponent} from './contact/contact.component';
import {LimitedPremiumComponent} from './limited-premium/limited-premium.component';
import {DesignerWearComponent} from './designer-wear/designer-wear.component';
import {LimitedPremiumSingleItemComponent} from './limited-premium-single-item/limited-premium-single-item.component';
import {DesignerWearSingleItemComponent} from './designer-wear-single-item/designer-wear-single-item.component';
import {TshirtslkComponent} from './tshirtslk/tshirtslk.component';
import {SublimationDesignPageComponent} from './sublimation-design-page/sublimation-design-page.component';
import {SublimationPlacementPageComponent} from "./sublimation-placement-page/sublimation-placement-page.component";
import {TShirtsPatternPageComponent} from "./t-shirts-pattern-page/t-shirts-pattern-page.component";
import {DesignProtoTypesPageComponent} from "./design-proto-types-page/design-proto-types-page.component";
import {OrderFormComponent} from './services/order-form/order-form.component';


const routes: Routes = [
  {path: '', redirectTo: 'lesova/orderForm', pathMatch: 'full'},
  {path : 'lesova',
    children: [
      { path: 'home', component : HomeComponent },
      { path: 'orderForm', component : OrderFormComponent },
      { path: 'portfolio', component : PortfolioComponent },
      { path: 'gallery', component : GalleryComponent },
      { path: 'shop', component : ShopComponent },
      { path: 'quote', component : QuoteComponent },
      { path: 'contact', component : ContactComponent },
      { path: 'singleItem', component : LimitedPremiumSingleItemComponent },
      { path: 'singleItemd', component : DesignerWearSingleItemComponent },
      { path: 'limitedPremium', component : LimitedPremiumComponent},
      { path: 'limitedPremiumSingleItem', component : LimitedPremiumSingleItemComponent},
      { path: 'designerWear', component : DesignerWearComponent},
      { path: 'designerSingleItem', component : DesignerWearSingleItemComponent },
      { path: 'sublimationDesign', component : SublimationDesignPageComponent },
      { path: 'sublimationPlacement', component : SublimationPlacementPageComponent },
      { path: 'tshirtPattern', component : TShirtsPatternPageComponent },
      { path: 'designProtoTypes', component : DesignProtoTypesPageComponent },
      { path: 'tshirts.lk', component : TshirtslkComponent }
    ]
  },
  {path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
