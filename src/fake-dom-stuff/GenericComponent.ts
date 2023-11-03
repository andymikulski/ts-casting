import { HTMLElementWithCustomComponent } from "./HTMLElementWithCustomComponent";

// Define the class that will render content into the HTML element.
export default abstract class GenericComponent {
  protected element: HTMLElementWithCustomComponent;

  protected state: { [key: string]: any } = {};
  protected setState(state: typeof this.state) {
    this.state = { ...this.state, ...state };
    this.render();
  }

  constructor(element?: HTMLElementWithCustomComponent) {
    const el = element ?? document.createElement('div') as HTMLElementWithCustomComponent;

    if (!element) {
      document.body.appendChild(el);
    }

    // Attach this class instance to the HTML element.
    if (el.componentInstance) {
      throw new Error('An instance of a component is already attached to this element.');
    }
    el.componentInstance = this;
    this.element = el;
  }

  protected abstract render(): void;
}

