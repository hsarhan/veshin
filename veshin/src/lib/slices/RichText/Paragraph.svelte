<script lang="ts">
    import type { RichTextComponentProps } from "@prismicio/svelte";
    import type { RTParagraphNode } from "@prismicio/client";
  
    let { children }: RichTextComponentProps<RTParagraphNode> = $props();
  </script>
  
  <div class="my-2 text-sm lg:text-base text-surface-800 dark:text-surface-100 text-pretty md:w-[90%]">
    {@render children?.()}
  </div>