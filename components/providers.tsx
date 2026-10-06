'use client';
import {MotionConfig} from 'framer-motion';
// Respecte la préférence système « réduire les animations » pour toutes les animations Framer Motion.
export function Providers({children}:{children:React.ReactNode}){return <MotionConfig reducedMotion="user" transition={{type:'spring',stiffness:260,damping:30}}>{children}</MotionConfig>}
