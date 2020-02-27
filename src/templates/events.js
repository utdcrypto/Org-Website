import React from "react";
import _ from "lodash";
import { Layout, OfficersGrid } from "../components/index";
import { markdownify } from "../utils";

export default class OurOfficers extends React.Component {
  render() {
    const officersToDisplay = this.props.pageContext.frontmatter.officers;
    console.log(this.props);
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
                _.get(this.props, "pageC<ontext.frontmatter.subtitle")
              )}
            </header>
            
            
          </div>
        </section>
      </Layout>
    );
  }
}
