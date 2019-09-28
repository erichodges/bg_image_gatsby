import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import StyledBackgroundSection from './index';
import './layout.css';


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <StyledBackgroundSection>
        <div
          style={{
            height: `100vh`,
            width: `100%`,
            display: `flex`,
            placeContent: `center`,
          }}
        >
          <div
            style={{
              placeSelf: `center`,
              textAlign: `center`,
              color: `#ccc`,
              // margin: `0 auto`,
              height: `50vh`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            {children}
            
          </div>
        </div>
      </StyledBackgroundSection>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
