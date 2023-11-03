import GenericComponent from "./GenericComponent";
import { HTMLElementWithCustomComponent } from "./HTMLElementWithCustomComponent";

// Define the class that will render content into the HTML element.
export default class ButtonComponent extends GenericComponent implements IClickable, IRightClickable {
  protected element: HTMLElementWithCustomComponent;

  protected state = {
    clickCount: 0,
    label: '',
  };

  constructor(label: string) {
    super(undefined);
    this.setState({
      label,
    });
  }
  onRightClick(): void {
    this.setState({ clickCount: this.state.clickCount - 1 });
  }

  onClick = () => {
    this.setState({ clickCount: this.state.clickCount + 1 });
  }

  protected override render = () => {
    this.element.innerHTML = `<button>${this.state.label} (${this.state.clickCount} clicks!)</button>`;
  }
}


export interface IClickable {
  onClick(): void;
}


export interface IRightClickable {
  onRightClick(): void;
}