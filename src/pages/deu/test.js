import React from "react"
import Layout from "../../components/layout"
import Container from "@material-ui/core/Container"

import AOS from "aos"
import "aos/dist/aos.css"
import logoGeorg from "../../images/logo_georg.png"

export default () => {
  React.useEffect(() => {
    AOS.init()
    AOS.refresh()
  })

  return (
    <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione similique
      temporibus neque aliquam libero enim illo, ea odit consectetur officia
      recusandae voluptate fugit est dolore repellendus porro, alias nostrum
      sint distinctio, tempora dolorum! Aliquam accusantium magni deserunt minus
      repellat, aperiam maxime libero id et sapiente beatae nulla quaerat magnam
      autem facere excepturi, obcaecati placeat nostrum in incidunt. Porro ab
      temporibus aperiam aspernatur voluptas nobis expedita, blanditiis quisquam
      reiciendis non molestias, dolore nihil? Illo natus et nulla eaque corrupti
      impedit quae, sequi saepe! Ex, exercitationem vel mollitia unde incidunt
      rem, laborum adipisci molestiae, commodi architecto eum perferendis! Minus
      assumenda nam enim quis aliquam provident qui placeat blanditiis dolores
      hic iste, animi delectus eos suscipit ex, vero impedit, odio amet
      molestias? Quasi, delectus quo! Rerum eveniet nam, incidunt recusandae
      exercitationem vel autem qui voluptate impedit harum consectetur, error,
      deleniti pariatur id non voluptatibus libero! Dolorem reiciendis hic quo
      est rem! Iure quaerat quia praesentium? Numquam maxime perferendis sit ad
      cupiditate totam modi iusto consequatur repellendus, aliquid dolore harum
      amet neque laboriosam nesciunt excepturi, quod vel facilis, debitis
      architecto quibusdam. Quod necessitatibus, neque porro alias maxime
      suscipit aperiam cum, magnam ipsam officia dolorem fugit dolore maiores
      nostrum voluptatum deleniti. Recusandae laborum tempora necessitatibus
      nemo distinctio laboriosam qui molestias, eos veritatis accusamus dolorum
      cum corporis at! Deleniti, magnam! Veniam quo possimus iure ratione e
      perspiciatis quis illum ea aut ipsam, provident odio itaque aspernatur
      dicta quasi, eos delectus ducimus dolorem explicabo. Accusantium
      voluptatibus laboriosam reiciendis, esse quibusdam animi ad vitae aut
      suscipit velit iure repellat quo quam repellendus fuga eos sit quae vel,
      eum natus at. Pariatur error fuga a repudiandae, officia sunt! Voluptates
      velit, officiis corporis laudantium quia eos possimus placeat doloremque
      ut neque quos natus ratione animi omnis repudiandae esse sunt blanditiis
      aspernatur excepturi quis! Dolorem, earum excepturi eos sint impedit
      possimus! Unde aliquid veniam ullam ut ipsum eum quibusdam quaerat
      doloremque aspernatur a deleniti porro culpa voluptate vitae officiis
      exercitationem iste beatae quae eos possimus ducimus fuga, et non?
      Reiciendis, laborum. Officiis cupiditate eveniet minima enim, aliquid
      rerum nesciunt officia recusandae unde quod iusto, perferendis possimus ex
      sunt. Dicta corrupti, commodi vero libero sint dolorem? Ab repellat neque
      enim commodi possimus aliquid modi dignissimos suscipit iste, facilis
      necessitatibus eos cum officia magnam error est illum et quia quos nostrum
      asperiores quam ut! Corrupti velit exercitationem mollitia optio rem
      accusantium libero!
      <div
        data-aos="flip-left"
        data-aos-delay="100"
        style={{
          paddingTop: 200,
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          // width: "200px",
          // zIndex: 1000,
        }}
      >
        <img src={logoGeorg} alt="logo2" />
      </div>
    </>
  )
}
