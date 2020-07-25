import React from "react"
import Layout from "../components/layout"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { Link } from "gatsby"
import AudioNoAutoPlay from "../components/audio-no-autoplay"
import { StaticQuery, graphql } from "gatsby"
import sloganImg2 from "../images/slogan_eng2.png"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const IndexContentfulPage = ({ data }) => {
  const firstRichContent = data.allContentfulRichContent.nodes[0]
  return (
    <Layout>
      <AudioNoAutoPlay />
      <Container
        maxWidth="md"
        style={{
          margin: 0,
          paddingTop: 10,
          padding: 0,
          // background: "rgba(255,255,255, 0.75)",
        }}
      >
        <img
          data-sal="zoom-in"
          data-sal-delay="300"
          data-sal-easing="ease"
          src={sloganImg2}
          alt="slogan"
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: 900,
          }}
        />

        <Container
          style={{
            background: "rgba(49, 10, 10, 0.75)",
            padding: "60px 25px 50px 25px",
            marginTop: 50,
            borderRadius: 10,
          }}
        >
          <Typography
            variant="body1"
            align="center"
            style={{ lineHeight: 1.5 }}
            color="secondary"
          >
            {documentToReactComponents(firstRichContent.text.json)}
            <Link
              to={"/Speisekarte.pdf"}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="outlined"
                color="secondary"
                style={{ marginRight: 10, marginTop: 10, width: 200 }}
              >
                Bestellmenükarte
              </Button>
            </Link>
            <Link
              to={"/Weinkarte.pdf"}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="outlined"
                color="secondary"
                style={{ marginRight: 10, marginTop: 10, width: 200 }}
              >
                Weinkarte
              </Button>
            </Link>
            <br />
            <br />
            <b> Unsere Öffnungszeiten: </b>
            <br />
            Montag bis Donnerstag 12:00 – 15:00 Uhr,
            <br />
            17:00 – 22:00 Uhr
            <br />
            Freitag 12:00 – 15:00 Uhr, 17:00 – 00:00 Uhr
            <br />
            Samstag 15:00 – 00:00 Uhr
            <br />
            Sonntag 15:00 – 22:00 Uhr
            <br />
            <br />
            <b> Lieferungen & Abholungen:</b>
            <br />
            Mo. bis So. von 12.00 bis 18.00 Uhr und nach Vereinbarung.
            <br />
            <br />
            Wir freuen uns auf Sie!
            <br />
            <br />
            Ihr Restaurant Suliko
            <br />
            <br />
            Sie finden uns im Mittelweg 24, 20148 Hamburg
            <br />
            Sie erreichen uns telefonisch unter 040/49201953
            <br />
            Unter den Lieferdiensten finden Sie uns auf Lieferando
          </Typography>
        </Container>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRichContent {
      nodes {
        title
        text {
          json
        }
      }
    }
  }
`

export default IndexContentfulPage

// {
//   contentfulArticle {
//     title
//     text {
//       text
//     }
//   }
// }
// {data.contentfulArticle.title}
// {data.contentfulArticle.text.text}

// {
//   markdownRemark {
//     frontmatter {
//       title
//     }
//     html
//   }
// }
// {data.markdownRemark.frontmatter.title}
// {data.markdownRemark.html}

// import React from "react"
// import Layout from "../components/layout"
// import Container from "@material-ui/core/Container"
// import Typography from "@material-ui/core/Typography"
// import Button from "@material-ui/core/Button"
// import { Link } from "gatsby"
// // import AudioAutoPlay from "../../components/audio-autoplay"

// import sloganImg2 from "../images/slogan_eng2.png"
// import { StaticQuery, graphql } from "gatsby"

// const IndexPage = () => (
//   <Layout>
//     <div style={{ backgroundColor: "tomato" }}>
//       <h1>Place for Article is HERE</h1>
//       <StaticQuery
//         query={graphql`
//           {
//             contentfulArticle {
//               title
//               text {
//                 text
//               }
//             }
//           }
//         `}
//         render={data => (
//           <div style={{}}>
//             <h1>{data.contentfulArticle.title}</h1>
//             <p>{data.contentfulArticle.text.text}</p>
//           </div>
//         )}
//       />
//     </div>
//   </Layout>
// )

// export default IndexPage

// import React from "react"

// const Article = ({
//   content: {
//     title,
//     text: { text },
//   },
// }) => (
//   <div>
//     <h2>{title}</h2>
//     <p>{text}</p>
//   </div>
// )

// export default Article
