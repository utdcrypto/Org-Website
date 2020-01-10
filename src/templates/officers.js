import React from "react";
import _ from "lodash";

import { Layout, OfficersGrid } from "../components/index";
import {
  markdownify,
  Link,
  toUrl,
  safePrefix,
  htmlToReact,
  getPages
} from "../utils";

export default class OurOfficers extends React.Component {
  render() {
    const officersToDisplay = this.props.pageContext.frontmatter.officers;
    console.log(officersToDisplay);
    return (
      <Layout {...this.props}>
        <section
          id="main"
          className={
            "wrapper" +
            (_.get(this.props, "pageContext.frontmatter.sidebar.enabled")
              ? " sidebar " +
                _.get(this.props, "pageContext.frontmatter.sidebar.side")
              : "")
          }
        >
          <div className="inner">
            <header className="major">
              <h2>{_.get(this.props, "pageContext.frontmatter.title")}</h2>
              {markdownify(
                _.get(this.props, "pageContext.frontmatter.subtitle")
              )}
            </header>
            <OfficersGrid></OfficersGrid>
          </div>
        </section>
      </Layout>
    );
  }
}
