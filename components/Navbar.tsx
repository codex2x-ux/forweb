<nav className="w-full border-b border-neutral-800 bg-black">
  <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

    <h1 className="text-xl md:text-2xl font-semibold text-white">
      VRM IT
    </h1>

    {/* Desktop Menu */}
    <div className="hidden md:flex gap-10 text-neutral-300">
      <a href="/">Home</a>
      <a href="/services">Services</a>
      <a href="/pricing">Pricing</a>
      <a href="/contact">Contact</a>
    </div>

    {/* Mobile Hamburger */}
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="md:hidden text-white text-2xl"
    >
      ☰
    </button>
  </div>

  {/* Mobile Dropdown */}
  {isOpen && (
    <div className="md:hidden px-6 pb-6 space-y-4 text-neutral-300">
      <a href="/" className="block">Home</a>
      <a href="/services" className="block">Services</a>
      <a href="/pricing" className="block">Pricing</a>
      <a href="/contact" className="block">Contact</a>
    </div>
  )}
</nav>
