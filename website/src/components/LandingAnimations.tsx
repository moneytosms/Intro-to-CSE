import { useEffect } from 'react';
import gsap from 'gsap';

export default function LandingAnimations() {
  useEffect(() => {
    // Animate hero heading and description
    const heroSection = document.getElementById("gsap-hero");
    if (heroSection) {
      const heading = heroSection.querySelector('h1');
      const desc = heroSection.querySelector('p');
      const heroBtns = heroSection.querySelectorAll('a');
      gsap.fromTo(heading,
        { y: 60, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out", delay: 0.1 }
      );
      gsap.fromTo(desc,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.4 }
      );
      gsap.fromTo(heroBtns,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.7, ease: "power3.out", delay: 0.8 }
      );
      // Button hover pop
      heroBtns.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
          gsap.to(btn, { scale: 1.08, duration: 0.2, ease: 'power2.out' });
        });
        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, { scale: 1, duration: 0.2, ease: 'power2.in' });
        });
      });
    }
    // Animate features cards
    const featuresSection = document.getElementById("gsap-features");
    if (featuresSection) {
      const featureCards = featuresSection.querySelectorAll(".relative.overflow-hidden, .rounded-2xl");
      gsap.fromTo(featureCards,
        { y: 60, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, stagger: 0.12, duration: 1, ease: "back.out(1.7)", delay: 0.3 }
      );
      // Hover effect for feature cards
      featureCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { scale: 1.04, boxShadow: "0 8px 32px #61dca3", duration: 0.3 });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { scale: 1, boxShadow: "0 2px 8px #00000022", duration: 0.3 });
        });
      });
    }
    // Animate CTA
    const ctaSection = document.getElementById("gsap-cta");
    if (ctaSection) {
      const ctaHeading = ctaSection.querySelector('h2');
      const ctaDesc = ctaSection.querySelector('p');
      const ctaBtn = ctaSection.querySelector('a');
      gsap.fromTo([ctaHeading, ctaDesc, ctaBtn],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.18, duration: 1, ease: "power3.out", delay: 0.5 }
      );
      // Button hover pop
      if (ctaBtn) {
        ctaBtn.addEventListener('mouseenter', () => {
          gsap.to(ctaBtn, { scale: 1.08, duration: 0.2, ease: 'power2.out' });
        });
        ctaBtn.addEventListener('mouseleave', () => {
          gsap.to(ctaBtn, { scale: 1, duration: 0.2, ease: 'power2.in' });
        });
      }
    }
  }, []);

  return null;
}
