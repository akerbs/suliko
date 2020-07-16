import React from "react"
import Layout from "../../components/layout"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

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
   <Container
          style={{
            background: "rgba(49, 10, 10, 0.75)",
            paddingTop: 50,
           padding: 30,
            marginTop: 50,
            borderRadius: 10,

          }}
        >
         <Typography
            variant="body1"
            // align="center"
            style={{ lineHeight: 1.5 }}
            color="secondary"
          >
             <Typography variant="h5"  align="center">Das Essen, das zu Ihrem Lebensstil passt </Typography>
       
          <br />
          Herzlich willkommen in unserem Restaurant Suliko. Bei uns werden Sie
          im richtigen Sinne des Wortes mit leckerem Essen, angenehmen Ambiente
          und georgischer Gastfreundlichkeit verwöhnt. Lassen Sie einen Blick
          auf unser Menü werfen und sprechen Sie uns an. Bei uns können Sie
          zwischen abwechslungsreichen Gerichten, gutem Wein und gebackenen
          georgischen Brot wählen. Wir würden Ihnen dabei für alle festlichen
          Anlässe oder / und einfachen Abend mit Freunden und Familie oder einem
          romantischen Abend zur Zweit zur Seite stehen und machen für Sie ein
          individuelles Angebot, das zu Ihrem Lebensstil passt.
          <br />
          <br /> Die georgische Küche ist eine der ältesten und
          abwechslungsreichsten Küchen der Welt. Die georgische Festtafel ist
          somit mit sehr schmackhaften und abwechslungsreichen Gerichten und
          Trinksprüchen unter der Tischführung von “Tamada“ (ausgewählter
          Tischführer) ein wahres Fest unter der Freunden. Mit der Eröffnung
          unseres Restaurants im Herzen von Hamburg wollen wir Ihnen ein Gefühl
          der Gastfreundlichkeit und Festlichkeit vermitteln. <br />
          Fühlen Sie sich bei uns wie zuhause und genießen Sie die umfangreiche
          Speise- und Getränkekarte. Hier unsere kleine Vorstellung der
          georgischen Speisen:
          <br /> Vorspeisen: <br />
          Typische Vorspeisen sind gefüllte Auberginen mit Walnusspastete
          Badridschani und verschiedene Pchali – Spinat, Rote Bete oder Porree
          püriert mit Waldnüsse, Gewürzen, Koriander
          <br />
          <br />
          Hauptspeisen:
          <br /> Sehr verbreitet sind Teigtaschen mit Hackfleischfüllung
          Chinkali, Chatschapuri ist eine weitere Spezialität der georgischen
          Küche. Es handelt sich um ein überbackenes Käsebrot, das in Georgien
          meist als Zwischenmahlzeit für den kleinen Hunger gegessen wird. Lobio
          ist ein traditionelles Bohnengericht der georgischen Küche, das als
          Beilage oder allein als Vorspeise serviert wird. Des Weiteren wird das
          für Westgeorgien typische Maisbrot Mschadi, das mit Sulguni (einer
          Käsesorte aus der Region Mingrelien) zubereitet wird, sowie andere
          Brotsorten gegessen. Weitere Käsesorten sind der Imeruli (Käse aus der
          Region Imereti) und der Guda (Käse aus den Bergen); oft wird Käse aber
          auch zur Hauptspeise gereicht.
          <br />
          <br /> Desserts:
          <br /> Als Nachtisch werden einige Desserts gereicht, darunter eine
          beliebte georgische Süßigkeit namens Tschurtschchela, bei der man
          Haselnuss- oder Walnusskerne auf taucht, welche mit Mais- und
          Weizenmehl angedickt ist, bis sich eine dünne Schicht über die Nüsse
          gelegt hat eine Leine bindet und diese so lange in Traubensaft <br />
          <br />
          Weine: <br />
          Georgien hat eine über 8000 Jahre alte Weinbrautradition und gilt
          damit als Ursprungsland des Weines. Einzigartige klimatische und
          geologische Gegebenheiten bringen ausgezeichnete Rotweine wie
          „Saperavi“, „Chvanchkara“, aber auch Weißweine „Rkatziteli“, „Mtsvane“
          und viele andere hervor.
        </Typography>
      </Container>
      </Container>
    </Layout>
  )
}
