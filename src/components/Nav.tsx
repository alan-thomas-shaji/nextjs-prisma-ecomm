import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ComponentProps, ReactNode } from 'react'

export const Nav = ({children}: {children: ReactNode}) => {
  return (
    <nav className='bg-primary text-primary-foreground flex justify-center px-4'>
      {children}
    </nav>
  )
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
    const pathName = usePathname();
  return (
    <Link {...props} className={cn()} />
  )
}
