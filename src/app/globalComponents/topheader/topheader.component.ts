import { Component, OnInit, ViewChild } from "@angular/core";
import { CartStoreService } from "src/app/@features/stores/cart/cart.store.service";
import { Subscription } from "rxjs";
import { NbPopoverDirective } from "@nebular/theme";
import { CartItem } from "@models/cart/cartitem.interface";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-topheader",
  templateUrl: "./topheader.component.html",
  styleUrls: ["./topheader.component.scss"]
})
export class TopheaderComponent implements OnInit {
  public items = [
    { title: "Home", link: "/" },
    { title: "About", url: "https://pard.lt/" },
    { title: "Log out" }
  ];
  public lastItemAddedToCartSubscribtion: Subscription;
  public lastItemAddedToCart: CartItem = null;
  private timer: ReturnType<typeof setTimeout>;

  @ViewChild(NbPopoverDirective) addedNotificationPopover: NbPopoverDirective;

  constructor(
    private cartStoreService: CartStoreService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.lastItemAddedToCartSubscribtion = this.cartStoreService._lastAddedItem$.subscribe(
      item => {
        this.lastItemAddedToCart = item;
        this.addedNotificationPopover && this.handleNewItemNotification(item);
      }
    );
  }

  handleNewItemNotification(item) {
    const TIME_TO_CLOSE = 4000;
    clearTimeout(this.timer);
    this.addedNotificationPopover.show();
    this.timer = setTimeout(() => {
      this.addedNotificationPopover.hide();
    }, TIME_TO_CLOSE);
  }

  get count() {
    return this.cartStoreService.get("cartItems").length;
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }

  ngOnDestroy(): void {
    this.lastItemAddedToCartSubscribtion.unsubscribe();
  }
}
