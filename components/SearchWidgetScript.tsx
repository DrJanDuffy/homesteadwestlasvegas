'use client';

import { useEffect } from 'react';

export default function SearchWidgetScript() {
  useEffect(() => {
    const searchButton = document.getElementById('HomeSearchBtnWidget');
    if (searchButton) {
      searchButton.onclick = function(event: MouseEvent) {
        const searchText = (document.getElementById('SearchTextWidget') as HTMLInputElement)?.value;
        const errorElement = document.querySelector('#WidgetSearchValidationError') as HTMLElement;
        
        if (searchText === '' || typeof(searchText) === 'undefined') {
          if (errorElement) {
            errorElement.style.display = 'block';
          }
          event.preventDefault();
        } else {
          if (errorElement) {
            errorElement.style.display = 'none';
          }
        }
      };
    }
  }, []);

  return null;
}

