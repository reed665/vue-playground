<template>
  <div class="item">
    <i>
      <slot name="icon" />
    </i>

    <div class="details">
      <h3>
        <slot name="heading" />
      </h3>

      <slot />
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem;
  }

  i {
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    margin-top: 4px;
    width: 50px;
    height: 50px;
  }
}
</style>
