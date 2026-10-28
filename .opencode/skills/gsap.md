---
name: gsap
description: Biblioteca de animaciones JavaScript profesional de alto rendimiento para la web, compatible con todos los navegadores modernos. Úsala cuando el usuario mencione o pregunte sobre "gsap", "gsap animacion", "gsap javascript", "gsap ui".
---

# GSAP

## Instructions
- Usa esta guía como referencia oficial para entender, evaluar o implementar esta herramienta.
- Toda la información está validada contra la documentación oficial y fuentes primarias.

## Key Information
- **Category:** Frontend
- **Pricing:** freemium
- **License:** Standard
- **Technical Level:** intermedio
- **Compatibility:** Web
- **Official Site:** https://gsap.com

- **Alternatives:** motion

## Features
- Animaciones de alto rendimiento con 60fps estables
- Timeline para secuencias complejas y sincronización
- Easing personalizado y curvas bezier avanzadas
- Animación de SVG, Canvas, WebGL y DOM
- ScrollTrigger para animaciones basadas en scroll
- MorphSVG para transformaciones de formas SVG
- Plugins especializados (Text, MotionPath, Flip, Draggable)

## Steps
### 1. Instalar GSAP y crear una animación básica
Instala GSAP con `npm install gsap` y crea tu primera animación usando `gsap.to()` o `gsap.from()` especificando el elemento objetivo, las propiedades a animar y la duración.

### 2. Construir secuencias con Timeline
Crea un `gsap.timeline()` para encadenar múltiples animaciones en secuencia. Usa los parámetros de posición para controlar el timing relativo entre cada animación de la línea de tiempo.

### 3. Añadir animaciones basadas en scroll
Usa el plugin ScrollTrigger para vincular animaciones al desplazamiento de la página: revelar elementos al hacer scroll, animaciones parallax, o secuencias que avanzan conforme el usuario se desplaza.

### 4. Integrar con frameworks modernos
En React usa el hook `useGSAP()` del paquete `@gsap/react` para animaciones con limpieza automática. En Vue o Svelte, usa `gsap.context()` para gestionar el ciclo de vida y evitar memory leaks.

## When to Use
- **Animaciones web de alto rendimiento:** Cuando necesitas animaciones fluidas a 60fps en producción, especialmente para sitios creativos, portfolios, landing pages o experiencias interactivas de marca.
- **Secuencias animadas complejas con sincronización:** Para coreografías de animación donde múltiples elementos deben coordinarse con timing preciso: intro animations, transiciones entre secciones o narrativas visuales.
- **Animaciones basadas en scroll y parallax:** Ideal para storytelling visual donde los elementos se revelan, mueven o transforman conforme el usuario hace scroll por la página.

## Examples
### Animación básica con gsap.to()
```
import gsap from 'gsap';

gsap.to('.box', {
  x: 200,
  rotation: 360,
  duration: 2,
  ease: 'power2.inOut'
});
```

**Output:** El elemento con clase `.box` se mueve 200px a la derecha mientras rota 360 grados durante 2 segundos con una curva de easing suave.

### Timeline con ScrollTrigger
```
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.section',
    start: 'top center',
    end: 'bottom top',
    scrub: true
  }
});

tl.from('.title', { opacity: 0, y: 50 })
  .from('.text', { opacity: 0, x: -100 }, '-=0.5')
  .from('.image', { scale: 0.8, opacity: 0 }, '-=0.5');
```

**Output:** Secuencia de revelación al hacer scroll: primero aparece el título deslizándose desde abajo, luego el texto desde la izquierda y finalmente la imagen escalando, todo sincronizado con el desplazamiento.

## Tips
- Usa `gsap.context()` en frameworks como React o Vue para agrupar animaciones y limpiarlas automáticamente cuando el componente se desmonta.
- Prefiere `gsap.to()` y `gsap.from()` con propiedades transform (x, y, rotation, scale) en lugar de left/top/width para aprovechar la aceleración por GPU.
- Registra los plugins al inicio del proyecto con `gsap.registerPlugin()` para evitar errores de dependencias y optimizar el tree-shaking.
- Usa los position parameters del timeline (`-=0.5`, `>`, `+=1`) para controlar con precisión cuándo comienza cada animación en relación a las demás.
- Agrupa las animaciones relacionadas en timelines en lugar de usar delays individuales; es más fácil de mantener, pausar y controlar globalmente.

## FAQ
- **¿GSAP requiere licencia de pago?** GSAP es gratuito para la mayoría de usos comerciales bajo la licencia Standard. Los plugins premium (SplitText, MorphSVG, etc.) y el uso en productos que se venden a múltiples usuarios finales requieren la membresía Club GreenSock.
- **¿GSAP funciona con React, Vue o Angular?** Sí, GSAP es framework-agnostic y funciona con cualquier framework. React tiene soporte oficial con el hook `useGSAP()` del paquete `@gsap/react`. Para otros frameworks se usa `gsap.context()`.
- **¿GSAP es mejor que CSS animations?** GSAP ofrece más control y rendimiento que CSS animations para casos complejos: secuencias sincronizadas, control de playback (pause, reverse, seek), easing avanzado y animaciones basadas en scroll. Para transiciones simples, CSS es suficiente.
- **¿Qué tamaño tiene GSAP en el bundle?** El core de GSAP pesa aproximadamente 30 KB minificado (10 KB gzipped). Los plugins se cargan por separado, y gracias al tree-shaking solo incluyes lo que usas en tu proyecto.

## Troubleshooting
- **Official Site Unreachable:** Verify the URL at https://gsap.com
- **Version Mismatch:** Always refer to the official docs for the latest version-specific guidance.