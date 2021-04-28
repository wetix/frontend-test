<script lang="ts">
  import { useForm, Field } from "svelte-reactive-form";
  import "./App.css";

  const form$ = useForm<{ text: string }>({ validateOnChange: true });
  const { control } = form$;
</script>

<Field {control} name="text" let:onChange let:errors>
  <input type="text" on:input={onChange} />
  <div class="errors">
    {#each errors as item}
      <div>{item}</div>
    {/each}
  </div>
</Field>

{JSON.stringify($form$)}

<style lang="scss">
  .errors {
    color: red;
  }
</style>
