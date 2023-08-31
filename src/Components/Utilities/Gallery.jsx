import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faClose,
  faMagnifyingGlassMinus,
  faMagnifyingGlassPlus,
} from "@fortawesome/free-solid-svg-icons";

function Gallery(props) {
  const imageRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(-1);
  const [isZoomedIn, setIsZoomedIn] = useState(false);

  // const imagelist = props.list;

  const imagelist = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/300/200",
    "https://picsum.photos/400/300",
    "https://picsum.photos/200/200",
    "https://picsum.photos/400/300",
    "https://picsum.photos/500/300",
    "https://picsum.photos/400/300",
    "https://picsum.photos/200/200",
    "https://picsum.photos/200/200",
    "https://picsum.photos/200/200",
    "https://picsum.photos/200/200",
    "https://picsum.photos/200/200",
    "https://picsum.photos/200/200",
    "https://picsum.photos/300/200",
  ];

  const nextImg = () => {
    resetImg();
    selectedImg === imagelist.length - 1
      ? setSelectedImg(0)
      : setSelectedImg((prevState) => prevState + 1);
  };

  const prevImg = () => {
    resetImg();
    selectedImg === 0
      ? setSelectedImg(imagelist.length - 1)
      : setSelectedImg((prevState) => prevState - 1);
  };

  // const keyCallback = useCallback(function handleKeys(keyEvent) {
  //   if (keyEvent.key === "ArrowLeft") {
  //     prevImg();
  //   } else if (keyEvent.key === "ArrowRight") {
  //     nextImg();
  //   }
  // }, []);

  // useEffect(() => {
  //   console.log("running");
  //   function handleKeys(keyEvent) {
  //     if (keyEvent.key === "ArrowLeft") {
  //       console.log("left");
  //     } else if (keyEvent.key === "ArrowRight") {
  //       console.log("right");
  //     }
  //   }
  //   document.addEventListener("keydown", handleKeys);
  //   return () => {
  //     document.removeEventListener("keydown", handleKeys);
  //   };
  // }, [isOpen]);

  // const dragImg = (dragEvent) => {
  // function drag(e) {
  //   const offsetX = prevX + e.clientX - initX;
  //   const offsetY = prevY + e.clientY - initY;
  //   console.log("offset", offsetX, offsetY);

  //   dragEvent.target.style.translate = `${offsetX}px ${offsetY}px`;
  // }

  // var initX = 0,
  //   initY = 0,
  //   prevX = 0,
  //   prevY = 0;
  // var prevXstr = "",
  //   prevYstr = "";

  // window.addEventListener("mousedown", (e) => {
  //   initX = e.clientX;
  //   initY = e.clientY;
  //   window.addEventListener("mousemove", drag);
  // });

  // window.addEventListener("mouseup", function place() {
  //   [prevXstr, prevYstr] = dragEvent.target.style.translate.split(" ");
  //   prevX = +prevXstr.replace(/[^-?\d.]/g, "");
  //   prevY = +prevYstr.replace(/[^-?\d.]/g, "");
  //   console.log(prevX, prevY);
  //   window.removeEventListener("mousemove", drag);
  // });

  // function drag(e) {
  //   imageRef.current.style.transition = "translate 0s, scale 0.2s";

  //   const tX = e.clientX - window.innerWidth / 2;
  //   const tY = e.clientY - window.innerHeight / 2;
  //   // console.log(tX, tY);
  //   dragEvent.target.style.translate = `${tX}px ${tY}px`;
  // }

  // window.addEventListener("mousedown", () => {
  //   window.addEventListener("mousemove", drag);
  // });

  // window.addEventListener("mouseup", function place() {
  //   window.removeEventListener("mousemove", drag);
  // });

  // window.addEventListener("touchstart", () => {
  //   window.addEventListener("touchmove", drag);
  // });

  // window.addEventListener("touchend", function place() {
  //   window.removeEventListener("touchmove", drag);
  // });
  // };

  function resetImg() {
    setIsZoomedIn(false);
    // imageRef.current.style.transition = "all 0.2s";
    // imageRef.current.style.translate = "0 0";
  }

  const closeImg = () => {
    resetImg();
    setIsOpen(false);
    setSelectedImg(-1);
  };

  return (
    <div className="gallery">
      <div className="gallery-list">
        <ul>
          {imagelist.map((imgurl, imgindex) => {
            return (
              <li>
                <img
                  onClick={() => {
                    setIsOpen(true);
                    setSelectedImg(imgindex);
                  }}
                  src={imgurl}
                  alt={`pic ${imgindex}`}
                />
              </li>
            );
          })}
          <li />
        </ul>
      </div>
      <div
        className={
          selectedImg === -1 ? "gallery-modal hidden" : "gallery-modal"
        }
      >
        <div
          className="gallery-cover"
          onClick={() => {
            closeImg();
          }}
        />
        <div
          className="gallery-pagination gp-left"
          onClick={() => {
            prevImg();
          }}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
        <div
          className="gallery-pagination gp-right"
          onClick={() => {
            nextImg();
          }}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
        <div className="gallery-image">
          <img
            ref={imageRef}
            style={isZoomedIn ? { scale: "2.5" } : { scale: "1" }}
            src={imagelist[selectedImg]}
            draggable="false"
            // onMouseOver={(e) => {
            //   dragImg(e);
            // }}
            // onTouchStart={(e) => {
            //   dragImg(e);
            // }}
            alt="selectedimg"
          />
          <div className="gallery-buttons">
            <button
              onClick={() => {
                setIsZoomedIn(!isZoomedIn);
              }}
              title="Zoom"
            >
              <FontAwesomeIcon
                icon={
                  isZoomedIn ? faMagnifyingGlassMinus : faMagnifyingGlassPlus
                }
              />
            </button>
            <button
              onClick={() => {
                prevImg();
              }}
              title="Previous"
            >
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button
              onClick={() => {
                nextImg();
              }}
              title="Next"
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
            <button
              onClick={() => {
                closeImg();
              }}
              title="Close"
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
