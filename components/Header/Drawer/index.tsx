'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export const Drawer = () => {
  const { setTheme, theme } = useTheme()

  return (
    <Sheet>
      <SheetTrigger>
        <Button size={'icon'} variant={'outline'}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="">
              <Sun
                className={
                  theme === 'light'
                    ? 'w-[1.2rem] h-[1.2rem] transition-all block rotate-0 scale-100 dark:-rotate-90 dark:scale-0'
                    : 'w-[1.2rem] h-[1.2rem] transition-all rotate-0 scale-100 dark:-rotate-90 dark:scale-0 hidden'
                }
              />
              <Moon
                className={
                  theme === 'dark'
                    ? 'w-[1.2rem] h-[1.2rem] block transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100'
                    : 'w-[1.2rem] h-[1.2rem] transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-0 hidden'
                }
              />
              <p className="">{theme === 'dark' ? 'Dark' : 'Light'}</p>
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme('light')}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SheetContent>
    </Sheet>
  )
}
