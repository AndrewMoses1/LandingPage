import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private el: ElementRef, private http: HttpClient) {
  }

  downloadCV() {
    const cvUrl = './assets/CV.docx';
    this.http.get(cvUrl, { responseType: 'blob' }).subscribe((blob: Blob) => {
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'CV.docx');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    });
  }
  
  scrollToContact() {
    if (window.innerWidth < 1200) {
      const elementP = document.querySelector('.contact-container-xs');
      if (elementP) {
        const scrollOptions: ScrollToOptions = {
          behavior: 'smooth',
          top: elementP.getBoundingClientRect().top - 130 
        };
        window.scrollBy(scrollOptions);
      }
    } else {
      const elementP = document.querySelector('.contact-container-xl');
      if (elementP) {
        const scrollOptions: ScrollToOptions = {
          behavior: 'smooth',
          top: elementP.getBoundingClientRect().top - 130 
        };
        window.scrollBy(scrollOptions);
      }
    }
  }

  scrollToBottom() {
    const scrollOptions: ScrollToOptions = {
      behavior: 'smooth',
      top: document.body.scrollHeight
    };
    window.scrollBy(scrollOptions);
  }
}