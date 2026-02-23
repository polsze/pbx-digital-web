import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Button = ({ 
  children, 
  to, 
  href, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-bold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black'
  
  const variants = {
    primary: 'bg-[#a0ff00] text-black hover:bg-[#8cdf00] focus:ring-[#a0ff00] shadow-lg shadow-[#a0ff00]/20',
    secondary: 'bg-transparent border-2 border-[#a0ff00] text-[#a0ff00] hover:bg-[#a0ff00] hover:text-black focus:ring-[#a0ff00]',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#128C7E] focus:ring-[#25D366]',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-black focus:ring-white'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`

  const MotionLink = motion(Link);
  const MotionAnchor = motion.a;
  const MotionButton = motion.button;

  if (to) {
    return (
      <MotionLink
        to={to}
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </MotionLink>
    )
  }

  if (href) {
    return (
      <MotionAnchor
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </MotionAnchor>
    )
  }

  return (
    <MotionButton
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </MotionButton>
  )
}

export default Button