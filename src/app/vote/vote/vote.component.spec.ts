import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteComponent } from './vote.component';

import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser"

describe('VoteComponent', () => {
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;
  let DebugElement:  DebugElement;
  let HTMLElement: HTMLElement

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    DebugElement=fixture.debugElement.query(By.css('h1'))
    HTMLElement= DebugElement.nativeElement
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display initial number of votes',()=>{
    const initialVotes = component.totalVotes;
    expect(HTMLElement.textContent).toEqual('Votes:0')
  });

  it('should increment totalVotes by 1',()=>{
    const initialVotes = component.totalVotes;
    component.upVote()
    fixture.detectChanges()
    const newVotes= component.totalVotes
    expect(newVotes).toBeGreaterThan(initialVotes)
  });

    it('should decrement totalVotes by 1',()=>{
      const initialVotes = component.totalVotes;
      component.downVote()
      fixture.detectChanges()
      const newVotes= component.totalVotes
      expect(newVotes).toBeLessThan(initialVotes)
     } );

     it('should display the upvoted number (currentVote =0),after being upvoted',()=>{

     component.upVote()
     fixture.detectChanges()
       expect(HTMLElement.textContent).toBe('Votes:1')
      })

   it('should display the downvoted number (currentVote =0),after being downvoted',()=>{

      component.downVote()
      fixture.detectChanges()
        expect(HTMLElement.textContent).toBe('Votes:-1')
       })
});


