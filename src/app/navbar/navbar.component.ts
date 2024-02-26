import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private el: ElementRef, private renderer: Renderer2, private router: Router) {
    this.handleRouteChange();
  }

  uncheckMenu() {
    const element2 = this.el.nativeElement.querySelector('.navbar');
    const element = this.el.nativeElement.querySelector('.navbar-collapse');
    const element3 = this.el.nativeElement.querySelector('.menu-icon-input');
    element.classList.remove('show')
    this.renderer.setStyle(element2, 'border-bottom', 'none');
    element3.checked = false;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event): void {
    const windowWidth = window.innerWidth;
    if(windowWidth > 1200) {
      const elementx = this.el.nativeElement.querySelector('.navbar-collapse');
      const elementy = this.el.nativeElement.querySelector('.menu-icon-input');
      const elementz = this.el.nativeElement.querySelector('.navbar');
      elementy.checked = false;
      elementx.classList.remove('show');
      this.renderer.setStyle(elementz, 'border-bottom', 'none');
    }
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > 1) {
      const element1 = this.el.nativeElement.querySelector('.navbar');
      var boxShadowColor = '0px .5vw .5vw rgba(0, 0, 0, 0.1)';
     this.renderer.setStyle(element1, 'box-shadow', boxShadowColor);
    } else if (scrollY == 0) {
      const element2 = this.el.nativeElement.querySelector('.navbar');
      var boxShadowNone = '0px 0px 0px rgba(0, 0, 0, 0)';
      this.renderer.setStyle(element2, 'box-shadow', boxShadowNone);
    }
  }

  borderBottom(){
    const element3 = this.el.nativeElement.querySelector('.menu-icon-input');
    const element4 = this.el.nativeElement.querySelector('.navbar');
    var borderBottom2 = '2px solid black';
    if (element3.checked) {
      this.renderer.setStyle(element4, 'border-bottom', borderBottom2)
    } else {
    const element5 = this.el.nativeElement.querySelector('.navbar');
    const element6 = 'none';
      this.renderer.setStyle(element5, 'border-bottom', element6)
    }
  }

  private handleRouteChange(): void {
    let windowWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      windowWidth = window.innerWidth;
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects === '/home') {
          setTimeout(() => {
            window.scrollTo( {
              top: 0,
              behavior: 'smooth'
            });
          }, 1000);
        } else if (event.urlAfterRedirects === '/about') {
          if(windowWidth < 1200) {
            setTimeout(() => {
              const elementB = document.querySelector('.about-container-xs');
              if (elementB) {
                const scrollOptions: ScrollToOptions = {
                  behavior: 'smooth',
                  top: elementB.getBoundingClientRect().top - 130 
                };
                window.scrollBy(scrollOptions);
              }
            }, 1000);
          } else {
              setTimeout(() => {
                const elementB1 = document.querySelector('.about-container-xl');
                if (elementB1) {
                  const scrollOptions: ScrollToOptions = {
                    behavior: 'smooth',
                    top: elementB1.getBoundingClientRect().top - 130 
                  };
                  window.scrollBy(scrollOptions);
                }
              }, 1000);
          } 
        
        } else if (event.urlAfterRedirects === '/projects') {
          if(windowWidth < 1200) {
            setTimeout(() => {
              const elementC = document.querySelector('.projects-container-xs');
              if (elementC) {
                const scrollOptions: ScrollToOptions = {
                  behavior: 'smooth',
                  top: elementC.getBoundingClientRect().top - 130 
                };
                window.scrollBy(scrollOptions);
              }
            }, 1000);
          } else {
              setTimeout(() => {
                const elementB1 = document.querySelector('.projects-container-xl');
                if (elementB1) {
                  const scrollOptions: ScrollToOptions = {
                    behavior: 'smooth',
                    top: elementB1.getBoundingClientRect().top - 130 
                  };
                  window.scrollBy(scrollOptions);
                }
              }, 1000);
          }
        
        } else if (event.urlAfterRedirects === '/contact') {
          if(windowWidth < 1200) {
            setTimeout(() => {
              const elementD = document.querySelector('.contact-container-xs');
              if (elementD) {
                const scrollOptions: ScrollToOptions = {
                  behavior: 'smooth',
                  top: elementD.getBoundingClientRect().top - 130 
                };
                window.scrollBy(scrollOptions);
              }
            }, 1000);
          } else {
              setTimeout(() => {
                const elementB1 = document.querySelector('.contact-container-xl');
                if (elementB1) {
                  const scrollOptions: ScrollToOptions = {
                    behavior: 'smooth',
                    top: elementB1.getBoundingClientRect().top - 130
                  };
                  window.scrollBy(scrollOptions);
                }
              }, 1000);
          }
        
        }
      }
    });
  }
}
