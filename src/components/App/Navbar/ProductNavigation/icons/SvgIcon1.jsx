function SvgIcon1({ className, showprod }) {
  return (
    <div
      className={className}
      style={showprod ? { transform: "rotate(180deg)" } : {}}
    >
      <svg
        fill="none"
        viewBox="0 0 12 12"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
      >
        <path
          id="Vector_6"
          d="M6.3977,9.3978c-0.22,0.2197 -0.576,0.2197 -0.795,0l-5.735,-5.7349c-0.22,-0.2197 -0.22,-0.5758 0,-0.7954l0.265,-0.2652c0.22,-0.2197 0.576,-0.2197 0.795,0l5.072,5.0719l5.072,-5.0719c0.22,-0.2197 0.576,-0.2197 0.796,0l0.265,0.2652c0.22,0.2196 0.22,0.5757 0,0.7954z"
          fill="black"
          fillRule="evenodd"
          xmlns="http://www.w3.org/2000/svg"
          data-node-id="I1135:6154;992:9338"
        />
      </svg>
    </div>
  );
}

export default SvgIcon1;
