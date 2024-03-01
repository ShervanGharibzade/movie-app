import React from "react";
import GalleryCard from "./gallery-card";

export default function Gallery({ movies, path }: any) {
  return (
    <section className="my-28">
      <div className="grid grid-cols-4 gap-16 w-fit mx-auto">
        <GalleryCard movies={movies} path={path} />
      </div>
    </section>
  );
}
