function SvgIcon1({ className }) {
  return (
    <div
      className={className}
      onClick={() => {
        window.open(localStorage.getItem("facebook"), "_blank");
      }}
      style={{
        cursor: "pointer",
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
          id="Frame 65"
          xmlns="http://www.w3.org/2000/svg"
          data-node-id="1091:2342"
        >
          <path
            id="Vector_4"
            d="M24.3104,0.5998h-4.53c-2.01,0 -3.93,0.81 -5.35,2.26c-1.41,1.44 -2.21,3.4 -2.21,5.44v4.62h-4.54v6.16h4.54v12.32h6.05v-12.32h4.53l1.51,-6.16h-6.04v-4.62c0,-0.41 0.16,-0.8 0.44,-1.09c0.28,-0.29 0.67,-0.45 1.07,-0.45h4.53z"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            data-node-id="1091:2343"
          />
        </g>
      </svg>
    </div>
  );
}

export default SvgIcon1;
