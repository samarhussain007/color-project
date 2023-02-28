import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import MyCustomDiv from "./styles/ColorBoxStyles";

function ColorBox(props) {
  const { name, background, paletteId, id, showingFullPalette } = props;
  const [copied, setCopied] = React.useState(false);

  const changeCopyState = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <MyCustomDiv props={props}>
        <div
          style={{ background: background }}
          className={`copy-overlay ${copied && "show"}`}
        ></div>
        <div className={`copy-msg ${copied && "show"}`}>
          <h1>copied!</h1>
          <p className="copy-text">{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span className="color-name">{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        {showingFullPalette && (
          <Link
            to={`/palette/${paletteId}/${id}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="see-more">More</span>
          </Link>
        )}
      </MyCustomDiv>
    </CopyToClipboard>
  );
}

export default ColorBox;
