import React from 'react'

function Background() {
  return (
    <div className="pattern-background">
      <svg
        className="p-root"
        viewBox="0 0 2800 2400"
        width="2800"
        height="2400"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* <linearGradient id="tile-background" gradientTransform="rotate(45)">
            <stop offset="0" stop-color="#FF6426"></stop>
            <stop offset="100%" stop-color="#FF954E"></stop>
          </linearGradient> */}
          {/* <style>
    .p-rotate, circle { transform-origin: 50% 50%; }
.p-rotate {
  will-change: transform;
  transition: transform 1000ms;
  transform: rotate(calc(90deg * var(--r, 0)));
}
.p-ring { stroke: #F26600; opacity: 0.4; } 
.p-mask-svg { mix-blend-mode: difference; }
.p-mask-g {
  will-change: transform;
  transition: transform 1000ms;
}
.p-mask {
  will-change: d;
  transition: d 500ms;
}
.p-mask.convex { d: path('M 100 0 h 200 V 100 h -200 C 100 100 95 78 95 50 C 95 22 100 0 100 0 Z'); }
.p-mask.concave { d: path('M 100 0 h 200 V 100 h -200 C 100 100 105 78 105 50 C 105 22 100 0 100 0 Z'); }
</style> */}
        </defs>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="0"
          y="0"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="0"
          y="100"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="0"
          y="200"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="0"
          y="300"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="0"
          y="400"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="0"
          y="500"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="0"
          y="600"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="0"
          y="700"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="0"
          y="800"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="0"
          y="900"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="0"
          y="1000"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="0"
          y="1100"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="0"
          y="1200"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="0"
          y="1300"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="0"
          y="1400"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="0"
          y="1500"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="0"
          y="1600"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="0"
          y="1700"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="0"
          y="1800"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="0"
          y="1900"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="0"
          y="2000"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="0"
          y="2100"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="0"
          y="2200"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="0"
          y="2300"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="100"
          y="0"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="100"
          y="100"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="100"
          y="200"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="100"
          y="300"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="100"
          y="400"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="100"
          y="500"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="100"
          y="600"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="100"
          y="700"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="100"
          y="800"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="100"
          y="900"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="100"
          y="1000"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="100"
          y="1100"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="100"
          y="1200"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="100"
          y="1300"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="100"
          y="1400"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="100"
          y="1500"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="100"
          y="1600"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="100"
          y="1700"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="100"
          y="1800"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="100"
          y="1900"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="100"
          y="2000"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="100"
          y="2100"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="100"
          y="2200"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="100"
          y="2300"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="200"
          y="0"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="200"
          y="100"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="200"
          y="200"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="200"
          y="300"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="200"
          y="400"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="200"
          y="500"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="200"
          y="600"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="200"
          y="700"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="200"
          y="800"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="200"
          y="900"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="200"
          y="1000"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="200"
          y="1100"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="200"
          y="1200"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="200"
          y="1300"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="200"
          y="1400"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="200"
          y="1500"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="200"
          y="1600"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="200"
          y="1700"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="200"
          y="1800"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="200"
          y="1900"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="200"
          y="2000"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="200"
          y="2100"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="200"
          y="2200"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="200"
          y="2300"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="300"
          y="0"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="300"
          y="100"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="300"
          y="200"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="300"
          y="300"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="300"
          y="400"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="300"
          y="500"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="300"
          y="600"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="300"
          y="700"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="300"
          y="800"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="300"
          y="900"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="300"
          y="1000"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="300"
          y="1100"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="300"
          y="1200"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="300"
          y="1300"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="300"
          y="1400"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="300"
          y="1500"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="300"
          y="1600"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="300"
          y="1700"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="300"
          y="1800"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="300"
          y="1900"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="300"
          y="2000"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="300"
          y="2100"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="300"
          y="2200"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="300"
          y="2300"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="400"
          y="0"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="400"
          y="100"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="400"
          y="200"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="400"
          y="300"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="400"
          y="400"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="400"
          y="500"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="400"
          y="600"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="400"
          y="700"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="400"
          y="800"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="400"
          y="900"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="400"
          y="1000"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="400"
          y="1100"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="400"
          y="1200"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="400"
          y="1300"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="400"
          y="1400"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="400"
          y="1500"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="400"
          y="1600"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="400"
          y="1700"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="400"
          y="1800"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="400"
          y="1900"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="400"
          y="2000"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="400"
          y="2100"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="400"
          y="2200"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="400"
          y="2300"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="500"
          y="0"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="500"
          y="100"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="500"
          y="200"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="500"
          y="300"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="500"
          y="400"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="500"
          y="500"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="500"
          y="600"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="500"
          y="700"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="500"
          y="800"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="500"
          y="900"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="500"
          y="1000"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="500"
          y="1100"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="500"
          y="1200"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="500"
          y="1300"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="500"
          y="1400"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="500"
          y="1500"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="500"
          y="1600"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="500"
          y="1700"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="500"
          y="1800"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="500"
          y="1900"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="500"
          y="2000"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="500"
          y="2100"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="500"
          y="2200"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="500"
          y="2300"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="600"
          y="0"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="600"
          y="100"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="600"
          y="200"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="600"
          y="300"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="600"
          y="400"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="600"
          y="500"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="600"
          y="600"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="600"
          y="700"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="600"
          y="800"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="600"
          y="900"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="600"
          y="1000"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="600"
          y="1100"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="600"
          y="1200"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="600"
          y="1300"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="600"
          y="1400"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="600"
          y="1500"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="600"
          y="1600"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="600"
          y="1700"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="600"
          y="1800"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="600"
          y="1900"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="600"
          y="2000"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="600"
          y="2100"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="600"
          y="2200"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="600"
          y="2300"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="700"
          y="0"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="700"
          y="100"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="700"
          y="200"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="700"
          y="300"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="700"
          y="400"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="700"
          y="500"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="700"
          y="600"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="700"
          y="700"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="700"
          y="800"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="700"
          y="900"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="700"
          y="1000"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="700"
          y="1100"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="700"
          y="1200"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="700"
          y="1300"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="700"
          y="1400"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="700"
          y="1500"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="700"
          y="1600"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="700"
          y="1700"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="700"
          y="1800"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="700"
          y="1900"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="700"
          y="2000"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="700"
          y="2100"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="700"
          y="2200"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="700"
          y="2300"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="800"
          y="0"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="800"
          y="100"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="800"
          y="200"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="800"
          y="300"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="800"
          y="400"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="800"
          y="500"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="800"
          y="600"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="800"
          y="700"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="800"
          y="800"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="800"
          y="900"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="800"
          y="1000"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="800"
          y="1100"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="800"
          y="1200"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="800"
          y="1300"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="800"
          y="1400"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="800"
          y="1500"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="800"
          y="1600"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="800"
          y="1700"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="800"
          y="1800"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="800"
          y="1900"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="800"
          y="2000"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="800"
          y="2100"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="800"
          y="2200"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="800"
          y="2300"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="900"
          y="0"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="900"
          y="100"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="900"
          y="200"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="900"
          y="300"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="900"
          y="400"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="900"
          y="500"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="900"
          y="600"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="900"
          y="700"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="900"
          y="800"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="900"
          y="900"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="900"
          y="1000"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="900"
          y="1100"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="900"
          y="1200"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="900"
          y="1300"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="900"
          y="1400"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="900"
          y="1500"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="900"
          y="1600"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="900"
          y="1700"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="900"
          y="1800"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="900"
          y="1900"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="900"
          y="2000"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="900"
          y="2100"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="900"
          y="2200"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="900"
          y="2300"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1000"
          y="0"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1000"
          y="100"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1000"
          y="200"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1000"
          y="300"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1000"
          y="400"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1000"
          y="500"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1000"
          y="600"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1000"
          y="700"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1000"
          y="800"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1000"
          y="900"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1000"
          y="1000"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1000"
          y="1100"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1000"
          y="1200"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1000"
          y="1300"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1000"
          y="1400"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1000"
          y="1500"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1000"
          y="1600"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1000"
          y="1700"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1000"
          y="1800"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1000"
          y="1900"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1000"
          y="2000"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1000"
          y="2100"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1000"
          y="2200"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1000"
          y="2300"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1100"
          y="0"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1100"
          y="100"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1100"
          y="200"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1100"
          y="300"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1100"
          y="400"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1100"
          y="500"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1100"
          y="600"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1100"
          y="700"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1100"
          y="800"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1100"
          y="900"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1100"
          y="1000"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1100"
          y="1100"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1100"
          y="1200"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1100"
          y="1300"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1100"
          y="1400"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1100"
          y="1500"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1100"
          y="1600"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1100"
          y="1700"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1100"
          y="1800"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1100"
          y="1900"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1100"
          y="2000"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1100"
          y="2100"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1100"
          y="2200"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1100"
          y="2300"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1200"
          y="0"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1200"
          y="100"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1200"
          y="200"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1200"
          y="300"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1200"
          y="400"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1200"
          y="500"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1200"
          y="600"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1200"
          y="700"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1200"
          y="800"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1200"
          y="900"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1200"
          y="1000"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1200"
          y="1100"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1200"
          y="1200"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1200"
          y="1300"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1200"
          y="1400"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1200"
          y="1500"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1200"
          y="1600"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1200"
          y="1700"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1200"
          y="1800"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1200"
          y="1900"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1200"
          y="2000"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1200"
          y="2100"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1200"
          y="2200"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1200"
          y="2300"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1300"
          y="0"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1300"
          y="100"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1300"
          y="200"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1300"
          y="300"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1300"
          y="400"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1300"
          y="500"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1300"
          y="600"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1300"
          y="700"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1300"
          y="800"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1300"
          y="900"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1300"
          y="1000"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1300"
          y="1100"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1300"
          y="1200"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1300"
          y="1300"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1300"
          y="1400"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1300"
          y="1500"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1300"
          y="1600"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1300"
          y="1700"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1300"
          y="1800"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1300"
          y="1900"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1300"
          y="2000"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1300"
          y="2100"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1300"
          y="2200"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1300"
          y="2300"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1400"
          y="0"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1400"
          y="100"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1400"
          y="200"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1400"
          y="300"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1400"
          y="400"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1400"
          y="500"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1400"
          y="600"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1400"
          y="700"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1400"
          y="800"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1400"
          y="900"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1400"
          y="1000"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1400"
          y="1100"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1400"
          y="1200"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1400"
          y="1300"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1400"
          y="1400"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1400"
          y="1500"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1400"
          y="1600"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1400"
          y="1700"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1400"
          y="1800"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1400"
          y="1900"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1400"
          y="2000"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1400"
          y="2100"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1400"
          y="2200"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1400"
          y="2300"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1500"
          y="0"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1500"
          y="100"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1500"
          y="200"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1500"
          y="300"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1500"
          y="400"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1500"
          y="500"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1500"
          y="600"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1500"
          y="700"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1500"
          y="800"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1500"
          y="900"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1500"
          y="1000"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1500"
          y="1100"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1500"
          y="1200"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1500"
          y="1300"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1500"
          y="1400"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1500"
          y="1500"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1500"
          y="1600"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1500"
          y="1700"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1500"
          y="1800"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1500"
          y="1900"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1500"
          y="2000"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1500"
          y="2100"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1500"
          y="2200"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1500"
          y="2300"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1600"
          y="0"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1600"
          y="100"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1600"
          y="200"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1600"
          y="300"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1600"
          y="400"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1600"
          y="500"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1600"
          y="600"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1600"
          y="700"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1600"
          y="800"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1600"
          y="900"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1600"
          y="1000"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1600"
          y="1100"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1600"
          y="1200"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1600"
          y="1300"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1600"
          y="1400"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1600"
          y="1500"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1600"
          y="1600"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1600"
          y="1700"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1600"
          y="1800"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1600"
          y="1900"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1600"
          y="2000"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1600"
          y="2100"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1600"
          y="2200"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1600"
          y="2300"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1700"
          y="0"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1700"
          y="100"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1700"
          y="200"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1700"
          y="300"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1700"
          y="400"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1700"
          y="500"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1700"
          y="600"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1700"
          y="700"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1700"
          y="800"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1700"
          y="900"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1700"
          y="1000"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1700"
          y="1100"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1700"
          y="1200"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1700"
          y="1300"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1700"
          y="1400"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1700"
          y="1500"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1700"
          y="1600"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1700"
          y="1700"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1700"
          y="1800"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1700"
          y="1900"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1700"
          y="2000"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1700"
          y="2100"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1700"
          y="2200"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1700"
          y="2300"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1800"
          y="0"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1800"
          y="100"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1800"
          y="200"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1800"
          y="300"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1800"
          y="400"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1800"
          y="500"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1800"
          y="600"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1800"
          y="700"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1800"
          y="800"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1800"
          y="900"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1800"
          y="1000"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1800"
          y="1100"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1800"
          y="1200"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1800"
          y="1300"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1800"
          y="1400"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1800"
          y="1500"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1800"
          y="1600"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1800"
          y="1700"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1800"
          y="1800"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1800"
          y="1900"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1800"
          y="2000"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1800"
          y="2100"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1800"
          y="2200"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1800"
          y="2300"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1900"
          y="0"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1900"
          y="100"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1900"
          y="200"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1900"
          y="300"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1900"
          y="400"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1900"
          y="500"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1900"
          y="600"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1900"
          y="700"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1900"
          y="800"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1900"
          y="900"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1900"
          y="1000"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1900"
          y="1100"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1900"
          y="1200"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1900"
          y="1300"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1900"
          y="1400"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1900"
          y="1500"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1900"
          y="1600"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1900"
          y="1700"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1900"
          y="1800"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1900"
          y="1900"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1900"
          y="2000"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1900"
          y="2100"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1900"
          y="2200"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="1900"
          y="2300"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2000"
          y="0"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2000"
          y="100"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2000"
          y="200"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2000"
          y="300"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2000"
          y="400"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2000"
          y="500"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2000"
          y="600"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2000"
          y="700"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2000"
          y="800"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2000"
          y="900"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2000"
          y="1000"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2000"
          y="1100"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2000"
          y="1200"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2000"
          y="1300"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2000"
          y="1400"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2000"
          y="1500"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2000"
          y="1600"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2000"
          y="1700"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2000"
          y="1800"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2000"
          y="1900"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2000"
          y="2000"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2000"
          y="2100"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2000"
          y="2200"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2000"
          y="2300"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2100"
          y="0"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2100"
          y="100"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2100"
          y="200"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2100"
          y="300"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2100"
          y="400"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2100"
          y="500"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2100"
          y="600"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2100"
          y="700"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2100"
          y="800"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2100"
          y="900"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2100"
          y="1000"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2100"
          y="1100"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2100"
          y="1200"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2100"
          y="1300"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2100"
          y="1400"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2100"
          y="1500"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2100"
          y="1600"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2100"
          y="1700"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2100"
          y="1800"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2100"
          y="1900"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2100"
          y="2000"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2100"
          y="2100"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2100"
          y="2200"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2100"
          y="2300"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2200"
          y="0"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2200"
          y="100"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2200"
          y="200"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2200"
          y="300"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2200"
          y="400"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2200"
          y="500"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2200"
          y="600"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2200"
          y="700"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2200"
          y="800"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2200"
          y="900"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2200"
          y="1000"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2200"
          y="1100"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2200"
          y="1200"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2200"
          y="1300"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2200"
          y="1400"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2200"
          y="1500"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2200"
          y="1600"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2200"
          y="1700"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2200"
          y="1800"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2200"
          y="1900"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2200"
          y="2000"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2200"
          y="2100"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2200"
          y="2200"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2200"
          y="2300"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2300"
          y="0"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2300"
          y="100"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2300"
          y="200"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2300"
          y="300"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2300"
          y="400"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2300"
          y="500"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2300"
          y="600"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2300"
          y="700"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2300"
          y="800"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2300"
          y="900"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2300"
          y="1000"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2300"
          y="1100"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2300"
          y="1200"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2300"
          y="1300"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2300"
          y="1400"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2300"
          y="1500"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2300"
          y="1600"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2300"
          y="1700"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2300"
          y="1800"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2300"
          y="1900"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2300"
          y="2000"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2300"
          y="2100"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2300"
          y="2200"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2300"
          y="2300"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2400"
          y="0"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2400"
          y="100"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2400"
          y="200"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2400"
          y="300"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2400"
          y="400"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2400"
          y="500"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2400"
          y="600"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2400"
          y="700"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2400"
          y="800"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2400"
          y="900"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2400"
          y="1000"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2400"
          y="1100"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2400"
          y="1200"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2400"
          y="1300"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2400"
          y="1400"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2400"
          y="1500"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2400"
          y="1600"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2400"
          y="1700"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2400"
          y="1800"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2400"
          y="1900"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2400"
          y="2000"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2400"
          y="2100"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2400"
          y="2200"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2400"
          y="2300"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2500"
          y="0"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2500"
          y="100"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2500"
          y="200"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2500"
          y="300"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2500"
          y="400"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2500"
          y="500"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2500"
          y="600"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2500"
          y="700"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2500"
          y="800"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2500"
          y="900"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2500"
          y="1000"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2500"
          y="1100"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2500"
          y="1200"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2500"
          y="1300"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2500"
          y="1400"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2500"
          y="1500"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2500"
          y="1600"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2500"
          y="1700"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2500"
          y="1800"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2500"
          y="1900"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2500"
          y="2000"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2500"
          y="2100"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2500"
          y="2200"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2500"
          y="2300"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2600"
          y="0"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2600"
          y="100"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2600"
          y="200"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2600"
          y="300"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2600"
          y="400"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2600"
          y="500"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2600"
          y="600"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2600"
          y="700"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2600"
          y="800"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2600"
          y="900"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2600"
          y="1000"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2600"
          y="1100"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2600"
          y="1200"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2600"
          y="1300"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2600"
          y="1400"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2600"
          y="1500"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2600"
          y="1600"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2600"
          y="1700"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2600"
          y="1800"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2600"
          y="1900"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2600"
          y="2000"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2600"
          y="2100"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2600"
          y="2200"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2600"
          y="2300"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2700"
          y="0"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2700"
          y="100"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2700"
          y="200"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2700"
          y="300"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2700"
          y="400"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2700"
          y="500"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2700"
          y="600"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2700"
          y="700"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2700"
          y="800"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2700"
          y="900"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2700"
          y="1000"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2700"
          y="1100"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2700"
          y="1200"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2700"
          y="1300"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2700"
          y="1400"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2700"
          y="1500"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2700"
          y="1600"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2700"
          y="1700"
        >
          <g className="p-rotate" style="--r: 3">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2700"
          y="1800"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2700"
          y="1900"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2700"
          y="2000"
        >
          <g className="p-rotate" style="--r: 1">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2700"
          y="2100"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2700"
          y="2200"
        >
          <g className="p-rotate" style="--r: 0">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-tile"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          x="2700"
          y="2300"
        >
          <g className="p-rotate" style="--r: 2">
            <rect
              className="p-background"
              x="-21"
              y="-21"
              width="142"
              height="142"
              fill="url(#tile-background"
            ></rect>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-50, -50)"
              fill="none"
              strokeWidth="19"
            ></circle>
            <circle
              className="p-ring"
              cx="50"
              cy="50"
              r="50"
              transform="translate(50, 50)"
              fill="none"
              strokeWidth="19"
            ></circle>
          </g>
        </svg>
        <svg
          className="p-mask-svg"
          viewBox="0 0 200 100"
          x="0"
          y="0"
          width="2800"
          height="2400"
          preserveAspectRatio="none"
        >
          <rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
          <g className="p-mask-g">
            <path
              className="p-mask"
              d="M 100 0 h 200 V 100 h -200 C 100 100 100 78 100 50 C 100 22 100 0 100 0 Z"
            ></path>
          </g>
        </svg>
      </svg>
    </div>
  )
}

export default Background
