<template>

<div>
  <el-table
    :data="collections"
    stripe="true"
    style="width: 100%">
    <el-table-column
      fixed
      prop="name"
      label="Name"
      width="150">
    </el-table-column>
    <el-table-column
      prop="type"
      label="Type"
      width="120">
    </el-table-column>
    <el-table-column
      prop="description"
      label="Description"
      width= "500">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Address"
      width= "300">
    </el-table-column>
    <el-table-column
      prop="contact_name"
      label="Contact name"
      width="120">
    </el-table-column>
    <el-table-column
      prop="contact_phone"
      label="Phone Number"
      width="120">
    </el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
  props: ['collections'],
  name: 'CollectionList'
};
</script>