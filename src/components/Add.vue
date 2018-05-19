<template>
  <div>
    <div class="field">
      <label class="label">Name</label>
      <div class="control has-icons-left">
        <input class="input" type="text" placeholder="How to peel a banana...">
        <span class="icon is-small is-left">
          <i class="material-icons">title</i>
        </span>
      </div>
    </div>

    <div class="field">
      <label class="label">Notes</label>
      <div class="control">
        <textarea class="textarea" placeholder="Add notes here"></textarea>
      </div>
    </div>

    <div class="field">
      <label class="label">URL</label>
      <div class="control has-icons-left">
        <input class="input" type="text" placeholder="https://...">
        <span class="icon is-small is-left">
          <i class="material-icons">insert_link</i>
        </span>
      </div>
    </div>

    <div class="control">
     <button class="button is-primary"><i class="material-icons">add_box</i>Add</button>
    </div>
  </div>
</template>
