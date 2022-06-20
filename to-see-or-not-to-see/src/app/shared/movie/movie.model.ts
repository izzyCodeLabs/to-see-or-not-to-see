export class Movie {
  constructor(
    public title: string,
    public releasedYear: number,
    public stars: string,
    public imdbId: string,
    public poster: string,
    public plot?: string
  ) {}
}
