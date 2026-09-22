import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function HeroImageSlider() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) {
            return;
        }

        // ----------------------------------------
        // Scene
        // ----------------------------------------

        const scene = new THREE.Scene();

        // ----------------------------------------
        // Camera
        // ----------------------------------------

        const camera = new THREE.OrthographicCamera(
            -1,
            1,
            1,
            -1,
            0.1,
            10
        );

        camera.position.z = 1;

        // ----------------------------------------
        // Renderer
        // ----------------------------------------

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });

        renderer.setPixelRatio(
            Math.min(window.devicePixelRatio, 2)
        );

        renderer.setSize(
            container.clientWidth,
            container.clientHeight
        );

        container.appendChild(renderer.domElement);

        // ----------------------------------------
        // Resize
        // ----------------------------------------

        const handleResize = () => {
            if (!container) {
                return;
            }

            renderer.setSize(
                container.clientWidth,
                container.clientHeight
            );
        };

        window.addEventListener('resize', handleResize);

        // ----------------------------------------
        // Animation
        // ----------------------------------------

        let animationFrameId: number;

        const animate = () => {
            renderer.render(scene, camera);

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        // ----------------------------------------
        // Cleanup
        // ----------------------------------------

        return () => {
            cancelAnimationFrame(animationFrameId);

            window.removeEventListener(
                'resize',
                handleResize
            );

            renderer.dispose();

            // Verifica se o canvas ainda existe
            // antes de removê-lo.
            if (renderer.domElement.parentElement === container) {
                container.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0"
            aria-hidden="true"
        />
    );
}