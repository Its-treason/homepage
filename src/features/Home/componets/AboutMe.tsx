import { Container, Group, Text, Button } from "@mantine/core"
import { IconBrandDiscord, IconBrandGithub, IconMail } from "@tabler/icons-react"

const AboutMe: React.FC = () => {
  return (
    <Container py={"xl"}>
      <h2 id="hosted-here">
        <Text component="span" inherit>
          About me
        </Text>
      </h2>

      <Text component="span">
        Hello there, I'm Its-Treason or Timon, a programmer from Germany.
        Professionally, I specialize as a PHP backend and TypeScript developer.
        I actively contribute to open-source projects like <a href="https://github.com/usebruno/bruno" target="_blank">Bruno</a>.
      </Text>

      <Group wrap="wrap" mt={"lg"}>
        <Button component="a" href="https://github.com/its-treason" target="_blank" rightSection={<IconBrandGithub />}>
          Github
        </Button>

        <Button component="a" href="https://discordapp.com/users/139058134596583424" target="_blank" rightSection={<IconBrandDiscord />}>
          Discord
        </Button>

        <Button component="a" href="mailto:timon@its-treason.com" rightSection={<IconMail />}>
          Mail
        </Button>
      </Group>
    </Container>
  )
}

export default AboutMe
