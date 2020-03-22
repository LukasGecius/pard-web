import { Component, OnInit } from "@angular/core";
import { IVendor } from "@models/vendor.interface";
import { Subscription } from "rxjs";
import { DbServiceService } from "src/@features/services/db-service.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-vendor-listings",
  templateUrl: "./vendor-listings.component.html",
  styleUrls: ["./vendor-listings.component.scss"]
})
export class VendorListingsComponent implements OnInit {
  public listings: any;
  subscription: Subscription;

  constructor(
    private dbService: DbServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.subscription = this.dbService
        .getVendorListings(params.vendorId)
        .subscribe(listings => {
          this.listings = listings;
        });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}