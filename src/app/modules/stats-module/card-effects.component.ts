import { Component } from '@angular/core';
import { GraphModule } from 'src/app/classes/graphModule';
import { MatBottomSheet } from '@angular/material';

@Component({
  selector: 'app-card-effects',
  templateUrl: './stats-module.component.html',
  styleUrls: ['./stats-module.component.scss']
})
export class CardEffectsComponent extends GraphModule {
  public barChartLabels = Object.keys(this.deck.effects);
  public removeZeroColumns = true;

  constructor(public bottomSheet: MatBottomSheet) { super(bottomSheet); }


  public getChartData() {
    const probs = this.deck.getEffectsProbability(this.deck.effects);
    const compareProbs = this.deck.comparison == null ? null : this.deck.getEffectsProbability(this.deck.comparison.effects);

    this.setChartLabels(probs, compareProbs);
    console.log('PROBS:');
    console.log(probs);
    Object.keys(probs).forEach(key => probs[key] = Math.round(probs[key] * 100));
    const probData = [
      {
        label: 'Current',
        data: this.fitToChart(probs)
      }
    ];

    if (this.deck.comparison != null) {
      Object.keys(compareProbs).forEach(key => compareProbs[key] = Math.round(compareProbs[key] * 100));
      probData.push({
        label: 'Comparison',
        data: this.fitToChart(compareProbs)
      });
    }

    return probData;
  }

  private setChartLabels(probs: object, compareProbs: object) {
    let labels = Object.keys(probs);

    if (compareProbs != null) {
      labels = Array.from(new Set(labels.concat(Object.keys(compareProbs))));
    }

    if (this.barChartLabels.toString() !== labels.toString()) {
      console.log(`${this.barChartLabels} !== ${labels}`);
      this.barChartLabels = labels;
      this.needRedraw = true;
    }
  }
}
