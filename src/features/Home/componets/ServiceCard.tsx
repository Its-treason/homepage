import { Button, Card, Group, Text } from "@mantine/core"
import { IconExternalLink } from "@tabler/icons-react"
import { ReactNode } from "react"
import classes from "./ServiceCard.module.css"

type ServiceCardProps = {
  name: string,
  description: string,
  visitLink: string,
  extraBtn?: {
    label: string,
    href: string,
    icon: ReactNode,
  },
}

const ServiceCard: React.FC<ServiceCardProps> = ({ name, visitLink, extraBtn, description }) => {
  return (
    <Card className={classes.root}>
      <Group justify="space-between" align="center">
        <Text fw={500} className={classes.title}>{name}</Text>
      </Group>

      <Text size="sm" className={classes.body}>
        {description}
      </Text>

      <Group className={classes.control}>
        <Button component="a" href={visitLink} target="_blank" rightSection={<IconExternalLink />}>
          Visit
        </Button>
        {extraBtn !== undefined ? (
          <Button component="a" href={extraBtn.href} target="_blank" rightSection={extraBtn.icon} variant="light">
          {extraBtn.label}
          </Button>
        ) : null}
      </Group>
    </Card>
  )
}

export default ServiceCard
