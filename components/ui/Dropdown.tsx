'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface DropdownItem {
  href: string;
  label: string;
}

interface DropdownProps {
  label: string;
  items: DropdownItem[];
  id: string;
}

export function Dropdown({ label, items, id }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!isOpen) return;

      if (event.key === 'Escape') {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150); // 150ms delay prevents accidental close
  };

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        ref={buttonRef}
        className={cn(
          'text-gray-700 hover:text-blue-600 font-medium transition-colors',
          'flex items-center gap-1',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded',
          'min-h-[44px] px-2' // Touch target
        )}
        onClick={handleClick}
        onKeyDown={handleKeyPress}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={`dropdown-menu-${id}`}
      >
        {label}
        <svg
          className={cn(
            'w-4 h-4 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        id={`dropdown-menu-${id}`}
        className={cn(
          'absolute top-full left-0 mt-2',
          'bg-white rounded-lg shadow-lg border border-gray-100',
          'min-w-[200px] py-2',
          'transition-all duration-200 ease-out',
          'z-50',
          isOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible translate-y-2 pointer-events-none'
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="menu"
        aria-orientation="vertical"
      >
        {items.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'block px-4 py-3 text-gray-700',
              'hover:bg-blue-50 hover:text-blue-700',
              'transition-colors duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset',
              'min-h-[44px] flex items-center' // Touch target
            )}
            role="menuitem"
            tabIndex={isOpen ? 0 : -1}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
