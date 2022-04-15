/** @format */

import React from 'react';

export default function UserPlaceHolder() {
  return (
    <div class='ui three doubling stackable cards'>
      <div class='ui card'>
        <div class='image'>
          <div class='ui placeholder'>
            <div class='square image'></div>
          </div>
        </div>
        <div class='content'>
          <div class='ui placeholder'>
            <div class='header'>
              <div class='very short line'></div>
              <div class='medium line'></div>
            </div>
            <div class='paragraph'>
              <div class='short line'></div>
            </div>
          </div>
        </div>
        <div class='extra content'>
          <div class='ui disabled primary button'>Voir le profil</div>
        </div>
      </div>
    </div>
  );
}
