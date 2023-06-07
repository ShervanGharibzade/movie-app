"use client";
import { useState } from "react";
import MovieCard from "./MovieCard";



export default function MovieList({movies}) {
    
    const content = movies?.map(mov => (
        <MovieCard key={mov.id} mov={mov}/>
    ));
  
    return ( 
        <div className='grid mt-10 grid-cols-4 w-fit mx-auto        justify-center items-center gap-5'>
          {content}
        </div>
      )
  }
  
  