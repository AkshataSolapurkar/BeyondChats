export function GridBackground() {
    return (
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Main gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#a2b8fb] via-[#badafb] to-[#ddc6fc]" />

{/* Circular gradient at bottom left */}
<div className="absolute rounded-full -left-1/4 -bottom-1/4 w-3/4 h-3/4 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#dfc1fd] via-[#dee3f9]/50 to-transparent opacity-70" />

{/* Bright shine effect from top right */}
<div className="absolute rounded-full inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent" />

{/* Subtle #72bdff half-moon shape at bottom right */}
<div className="absolute rounded-full inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#72bdff]/30 via-transparent to-transparent" />

  
        {/* Grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='500' height='500' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M96,95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9z' fill='rgba(255,255,255,0.1)' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "300px 300px",
          }}
        />
      </div>
    )
  }
  
  