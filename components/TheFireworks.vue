<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const canvasRef = ref<HTMLCanvasElement | null>(null)

// Sparkle/Firework Animation Logic
onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  let width = canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth
  let height = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight

  const handleResize = () => {
    width = canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth
    height = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight
  }

  window.addEventListener('resize', handleResize)

  class Particle {
    x: number; y: number; vx: number; vy: number; life: number; color: string; size: number;
    constructor(x: number, y: number, color: string) {
      this.x = x; this.y = y
      const angle = Math.random() * Math.PI * 2
      const speed = Math.random() * 2 + 0.5
      this.vx = Math.cos(angle) * speed
      this.vy = Math.sin(angle) * speed
      this.life = 100
      this.color = color
      this.size = Math.random() * 3 + 1
    }
    update() {
      this.x += this.vx
      this.y += this.vy
      this.life--
      this.vy += 0.05
      this.size *= 0.96
    }
    draw(ctx: CanvasRenderingContext2D) {
      ctx.globalAlpha = this.life / 100
      ctx.fillStyle = this.color
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  class Firework {
    x: number; y: number; targetY: number; speed: number; exploded: boolean; particles: Particle[]; color: string;
    constructor() {
      this.x = Math.random() * width
      this.y = height
      this.targetY = Math.random() * (height * 0.4) + (height * 0.1)
      this.speed = Math.random() * 3 + 4
      this.exploded = false
      this.particles = []
      const colors = ['#1E3A8A', '#2563EB', '#60A5FA', '#93C5FD'] // Blue/Sky shades
      this.color = colors[Math.floor(Math.random() * colors.length)]
    }
    update() {
      if (!this.exploded) {
        this.y -= this.speed
        this.speed *= 0.98
        if (this.y <= this.targetY || this.speed < 0.5) this.explode()
      } else {
        this.particles.forEach((p, index) => {
          p.update()
          if (p.life <= 0) this.particles.splice(index, 1)
        })
      }
    }
    explode() {
      this.exploded = true
      for (let i = 0; i < 40; i++) {
        this.particles.push(new Particle(this.x, this.y, this.color))
      }
    }
    draw(ctx: CanvasRenderingContext2D) {
      if (!this.exploded) {
        ctx.globalAlpha = 0.5
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2)
        ctx.fill()
      } else {
        this.particles.forEach(p => p.draw(ctx))
      }
    }
  }

  const fireworks: Firework[] = []
  const animate = () => {
    ctx.clearRect(0, 0, width, height)
    if (Math.random() < 0.03) fireworks.push(new Firework())
    fireworks.forEach((fw, index) => {
      fw.update()
      fw.draw(ctx)
      if (fw.exploded && fw.particles.length === 0) fireworks.splice(index, 1)
    })
    requestAnimationFrame(animate)
  }
  animate()

  // Cleanup
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
})
</script>

<template>
  <div class="absolute inset-0 z-0 opacity-40 pointer-events-none">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-100/50 via-transparent to-transparent"></div>
    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[100px]"></div>
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-[80px]"></div>
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full"></canvas>
  </div>
</template>
