import { HTMLElementWithCustomComponent } from "./HTMLElementWithCustomComponent";


export function FindComponentContainer(element: HTMLElement): HTMLElementWithCustomComponent | null {
  let current: HTMLElement | null = element;


  while (current !== null) {
    let el = (current as HTMLElementWithCustomComponent);
    console.log('checking', el.tagName, el.componentInstance);
    if (!!el.componentInstance) {
      return el;
    }
    current = current.parentElement;
  }

  return null;
}
