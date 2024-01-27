import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
// @ts-ignore
import { TWStyles } from './tw.js';

import './pages/home-page.ts';
import './pages/about-page.ts';

@customElement('page-base')
export class PageBase extends LitElement {
  firstUpdated() {
    super.firstUpdated();
    const router = new Router(this.shadowRoot.querySelector('#outlet'));
    router.setRoutes([
      { path: '/', component: 'home-page' },
      { path: '/about', component: 'about-page' },
      { path: '(.*)', redirect: '/' },
    ]);
  }

  static styles = [TWStyles];

  render() {
    return html`
      <header class="bg-white">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div class="flex lg:flex-1">
            <a href="/" class="-m-1.5 p-1.5">
              <span class="sr-only">YouTube Search Demo</span>
              <img class="h-8 w-auto" src="/assets/logo.svg" alt="YouTube Logo">
            </a>
          </div>
          <div class="flex gap-x-12">
            <a href="/" class="text-sm font-semibold leading-6 text-gray-900">Search</a>
            <a href="/about" class="text-sm font-semibold leading-6 text-gray-900">About</a>
          </div>
        </nav>
      </header>
      <main>
        <div class="container mx-auto">
          <div id="outlet"></div>
        </div>
      </main>
    `;
  }
}
