export class GetDynamicStyle {

  private mode: string;
  constructor(mode: string) {
    this.mode = mode;
    this.backgroundColor = this.backgroundColor.bind(this);
    this.textColor = this.textColor.bind(this);
    this.getStyle = this.getStyle.bind(this);
  }

  public textColor(): string {
    switch (this.mode) {
      case 'light':
      case 'white':
      case 'grey':
        return '#042743';
      default:
        return 'white';
    }
  }

  public backgroundColor(): string {
    switch (this.mode) {
      case 'light':
      case 'grey':
        return '#f2eded';
      case 'white':
        return 'white';
      case 'dark':
        return "#042743";
      case 'blue':
        return "#4d4db7";
      case 'black':
        return "black";
      case 'red':
        return "#9d2222";
      case 'green':
        return "#167516";
      default:
        return 'white';
    }
  }

  public navBackgroundColor(): string {
    if (this.mode === 'light') {
      return "#f2eded";
    } else if (this.mode === 'dark') {
      return "#042743";
    } else {
      return this.mode;
    }
  }

  public getStyle(): { color: string; backgroundColor: string; } {
    return {
      color: this.textColor(),
      backgroundColor: this.backgroundColor()
    }
  }
}