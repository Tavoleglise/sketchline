import { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface sketchImage {
  url: string;
  id: number;
}
interface propsInterface {
  sketchDrawns: sketchImage[];
  focusedImageId?: number;
}

const SketchLine: FC<propsInterface> = ({ sketchDrawns }) => {
  const [currentImage, setCurrentImage] = useState(1);

  const handleClick = () => {
    if (currentImage === sketchDrawns.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  return (
    <>
      <button onClick={handleClick} className="relative z-30">
        Next
      </button>
      <div className="relative w-screen max-h-screen">
        {/* <AnimatePresence>
          {sketchDrawns.map((sketchDrawn, index) => {
            const isActive = index === currentImage;
            const isPrevious = index === currentImage - 1;
            const isNext = index === currentImage + 1;

            if (isActive || isPrevious || isNext) {
              return (
                <motion.img
                  key={sketchDrawn.id}
                  src={sketchDrawn.url}
                  alt=""
                  className={`absolute top-1/2 left-1/2 transform ${
                    isActive
                      ? "z-10 -translate-x-1/2 -translate-y-1/2"
                      : "z-5 opacity-50 scale-75 -translate-y-1/2"
                  } ${isPrevious ? "-translate-x-3/4" : ""} ${
                    isNext ? "-translate-x-1/4" : ""
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              );
            }
            return null;
          })}
        </AnimatePresence> */}
      </div>
    </>
  );
};

export default SketchLine;
