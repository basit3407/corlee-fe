function SvgIcon2({ className }) {
  return (
    <div
      className={className}
      style={{
        cursor: "pointer",
      }}
      onClick={() => {
        window.open(localStorage.getItem("instagram"), "_blank");
      }}
    >
      <svg
        fill="none"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
      >
        <g
          id="Frame"
          xmlns="http://www.w3.org/2000/svg"
          data-node-id="1091:2344"
        >
          <g id="Frame 67" data-node-id="1091:2345">
            <path
              id="Vector_5"
              d="M3.6796,21.4798v-10.95c0,-1.82 0.72,-3.56 2.01,-4.84c1.28,-1.29 3.02,-2.01 4.84,-2.01h10.95c1.81,0 3.55,0.72 4.84,2.01c1.28,1.28 2,3.02 2,4.84v10.95c0,1.81 -0.72,3.55 -2,4.83c-1.29,1.29 -3.03,2.01 -4.84,2.01h-10.95c-1.82,0 -3.56,-0.72 -4.84,-2.01c-1.29,-1.28 -2.01,-3.02 -2.01,-4.83z"
              stroke="white"
              strokeWidth="1.5"
              data-node-id="1091:2346"
            />
            <path
              id="Vector_6"
              d="M15.9996,21.4798c1.45,0 2.85,-0.58 3.87,-1.61c1.03,-1.03 1.61,-2.42 1.61,-3.87c0,-1.45 -0.58,-2.84 -1.61,-3.87c-1.02,-1.03 -2.42,-1.6 -3.87,-1.6c-1.45,0 -2.84,0.57 -3.87,1.6c-1.03,1.03 -1.6,2.42 -1.6,3.87c0,1.45 0.57,2.84 1.6,3.87c1.03,1.03 2.42,1.61 3.87,1.61z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              data-node-id="1091:2347"
            />
            <path
              id="Vector_7"
              d="M23.5296,8.4898l0.01,-0.02"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              data-node-id="1091:2348"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default SvgIcon2;
