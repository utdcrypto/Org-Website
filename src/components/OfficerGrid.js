import React from "react";
import _ from "lodash";

import { markdownify, getPages, Link, safePrefix } from "../utils";

export default class Posts extends React.Component {
  render() {
    const { officersToDisplay } = this.props;
    return (
      <section id={_.get(this.props, "section.section_id")} className="posts">
        {officersToDisplay.map((officer, index) => {
          return (
            <div
              className="post"
              key={index}
              style={{ flexDirection: "column" }}
            >
              <Link className="image">
                <img
                  src={officer.profileURL}
                  alt={`${officer.name} Professional Headshot`}
                ></img>
              </Link>
              <h3>{officer.name}</h3>
              <p>{officer.position}</p>
            </div>
          );
        })}
      </section>
    );
  }
}
