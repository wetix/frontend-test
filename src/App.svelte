<script>
  import { useForm, Field } from "svelte-reactive-form";
  import "./App.css";

  const form$ = useForm({ validateOnChange: true });
  const { control } = form$;
</script>

<Field {control} let:onChange let:errors>
  <input type="text" on:input={onChange} />
  <div class="errors">
    {#each errors as item}
      <div>{item}</div>
    {/each}
  </div>
</Field>

{JSON.stringify($form$)}

<style>
  .errors {
    color: red;
  }
</style>
