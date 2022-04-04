import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Offer } from 'src/app/models/offer.model';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-offers-form',
  templateUrl: './offers-form.component.html',
  styleUrls: ['./offers-form.component.css']
})
export class OffersFormComponent implements OnInit {
    @Input() offerToEdit : Offer|undefined;
    @Output() formSubmitted: EventEmitter<Offer>;
    form: FormGroup;
    offer: Offer;
   @Input() submitLabel: string;
  constructor() {
      this.offer = new Offer('','',new Date(),new Date(), '', new Date(),new Date());
      this.form = new FormGroup({});
      this.formSubmitted = new EventEmitter<Offer>();
      this.submitLabel = "AJOUTER!"


  }

  ngOnInit(): void {
      if(this.offerToEdit){
          this.offer = this.offerToEdit;
      }

      this.initForm();
  }

  onSubmitForm(): void {
      if(this.form.valid){
          this.formSubmitted.emit(this.offer);
      }
  }
    private initForm():void {
        this.form.addControl('name',
            new FormControl(
                null,
                [
                    Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(50)
                ]
            ));
        this.form.addControl('description',
            new FormControl(
                null,
                [
                    Validators.required,
                    Validators.minLength(10),
                    Validators.maxLength(250)
                ]
            ));
        this.form.addControl('dateBegin',
            new FormControl(
                null,
                [Validators.required]
            ));
        this.form.addControl('dateEnd',
            new FormControl(
                null,
                [Validators.required]
            ));
        this.form.addControl('imgUrl',
            new FormControl(
                null,
                [Validators.required]
            ));
    }
}
