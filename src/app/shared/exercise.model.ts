export class Exercise {

  constructor(
    public name: string,
    public desc: string,
    public category: string,
    public imagePath?: string,
    public series?: number,
    public repetition?: number) {

    this.name = name;
    this.desc = desc;
    this.category = category;
    this.imagePath = imagePath;
    this.series = series;
    this.repetition = repetition;
  }

}
