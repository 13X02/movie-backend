import { Controller, Get, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('api/movies')
export class MoviesController {

    constructor(private readonly movieService:MoviesService){}

    @Get()
    async getMovies(){
        console.log('Movies retrieved successfully');
        return this.movieService.getMovies();
    }

    @Get('search')
    async getMovieByKeyword(@Query('title')title: string){
        return this.movieService.getMovieByKeyword(title);
    }
}
