<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
        <form action="">
          <h1>Name Checklist</h1>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
        </form>
        </div>
        <div class="col-md-4">
        <form action="">
          <h1>Name Checklist</h1>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
        </form>
        </div>
        <div class="col-md-4">
        <form action="">
          <h1>Name Checklist</h1>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
        </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      allProducts: 'checklist/getAllChecklist'
    })
  },
  methods: {
    ...mapActions({
      actionGetAllChecklist: 'checklist/getAllChecklist',
      actionAddChecklist: 'checklist/addChecklist',
      actionDelChecklist: 'checklist/delChecklist',
      actionRenameItem: 'checklist/renameItem',
      actionGetItemById: 'checklist/getItemById',
      actionAddItem: 'checklist/addItem',
      actionUpdateStatusItem: 'checklist/updateStatusItem',
      actiondeleteItem: 'checklist/deleteItem'
    })
  }
}
</script>
