import React from "react";
import _ from "lodash";

import { Layout } from "../components/index";
import { markdownify, Link } from "../utils";

/* eslint-disable */

export default class Elements extends React.Component {
  render() {
    const title = this.props.pageContext.frontmatter.title;
    console.log(this.props)

    return <h1>{title}</h1>;
    
  }

}
