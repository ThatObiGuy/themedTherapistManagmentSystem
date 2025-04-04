import React from 'react';

const CloudIcon = () => {
  return (
    <svg width="200" height="66.67" transform="rotate(180, 0, 0)" xmlns="http://www.w3.org/2000/svg">
        <g fill='#D5F0FC'> {/* base of the cloud */}
            <ellipse cx="38.33" cy="13.33" rx="38.33" ry="13.33" />
            <ellipse cx="61.67" cy="20" rx="38.33" ry="20" />
            <circle cx="93.33" cy="28.33" r="28.33" />
            <ellipse cx="125" cy="20" rx="38.33" ry="20" />
            <ellipse cx="145" cy="13.33" rx="38.33" ry="13.33" />
        </g>
        <g fill='#FFFFFF'> {/* highlight of the cloud */}
            <ellipse cx="38.33" cy="16.67" rx="36.67" ry="11.67" />
            <ellipse cx="61.67" cy="23.33" rx="36.67" ry="18.33" />
            <circle cx="93.33" cy="33.33" r="26.67" />
            <ellipse cx="125" cy="23.33" rx="36.67" ry="18.33" />
            <ellipse cx="145" cy="16.67" rx="36.67" ry="11.67" />
        </g>
    </svg>
  );
};

export default CloudIcon;