import { cn } from '@/lib/utils'
import React from 'react'

interface DarkButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
}

const DarkButton = ({
  children,
  className,
  onClick,
  disabled = false,
}: DarkButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'relative px-6 py-3 text-sm font-medium transition-all duration-200',
        'rounded-full bg-black text-white dark:bg-white dark:text-black',
        'hover:scale-105 hover:shadow-lg',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
        'group overflow-hidden ',
        className
      )}
    >
      {children}
      <div className="absolute bottom-0 left-0 h-[2px] w-full transform bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />
      <div className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:bg-black/5 dark:group-hover:bg-white/5" />
    </button>
  )
}

export default DarkButton
