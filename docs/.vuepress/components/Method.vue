<template>
  <div>
    <h6 class="pp" id="setName">{{ args.name }}</h6>
    <table>
      <thead>
        <tr>
          <th>PARAMETER</th>
          <th>TYPE</th>
          <th>DESCRIPTION</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ args.name }}</td>
          <td>
            <a :href="args.link" target="_blank">{{ args.type }}</a>
          </td>
          <td>{{ args.description }}</td>
        </tr>
      </tbody>
    </table>
    <p>Retuns <code>{{ args.returns }}</code></p>
    <p>Example:</p>
    <div class="vuepress-plugin-code-group">
      <div class="vuepress-plugin-code__header">
        <div class="vuepress-plugin-code__title">JavaScript</div>
        <button
          class="vuepress-plugin-code__copy-button"
          data-clipboard-text="const Command = new CommandBuilder().setName('ping');"
        >
          Copy
        </button>
      </div>
      <pre v-pre class="vuepress-plugin-code-container">
        <code class="lang-js">{{ args.example }}</code>
      </pre>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    args: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.vuepress-plugin-code-container {
  position: relative;
  margin: 1em 0;
  padding: 1em;
  border-radius: 4px;
  background-color: #f5f5f5;
  overflow: auto;
}

.vuepress-plugin-code-container code {
  font-family: var(--code-font-family);
  font-size: 14px;
  line-height: 1.5;
}
</style>
