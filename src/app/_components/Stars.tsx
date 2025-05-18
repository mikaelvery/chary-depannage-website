type StarProps = {
  filled?: boolean;
  half?: boolean;
};

const Star = ({ filled = false, half = false }: StarProps) => {
  if (half) {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <defs>
          <linearGradient id="halfGrad">
            <stop offset="50%" stopColor="#F7B603" />
            <stop offset="50%" stopColor="white" />
          </linearGradient>
        </defs>
        <path
          fill="url(#halfGrad)"
          stroke="#F7B603"
          strokeWidth="2"
          d="M12 17.27L18.18 21 16.54 13.97 
            22 9.24l-7.19-.61L12 2 9.19 8.63 
            2 9.24l5.46 4.73L5.82 21z"
        />
      </svg>
    );
  }

  return (
    <svg
      className="w-5 h-5"
      fill={filled ? "#F7B603" : "white"}
      stroke="#F7B603"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path 
        d="M12 17.27L18.18 21 16.54 13.97 
          22 9.24l-7.19-.61L12 2 9.19 8.63 
          2 9.24l5.46 4.73L5.82 21z" 
      />
    </svg>
  );
};

export default Star;
