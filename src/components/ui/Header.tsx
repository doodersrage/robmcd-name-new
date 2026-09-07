'use client'

import React, { useState } from 'react'
import { MobileHeaderNav } from '@/components/ui/MobileHeaderNav'
import { NavMenu } from '@/components/ui/NavMenu'
import { SiteLogo } from '@/components/ui/SiteLogo'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { PRIMARY_NAV } from '@/lib/site'

function SearchBox({ id = 'site-search' }: { id?: string }) {
  const [q, setQ] = useState('')

  return (
    <form action="/search" method="get" className="relative min-w-0 flex-1 md:max-w-[12rem] lg:max-w-[14rem]">
      <label htmlFor={id} className="sr-only">
        Search
      </label>
      <input
        id={id}
        name="query"
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search"
        className="input-field w-full py-2 text-sm"
      />
    </form>
  )
}

export function Header() {
  return (
    <header className="site-header">
      <nav className="site-header__inner">
        <div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
          <SiteLogo variant="compact" showTagline={false} />

          <div className="hidden min-w-0 md:flex md:flex-1 md:items-center md:justify-end md:gap-4 lg:gap-6">
            <NavMenu items={PRIMARY_NAV} />
            <ThemeToggle />
            <SearchBox id="site-search" />
          </div>

          <MobileHeaderNav
            menuButton={
              <div className="flex min-w-0 flex-1 items-center gap-3">
                <SearchBox id="site-search-mobile" />
                <ThemeToggle />
              </div>
            }
          >
            <NavMenu items={PRIMARY_NAV} mobile />
          </MobileHeaderNav>
        </div>
      </nav>
    </header>
  )
}
