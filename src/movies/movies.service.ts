import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { movies } from './data/movies.data';
@Injectable()
export class MoviesService {

    getMovies() {
        console.log('Movies retrieved successfully');
        return movies;
    }

    getMovieByKeyword(keyword: string) {
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(keyword.toLowerCase()));
        if (filteredMovies.length > 0) {
            return {
                statusCode: HttpStatus.OK,
                message: 'Movies retrieved successfully',
                data: filteredMovies
            };
        } else {
            throw new HttpException({
                statusCode: HttpStatus.NOT_FOUND,
                message: `No movies found with keyword: ${keyword}`,
            }, HttpStatus.NOT_FOUND);
        }    }
}
