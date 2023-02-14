import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { OutLibraryBooksComponent } from './out-library-books.component';

describe('OutLibraryBooksComponent', () => {
  let component: OutLibraryBooksComponent;
  let fixture: ComponentFixture<OutLibraryBooksComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;


    beforeEach(async () => {
        TestBed.configureTestingModule({
          imports: [ HttpClientTestingModule ]
        });
    
        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
        fixture = TestBed.createComponent(OutLibraryBooksComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

  it('check HTML', () => {
    const fixture = TestBed.createComponent(OutLibraryBooksComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('input')?.length).toBe(1);
});

});
