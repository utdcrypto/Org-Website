import React from "react";
import _ from "lodash";
import { Layout, OfficersGrid } from "../components/index";
import { markdownify } from "../utils";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
                _.get(this.props, "pageContext.frontmatter.subtitle")
              )}
            </header>
          </div>

          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)"
              }}
              date="March 4th, 2020"
            >
              <h3 className="vertical-timeline-element-title">
                IBM Blockchain Platform Tech Talk
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Dallas, TX</h4>
              <p>Learn more about how IBM interacts with Blockchain!</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="February 20th, 2020"
            >
              <h3 className="vertical-timeline-element-title">
                Orbs Blockchain Info Session
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Dallas, TX</h4>
              <p>
                Learn about the public infrastructure built for the need of
                enterprises. This is an opportunity to meet and hear from Rob
                Bresler, a Senior Engineer at Orbs, talk about the Orb
                Blockchain, it's applications, the development toolchain, and
                how you can build your own apps on Orbs.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="February 2nd, 2020"
            >
              <h3 className="vertical-timeline-element-title">
                Surge Info Session
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Dallas, TX</h4>
              <p>
                first event of this year will be the Surge Mentorship
                Information Session on February 6th, 6PM at ECSS 3.910 (Pizza
                will be Provided). The Surge Mentorship program focuses on
                technical excellence and building generalist base of
                technologies while accounting for business considerations and
                requirements during both the ideation and development phases.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </section>
      </Layout>
    );
  }
}
