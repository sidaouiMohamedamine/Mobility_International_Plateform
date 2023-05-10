import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { AccomodationUpdateComponent } from './accomodation-update/accomodation-update.component';
import { AccomodationPagesComponent } from './accomodation-pages/accomodation-pages.component';
import { AccomodationOffersComponent } from './accomodation-offers/accomodation-offers.component';
import { NotesComponent } from './notes/notes.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './pagination/pagination.component';
import { AccomodationOfferDetailsComponent } from './accomodation-offer-details/accomodation-offer-details.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
    declarations: [

        AccomodationUpdateComponent,
        AccomodationPagesComponent,
        AccomodationOffersComponent,
        NotesComponent,
        PaginationComponent,
        AccomodationOfferDetailsComponent,

    ],
    imports: [
        CommonModule,
        OwnerRoutingModule,
        FormsModule,
        HttpClientModule,
        NgxPaginationModule,
    ],
    exports:[
    ],

})
export class OwnerModule { }
