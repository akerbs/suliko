import React from "react"
import Layout from "../../components/layout-geo"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import AudioNoAutoPlay from "../../components/audio-no-autoplay"

const useStyles = makeStyles(theme => ({
  pageHeader: {},
}))

export default () => {
  const classes = useStyles()

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
            კეთილი იყოს თქვენი მობრძანება!
            <br /> <br />
            ქართული რესტორანი ულამაზეს ქალაქ ჰამბ ურგში უკვე რეალობაა და გვაქვს
            პატივი მის მოსახლეობას და სტუმრებს უნიკალური ქართული სამზარეულო და
            სტუმართმოყვარეობა გავაცნოთ.
            <br /> <br />
            ქართული სუფრა თავისი მრავალფეროვანი კერძებით და ღვინოს ფართო
            არჩევანით არის მსოფლიოში აღიარებული და ის უდავოდ საქართველოს
            სავიზიტო ბარათს წარმოადგენს.
            <br /> <br />
            რესტორანი "სულიკო" მდებარეობს ჰამბურგის შუაგულში და გვსურს, რომ იგი
            ქართული კულტურისა და ტრადიციული სტუმართმოყვარეობის იდეალური
            გზამკვლევი გახდეს.
            <br /> <br />
            ჩვენ გთავაზობთ უგემრიელესი ქართული კერძებისა სასმელების ფართო
            არჩევანს. სტილისტურად ნაციონალური,დახვეწილი ინტერიერი ცოცხალ ქართულ
            თუ პოპულარულ მუსიკასთან ერთად მყუდრო და კომფორტულ გარემოს შეგიქმნით.
            <br /> <br />
            თქვენ შეგიძლიათ მოიწყოთ სასიამოვნო და რომანტიული ვახშამი, დაგეგმოთ
            ბიზნეს ლანჩი ან კორპორატიული წვეულება და დააგემოვნოთ დაუვიწყარი
            კერძები ჩვენთან თონეში გამომცხვარი ქართულ პურთან ერთად.
            <br /> <br />
            წვეულებებისა და სადღესასწაულო სუფრის მენიუს შედგენისას მზად ვართ
            გავითვალისწინოთ ჩვენი სტუმრების ინდივიდუალური მოთხოვნები და
            სურვილები რათა ჩვენთან მათი სტუმრობა ლამაზი და დაუვიწყარ
            დღესასწაულად იქცეს.
            <br /> <br />
            მოხარული ვიქნებით თქვენი სტუმრობისა
          </Typography>
        </Container>
      </Container>
    </Layout>
  )
}
