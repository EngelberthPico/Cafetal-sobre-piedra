import { Component } from '@angular/core';
import { ComboCard } from '../../components/combo-card/combo-card';
import { PARA_REGALAR } from '../../data/para-regalar.data';


@Component({
  selector: 'app-para-regalar',
  imports: [ComboCard],
  templateUrl: './para-regalar.html',
  styleUrl: './para-regalar.css',
})
export class ParaRegalar {
  combos = PARA_REGALAR;
}
