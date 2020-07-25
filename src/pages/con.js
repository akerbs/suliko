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
