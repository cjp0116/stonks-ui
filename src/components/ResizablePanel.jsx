'use client';
import { useState, useRef, useCallback, useEffect } from 'react';

export default function ResizablePanel({
    children,
    initialWidth = 320,
    initialHeight = 400,
    initialTop = 0,
    initialLeft = 0,
    minWidth = 250,
    minHeight = 200,
    className = ''
}) {
    const [dimensions, setDimensions] = useState({
        width: initialWidth,
        height: initialHeight
    });

    const [position, setPosition] = useState({
        top: initialTop,
        left: initialLeft
    });

    const [isResizing, setIsResizing] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [resizeDirection, setResizeDirection] = useState('');
    const panelRef = useRef(null);
    const startPos = useRef({ x: 0, y: 0 });
    const startDimensions = useRef({ width: 0, height: 0 });
    const startPosition = useRef({ top: 0, left: 0 });


    const getContainerBounds = useCallback(() => {
        if (!panelRef.current || !panelRef.current.parentElement) {
            return {
                maxWidth: window.innerWidth,
                maxHeight: window.innerHeight,
                maxLeft: window.innerWidth,
                maxTop: window.innerHeight
            };
        }

        const parentRect = panelRef.current.parentElement.getBoundingClientRect();

        return {
            maxWidth: parentRect.width,
            maxHeight: parentRect.height,
            maxLeft: parentRect.width,
            maxTop: parentRect.height
        };
    }, []);

    const handleResizeStart = useCallback((clientX, clientY, direction) => {
        setIsResizing(true);
        setResizeDirection(direction);

        startPos.current = { x: clientX, y: clientY };
        startDimensions.current = { ...dimensions };

        const handleMove = (e) => {
            e.preventDefault();

            const clientX = e.clientX || (e.touches && e.touches[0]?.clientX);
            const clientY = e.clientY || (e.touches && e.touches[0]?.clientY);

            if (!clientX || !clientY) return;

            const deltaX = clientX - startPos.current.x;
            const deltaY = clientY - startPos.current.y;

            let newWidth = startDimensions.current.width;
            let newHeight = startDimensions.current.height;

            const bounds = getContainerBounds();

            if (direction.includes('right')) {
                newWidth = Math.max(
                    minWidth,
                    Math.min(bounds.maxWidth - position.left, startDimensions.current.width + deltaX)
                );
            }

            if (direction.includes('bottom')) {
                newHeight = Math.max(
                    minHeight,
                    Math.min(bounds.maxHeight - position.top, startDimensions.current.height + deltaY)
                );
            }

            setDimensions({ width: newWidth, height: newHeight });
        };

        const handleEnd = () => {
            setIsResizing(false);
            setResizeDirection('');

            // Remove mouse event listeners
            document.removeEventListener('mousemove', handleMove);
            document.removeEventListener('mouseup', handleEnd);

            // Remove touch event listeners
            document.removeEventListener('touchmove', handleMove);
            document.removeEventListener('touchend', handleEnd);
        };

        // Add mouse event listeners
        document.addEventListener('mousemove', handleMove, { passive: false });
        document.addEventListener('mouseup', handleEnd);

        // Add touch event listeners
        document.addEventListener('touchmove', handleMove, { passive: false });
        document.addEventListener('touchend', handleEnd);
    }, [dimensions, position, minWidth, minHeight, getContainerBounds]);

    // Handle drag start
    const handleDragStart = useCallback((clientX, clientY) => {
        setIsDragging(true);

        startPos.current = { x: clientX, y: clientY };
        startPosition.current = { ...position };

        const handleMove = (e) => {
            e.preventDefault();

            const clientX = e.clientX || (e.touches && e.touches[0]?.clientX);
            const clientY = e.clientY || (e.touches && e.touches[0]?.clientY);

            if (!clientX || !clientY) return;

            const deltaX = clientX - startPos.current.x;
            const deltaY = clientY - startPos.current.y;

            // Get container bounds to prevent overflow
            const bounds = getContainerBounds();

            const newLeft = Math.max(
                0,
                Math.min(bounds.maxLeft - dimensions.width, startPosition.current.left + deltaX)
            );

            const newTop = Math.max(
                0,
                Math.min(bounds.maxTop - dimensions.height, startPosition.current.top + deltaY)
            );

            setPosition({ left: newLeft, top: newTop });
        };

        const handleEnd = () => {
            setIsDragging(false);

            // Remove mouse event listeners
            document.removeEventListener('mousemove', handleMove);
            document.removeEventListener('mouseup', handleEnd);

            // Remove touch event listeners
            document.removeEventListener('touchmove', handleMove);
            document.removeEventListener('touchend', handleEnd);
        };

        // Add mouse event listeners
        document.addEventListener('mousemove', handleMove, { passive: false });
        document.addEventListener('mouseup', handleEnd);

        // Add touch event listeners
        document.addEventListener('touchmove', handleMove, { passive: false });
        document.addEventListener('touchend', handleEnd);
    }, [position, dimensions, getContainerBounds]);

    const handleMouseDown = useCallback((e, action, direction = '') => {
        e.preventDefault();
        e.stopPropagation();

        if (action === 'resize') {
            handleResizeStart(e.clientX, e.clientY, direction);
        } else if (action === 'drag') {
            handleDragStart(e.clientX, e.clientY);
        }
    }, [handleResizeStart, handleDragStart]);

    const handleTouchStart = useCallback((e, action, direction = '') => {
        e.preventDefault();
        e.stopPropagation();

        if (e.touches && e.touches[0]) {
            if (action === 'resize') {
                handleResizeStart(e.touches[0].clientX, e.touches[0].clientY, direction);
            } else if (action === 'drag') {
                handleDragStart(e.touches[0].clientX, e.touches[0].clientY);
            }
        }
    }, [handleResizeStart, handleDragStart]);

    // Update dimensions and position when props change
    useEffect(() => {
        setDimensions({
            width: initialWidth,
            height: initialHeight
        });
        setPosition({
            top: initialTop,
            left: initialLeft
        });
    }, [initialWidth, initialHeight, initialTop, initialLeft]);

    const zIndex = isResizing || isDragging ? 10 : 1;
    return (
        <div
            ref={panelRef}
            className={`absolute ${className} ${(isResizing || isDragging) ? 'select-none' : ''} ${isDragging ? 'cursor-move' : ''}`}
            style={{
                width: `${dimensions.width}px`,
                height: `${dimensions.height}px`,
                top: `${position.top}px`,
                left: `${position.left}px`,
                minWidth: `${minWidth}px`,
                minHeight: `${minHeight}px`,
                zIndex: zIndex,
                transition: 'z-index 0e'
            }}
            onMouseDown={(e) => handleMouseDown(e, 'drag')}
            onTouchStart={(e) => handleTouchStart(e, 'drag')}
        >
            <div className="w-full h-full overflow-hidden pointer-events-none">
                <div className="w-full h-full pointer-events-auto">
                    {children}
                </div>
            </div>

            <div
                className="absolute -right-1 top-4 bottom-4 w-2 cursor-ew-resize opacity-0 hover:opacity-70 transition-opacity bg-gray-600 rounded-sm pointer-events-auto"
                onMouseDown={(e) => handleMouseDown(e, 'resize', 'right')}
                onTouchStart={(e) => handleTouchStart(e, 'resize', 'right')}
                style={{ touchAction: 'none' }}
            >
                <div className="h-full w-0.5 bg-gray-400 mx-auto" />
            </div>

            <div
                className="absolute -bottom-1 left-4 right-4 h-2 cursor-ns-resize opacity-0 hover:opacity-70 transition-opacity bg-gray-600 rounded-sm pointer-events-auto"
                onMouseDown={(e) => handleMouseDown(e, 'resize', 'bottom')}
                onTouchStart={(e) => handleTouchStart(e, 'resize', 'bottom')}
                style={{ touchAction: 'none' }}
            >
                <div className="w-full h-0.5 bg-gray-400 my-auto" />
            </div>

            <div
                className="absolute -bottom-1 -right-1 w-3 h-3 bg-gray-600 border border-gray-500 rounded-sm cursor-nwse-resize opacity-0 hover:opacity-100 transition-opacity pointer-events-auto"
                onMouseDown={(e) => handleMouseDown(e, 'resize', 'bottom-right')}
                onTouchStart={(e) => handleTouchStart(e, 'resize', 'bottom-right')}
                style={{ touchAction: 'none' }}
            />

            {(isResizing || isDragging) && (
                <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded border border-gray-600 pointer-events-none z-10">
                    {isResizing && `${dimensions.width} × ${dimensions.height}`}
                    {isDragging && `${Math.round(position.left)}, ${Math.round(position.top)}`}
                </div>
            )}

            <div className="absolute top-2 left-2 opacity-30 hover:opacity-60 transition-opacity pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
            </div>
        </div>
    );
}
