export interface calendar {
  id: number;
  title: string;
  description: string;
  sketchs: Sketch[];
}

export interface Sketch {
  id: number;
  title: string;
  description?: string;
  image: string;
  date: Date;
}

export interface Month {
  month: number;
  sketches: Sketch[];
}

export interface Year {
  year: number;
  months: Month[];
}
