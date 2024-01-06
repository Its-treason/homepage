import { Container, Text } from "@mantine/core"
import classes from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={classes.root}>
      <Container className={classes.content}>
        <h1 className={classes.title}>
          <Text component="span" variant="gradient" gradient={{ from: '#d9480f', to: '#e67700' }} inherit>
            its-treason.com
          </Text>
        </h1>

        <Text className={classes.description}>
          Greetings! Here, I'm hosting a small variety of services and personal hobby projects on this domain.
        </Text>
      </Container>
    </div>
  )
}

export default Header
