import React from "react";
import ReactHtmlParser from "react-html-parser";
export default function PageDetailDescription({ data }) {
  return (
    <main>
      <h4>About the place</h4>
      {ReactHtmlParser(data.description)}
      <div className="row" style={{ marginTop: 30 }}>
        {data.features.map((feature, index) => {
          return (
            <div
              className="col-3"
              style={{ marginBottom: 20 }}
              key={`feature-${index}`}
            >
              <img
                width="38"
                className="d-block mb-2"
                src={feature.imageUrl}
                alt={feature.className}
              />{" "}
              <span>{feature.qty}</span>{" "}
              <span className="text-gray-500 font-weight-light">
                {feature.name}
              </span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
