import React from "react"

export default function AudioAutoplay() {
  return (
    <>
      <iframe
        title="music"
        type="audio/mpeg"
        autoplay
        style={{
          zIndex: 100,
          margin: 0,
          padding: "7px 0px 0px 7px",
          top: 0,
          left: 0,
          position: "absolute",
        }}
        width="27vw"
        height="27"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/15237004&color=%23851a1d&auto_play=true&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
      />
    </>
  )
}

{
  /* <section id="music">
          <audio src="suliko.mp3" controls autoplay />
        </section> */
}
