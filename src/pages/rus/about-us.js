import React from "react"
import Layout from "../../components/layout-rus"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  pageHeader: {},
}))

export default () => {
  const classes = useStyles()

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
        {/* <Typography
          variant="h6"
          align="center"
          color="secondary"
          style={{
            textShadow: "rgba(133,26,29) 0 0 5px",
            fontWeight: 700,
            letterSpacing: 2,
            // opacity: 0.5,
          }}
        >
          ÜBER UNS
        </Typography> */}

        <Container
          style={{
            background: "rgba(49, 10, 10, 0.75)",
            padding: "50px 40px",
            marginTop: 50,
            borderRadius: 10,
          }}
        >
          <Typography
            variant="body1"
            style={{ lineHeight: 1.5 }}
            color="secondary"
          >
            <Typography variant="h6" align="center"></Typography>
            У ценителей Грузии Сулико ассоциируется не только с известной
            лирической песней, но и с рестораном грузинской кухни ,
            расположенном в уютном центре Гамбурга. <br /> <br />
            Ресторан Сулико открылся на известной всем улице Мittelweg в
            Гамбурге, чтобы порадовать ценителей грузинской кухни и любителей
            живой музыки. А также познакомить с этой самобытный кухней тех, кто
            о ней ещё не знает. <br /> <br />
            Жители Гамбурга и гости несомненно полюбят этот ресторан за хорошую
            кухню и домашнюю атмосферу. <br /> <br />
            Ресторан Сулико рассчитан на 70 гостей. Имеется отдельный банкетный
            зал. <br /> <br />
            Комфортная подсветка, удобная мебель и большой выбор грузинских вин
            создают уютную обстановку. Каким бы ни был ваш день, ваше настроение
            всегда будет солнечным, как Грузия. <br /> <br /> В тёплое время
            года вы можете выбирать столики на террасе. А если городские дела не
            отпускают в отпуск, то ресторан Сулико станет достойной
            альтернативой. <br /> <br />
            На мягких плетёных диванах под ненавязчивую живую музыку так приятно
            обедать с коллегами (на выбор несколько вариантов бизнес-ланча),
            обсуждая не дела, а тонкости грузинской кухни. <br /> <br /> Здесь
            вы весело и красиво отметите любое событие- день рождения, юбилей,
            банкет. <br /> <br /> Мы рады видеть вас в ресторане Сулико!
          </Typography>
        </Container>
      </Container>
    </Layout>
  )
}
