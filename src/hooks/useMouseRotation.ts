import { useEffect, RefObject } from 'react'

export const useMouseRotation = (element: RefObject<HTMLElement>) => {
    useEffect(() => {
        const container = document.body

        const mouse = {
            _x: 0,
            _y: 0,
            x: 0,
            y: 0,
            updatePosition(event: MouseEvent) {
                const e = event || window.event;
                this.x = e.clientX - this._x;
                this.y = (e.clientY - this._y) * -1;
            },
            setOrigin(container: HTMLElement) {
                this._x = container.offsetLeft + Math.floor(container.offsetWidth / 2);
                this._y = container.offsetTop + Math.floor(container.offsetHeight / 2);
            }
        };

        mouse.setOrigin(container);

        let counter = 0;
        const REFRESH_RATE = 10;
        const isTimeToUpdate = () => counter++ % REFRESH_RATE === 0;

        const onMouseMoveHandler = (event: MouseEvent) => {
            if (isTimeToUpdate()) {
                update(event);
            }
        };

        const update = (event: MouseEvent) => {
            mouse.updatePosition(event);
            updateTransformStyle(
                (mouse.y / (element.current?.offsetHeight || 1) / 2).toFixed(2),
                (mouse.x / (element.current?.offsetWidth || 1) / 2).toFixed(2)
            );
        };

        const updateTransformStyle = (x: string, y: string) => {
            const transform = `rotateX(${x}deg) rotateY(${y}deg)`

            element.current!.style.webkitTransform = transform
            element.current!.style.transform = transform
        };

        container.onmousemove = onMouseMoveHandler
    }, [element])
}