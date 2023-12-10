import WinterTheme from "./WinterTheme.module.css";

export default function Winter({ theme }) {
  return (
    <>
      {theme == "winter" ? (
        <>
          <div className={WinterTheme.Snow}></div>
          <audio id="audioPlayer" controls autoPlay style={{ display: "none" }}>
            <source src="src\assets\Theme\Winter\LastC.mp3" type="audio/mpeg" />
          </audio>
        </>
      ) : null}
    </>
  );
}
