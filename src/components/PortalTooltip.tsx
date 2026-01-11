import { useEffect, useState, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalTooltipProps {
  targetRef: React.RefObject<HTMLDivElement | null>;
  children: ReactNode;
}

export function PortalTooltip({ targetRef, children }: PortalTooltipProps) {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [arrowData, setArrowData] = useState({
    svgLeft: 0,
    svgTop: 0,
    width: 100,
    height: 100,
    startX: 0,
    startY: 0,
    endX: 50,
    endY: 50,
  });
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePosition = () => {
      if (targetRef.current && tooltipRef.current) {
        const rect = targetRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();

        // Position tooltip above target
        const tooltipLeft = rect.left + rect.width / 2 + 10; // Slightly right of center
        const tooltipTop = rect.top - tooltipRect.height - 40; // Shorter arrow distance

        setPosition({
          top: tooltipTop,
          left: tooltipLeft,
        });

        // Calculate arrow points
        // Start: middle-left of tooltip (in screen coordinates)
        const startScreenX = tooltipLeft;
        const startScreenY = tooltipTop + tooltipRect.height / 2;

        // End: 20px above the target div, positioned at 50% of the target width
        const endScreenX = rect.left + rect.width * 0.3;
        const endScreenY = rect.top - 20;

        // SVG positioning - place it to cover the area between start and end
        // Extra padding to ensure arrow line start and arrowhead are fully visible
        const svgLeft = Math.min(startScreenX, endScreenX) - 25;
        const svgTop = Math.min(startScreenY, endScreenY) - 25;
        const svgWidth = Math.abs(endScreenX - startScreenX) + 50;
        const svgHeight = Math.abs(endScreenY - startScreenY) + 50;

        // Convert screen coordinates to SVG local coordinates
        const startX = startScreenX - svgLeft;
        const startY = startScreenY - svgTop;
        const endX = endScreenX - svgLeft;
        const endY = endScreenY - svgTop;

        setArrowData({
          svgLeft,
          svgTop,
          width: svgWidth,
          height: svgHeight,
          startX,
          startY,
          endX,
          endY,
        });
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [targetRef]);

  // Create bezier curve path
  // More horizontal start, sharper angle at end
  const horizontalRun = arrowData.endX - arrowData.startX;
  const controlX = arrowData.startX + horizontalRun * 0.85; // 85% of horizontal distance - stays horizontal longer
  const controlY = arrowData.startY; // No vertical drop - perfectly horizontal start

  // Calculate arrowhead orientation based on curve tangent at end
  // For quadratic bezier, tangent at end point is from control to end
  const dx = arrowData.endX - controlX;
  const dy = arrowData.endY - controlY;
  const angle = Math.atan2(dy, dx);

  // Arrowhead points with size 6
  const arrowSize = 6;
  const arrowAngle = Math.PI / 6; // 30 degrees

  const arrow1X = arrowData.endX - arrowSize * Math.cos(angle - arrowAngle);
  const arrow1Y = arrowData.endY - arrowSize * Math.sin(angle - arrowAngle);
  const arrow2X = arrowData.endX - arrowSize * Math.cos(angle + arrowAngle);
  const arrow2Y = arrowData.endY - arrowSize * Math.sin(angle + arrowAngle);

  return createPortal(
    <>
      {/* Tooltip */}
      <div
        ref={tooltipRef}
        className="fixed z-50 pointer-events-none"
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
        }}
      >
        <div className="px-4 py-2 rounded-lg">
          <div className="text-primary">{children}</div>
        </div>
      </div>

      {/* Arrow SVG */}
      <svg
        className="hidden sm:block fixed z-50 pointer-events-none text-gray-400"
        style={{
          left: `${arrowData.svgLeft}px`,
          top: `${arrowData.svgTop}px`,
        }}
        width={arrowData.width}
        height={arrowData.height}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        {/* Curved line using quadratic bezier */}
        <path
          d={`M ${arrowData.startX} ${arrowData.startY} Q ${controlX} ${controlY} ${arrowData.endX} ${arrowData.endY}`}
        />
        {/* Arrowhead */}
        <path
          d={`M ${arrow1X} ${arrow1Y} L ${arrowData.endX} ${arrowData.endY} L ${arrow2X} ${arrow2Y}`}
        />
      </svg>
    </>,
    document.body
  );
}
