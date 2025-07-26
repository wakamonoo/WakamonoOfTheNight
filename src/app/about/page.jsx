// app/about/page.jsx
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import BottomHalfCircleMenu from '@/components/buttons';

export default function AboutPage() {
  return (
    <div>
      <h1>ABOUT ME</h1>

      <BottomHalfCircleMenu />
    </div>
  );
}
