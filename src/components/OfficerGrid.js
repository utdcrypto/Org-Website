import React from "react";
import _ from "lodash";
import { SocialIcon } from "react-social-icons";

import { Link } from "../utils";

export default class Posts extends React.Component {
  render() {
    const { officersToDisplay } = this.props;
    return (
      <section id={_.get(this.props, "section.section_id")} className="posts">
        {officersToDisplay.map((officer, index) => {
          const { social: socialLinks = [] } = officer;
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
              <h3 style={{ marginBottom: 0 }}>{officer.name}</h3>
              <p style={{ marginBottom: 10 }}>{officer.position}</p>
              <div>
                {socialLinks.map(social => {
                  return (
                    <SocialIcon
                      url={social}
                      style={{ width: "30px", height: "30px", marginRight: 5 }}
                    ></SocialIcon>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}
