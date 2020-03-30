import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-input-validate-wrapper",
    templateUrl: "./input-validate-wrapper.component.html",
    styleUrls: ["./input-validate-wrapper.component.scss"]
})
export class InputValidateWrapperComponent implements OnInit {
    @Input() invalidCondition: boolean;
    @Input() invalidMessage: string;
    @Input() for: string;

    constructor() {}

    ngOnInit(): void {}
}
