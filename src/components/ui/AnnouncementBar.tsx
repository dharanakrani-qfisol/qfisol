'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './button';

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-primary text-primary-foreground py-2 text-sm">
      <div className="container-standard section-gutter">
        <div className="flex items-center justify-center text-center relative">
          <p>
            🎉 Book your <strong>free consultation</strong> today and get clarity in your business numbers
          </p>
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-0 top-1/2 -translate-y-1/2 text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => setIsVisible(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Dismiss announcement</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

