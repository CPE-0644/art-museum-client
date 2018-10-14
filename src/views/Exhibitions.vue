<template>
  <div>
    <div>
      Exhibition  
    </div>
    <ol>
      <li v-for="(exhibition, index) in exhibitions" :key="index">
        {{exhibition['name']}}  
        {{exhibition['start-date']}}
        {{exhibition['end-date']}}
        <ul>
          <li v-for="(artwork, index) in exhibition['display']" :key="index">
            {{artwork}}
          </li>
        </ul>
        {{exhibition['number-supported-users']}}
      </li>
    </ol>
  </div>
</template>

<script>
import { exhibitions } from '../assets/database/exhibitions.json';

export default {
  name: 'Exhibitions',
  data() {
    return {
      exhibitions
    };
  }
};
</script>

<style>
</style>
