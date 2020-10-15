import { TestBed, async, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatCardSubtitle } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import { CardProbabilityComponent } from './modules/stats-module/card-probability.component';
import { DeckReliabilityComponent } from './modules/stats-module/deck-reliability.component';
import { ShuffleProbabilityComponent } from './modules/stats-module/shuffle-probability.component';
import { CardEffectsComponent } from './modules/stats-module/card-effects.component';
import { AverageDamageComponent } from './modules/stats-module/average-damage.component';


describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MatToolbar,
        MatCardSubtitle,
        CardProbabilityComponent,
        DeckReliabilityComponent,
        ShuffleProbabilityComponent,
        CardEffectsComponent,
        AverageDamageComponent
      ],
    }).compileComponents();
  }));

  /*
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'gloomhaven-calc'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('gloomhaven-calc');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to gloomhaven-calc!');
  });
  */
});
