<script>
const vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh.toFixed(3)}px`);

import '../app.css';

</script><slot></slot>
