import React from "react";
import _ from "lodash";

import { markdownify, getPages, Link, safePrefix } from "../utils";

export default class Posts extends React.Component {
  render() {
    return (
      <section id={_.get(this.props, "section.section_id")} className="content">
        <div className="inner">
          <h1>Officers List</h1>
        </div>
      </section>
    );
  }
}
