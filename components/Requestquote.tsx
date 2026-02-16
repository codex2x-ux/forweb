"use client";

import { Button } from "@/components/ui/button";

export default function Requestquote() {
  return (
    <Button
      onClick={() =>
        window.location.href = "/contact#contact-form"
      }
    >
      Request Quote
    </Button>
  );
}

