import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor(private el: ElementRef, private router: Router, private renderer: Renderer2, private http: HttpClient) {
    this.handleRouteChange();
  }
  
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const elementA = this.el.nativeElement.querySelector('.contact-container-xs div:nth-child(3)');
    const elementB = this.el.nativeElement.querySelector('.contact-container-xs div:nth-child(4)');
    const elementC = this.el.nativeElement.querySelector('.contact-container-xs div:nth-child(5)');
    const elementD = this.el.nativeElement.querySelector('.contact-container-xs div:nth-child(6)');
    const elementE = this.el.nativeElement.querySelector('.contact-container-xs div:nth-child(7)');
    const elementF = this.el.nativeElement.querySelector('.contact-container-xl-slide1');
    const elementG = this.el.nativeElement.querySelector('.contact-container-xl-slide2');
    const elementH = this.el.nativeElement.querySelector('.contact-container-xl-slide3');
    const elementI = this.el.nativeElement.querySelector('.contact-container-xl-slide4');
    const elementJ = this.el.nativeElement.querySelector('.contact-container-xl-slide5');
    const elementA1 = elementA.getBoundingClientRect().top;
    const elementB1 = elementB.getBoundingClientRect().top;
    const elementC1 = elementC.getBoundingClientRect().top;
    const elementD1 = elementD.getBoundingClientRect().top;
    const elementE1 = elementE.getBoundingClientRect().top;
    const elementF1 = elementF.getBoundingClientRect().top;
    const elementG1 = elementG.getBoundingClientRect().top;
    const elementH1 = elementH.getBoundingClientRect().top;
    const elementI1 = elementI.getBoundingClientRect().top;
    const elementJ1 = elementJ.getBoundingClientRect().top;
    if (window.innerWidth < 500) {
      if (window.innerHeight > elementA1 + 150) {
        elementA.style.transition = 'transform .5s'
        elementA.style.transform = `translateY(-8vw)`;
      } else {
        elementA.style.transition = 'transform .5s'
        elementA.style.transform = `translateY(0vw)`;
      }
      if (window.innerHeight > elementB1 + 150) {
        elementB.style.transition = 'transform .5s'
        elementB.style.transform = `translateY(-8vw)`;
      } else {
        elementB.style.transition = 'transform .5s'
        elementB.style.transform = `translateY(0vw)`;
      }
      if (window.innerHeight > elementC1 + 150) {
        elementC.style.transition = 'transform .5s'
        elementC.style.transform = `translateY(-8vw)`;
      } else {
        elementC.style.transition = 'transform .5s'
        elementC.style.transform = `translateY(0vw)`;
      }
      if (window.innerHeight > elementD1 + 150) {
        elementD.style.transition = 'transform .5s'
        elementD.style.transform = `translateY(-8vw)`;
      } else {
        elementD.style.transition = 'transform .5s'
        elementD.style.transform = `translateY(0vw)`;
      }
      if (window.innerHeight > elementE1 + 150) {
        elementE.style.transition = 'transform .5s'
        elementE.style.transform = `translateY(-8vw)`;
      } else {
        elementE.style.transition = 'transform .5s'
        elementE.style.transform = `translateY(0vw)`;
      }
    } else {
      if (window.innerHeight > elementA1 + 150) {
        elementA.style.transition = 'transform .5s'
        elementA.style.transform = `translateY(-40px)`;
      } else {
        elementA.style.transition = 'transform .5s'
        elementA.style.transform = `translateY(0vw)`;
      }
      if (window.innerHeight > elementB1 + 150) {
        elementB.style.transition = 'transform .5s'
        elementB.style.transform = `translateY(-40px)`;
      } else {
        elementB.style.transition = 'transform .5s'
        elementB.style.transform = `translateY(0vw)`;
      }
      if (window.innerHeight > elementC1 + 150) {
        elementC.style.transition = 'transform .5s'
        elementC.style.transform = `translateY(-40px)`;
      } else {
        elementC.style.transition = 'transform .5s'
        elementC.style.transform = `translateY(0vw)`;
      }
      if (window.innerHeight > elementD1 + 150) {
        elementD.style.transition = 'transform .5s'
        elementD.style.transform = `translateY(-40px)`;
      } else {
        elementD.style.transition = 'transform .5s'
        elementD.style.transform = `translateY(0vw)`;
      }
      if (window.innerHeight > elementE1 + 150) {
        elementE.style.transition = 'transform .5s'
        elementE.style.transform = `translateY(-40px)`;
      } else {
        elementE.style.transition = 'transform .5s'
        elementE.style.transform = `translateY(0vw)`;
      }
    }
    if (window.innerHeight > elementF1 + 200) {
      elementF.style.transition = 'transform .5s'
      elementF.style.transform = `translateY(-80px)`;
    } else {
      elementF.style.transition = 'transform .5s'
      elementF.style.transform = `translateY(0vw)`;
    }
    if (window.innerHeight > elementG1 + 200) {
      elementG.style.transition = 'transform .5s'
      elementG.style.transform = `translateY(-80px)`;
    } else {
      elementG.style.transition = 'transform .5s'
      elementG.style.transform = `translateY(0vw)`;
    }
    if (window.innerHeight > elementH1 + 200) {
      elementH.style.transition = 'transform .5s'
      elementH.style.transform = `translateY(-80px)`;
    } else {
      elementH.style.transition = 'transform .5s'
      elementH.style.transform = `translateY(0vw)`;
    }
    if (window.innerHeight > elementI1 + 200) {
      elementI.style.transition = 'transform .5s'
      elementI.style.transform = `translateY(-80px)`;
    } else {
      elementI.style.transition = 'transform .5s'
      elementI.style.transform = `translateY(0vw)`;
    }
    if (window.innerHeight > elementJ1 + 200) {
      elementJ.style.transition = 'transform .5s'
      elementJ.style.transform = `translateY(-80px)`;
    } else {
      elementJ.style.transition = 'transform .5s'
      elementJ.style.transform = `translateY(0vw)`;
    }
}

  // The below method was added to fix a glitch that was occurring upon transition to the contact page
  private handleRouteChange(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects === '/contact') {
          setTimeout(() => {
            const elementK = this.el.nativeElement.querySelector('.contact-container-xs div:nth-child(3)');
            const elementL = this.el.nativeElement.querySelector('.contact-container-xs div:nth-child(4)');
            const elementM = this.el.nativeElement.querySelector('.contact-container-xs div:nth-child(5)');
            const elementN = this.el.nativeElement.querySelector('.contact-container-xs div:nth-child(6)');
            const elementO = this.el.nativeElement.querySelector('.contact-container-xs div:nth-child(7)');
            const elementP = this.el.nativeElement.querySelector('.contact-container-xl-slide1');
            const elementQ = this.el.nativeElement.querySelector('.contact-container-xl-slide2');
            const elementR = this.el.nativeElement.querySelector('.contact-container-xl-slide3');
            const elementS = this.el.nativeElement.querySelector('.contact-container-xl-slide4');
            const elementT = this.el.nativeElement.querySelector('.contact-container-xl-slide5');
            this.renderer.setStyle(elementK, 'transform', 'translateY(0vw)');
            this.renderer.setStyle(elementL, 'transform', 'translateY(0vw)');
            this.renderer.setStyle(elementM, 'transform', 'translateY(0vw)');
            this.renderer.setStyle(elementN, 'transform', 'translateY(0vw)');
            this.renderer.setStyle(elementO, 'transform', 'translateY(0vw)');
            this.renderer.setStyle(elementP, 'transform', 'translateY(0vw)');
            this.renderer.setStyle(elementQ, 'transform', 'translateY(0vw)');
            this.renderer.setStyle(elementR, 'transform', 'translateY(0vw)');
            this.renderer.setStyle(elementS, 'transform', 'translateY(0vw)');
            this.renderer.setStyle(elementT, 'transform', 'translateY(0vw)');
          }, 1000);
        }
      }
    });
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