// temporary incompatibility between TS and server components solution
import { ReactNode } from "react"

declare global {
  namespace JSX {
    type ElementType =
      | keyof JSX.IntrinsicElements
      | ((props: any) => Promise<ReactNode> | ReactNode)
  }
}
