export default interface ReadsSchema {
  id?: string;
  water: number;
  humidity: {
    sensor1: number;
    sensor2: number;
    date: Date;
  }[];
}
