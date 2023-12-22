import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAndSocialsComponent } from './image-and-socials.component';

describe('ImageAndSocialsComponent', () => {
  let component: ImageAndSocialsComponent;
  let fixture: ComponentFixture<ImageAndSocialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageAndSocialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageAndSocialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
