import { cn } from '@/lib/utils'
import React from 'react'

interface DarkButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
}

const DarkButton = ({
  children,
  className,
  onClick,
  disabled = false,
  variant = 'default',
  size = 'md',
  type = 'button',
}: DarkButtonProps) => {
  const baseStyles = [
    'relative font-medium transition-all duration-200',
    'rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
    'group overflow-hidden active:scale-95',
  ]

  const variants = {
    default: [
      'bg-black text-white dark:bg-white dark:text-black',
      'hover:scale-105 hover:shadow-lg',
    ],
    outline: [
      'border-2 border-black text-black dark:border-white dark:text-white',
      'hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black',
      'hover:scale-105 hover:shadow-lg',
    ],
    ghost: [
      'text-black dark:text-white',
      'hover:bg-black/10 dark:hover:bg-white/10',
      'hover:scale-105',
    ],
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        ...baseStyles,
        ...variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
      
      {/* Animated bottom border */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full transform bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />
      
      {/* Hover overlay */}
      <div className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:bg-black/5 dark:group-hover:bg-white/5 group-hover:opacity-100" />
    </button>
  )
}

export default DarkButton