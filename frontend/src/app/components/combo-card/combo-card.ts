import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { GiftCombo } from '../../interfaces/gift-combo.interface';

@Component({
  selector: 'app-combo-card',
  imports: [CurrencyPipe],
  templateUrl: './combo-card.html',
  styleUrl: './combo-card.css',
})
export class ComboCard {
  combo = input.required<GiftCombo>();
}
