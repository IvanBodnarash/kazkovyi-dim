export function HeroSvg() {
  return (
    <svg
      className="w-full h-24"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 100"
      preserveAspectRatio="none"
      width="1000"
      height="50"
    >
      <g transform="scale(1,-1)" transformOrigin="50%">
        <path
          d="M1000 0H0v52C62.49 28.01 125.02 4 250 4c250.03 0 249.97 96 500 96 124.98 0 187.51-24.01 250-48V0Z"
          fill="#9eb3c2"
        />
      </g>
    </svg>
  );
}

export function EventsSvg() {
  return (
    <div className="relative">
      <svg
        className="w-full h-25 absolute"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        width="1000"
        height="90"
      >
        <g transform="scale(1.5,1)" transformOrigin="12.5% 50%">
          <path
            d="M0 0v100c250 0 375-24 500-48 125 24 250 48 500 48V0H0Z"
            opacity=".5"
            fill="#9eb3c2"
          />
          <path
            d="M0 0v4c250 0 375 24 500 48C625 28 750 4 1000 4V0H0Z"
            fill="#9eb3c2"
          />
        </g>
      </svg>
    </div>
  );
}

export function AboutUsSvg() {
  return (
    <div className="relative">
      <svg
        className="w-full h-14 absolute scale-x-[1]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        width="1000"
        height="90"
      >
        <path d="M0 0v100S500 0 1000 4V0H0Z" fill="#e0dbdb"></path>
      </svg>
    </div>
  );
}

export function CharactersSvg() {
  return (
    <div className="relative">
      <svg
        className="absolute w-full h-14"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        width="1000"
        height="90"
      >
        <path d="M0 0v100S0 4 500 4s500 96 500 96V0H0Z" fill="#9eb3c2"></path>
      </svg>
    </div>
  );
}

export function ReviewsSvg() {
  return (
    <div className="relative">
      <svg
        className="w-full h-18 absolute"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        width="1000"
        height="90"
      >
        <g transform="scale(1.5,1)" transformOrigin="12.5% 50%">
          <path
            d="M0 0v100c250 0 375-24 500-48 125 24 250 48 500 48V0H0Z"
            opacity=".5"
            fill="#e0dbdb"
          />
          <path
            d="M0 0v4c250 0 375 24 500 48C625 28 750 4 1000 4V0H0Z"
            fill="#e0dbdb"
          />
        </g>
      </svg>
    </div>
  );
}

export function ServiceSvg() {
  return (
    <svg
      className="absolute w-full h-24"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 100"
      preserveAspectRatio="none"
      width="1000"
      height="90"
    >
      <g fill="#000">
        <path
          d="M1000 100C500 100 500 64 0 64V0h1000v100Z"
          opacity=".5"
          fill="#90a1b9"
        ></path>
        <path
          d="M1000 100C500 100 500 34 0 34V0h1000v100Z"
          opacity=".5"
          fill="#90a1b9"
        ></path>
        <path d="M1000 100C500 100 500 4 0 4V0h1000v100Z" fill="#90a1b9"></path>
      </g>
    </svg>
  );
}
