import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('renders the local pizza catalogue', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('h1')?.textContent).toContain('A little slice');
    expect(element.querySelectorAll('app-pizza-card')).toHaveLength(3);
  });

  it('confirms when a customer adds a pizza', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    element.querySelector<HTMLButtonElement>('app-pizza-card button')?.click();
    fixture.detectChanges();

    expect(element.querySelector('[role="status"]')?.textContent).toContain('added to your basket');
  });
});
