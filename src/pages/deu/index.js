import React from "react"
import Layout from "../../components/layout"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { Link } from "gatsby"
import { ThemeProvider } from "@material-ui/core/styles"
import sloganImg2 from "../../images/slogan_eng2.png"

export default () => {
  return (
    <Layout>
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
            paddingTop: 50,
            padding: 25,
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
            <Typography variant="h6" align="center">
              Liebe Suliko-Freunde,
            </Typography>
            <br />
            wir sind in dieser außergewöhnlichen Zeit weiterhin für Sie da und
            möchten unsere wunderschöne Stadt mit authentisch georgischer Küche
            verwöhnen. Essen Sie zu unseren regulären Öffnungszeiten im
            Restaurant Suliko oder bestellen Sie Ihre Lieblingsgerichte und
            lassen Sie es sich außer Haus schmecken. Für diesen Zweck bieten wir
            Ihnen eine speziell angefertigte Bestellmenükarte an.
            <br />
            <br />
            <Link
              to={"/Speisekarte.pdf"}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Button variant="outlined" color="secondary">
                Bestellmenükarte
              </Button>
            </Link>
            <br />
            <br />
            In dieser finden Sie die traditionelle Vielfalt der georgischen
            Küche, die zu allen Lebensstilen und Geschmäckern passt.
            <br />
            Für alle, die in die georgische Welt zunächst reinschnuppern wollen,
            bieten wir als besonders preiswerte Alternative die georgische
            Supra/Tafel ab 2 Personen an.
            <br />
            <br />
            Apropos Wein, schauen Sie in unsere Weinkarte. Dort finden Sie die
            bekanntesten georgischen Weine, unter anderem die nach alter
            Tradition hergestellten und ungefilterten Amphorenweine, für die
            Georgien so bekannt ist.
            <br />
            <br />
            <Link
              to={"/Weinkarte.pdf"}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Button variant="outlined" color="secondary">
                Weinkarte
              </Button>
            </Link>
            <br />
            <br />
            Unsere Öffnungszeiten:
            <br />
            Montag bis Donnerstag 12:00 – 15:00 Uhr, 17:00 – 22:00 Uhr
            <br />
            Freitag 12:00 – 15:00 Uhr, 17:00 – 00:00 Uhr
            <br />
            Samstag 15:00 – 00:00 Uhr
            <br />
            Sonntag 15:00 – 22:00 Uhr
            <br />
            <br />
            Lieferungen & Abholungen:
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
            <br />
            <br />
          </Typography>
        </Container>
      </Container>
    </Layout>
  )
}
