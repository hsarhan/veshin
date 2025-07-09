<script lang="ts">
    import type { RichTextComponentProps } from "@prismicio/svelte";
    import type { RTHeading2Node } from "@prismicio/client";
  
    let { children }: RichTextComponentProps<RTHeading2Node> = $props();
  </script>
  
  <div class="h2 font-display text-3xl text-primary-800-200">
    {@render children?.()}
  </div>