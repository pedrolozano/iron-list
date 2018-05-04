/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE
The complete set of authors may be found at http://polymer.github.io/AUTHORS
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS
*/
import '@polymer/polymer/polymer-legacy.js';

import '../../iron-list.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <iron-list id="list" mutable-data="">
      <template>
        <div>[[item.index]]</div>
      </template>
    </iron-list>
`,

  is: 'mutable-list',

  get list() {
    return this.$.list;
  }
});
