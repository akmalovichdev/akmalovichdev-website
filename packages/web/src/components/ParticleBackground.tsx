export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-background-dark via-background-dark to-background-dark opacity-80" />
    </div>
  );
}
