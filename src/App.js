import React, { useRef, useState } from "react";

export default function VideoPlayer() {
  const ref = useRef();

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (ref.current.paused) {
      ref.current.play();
      setIsPlaying(true);
    } else {
      ref.current.pause();
      setIsPlaying(false);
    }
  };

  console.log(ref.current);

  return (
    <div className="max-w-[500px] space-y-4 p-8 mx-auto">
      <h1 className="text-center font-bold text-3xl">Video Oynatıcı</h1>
      <video
        ref={ref}
        src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
      />
      <div className="flex justify-between">
        <button className="text-orange-500 font-semibold" onClick={togglePlay}>
          {isPlaying ? "Duraklat" : "Oynat"}
        </button>
        <div>{isPlaying ? "Oynatılıyor" : "Duraklatıldı"}</div>
      </div>
    </div>
  );
}
