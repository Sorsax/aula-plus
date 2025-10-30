declare module 'liquid-glass-react' {
  import * as React from 'react'

  export interface LiquidGlassProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode
    displacementScale?: number
    blurAmount?: number
    saturation?: number
    aberrationIntensity?: number
    elasticity?: number
    cornerRadius?: number
    padding?: string
    overLight?: boolean
    mouseContainer?: React.RefObject<HTMLElement | null>
    mode?: 'standard' | 'polar' | 'prominent' | 'shader'
    globalMousePos?: { x: number; y: number }
    mouseOffset?: { x: number; y: number }
    style?: React.CSSProperties
    className?: string
    onClick?: () => void
  }

  const LiquidGlass: React.FC<LiquidGlassProps>
  export default LiquidGlass
}
