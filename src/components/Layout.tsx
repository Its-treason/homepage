import { AppShell, Container } from "@mantine/core"
import { ReactNode } from "react"

type LayoutProps = {
  children: ReactNode,
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <AppShell>
      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  )
}

export default Layout
