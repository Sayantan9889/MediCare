import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  @ViewChild('target') 'Target':ElementRef<any>; //To scroll to top every time enter the component

  ngOnInit(): void {
    this.Target.nativeElement.scrollIntoView(); //To scroll to top every time enter the component
  }

  ngAfterViewInit() {
    //Same line need both here and above in ngOnInit to work properly
    this.Target.nativeElement.scrollIntoView(); // To scroll to top every time enter the component
  }
}
