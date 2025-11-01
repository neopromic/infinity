import { Drawer } from '../Drawer'
import { LogoSection } from '../LogoSection'
import { NavItems } from '../NavItems'

export const Container = () => {
  return (
    <header className="top-0 z-50 sticky inset-0 flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 border-b">
      {/* <p className="hex1"></p> */}
      <div className="sm:block lg:hidden">
        <Drawer />
      </div>
      <LogoSection />
      <NavItems />
    </header>
  )
}
