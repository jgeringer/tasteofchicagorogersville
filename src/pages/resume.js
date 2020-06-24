import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import styles from './blog.module.css'
import Layout from '../components/layout'
import ResumeDetail from '../components/resume-detail'

class ResumeIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const detail = get(this, 'props.data.allContentfulResume.edges[0]')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className={styles.hero}>Resume</div>
          <div className="wrapper">
            <ResumeDetail data={detail.node} />
          </div>
        </div>
      </Layout>
    )
  }
}

export default ResumeIndex

export const pageQuery = graphql`
  query ResumeIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulResume {
      edges {
        node {
          id
          title
          body {
            json
          }
        }
      }
    }
  }
`
