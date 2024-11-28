export interface Song {
  id: number;
  url: string;
  title: string;
  artist: string;
  genre: string;
  date: Date;
  liked: boolean;
}