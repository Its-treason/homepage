import { Container, Group } from "@mantine/core"
import { Text } from "@mantine/core"
import ServiceCard from "./ServiceCard"
import { IconBrandGithub } from "@tabler/icons-react"

const Services: React.FC = () => {
  return (
    <Container py={"xl"}>
      <h2 id="hosted-here">
        <Text component="span" inherit>
          Services hosted here
        </Text>
      </h2>

      <Group wrap="wrap" align="start">
        <ServiceCard
          name="Wiki"
          visitLink="https://wiki.its-treason.com"
          description="My personal wiki page. Here, I primarily document service configurations with examples. The wiki is powered by MediaWiki."
        />

        <ServiceCard
          name="Apt Repository"
          visitLink="https://packages.its-treason.com/ui"
          description="An apt repository written in PHP. Used to mirror '.deb' packages from GitHub releases and share custom packages with my team."
          extraBtn={{
            href: "https://github.com/its-treason/apt-repo",
            icon: <IconBrandGithub />,
            label: "Source"
          }}
        />

        <ServiceCard
          name="EVE"
          visitLink="https://eve.its-treason.com"
          description="Yet another Discord bot. It began as my TypeScript learning project and expanded over time with the addition of more features and a frontend."
          extraBtn={{
            href: "https://github.com/its-treason/eve",
            icon: <IconBrandGithub />,
            label: "Source"
          }}
        />
      </Group>
    </Container>
  )
}

export default Services
