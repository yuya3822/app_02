<template>
  <header class="flex align-items-center">
    <div id="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <h1>Rese</h1>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  position: absolute;
  top: 40px;
  left: 100px;
}

header h1 {
  margin-left: 20px;
  font-size: 32px;
  color: #305dff;
}

#hamburger {
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: 0.4s;
  background-color: #305dff;
  border-radius: 5px;
  box-shadow: 2px 2px 4px gray;
}

#hamburger span {
  position: absolute;
  left: 10px;
  display: block;
  height: 1px;
  background-color: #fff;
  transition: 0.8s;
}

#hamburger span:nth-of-type(1) {
  width: 10px;
  top: 13px;
}

#hamburger span:nth-of-type(2) {
  width: 20px;
  top: 20px;
}

#hamburger span:nth-of-type(3) {
  width: 5px;
  top: 27px;
}
</style>