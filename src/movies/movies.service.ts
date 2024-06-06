import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as fs from 'fs';

const  rawMovies = fs.readFileSync('src/movies/data/movies.json');
const jsonData = JSON.parse(rawMovies.toString());
;


@Injectable()
export class MoviesService {


    getMovies() {
        console.log('Movies retrieved successfully');
        return jsonData;
    }

    getMovieByKeyword(keyword: string) {
        const filteredMovies = jsonData.filter(movie => movie.title.toLowerCase().includes(keyword.toLowerCase()));
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
