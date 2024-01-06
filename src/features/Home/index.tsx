import Layout from "../../components/Layout"
import AboutMe from "./componets/AboutMe"
import Header from "./componets/Header"
import Services from "./componets/Services"

const Home: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Services />
      <AboutMe />
    </Layout>
  )
}

export default Home
