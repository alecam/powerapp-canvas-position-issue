import * as React from "react";

export interface MapProps {
  orientation?: string | null;
  screenWidth?: number | null;
  screenHeight?: number | null;
}

const ORIENTATION = {
  PORTRAIT: "vertical",
  LANDSCAPE: "horizontal",
};

const Map: React.FC<MapProps> = ({
  orientation,
  screenWidth,
  screenHeight,
}) => {
  const handleImgClick = (event: React.MouseEvent) => {
    alert(
      `ScreenWidth: ${screenWidth}, ScreenHeight: ${screenHeight}\r\nClientX: ${event.clientX}, ClientY: ${event.clientY}`
    );
  };

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: `${screenWidth}px`,
          height: `${screenHeight}px`,
        }}
      >
        {orientation === ORIENTATION.LANDSCAPE ? (
          <img
            src="https://i.ibb.co/QvYC1b7/map1.jpg"
            style={{
              width: "auto",
              height: "100%",
            }}
            onClick={handleImgClick}
          />
        ) : (
          <p>Please rotate the device in landscape mode.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default Map;
